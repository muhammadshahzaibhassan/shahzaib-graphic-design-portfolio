# Muhammad Shahzaib — Portfolio

A fast, fully static graphic design portfolio built with **Astro 5**, vanilla CSS and vanilla JS.
Dark and moody theme · Syne + Inter fonts · accent `#ff4d2e`.

## 1. Run it

```bash
npm install
npm run dev      # development server at http://localhost:4321
npm run build    # creates the production site in /dist
npm run preview  # preview the built site locally
```

## 2. HOW TO ADD A NEW PROJECT

Adding a project = **one markdown file + one images folder**.

1. **Add images.** Create a folder `src/assets/projects/<project-name>/` and put your
   images inside (e.g. `cover.jpg`, `image-1.jpg`, `image-2.jpg`).
2. **Copy the template.** Duplicate `src/content/projects/brand-identity-nova.md`
   and rename it, e.g. `my-new-project.md`. The file name becomes the URL
   (`/work/my-new-project/`).
3. **Edit the frontmatter** (the part between the `---` lines):
   - `title` – project name
   - `category` – e.g. `Branding`. Using a new category automatically creates a new filter button
   - `year` – a number such as `2026`
   - `description` – 1–2 sentences
   - `cover` – `"../../assets/projects/<project-name>/cover.jpg"`
   - `coverAlt` – describe the cover image (accessibility)
   - `tools` – list like `["Photoshop", "Illustrator"]`
   - `featured` – `true` shows it on the Home page
   - `order` – optional; lower numbers come first on Home
4. **Write the story** below the frontmatter in Markdown. Add images with
   `![Describe the image](../../assets/projects/<project-name>/image-1.jpg)`.
5. **Publish.**
   ```bash
   git add .
   git commit -m "Add new project"
   git push
   ```
   Cloudflare Pages rebuilds automatically.

### Placeholder images included (replace with your own, keep the names)

```
src/assets/projects/brand-identity-nova/   cover.jpg  image-1.jpg  image-2.jpg
src/assets/projects/poster-series-neon/    cover.jpg  image-1.jpg  image-2.jpg
src/assets/projects/travel-photo-story/    cover.jpg  image-1.jpg  image-2.jpg
src/assets/projects/motion-reel-2026/      cover.jpg  image-1.jpg  image-2.jpg
src/assets/about/portrait.jpg              (your photo for the About page)
public/cv.pdf                              (your CV)
public/og-image.jpg                        (image shown when your link is shared)
```

## 3. Change colors, fonts and spacing

Everything lives in `:root` at the top of `src/styles/global.css`.

- **Colors:** `--color-bg`, `--color-surface`, `--color-text`, `--color-muted`, `--color-accent`, `--color-border`
- **Fonts:** `--font-display` and `--font-body`. Also update the Google Fonts link in `src/layouts/BaseLayout.astro`
- **Sizes:** `--text-xs` … `--text-3xl` (fluid, using `clamp`)
- **Spacing:** `--space-1` … `--space-9`
- **Shape / motion:** `--radius`, `--transition`

Other things to edit:
- Nav links: array at the top of `src/components/Header.astro`
- Social links: `src/components/Footer.astro` and `src/pages/contact.astro`
- Site URL: `astro.config.mjs` and `public/robots.txt`
- Contact form: set your Web3Forms access key (free at https://web3forms.com) in `src/pages/contact.astro`

## 4. Deploy to Cloudflare Pages (free)

1. Push this project to a GitHub repository.
2. In Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Choose the repository and use:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable (optional):** `NODE_VERSION` = `20`
4. Click **Save and Deploy**. After the first deploy, put your real `*.pages.dev` URL into `astro.config.mjs` and `public/robots.txt`.

## Project structure

```
public/            favicon, robots.txt, cv.pdf, og-image.jpg
src/assets/        images (optimized by Astro)
src/components/    Header, Footer, ProjectCard, CategoryFilter, Lightbox
src/content/       projects/*.md  (one file per project)
src/layouts/       BaseLayout.astro
src/pages/         index, about, contact, 404, work/
src/styles/        global.css  (all design tokens)
```
