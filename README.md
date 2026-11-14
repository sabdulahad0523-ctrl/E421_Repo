# E421_Repo

> ▶ **Passenger UI:** [Open the live passenger page](https://sabdulahad0523-ctrl.github.io/E421_Repo/UI%20Passenger/index.html)
>
> **IOC Controller:** [Open the live controller](https://sabdulahad0523-ctrl.github.io/E421_Repo/UI%20Controller/index.html)
>
> Opens in any browser on any computer or phone — no clone, no install, no `git pull` needed.
> The site rebuilds automatically (~1 minute) after every push to `main`.

Flight Status prototype (HK Express hackathon UI).

## Passenger page and controller

Open [the passenger page](https://sabdulahad0523-ctrl.github.io/E421_Repo/UI%20Passenger/index.html)
and [the IOC controller](https://sabdulahad0523-ctrl.github.io/E421_Repo/UI%20Controller/index.html).
Keep both pages open in tabs in the same browser. The controller publishes flight updates
to same-origin `localStorage`; on **Refresh Status**, the passenger page applies the newest
published update only when its entered flight number matches. The controller and passenger
flight-number inputs remain independent. Changes do not synchronize to other people's browsers.
If there is no matching published update, the passenger page falls back to its mock flight details.
For mock scenarios, the passenger page shows demo support-choice dialogs for short delays,
long delays, and cancellations. For controller-published updates, it shows choices only
when the update includes entitlements; a delay with no entitlements has no popup.
Controller updates appear on the passenger page only after the passenger presses
**Refresh Status**. Delayed flights also show a delay-amount meter in the disruption reason card.

## Run it locally with Live Server (VS Code)

1. Install the **Live Server** extension (`ritwickdey.LiveServer`).
2. Open this repo folder in VS Code.
3. Click **Go Live** in the status bar (or right-click `index.html` → **Open with Live Server**).

The browser opens `http://127.0.0.1:5500/`, which redirects to the passenger page at
[`http://127.0.0.1:5500/UI%20Passenger/index.html`](http://127.0.0.1:5500/UI%20Passenger/index.html).
Open the controller in a second tab at
[`http://127.0.0.1:5500/UI%20Controller/index.html`](http://127.0.0.1:5500/UI%20Controller/index.html).
Any save in VS Code auto-reloads the pages.

### View the local server from another computer (same Wi-Fi)

`.vscode/settings.json` already binds Live Server to all network interfaces, so:

1. On this machine find your local IP: `ipconfig getifaddr en0` (macOS) / `ipconfig` (Windows).
2. On the other computer open `http://<that-ip>:5500` — e.g. `http://192.168.1.24:5500`.

Your machine has to stay awake and both devices must be on the same network, so use the
GitHub Pages link above whenever you need a link that works anywhere.

## Files

- `index.html` – entry point used by Go Live / GitHub Pages (redirects to the UI)
- [`UI Passenger/index.html`](UI%20Passenger/index.html) – the flight status page
- [`UI Passenger/styles.css`](UI%20Passenger/styles.css) – passenger page styles
- [`UI Controller/index.html`](UI%20Controller/index.html) – IOC delay update console
- [`UI Controller/styles.css`](UI%20Controller/styles.css) – IOC console styles

GitHub Pages can publish these ordinary HTML/CSS files without `.nojekyll`. That marker is
mainly needed when bypassing Jekyll for files or folders whose names begin with `_`.

## Run it without VS Code

```bash
python3 -m http.server 5500
# then open http://127.0.0.1:5500/
```

> Note: `UI Passenger/index.html` also opens fine as a `file://` URL, but serving it over
> HTTP (Live Server) matches how the real backend will be wired up.

