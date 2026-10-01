# The Blessing Home

Static rebuild of [theblessinghome.com](https://www.theblessinghome.com) for free hosting on GitHub Pages. The live Squarespace site is unchanged until you point DNS here.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Publish on GitHub Pages

1. Create a GitHub repository (public) and push this project.
2. In the repo, go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. GitHub will serve the site at `https://YOURUSER.github.io/theblessinghome/` until the custom domain is attached.

## Point Squarespace DNS at GitHub Pages

Keep the domain registered at Squarespace. After Pages is enabled:

1. In GitHub Pages settings, set **Custom domain** to `theblessinghome.com` (this repo already includes a `CNAME` file).
2. In Squarespace Domains, open DNS settings for `theblessinghome.com` and add:

   | Type | Host | Data |
   |------|------|------|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `YOURUSER.github.io` |

   Use your GitHub username in the `www` CNAME (for a user site it may be `YOURUSER.github.io`; for a project site GitHub still wants `YOURUSER.github.io`).

3. Turn on **Enforce HTTPS** in GitHub Pages after DNS has propagated (often a few hours, sometimes up to 48).
4. Do not cancel Squarespace until `https://www.theblessinghome.com` loads this new site.

GitHub’s current Pages IPs: [Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Notes

- Content and photos were copied from the existing site you own.
- Script headings use **Great Vibes** (free) instead of Squarespace’s licensed Pauline font.
- Brochure (2018) and newsletter (March 2025) PDFs are in `assets/files/`. The 2018 newsletter is kept for the archive.
