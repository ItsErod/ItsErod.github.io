# Ethan

A personal site for Ethan: a single static page with About, Projects, Setup, and Contact. The first version uses placeholder copy wherever a real detail is still missing.

The look is quiet and current — off-white and near-black, one blue accent, Geist, and a light/dark toggle that follows the system until you choose otherwise.

## Run it locally

You need Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open the URL Astro prints. The dev server uses port **43123**.

To build the static site and preview that build:

```bash
npm run build
npm run preview
```

The built files are in `dist/`.

## Edit the content

Everything you would customize is in [`src/data/site.ts`](src/data/site.ts).

- Search for `[Placeholder]` and replace those strings.
- Name, Toronto, the focus list, and the MacBook and gaming-setup headings are already filled in. Change them if they should read differently.
- Projects are cards in `projects.items`. Copy a card to add one, or delete a card to remove it.
- Leave a project `href` as `""` until you have a URL. The card shows “Add a link” until then.
- GitHub and Steam are filled in. Email is still `you@example.com`, and LinkedIn has no URL until you add one.
- `url` is the canonical address. It is already set to `https://itserod.github.io`.

Section labels, the nav, and the hero buttons are in that same file.

## Theme

The first visit follows the operating system light or dark setting. The header control saves a choice in this browser only. It does not change the file. Animations stay off when the system asks for reduced motion.

## Deploy

The live site is GitHub Pages at [https://itserod.github.io](https://itserod.github.io). The repository is [ItsErod/ItsErod.github.io](https://github.com/ItsErod/ItsErod.github.io).

A push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes the `dist` folder. This is a user site, so it is served at the domain root and Astro is not given a subpath `base`.

The site is static. Another host can use the same build: `npm run build`, then publish `dist`. Node.js 22.12 or newer.
