// ==UserScript==
// @name         GreasyFork Premium - Full Dark Theme
// @namespace    https://github.com/DREwX-code/greasyfork-premium
// @version      1.0.0
// @description  Full dark theme stylesheet library for GreasyFork Premium.
// @author       Dℝ∃wX
// @license      Apache-2.0
// ==/UserScript==

(function registerGreasyForkPremiumTheme(root) {
    'use strict';

    const registry = root.GFPlusThemeLibraries || (root.GFPlusThemeLibraries = Object.create(null));
    registry.fullDark = String.raw`
:root[data-theme="dark"][data-theme-variant="full-dark"] {
    color-scheme: dark;
    --overall-background-color: #080808;
    --overall-text-color: #eeeeee;
    --link-color: #8ab4f8;
    --link-visited-color: #b7ccf7;
    --texty-link-visited-color: #b8b8b8;
    --content-background-color: #121212;
    --content-border-color: #2b2b2b;
    --content-box-shadow-color: rgba(0, 0, 0, .72);
    --content-separator-color: #242424;
    --tab-active-background-color: rgba(138, 180, 248, .12);
    --tab-active-box-shadow-color: rgba(138, 180, 248, .16);
    --tab-active-top-border-color: #8ab4f8;
    --inactive-item-background-color: #1a1a1a;
    --code-background-color: #0b0b0b;
    --user-content-background-color-gradient-1: #151515;
    --user-content-background-color-gradient-2: #101010;
    --user-content-border-left-color: #303030;
    --list-option-background-color-gradient-1: #151515;
    --list-option-background-color-gradient-2: #101010;
    --list-option-hover-background-color-gradient-1: #202020;
    --list-option-hover-background-color-gradient-2: #181818;
    --list-option-hover-box-shadow-top: rgba(255, 255, 255, .035);
    --list-option-hover-box-shadow-bottom: rgba(0, 0, 0, .55);
    --notice-background-color: #101820;
    --notice-border-color: #4b9ee8;
    --notice-text-color: #eeeeee;
    --alert-background-color: #241d0d;
    --alert-border-color: #b78618;
    --alert-text-color: #f2d58a;
    --chart-background-color: #8ab4f8;
    --chart-border-color: #8ab4f8;
    --install-stats-bar-color: #8ab4f8;
    --install-stats-bar-hover-color: #aecbfa;
    --install-stats-grid-color: #303030;
    --install-stats-text-color: #d0d0d0;
    --highlight-background-color: #2d270f;
    --expander-color: #8ab4f8;
    --expander-background-color: rgba(138, 180, 248, .12);
    --pagination-background-color: #191919;
    --pagination-hover-background-color: #252525;
    --list-option-button-background-color: #181818;
    --list-option-button-color: #eeeeee;
    --list-option-button-border-color: #343434;
    --list-option-button-background-color-gradient-1: #1b1b1b;
    --list-option-button-background-color-gradient-2: #141414;
    --code-container-border-color: #303030;
    --prettyprint-background-color: #0b0b0b;
    --prettyprint-color: #eeeeee;
    --sidebar-background: #101010;
    --close-sidebar-background: #1b1b1b;
    --close-sidebar-border-bottom: #303030;
    --shadow-soft: 0 10px 30px rgba(0, 0, 0, .58);
    --shadow-hover: 0 14px 34px rgba(0, 0, 0, .68);
    --container-glow-stroke: rgba(138, 180, 248, .16);
    --container-glow-color: rgba(138, 180, 248, .045);
    --focus-ring-color: rgba(138, 180, 248, .48);
    --gfplus-scrollbar-track-start: #0a0a0a;
    --gfplus-scrollbar-track-end: #080808;
    --gfplus-scrollbar-track-border: #252525;
    --gfplus-scrollbar-thumb-start: #414141;
    --gfplus-scrollbar-thumb-end: #363636;
    --gfplus-scrollbar-hover-start: #5a5a5a;
    --gfplus-scrollbar-hover-end: #4c4c4c;
    --gfplus-scrollbar-border: #161616;
    --gfplus-scrollbar-shadow: rgba(255, 255, 255, .06);
    --hljs-bg: #090909;
    --hljs-bg-alt: #111111;
    --hljs-border: #2b2b2b;
    --hljs-text: #e7e7e7;
    --hljs-line-number: #6f6f6f;
    --hljs-comment: #8b8b8b;
    --hljs-keyword: #c5a5ff;
    --hljs-number: #f2b86b;
    --hljs-string: #78dba9;
    --hljs-title: #8ab4f8;
    --hljs-attr: #f19a65;
    --hljs-tag: #65d1d1;
    --hljs-meta: #a6a6a6;
}

html[data-theme="dark"][data-theme-variant="full-dark"],
html[data-theme="dark"][data-theme-variant="full-dark"] body {
    background: #080808;
}

html[data-theme-variant="full-dark"] #main-header {
    background-color: #0b0b0b;
    background-image: linear-gradient(180deg, #151515, #090909);
    border-bottom: 1px solid #262626;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .48);
}

html[data-theme-variant="full-dark"] #main-header .subtitle {
    text-shadow: -1px -1px 0 #090909, 1px -1px 0 #090909, -1px 1px 0 #090909, 1px 1px 0 #090909;
}

html[data-theme-variant="full-dark"] nav nav {
    background: #0b0b0b;
}

html[data-theme-variant="full-dark"] #site-nav nav nav a {
    color: #f2f2f2;
}

html[data-theme-variant="full-dark"] #site-nav nav nav a:hover,
html[data-theme-variant="full-dark"] #site-nav nav nav a:focus-visible {
    background: rgba(255, 255, 255, .09);
    color: #ffffff;
}

html[data-theme-variant="full-dark"] .gf-user-icon:hover,
html[data-theme-variant="full-dark"] .gf-user-icon.active {
    background-color: #242424;
    border-color: #3b3b3b;
}

html[data-theme-variant="full-dark"] .gf-user-icon:hover svg,
html[data-theme-variant="full-dark"] .gf-user-icon.active svg {
    stroke: #ffffff;
}

html[data-theme-variant="full-dark"] .gf-user-icon--settings:hover svg,
html[data-theme-variant="full-dark"] .gf-user-icon--settings.active svg {
    fill: #ffffff;
}

html[data-theme-variant="full-dark"] .gf-user-panel.active a:hover,
html[data-theme-variant="full-dark"] .gf-user-panel.active a:focus-visible {
    background: #242424;
    color: #ffffff !important;
}

html[data-theme-variant="full-dark"] .gf-editor-toolbar {
    background: #0d0d0d;
    border-color: #292929;
    box-shadow: inset 0 1px rgba(255, 255, 255, .025), 0 10px 22px rgba(0, 0, 0, .34);
}

html[data-theme-variant="full-dark"] .gf-editor-toolbar button.gf-editor-toolbar-button,
html[data-theme-variant="full-dark"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select,
html[data-theme-variant="full-dark"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button {
    background-color: #171717 !important;
    border-color: #363636 !important;
    color: #e8e8e8 !important;
}

html[data-theme-variant="full-dark"] .gf-editor-toolbar button.gf-editor-toolbar-button:hover,
html[data-theme-variant="full-dark"] .gf-editor-toolbar button.gf-editor-toolbar-button:focus-visible,
html[data-theme-variant="full-dark"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select:hover,
html[data-theme-variant="full-dark"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select:focus-visible,
html[data-theme-variant="full-dark"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:hover,
html[data-theme-variant="full-dark"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:focus-visible,
html[data-theme-variant="full-dark"] .gf-editor-toolbar-color-tool:hover button.gf-editor-toolbar-color-swatch-button,
html[data-theme-variant="full-dark"] .gf-editor-toolbar-color-tool:focus-within button.gf-editor-toolbar-color-swatch-button {
    background-color: #242424 !important;
    border-color: #555555 !important;
    color: #8ab4f8 !important;
    box-shadow: 0 7px 16px rgba(0, 0, 0, .3) !important;
}

html[data-theme-variant="full-dark"] #mobile-nav,
html[data-theme-variant="full-dark"] #mobile-nav nav {
    background-color: #0d0d0d;
    border-color: #292929;
}

html[data-theme-variant="full-dark"] .script-list > li:not(.ad-entry),
html[data-theme-variant="full-dark"] .list-option,
html[data-theme-variant="full-dark"] .text-content,
html[data-theme-variant="full-dark"] .user-content,
html[data-theme-variant="full-dark"] .sidebar,
html[data-theme-variant="full-dark"] .gf-script-note-panel {
    border-color: #2b2b2b;
}

html[data-theme-variant="full-dark"] .script-list > li:not(.ad-entry):nth-child(odd) {
    background-color: #121212;
}

html[data-theme-variant="full-dark"] .script-list > li:not(.ad-entry):nth-child(even) {
    background-color: #151515;
}

html[data-theme-variant="full-dark"] .gf-script-extra-info {
    border-top-color: #292929;
}

html[data-theme-variant="full-dark"] .gf-script-extra-status {
    background: #151515;
    border-color: #343434;
    color: #d8d8d8;
    box-shadow: none;
}

html[data-theme-variant="full-dark"] .gf-script-extra-status::before {
    border-color: #8ab4f8;
    border-right-color: transparent;
    opacity: 1;
}

html[data-theme-variant="full-dark"] .gf-script-extra-info[data-gfplus-extra-info="error"] .gf-script-extra-status {
    background: #211111;
    border-color: #5a2b2b;
    color: #f0b4b4;
}

html[data-theme-variant="full-dark"] .list-option-group .list-current,
html[data-theme-variant="full-dark"] .list-option.list-current {
    background: linear-gradient(90deg, #1d1d1d, #141414);
    border-left-color: #8ab4f8;
    color: #f0f0f0;
    box-shadow: inset 0 1px rgba(255, 255, 255, .035), inset 0 -1px rgba(0, 0, 0, .42);
}

html[data-theme-variant="full-dark"] button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button),
html[data-theme-variant="full-dark"] input[type="submit"]:not(.search-submit),
html[data-theme-variant="full-dark"] input[type="button"],
html[data-theme-variant="full-dark"] .button {
    background: linear-gradient(180deg, #2d2d2d, #202020);
    border-color: #414141;
    color: #f3f3f3;
}

html[data-theme-variant="full-dark"] button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):hover,
html[data-theme-variant="full-dark"] button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus,
html[data-theme-variant="full-dark"] input[type="submit"]:not(.search-submit):hover,
html[data-theme-variant="full-dark"] input[type="button"]:hover,
html[data-theme-variant="full-dark"] .button:hover {
    background: linear-gradient(180deg, #3a3a3a, #292929);
    border-color: #555555;
}

html[data-theme-variant="full-dark"] .gf-script-install-button,
html[data-theme-variant="full-dark"] .gf-script-install-button:visited,
html[data-theme-variant="full-dark"] .gf-script-detail-button,
html[data-theme-variant="full-dark"] .gf-script-note-button,
html[data-theme-variant="full-dark"] .sidebar button.gf-list-option-toggle,
html[data-theme-variant="full-dark"] .sidebar button.gf-sidebar-scroll-button {
    background: #1b1b1b;
    border-color: #343434;
    color: #dedede;
    box-shadow: none;
}

html[data-theme-variant="full-dark"] .gf-script-install-button:hover,
html[data-theme-variant="full-dark"] .gf-script-install-button:focus-visible,
html[data-theme-variant="full-dark"] .gf-script-detail-button:hover,
html[data-theme-variant="full-dark"] .gf-script-detail-button:focus-visible,
html[data-theme-variant="full-dark"] .gf-script-detail-button[data-expanded="true"],
html[data-theme-variant="full-dark"] .gf-script-note-button:hover,
html[data-theme-variant="full-dark"] .gf-script-note-button:focus-visible,
html[data-theme-variant="full-dark"] .gf-script-note-button[data-expanded="true"],
html[data-theme-variant="full-dark"] .sidebar button.gf-list-option-toggle:hover,
html[data-theme-variant="full-dark"] .sidebar button.gf-sidebar-scroll-button:hover {
    background: #272727;
    border-color: #4a4a4a;
    color: #ffffff;
}

html[data-theme-variant="full-dark"] .gf-script-star-button,
html[data-theme-variant="full-dark"] .gf-script-star-button:hover,
html[data-theme-variant="full-dark"] .gf-script-star-button:focus,
html[data-theme-variant="full-dark"] .gf-script-star-button:focus-visible {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
}

html[data-theme-variant="full-dark"] input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="submit"]):not([type="button"]):not([type="image"]):not([type="file"]),
html[data-theme-variant="full-dark"] select,
html[data-theme-variant="full-dark"] textarea {
    background-color: #101010;
    border-color: #333333;
    color: #eeeeee;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .6);
}

html[data-theme-variant="full-dark"] .gf-user-panel,
html[data-theme-variant="full-dark"] .gf-script-note-panel {
    background-color: #111111;
    border-color: #303030;
    box-shadow: 0 18px 48px rgba(0, 0, 0, .72);
}

html[data-theme-variant="full-dark"] .gf-script-note-panel {
    box-shadow: none;
}

html[data-theme-variant="full-dark"] .lum-lightbox.lum-open .lum-lightbox-inner,
html[data-theme-variant="full-dark"] .lum-lightbox.lum-open .lum-lightbox-image-wrapper {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
}

html[data-theme-variant="full-dark"] .change-script-set.gf-set-editor-enhanced {
    background: #0d0d0d;
    border-color: #252525;
    box-shadow: none;
}

html[data-theme-variant="full-dark"] .change-script-set.gf-set-editor-enhanced .selection-box,
html[data-theme-variant="full-dark"] .change-script-set.gf-set-editor-enhanced #script-set-scripts > .form-control:not(.selection-box) {
    background-color: #0f0f0f;
    border-color: #292929;
}

html[data-theme-variant="full-dark"] .change-script-set.gf-set-editor-enhanced .gf-set-script-row {
    background: #0c0c0c;
    border-color: #282828;
}

html[data-theme-variant="full-dark"] .change-script-set.gf-set-editor-enhanced .gf-set-script-row:hover {
    background: #121212;
    border-color: #3a3a3a;
    box-shadow: 0 10px 22px rgba(0, 0, 0, .34);
}

html[data-theme-variant="full-dark"] .change-script-set.gf-set-editor-enhanced .gf-set-script-list-count {
    background: #1a1a1a;
    color: #d8d8d8;
}

html[data-theme-variant="full-dark"] ::selection {
    background-color: #315a85;
    color: #ffffff;
}
`;
})(globalThis);
