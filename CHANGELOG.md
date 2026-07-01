# Changelog

All notable changes to GreasyFork Premium will be documented in this file.

The format is based on Keep a Changelog and this project follows Semantic Versioning.

---

## [1.2.1] - 2026-07-01

### Added

* Personal notes attached to scripts with autosave support
* Automatic light/dark theme switching based on the operating system theme
* Redesigned theme selector with Light, System, and Dark modes

### Improved

* Unread discussion visibility
* Pagy pagination styling
* Script card and script page action layouts
* Sidebar option wrapping for long website names
* Overall spacing, alignment, and visual consistency

### Fixed

* Profile website links overflowing outside their container

---

## [1.2.0] - 2026-06-17

### Added

* SleazyFork support
* Script details directly inside script cards
* Modern editor toolbar for comments and discussions
* Lightbox support for standalone content images
* Collapsible sidebar groups with saved state
* Sidebar navigation buttons for jumping to the top or bottom
* Improved mobile layout for script information and search menu

### Improved

* Complete theme system redesign with separate light and dark themes
* Smoother theme transitions
* Statistics chart recoloring with Chart.js retry hooks
* Favorites system reliability and validation
* Desktop and mobile sidebar behavior
* Lightbox interface, navigation, zoom, and touch interactions
* Additional-info extraction and sanitization
* Safari compatibility for statistics and ratings display

### Fixed

* Favorites filtering when using URLs containing `language=all` and `set` parameters
* Potential favorites overwrite caused by empty cache states
* False "favorite added" messages when the server did not confirm the action
* Favorite actions no longer displayed on library scripts
* Overly broad global styles affecting unrelated elements
* Various mobile display inconsistencies

---

## [1.1.2] - 2026-04-26

### Added

* Sync token mechanism to ignore stale asynchronous responses
* Pending overrides to preserve optimistic UI state during updates

### Improved

* Favorites synchronization logic to prevent outdated data from overriding recent actions
* Favorite state consistency across mobile and desktop environments

### Fixed

* Favorite star resetting after activation on iPhone Safari with Userscripts
* Race condition between optimistic UI updates and asynchronous synchronization

---

## [1.1.1] - 2026-04-17

### Added

* Script translations

### Improved

* Code rendering in script editing
* Theme rendering on the sign-in page
* Text input backgrounds in editing forms

### Fixed

* Moderator logs column headers display

---

## [1.1.0] - 2026-04-05

### Added

* One-click favorites system directly on script cards
* Redesigned favorites management
* Direct install button for quick script installation

### Improved

* Faster navigation and smoother browsing experience

### Fixed

* Moderator logs table overflow by adding horizontal scrolling

---

## [1.0.1] - 2026-03-29

### Added

* Korean language support
* Turkish language support
* Polish language support
* Dutch language support
* Swedish language support
* Romanian language support
* Vietnamese language support
* Indonesian language support
* Malay language support
* Thai language support
* Quick access buttons (Settings and Script Edit)
* Theme switcher

### Improved

* Mobile interface organization and usability
* Mobile layout spacing

### Fixed

* Flash of unstyled content (FOUC) on desktop during page load

---

## [1.0.0] - 2026-01-17

### Added

* Initial release of GreasyFork Premium
* Modernized GreasyFork interface
* Theme support
* Productivity-focused enhancements
* User experience improvements

