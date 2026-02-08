# Benchmark criteria

For each criterion, the model is evaluated on a scale of 0 to 1 points.

## Max score

**Total max score: 10 points**

Breakdown by criterion (all max 1 point each):
- Local build (Agent evaluation): 1
- Manual testing (AskUserQuestion tool): 1
- Tech stack (Agent evaluation): 1
- "O nas" page (Agent evaluation): 1
- "Podcast" page (Agent evaluation): 1
- "YouTube" page (Agent evaluation): 1
- "Kursy" section (Agent evaluation): 1
- Consistent UI (AskUserQuestion tool): 1
- Responsive design (AskUserQuestion tool): 1
- SEO Tags (Agent evaluation): 1

**Note:** "Task completion time" is collected for reference but skipped during Agent evaluation and not included in the total max score.

## eval-results.csv Template

Agents should create an `eval-results.csv` file in the attempt directory with the following format:

```csv
Criterion,Score,Max,Notes
Task completion time,[time],N/A,e.g. "45 minutes" or "1 hour 30 minutes"
Local build,1,1,Brief description of build result
Manual testing,1,1,Brief description of testing result
Tech stack,1,1,Verification of dependencies and configuration
O nas page,1,1,Content match status and HTTP status code
Podcast page,1,1,Content match status and real data verification
YouTube page,1,1,Content match status and real channel data verification
Kursy section,1,1,Content match status and 10xDevs course feature verification
Consistent UI,1,1,UI consistency findings
Responsive design,1,1,Responsive design testing result
SEO Tags,1,1,SEO tags verification result
```

**Scoring guidelines:**
- `Score`: Use 1, 0.5, or 0 based on the criterion evaluation details below
- `Max`: Always 1 for scoreable criteria (Task completion time uses N/A)
- `Notes`: Brief explanation of the score (key findings, issues, or confirmation of success)

## Task completion time (AskUserQuestion)

Measured time taken to complete the task.

Provided by the user - skipped during Agent evaluation.

## Local build (Agent evaluation)

### 1pkt
- Build successful

### 0.5pkt
N/A

### 0pkt
- Build failed

## Manual testing (AskUserQuestion tool)

### 1pkt
- Local dev server is starting and all pages are accessible (navigation, styles, content)
- All pages return 200 status code when making GET request

### 0.5pkt
N/A

### 0pkt
- Local dev server is not starting or pages are not accessible (navigation, styles, content)

## Tech stack (Agent evaluation)

### 1pkt
Exact match of the required dependencies:
- Astro 5
- React 19
- Tailwind CSS 4
- Cloudflare Adapter (via `@astrojs/cloudflare`) in `astro.config.mjs`

### 0.5pkt
- Required dependencies are installed (`package.json`) but Cloudflare Adapter is not installed & configured in `astro.config.mjs`

### 0pkt
- Missing any of required dependencies (`package.json`) and Cloudflare Adapter is not installed & configured in `astro.config.mjs`

## "O nas" page (Agent evaluation)

### 1pkt
- Dedicated page found in repository
- Page content is verified and matches the copy & page content from `./_context/przeprogramowani.md` file
- GET request to the page returns 200 status code

### 0.5pkt
- Dedicated page found in repository
- Page content does not match (or match partially) the copy & page content from `./_context/przeprogramowani.md` file
- GET request to the page returns 200 status code

### 0pkt
- No dedicated page found in repository or no 200 status code returned when making GET request

## "Podcast" page (Agent evaluation)

### 1pkt
- Dedicated page found in repository
- GET request to the page returns 200 status code
- Page content is verified and matches the copy & podcast content from `./_context/przeprogramowani.md` file
- IMPORTANT: Both Przeprogramowany Podcast and OpanujAI Podcast are displayed and not based on any mocks

### 0.5pkt
- Dedicated page found in repository
- GET request to the page returns 200 status code
- Page content is based on mocks or does not display episodes from both Przeprogramowany Podcast and OpanujAI Podcast

### 0pkt
- No dedicated page found in repository or no 200 status code returned when making GET request

## "YouTube" page (Agent evaluation)

### 1pkt
- Dedicated page found in repository
- GET request to the page returns 200 status code
- Page content is verified and matches the copy & YouTube content from `./_context/przeprogramowani.md` file
- IMPORTANT: Przeprogramowani channel episodes are displayed and not based on any mocks

### 0.5pkt
- Dedicated page found in repository
- GET request to the page returns 200 status code
- Page content is based on mocks or does not display episodes from Przeprogramowani channel

### 0pkt
- No dedicated page found in repository or no 200 status code returned when making GET request

## "Kursy" section (Agent evaluation)

### 1pkt
- Dedicated component or page section found in repository
- Component or page section content is verified and matches the copy & courses content from `./_context/przeprogramowani.md` file
- Main page (index.astro) or Hero component features 10xDevs course

### 0.5pkt
- Dedicated component or page section found in repository
- Component or page section content does not match (or match partially) the copy & courses content from `./_context/przeprogramowani.md` file
- Main page (index.astro) or Hero component features 10xDevs course

### 0pkt
- No dedicated component or page section found in repository or no 10xDevs course featured in the main page (index.astro) or Hero component

## Consistent UI (AskUserQuestion tool)

### 1pkt
- UI is consistent across all pages (manual testing)

### 0.5pkt
N/A

### 0pkt
- Styles are broken or inconsistent across all pages (manual testing)

## Responsive design (AskUserQuestion tool)

### 1pkt
- Containers, components and navigation are responsive (manual testing)

### 0.5pkt
- Majority of the page is responsive with some minor issues (manual testing)

### 0pkt
- Overall layout is not responsive or has major issues (manual testing)

## SEO Tags (Agent evaluation)

### 1pkt
- There's a dedicated SEO component or meta tags in repository
- SEO tags are connected to all pages (or layout that covers all pages)
- SEO component or meta tags are verified and matches the copy & page content from `./_context/przeprogramowani.md` file

### 0.5pkt
- There's a dedicated SEO component or meta tags in repository
- SEO component or meta tags do not match (or match partially) the copy & page content from `./_context/przeprogramowani.md` file

### 0pkt
- No dedicated SEO component or meta tags in repository or major content discrepancy between the copy & page content from `./_context/przeprogramowani.md` file and the SEO component or meta tags