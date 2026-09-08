import { fetchOpanujAiEpisodes } from './src/data/sources/opanujAi.ts';
import { fetchPrzeprogramowaniPodcastEpisodes } from './src/data/sources/przeprogramowaniPodcast.ts';
import { fetchYoutubeVideos } from './src/data/sources/youtube.ts';

async function runTests() {
  console.log('=== TEST 1: LIVE RETRIEVAL FOR ALL THREE SOURCES ===\n');

  // 1. Opanuj AI
  console.log('Testing Opanuj.AI live fetch...');
  const opanujResult = await fetchOpanujAiEpisodes();
  console.log(`[Opanuj.AI] Status: ${opanujResult.meta.status}, Items: ${opanujResult.data.length}, Stale: ${opanujResult.meta.isStale}`);
  console.log(`Sample item: "${opanujResult.data[0]?.title}" (${opanujResult.data[0]?.displayDate})`);
  if (!opanujResult.data.length || !opanujResult.data[0].sourceUrl) {
    throw new Error('Opanuj.AI test failed: missing items or sourceUrl');
  }

  // 2. Przeprogramowani Podcast
  console.log('\nTesting Przeprogramowani Podcast live fetch...');
  const ppResult = await fetchPrzeprogramowaniPodcastEpisodes();
  console.log(`[Przeprogramowani Podcast] Status: ${ppResult.meta.status}, Items: ${ppResult.data.length}, Stale: ${ppResult.meta.isStale}`);
  console.log(`Sample item: "${ppResult.data[0]?.title}" (${ppResult.data[0]?.displayDate})`);
  if (!ppResult.data.length || !ppResult.data[0].sourceUrl) {
    throw new Error('Przeprogramowani Podcast test failed: missing items or sourceUrl');
  }

  // 3. YouTube
  console.log('\nTesting YouTube live fetch...');
  const ytResult = await fetchYoutubeVideos();
  console.log(`[YouTube] Status: ${ytResult.meta.status}, Items: ${ytResult.data.length}, Stale: ${ytResult.meta.isStale}`);
  console.log(`Sample item: "${ytResult.data[0]?.title}" (${ytResult.data[0]?.displayDate})`);
  if (!ytResult.data.length || !ytResult.data[0].sourceUrl) {
    throw new Error('YouTube test failed: missing items or sourceUrl');
  }

  console.log('\n=== TEST 2: CONTROLLED FAILURE EXPERIMENT ===\n');

  console.log('Simulating controlled network failure for Opanuj.AI...');
  const failedOpanuj = await fetchOpanujAiEpisodes({ simulateFailure: true });
  console.log(`[Simulated Failure: Opanuj.AI] Status: ${failedOpanuj.meta.status}, Stale: ${failedOpanuj.meta.isStale}`);
  console.log(`Error captured: "${failedOpanuj.meta.error}"`);
  console.log(`Fallback items preserved: ${failedOpanuj.data.length} items`);
  if (failedOpanuj.meta.status !== 'stale-fallback' || !failedOpanuj.meta.isStale || failedOpanuj.data.length === 0) {
    throw new Error('Controlled failure experiment did not recover gracefully to stale-fallback');
  }

  console.log('\nSimulating controlled network failure for YouTube...');
  const failedYt = await fetchYoutubeVideos({ simulateFailure: true });
  console.log(`[Simulated Failure: YouTube] Status: ${failedYt.meta.status}, Stale: ${failedYt.meta.isStale}`);
  console.log(`Error captured: "${failedYt.meta.error}"`);
  console.log(`Fallback items preserved: ${failedYt.data.length} items`);
  if (failedYt.meta.status !== 'stale-fallback' || !failedYt.meta.isStale || failedYt.data.length === 0) {
    throw new Error('Controlled failure experiment did not recover gracefully to stale-fallback');
  }

  console.log('\n>>> ALL DATA RETRIEVAL AND RESILIENCE TESTS PASSED! <<<');
}

runTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
