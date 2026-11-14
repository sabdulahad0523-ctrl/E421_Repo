# E421_Repo

> ▶ **Live demo: <https://sabdulahad0523-ctrl.github.io/E421_Repo/>**
>
> Opens in any browser on any computer or phone — no clone, no install, no `git pull` needed.
> The site rebuilds automatically (~1 minute) after every push to `main`.

Flight Status prototype (HK Express hackathon UI).

## Run it locally with Live Server (VS Code)

1. Install the **Live Server** extension (`ritwickdey.LiveServer`).
2. Open this repo folder in VS Code.
3. Click **Go Live** in the status bar (or right-click `index.html` → **Open with Live Server**).

The browser opens `http://127.0.0.1:5500/`, which redirects to the prototype at
`http://127.0.0.1:5500/UI%20Passenger/index.html`. Any save in VS Code auto-reloads the page.

### View the local server from another computer (same Wi-Fi)

`.vscode/settings.json` already binds Live Server to all network interfaces, so:

1. On this machine find your local IP: `ipconfig getifaddr en0` (macOS) / `ipconfig` (Windows).
2. On the other computer open `http://<that-ip>:5500` — e.g. `http://192.168.1.24:5500`.

Your machine has to stay awake and both devices must be on the same network, so use the
GitHub Pages link above whenever you need a link that works anywhere.

## Files

- `index.html` – entry point used by Go Live / GitHub Pages (redirects to the UI)
- `UI Passenger/index.html` – the flight status page
- `UI Passenger/styles.css` – all styles for the page
- `.nojekyll` – tells GitHub Pages to serve the files as-is (no Jekyll build)

## Run it without VS Code

```bash
python3 -m http.server 5500
# then open http://127.0.0.1:5500/
```

> Note: `UI Passenger/index.html` also opens fine as a `file://` URL, but serving it over
> HTTP (Live Server) matches how the real backend will be wired up.

