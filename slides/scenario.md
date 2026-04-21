1. migracja strony przeprogramowani.pl
- było: nest.js, pug, netlify
- jest: astro, svelte, cloudflare
- praca z gatunku - jak działa to po co ruszać
- no ale poszło - dzięki ai, spec-driven development, zarządzaniu kontekstem i dzięki claude code

2. refleksja - a może AI zrobi to one-shot
- czy ja wciąż jestem potrzebny?
- może najlepsze modele poradzą sobie beze mnie?
- a przy okazji - dawno nie testowałem alternatyw do claude-code jak GPT-5.3 Codex czy modeli Open Source
- sprawdźmy to w bezpiecznym, niezależnym projekcie
- tak właśnie narodził się 10xbench.ai

3. czym jest 10xbench.ai
- prompt wsadowy - @prompt.md
- wygląda to jak proste polecenie, ale testuje sprawczość i autonomię agenta
- bootstrap projektu, działający dev server, rzeczywiste dane, integracje z zewnętrznymi feedami, responsywność, hosting na cloudflare
- pierwsze efekt z GPT-5.3-Codex - szczęka na podłodze
- komentarz Marcina, z którym pracujemy od 3 lat nad tematem programowania z ai - naprawdę wystarczył 1 prompt? (naprawdę)
- no dobra mamy prompt i co dalej? 5-10 uruchomień żeby uśrednić niedeterministyczny charakter ai
- case study skilla /eval-model
- założenie - jeśli strona powstanie to jest ok, jeśli nie - to nie
- rzeczywistość bardziej złożona - 10 punktowy scorecard
- założenie - no dobra, jest coś takiego jak llm-as-a-judge więc AI będzie to dla mnie testować
- rzeczywistość - mix testu automatycznego (build, dane, etc.) i manualnego (feeling, taste, responsywność)
- przekrojowy zestaw modeli - od Mistrali i Qwenów przez Opusy i GPT-5.4 (frontier models)
- niesamowicie ciekawe insighty:
1) frontier vs open source - przepaść rezultatów między "za darmo" a "za drogo" - niestety
2) bezpieczeństwo - niektórzy agenci pracując w opencode wychodzili poza mój folder roboczy, inni tego nie robili
3) komfort pracy z AI - niektóre modele w ogóle nie są w stanie postawić działącej strony
4) działanie agenta - niektóre modele robią bootstrap z danych treningowych a nie live cli, a więc mamy stary stack
5) wątpliwe inspiracje - niektóre modele podkradają layout robiąc scraping żywej strony przeprogramowani.pl
6) kreatywność - niektóre modele robią niemal identyczny layout 5/5 prób, niektóre co próba to inna strona (jak GPT)
7) unikalność - każdy model ma powtarzalne mocne i słabe strony - jedne dają raczej responsywne strony, inne realne dane, inne halucynują, etc.
8) oszukiwanie - scorecard i prompt w jednym repo - chińskie modele podglądały kartę ocen
9) vibe coding nie działa - żadna ze stron nie była gotowa na produkcję, ale rezultaty to ogromna lekcja
- na przyszłość - izolacja prób tworzenia stron - każdy agent w kontenerze z pustym folderem i dostępem do neta, nie wie o reszcie projektu 

4. jak zaprojektować własny benchmark
- wybierz preferowany stack
- definicja zadań - stan początkowy + prompt -> stan końcowy
- scorecard - co testujesz automatem, co manualnie, czy podpowiadasz i ratujesz model czy tylko one-shot
- ile prób i jakie kryteria oceny - best-of-n, average-of-n, etc.
- jeśli masz bazę, automatyzuj - ci/cd, etc. - powtarzalne procesy (np. opakuj w skilla)
- powtarzalność i prezentacja wyników - firmowy benchmark, leaderborad, etc.
- open source / internal source - open-closed principle (nie zepsuj core kolego, ale możesz dodawać własne ćwiczenia)

5. dlaczego benchmarki z internetu nie wystarczą
-TODO