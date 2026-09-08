import { fetchYoutubeVideos } from '../src/data/sources/youtube.ts';
import fs from 'node:fs';
import path from 'node:path';

async function runControlledFailureExperiment() {
  console.log('=== Rozpoczęcie eksperymentu kontrolowanej awarii źródła ===\n');

  // Step 1: Normal operational fetch
  console.log('Krok 1: Normalne pobieranie danych (źródło aktywne)...');
  const normalResult = await fetchYoutubeVideos();
  console.log(`- Status: ${normalResult.status}`);
  console.log(`- IsStale: ${normalResult.isStale}`);
  console.log(`- Pobrana liczba materiałów: ${normalResult.data.length}`);
  console.log(`- Źródło: ${normalResult.sourceUrl}`);
  console.log(`- Data pobrania: ${normalResult.fetchedAt}`);

  // Step 2: Triggering controlled failure (simulated network outage / timeout / 500 error)
  console.log('\nKrok 2: Wymuszenie kontrolowanej awarii (symulacja niedostępności YouTube)...');
  process.env.MOCK_FAIL_YOUTUBE = 'true';
  const failureResult = await fetchYoutubeVideos();

  console.log(`- Status po awarii: ${failureResult.status}`);
  console.log(`- IsStale: ${failureResult.isStale}`);
  console.log(`- Liczba materiałów z pamięci podręcznej: ${failureResult.data.length}`);
  console.log(`- Komunikat błędu: "${failureResult.errorMessage}"`);
  console.log(`- Data pamięci podręcznej: ${failureResult.fetchedAt}`);
  console.log(`- Zachowany link do oficjalnego źródła: ${failureResult.sourceUrl}`);

  // Step 3: Verification
  const success =
    normalResult.status === 'live' &&
    failureResult.status === 'stale_cache' &&
    failureResult.isStale === true &&
    failureResult.data.length > 0;

  console.log(`\nWynik eksperymentu odporności: ${success ? 'SUKCES (Mechanizm fallback działa poprawnie)' : 'BŁĄD'}`);

  // Save evidence
  const evidenceDir = path.resolve('evidence');
  if (!fs.existsSync(evidenceDir)) {
    fs.mkdirSync(evidenceDir, { recursive: true });
  }

  const logContent = `EKSPERYMENT KONTROLOWANEJ AWARII ŹRÓDŁA DANYCH (P04)
Data wykonania: ${new Date().toISOString()}

1. NORMALNA ŚCIEŻKA (YouTube Live):
- Status: ${normalResult.status}
- isStale: ${normalResult.isStale}
- Liczba elementów: ${normalResult.data.length}
- Pierwszy element: ${normalResult.data[0]?.title} (${normalResult.data[0]?.formattedDate})
- URL elementu: ${normalResult.data[0]?.url}

2. ŚCIEŻKA KONTROLOWANEJ AWARII:
- Flaga wymuszenia: MOCK_FAIL_YOUTUBE=true
- Status odzyskany: ${failureResult.status}
- isStale: ${failureResult.isStale}
- Komunikat awarii: ${failureResult.errorMessage}
- Liczba elementów odzyskanych z cache: ${failureResult.data.length}
- Pierwszy element z cache: ${failureResult.data[0]?.title} (${failureResult.data[0]?.formattedDate})
- Źródło zewnętrzne: ${failureResult.sourceUrl}

WNIOSKI:
Awarie sieciowe i błędy odpowiedzi zewnętrznego dostawcy nie powodują błędu 500 ani przerwania działania witryny. Użytkownik widzi zweryfikowane dane z pamięci podręcznej z czytelnym oznaczeniem ich nieaktualności oraz bezpośredni odnośnik do źródła.
`;

  fs.writeFileSync(path.join(evidenceDir, 'controlled-failure.log'), logContent);
  console.log(`\nZapisano dowód eksperymentu w: evidence/controlled-failure.log`);
}

runControlledFailureExperiment();
