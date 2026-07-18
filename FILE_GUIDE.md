# File Guide

Use this guide while learning and editing the portfolio.

## Root files

| File | What it does |
| --- | --- |
| `package.json` | Lists packages, project information, and npm commands. |
| `index.html` | The single HTML page where React is loaded. |
| `vite.config.js` | Configures Vite and the React plugin. |
| `eslint.config.js` | Defines the code-quality checks. |
| `.gitignore` | Prevents generated and local files from being committed to GitHub. |

## Main React files

| File | What it does |
| --- | --- |
| `src/main.jsx` | Starts React and renders the app inside the HTML page. |
| `src/App.jsx` | Combines every section in the order shown on the website. |
| `src/index.css` | Contains global resets, fonts, and reusable base styles. |
| `src/App.css` | Contains the portfolio layout, component styles, animations, and responsive rules. |
| `src/styles/variables.css` | Stores reusable colours, spacing, shadows, and widths. |
| `src/data/portfolioData.js` | Stores your personal information, services, projects, skills, education, achievements, and process. |

## Layout and reusable components

| File | What it does |
| --- | --- |
| `src/components/layout/Header.jsx` | Logo, desktop navigation, mobile menu, and call-to-action button. |
| `src/components/common/SectionHeading.jsx` | Reusable heading used at the top of sections. |
| `src/components/common/PortfolioAssistant.jsx` | Small local portfolio question-and-answer assistant. It does not call a paid API. |
| `src/components/cards/ServiceCard.jsx` | Reusable service card. |
| `src/components/cards/ProjectCard.jsx` | Reusable detailed project card and visual mockup. |

## Page sections

| File | What it does |
| --- | --- |
| `src/sections/Hero.jsx` | First screen, introduction, buttons, photo, and floating AI labels. |
| `src/sections/About.jsx` | Short personal story and key facts. |
| `src/sections/Services.jsx` | Services generated from the data file. |
| `src/sections/Projects.jsx` | Featured projects generated from the data file. |
| `src/sections/Experience.jsx` | Current experience and practical focus. |
| `src/sections/Skills.jsx` | Skills grouped by area and confidence label. |
| `src/sections/Education.jsx` | Education and hackathon achievements. |
| `src/sections/Process.jsx` | Four-step way of working. |
| `src/sections/Contact.jsx` | Contact information and a form that opens the visitor's email app. |
| `src/sections/Footer.jsx` | Footer navigation, social links, and copyright. |

## A safe learning order

1. Change text and links in `src/data/portfolioData.js`.
2. Change colours in `src/styles/variables.css`.
3. Change the order of sections in `src/App.jsx`.
4. Edit one section component at a time.
5. Study `src/App.css` to understand layout and responsiveness.

Run `npm run dev` while editing. Vite refreshes the browser after each saved change.
