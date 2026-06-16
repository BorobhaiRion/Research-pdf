# Borobhairion Research — Research Paper Analysis Tool
#Help me integrate AI to automate the process
A fully client-side, single-file web application for structured academic paper analysis. Fill in what you know, skip what you don't, and export a clean professional PDF report — all without an account, server, or internet connection after the page loads.

---

## What It Does

Researchers and students often struggle to analyze papers consistently or communicate their findings in a structured way. This tool solves that by providing a guided 20-section evaluation form that covers everything from problem understanding to real-world deployment concerns — and compiles your answers into a downloadable PDF report instantly.

---

## Features

- **20 Analysis Sections** covering the full lifecycle of a research paper evaluation
- **Hero landing page** with privacy-first messaging
- **PDF export** — professional, structured report auto-downloads on click
- **Dark mode** toggle with preference saved to localStorage
- **Google Scholar shortcut** button for quick paper lookup
- **Micro-animations** — staggered card reveals, focus glows, typing indicators, scroll reveal, and shimmer effects
- **Section completion tracking** — green checkmarks appear as you fill sections, with a progress bar in the header
- **100% private** — no data ever leaves your device, no tracking, no accounts, no backend

---

## Sections Covered

| #   | Section                        |
| --- | ------------------------------ |
| 1   | Paper Identification           |
| 2   | Research Area Classification   |
| 3   | Problem Understanding          |
| 4   | Research Gap Analysis          |
| 5   | Novelty / Originality          |
| 6   | Research Question / Hypothesis |
| 7   | Objective Evaluation           |
| 8   | Methodology Analysis           |
| 9   | Feasibility Analysis           |
| 10  | Benefit Analysis               |
| 11  | Expected Contribution          |
| 12  | Result Analysis                |
| 13  | Limitations                    |
| 14  | Future Research Opportunity    |
| 15  | Final Research Idea Evaluation |
| 16  | Reproducibility                |
| 17  | Ethics                         |
| 18  | Comparison                     |
| 19  | Failure Cases                  |
| 20  | Real-world Deployment          |

---

## Tech Stack

| Layer          | Choice                                                   |
| -------------- | -------------------------------------------------------- |
| Structure      | Pure HTML5                                               |
| Styling        | Vanilla CSS with CSS variables for theming               |
| Logic          | Vanilla JavaScript (no frameworks)                       |
| Fonts          | Google Fonts — Inter + Playfair Display                  |
| PDF Generation | [jsPDF 2.5.1](https://github.com/parallax/jsPDF) via CDN |
| Storage        | localStorage (dark mode preference only)                 |
| Backend        | None                                                     |

---

## Getting Started

No installation, no build step, no dependencies to install.

**Option 1 — Open directly**
Download `index.html` and open it in any modern browser.

**Option 2 — Clone and serve**

```bash
git clone https://github.com/your-username/borobhairion-research.git
cd borobhairion-research
# Open index.html in your browser, or serve with any static server:
npx serve .
```

That's it. The tool works immediately.

---

## How to Use

1. Open the app — you land on the **hero page**
2. Click **"Let's Create →"** to enter the form
3. Fill in whichever fields are relevant to your paper — all fields are optional
4. Use the **Google Scholar →** button in the header to look up papers in a new tab
5. Toggle **dark mode** from the header if preferred
6. When ready, click **"Generate PDF Report"** at the bottom
7. A structured PDF downloads automatically to your device

---

## PDF Output

The generated PDF includes:

- A cover page with report title, generation date, and tool credit
- Only the sections and questions you actually answered — nothing blank
- Section headings, question labels, and answers in a clean typographic hierarchy
- Page numbers and copyright footer on every page
- Filename format: `research-analysis-YYYY.pdf`

---

## Privacy

> Your data never leaves your device. No servers. No tracking. No accounts.

Every analysis you perform stays entirely in your browser. The app makes no network requests during use (fonts and jsPDF are loaded once from CDN on first load). Nothing is logged, stored remotely, or shared.

---

## Feedback

Have a suggestion or found a bug? A feedback form is available to help improve this tool. Submissions are reviewed and used to guide future updates.

---

## Roadmap

Planned improvements based on collected feedback:

- [ ] Save and resume sessions via localStorage
- [ ] Import paper metadata automatically from DOI
- [ ] Section-by-section navigation sidebar
- [ ] Custom PDF color themes
- [ ] Export to DOCX in addition to PDF
- [ ] AI-assisted field suggestions (optional, user-provided API key)

---

## License & Copyright

© 2025 Borobhairion. All rights reserved.

This project is proprietary. Unauthorized copying, distribution, or modification of this software is not permitted without explicit written permission from the author.

---

## Author

Built by **Borobhairion**
