# Minimal React Portfolio (scaffold)

This repository is a minimal scaffold for a personal portfolio built with React + Vite (JavaScript). It follows the STATS140XP assignment requirements: multi-page site, navbar navigation, professional content placeholders, photo/resume placeholder, and projects displayed in a grid.

Local usage

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Files of interest

- `index.html` — app root
- `src/main.jsx` — entry
- `src/App.jsx` — routes and layout
- `src/pages/*` — Home, About, Projects, Contact
- `src/components/*` — Header, Footer, ProjectCard, ProjectGrid
- `src/data/projects.js` — placeholder projects (edit)
- `public/resume.pdf` — replace with your resume PDF so it is accessible from `/resume.pdf`

Notes
- Replace placeholder text, images, and `public/resume.pdf` with your actual content.
- This scaffold intentionally excludes deployment steps per your request.

GitHub Pages deployment

This project is configured to deploy automatically with GitHub Actions.

1. Push this repository to GitHub on branch `main`.
2. In GitHub: `Settings -> Pages`, set `Source` to `GitHub Actions`.
3. Push any change to `main` (or run the workflow manually).
4. After deploy completes, your site URL will be:

`https://<your-username>.github.io/<repo-name>/`

For this account and repo naming pattern, an example would be:

`https://phoebechen88.github.io/Website/`

Contact form setup (Formspree)

The Contact page submits to Formspree using an environment variable.

1. Create a form in Formspree and copy the endpoint URL.
2. Create a `.env` file in the project root with:

`VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`

3. Restart the dev server.
4. For GitHub Pages, add the same key/value in repository secrets/variables used by your workflow environment.
