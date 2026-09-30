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
- Contact uses `you@example.com` and `https://example.com` on purpose. Replace both with your real email and profile URLs.
- `url` is the canonical address. Update it when you have a domain.

Section labels, the nav, and the hero buttons are in that same file.

## Theme

The first visit follows the operating system light or dark setting. The header control saves a choice in this browser only. It does not change the file. Animations stay off when the system asks for reduced motion.

## Deploy it for free

The site is static. Any host that can run `npm run build` and publish the `dist` folder will work. No database and no server.

**Cloudflare Pages**

1. Push the project to a Git host.
2. Create a Pages project and connect the repo.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set the Node.js version to 22.

**Netlify**

Same build command and output directory. The free tier is enough for this site.

**GitHub Pages**

Use a GitHub Action that runs `npm run build` and publishes `dist`, or upload the contents of `dist` to a Pages site. Set `url` in `src/data/site.ts` to the Pages address, for example `https://yourname.github.io/your-repo`.

**Vercel**

Import the repo and leave the framework preset on Astro. Build command `npm run build`, output `dist`.
