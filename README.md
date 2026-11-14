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
Opening or reloading the controller starts a fresh demo: all saved flight updates are cleared,
so flights return to On Time. Existing passenger tabs keep their displayed status until
**Refresh Status** is pressed; their selected flight numbers are not cleared.
The passenger page starts with an On Time mock flight. On refresh, if there is no matching
published update, it also falls back to On Time mock flight details.
On Time is green, short delays (up to 60 minutes) are yellow, and longer delays,
cancellations, and diversions are red. Delays with an unconfirmed duration are also red.
These demo colours do not change compensation eligibility.
For mock scenarios, the passenger page shows demo support-choice dialogs for short delays,
long delays, and cancellations. For controller-published updates, it shows choices only
when the update includes entitlements; a delay with no entitlements has no popup. The demo
controller publishes four illustrative choices for delays of at least one hour and for
cancellations. Use **Reset flight to on time** in the controller's update log to replace a
saved disruption update.
Controller updates appear on the passenger page only after the passenger presses
**Refresh Status**. Delayed flights also show a delay-amount meter in the disruption reason card.

The controller preview includes a placeholder for a passenger's native-language message;
it does not read phone numbers or passports. The passenger page has built-in English,
Traditional Chinese, and Japanese translations. Switching languages is local and immediate,
with no translation API, API key, or translation charges.

## Optional: run it locally with Live Server (VS Code)

GitHub Pages demos need only the live links above; VS Code and Live Server are not required.

1. Install the **Live Server** extension (`ritwickdey.LiveServer`).
2. Open this repo folder in VS Code.
3. Click **Go Live** in the status bar (or right-click `index.html` → **Open with Live Server**).

The browser opens `http://127.0.0.1:5500/`, which redirects to the passenger page at
[`http://127.0.0.1:5500/UI%20Passenger/index.html`](http://127.0.0.1:5500/UI%20Passenger/index.html).
Open the controller in a second tab at
[`http://127.0.0.1:5500/UI%20Controller/index.html`](http://127.0.0.1:5500/UI%20Controller/index.html).
Any save in VS Code auto-reloads the pages.

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

