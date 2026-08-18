# Privacy Policy for GreasyFork Premium Chrome Extension

**Effective date:** August 16, 2026

GreasyFork Premium is a browser extension that enhances the user interface and workflows of Greasy Fork and Sleazy Fork. This policy explains what data the extension processes, why it is processed, where it is stored, and when it is transmitted.

## Data processed by the extension

The extension may process the following information to provide its features:

* Interface preferences, including theme, density, and collapsed navigation groups
* Greasy Fork or Sleazy Fork user and script identifiers visible on supported pages
* Favorite script identifiers and favorite-set information
* Personal script notes entered by the user
* Script metadata and icon URLs displayed by supported pages or declared by scripts
* Page content required to enhance navigation, script cards, previews, editor tools, and account actions

## How data is used

This information is used exclusively to provide the extension's user-facing functionality. GreasyFork Premium does not use data for advertising, profiling, credit decisions, or purposes unrelated to its single purpose of enhancing Greasy Fork and Sleazy Fork.

## Storage and retention

Preferences, favorite identifiers, and personal notes are stored locally in `chrome.storage.local`. Data is separated by supported website. Existing userscript settings may be imported once from the supported website's `localStorage` during migration.

To display these features inside Greasy Fork and Sleazy Fork pages, locally stored values are made available to the extension's page-side component only on the active supported website. The extension does not intentionally include personal notes in network requests.

Locally stored data remains available until the user removes it, clears the extension's storage, resets the Chrome profile, or uninstalls the extension. GreasyFork Premium does not use `chrome.storage.sync`.

## Network communication

The extension communicates with Greasy Fork or Sleazy Fork over HTTPS when necessary to load enhanced page information or perform an action explicitly requested by the user, such as updating favorites. These requests use the user's existing session with the applicable website and are governed by that website's own terms and privacy policy.

The extension may request script icons or metadata resources referenced by scripts or supported pages for display purposes. When such a resource is loaded, its hosting provider may receive standard network information such as the user's IP address, user agent, and request headers. Those requests are governed by the resource provider's own privacy policy.

GreasyFork Premium does not transmit personal notes to the extension developer or to a developer-operated server.

## Data sharing and sale

GreasyFork Premium has no analytics, telemetry, advertising SDK, or developer-operated collection service. The developer does not sell user data and does not share user data with third parties for advertising, marketing, or unrelated purposes.

Data is disclosed only as necessary to provide requested features: to Greasy Fork or Sleazy Fork for supported-site operations, and to a referenced resource host when the browser loads a script icon or metadata resource.

## Limited use

GreasyFork Premium's use and transfer of user data complies with the Chrome Web Store User Data Policy, including its Limited Use requirements. User data is processed only as necessary to provide or improve the extension's disclosed, user-facing features. It is not used for personalized advertising, sold to third parties, or used for creditworthiness or lending purposes.

## Permissions

* **Storage:** required to retain interface preferences, favorite identifiers, collapsed navigation state, and personal notes locally.
* **Access to Greasy Fork and Sleazy Fork:** required to inject the interface enhancements and perform features requested on those websites.

The extension requests only the permissions and site access needed for these functions.

## Security

Supported-site communication uses HTTPS. Third-party executable code is not downloaded at runtime; Highlight.js is packaged with the extension.

For information about reporting security vulnerabilities, please see the **[Security Policy](../SECURITY.md)**.

## User controls

Users can remove locally stored data by clearing GreasyFork Premium's extension storage through Chrome or by uninstalling the extension. Favorite changes already submitted to Greasy Fork or Sleazy Fork must be managed through the applicable website.

## Changes to this policy

Material changes to data practices will be documented in an updated version of this policy and disclosed as required by Chrome Web Store policies.

## Contact

If you have any questions about this Privacy Policy, you can:

* Start a **[GitHub Discussion](../../../discussions)** for general or privacy-related questions.
* Open a **[GitHub Issue](../../../issues/new?template=bug_report.yml)** if you believe you've found a privacy-related problem.

Do not include passwords, authentication cookies, private notes, or other sensitive information in a public issue.

---

> [!NOTE]
> **Userscript:** See the [Userscript Privacy Policy](PRIVACY.md).
