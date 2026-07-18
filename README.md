# Janani Portfolio

A complete, responsive developer portfolio built with React, Vite, plain CSS, and Lucide React icons.

## 1. Run the project

Open this folder in VS Code. Then open the terminal with **Ctrl + `** and run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal, usually `http://localhost:5173`.

## 2. Add your files

- Your professional photo belongs at `public/images/janani-professional.png`.
- Your résumé belongs at `public/resume/janani-kuppan-resume.pdf`.

The photo is already included in this download. Add your résumé before publishing so the résumé buttons work.

## 3. Edit your information

Most portfolio content is stored in one place:

```text
src/data/portfolioData.js
```

Start there when changing your name, email, links, projects, skills, education, achievements, or services.

## 4. Important commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the development website |
| `npm run build` | Creates the production version in `dist` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the code for common mistakes |

## 5. Publish with GitHub and Vercel

After you edit and test the website:

```bash
git init
git add .
git commit -m "Build Janani portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Then import the GitHub repository in Vercel. Vercel should automatically detect Vite. Use:

- Build command: `npm run build`
- Output directory: `dist`

## Folder structure

```text
janani-portfolio-complete/
├── public/
│   ├── images/
│   │   └── janani-professional.png
│   └── resume/
│       └── ADD_YOUR_RESUME_HERE.md
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── common/
│   │   └── layout/
│   ├── data/
│   ├── sections/
│   ├── styles/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

Read `FILE_GUIDE.md` for a simple explanation of every code file.
