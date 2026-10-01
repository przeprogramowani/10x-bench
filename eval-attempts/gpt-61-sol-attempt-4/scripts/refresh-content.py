"""Refresh public publication metadata. Requires Python 3.9+ and curl; no API keys."""
import concurrent.futures
import datetime
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
VIDEO_SOURCE = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw'
PODCAST_SOURCE = 'https://przeprogramowani.pl/podcast'


def fetch(url):
    return subprocess.run(['curl', '--fail', '--location', '--silent', '--show-error',
                           '--max-time', '30', '--retry', '2', '--user-agent', 'Mozilla/5.0', url],
                          check=True, capture_output=True).stdout


class EpisodeParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.current = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        href = a.get('href', '')
        if tag == 'a' and href.startswith('https://podcasters.spotify.com/pod/show/') and '/episodes/' in href:
            self.current = {'url': href, 'text': ''}
        elif tag == 'img' and self.current is not None:
            self.current['title'] = a.get('alt', '').strip()

    def handle_data(self, data):
        if self.current is not None:
            self.current['text'] += data + ' '

    def handle_endtag(self, tag):
        if tag == 'a' and self.current is not None:
            item = self.current
            if item.get('title'):
                duration = re.search(r'\d\d:\d\d:\d\d', item.pop('text'))
                item['duration'] = duration.group(0) if duration else ''
                item['series'] = 'Opanuj.AI' if '/opanujai/' in item['url'] else 'ft. Gość'
                item['id'] = item['url'].split('-')[-1]
                item['image'] = '/images/podcast-ai.jpg' if item['series'] == 'Opanuj.AI' else '/images/podcast-guest.jpg'
                self.items.append(item)
            self.current = None


def refresh():
    with concurrent.futures.ThreadPoolExecutor() as pool:
        video_request = pool.submit(fetch, VIDEO_SOURCE)
        podcast_request = pool.submit(fetch, PODCAST_SOURCE)
        feed = ET.fromstring(video_request.result())
        parser = EpisodeParser()
        parser.feed(podcast_request.result().decode('utf-8'))
    ns = {'a': 'http://www.w3.org/2005/Atom', 'y': 'http://www.youtube.com/xml/schemas/2015'}
    videos = []
    for entry in feed.findall('a:entry', ns)[:9]:
        video_id = entry.find('y:videoId', ns).text
        if not re.fullmatch(r'[A-Za-z0-9_-]{11}', video_id):
            raise ValueError('Unexpected video ID in feed')
        title = entry.find('a:title', ns).text
        category = 'Shorts' if '#' in title else 'Rozmowy' if 'demo day' in title.lower() else 'Praktyka'
        videos.append({'id': video_id, 'title': title, 'url': f'https://www.youtube.com/watch?v={video_id}',
                       'publishedAt': entry.find('a:published', ns).text,
                       'image': f'/images/video-{video_id}.jpg', 'category': category})
    if not videos or len(parser.items) < 2:
        raise ValueError('Source content was empty or changed format. Existing content preserved.')
    with tempfile.TemporaryDirectory() as temp:
        staging = Path(temp)

        def thumbnail(video):
            try:
                image = fetch(f'https://i.ytimg.com/vi/{video["id"]}/maxresdefault.jpg')
            except subprocess.CalledProcessError:
                image = fetch(f'https://i.ytimg.com/vi/{video["id"]}/hqdefault.jpg')
            if not image.startswith(b'\xff\xd8'):
                raise ValueError('Invalid thumbnail response; existing content preserved.')
            (staging / Path(video['image']).name).write_bytes(image)

        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(thumbnail, videos))
        for image in staging.iterdir():
            shutil.copy2(image, ROOT / 'public' / 'images' / image.name)
    metadata = {'updatedAt': datetime.datetime.now(ZoneInfo('Europe/Warsaw')).date().isoformat(),
                'sources': {'videos': VIDEO_SOURCE, 'episodes': PODCAST_SOURCE}}
    for name, data in [('videos', videos), ('episodes', parser.items), ('content-meta', metadata)]:
        path = ROOT / 'src' / 'data' / f'{name}.json'
        temporary = path.with_suffix('.tmp')
        temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        temporary.replace(path)
    print(f'Updated {len(videos)} videos and {len(parser.items)} episodes. Run npm run build to publish the snapshot.')


if __name__ == '__main__':
    refresh()
