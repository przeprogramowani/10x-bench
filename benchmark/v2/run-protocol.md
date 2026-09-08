# V2 operator protocol

This is operator-only material. Do not pass this file, `eval.md`, other attempts, or historical evaluations to the candidate. `prompt.md` plus `assessment.md` is the complete candidate-visible task. The prepared package also contains the frozen dependency baseline. Isolation is procedural, not a sandbox security claim.

## Prepare, do not launch implicitly

A paid campaign and selected models require a separate user request. V1 models are not automatically rerun. Prepare a fresh directory `eval-attempts/v2/{model-id}-attempt-{N}` and a distinct operator record under `eval-results/v2/{model-id}-attempt-{N}`. Never reuse or erase a historical directory. Model display/environment/pricing metadata belongs to V2 only. Record the exact model, harness version and settings rather than silently applying settings from another environment.

Before candidate launch capture stable Astro/React/Tailwind package versions and the registry response with UTC retrieval time. Use the latest stable major at start, excluding prereleases; do not query current versions again during evaluation to change that baseline. If lookup fails, do not start an attempt with a guessed baseline. Resolve package versions as close to start as possible and verify no release occurred between lookup and start using registry publication timestamps. Record actual candidate installed versions separately. Include the adapter's compatibility requirements in evaluator checks; do not fix the adapter to a historical major.

Pin the entire benchmark bundle by its SHA-256 revision and individual document hashes. Pass identical candidate text to each run in a campaign. Record the full prepared physical directory and run/session IDs. Keep operator/evaluator records outside the candidate directory. Copy only candidate-visible files into that directory.

## Execute

Set `startedAt` and an absolute `deadlineAt = startedAt + 60 minutes` immediately before launch. Research, reasoning, tools, builds and tests consume that budget. Native goal mode is preferred when the installed harness supports it; record whether it was available and used. Verify the harness's actual current interface before execution rather than inventing a command-line goal flag.

When native goal mode is unavailable, any continuation is exactly: "Continue toward the original specification. Verify the outcome and record what remains incomplete." Record all continuations and retain the original deadline. Do not split the specification into feature requests, give repair hints, or reopen a completed attempt after evaluator feedback. Clarification reply: "Use the supplied specification and your best judgment; document assumptions."

An observation timeout does not stop the run: poll the same live process/session handle. Resume an interrupted session only inside its original deadline. If the handle is terminal or unavailable, record an interruption and preserve artifacts; a replacement run has a new identity, separate authorization and a link to the interrupted run. Never hide retries, delete failed attempts or choose only the best outcomes.

At candidate completion, deadline, cancellation or terminal interruption, stop the owned candidate process if needed and freeze artifacts with checksums. Record terminal state, completion timestamp, elapsed seconds and any procedural violation. Never stop unrelated processes. Work after the deadline, cross-attempt/evaluator reading, coaching, or publication makes an attempt invalid for ranking, with evidence. No remote deployment is permitted; do not provide Cloudflare credentials.

## Record

`attempt.json` is operator-owned and includes `benchmarkVersion: "v2"`, `attemptId`, `modelId`, `attemptNumber`, `benchmarkRevision`, `promptHash`, `modelName`, `agentEnvironment`, physical `attemptDirectory`, `startedAt`, `deadlineAt`, `completedAt`, `elapsedSeconds`, `terminalState`, `goalMode`, `sessions`, `dependencyBaseline`, and artifact manifest references. Registry evidence includes package version, major, captured/publication times and saved response reference. Null completion fields are allowed only while preparing/running, not in a finalized evaluation.

Candidate-owned `VERIFICATION.md` and its logs are frozen with the implementation. Evaluator logs, human feedback and `evaluation.json` belong under the matching V2 result directory. Never manufacture candidate evidence from evaluator tests. Screenshot outputs use `/screenshots/v2/{attemptId}.png` and versioned filmstrips. Costs use only recorded session IDs plus matching canonical cwd; later manual work in the same folder is excluded. Unknown costs remain null, never zero.

## Revisions and publication

Changing requirements or weights creates a new benchmark bundle revision. Evaluate each attempt against the bundle captured at its start. Do not silently regrade V1 or older V2 attempts. Keep pending or invalid results out of the public ranking. Complete human review before finalization. Publishing the benchmark dashboard is separate from the candidate's prohibition on deploying its website and requires the normal release authorization.
