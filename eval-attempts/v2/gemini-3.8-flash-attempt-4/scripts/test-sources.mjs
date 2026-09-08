import { fetchYoutubeVideos } from '../src/data/sources/youtube.ts';
import { fetchOpanujAiEpisodes } from '../src/data/sources/opanuj-ai.ts';
import { fetchPrzeprogramowaniEpisodes } from '../src/data/sources/przeprogramowani-podcast.ts';

async function test() {
  console.log('--- Testing Live Fetch ---');
  const yt = await fetchYoutubeVideos();
  console.log('YouTube:', { status: yt.status, count: yt.data.length, isStale: yt.isStale });
  if (yt.data.length > 0) {
    console.log('YT sample:', yt.data[0].title, yt.data[0].formattedDate, yt.data[0].url);
  }

  const ai = await fetchOpanujAiEpisodes();
  console.log('Opanuj.AI:', { status: ai.status, count: ai.data.length, isStale: ai.isStale });
  if (ai.data.length > 0) {
    console.log('AI sample:', ai.data[0].title, ai.data[0].formattedDate, ai.data[0].url);
  }

  const prz = await fetchPrzeprogramowaniEpisodes();
  console.log('Przeprogramowani:', { status: prz.status, count: prz.data.length, isStale: prz.isStale });
  if (prz.data.length > 0) {
    console.log('Prz sample:', prz.data[0].title, prz.data[0].formattedDate, prz.data[0].url);
  }

  console.log('\n--- Testing Controlled Failure ---');
  const ytFail = await fetchYoutubeVideos({ forceFail: true });
  console.log('YouTube (Forced Fail):', {
    status: ytFail.status,
    count: ytFail.data.length,
    isStale: ytFail.isStale,
    error: ytFail.errorMessage
  });
}

test();
