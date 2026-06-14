# Rumi MVP UI (docs/rumi-mvp)

This folder contains a static MVP of the Rumi frontend that can be hosted on GitHub Pages.

How to preview locally:

1. Serve the `docs/rumi-mvp` folder (e.g., with Python):

```bash
cd docs/rumi-mvp
python3 -m http.server 8000
# then open http://localhost:8000
```

GitHub Pages:
- If your repository is configured to serve `docs/` as Pages source, the site will be available at `https://<user>.github.io/<repo>/rumi-mvp/`.
- Alternatively, move the files to the repository root or `gh-pages` branch as desired.

Notes:
- The MVP uses local sample data at `data/example_1.json`.
- This is a static demo — wallet, Hedera, and Pinata integrations are not included yet.
