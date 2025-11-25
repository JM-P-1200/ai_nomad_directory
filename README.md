# NomadAI.tools — Production-ready starter

This repo is a production-ready starter for a static directory of AI tools for digital nomads, integrated with Netlify CMS and a GitHub Action that compiles `content/tools/*.md` into `data/tools.json`.

## Quick setup (Termux on Android / Honor Pad)

1. Install Termux (F-Droid recommended), then:
```bash
pkg update -y && pkg upgrade -y
pkg install git curl openssh -y
```

2. Create repo on GitHub and push these files. Example:
```bash
git init
git add .
git commit -m "init"
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

3. On GitHub: enable Actions (default).

4. On Netlify:
   - Create new site > Import from Git > GitHub, select repo.
   - Set branch `main`.
   - Deploy site.
   - In Site Settings > Identity: enable Identity.
   - In Identity > Services: enable Git Gateway OR enable the GitHub App (recommended).
   - Visit `https://<your-site>.netlify.app/admin/` to log in and use the CMS.

5. Edit content:
   - Use the Netlify CMS Admin to create/edit tools. Each entry will create a file in `content/tools/` and the GitHub Action will compile `data/tools.json`.

## Notes
- Replace `admin/config.yml` repo value with your GitHub repo path.
- The Action uses `gray-matter` to parse front-matter from markdown files, and produces `data/tools.json` used by the frontend.
- You can add images by uploading via Netlify CMS (media_folder is `static/uploads`).

