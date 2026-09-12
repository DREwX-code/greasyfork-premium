# Frequently Asked Questions

## General

### What is GreasyFork Premium?

GreasyFork Premium is available as both a Chrome extension and a userscript. It enhances Greasy Fork and Sleazy Fork with a modern interface, improved navigation, productivity features, and quality-of-life improvements.

### Is GreasyFork Premium free?

Yes. The project is completely free and open source.

### Does it work on SleazyFork?

Yes. SleazyFork support was added in v1.2.0.

### Which websites are supported?

GreasyFork Premium is designed for Greasy Fork and Sleazy Fork.
Support for additional websites is not planned at this time.

### Does it modify installed scripts?

No. GreasyFork Premium only improves the website interface and user experience.

### Should I use the Chrome extension or the userscript?

The Chrome extension is recommended for Chromium-based browsers because it integrates more directly with the browser and completely eliminates the original interface flash during page loading.  
The userscript remains available for users who prefer a userscript manager or use browsers where the extension is not available.

See the **[Installation Guide](INSTALLATION.md)** for both installation methods.

### Why do I briefly see the original Greasy Fork theme when a page loads?

This is known as a Flash of Unstyled Content (FOUC).  
The Chrome extension completely eliminates this issue by applying the required styles earlier in the page loading process.

The userscript version minimizes FOUC as much as possible, but it cannot completely eliminate it because of how userscript managers inject scripts into web pages.

For more information, see the **[Troubleshooting Guide](TROUBLESHOOTING.md#the-original-greasy-fork-theme-briefly-appears-before-the-premium-theme-loads)**.

## Compatibility

### Which browsers are supported?

The **Chrome extension** is designed for Chromium-based browsers, including:

- Google Chrome
- Microsoft Edge
- Brave
- Opera
- Other compatible Chromium-based browsers

The **userscript version** can be used on modern browsers including Chrome, Firefox, Edge, Brave, Opera, and Safari with a compatible userscript manager.

See the **[Installation Guide](INSTALLATION.md)** for browser-specific installation options.

### Which userscript managers are supported?

**Tampermonkey is recommended for most users.**

Depending on your browser, GreasyFork Premium can also be installed with:

- Violentmonkey
- ScriptCat
- Userscripts (Safari)

> [!NOTE]
> Some users have experienced issues with Violentmonkey failing to load external libraries required by GreasyFork Premium. If the script does not load correctly, try Tampermonkey instead. See [#3](../../../issues/3) for more information.

For a complete browser and userscript manager compatibility table, see the **[Installation Guide](INSTALLATION.md)**.

## Features

### How do favorites work?

Favorites can be added directly from script cards using the star button.

### Can I switch between light and dark themes?

Yes. GreasyFork Premium includes light, dark, and automatic system theme modes.

### Does it support mobile devices?

Yes. The userscript includes a responsive interface and mobile-specific improvements.

Compatibility may vary depending on the mobile browser and userscript manager. Safari on iPhone and iPad can use the userscript through compatible managers such as **Userscripts**.

The Chrome extension is primarily intended for desktop Chromium-based browsers.

## Support

### I found a bug. What should I do?

Open a **[GitHub Issue](../../../issues/new?template=bug_report.yml)** and include as much information as possible, including your browser, GreasyFork Premium version, installation method, and steps to reproduce the issue.

### Can I suggest a new feature?

Yes. Share your idea through **[GitHub Discussions](../../../discussions)**. Community suggestions may be considered for future releases.

## Privacy

### Does it collect any data?

No. GreasyFork Premium does not collect, transmit, sell, or share personal data.

For more information, see:

* **[Chrome Extension Privacy Policy](PRIVACY-EXTENSION.md)**
* **[Userscript Privacy Policy](PRIVACY-USERSCRIPT.md)**
