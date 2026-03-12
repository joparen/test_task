# Deploy Brand-in-AI Monitor

The app is a **static SPA**. Build output is in `dist/`. Deploy that folder (or connect your repo) to any static host.

---

## Option 1: Vercel (recommended, free)

1. Push your repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. Leave defaults: **Build Command** `npm run build`, **Output Directory** `dist`.
4. Click **Deploy**. Vercel will build and give you a URL like `https://your-project.vercel.app`.

**CLI (optional):**
```bash
npm i -g vercel
vercel
# follow prompts; run `vercel --prod` for production
```

---

## Option 2: Netlify

1. Push your repo to GitHub/GitLab/Bitbucket.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect the repo. Netlify will use the `netlify.toml` in this repo (build: `npm run build`, publish: `dist`).
4. Deploy. You’ll get a URL like `https://random-name.netlify.app`.

**CLI (optional):**
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## Option 3: Your own server (nginx / Apache / Node)

1. Build locally:
   ```bash
   npm run build
   ```
2. Upload the contents of `dist/` to your server (e.g. `/var/www/brand-in-ai` or your docroot).
3. Configure the server so **all routes** serve `index.html` (SPA fallback):

   **nginx:**
   ```nginx
   server {
     root /var/www/brand-in-ai;
     index index.html;
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

   **Apache** (in `dist/` or site root, as `.htaccess`):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **Node (serve):**
   ```bash
   npx serve -s dist -l 3000
   ```
   (Use a process manager like PM2 for production.)

---

## Option 4: GitHub Pages

1. In `vite.config.ts`, set `base: '/your-repo-name/'` (e.g. `base: '/brand-in-ai-monitor/'`).
2. Build: `npm run build`.
3. In the repo: **Settings** → **Pages** → Source: **GitHub Actions** (or deploy the `dist/` folder with the `gh-pages` package).

---

## After deploy

- The app uses **localStorage** only (no backend). Data is per browser/device.
- Use **HTTPS** in production.
- To use a custom domain, set it in your host’s dashboard (Vercel/Netlify/custom server).
