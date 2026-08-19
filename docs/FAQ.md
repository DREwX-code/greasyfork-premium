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

The Chrome extension is recommended for supported Chromium-based browsers because it integrates more directly with the browser and completely eliminates the original interface flash during page loading.  
The userscript remains available for users who prefer a userscript manager or use browsers where the extension is not available.

See the **[Installation Guide](INSTALLATION.md)** for both installation methods.

### Why do I briefly see the original Greasy Fork theme when a page loads?

This is known as a Flash of Unstyled Content (FOUC).  
The Chrome extension completely eliminates this issue by applying the required styles earlier in the page loading process.

The userscript version minimizes FOUC as much as possible, but it cannot completely eliminate it because of how userscript managers inject scripts into web pages.

For more information, see the **[Troubleshooting Guide](TROUBLESHOOTING.md#the-original-greasy-fork-theme-briefly-appears-before-the-premium-theme-loads)**.

## Compatibility

### Which browsers are supported?

- The Chrome extension is designed for Chromium-based browsers such as Chrome, Edge, Brave, and Opera.
- The userscript version supports modern browsers including Chrome, Firefox, Edge, Safari, Brave, and Opera when used with a compatible userscript manager.

### Which userscript managers are supported?

The userscript works best with:

* Tampermonkey
* Violentmonkey
* Userscripts (Safari)

## Features

### How do favorites work?

Favorites can be added directly from script cards using the star button.

### Can I switch between light and dark themes?

Yes. GreasyFork Premium includes light, dark, and automatic system theme modes.

### Does it support mobile devices?

The userscript includes mobile interface improvements, although compatibility may vary depending on the browser and userscript manager.  
The Chrome extension is intended for desktop Chromium-based browsers.

## Support

### I found a bug. What should I do?

Open a **[GitHub Issue](../../../issues/new?template=bug_report.yml)** and include as much information as possible.

### Can I suggest a new feature?

Absolutely! Share your ideas through **[GitHub Discussions](../../../discussions)**. Community feedback helps shape future updates.

## Privacy

### Does it collect any data?

No. GreasyFork Premium does not collect, transmit, sell, or share personal data.

For more information, see:

* **[Chrome Extension Privacy Policy](PRIVACY-EXTENSION.md)**
* **[Userscript Privacy Policy](PRIVACY-USERSCRIPT.md)**
