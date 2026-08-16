# Privacy Policy for GreasyFork Premium Userscript

**Effective date:** August 16, 2026

GreasyFork Premium is a userscript that enhances the user interface and workflows of GreasyFork and SleazyFork. This policy explains what data the userscript processes, why it is processed, where it is stored, and when it is transmitted.

## Data processed by the userscript

The userscript may process the following information to provide its features:

* Interface preferences, including theme, density, and collapsed navigation groups
* GreasyFork or SleazyFork user and script identifiers visible on supported pages
* Favorite script identifiers and favorite-set information
* Personal script notes entered by the user
* Script metadata and icon URLs displayed by supported pages or declared by scripts
* Page content required to enhance navigation, script cards, previews, editor tools, and account actions

## How data is used

This information is used exclusively to provide the userscript's user-facing functionality. GreasyFork Premium does not use data for advertising, profiling, credit decisions, or purposes unrelated to enhancing GreasyFork and SleazyFork.

The userscript does not send personal data to the developer and does not use analytics, telemetry, advertising services, or a developer-operated data collection service.

## Storage and retention

Preferences, favorite identifiers, collapsed navigation state, and personal notes are stored in the supported website's `localStorage`. Data is separated between GreasyFork and SleazyFork by the browser's website-origin storage.

A temporary internal-navigation marker may be stored in `sessionStorage` for the active browser tab.

Locally stored data remains available until the user clears the applicable website's local storage or site data. Removing the userscript does not automatically remove data previously stored by the browser.

## Network communication

The userscript communicates with GreasyFork or SleazyFork over HTTPS when necessary to load enhanced page information or perform an action explicitly requested by the user, such as updating favorites. These requests use the user's existing session with the applicable website and are governed by that website's own terms and privacy policy.

Highlight.js is loaded from cdnjs to provide syntax highlighting. The userscript may also request script icons or metadata resources referenced by scripts or supported pages. When an external resource is loaded, its hosting provider may receive standard network information such as the user's IP address, user agent, and request headers. Those requests are governed by the resource provider's own privacy policy.

GreasyFork Premium does not intentionally include personal notes in network requests and does not transmit them to the developer or to a developer-operated server.

## Data sharing and sale

GreasyFork Premium has no analytics, telemetry, advertising SDK, or developer-operated collection service. The developer does not sell user data and does not share user data with third parties for advertising, marketing, or unrelated purposes.

Data is disclosed only as necessary to provide requested features: to GreasyFork or SleazyFork for supported-site operations, to cdnjs when loading Highlight.js, and to a referenced resource host when the browser loads a script icon or metadata resource.

## Permissions

* **GreasyFork and SleazyFork access:** the userscript runs only on `https://greasyfork.org/*` and `https://sleazyfork.org/*` to provide its interface enhancements and user-requested features.
* **Userscript privileges:** the userscript declares `@grant none` and does not use privileged userscript-manager APIs.

The userscript requests only the website access needed for its functionality.

## Security

Supported-site communication uses HTTPS. Highlight.js is loaded over HTTPS from cdnjs; no other third-party executable library is requested by the userscript.

For information about reporting security vulnerabilities, please see the **[Security Policy](../SECURITY.md)**.

## User controls

Users can remove locally stored data by clearing the applicable GreasyFork or SleazyFork site data in their browser. Favorite changes already submitted to GreasyFork or SleazyFork must be managed through the applicable website.

Users can stop all future userscript processing by disabling or uninstalling GreasyFork Premium through their userscript manager.

## Changes to this policy

Material changes to data practices will be documented in an updated version of this policy and in the applicable userscript release.

## Contact

If you have any questions about this Privacy Policy, you can:

* Start a **[GitHub Discussion](../../../discussions)** for general or privacy-related questions.
* Open a **[GitHub Issue](../../../issues/new?template=bug_report.yml)** if you believe you've found a privacy-related problem.

Do not include passwords, authentication cookies, private notes, or other sensitive information in a public issue.

---

> [!NOTE]
> **Chrome extension:** See the [Chrome Extension Privacy Policy](PRIVACY_EXTENSION.md).
