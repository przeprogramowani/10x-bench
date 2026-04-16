# New Models Benchmark Plan

Adding benchmark attempts for GLM-5.1, Minimax M2.7, Qwen 3.6 Plus, and GPT-5.4.

> Progress is tracked via **TaskCreate / TaskUpdate / TaskList** tools. At the start of each phase the agent creates tasks; marks them `in_progress` when working, `completed` when done.

---

## Phase 1 — GLM-5.1

- [x] **Agent**: Create attempt folders `eval-results/glm-51-attempt-{1..5}/` with empty `eval-result.csv` stubs
- [ ] **Me**: Run benchmark attempts in GLM-5.1 and fill in `eval-result.csv` for each

---

## Phase 2 — Minimax M2.7

- [x] **Agent**: Create attempt folders `eval-results/minimax-m27-attempt-{1..5}/` with empty `eval-result.csv` stubs
- [ ] **Me**: Run benchmark attempts in Minimax M2.7 and fill in `eval-result.csv` for each

---

## Phase 3 — Qwen 3.6 Plus

- [x] **Agent**: Create attempt folders `eval-results/qwen-36-plus-attempt-{1..5}/` with empty `eval-result.csv` stubs
- [ ] **Me**: Run benchmark attempts in Qwen 3.6 Plus and fill in `eval-result.csv` for each

---

## Phase 4 — GPT-5.4

- [ ] **Agent**: Create attempt folders `eval-results/gpt-54-attempt-{1..5}/` with empty `eval-result.csv` stubs
- [ ] **Me**: Run benchmark attempts in GPT-5.4 and fill in `eval-result.csv` for each

---

## Final step

- [ ] **Agent**: Run `npm run process-results` and verify dashboard includes all new attempts
