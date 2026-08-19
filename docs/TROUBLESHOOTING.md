# Troubleshooting

This guide covers the most common issues and their solutions.

## Favorites are not saving

### Possible Causes

- An outdated version of GreasyFork Premium is installed.
- The userscript manager failed to save local data.
- Browser storage has been cleared.

### Solution

1. Update GreasyFork Premium to the latest version.
2. Refresh the page.
3. Re-add the favorite if necessary.

---

## Favorites reset on iPhone Safari

### Status

Fixed in v1.1.2.

### Solution

1. Update to the latest version of GreasyFork Premium.
2. Reinstall the script if necessary.
3. Refresh Greasy Fork.

---

## The original Greasy Fork theme briefly appears before the Premium theme loads

### Status

Reduced in the userscript version and fully resolved in the Chrome extension.

### Explanation

This effect is known as a Flash of Unstyled Content (FOUC). It can occasionally occur before the userscript finishes loading.

Because userscript managers inject scripts after the page has already started loading, the original Greasy Fork interface may briefly appear before GreasyFork Premium is applied.

### Solution

The **Chrome extension completely eliminates this issue** by applying the required styles earlier in the page loading process.

You can install it from the **[Chrome Web Store](https://chromewebstore.google.com/detail/greasyfork-premium/ignelmkihplolallppbdppolefgkmadi)**.

### Note

The userscript version still minimizes FOUC as much as possible, but it cannot completely eliminate it because of how userscript managers inject scripts into web pages.

---

## Statistics charts do not update correctly

### Possible Causes

- Browser caching
- Delayed Chart.js initialization
- Temporary Greasy Fork page issues

### Solution

1. Refresh the page.
2. Wait a few seconds for the chart to reload.
3. Update GreasyFork Premium if available.

---

## Mobile layout looks incorrect

### Solution

1. Update to the latest version.
2. Refresh the page.
3. Report the issue with:
   - Browser name
   - Device model
   - Screenshot of the problem

---

## Theme changes are not applied

### Solution

1. Refresh the page.
2. Disable conflicting userscripts.
3. Verify that GreasyFork Premium is enabled.

---

## Still need help?

If your issue is not listed here, please open a **[GitHub Issue](../../../issues/new?template=bug_report.yml)** and include:

- Browser version
- Userscript manager
- GreasyFork Premium version
- Steps to reproduce the issue
- Screenshots (if available)

Before opening a new issue, please check the **[FAQ](FAQ.md)** to see if your question has already been answered.

If you're unsure whether you've found a bug or simply have a question, start a discussion on **[GitHub Discussions](../../../discussions)**.
