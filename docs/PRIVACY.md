# Privacy Policy for the GreasyFork Premium Userscript

Last updated: August 16, 2026

This policy applies to the GreasyFork Premium userscript distributed for use with a compatible userscript manager.

## Data Collection

The GreasyFork Premium userscript does not send personal data to the developer and does not use any developer-operated data collection service.

No analytics, tracking systems, telemetry, or advertising services are used.

## Local Storage

Some settings may be stored locally in your browser to improve your experience, such as:

- Theme preferences
- Interface density and navigation settings
- Favorite script identifiers
- Personal script notes

These values are stored by the userscript in the supported website's `localStorage`. A temporary navigation marker may also be stored in `sessionStorage`. This locally stored information is not intentionally sent to the developer.

Favorite actions explicitly requested by the user are submitted to GreasyFork or SleazyFork using the user's existing website session. Favorite changes already submitted to either website are governed by that website's own terms and privacy policy.

Removing the userscript does not automatically remove previously stored website data. Users can remove it by clearing the applicable website's local storage or site data in their browser.

## Userscript Permissions

The userscript runs only on `https://greasyfork.org/*` and `https://sleazyfork.org/*`. It declares `@grant none` and does not use privileged userscript-manager APIs.

## External Resources

The userscript may load external resources required for specific features.

Highlight.js is loaded from cdnjs for syntax highlighting. The userscript may also request script metadata or icon resources referenced by GreasyFork, SleazyFork, or an installed script. These resource providers may receive standard network information such as the user's IP address, user agent, and request headers, subject to their own privacy policies.

The userscript also communicates with GreasyFork or SleazyFork over HTTPS when required to load enhanced information or perform a user-requested action. No data is sold or shared for advertising, marketing, profiling, or unrelated purposes.

## Open Source

The complete userscript source code is publicly available on GitHub and can be reviewed by anyone.

## Changes to This Policy

This policy may be updated when necessary. Any significant changes will be documented in future releases.

## Contact

If you have any questions about this Privacy Policy, you can:

- Start a **[GitHub Discussion](../../../discussions)** for general questions.
- Open a **[GitHub Issue](../../../issues/new?template=bug_report.yml)** if you believe you've found a privacy-related problem.

For information about reporting security vulnerabilities, please see the **[Security Policy](../SECURITY.md)**.
