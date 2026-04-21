# Rankingi modeli AI kłamią. Kompletny przewodnik po wyborze modelu i narzędzia do kodowania z AI

![Ilustracja otwierajaca ebook: bohater w skafandrze kosmicznym kieruje sie przez chaos rankingow AI w strone wlasnych evali](/assets/10xdevs/ebook-evals/hero-overview.webp)

---

## Spis treści

- [Wstęp: Dlaczego ten przewodnik powstał](#wstęp-dlaczego-ten-przewodnik-powstał)
- [Rozdział 1: Czym są benchmarki i dlaczego zawodzą](#rozdział-1-czym-są-benchmarki-i-dlaczego-zawodzą)
- [Rozdział 2: Przegląd benchmarków](#rozdział-2-przegląd-benchmarków)
- [Rozdział 3: Co tak naprawdę jest mierzone](#rozdział-3-co-tak-naprawdę-jest-mierzone)
- [Rozdział 4: Systemy agentowe i harnessy](#rozdział-4-systemy-agentowe-i-harnessy)
- [Rozdział 5: Jak developerzy korzystają z AI - i co z tym zrobić](#rozdział-5-jak-developerzy-korzystają-z-ai--i-co-z-tym-zrobić)
- [Rozdział 6: Frameworki i narzędzia ewaluacyjne](#rozdział-6-frameworki-i-narzędzia-ewaluacyjne)
- [Rozdział 7: Testowanie narzędzi AI na własnym codebase](#rozdział-7-testowanie-narzędzi-ai-na-własnym-codebase)
- [Rozdział 8: Koszty, szybkość i wydajność](#rozdział-8-koszty-szybkość-i-wydajność)
- [Rozdział 9: Framework decyzyjny](#rozdział-9-framework-decyzyjny)
- [Rozdział 10: Playbook wdrożeniowy](#rozdział-10-playbook-wdrożeniowy)
- [Podsumowanie: Co dalej](#podsumowanie-co-dalej)
- [Źródła](#źródła)

---

### Szybka ściągawka: Kluczowe pojęcia

| Pojęcie | Definicja |
|------|-----------|
| **pass@1** | Prawdopodobieństwo poprawnego rozwiązania zadania przy pierwszej próbie |
| **pass@k** | Prawdopodobieństwo uzyskania przynajmniej jednego poprawnego rozwiązania w k próbach - mierzy potencjał najlepszego przypadku |
| **pass^k** | Prawdopodobieństwo poprawnego rozwiązania wszystkich k kolejnych prób - mierzy niezawodność |
| **G-pass@k** | Uogólniony pass@k wymagający wielu sukcesów z k prób - łączy pass@1 i pass^k |
| **Construct validity** | Czy benchmark faktycznie mierzy to, co deklaruje |
| **Ecological validity** | Czy warunki benchmarku odzwierciedlają rzeczywiste warunki użytkowania |
| **Contamination** | Gdy problemy benchmarkowe przenikają do danych treningowych modelu, zawyżając wyniki |
| **Harness/Scaffold** | Warstwa infrastruktury (narzędzia, zarządzanie kontekstem, obsługa błędów) obudowująca model w celu stworzenia agenta |
| **Prawo Goodharta** | „Gdy miara staje się celem, przestaje być dobrą miarą" |
| **Pareto frontier** | Zbiór opcji, w których nie można poprawić jednego wymiaru (np. jakości) bez pogorszenia innego (np. kosztu) |
| **LLM-as-judge** | Używanie jednego modelu językowego do oceny wyników innego |
| **TTFT** | Time to first token - opóźnienie przed rozpoczęciem odpowiedzi modelu |
| **TPS** | Tokens per second - szybkość generowania wyników modelu |

---

## Wstęp: Dlaczego ten przewodnik powstał

Prawdopodobnie już korzystasz z narzędzi AI do kodowania. Może wypróbowałeś Claude Code, Cursor albo GitHub Copilot. Może zerknąłeś na jakiś ranking i wybrałeś model na podstawie tego, kto miał najwyższy wynik. A może,  bądźmy szczerzy, nie do końca wiesz, co ten wynik właściwie oznaczał.

Nie jesteś w tym odosobniony. Ekosystem AI do kodowania rozwija się szybko, a zagadnienie ewaluacji rozwiązań rozwija się razem z nim. Benchmarki powstają, saturują się, ulegają kontaminacji i są wycofywane w cyklach 12-18 miesięcy. Pojawiają się nowe rankingi z nowymi metrykami, które rzekomo naprawiają wszystko, co poprzednie robiły źle. Dostawcy cytują liczby, które brzmią imponująco, ale okazuje się, że mierzą coś zupełnie innego niż to, na czym ci zależy.

Ten przewodnik jest dla developerów, którzy chcą przebić się przez ten szum. Nie dla naukowców publikujących artykuły. Nie dla inżynierów ML trenujących modele. Dla developerów - ludzi, którzy dostarczają kod i potrzebują podejmować świadome decyzje o tym, z jakich narzędzi AI korzystać, jak je oceniać i kiedy wyniki na rankingach mówią ci coś prawdziwego, a kiedy coś mylącego.

Oto zarys tego, co omówimy: Najpierw dobrze zrozumiemy, co benchmarki faktycznie mierzą i dlaczego zawodzą (Rozdziały 1-3). Następnie przyjrzymy się ocenianym systemom agentowym i temu, jak prawdziwi developerzy z nich korzystają (Rozdziały 4-5). Na tej podstawie przejdziemy do praktyki - frameworki ewaluacyjne, budowanie własnych ewaluacji, zarządzanie kosztami (Rozdziały 6-8). Na koniec złożymy wszystko w całość za pomocą frameworków decyzyjnych i konkretnego playbooka wdrożeniowego (Rozdziały 9-10).

Możesz czytać ten przewodnik od początku do końca, żeby poznać temat od podstaw, albo przeskoczyć do rozdziału, który odpowiada twojej bieżącej potrzebie. Jeśli jesteś tu, bo musisz wybrać model w przyszłym tygodniu, zacznij od Rozdziału 9. Jeśli jesteś tu, bo jakiś wynik benchmarku cię zaskoczył i chcesz zrozumieć dlaczego, zacznij od Rozdziału 1.

Przez cały przewodnik przewija się jedna teza: **publiczne benchmarki mówią ci o ogólnych możliwościach; tylko własne ewaluacje mówią ci o wydajności na twoich zadaniach.** Pod koniec będziesz wiedzieć, jak robić jedno i drugie - krytycznie interpretować publiczne benchmarki i budować własne ewaluacje, które faktycznie odpowiadają na pytanie, na którym ci zależy.

---

## Rozdział 1: Czym są benchmarki i dlaczego zawodzą

Za każdym razem, gdy czytasz nagłówek w stylu „Model X osiąga 80% na SWE-bench", patrzysz na wynik benchmarku. Ale ta liczba wiele ukrywa. Ten rozdział wyjaśnia, czym benchmark właściwie jest, dlaczego nieuchronnie się degradują i jak je czytać, żeby nie dać się zmylić. To fundament, na którym opiera się cała reszta tego przewodnika.

### Czym właściwie jest benchmark

Benchmark to trzy rzeczy połączone razem:

1. **Zestaw zadań** - kolekcja problemów ze znanymi rozwiązaniami (np. „napraw ten issue na GitHubie", „napisz funkcję, która robi X")
2. **Metryka** - sposób oceniania wyników (np. pass@1, resolve rate, ELO)
3. **Protokół ewaluacji** - zasady określające, jak model wchodzi w interakcję z zadaniem (np. izolowany kontener Docker, maksymalnie 150 kroków, brak dostępu do internetu)

Zmień którykolwiek z tych elementów, a otrzymasz inne wyniki. Dlatego zdanie „Model X osiąga 80% na SWE-bench" jest niekompletne - nie mówi, który wariant SWE-bench, jaki harness, jaki limit kroków ani jaka metryka.

### Po co istnieją benchmarki

Benchmarki rozwiązują realny problem: **jak porównywać rzeczy, które generują niedeterministyczne, otwarte wyniki?** Nie da się porównać dwóch uzupełnień kodu tak, jak porównuje się dwa skompilowane pliki binarne. Benchmarki zapewniają:

- **Ustandaryzowane porównanie** - te same zadania, te same zasady, porównywalne liczby
- **Śledzenie postępu** - czy modele stają się lepsze z czasem?
- **Decyzje o wyborze** - jakiego modelu/agenta powinienem użyć do mojej pracy?
- **Rozliczalność** - czy deklaracje dostawców wytrzymują kontrolowane testy?

Bez benchmarków każde twierdzenie o możliwościach AI w kodowaniu to marketing. Z kiepskimi benchmarkami to marketing z liczbami.

### Dlaczego benchmarki zawodzą: Pięć problemów strukturalnych

To nie są przypadki brzegowe ani okazjonalne problemy. Są strukturalne - wbudowane w sposób działania benchmarków. Zrozumienie ich to najważniejsza rzecz, jaką możesz zrobić, żeby lepiej interpretować dane ewaluacyjne AI.

#### Problem 1: Prawo Goodharta

> „Gdy miara staje się celem, przestaje być dobrą miarą."

W momencie, gdy benchmark zaczyna mieć znaczenie komercyjne, wszystko zaczyna sprzyjać optymalizacji pod niego. Modele trenuje się na danych zbliżonych do benchmarku. Scaffoldy agentów dostraja się pod wzorce specyficzne dla benchmarku. Pozycje na rankingach wpływają na decyzje inwestycyjne. Benchmark przestaje mierzyć ogólne możliwości i zaczyna mierzyć optymalizację pod konkretny benchmark.

**Realny przykład:** OpenAI przestało raportować wyniki SWE-bench Verified w lutym 2026, powołując się na saturację, kontaminację i dowody na to, że konkretne modele frontier (GPT-5.3, Claude Opus 4.5, Gemini 3 Flash Preview) potrafiły odtworzyć z pamięci "gold-patche".

#### Problem 2: Trafność konstruktu (construct validity)

Benchmark mierzy **konstrukt** - abstrakcyjną cechę jak „umiejętność kodowania". Ale zadania benchmarkowe to konkretna, skończona próba. Pytanie brzmi: czy wyniki na tych 500 zadaniach przewidują wyniki na zadaniach, na których faktycznie ci zależy?

Często nie. FeatureBench (ICLR 2026) wykazał, że Claude 4.5 Opus osiąga 74,4% na naprawach błędów w SWE-bench, ale tylko 11,0% na rozwoju nowych funkcjonalności. SWE-bench mierzy „czy potrafi naprawiać błędy" - nie „czy potrafi budować nowe rzeczy". Przez dwa lata branża utożsamiała jedno z drugim, bo SWE-bench był jedynym dostępnym benchmarkiem.

**Luka construct validity to najniebezpieczniejszy tryb awarii benchmarku**, bo daje złudzenie posiadania dobrych danych, gdy ich nie masz.

#### Problem 3: Kontaminacja danych

Benchmarki używają stałych zestawów zadań. Modele trenuje się na danych z całego internetu. Zadania benchmarkowe przenikają do danych treningowych. Wyniki rosną. Zaufanie spada.

Poniższa tabela pokazuje, jak powszechna jest kontaminacja w głównych benchmarkach. Kluczowa obserwacja: to nie jest „być może" - to zmierzone, z konkretnymi procentami:

| Benchmark | Dowody kontaminacji |
|-----------|----------------------|
| HumanEval | Spadki pass@1 o 19-48 punktów procentowych na przekształconych wariantach (EvoEval, marzec 2024 - przed modelami rozumującymi jak o1) |
| SWE-bench Verified | Dosłowne odtwarzanie złotych patchy; wycofany z raportowania w lutym 2026 |
| QuixBugs | 100% współczynnik wycieku |
| MBPP | ~65% instancji testowych z publicznych stron internetowych |

Każdy statyczny benchmark w końcu zostanie skontaminowany. Pytanie brzmi kiedy, nie czy.

**Strategie łagodzenia kontaminacji, które działają:**
1. **Problemy z bramką czasową** (LiveCodeBench) - problemy powstały po dacie odcięcia treningu
2. **Zamknięte bazy kodu** (SWE-bench Pro) - nie mogą pojawić się w danych treningowych
3. **Ciągła rotacja** - wymiana zestawów ewaluacyjnych co kwartał
4. **Warianty oparte na mutacjach** - przekształcanie istniejących problemów w celu wykrycia zapamiętywania

#### Problem 4: Trafność ekologiczna (ecological validity)

Benchmarki testują modele w kontrolowanych środowiskach. Prawdziwe programowanie jest chaotyczne. Luka między warunkami benchmarku a warunkami rzeczywistymi to ecological validity.

**Co benchmarki zwykle eliminują:**
- Niejednoznaczne wymagania (benchmarki mają jasne specyfikacje; prawdziwe tickety nie)
- Istniejący dług techniczny (benchmarki używają czystych baz kodu)
- Koordynacja wieloosobowa (benchmarki testują samodzielnych agentów)
- Presja czasu i przerywanie pracy
- Zmieniające się wymagania w trakcie realizacji

Świetnie, chociaż w sposób niezamierzony, ilustruje to badanie **SWE-CI** (marzec 2026, arXiv:2603.03823): nienadzorowane agenty pracujące nad produkcyjnymi repozytoriami przez miesiące powodowały regresje w 75% przypadków. Media szybko podchwyciły wynik - nagłówki w stylu „75% agentów AI psuje działający kod" obiegły branżowe serwisy. Ale żaden zespół nie wdraża AI w ten sposób - w pełni autonomicznie, bez code review, przez miesiące. Wynik mówi o ryzykach braku nadzoru, nie o możliwościach AI pod ludzkim nadzorem.

#### Problem 5: Redukcjonizm metryczny

Pojedyncza liczba - 58% resolve rate, 1561 ELO, 80% pass@1 - sprowadza złożoną, wielowymiarową rzeczywistość do jednej metryki. Traci się:

- **Niezawodność:** Model z pass@1 = 90% rozwiązuje wszystkie 5 kroków wieloetapowego workflow tylko w 59% przypadków (0,9⁵ = 0,59 - to prosta matematyka potęgowania). Pass@1 i pass^k opowiadają przeciwne historie.
- **Koszt:** Na SWE-rebench (marzec 2026) Claude Code rozwiązuje 58,4% przy $4,91/zadanie. Step-3.5-Flash rozwiązuje 59,6% przy $0,14/zadanie. Zbliżona jakość, 35-krotna różnica w koszcie.
- **Rozkład:** Średnia wydajność ukrywa, czy model jest równomiernie przyzwoity, czy genialny w łatwych zadaniach i fatalny w trudnych.
- **Wymiary jakości:** Funkcja, która przechodzi wszystkie testy, ale ma podatności SQL injection, uzyskuje 100%.

![Ilustracja pokazujaca, jak pojedyncza metryka zaslania koszt, niezawodnosc i jakosc](/assets/10xdevs/ebook-evals/ch1-metric-reductionism.webp)

### Cykl życia benchmarku

Zrozumienie tego cyklu zapobiega inwestowaniu czasu w benchmarki, które już umierają:

```plaintext
1. Nowy benchmark startuje → rozróżnia modele
2. Modele się poprawiają → wyniki gromadzą się na górze (saturacja)
3. Dane treningowe wyciekają → kontaminacja zawyża wyniki
4. Społeczność traci zaufanie → benchmark wycofany lub zastąpiony
5. Następca startuje z mechanizmami anty-kontaminacji → cykl się powtarza
```

Ten cykl trwa 12-18 miesięcy. HumanEval (2021) → zsaturowany do 2024. SWE-bench Verified (2024) → wycofany z raportowania przez OpenAI w lutym 2026. Planuj rotację benchmarków w każdej długoterminowej strategii ewaluacji.

![Ilustracja cyklu zycia benchmarku jako orbitalnej trasy od startu do utraty zaufania i pojawienia sie nastepcy](/assets/10xdevs/ebook-evals/ch1-benchmark-lifecycle-orbit.webp)

### Co to oznacza dla ciebie

Jeśli wybierasz modele lub agentów na podstawie wyników benchmarkowych:
- **Nigdy nie opieraj się na jednym benchmarku.** Trianguluj na podstawie 3+ benchmarków mierzących różne konstrukty.
- **Sprawdź status kontaminacji.** Czy ten benchmark nadal różnicuje, czy został już zoptymalizowany?
- **Patrz na wyniki skorygowane o koszty.** Sama dokładność bez kontekstu kosztowego jest niekompletna.
- **Preferuj pass^k nad pass@1**, jeśli potrzebujesz niezawodności w produkcji.
- **Uruchamiaj własne ewaluacje** na własnych zadaniach. Publiczne benchmarki mówią o ogólnych możliwościach. Tylko własne ewaluacje mówią o wydajności na twoich zadaniach.

#### Kluczowe wnioski
> - Benchmark to trzy rzeczy: zestaw zadań, metryka i protokół. Zmiana któregokolwiek zmienia wynik.
> - Pięć problemów strukturalnych (prawo Goodharta, trafność konstruktu, kontaminacja, trafność ekologiczna, redukcjonizm metryczny) gwarantuje, że każdy benchmark degraduje się z czasem.
> - Luka trafności konstruktu (construct validity) - gdy benchmark mierzy coś innego niż myślisz - to najniebezpieczniejszy tryb awarii.
> - Nigdy nie polegaj na pojedynczej liczbie benchmarkowej. Trianguluj na podstawie wielu benchmarków, sprawdzaj kontaminację i uwzględniaj koszty.
> - Publiczne benchmarki mierzą ogólne możliwości. Tylko twoje własne ewaluacje mierzą wydajność na twoich zadaniach.

---

## Rozdział 2: Przegląd benchmarków
*Najbardziej przydatny dla: Tech leadów oceniających, którym benchmarkom ufać przy porównywaniu narzędzi*

Uzbrojony w wiedzę o problemach strukturalnych z Rozdziału 1, możesz teraz spojrzeć na stan benchmarków z pełną świadomością. Ten rozdział mapuje to, co istnieje w marcu 2026 - co wciąż jest przydatne, co zostało wycofane i gdzie pojawiają się ciekawe nowe prace. Potraktuj to jak poradnik podróżnika: które benchmarki zasługują na twoją uwagę, a które już przeszły na emeryturę.

### Spektrum dojrzałości (marzec 2026)

Ta tabela to najbardziej przydatna referencja do podejmowania decyzji, które benchmarki cytować lub ignorować. Zwróć uwagę na kolumnę „Implikacja" - to twój punkt działania:

| Status | Benchmarki | Implikacja |
|--------|-----------|-------------|
| **Zsaturowane/Wycofane** | HumanEval (99%), MBPP (~95%) | Bezużyteczne do wyboru modelu; wszystkie modele frontier blisko ideału |
| **Skontaminowane** | SWE-bench Verified (wycofany z raportowania OpenAI, luty 2026) | Wyniki niewiarygodne; nie cytuj przy podejmowaniu decyzji |
| **Aktywne i różnicujące** | SWE-bench Pro (~23%), SWE-rebench, Aider Polyglot (~80%) | Używaj tych; znaczące różnice między modelami, aktywnie aktualizowane (marzec 2026) |
| **Nieaktualne, ale cytowane** | LiveCodeBench (ostatnia aktualizacja kwiecień 2025), BigCodeBench (ostatnia aktualizacja marzec 2025) | Wartościowa metodologia, ale dane mają 11-12 miesięcy; nie polegaj na nich dla modeli wydanych po połowie 2025 |
| **Wschodzące** | FeatureBench (11%), Terminal-Bench 2.0, MCP-AgentBench, ReliabilityBench | Obserwuj; mierzą to, czego obecne benchmarki nie obejmują |

![Ilustracja pokazujaca spektrum dojrzalosci benchmarkow od wycofanych po wschodzace](/assets/10xdevs/ebook-evals/ch2-maturity-spectrum.webp)

### Benchmarki warte śledzenia

![Ilustracja mapujaca rozne rodziny benchmarkow uzywanych do oceny narzedzi AI dla programistow](/assets/10xdevs/ebook-evals/ch2-benchmark-landscape.webp)

#### Do naprawiania błędów i rozwiązywania issue'ów

**SWE-bench Pro** (Scale AI) `🟢 Aktywny` - Obecny złoty standard ewaluacji agentów. Jeśli masz śledzić tylko jeden benchmark dla możliwości agentów, to powinien być ten.
- Prawdziwe issue'y z GitHuba wymagające zmian w wielu plikach (średnio 107 linii w 4,1 plikach)
- Ochrona przed kontaminacją: zamknięte bazy kodu, weryfikacja ludzka
- Czołówka (stan na luty 2026): Auggie CLI 51,8%, Claude Opus 4.5 + SWE-Agent 45,9%. Od tego czasu zgłoszono wyższe wyniki (GPT-5.3-Codex 56,8%, Opus 4.6 + WarpGrep v2 57,5%).
- Słabość: drogi w uruchomieniu, ograniczony do konkretnych typów repozytoriów
- v2.0.0 (luty 2026) zaktualizował scaffolding i limity tokenów

**SWE-rebench** `🟢 Aktywny` - Pierwszy benchmark, który śledzi koszty obok jakości. Tu szukasz odpowiedzi nie tylko na „jak dobry", ale „jak dobry za każdego dolara".
- Raportuje rzeczywiste dolary za zadanie, umożliwiając porównanie kosztów skorygowanych o jakość
- Źródło danych o efektywności kosztowej w całym tym przewodniku

#### Budowanie nowych funkcjonalności

**FeatureBench** (ICLR 2026) `🟡 Wschodzący` - Pierwszy benchmark mierzący zdolność budowania nowych feature'ów zamiast naprawiania bugów.
- 200 zadań z 24 repozytoriów wymagających implementacji kompletnych funkcjonalności od zera
- Claude 4.5 Opus: 11% (vs 74% na SWE-bench) - ujawnia 63-punktową lukę między „naprawianiem" a „budowaniem"
- Zadania obejmują: integrację API, nowe endpointy, komponenty UI, pipeline'y danych
- Kluczowa wartość: demaskuje fałszywe poczucie bezpieczeństwa płynące z wysokich wyników SWE-bench

#### Niezawodność i spójność

**TAU-bench / TAU2-bench** `🟡 Wschodzący` - Niezawodność przy wielokrotnych próbach. Kluczowy dla każdego, kto myśli o wdrożeniu produkcyjnym.
- Wprowadza pass^k: GPT-4o udaje się <50% na próbę, pass^8 <25%
- TAU2-bench dodaje dual-control (symulowany użytkownik również podejmuje działania)

**ReliabilityBench** `🟡 Wschodzący` - Testy obciążeniowe zbliżone do produkcji.
- Zunifikowany framework R(k,ε,λ): mierzy spójność (czy agent daje ten sam wynik wielokrotnie), odporność (czy radzi sobie z perturbacjami inputu) i tolerancję na błędy (czy odzyskuje się po awariach)
- Komplementarny do pass^k - daje wielowymiarowy obraz niezawodności

#### Zadania terminalowe i CLI

**Terminal-Bench 2.0** `🟢 Aktywny` - Ewaluacja agentów operujących w terminalu/CLI.
- 89 zadań obejmujących: inżynierię oprogramowania, bezpieczeństwo, data science, ML
- Czołówka: Forge Code + Claude Opus 4.6 i Forge Code + GPT-5.4 na poziomie 81,8%
- Framework Harbor do ewaluacji w kontenerach wdrażanych w chmurze
- Kluczowa wartość: jedyny benchmark testujący agenty w realistycznym środowisku terminalowym

#### Używanie narzędzi (MCP/tool use)

**MCP-AgentBench / MCP-Bench** `🟡 Wschodzący` - Ewaluacja zdolności korzystania z narzędzi przez protokół MCP.
- Testuje: wybór właściwego narzędzia, precyzję parametrów, koordynację wielokrokową
- Zaskakujące odkrycie: modele open-source (Qwen3-235B-A22B) mogą przewyższać GPT-4o w używaniu narzędzi (64,7% vs 27,8%)
- Kluczowa wartość: istotny w miarę wzrostu adopcji MCP w ekosystemie narzędzi developerskich

#### Preferencje z rzeczywistego użytkowania

**Copilot Arena** `🟢 Aktywny` - Dane preferencyjne z rzeczywistych sesji programistycznych.
- 4,5M sugestii, 11,6 tys. głosów w 103 językach przez rozszerzenie VS Code
- Kluczowe odkrycie: typ zadania powoduje 31% wariancję wydajności vs 6,6% z wyboru języka

**10x-bench** ([10xbench.ai](https://10xbench.ai)) `🟢 Aktywny` - Benchmark jednorazowego „vibe codingu". Testuje, czy model potrafi zbudować kompletną, gotową do wdrożenia stronę internetową z jednego prompta, bez iteracyjnego ulepszania.
- Zadanie z rzeczywistego świata: zbuduj wielostronicową stronę w Astro/React/Tailwind z prawdziwą treścią, SEO i wdrożeniem na Cloudflare
- 10 kryteriów (7 automatycznych + 3 oceniane przez ludzi), 14 modeli, 74+ prób
- Wyłapuje tryby awarii specyficzne dla LLM: zmyślone odcinki podcastów, rickrollowe identyfikatory YouTube, sfabrykowane biogramy zespołu
- Śledzony koszt per model - umożliwia porównanie efektywności kosztowej obok jakości
- Czołówka: GPT-5.3-Codex 85,0%, Claude Opus 4.6 75,5%, Claude Sonnet 4.6 71,0%
- Open source: [github.com/przeprogramowani/10x-bench](https://github.com/przeprogramowani/10x-bench)
- Demonstruje podejście „zbuduj własną ewaluację", które ten przewodnik promuje (zobacz [studium przypadku w Rozdziale 7](#case-study-10x-bench--building-a-practical-custom-benchmark))

#### Długie horyzonty czasowe

**RE-Bench** (METR) `🟡 Wschodzący` - Rozszerzone horyzonty czasowe. Ujawnia coś ważnego o tym, kiedy pomoc AI przestaje pomagać.
- Agenty pokonują ludzi 4-krotnie przy budżecie 2 godzin, ludzie pokonują agenty 2-krotnie przy 32 godzinach
- Ujawnia punkt przejścia, w którym ludzki nadzór staje się kluczowy

### Luka wielojęzyczna

Oto weryfikacja rzeczywistości, która dotyczy większości zespołów: najrygorystyczniejsze benchmarki są wyłącznie pythonowe. Jeśli twój zespół pisze w TypeScript, Kotlin, Swift lub Rust, danych jest niewiele. Ta tabela pokazuje, które benchmarki zapewniają znaczące wielojęzyczne pokrycie:

| Benchmark | Języki |
|-----------|-----------|
| Aider Polyglot | C++, Go, Java, JS, Python, Rust (6) |
| Copilot Arena | 103 języki (dane z rzeczywistego użytkowania) |
| SWE-bench Pro | Wielojęzyczny |
| MultiPL-E | 22 języki (przetłumaczony HumanEval/MBPP - obawy o kontaminację) |

Jeśli twój zespół pisze w TypeScript lub Rust, najpopularniejsze benchmarki dają ograniczony, choć nie zerowy sygnał. Zdolności kodowania transferują się między językami - model, który dobrze radzi sobie z Pythonem, zazwyczaj dobrze radzi sobie też z TypeScriptem. Ale to nadal proxy, nie bezpośredni pomiar. Własne ewaluacje w twoim stacku dają znacznie silniejszy sygnał niż ekstrapolacja z benchmarków pythonowych.

### Migawka rankingowa (marzec 2026)

Te liczby są podane dla kontekstu, nie jako kryteria decyzyjne. Po Rozdziale 1 wiesz, dlaczego surowa liczba z rankingu to dopiero początek rozmowy:


**SWE-bench Verified (przed zaprzestaniem raportowania przez OpenAI, luty 2026):**

| Model | Wynik |
|---|---|
| Claude Opus 4.6 | 80,8% |
| Gemini 3 Flash | 78,0% |
| Claude Opus 4.5 | 72,0% |
| GPT-5.3 | ~65-70% (ostatnie zgłoszone wyniki OpenAI przed wycofaniem się z raportowania) |

*Uwaga: OpenAI przestało raportować wyniki SWE-bench Verified w lutym 2026, powołując się na saturację i kontaminację, i poparło SWE-bench Pro jako następcę.*

**SWE-bench Pro - standaryzowany scaffold (Scale AI SEAL, marzec 2026):**

| Model | Wynik |
|---|---|
| Claude Opus 4.5 | 45,9% (±3,6) |
| Claude Sonnet 4.5 | 43,6% (±3,6) |
| Gemini 3 Pro Preview | 43,3% (±3,6) |
| GPT-5.3 (High) | 41,8% (±3,5) |
| GPT-5.3-Codex | 41,0% (±3,6) |
| Claude Haiku 4.5 | 39,5% (±3,6) |
| Qwen3 Coder 480B | 38,7% (±3,6) |
| MiniMax 2.1 | 36,8% (±3,6) |
| DeepSeek V3.2 | 15,6% (±2,6) |

**SWE-bench Pro - systemy agentowe (własny scaffold):**

| System | Wynik |
|---|---|
| Blitzy | 66,5% (self-reported, marzec 2026) |
| WarpGrep v2 (Opus 4.6) | 57,5% |
| GPT-5.3-Codex CLI | 57,0% |
| Claude Code (Opus 4.5) | 55,4% |
| Auggie (Opus 4.5) | 51,8% |
| Cursor (Opus 4.5) | 50,2% |

*Kluczowa obserwacja: ten sam model (Claude Opus 4.5) zdobywa 45,9% ze standaryzowanym scaffoldem, ale 55,4% w Claude Code. Scaffold robi ~10pp różnicy.*

**Terminal-Bench 2.0:**

| System / Model | Wynik |
|---|---|
| Forge Code (Claude Opus 4.6) | 81,8% |
| Forge Code (GPT-5.4) | 81,8% |
| Forge Code (Gemini 3.1 Pro) | 78,4% |
| Droid (GPT-5.3-Codex) | 77,3% |
| Codex CLI | 62,9% |

**Chatbot Arena Coding** (arena.ai/leaderboard, dane marzec 2026):

| # | Model | ELO |
|---|-------|-----|
| 1 | Claude Opus 4.6 (thinking) | 1545 |
| 2 | Claude Opus 4.6 | 1549 |
| 3 | Claude Sonnet 4.6 | 1523 |
| 4 | GPT-5.4 High (Codex) | 1457 |
| 5 | Gemini 3.1 Pro Preview | 1455 |
| 6 | Grok 4.20 beta | - |
| 7 | GLM-5 (Zhipu) | 1445 |
| 8 | GPT-5.3 | - |
| 9 | GLM-4.7 (Zhipu) | 1439 |
| 10 | Gemini 3 Pro | 1438 |

#### Kluczowe wnioski
> - Na marzec 2026 aktywnie utrzymywane i różnicujące benchmarki to: SWE-bench Pro, SWE-rebench, Terminal-Bench 2.0 i Copilot Arena. LiveCodeBench, BigCodeBench i Aider Polyglot nie były aktualizowane od 4-12 miesięcy - mają wartościową metodologię, ale nie polegaj na nich dla modeli wydanych w 2026.
> - SWE-rebench wyróżnia się systematycznym śledzeniem kosztów obok jakości - raportuje rzeczywiste dolary za zadanie, co czyni go szczególnie przydatnym do wyboru modeli z uwzględnieniem kosztów.
> - FeatureBench to jeden z ważniejszych wschodzących benchmarków - ujawnił 63-punktową lukę między zdolnością naprawiania błędów a budowania nowych funkcjonalności, wymiar wcześniej ignorowany przez branżę.
> - Większość rygorystycznych benchmarków dotyczy wyłącznie Pythona. Jeśli twój zespół używa innych języków, publiczne benchmarki dają ograniczony sygnał, a własne ewaluacje są jeszcze ważniejsze.


---

## Rozdział 3: Co tak naprawdę jest mierzone
*Najbardziej przydatny dla: developerów i tech leadów, którzy chcą zrozumieć, co kryje się za liczbami*

Wyniki benchmarków to podsumowania. Pojedyncza liczba - 58%, 1561 ELO, 80% pass@1 - sprowadza coś złożonego do czegoś prostego. Ten rozdział pokazuje, co kryje się pod tymi liczbami. Zrozumienie metryk na tym poziomie zmienia sposób, w jaki interpretujesz wyniki i - co ważniejsze - jak zaprojektujesz własne ewaluacje w Rozdziale 7.

### Metryki wynikowe

To nagłówkowe liczby, które widzisz na rankingach. Poniższa tabela przedstawia najważniejsze - zwróć szczególną uwagę na kolumnę „Pułapka do uniknięcia", bo każda metryka ma charakterystyczny sposób na wprowadzenie w błąd:

| Metryka | Co mierzy | Kiedy używać | Pułapka do uniknięcia |
|--------|-----------------|-------------|---------------|
| **Pass@1** | Sukces przy jednej próbie | Szybkie porównanie modeli | Zawyża niezawodność |
| **Pass@k** | Przynajmniej 1 z k się udaje | Pułap możliwości | Ukrywa niespójność |
| **Pass^k** | WSZYSTKIE k prób się udaje | Niezawodność produkcyjna | Trudniejsze do osiągnięcia niż się wydaje |
| **G-Pass@k** | Stabilność rozumowania w k próbach | Spójność przy zmienności | Nowsza, mniej ugruntowana |
| **Resolve Rate** | % w pełni rozwiązanych zadań | Ewaluacja agentów end-to-end | Nie uwzględnia częściowego postępu |

**Rozbieżność pass@k vs pass^k to najważniejszy wniosek o metrykach w tym przewodniku.** Przy k=10 pass@k zbliża się do 100%, podczas gdy pass^k zapada się w kierunku 0%. Opowiadają przeciwne historie. Jeśli wdrażasz agenta w produkcyjne workflow, pass^k to twoja prawdziwa metryka - odpowiada na pytanie „czy to zadziała niezawodnie za każdym razem", a nie „czy to zadziała przynajmniej raz".

**Nieobciążony estymator pass@k:** `pass@k = E[1 - C(n-c, k) / C(n, k)]` gdzie n = całkowita liczba próbek, c = poprawne próbki.

### Metryki kosztowe

Sama dokładność bez kontekstu kosztowego jest niekompletna. Dwóch agentów może mieć niemal identyczne współczynniki rozwiązywania, ale drastycznie różne ceny. Poniższa tabela definiuje metryki kosztowe warte śledzenia:

| Metryka | Definicja |
|--------|-----------|
| **Koszt za zadanie** | Rzeczywiste $ wydane na próbę rozwiązania problemu |
| **Koszt za poprawne rozwiązanie** | koszt_za_zadanie / współczynnik_rozwiązywania - prawdziwa metryka wartości |
| **Tokeny za zadanie** | Suma tokenów wejściowych + wyjściowych (niezależna od dostawcy) |
| **Efektywność tokenowa** | Przydatne tokeny wyjściowe / łączna liczba zużytych tokenów |

**Koszt skorygowany o jakość** tu zaczynają się schody. Spójrz na kolumnę „Koszt/poprawne rozwiązanie" w tej tabeli - to liczba, która naprawdę ma znaczenie przy planowaniu budżetu (pełna analiza kosztów w [Rozdziale 8](#rozdział-8-koszty-szybkość-i-wydajność)):

| Agent/Model | Resolve rate | Koszt/zadanie | Koszt/poprawne rozwiązanie* |
|-------------|-------------|--------------|---------------------------|
| Claude Opus 4.6 | 65,3% | $1,12 | **$1,71** |
| GPT-5.3 medium | 64,4% | $0,62 | **$0,96** |
| GLM-5 | 62,8% | $0,76 | **$1,21** |
| GPT-5.4 medium | 62,8% | $0,63 | **$1,00** |
| Gemini 3.1 Pro Preview | 62,3% | $0,66 | **$1,06** |
| DeepSeek V3.2 | 60,9% | $0,75 | **$1,23** |
| Junie (JetBrains) | 59,5% | $0,31 | **$0,52** |
| Step-3.5-Flash | 59,6% | $0,14 | **$0,23** |
| Claude Code | 58,4% | $4,91 | **$8,41** |
| MiniMax M2.5 | 54,6% | $0,13 | **$0,24** |

*Koszt/poprawne rozwiązanie = koszt/zadanie ÷ resolve rate. Źródło: [SWE-rebench](https://swe-rebench.com), marzec 2026, 57 problemów.*

Step-3.5-Flash i MiniMax M2.5 rozwiązują ~55-60% zadań za $0,13-0,14/zadanie. Claude Code rozwiązuje 58,4% za $4,91/zadanie - 35-krotna różnica w koszcie przy zbliżonej jakości. To jest niewidoczne, jeśli patrzysz tylko na dokładność.

![Ilustracja pokazujaca roznice miedzy kosztem a prawdziwa wartoscia poprawnego rozwiazania](/assets/10xdevs/ebook-evals/ch3-cost-vs-value.webp)

### Metryki procesowe (dla ewaluacji agentów)

Gdy oceniasz systemy agentowe, nie same modele, te metryki opisują, jak agent pracuje, a nie tylko czy uzyskuje poprawną odpowiedź:

| Metryka | Co rejestruje |
|--------|-----------------|
| Dokładność wywołań narzędzi | Właściwe narzędzie, właściwe parametry |
| Współczynnik odzyskiwania po błędach | Zdolność do samokorekty |
| Długość trajektorii | Liczba kroków do rozwiązania (efektywność) |
| Jakość planowania | Poprawność dekompozycji |
| Lawina tokenów | Wzrost kontekstu pomiędzy wywołaniami (~1M skumulowanych na issue SWE-bench) |

Aby dać ci poczucie skali, oto rzeczywiste wzorce zużycia tokenów z analizy SWE-bench przez OpenHands:
- Pojedyncze issue: ~48,4 tys. tokenów w 40 krokach
- Skumulowane na issue: ~1,0M tokenów (kontekst rośnie z każdym wywołaniem)
- Tokeny wejściowe dominują (30,4 tys. wiadomości narzędzi vs 13,7 tys. asystenta)
- 10-krotna wariancja między prostymi a złożonymi zadaniami

### Metryki jakości kodu

Zaliczenie/niezaliczenie testów pomija całe wymiary tego, co sprawia, że kod jest dobry lub zły. Ta tabela uwidacznia tę lukę - zwróć uwagę, jak kod generowany przez AI wypada słabo właśnie w wymiarach, które determinują długoterminową utrzymywalność:

| Metryka | Narzędzie | Dlaczego ma znaczenie dla kodu AI |
|--------|------|--------------------------|
| Złożoność cyklomatyczna | SonarQube | AI generuje złożone rozgałęzienia |
| Duplikacja kodu | SonarQube, GitClear | +48% duplikacji w kodzie AI (2020-2024) |
| Podatności bezpieczeństwa | Semgrep, Snyk | ~45% kodu generowanego przez AI ma luki bezpieczeństwa |
| Aktywność refaktoryzacji | GitClear | -60% refaktoryzacji przy pomocy AI |
| Naruszenia bezpieczeństwa typów | TypeScript strict | AI często używa typów `any` |

Każda ewaluacja, która sprawdza tylko „czy przechodzi testy", pomija wymiary jakości kodu, bezpieczeństwa i utrzymywalności, które determinują długoterminowe koszty.

### Metryki specyficzne dla skilli/promptów

Jeśli ewaluujesz własne prompty, skille lub niestandardowe instrukcje (co szczegółowo omówimy w Rozdziale 7), oto metryki, które mają znaczenie:

| Metryka | Co mierzy |
|--------|-----------------|
| Precyzja wyzwalania | Aktywuje się na właściwych danych wejściowych, milczy na niewłaściwych |
| Poprawność wyników | Generuje prawidłowe rezultaty (ocena według rubryk) |
| Przestrzeganie instrukcji | Stosuje się do zasad skilla (LLM-as-judge) |
| Efektywność tokenowa | Tokeny zużyte na wywołanie |
| Spójność | Pass^k w identycznych wywołaniach |


### Code completion vs ewaluacja agentowa

To fundamentalnie różne problemy ewaluacyjne, ale większość benchmarków i przewodników je łączy:

| Wymiar | Code completion (inline) | Ewaluacja agentowa (wielokrokowa) |
|-----------|-------------------------|---------------------|
| **Wrażliwość na opóźnienia** | Krytyczna (<200ms TTFT) | Tolerancyjna (minuty ok) |
| **Zakres** | Pojedyncza linia/blok | Wiele plików, wiele kroków |
| **Kontekst** | Pozycja kursora, otwarty plik | Cała baza kodu, opis zadania |
| **Kluczowa metryka** | Współczynnik akceptacji, oszczędność uderzeń klawiszy | Resolve rate, pass^k, koszt |
| **Tryb awarii** | Błędna sugestia (niski koszt) | Błędna architektura (wysoki koszt) |
| **Podejście do ewaluacji** | A/B na rzeczywistym ruchu (Copilot Arena) | Wykonanie zadań w piaskownicy (SWE-bench) |

**Dlaczego to ma znaczenie:** Agent, który dobrze wypada na SWE-bench, może generować słabe uzupełnienia inline (za wolno, za rozwlekle). Model, który jest doskonały do code completion, może nie mieć zdolności planowania potrzebnych do zadań wielokrokowych. Ewaluuj każdy przypadek użycia osobno - pojedynczy benchmark nie obejmie obu.

![Ilustracja pokazujaca roznice miedzy szybkim code completion a wielokrokowa praca agenta](/assets/10xdevs/ebook-evals/ch3-agent-vs-inline.webp)

#### Kluczowe wnioski
> - Pass@k i pass^k opowiadają przeciwne historie. Do niezawodności produkcyjnej pass^k jest metryką, która ma znaczenie.
> - Koszt za poprawne rozwiązanie - nie koszt za zadanie - to prawdziwa metryka wartości. Ujawnia 35-krotne różnice, które sama dokładność ukrywa.
> - Zużycie tokenów rośnie gwałtownie między turami agenta (~1M skumulowanych na issue SWE-bench), czyniąc efektywność tokenową kluczowym czynnikiem kosztowym.
> - Metryki jakości kodu (bezpieczeństwo, duplikacja, złożoność) wyłapują to, czego testy zaliczenie/niezaliczenie nie wyłapują. ~45% kodu generowanego przez AI ma luki bezpieczeństwa.
> - Code completion i zadania agentowe to fundamentalnie różne problemy ewaluacyjne. Nie używaj jednego benchmarku do obu.
> - Dryfowanie skilli jest realne: zgłoszono 35% wzrost błędów po 6+ miesiącach bez monitorowania (wg Kore.ai). Wbuduj monitoring w swoją praktykę ewaluacyjną.

---

## Rozdział 4: Systemy agentowe i harnessy
*Najbardziej przydatny dla: Tech leadów wybierających AI coding agents dla swojego zespołu*

Kiedy widzisz wynik benchmarku dla „Claude Code" czy „Cursor", nie widzisz wyniku modelu - widzisz wynik systemu. Model to tylko jeden komponent. Scaffolding wokół niego („harness") zarządza kontekstem, wybiera narzędzia, obsługuje błędy i orkiestruje cały workflow. Ten rozdział wyjaśnia, dlaczego harness ma takie samo znaczenie jak model, i jak myśleć o ewaluacji systemów, a nie tylko modeli.

### Koncepcja harnessu

Agent to więcej niż model. To **system**: model + scaffolding + narzędzia + zarządzanie kontekstem + obsługa błędów. Harness to warstwa infrastruktury, która orkiestruje to wszystko.

Przydatna analogia:
- **Model = CPU** (moc obliczeniowa)
- **Context window = RAM** (ograniczona pamięć robocza)
- **Harness = System operacyjny** (zarządza kontekstem, narzędziami, cyklem życia)
- **Agent = Aplikacja** (logika specyficzna dla użytkownika)

**Dlaczego to ma znaczenie dla ewaluacji:** Kiedy Claude Code zdobywa 58% na SWE-rebench (marzec 2026), nie da się stwierdzić, ile to zasługa Claude Opus, a ile harnessu. Kiedy Mini-SWE-Agent (100 linii kodu) zdobywał >74% na (wycofanym już) SWE-bench Verified, to niemal wyłącznie zdolności modelu przy minimalnym scaffoldingu. Na SWE-bench Pro ten sam Claude Opus 4.5 zdobywa 45,9% ze standaryzowanym scaffoldem, ale 55,4% wewnątrz Claude Code - harness robi ~10pp różnicy.

**Scaffold ma takie samo znaczenie jak model.** Ewaluacja ich oddzielnie jest kluczowa dla podejmowania dobrych decyzji.

![Ilustracja warstwowego systemu pokazujaca role modelu, pamieci kontekstowej, harnessu i agenta](/assets/10xdevs/ebook-evals/ch4-harness-system-model.webp)

### Paradygmaty architektoniczne

Architektury agentów dzielą się na trzy główne kategorie. Zrozumienie, jakiego paradygmatu używa agent, mówi wiele o jego mocnych stronach i trybach awaryjnych:

| Paradygmat | Przykłady | Jak działa | Mocna strona | Słaba strona |
|----------|----------|-------------|----------|----------|
| **Workflow** | Agentless, Aider | Predefiniowane, zaprojektowane przez człowieka kroki, iteracyjne ulepszanie | Przewidywalny, oszczędny tokenowo | Nie radzi sobie z nowymi sytuacjami |
| **Agentic** | SWE-agent, OpenHands, Devin | Autonomiczne próby i błędy, interakcja ze środowiskiem | Radzi sobie z nowością | Kosztowny, nieprzewidywalny |
| **Hybrydowy** | Claude Code, Cursor | Agent z checkpointami human-in-the-loop | Równoważy autonomię i kontrolę | Zależy od jakości człowieka |

![Ilustracja pokazujaca trzy paradygmaty agentowe: workflow, agentic i hybrid](/assets/10xdevs/ebook-evals/ch4-architecture-paradigms.webp)

### Agenci na rynku (marzec 2026, ostatnia aktualizacja: marzec 2026)

Ta tabela daje szybki przegląd, kto jest kim. Kolumna „Wyróżnik" jest najbardziej użyteczna - mówi, w czym dany agent jest najlepszy:

| Agent | Architektura | Kluczowa metryka | Wyróżnik |
|-------|-------------|------------|----------------|
| **Claude Code** | CLI agent, tool use | 58,4% SWE-rebench przy $4,91/zadanie; 55,4% SWE-bench Pro | Najwyższa jakość, najdroższy |
| **Auggie** (Augment) | Semantic codebase indexing | 51,8% SWE-bench Pro | Najlepszy w zadaniach wieloplikowych |
| **Junie** (JetBrains) | Multi-model routing | 59,5% SWE-rebench przy $0,31/zadanie | Najlepsza opłacalność |
| **OpenHands** | Function-calling platform | Czołowy open-source | Najlepsza platforma badawcza |
| **SWE-agent** | Custom ACI, shell | Referencja badawcza | Mini-SWE-Agent: 100 linii, >74% (SWE-bench Verified, wycofany) |
| **Cursor** | Zintegrowany z IDE | 50,2% SWE-bench Pro | Zoptymalizowany pod flow |
| **GitHub Copilot** | Rozszerzenie IDE | 20M+ użytkowników (lipiec 2025), 4,7M subskrybentów, 90% Fortune 100 | Dominacja dystrybucyjna |
| **Codex CLI** (OpenAI) | CLI agent | 62,9% Terminal-Bench | Lider zadań terminalowych |

**Dynamika rynku (marzec 2026):** GitHub Copilot, Claude Code i Cursor prowadzą na rynku AI coding. Siedmiu poważnych konkurentów: Claude Code, Google Antigravity, OpenAI Codex, Cursor, Kiro, GitHub Copilot, Windsurf.

### Jak ewaluować nowego agenta

Powyższa tabela się zdezaktualizuje. Kiedy pojawi się nowy agent, użyj tej listy kontrolnej zamiast czekać na aktualizację tabeli:

1. **Jakiego modelu używa?** Oddziel scaffold od modelu. Jeśli używa tego samego modelu co agent, którego już testowałeś, różnicą jest harness.
2. **Jaki jest jego wynik na leaderboardzie kontrolującym scaffold?** Sprawdź HAL lub OpenHands Index - te benchmarki kontrolują różnice modelowe.
3. **Uruchom go na 10 swoich prawdziwych zadaniach.** Wybierz ostatnie bugi lub feature'y ze swojego codebase'u. Oceń pass/fail ręcznie. To zajmuje kilka godzin i daje więcej sygnału niż jakikolwiek leaderboard.
4. **Sprawdź koszt na poprawne rozwiązanie.** Sama dokładność bez kosztu jest niepełna. Użyj SWE-rebench do danych kosztowych, jeśli są dostępne, lub sam śledź zużycie tokenów.
5. **Sprawdź logi trajektorii - czy agent ratuje się po błędach, czy wpada w spiralę?** Agent, który napotyka błąd i próbuje innego podejścia, jest wart więcej niż taki, który powtarza tę samą niedziałającą strategię. Jeśli agent nie udostępnia logów, to sygnał ostrzegawczy.

### HAL: Standard infrastruktury ewaluacyjnej

HAL (Princeton, ICLR 2026) staje się standardem infrastruktury ewaluacji agentów. Jeśli zamierzasz prowadzić poważną ewaluację agentów na dużą skalę, to platforma, którą warto znać:
- Standaryzowany harness uruchamiający 11 benchmarków z ujednoliconym API
- Ewaluacje z kontrolą kosztów domyślnie
- Orkiestracja równoległej ewaluacji na setkach maszyn wirtualnych
- Skraca czas ewaluacji z tygodni do godzin
- Open source: `github.com/princeton-pli/hal-harness`

### Logowanie, śledzenie i odtwarzanie

Nie da się debugować tego, czego nie widać. Ewaluacja agentów wymaga obserwowalności na poziomie trajektorii - możliwości zobaczenia nie tylko tego, co agent wyprodukował, ale każdego kroku, który do tego doprowadził:

**AgentTrace** - Ustrukturyzowane logowanie na trzech płaszczyznach: poznawczej (ślady rozumowania), operacyjnej (wywołania narzędzi, operacje plikowe), kontekstowej (stan środowiska). Instrumentuje agentów w runtime bez zmian w kodzie.

**Deterministyczne odtwarzanie** - Rejestruje zdarzenia w celu odtworzenia dokładnych ścieżek wykonania. Umożliwia testy regresyjne z nowymi modelami oraz generowanie złotych przypadków testowych z prawdziwych śladów. Stuby odtwarzania zamieniają ślady w „wyrocznie wykonania".

### Projektowanie uczciwych porównań

Uczciwe porównywanie agentów jest trudniejsze, niż się wydaje. Ta tabela pokazuje główne podejścia i co każde z nich kontroluje - wybierz podejście w zależności od tego, jaką zmienną chcesz wyizolować:

| Podejście | Co kontroluje | Stosowane przez |
|----------|-------------|---------|
| Ustal model, porównuj scaffoldy | Jakość scaffoldu | HAL |
| Ustal scaffold, porównuj modele | Jakość modelu | OpenHands Index |
| Raportuj koszt obok dokładności | Realia ekonomiczne | SWE-rebench |
| Używaj pass^k, nie tylko pass@1 | Niezawodność | TAU-bench |
| Przeprowadzaj wiele prób z przedziałami ufności | Szum statystyczny | Najlepsza praktyka |

### Wpływ IDE i środowiska

Ten sam model daje różne wyniki w różnych środowiskach. To niedoceniany czynnik zakłócający w ewaluacji:

- **Wstrzykiwanie kontekstu:** Cursor, Copilot i Claude Code wstrzykują różne ilości kontekstu codebase'u (drzewa plików, otwarte karty, historia git). Więcej kontekstu generalnie pomaga, ale kosztuje więcej tokenów.
- **Dostępność narzędzi:** Agenty CLI (Claude Code, Codex CLI) mają dostęp do shella. Agenty IDE (Cursor, Copilot) mają natywne narzędzia edytora (apply-edit, search-symbol). Różne zestawy narzędzi umożliwiają różne strategie rozwiązywania.
- **Model interakcji:** Agenty autonomiczne (zadanie w tle) vs agenty interaktywne (human-in-loop) dają różne profile jakości. Agenty działające w tle potrzebują wyższej niezawodności (pass^k); agenty interaktywne mogą naprawiać błędy dzięki korekcji człowieka.
- **Format edycji:** Wyniki Aider Polyglot są powiązane ze specyficznym formatem diff Aidera. Agent, który dobrze radzi sobie z jednym formatem edycji, może mieć problemy z innym.

**Implikacja dla ewaluacji:** Porównując agentów, kontroluj środowisko. Wynik agenta w sandboxowanym benchmarku może nie przewidywać jego wydajności w twoim IDE z kontekstem twojego projektu. Jeśli wybierasz między narzędziami zintegrowanymi z IDE, testuj je w swoim rzeczywistym środowisku.

#### Kluczowe wnioski
> - Wynik benchmarku agenta to wynik systemu, nie modelu. Harness (scaffolding, narzędzia, zarządzanie kontekstem) może mieć takie samo znaczenie jak sam model.
> - Aby podejmować dobre decyzje, ewaluuj modele i scaffoldy oddzielnie. Ustal jedną zmienną i zmieniaj drugą.
> - Różnice IDE i środowiska (wstrzykiwanie kontekstu, dostępność narzędzi, model interakcji) to istotny czynnik zakłócający - kontroluj je przy porównywaniu agentów.
> - HAL staje się standardem infrastruktury ewaluacji agentów na dużą skalę.
> - Logowanie na poziomie trajektorii (nie tylko końcowe wyniki) jest niezbędne do zrozumienia, dlaczego agenty odnoszą sukces lub ponoszą porażkę.

---

## Rozdział 5: Jak developerzy korzystają z AI - i co z tym zrobić
*Najbardziej przydatny dla: Indywidualnych developerów adoptujących narzędzia AI i tech leadów ustalających praktyki zespołowe*

Benchmarki testują agentów w izolacji. Prawdziwe programowanie nie jest izolowane. Sposób, w jaki developerzy wchodzą w interakcję z narzędziami AI do kodowania - od nieustrukturyzowanego „vibe codingu" po zdyscyplinowany spec-driven development - kształtuje, jakie wyniki są możliwe i co wymaga ewaluacji. Ten rozdział łączy teorię ewaluacji z praktyką w świecie rzeczywistym, prezentuje wyniki badań, które powinny zmienić twoje podejście do twierdzeń o produktywności AI, i daje konkretne rekomendacje zarówno dla indywidualnych developerów, jak i tech leadów.

### Spektrum technik

developerzy korzystają z narzędzi AI z różnym stopniem struktury. To, gdzie się na tym spektrum znajdujesz, determinuje, jakie dane ewaluacyjne są dla ciebie istotne:

| Technika | Struktura | Jakość | Bezpieczeństwo | Najlepsza do |
|-----------|-----------|---------|----------|----------|
| **Vibe Coding** | Brak | Niska-Średnia | Niezweryfikowane | Prototypy, jednorazówki |
| **Iteracyjne ulepszanie** | Niska | Średnia | Średnie | Małe feature'y, poprawki |
| **Plan-Then-Implement** | Średnia | Wysoka | Wysokie | Złożone feature'y |
| **Spec-Driven (SDD)** | Wysoka | Wysoka | Średnie-Wysokie | Produkcja, zespoły |
| **TDAID** (Test-Driven AI Dev) | Wysoka | Bardzo wysoka | Średnie | Krytyczne systemy |

Uwaga dotycząca ocen bezpieczeństwa: ocena „Niezweryfikowane" dla vibe codingu odzwierciedla fakt, że żadne badanie nie wyizolowało wyników bezpieczeństwa według techniki. Wskaźnik ~45% wad z badania CodeRabbit dotyczy kodu generowanego przez AI ogólnie, nie vibe codingu konkretnie. Techniki o wyższej strukturze wypadają lepiej w bezpieczeństwie, ponieważ zawierają jawne bramy przeglądu i testowania, a nie dlatego, że model generuje z natury bezpieczniejszy kod.

![Ilustracja pokazujaca droge od vibe codingu do bardziej ustrukturyzowanych technik pracy z AI](/assets/10xdevs/ebook-evals/ch5-technique-spectrum.webp)

### Co mówią badania

To są zmierzone wyniki z rygorystycznych badań. Są oddzielone od rekomendacji, abyś mógł niezależnie ocenić dowody.

**Luka między percepcją a rzeczywistością (METR RCT, złoty standard):** 16 doświadczonych developerów, 246 prawdziwych zadań. developerzy byli **o 19% wolniejsi** z narzędziami AI, ale **wierzyli, że są o 20% szybsi**. Ta 39-punktowa luka percepcyjna oznacza, że samodzielnie raportowane zyski produktywności są niewiarygodne. Obiektywny pomiar jest bezwzględnie konieczny.

**Istotne zastrzeżenia do badania METR:** Badanie nie kontrolowało metodologii pracy z AI - uczestnicy mogli (i prawdopodobnie często to robili) stosować nieustrukturyzowane podejście zbliżone do vibe codingu. Tylko 44% miało wcześniejsze doświadczenie z Cursorem (głównym narzędziem w badaniu), a reszta przeszła jedynie podstawowe szkolenie. Ponadto badano doświadczonych maintainerów repozytoriów open-source (średnio 5 lat pracy z danym repo) - scenariusz bliski najgorszemu dla AI, bo developer już doskonale zna bazę kodu. Wynik -19% może odzwierciedlać koszt nauki nowego narzędzia i brak ustrukturyzowanej metodologii, nie fundamentalne ograniczenie AI. Sam METR w aktualizacji z lutego 2026 przyznał, że zmienił design follow-up eksperymentu, bo oryginalny format dawał „niewiarygodny sygnał". Mimo tych zastrzeżeń, luka percepcyjna (39 punktów) pozostaje silnym i odpornym na analizę odkryciem - niezależnie od rzeczywistego wpływu na produktywność, developerzy systematycznie przeszacowują korzyści z AI.

**Degradacja jakości kodu (CodeRabbit, 470 PR-ów, grudzień 2025):** W jednym z nielicznych rygorystycznych badań jakości kodu AI, analiza 470 PR-ów wykazała 1,7x więcej problemów, 2,74x wyższy wskaźnik podatności XSS i 1,64x więcej błędów utrzymywalności w kodzie generowanym przez AI vs pisanym ręcznie. To jedno badanie, ale jego wyniki są spójne z szerszymi obserwacjami branży. Sama poprawność funkcjonalna jest niewystarczająca jako kryterium ewaluacji.

**Struktura poprawia wyniki:**
- Spec-driven development (SDD) z promptami CIF (Context, Intent, Format) redukuje korekty o 50% (ThoughtWorks, 2025)
- Test-Driven AI Development (TDAID) - Simon Willison: „red/green TDD" uwalnia dyscyplinę inżynierską wbudowaną w modele. Testy stają się wąskim gardłem przepustowości, nie szybkość modelu
- Dane DORA: zespoły osiągające najwyższe wyniki konsekwentnie stosują podejścia test-first

**Punkt przejścia horyzontu czasowego (RE-Bench, METR):** Agenty pokonują ludzi 4-krotnie przy budżetach 2-godzinnych, ale ludzie pokonują agentów 2-krotnie przy 32 godzinach. Punkt przejścia ma znaczenie przy decyzji, kiedy wdrażać AI autonomicznie, a kiedy z nadzorem człowieka.

**Skala multi-agentowa:**
- Stripe: ponad 1300 PR-ów/tydzień mergowanych przez AI agentów (system „Minions", luty 2026; zero kodu napisanego przez ludzi - miniony mają uprawnienia do submission, ale nie do merge; inżynierowie przeglądają przed mergem)
- Rakuten: zaimplementował feature w codebase vLLM o 12,5M linii w 7 godzin z 99,9% dokładnością numeryczną przy użyciu Claude Code (Anthropic customer story, czerwiec 2025; 79% redukcja time-to-market)
- Wyzwanie atrybucji: brak standaryzowanej metodologii przypisywania jakości poszczególnym agentom w pipeline

![Ilustracja pokazujaca roznice miedzy odczuwana a rzeczywista produktywnoscia przy pracy z AI](/assets/10xdevs/ebook-evals/ch5-perception-gap.webp)

### Co z tym zrobić

**Jeśli jesteś indywidualnym developerem:**
- Stosuj plan-then-implement, spec-driven development lub TDAID dla każdego zadania > 30 minut. Vibe coding jest tylko do prototypów.
- Nigdy nie ufaj wynikom AI w kodzie wrażliwym pod kątem bezpieczeństwa bez uruchomienia Semgrep/Snyk. Wskaźnik 2,74x XSS jest prawdziwy.
- Śledź swój rzeczywisty czas z AI i bez niego. Badanie METR wykazało 39-punktową lukę percepcyjną - twoja intuicja dotycząca produktywności jest prawdopodobnie błędna.
- Przy zadaniach dłuższych niż kilka godzin oczekuj malejących zwrotów z AI i planuj więcej nadzoru ludzkiego.

**Jeśli jesteś tech leadem:**
- Nie narzucaj jednej techniki. Dopasuj technikę do zadania: vibe coding do spike'ów, spec-driven do produkcyjnych feature'ów.
- Mierz produktywność zespołu obiektywnie (cycle time, defect rate), nie na podstawie samooceny.
- Zabudżetuj przegląd bezpieczeństwa kodu generowanego przez AI - to nie jest opcjonalne przy wskaźniku podatności 2,74x.
- Struktura > wybór modelu. Danie zespołowi specyfikacji + przeciętnego modelu bije danie im żadnych specyfikacji + najlepszego modelu.
- Dla multi-agent pipelines: wymagaj logowania trajektorii i ustal praktyki atrybucji przed skalowaniem.

### Implikacje dla ewaluacji

Te odkrycia mają bezpośrednie konsekwencje dla tego, jak powinieneś projektować swoje ewaluacje:

1. **Sama poprawność funkcjonalna jest niewystarczająca** - bezpieczeństwo, utrzymywalność i wymiary jakości muszą być w zakresie
2. **Nie ufaj samodzielnie raportowanej produktywności** - mierz obiektywnie
3. **Ewaluuj technikę obok modelu/agenta** - ten sam model ze specyfikacjami vs bez nich daje różną jakość
4. **Multi-agent pipelines potrzebują atrybucji** - kto w łańcuchu spowodował buga?
5. **Horyzont czasowy ma znaczenie** - agenty celują w zadaniach 2-godzinnych, ludzie wygrywają w zadaniach 32-godzinnych (RE-Bench)

#### Kluczowe wnioski
> - Badanie METR wykazało 39-punktową lukę między postrzeganą a rzeczywistą produktywnością z narzędziami AI. Nigdy nie ufaj przeczuciom - mierz.
> - Kod generowany przez AI ma mierzalnie więcej podatności XSS (2,74x) i problemów z utrzymywalnością (1,64x). Ewaluacje, które sprawdzają tylko „czy przechodzi testy", pomijają najkosztowniejsze problemy.
> - Struktura ma ogromne znaczenie: ten sam model produkuje radykalnie różną jakość w zależności od tego, czy dostaje specyfikacje, testy, czy tylko niejasny prompt.
> - Na skalę enterprise multi-agent pipelines już produkują ponad 1300 PR-ów/tydzień (Stripe), ale atrybucja - wiedza, który agent spowodował buga - pozostaje nierozwiązana.
> - Indywidualni developerzy: stosujcie ustrukturyzowane techniki i weryfikujcie bezpieczeństwo. Tech leadzi: mierzcie obiektywnie, budżetujcie przegląd bezpieczeństwa i dopasowujcie technikę do zadania.

---

## Rozdział 6: Frameworki i narzędzia ewaluacyjne
*Najbardziej przydatny dla: Tech leadów wybierających narzędzia ewaluacyjne dla swojego zespołu*

Nie musisz budować systemu ewaluacyjnego od zera. Istnieje rozbudowany ekosystem frameworków i narzędzi, od lekkich CLI do testowania promptów po pełne platformy obserwowalności na poziomie enterprise. Ten rozdział przedstawia dostępne opcje, abyś mógł wybrać odpowiednie narzędzie do swojej sytuacji - i zrozumieć, gdzie każde narzędzie się kończy i zaczyna praca na miarę.

### Szybki przewodnik wyboru

Jeśli musisz wybrać framework teraz, użyj tej tabeli. Dopasuj swoją sytuację w lewej kolumnie do rekomendacji:

| Twoja sytuacja | Wybierz | Dlaczego |
|---------------|--------|-----|
| Ewaluacja agentów z sandboxingiem | **Inspect AI** | Najlepszy harness, wbudowany Docker, brak lock-inu |
| Porównywanie promptów + red teaming | **promptfoo** | Najwięcej typów asercji, natywny CLI (obserwuj przejęcie przez OpenAI) |
| Zespół Pythonowy, workflow pytest | **DeepEval** | Najniższa bariera wejścia, wbudowane metryki agentów |
| Enterprise, zespół cross-funkcyjny | **Braintrust** | Pipeline produkcyjny, przyjazny dla nie-inżynierów |
| Monitoring produkcyjny | **Braintrust** lub **Langfuse** (self-hosted) | Obserwowalność + ewaluacja |
| Akademickie porównanie modeli | **EleutherAI lm-eval-harness** | Standard branżowy |
| Darmowy + kompleksowy + bez lock-inu | **Inspect AI** | Wspierany przez rząd, bez agendy komercyjnej |

Po szczegóły stojące za każdą rekomendacją czytaj dalej.

![Ilustracja wyboru odpowiedniego narzedzia AI lub agenta do kodowania w zaleznosci od sytuacji](/assets/10xdevs/ebook-evals/ch6-framework-selector.webp)

### Przegląd narzędzi

#### Pełne frameworki ewaluacyjne

Poniższa tabela obejmuje główne frameworki ewaluacyjne. Kolumna „Kluczowe ryzyko" jest równie ważna jak „Kluczowa mocna strona" - każde narzędzie ma haczyk:

| Narzędzie | Typ | Najlepsze do | Kluczowa mocna strona | Kluczowe ryzyko |
|------|------|----------|-------------|----------|
| **Inspect AI** (UK AISI) | OSS, MIT | Ewaluacja agentów/skilli z sandboxingiem | Wspierany przez rząd, sandboxing Docker, bridge dla zewnętrznych agentów, adoptowany przez Anthropic/DeepMind | Stroma krzywa uczenia |
| **promptfoo** | OSS (przejęty przez OpenAI, 9 marca 2026) | A/B testing promptów, red teaming | 30+ typów asercji, porównanie `select-best`, natywne CI/CD | Ryzyko lock-inu po przejęciu |
| **DeepEval** | OSS | Zespoły Pythonowe, metryki agentów | Natywny pytest, 6 metryk agentów, metryka Prompt Alignment | Brak sandboxingu |
| **Braintrust** | Komercyjny (darmowy tier: 1M spanów) | Enterprise, cross-funkcyjny | Pipeline z produkcji do ewaluacji, generowanie scorerów Loop AI | Lock-in vendora |
| **LangSmith** | Komercyjny ($39/użytkownik/mies.) | Ekosystem LangChain | Scoring trajektorii multi-turn agentów, kolejki adnotacji | Sprzężenie z ekosystemem |

#### Narzędzia specjalistyczne

Te służą węższym celom, ale są najlepsze w klasie dla swoich konkretnych zastosowań:

| Narzędzie | Zastosowanie |
|------|---------|
| **EleutherAI lm-eval-harness** | Akademicki benchmarking modeli (60+ benchmarków, napędza HuggingFace Open LLM Leaderboard) |
| **HELM** (Stanford) | Holistyczna ewaluacja: 42 scenariusze, 7 wymiarów (dokładność, kalibracja, odporność, sprawiedliwość, stronniczość, toksyczność, wydajność) |
| **OpenAI Evals** | Lekki framework ewaluacyjny + Dashboard API |
| **Evalica** | Tworzenie rankingów parami / leaderboardów (Bradley-Terry, Elo) |
| **Anthropic Bloom + Petri** | Ewaluacja behawioralna/bezpieczeństwa (Petri: październik 2025, eksploracyjna; Bloom: grudzień 2025, systematyczny pomiar; oba OSS) |
| **DSPy** (Stanford) | Automatyczna optymalizacja promptów - omija ręczną inżynierię promptów całkowicie |
| **TextGrad** | Optymalizacja promptów w stylu gradient descent (opublikowany w Nature, 19 marca 2025, Vol. 639) |

#### Obserwowalność i monitoring

Kiedy twoje ewaluacje już działają, musisz widzieć, co się dzieje w produkcji. Te narzędzia zamykają pętlę między ewaluacją a monitoringiem:

| Narzędzie | Typ | Kluczowa funkcja |
|------|------|-------------|
| **Langfuse** | OSS | Self-hostowalny, backend ClickHouse, OpenTelemetry |
| **Helicone** | Proxy | Dashboardy w czasie rzeczywistym, rozbicie kosztów |
| **LiteLLM** | Proxy OSS | Śledzenie wydatków na 100+ LLM-ach |
| **Datadog LLM Observability** | Enterprise | Własny LLM-as-judge na każdym trace |
| **Arize Phoenix** | OSS | Wykrywanie dryfu embeddingów, SOC 2, HIPAA |

### Budować czy kupić

To pytanie, które zadaje każdy. Szczera odpowiedź brzmi: zawsze skończysz robiąc jedno i drugie.

**Co istniejące narzędzia dobrze obsługują:**
- Wykonywanie testów, przechowywanie wyników, logika ponawiania, caching, równoległość
- Scoring LLM-as-judge, integracja CI/CD, red teaming
- Sandboxowane uruchamianie agentów (Inspect AI)

**Co zawsze wymaga pracy na miarę:**
1. **Rubryki scoringowe specyficzne dla domeny** - „Generyczne metryki jak BERTScore, ROUGE, cosine similarity nie są przydatne do ewaluacji wyników LLM w większości aplikacji AI" (Hamel Husain)
2. **Kuratorowane datasety z twojej domeny** - „Jedyny sposób, aby wiedzieć, czy model zadziała dla ciebie, to ewaluacja na twoich danych"
3. **Harness agenta do izolowanego uruchamiania** - Inspect AI jest najbliżej dzięki sandboxingowi + bridge dla zewnętrznych agentów
4. **Pipeline danych produkcyjnych** - trace'y → dane oznaczone → przypadki testowe
5. **Integracja z twoimi wewnętrznymi narzędziami i workflow**

**Luki, których żadne narzędzie nie wypełnia (stan na marzec 2026):**
- Ewaluacja precyzji wyzwalania skilli (aktywuj/nie aktywuj)
- Testy przenośności między agentami (te same instrukcje w Claude Code, Cursor, Copilot)
- Testy interakcji/konfliktów skilli
- Atrybucja kosztów na poziomie instrukcji
- Automatyczne wykrywanie dryfu skilli
- Testy istotności statystycznej (każde narzędzie wymaga ręcznych obliczeń)

### Konsensus branżowy: wzorzec hybrydowy

Większość zespołów ląduje na podejściu hybrydowym. Ta tabela pomaga skalibrować oczekiwania co do wielkości zespołu, terminu i bieżących kosztów:

| Wzorzec | Wielkość zespołu | Czas do pierwszej ewaluacji | Utrzymanie |
|---------|-----------|---------------------|-------------|
| **Cienki wrapper** (framework + własne scorery) | 1-3 | 1-3 dni | Niskie |
| **Hybrydowy** (framework + własna logika/harness/datasety) | 2-4 | 1-2 tygodnie | Średnie |
| **W pełni własny** (zbudowany od zera) | 4+ | 4-8 tygodni | Wysokie |

**Konsensus praktyków** (Anthropic, Hamel Husain, Eugene Yan, OpenAI): Wybierz framework szybko. Zainwestuj energię w przypadki testowe i scorery, nie w infrastrukturę. „60-80% czasu developmentu powinno iść na analizę błędów i ewaluację." Proces ma większe znaczenie niż wybór narzędzia. „Wybór frameworka ma mniejsze znaczenie niż jakość testów."

![Ilustracja pokazujaca polaczenie gotowej infrastruktury ewaluacyjnej z wlasna logika domenowa](/assets/10xdevs/ebook-evals/ch6-hybrid-eval-stack.webp)

#### Kluczowe wnioski
> - Wybierz framework szybko - wybór ma mniejsze znaczenie niż jakość twoich przypadków testowych i scorerów.
> - Każdy framework wymaga pracy na miarę dla rubryk i datasetów specyficznych dla domeny. Zabudżetuj to.
> - Inspect AI to najsilniejszy wybór do ewaluacji agentów z sandboxingiem i bez ryzyka lock-inu.
> - Obserwuj trajektorię promptfoo po przejęciu przez OpenAI - ryzyko lock-inu jest nowe.
> - 60-80% twojego czasu na development ewaluacji powinno iść na analizę błędów i kurację datasetów, nie na infrastrukturę.

---

## Rozdział 7: Testowanie narzędzi AI na własnym codebase
*Najbardziej przydatny dla: developerów i tech leadów, którzy chcą wiedzieć, które narzędzie AI do kodowania działa najlepiej w ich projekcie*

Publiczne benchmarki mówią, który model jest ogólnie zdolny. Ale to, czy Claude Code, Cursor czy Copilot sprawdzi się w twoim TypeScriptowym monorepo z 200 tys. linii kodu - tego żaden leaderboard ci nie powie. Jedyny sposób, żeby to sprawdzić, to przetestować narzędzia na swoich prawdziwych zadaniach.

Ten rozdział pokazuje, jak to zrobić - od prostego testu porównawczego w jedno popołudnie po bardziej systematyczne podejście dla zespołów.

### Dlaczego warto testować samodzielnie

Leaderboard mówi: „Model X rozwiązuje 58% issue'ów na SWE-bench." Ale twój codebase to nie SWE-bench. Ma swój stack, swoje konwencje, swój dług techniczny. Model, który dominuje na Pythonie, może słabo radzić sobie z twoim Kotlinem. Agent, który dobrze naprawia bugi, może generować fatalny kod nowych funkcjonalności (FeatureBench: 74% vs 11%). Jedyny wiarygodny sygnał to test na twoich zadaniach.

### Zasady

1. **Używaj prawdziwych zadań ze swojego codebase'u** - nie problemów syntetycznych. Weź 10-20 niedawnych bugów, feature'ów lub refaktorów z historii PR-ów.
2. **Upewnij się, że zadania są rozwiązywalne** - wybieraj zamknięte issue'y z istniejącym rozwiązaniem, które posłuży jako referencja.
3. **Testuj różne typy zadań** - naprawy bugów, nowe feature'y, refaktoring, testy. Narzędzie może być świetne w jednym, a słabe w drugim.
4. **Oceniaj wyniki, nie ścieżki** - narzędzie może rozwiązać zadanie inaczej niż oczekiwano, ale nadal poprawnie.
5. **Powtórz kilka razy** - jedno uruchomienie to za mało. 3 próby na zadanie pokazują, czy wynik jest powtarzalny.

### Co sprawdzać w wygenerowanym kodzie

Samo „czy działa" to za mało. Oto hierarchia tego, co warto weryfikować - od najtańszego do najdroższego:

| Co sprawdzasz | Jak | Koszt |
|----------|----------|------|
| **Kompilacja / build** | `npm run build`, `tsc --noEmit`, `cargo check` | Sekundy, za darmo |
| **Testy** | Istniejący suite testów, ewentualnie testy wygenerowane przez AI | Minuty, za darmo |
| **Lintery i statyczna analiza** | ESLint, SonarQube, `clippy` | Sekundy, za darmo |
| **Bezpieczeństwo** | Semgrep, Snyk | Minuty, darmowy tier |
| **Code review przez developera** | Ręczny przegląd diff'a | 5-15 min na zadanie |

**Twardy stop: jeśli kod się nie kompiluje, dalsze sprawdzanie jest stratą czasu.** Build to minimalna brama jakości.

![Ilustracja pokazujaca wieloetapowa bramke jakosci dla kodu generowanego przez AI](/assets/10xdevs/ebook-evals/ch7-quality-gate.webp)

### LLM-as-Judge w kontekście kodowania

Przy ewaluacji narzędzi do kodowania LLM-as-judge jest przydatny w dwóch scenariuszach:
1. **Ocena jakości kodu, którego nie da się zweryfikować testami** - np. czytelność, zgodność ze stylem projektu, jakość komentarzy
2. **Automatyczny code review** - użycie jednego modelu do oceny kodu wygenerowanego przez inny

Najnowsze modele (Opus 4.6, GPT-5.4) osiągają zgodność z ludzkimi ekspertami na poziomie kappa Cohena >0,8 (Judge's Verdict, NVIDIA 2025). Ale mają udokumentowane stronniczości: preferują dłuższe odpowiedzi, modele tego samego dostawcy i odpowiedzi na pierwszej pozycji.

**Praktyczna rada:** Jeśli chcesz użyć LLM do oceny kodu innego LLM, używaj modelu od innego dostawcy jako sędziego. Nie komplikuj - binarne PASS/FAIL na konkretne pytanie („Czy ten kod ma podatność SQL injection?") działa lepiej niż skale 1-10.

### Na co zwracać uwagę

Przy ręcznym przeglądzie kodu generowanego przez AI szukaj tych wzorców - to najczęstsze tryby awarii:

- **Poprawność**: Czy kod robi to, o co prosisz? Czy przechodzi testy?
- **Bezpieczeństwo**: Czy nie wprowadza podatności (SQL injection, XSS, hardcoded secrets)? Wskaźnik 2,74x XSS w kodzie AI jest zmierzony (CodeRabbit, 2025).
- **Halucynacje**: Czy nie wymyśla API, które nie istnieje? Nie importuje paczki, której nie ma w projekcie?
- **Zgodność ze stylem**: Czy kod pasuje do konwencji projektu, czy wygląda „obco"?
- **Nadmierna złożoność**: Czy AI nie rozwiązało prostego problemu złożonym wzorcem?
- **Utrzymywalność**: Czy kod jest zrozumiały dla innego developera za 6 miesięcy?

### Ile testów potrzebujesz?

Nie potrzebujesz setek przypadków testowych. Praktyczne minimum:

| Cel | Ile zadań | Ile prób na zadanie | Wystarczy? |
|-----|-----------|---------------------|------------|
| Szybkie porównanie dwóch narzędzi | 10 zadań | 1 | Na początek tak - zobaczysz wyraźne różnice |
| Wybór narzędzia dla zespołu | 15-20 zadań | 3 | Daje wiarygodny obraz powtarzalności |
| Uzasadnianie wydatków przed kierownictwem | 30+ zadań | 3-5 | Wystarczająco, by twarde dane broniły się same |

**Ważne:** większość „różnic" między modelami to szum. Reanaliza benchmarku GSM-Symbolic (Ivanova et al., ICLR 2025) wykazała, że tylko 4 z 25 deklarowanych różnic między modelami były statystycznie istotne - reszta mieściła się w granicach przypadku. Dlatego powtarzaj próby i nie wyciągaj wniosków z jednego uruchomienia.

### Jak uniknąć fałszywych wyników

1. **Używaj zadań z wewnętrznego codebase'u** - kod opublikowany online mógł trafić do danych treningowych modelu, zawyżając wynik
2. **Mieszaj typy zadań** - sam naprawianie bugów nie powie, jak narzędzie radzi sobie z nowymi feature'ami
3. **Co kilka miesięcy odświeżaj zestaw zadań** - dodaj nowe, świeże issue'y

### Jak robią to prawdziwe firmy

| Firma | Podejście | Lekcja dla ciebie |
|---------|----------|-------------|
| **GitHub Copilot** | 100+ konteneryzowanych repozytoriów, LLM + audyty ludzkie | Testuj na wielu repozytoriach, nie na jednym |
| **Cursor** | CursorBench: „Cursor Blame" śledzi kod z powrotem do interakcji z agentem | Testuj w warunkach, w jakich narzędzie faktycznie działa (krótkie, niedospecyfikowane polecenia) |
| **GitLab Duo** | Scentralizowany framework, codzienna re-walidacja | Standardowe benchmarki nie wystarczą - testuj na swojej domenie |

### Przykład: porównanie narzędzi na 10 prawdziwych zadaniach

Oto jak w praktyce wygląda proste porównanie narzędzi AI na twoim codebase.

**Krok 1: Wybierz 10 zadań z ostatnich PR-ów.**
Weź 5 napraw bugów i 5 nowych feature'ów z historii repozytorium. Wybierz zamknięte issue'y - masz gotowe rozwiązanie referencyjne w postaci zmergowanego PR-a.

**Krok 2: Dla każdego zadania, daj je dwóm narzędziom.**
Np. Claude Code vs Cursor. Każdemu narzędziu daj to samo polecenie (opis issue'a). Nie pomagaj - chcesz zmierzyć, co narzędzie zrobi samo.

**Krok 3: Oceń wyniki.**
Dla każdego zadania sprawdź:
- Czy kod się kompiluje? (tak/nie)
- Czy przechodzi istniejące testy? (tak/nie)
- Czy rozwiązanie jest poprawne? (przegląd diff'a vs oryginalne rozwiązanie)
- Czy kod jest czytelny i zgodny ze stylem projektu? (ocena 1-3)
- Ile kosztowało uruchomienie? (sprawdź dashboard narzędzia)

**Krok 4: Porównaj.**
Zsumuj pass rate, średnią jakość, łączny koszt. Jedno popołudnie i masz realny obraz, którego żaden leaderboard nie da.

### Śledzenie wyników w czasie

Gdy porównujesz narzędzia lub testujesz nowy model, warto zachować wyniki do porównania. Nie potrzebujesz do tego infrastruktury - wystarczy:

- **Arkusz kalkulacyjny lub markdown w repozytorium** - data, narzędzie/model, zadanie, wynik pass/fail, koszt, uwagi
- **Przypięte wersje modeli** - jeśli używasz API, zapisz dokładne ID modelu (np. `claude-sonnet-4-20250514`, nie samo `claude-sonnet`), bo zachowanie zmienia się między wersjami
- **Powtarzalność** - jeśli uruchamiasz test ponownie za miesiąc na nowym modelu, chcesz wiedzieć, co się zmieniło: model, narzędzie, czy twój codebase

### Studium przypadku: 10x-bench - budowanie praktycznego niestandardowego benchmarku

*Ważne: 10x-bench został stworzony przez autorów tego przewodnika. Jest uwzględniony jako studium przypadku, ponieważ demonstruje zasady „zbuduj własną ewaluację" z tego rozdziału - ale powinieneś oceniać go z tym samym sceptycyzmem, którego ten przewodnik uczy cię stosować wobec każdego benchmarku.*

Powyższe zasady nie są hipotetyczne. [10x-bench](https://10xbench.ai) to open-source'owy benchmark zbudowany przez nas, ponieważ chcieliśmy odpowiedzieć na pytanie, na które żaden publiczny benchmark nie potrafił: **„Który LLM jest najlepszy w one-shotowym web developmencie dla naszego stacku?"**

Publiczne benchmarki jak SWE-bench testują naprawianie bugów w repozytoriach Pythona. Ale jeśli twój zespół dostarcza strony w Astro/React/Tailwind, te liczby nie mówią ci prawie nic. 10x-bench pokazuje, jak wygląda budowanie benchmarku dla twojej rzeczywistej pracy.

**Zadanie:** Zbuduj kompletną, gotową do wdrożenia wielostronicową witrynę ([Przeprogramowani.pl](https://przeprogramowani.pl)) z jednego szczegółowego promptu - bez iteracyjnego ulepszania, bez ludzkiego debugowania. Jeden strzał. Prompt określa strony (O nas, Podcast, YouTube, Kursy), stack technologiczny (Astro 5, React 19, Tailwind CSS 4, wdrożenie Cloudflare) i prawdziwą treść do uwzględnienia.

**Kryteria ewaluacji (10 punktów, hybrydowe):**

| # | Kryterium | Typ | Co wyłapuje |
|---|-----------|------|----------------|
| 1 | Lokalny build | Auto | Czy `npm run build` kończy się sukcesem? Twardy stop jeśli nie - wszystkie wyniki zerowe. |
| 2 | Testowanie ręczne | Ludzki | Serwer dev działa, strony dostępne, nawigacja działa? |
| 3 | Stack technologiczny | Auto | Poprawne wersje frameworków (Astro 5, React 19, Tailwind 4)? |
| 4 | Strona „O nas" | Auto | Treść zgodna z referencją - wyłapuje uproszczone/sfabrykowane biogramy zespołu |
| 5 | Strona Podcast | Auto | Prawdziwe dane podcastu - wyłapuje zhallucynowane odcinki, błędne URL-e Spotify |
| 6 | Strona YouTube | Auto | Prawdziwe filmy - wyłapuje rickrollowe ID (`dQw4w9WgXcQ`), treści zastępcze |
| 7 | Sekcja Kursy | Auto | Treść kursów dokładna, flagowy produkt wyróżniony w hero? |
| 8 | Spójne UI | Ludzki | Wizualna spójność między stronami |
| 9 | Responsywny design | Ludzki | Układ przyjazny urządzeniom mobilnym |
| 10 | Tagi SEO | Auto | Tagi meta, tagi OG, opisy per strona |

![Ilustracja pokazujaca wielowarstwowa ocene benchmarku 10x-bench dla gotowej strony internetowej](/assets/10xdevs/ebook-evals/ch7-10xbench-criteria.webp)

**Dlaczego ten design działa - lekcje do budowania własnego:**

1. **Twardy stop przy niepowodzeniu buildu.** Jeśli kod się nie kompiluje, nic innego się nie liczy. To odzwierciedla realia produkcyjne i zapobiega traceniu czasu na ewaluację zepsutego kodu.

2. **Halucynacja jest pełnoprawnym wymiarem ewaluacji.** SWE-bench nie testuje sfabrykowanej treści. Ale w prawdziwym web developmencie LLM wymyślający odcinki podcastu, używający zastępczych ID YouTube czy upraszczający biogramy zespołu to krytyczna awaria. Kryteria jawnie sprawdzają dokładność treści wobec referencyjnego dokumentu źródłowego.

3. **Hybrydowy scoring (7 automatycznych + 3 ludzkie).** Wizualna spójność i responsywny design są trudne do oceny programistycznej - zgodne z warstwowym podejściem rekomendowanym powyżej (zobacz [hierarchia ewaluacji](#hierarchia-podejść-ewaluacyjnych)).

4. **Śledzenie kosztów obok jakości.** Umożliwia tę samą analizę skorygowaną o koszty, omówioną w [Rozdziale 3](#rozdział-3-co-tak-naprawdę-jest-mierzone).

5. **Wiele prób na model.** Każdy model wykonuje 3-10 prób, ujawniając niezawodność (pass^k) zamiast samej szczytowej zdolności (pass@1).

**Co ujawniły wyniki (74 próby, 14 modeli):**

| Model | Średni wynik | Tier cenowy | Wniosek |
|-------|-----------|-----------|----------|
| GPT-5.3-Codex | 85,0% | Wysoki ($1,75/$14) | Konsekwentnie najlepszy we wszystkich próbach |
| Minimax M2.5 | 69,0% | Budżetowy ($0,3/$2,4) | Najlepsza opłacalność - 81% jakości przy ~10% kosztu |

Najczęstszy tryb awarii? **Zhallucynowana treść.** Modele, które dobrze wypadały w strukturze kodu, często fabrykowały odcinki podcastu, używały zastępczych ID YouTube lub upraszczały biogramy zespołu do generycznych opisów. To jest niewidoczne dla benchmarków, które testują tylko poprawność funkcjonalną.

Dla 8-krokowej metodologii budowania własnego firmowego benchmarku, zobacz [Budowa benchmarku firmowego](#budowa-benchmarku-firmowego-8-krokowa-metodologia) powyżej. Pełny 10x-bench jest open source: [github.com/przeprogramowani/10x-bench](https://github.com/przeprogramowani/10x-bench) (runner benchmarku) i [github.com/przeprogramowani/10x-bench-eval](https://github.com/przeprogramowani/10x-bench-eval) (kryteria ewaluacyjne). Wyniki i metodologia znajdują się na [10xbench.ai](https://10xbench.ai).

### Studium przypadku: CursorBench - ewaluacja AI zintegrowanego z IDE

Cursor przyjął inne podejście do niestandardowej ewaluacji. **CursorBench** używa „Cursor Blame" - techniki, która śledzi wygenerowany kod z powrotem do interakcji z agentem, która go wyprodukowała. Zadania są celowo krótkie i niedospecyfikowane, odzwierciedlając sposób, w jaki developerzy naprawdę komunikują się z narzędziami zintegrowanymi z IDE (zwięzłe wiadomości, niejawny kontekst z otwartego pliku). Ta decyzja projektowa wyłapuje coś, co większość benchmarków pomija: prawdziwa komunikacja developerska jest chaotyczna, skrócona i opiera się na współdzielonym kontekście, który benchmarki zazwyczaj ujawniają jawnie. Kluczowy wniosek projektowy: ewaluuj narzędzie w warunkach, w jakich faktycznie działa, nie w warunkach wyidealizowanych. Jeśli twoje narzędzie AI żyje w IDE, twoja ewaluacja też powinna.

#### Kluczowe wnioski
> - Weź 10-20 prawdziwych zadań z historii swoich PR-ów i uruchom je na kandydackich narzędziach. Jedno popołudnie daje więcej sygnału niż tydzień czytania leaderboardów.
> - Minimalna ewaluacja: czy się kompiluje → czy przechodzi testy → czy kod wygląda sensownie. Nie komplikuj.
> - Powtarzaj próby (minimum 3x na zadanie) - jedno uruchomienie nie mówi, czy wynik jest powtarzalny.
> - Używaj zadań z wewnętrznego codebase'u, nie problemów z internetu - te mogły trafić do danych treningowych.
> - Zapisuj wyniki i wersje modeli. Bez tego nie porównasz, czy nowy model jest lepszy od starego.

---

## Rozdział 8: Koszty, szybkość i wydajność
*Najbardziej przydatny dla: Tech leadów zarządzających budżetami na narzędzia AI i optymalizujących wydatki*

Narzędzia AI do kodowania kosztują - zarówno w postaci subskrypcji, jak i zużycia API. Ten rozdział pokazuje, ile co kosztuje i jak wybrać odpowiedni tier narzędzia/modelu do swoich potrzeb.

### Przegląd cenowy (marzec 2026)

Ceny modeli zmieniają się często, ale względne poziomy cenowe są stabilne. Te tabele dają ci migawkę - kluczowa obserwacja to 100-krotny rozstrzał między najtańszymi a najdroższymi opcjami:

**Modele frontier:**

| Model | Input $/1M | Output $/1M | Context |
|-------|-----------|-------------|---------|
| Claude Opus 4.6 | $5.00 | $25.00 | 200K |
| Claude Sonnet 4.6 | $3.00 | $15.00 | 200K |
| GPT-5.4 High | $2.50 | $15.00 | 1M |
| Gemini 3 Pro | $2.00 | $12.00 | 1M |
| GPT-5.3-Codex | $1.75 | $14.00 | 400K |

**Modele wydajne:**

| Model | Input $/1M | Output $/1M |
|-------|-----------|-------------|
| GPT-5.3-mini | $0.05 | $0.40 |
| DeepSeek V3.2 | $0.28 | $0.42 |
| Gemini 3 Flash | $0.50 | $3.00 |
| Claude Haiku 4.5 | $1.00 | $5.00 |

Tokeny wyjściowe kosztują 3-10x więcej niż tokeny wejściowe u wszystkich dostawców.

### Jak obniżyć koszty

**Wybierz odpowiedni tier do zadania.** To największa dźwignia. Nie potrzebujesz Opus do prostej poprawki CSS - Haiku lub Flash wystarczy. Zarezerwuj premium modele do złożonych zadań architektonicznych.

**Prompt caching** - jeśli korzystasz z API bezpośrednio (np. przez Claude Code lub własne integracje), caching obniża koszt powtarzających się prefixów o 90%:
- Anthropic: odczyt z cache kosztuje 0.1x ceny normalnych tokenów wejściowych
- OpenAI: automatyczny caching, ~50% hit rate
- W praktyce: agent kodujący wykonujący 50 tur z 10K-tokenowym system prompt płaci za 500K tokenów, chyba że caching jest włączony

**Narzędzia z wbudowanym routingiem** - Cursor, Claude Code i Copilot robią już model routing wewnętrznie (tańszy model do prostych uzupełnień, droższy do złożonych poleceń). Jeśli budujesz własne workflow, rozważ routing ręczny: proste zadania → GPT-5.3-mini/Haiku, złożone → Opus/GPT-5.4.

### Szybkość

Szybkość ma różne znaczenie w zależności od przypadku użycia. Przy interaktywnym kodowaniu liczy się latencja. Przy ewaluacji batchowej wygrywa przepustowość:

| Metryka | Cel dla kodowania |
|--------|-------------------|
| TTFT | <200ms inline completion, <1s chat |
| TPS | >50 interaktywne, >100 batch |
| Time-to-Solution | Jedyna metryka, która naprawdę się liczy dla agentów |

**Liderzy szybkości:** Llama 4 Scout 2600 TPS (na sprzęcie Cerebras; mediana u dostawców ~128 TPS), Gemini 3 Flash ~200 TPS. Modele reasoning (extended thinking) są 5-20x wolniejsze.

### Granica Pareto

To koncepcja, która łączy jakość z kosztem. Narysuj wykres jakości (Y) względem kosztu (X) dla swoich zadań. Modele poniżej granicy są zdominowane - istnieje lepszy model w tej samej lub niższej cenie. „Kolano" granicy to optimum: małe straty jakości przynoszą duże oszczędności kosztowe.

**Granica przesuwa się co miesiąc.** Koszty inferencji LLM spadają ~10x rocznie (analiza a16z „LLMflation"). Po 2024: 200x mediana rocznej redukcji (dane Epoch AI; zakres: 9x-900x w zależności od benchmarku i poziomu wydajności). Dzisiejsza cena premium staje się jutrzejszym budżetem.

![Ilustracja granicy Pareto pokazujaca kompromis miedzy jakoscia a kosztem](/assets/10xdevs/ebook-evals/ch8-price-frontier.webp)

### Który tier do jakiego zadania

| Typ zadania | Wystarczający tier | Przykładowe modele |
|------|--------|-------|
| Drobne poprawki, formatowanie, proste uzupełnienia | Tani | GPT-5.3-mini, Haiku 4.5, Gemini Flash |
| Implementacja feature'ów, code review, pisanie testów | Średni | GPT-5.3, Sonnet 4.6 |
| Złożona architektura, debugowanie wieloplikowe, refaktoring legacy | Premium | GPT-5.4 High, Opus 4.6 |

![Ilustracja pokazujaca dopasowanie poziomu modelu do typu zadania programistycznego](/assets/10xdevs/ebook-evals/ch8-tier-routing.webp)

Różnica kosztów między tierami sięga 50-100x. Świadomy dobór poziomu to większa oszczędność niż jakikolwiek coupon.

### Śledzenie kosztów

Nie można optymalizować tego, czego się nie mierzy. Te narzędzia zamykają pętlę widoczności wydatków:

| Narzędzie | Typ | Kluczowa funkcja |
|------|------|-------------|
| **LiteLLM** | OSS proxy | Wydatki per klucz/użytkownik/zespół na 100+ LLM |
| **Langfuse** | OSS | Śledzenie tokenów i kosztów na poziomie trace |
| **Helicone** | Proxy | Dashboardy w czasie rzeczywistym |
| **ccusage** | CLI | Odczytuje logi sesji Claude Code |

#### Kluczowe wnioski
> - Istnieje 100-krotna różnica kosztów między najtańszymi a najdroższymi modelami. Wybór odpowiedniego poziomu dla każdego zadania to największa dźwignia kosztowa.
> - Sam prompt caching może obniżyć koszty tokenów wejściowych o 90%. Jeśli uruchamiasz agenta z długim system prompt, to pierwsza optymalizacja do włączenia.
> - Model routing - kierowanie łatwych zadań do tanich modeli, a trudnych do drogich - oszczędza 35-85% przy zachowaniu 95%+ jakości.
> - Granica Pareto przesuwa się co miesiąc wraz ze spadkiem cen. Przeoceniaj kwartalnie.
> - Tokeny wyjściowe kosztują 3-10x więcej niż wejściowe. Optymalizuj długość outputu, nie tylko inputu.

---

## Rozdział 9: Framework decyzyjny
*Najbardziej przydatny dla: Tech leadów wybierających modele/narzędzia dla swojego zespołu*

Przyswoiłeś dużo informacji z ośmiu rozdziałów. Ten rozdział przekłada je na framework decyzyjny, którego możesz użyć od razu. Zamiast pytać „czego powinienem się dowiedzieć o ewaluacjach?", możesz teraz zapytać „co powinienem zrobić, biorąc pod uwagę moją konkretną sytuację?"

### Co chcesz ustalić?

Zacznij tutaj. Odpowiedź determinuje, ile wysiłku musisz włożyć:

```plaintext
Jakie pytanie zadajesz?
|
+-- „Który model/agent jest ogólnie najlepszy?"
|   --> Sprawdź publiczne benchmarki: SWE-bench Pro, SWE-rebench, Terminal-Bench 2.0
|       Wystarczą 15 minut czytania leaderboardów.
|
+-- „Które narzędzie AI najlepiej działa w MOIM codebase?"
|   --> Przetestuj 2-3 narzędzia na 10-20 prawdziwych zadaniach (Rozdział 7)
|       Jedno popołudnie. Porównaj: pass rate, jakość kodu, koszt.
|
+-- „Czy warto przejść na nowy model/wersję narzędzia?"
|   --> Uruchom te same zadania na starym i nowym modelu
|       Porównaj wyniki i koszty. Jeśli nowy jest lepszy lub tańszy, przełącz.
|
+-- „Ile wydajemy i czy to się opłaca?"
    --> Sprawdź koszty (ccusage, dashboard narzędzia)
        Porównaj z tabelami cenowymi z Rozdziału 8.
        Czy tańsze narzędzie dałoby podobną jakość?
```

![Ilustracja drzewa decyzyjnego pomagajacego wybrac podejscie do ewaluacji modeli i narzedzi](/assets/10xdevs/ebook-evals/ch9-decision-tree.webp)

### Karta oceny wyboru modelu

Przy wyborze między modelami/agentami dla swojego zespołu, użyj ważonej karty oceny. Oto szablon:

| Kryterium | Waga | Model A | Model B | Model C |
|-----------|--------|---------|---------|---------|
| Trafność na twoich zadaniach | 30% | ? | ? | ? |
| Koszt za poprawne rozwiązanie | 25% | ? | ? | ? |
| Niezawodność (pass^k) | 20% | ? | ? | ? |
| Wydajność na twoim stacku | 15% | ? | ? | ? |
| Latencja / dopasowanie do UX | 10% | ? | ? | ? |
| **Suma ważona** | 100% | ? | ? | ? |

![Ilustracja pokazujaca zespol wazacy kryteria wyboru modelu na swiecacej karcie oceny](/assets/10xdevs/ebook-evals/ch9-decision-scorecard.webp)

**Jak to wypełnić:**
1. Dostosuj wagi do swojego kontekstu (zespół wrażliwy na koszty? Zwiększ wagę kosztu. Aplikacja krytyczna? Zwiększ wagę niezawodności.)
2. Uruchom swoją własną ewaluację ([Rozdział 7](#rozdział-7-budowanie-własnych-ewaluacji)), aby wypełnić trafność i niezawodność
3. Użyj tabel kosztów z [Rozdziału 8](#rozdział-8-koszty-szybkość-i-wydajność) do danych o kosztach
4. Oceń 1-5 dla każdej komórki, pomnóż przez wagę, zsumuj

**Przykład z praktyki:** Zespół wybierający między Junie a Claude Code do automatycznych poprawek błędów w produkcyjnym workflow:

| Kryterium | Waga | Junie | Claude Code |
|-----------|--------|-------|-------------|
| Trafność na twoich zadaniach | 30% | 4 (59,5%) | 4 (58,4%) |
| Koszt za poprawne rozwiązanie | 15% | 5 ($0,52) | 1 ($8,41) |
| Niezawodność (pass^k) | 25% | 3 | 5 |
| Wydajność na twoim stacku | 20% | 3 | 5 |
| Latencja / dopasowanie do UX | 10% | 3 | 4 |
| **Suma ważona** | 100% | **3.75** | **4.00** |

*Dane kosztowe/resolve rate na podstawie SWE-rebench (marzec 2026), oceny 1-5 dla niezawodności, stack-fit i UX z testu wewnętrznego zespołu.*

W tym przykładzie Junie wygrywa kosztem, ale Claude Code wygrywa jakością operacyjną: lepsza niezawodność, lepsze dopasowanie do stacku i lepsze zachowanie w codziennym workflow. Dla zespołu produkcyjnego te kryteria przeważyły.

### Dziennik decyzji

Zapisuj każdą decyzję dotyczącą modelu/narzędzia, aby móc do niej wrócić, gdy warunki się zmienią.

```markdown
**Data:** RRRR-MM-DD
**Decyzja:** Wybraliśmy [Model/Agent X] do [przypadek użycia]
**Kluczowe czynniki:** [Top 3 kryteria, które zdecydowały]
**Co testowaliśmy:** [Podejście do ewaluacji, rozmiar próbki, kluczowe wyniki]
**Zaakceptowane ryzyka:** [Znane słabości, z którymi się godzimy]
**Ponowna ocena gdy:** [Warunki wyzwalające - np. „gdy Model Y zostanie wydany", „jeśli koszt przekroczy $X/miesiąc", „za 90 dni"]
```

Trzymaj to we wspólnym dokumencie lub wiki zespołu. Gdy pojawi się nowy model lub zmienią się ceny, sprawdź swoje wyzwalacze „ponowna ocena gdy" przed ponownym uruchomieniem ewaluacji.

### Prezentowanie wyników ewaluacji interesariuszom

Nietechniczni interesariusze potrzebują trzech rzeczy:
1. **Rekomendacja** - który model/agent i dlaczego, w jednym zdaniu
2. **Wpływ kosztowy** - porównanie miesięcznych wydatków, skorygowane o jakość
3. **Ryzyko** - co może pójść nie tak, jak to wykryjecie

Pomiń: definicje pass@k, nazwy benchmarków, metody statystyczne. Jeśli zapytają, masz dane. Zacznij od decyzji biznesowej.

**Szablon:** „Rekomendujemy [Model X] do [przypadek użycia]. Uzyskuje [N%] w naszej wewnętrznej ewaluacji przy [$Y/miesiąc], w porównaniu z [Model Z] przy [N2%] za [$Y2/miesiąc]. Ryzyko to [konkretna słabość]; będziemy monitorować przez [konkretna metryka] i ponownie ocenimy za [horyzont czasowy]."

### Minimalna wystarczająca decyzja (bez infrastruktury ewaluacyjnej)

Jeśli musisz wybrać model w tym tygodniu i nie masz żadnego setupu ewaluacyjnego:

1. **Sprawdź SWE-rebench** ([swe-rebench.com](https://swe-rebench.com)) - jedyny leaderboard, który pokazuje koszt za problem, zużyte tokeny i obejmuje zarówno modele, jak i agentów (Claude Code, Junie itp.). Zaktualizowany marzec 2026. Samo to może wystarczyć do szybkiej decyzji.
2. **Zweryfikuj krzyżowo z SWE-bench Pro** ([labs.scale.com](https://scale.com/leaderboard/swe_bench_pro_public)) - najtrudniejszy benchmark wciąż aktywnie utrzymywany (zaktualizowany marzec 2026). Jeśli model/agent prowadzi zarówno na SWE-rebench, jak i SWE-bench Pro, to silny sygnał. *(Uwaga: LiveCodeBench i BigCodeBench, choć wartościowe, nie były aktualizowane od początku-połowy 2025 - nie opieraj się na nich dla modeli wydanych po tym czasie.)*
3. **Uruchom 10 prawdziwych zadań** - weź 10 niedawnych błędów/funkcjonalności ze swojej bazy kodu. Uruchom każdego kandydata na wszystkich 10. Oceń ręcznie pass/fail. To zajmuje kilka godzin i daje więcej sygnału niż jakikolwiek leaderboard.
4. **Sprawdź koszt** - SWE-rebench już pokazuje koszt-za-problem. Dla modeli nieobecnych na SWE-rebench, użyj tabel cenowych z [Rozdziału 8](#rozdział-8-koszty-szybkość-i-wydajność). Pomnóż solve rate × zadania/miesiąc × koszt/zadanie. Najtańsza opcja, która przechodzi twój próg jakości, wygrywa.

To nie jest rygorystyczne. Jest lepsze niż wybieranie na podstawie liczby z leaderboardu.

*(Świeżość benchmarków zweryfikowana marzec 2026. Sprawdź ponownie przed poleganiem na tej liście - benchmarki się starzeją.)*

### Który framework?

Użyj Szybkiego przewodnika wyboru z [Rozdziału 6](#rozdział-6-frameworki-i-narzędzia-do-ewaluacji), aby dopasować swoją sytuację do rekomendacji frameworka. W skrócie: **Inspect AI** do ewaluacji agentów bez lock-in, **promptfoo** do porównywania promptów (uwaga na przejęcie przez OpenAI), **DeepEval** dla zespołów Python/pytest.

### Build vs Buy

Zobacz szczegółową analizę Build vs Buy w [Rozdziale 6](#rozdział-6-frameworki-i-narzędzia-do-ewaluacji). Zasada: **kupuj** infrastrukturę (wykonanie, storage, UI porównawczy, logika ponawiania); **buduj** części specyficzne dla domeny (rubryki scoringowe, kuratorowane datasety, pipeline danych produkcyjnych).

#### Kluczowe wnioski
> - Zacznij od drzewa decyzyjnego: to, co ewaluujesz, determinuje całe twoje podejście.
> - Użyj ważonej karty oceny, aby uczynić wybór modelu systematycznym i obronnym.
> - Zapisuj decyzje w dzienniku decyzji z jawnymi wyzwalaczami „ponowna ocena gdy" - modele zmieniają się szybko.
> - Dla interesariuszy: zacznij od rekomendacji, kosztu i ryzyka. Pomiń szczegóły techniczne.
> - Jeśli musisz zdecydować w tym tygodniu: sprawdź SWE-rebench + SWE-bench Pro, uruchom 10 prawdziwych zadań, sprawdź koszt. To twoja minimalna wystarczająca decyzja.
> - Kupuj infrastrukturę, buduj części specyficzne dla domeny. Żaden framework nie da ci dobrych rubryk ani przypadków testowych - to twoja ekspertyza.

---

## Rozdział 10: Playbook wdrożeniowy
*Najbardziej przydatny dla: Zespołów gotowych zacząć świadomie dobierać i testować narzędzia AI do kodowania*

Ten rozdział to plan działania w trzech krokach - od „ktoś w zespole zaczął używać Cursora" do „wiemy, co działa, ile kosztuje i kiedy warto zmienić narzędzie."

### Krok 1: Przetestuj na prawdziwych zadaniach (jedno popołudnie)

1. Wybierz 10-15 zamkniętych issue'ów z ostatnich tygodni (mix: bugi, feature'y, refaktory)
2. Uruchom każde zadanie na 2-3 kandydackich narzędziach (np. Claude Code, Cursor, Copilot)
3. Oceń wyniki: kompilacja, testy, jakość kodu, koszt (dashboard narzędzia lub ccusage)
4. Zapisz wyniki w prostej tabeli (arkusz kalkulacyjny lub markdown w repozytorium)

Na tym etapie zobaczysz wyraźne różnice - jedno narzędzie lepiej radzi sobie z twoim stackiem, inne jest tańsze, jeszcze inne szybsze. To wystarczający sygnał do pierwszej decyzji.

### Krok 2: Zmierz w skali zespołu (tygodnie 2-4)

1. Daj wybranemu narzędziu tydzień w produkcyjnym workflow - niech 2-3 developerów używa go do codziennej pracy
2. Zbieraj metryki obiektywne: cycle time, defect rate, koszty API
3. Zbieraj feedback subiektywny: czy narzędzie pomaga czy przeszkadza? (pamiętaj o luce percepcyjnej z badania METR - 39 punktów różnicy między odczuciem a rzeczywistością)
4. Porównaj z baseline'em (jak szybko i z jaką jakością zespół pracował bez narzędzia lub z poprzednim)

### Krok 3: Optymalizuj i powtarzaj (co kwartał)

1. Sprawdź koszty - czy warto zostać na obecnym tierze, czy tańsza alternatywa dałaby podobną jakość?
2. Przetestuj nowe modele/wersje narzędzia na tych samych zadaniach testowych z Kroku 1
3. Odśwież zestaw zadań testowych - dodaj nowe issue'y, usuń te, które stały się zbyt łatwe
4. Zaktualizuj dziennik decyzji (Rozdział 9)

![Ilustracja pokazujaca trzyetapowy rollout testowania i wdrazania narzedzi AI do kodowania](/assets/10xdevs/ebook-evals/ch10-rollout-mission.webp)

### Kiedy wychodzi nowy model lub narzędzie

Modele zmieniają się szybko. Gdy pojawi się nowy kandydat:

1. Uruchom te same 10-15 zadań testowych z Kroku 1 na nowym modelu/narzędziu
2. Porównaj z wynikami obecnego narzędzia - pass rate, jakość, koszt
3. Jeśli nowy jest lepszy lub porównywalny i tańszy → przełącz
4. Jeśli nowy jest gorszy w jakiejkolwiek ważnej kategorii → zostań na obecnym

Daj nowemu narzędziu tydzień w codziennej pracy przed ostateczną decyzją - jedno popołudnie testów nie złapie wszystkich problemów.

### Jak przekonać zespół i kierownictwo

**Zacznij od bólu, nie od teorii.** Nie proponuj „powinniśmy ewaluować nasze narzędzia AI". Zamiast tego znajdź ostatni raz, gdy narzędzie AI wygenerowało błąd, który dotarł do produkcji, lub gdy ktoś wybrał model na podstawie leaderboardu, a okazał się kiepski w waszym stacku. Zacznij stamtąd.

**Co powiedzieć kierownictwu:**
- „Wydajemy $X/miesiąc na narzędzia AI. Przetestowaliśmy alternatywy - [Narzędzie Y] daje podobną jakość za połowę ceny."
- „W zeszłym miesiącu AI wygenerowało [konkretny problem]. Systematyczne testowanie pozwoli nam to wyłapywać wcześniej."

**Antywzorce:**
- Nie buduj rozbudowanej infrastruktury ewaluacyjnej, zanim nie masz choćby 10 zadań testowych
- Nie czekaj na „idealny" zestaw testowy - zacznij od tego, co masz, i iteruj
- Nie rób tego raz na kwartał - testuj przy każdej zmianie narzędzia lub modelu

### Weryfikacja jakości kodu AI w codziennym workflow

Niezależnie od tego, jakiego narzędzia używasz, warto mieć podstawowe bramki jakości dla kodu generowanego przez AI:

```plaintext
AI generuje kod → Build/kompilacja → Istniejące testy → Linter + analiza statyczna
→ Skan bezpieczeństwa (Semgrep/Snyk) → Code review przez developera → Merge
```

![Ilustracja codziennego workflow weryfikacji kodu AI od generacji do merge](/assets/10xdevs/ebook-evals/ch10-daily-quality-workflow.webp)

To nie jest nic nowego - to standardowy pipeline CI/CD. Różnica w kontekście AI: code review jest ważniejszy niż zwykle, bo kod AI częściej zawiera subtelne problemy (podatności bezpieczeństwa, zhallucynowane API, nadmierna złożoność).

#### Kluczowe wnioski
> - Zacznij od jednego popołudnia: 10-15 prawdziwych zadań, 2-3 narzędzia, prosta tabela wyników.
> - Daj wybranemu narzędziu tydzień w codziennej pracy przed decyzją zespołową.
> - Co kwartał: sprawdź koszty, przetestuj nowe modele, odśwież zadania testowe.
> - Code review kodu generowanego przez AI jest ważniejszy niż zwykle - AI generuje więcej podatności bezpieczeństwa (2,74x XSS) i subtelnych problemów.
> - Nie buduj infrastruktury ewaluacyjnej, dopóki nie masz doświadczenia z prostym testem porównawczym.

---

## Podsumowanie: Co dalej

Przeszedłeś całą ścieżkę - od zrozumienia, dlaczego benchmarki zawodzą, przez przegląd tego, co istnieje, po testowanie narzędzi na własnym codebase i zarządzanie kosztami. Oto, co warto zapamiętać.

Ekosystem zmienia się szybko. Benchmarki pojawiają się i odchodzą w 18-miesięcznych cyklach. Ceny modeli spadają 10x rocznie. Nowe narzędzia pojawiają się co kwartał. Ale zasady pod spodem są bardzo stabilne: nie ufaj pojedynczej liczbie z leaderboardu, testuj na swoich zadaniach i porównuj koszt obok jakości.

Najważniejszy test to ten, który faktycznie przeprowadzisz. 10 prawdziwych zadań z twojego codebase uruchomionych na 2-3 narzędziach mówi ci więcej niż jakikolwiek leaderboard. Jedno popołudnie wystarczy na pierwszy sygnał.

Jeśli podejmiesz jedną akcję po przeczytaniu tego przewodnika: otwórz ostatnie issue'y swojego zespołu, wybierz 10 reprezentatywnych, uruchom je na swoim obecnym narzędziu AI i jednej alternatywie. Porównaj wyniki. To wszystko, czego potrzebujesz na start.

Narzędzia są wystarczająco dobre. Benchmarki są niedoskonałe, ale użyteczne jako punkt orientacyjny. Prawdziwa przewaga to nie kwestia tego, które narzędzie wybierzesz - to kwestia tego, czy przetestujesz je na swoich zadaniach, zanim podejmiesz decyzję.

---

## Źródła

### Lektura obowiązkowa (Top 5)

Jeśli przeczytasz tylko 5 źródeł zewnętrznych, niech to będą:
1. [Anthropic: Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) - najlepszy pojedynczy przewodnik po budowaniu ewaluacji agentów
2. [Hamel Husain: LLM Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) - praktyczny, z jasną opinią, od praktyka
3. [Pass@k vs Pass^k](https://www.philschmid.de/agents-pass-at-k-pass-power-k) - wgląd w metrykę, który zmienia sposób myślenia o niezawodności
4. [SWE-rebench](https://swe-rebench.com) - leaderboard, który pokazuje koszt obok jakości
5. [Inspect AI](https://inspect.aisi.org.uk/) - framework, od którego warto zacząć przy budowaniu ewaluacji agentów

### Wszystkie źródła

#### Benchmarki
- [SWE-bench](https://www.swebench.com/) | [SWE-bench Pro](https://scale.com/leaderboard/swe_bench_pro_public) | [SWE-rebench](https://swe-rebench.com)
- [LiveCodeBench](https://livecodebench.github.io/) | [BigCodeBench](https://bigcode-bench.github.io/)
- [FeatureBench](https://arxiv.org/abs/2602.10975) | [Terminal-Bench](https://www.tbench.ai/)
- [TAU-bench](https://github.com/sierra-research/tau-bench) | [RE-Bench](https://metr.org/AI_R_D_Evaluation_Report.pdf)
- [MCP-AgentBench](https://arxiv.org/abs/2509.09734) | [ReliabilityBench](https://arxiv.org/abs/2601.06112) | [SWE-CI](https://arxiv.org/abs/2603.03823)
- [Aider Polyglot](https://aider.chat/docs/leaderboards/) | [Copilot Arena](https://marketplace.visualstudio.com/items?itemName=copilot-arena.copilot-arena)
- [HAL Leaderboard](https://hal.cs.princeton.edu/) | [OpenHands Index](https://openhands.dev/blog/openhands-index)

#### Frameworki ewaluacyjne
- [Inspect AI](https://inspect.aisi.org.uk/) | [promptfoo](https://www.promptfoo.dev) | [DeepEval](https://deepeval.com/)
- [Braintrust](https://www.braintrust.dev) | [LangSmith](https://www.langchain.com/langsmith)
- [EleutherAI lm-eval-harness](https://github.com/EleutherAI/lm-evaluation-harness) | [HELM](https://crfm.stanford.edu/helm/)
- [DSPy](https://github.com/stanfordnlp/dspy) | [Evalica](https://github.com/dustalov/evalica) | [Langfuse](https://langfuse.com/)

#### Systemy agentowe
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) | [OpenHands](https://arxiv.org/abs/2407.16741)
- [HAL Harness](https://github.com/princeton-pli/hal-harness) | [AgentTrace](https://arxiv.org/html/2602.10133)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

#### Metodologia
- [Anthropic: Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [Hamel Husain: LLM Evals FAQ](https://hamel.dev/blog/posts/evals-faq/)
- [Eugene Yan: An LLM-as-Judge Won't Save The Product](https://eugeneyan.com/writing/eval-process/)
- [Pragmatic Engineer: Guide to LLM Evals](https://newsletter.pragmaticengineer.com/p/evals)
- [HuggingFace Evaluation Guidebook](https://huggingface.co/spaces/OpenEvals/evaluation-guidebook)
- [Pass@k vs Pass^k](https://www.philschmid.de/agents-pass-at-k-pass-power-k)
- [EvoEval](https://arxiv.org/abs/2403.19114) | [Data Contamination Survey](https://arxiv.org/html/2502.14425v2)

#### Koszt i ekonomia
- [Artificial Analysis](https://artificialanalysis.ai/) | [a16z: LLMflation](https://a16z.com/llmflation-llm-inference-cost/)
- [Epoch AI: Inference Price Trends](https://epoch.ai/data-insights/llm-inference-price-trends)
- [RouteLLM](https://lmsys.org/blog/2024-07-01-routellm/) | [OpenRouter State of AI 2025](https://openrouter.ai/state-of-ai)

#### Techniki kodowania
- [METR RCT Study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [ThoughtWorks: Spec-Driven Development](https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices)
- [Simon Willison: Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
- [Anthropic: 2026 Agentic Coding Trends](https://resources.anthropic.com/2026-agentic-coding-trends-report)
- [OpenAI Acquires Promptfoo (TechCrunch)](https://techcrunch.com/2026/03/09/openai-acquires-promptfoo-to-secure-its-ai-agents/)
