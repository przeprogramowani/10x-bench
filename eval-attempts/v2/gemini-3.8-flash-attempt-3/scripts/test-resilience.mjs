import { getYouTubeVideos } from '../src/data/youtube.ts';
import { getOpanujAIPodcast } from '../src/data/podcast-opanuj-ai.ts';
import { getPrzeprogramowaniPodcast } from '../src/data/podcast-przeprogramowani.ts';

console.log('=== TEST ODPORNOŚCI I KONTROLOWANEJ AWARII ŹRÓDEŁ DANYCH ===\n');

async function testResilience() {
  let passed = true;

  // 1. Ścieżka normalna (Live fetch)
  console.log('1. Test ścieżki normalnej (Live fetch ze źródeł zewnętrznych):');

  try {
    const ytLive = await getYouTubeVideos();
    console.log(`  - YouTube: status=${ytLive.status}, isFallback=${ytLive.isFallback}, items=${ytLive.items.length}`);
    if (ytLive.status !== 'live' || ytLive.items.length === 0) {
      console.warn('    ⚠️ YouTube nie zwrócił statusu live');
    } else {
      console.log(`    ✅ Najnowszy film: "${ytLive.items[0]?.title}" (${ytLive.items[0]?.publishedAt})`);
    }

    const opanujLive = await getOpanujAIPodcast();
    console.log(`  - Opanuj.AI: status=${opanujLive.status}, isFallback=${opanujLive.isFallback}, items=${opanujLive.items.length}`);
    if (opanujLive.status !== 'live' || opanujLive.items.length === 0) {
      console.warn('    ⚠️ Opanuj.AI nie zwrócił statusu live');
    } else {
      console.log(`    ✅ Najnowszy odcinek: "${opanujLive.items[0]?.title}" (${opanujLive.items[0]?.publishedAt})`);
    }

    const przeprogLive = await getPrzeprogramowaniPodcast();
    console.log(`  - Przeprogramowani: status=${przeprogLive.status}, isFallback=${przeprogLive.isFallback}, items=${przeprogLive.items.length}`);
    if (przeprogLive.status !== 'live' || przeprogLive.items.length === 0) {
      console.warn('    ⚠️ Przeprogramowani nie zwrócił statusu live');
    } else {
      console.log(`    ✅ Najnowszy odcinek: "${przeprogLive.items[0]?.title}" (${przeprogLive.items[0]?.publishedAt})`);
    }
  } catch (err) {
    console.error('❌ Błąd podczas testu ścieżki normalnej:', err);
    passed = false;
  }

  // 2. Kontrolowana awaria źródła Opanuj.AI
  console.log('\n2. Kontrolowana symulacja awarii źródła Opanuj.AI (forceFail=true):');
  try {
    const opanujFail = await getOpanujAIPodcast({ forceFail: true });
    console.log(`  - Wynik awarii Opanuj.AI:`);
    console.log(`    * status: "${opanujFail.status}" (oczekiwano "cached") -> ${opanujFail.status === 'cached' ? '✅' : '❌'}`);
    console.log(`    * isFallback: ${opanujFail.isFallback} (oczekiwano true) -> ${opanujFail.isFallback === true ? '✅' : '❌'}`);
    console.log(`    * liczba odcinków z cache: ${opanujFail.items.length} -> ${opanujFail.items.length > 0 ? '✅' : '❌'}`);
    console.log(`    * komunikat błędu: "${opanujFail.errorMessage}"`);
    console.log(`    * adres źródła zachowany: "${opanujFail.sourceUrl}" -> ${opanujFail.sourceUrl ? '✅' : '❌'}`);

    if (opanujFail.status !== 'cached' || !opanujFail.isFallback || opanujFail.items.length === 0) {
      passed = false;
    }
  } catch (err) {
    console.error('❌ Moduł rzucił nieobsłużony wyjątek zamiast obsłużyć awarię:', err);
    passed = false;
  }

  // 3. Kontrolowana awaria źródła YouTube
  console.log('\n3. Kontrolowana symulacja awarii źródła YouTube (forceFail=true):');
  try {
    const ytFail = await getYouTubeVideos({ forceFail: true });
    console.log(`  - Wynik awarii YouTube:`);
    console.log(`    * status: "${ytFail.status}" (oczekiwano "cached") -> ${ytFail.status === 'cached' ? '✅' : '❌'}`);
    console.log(`    * isFallback: ${ytFail.isFallback} (oczekiwano true) -> ${ytFail.isFallback === true ? '✅' : '❌'}`);
    console.log(`    * liczba filmów z cache: ${ytFail.items.length} -> ${ytFail.items.length > 0 ? '✅' : '❌'}`);
    console.log(`    * komunikat błędu: "${ytFail.errorMessage}"`);
    console.log(`    * adres źródła zachowany: "${ytFail.sourceUrl}" -> ${ytFail.sourceUrl ? '✅' : '❌'}`);

    if (ytFail.status !== 'cached' || !ytFail.isFallback || ytFail.items.length === 0) {
      passed = false;
    }
  } catch (err) {
    console.error('❌ Moduł rzucił nieobsłużony wyjątek zamiast obsłużyć awarię:', err);
    passed = false;
  }

  // 4. Kontrolowana awaria źródła Przeprogramowani Podcast
  console.log('\n4. Kontrolowana symulacja awarii źródła Przeprogramowani Podcast (forceFail=true):');
  try {
    const przeprogFail = await getPrzeprogramowaniPodcast({ forceFail: true });
    console.log(`  - Wynik awarii Przeprogramowani:`);
    console.log(`    * status: "${przeprogFail.status}" (oczekiwano "cached") -> ${przeprogFail.status === 'cached' ? '✅' : '❌'}`);
    console.log(`    * isFallback: ${przeprogFail.isFallback} (oczekiwano true) -> ${przeprogFail.isFallback === true ? '✅' : '❌'}`);
    console.log(`    * liczba odcinków z cache: ${przeprogFail.items.length} -> ${przeprogFail.items.length > 0 ? '✅' : '❌'}`);
    console.log(`    * komunikat błędu: "${przeprogFail.errorMessage}"`);
    console.log(`    * adres źródła zachowany: "${przeprogFail.sourceUrl}" -> ${przeprogFail.sourceUrl ? '✅' : '❌'}`);

    if (przeprogFail.status !== 'cached' || !przeprogFail.isFallback || przeprogFail.items.length === 0) {
      passed = false;
    }
  } catch (err) {
    console.error('❌ Moduł rzucił nieobsłużony wyjątek zamiast obsłużyć awarię:', err);
    passed = false;
  }

  console.log('\n======================================================');
  if (passed) {
    console.log('✅ Wszystkie testy odporności i obsługi awarii zakończone SUKCESEM.');
  } else {
    console.error('❌ Wykryto błędy w obsłudze odporności na awarie.');
    process.exit(1);
  }
}

testResilience();
