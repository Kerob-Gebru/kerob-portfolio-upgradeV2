# Kerob — Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Dark, bold theme with a terminal-style hero and a gradient accent (amber → teal) that ties together a software/tech identity with the coffee-market focus of my current project.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- next/font (Space Grotesk, Inter, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            # App Router pages, layout, global styles
components/     # Section components (Hero, About, Skills, Projects, ...)
data/           # Editable content: projects.ts, skills.ts
```

## Customizing content

Before deploying, search the codebase for `TODO` comments and fill in:

- `app/layout.tsx` — page title, description
- `components/Hero.tsx` — terminal intro lines
- `components/About.tsx` — bio
- `components/Experience.tsx` — real timeline (jobs, education, dates)
- `components/Contact.tsx` — email, GitHub, LinkedIn links
- `data/projects.ts` — project descriptions and repo/live links
- `data/skills.ts` — skill list

## Deploying

The easiest option is [Vercel](https://vercel.com/new) (built by the Next.js team):

1. Push this repo to GitHub (see below).
2. Import the repo at vercel.com/new.
3. Deploy — no configuration needed.

## Pushing to GitHub

If this project isn't already in a GitHub repo:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repo first at [github.com/new](https://github.com/new), then run the commands above from this project's root folder.

## License

MIT — feel free to fork and adapt.
