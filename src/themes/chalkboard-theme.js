// ==UserScript==
// @name         GreasyFork Premium - Chalkboard Theme
// @namespace    https://github.com/DREwX-code/greasyfork-premium
// @icon         https://raw.githubusercontent.com/DREwX-code/greasyfork-premium/refs/heads/main/assets/icon/logo-greasyfork-premium.png
// @version      1.0.2
// @description  Chalkboard light and dark theme stylesheet library for GreasyFork Premium.
// @author       Dℝ∃wX
// @copyright    2026 DℝᴇwX
// @license      Apache-2.0
// ==/UserScript==

(function registerGreasyForkPremiumTheme(root) {
    'use strict';

    const registry = root.GFPlusThemeLibraries || (root.GFPlusThemeLibraries = Object.create(null));
    registry.chalkboard = String.raw`
:root[data-theme="light"][data-theme-variant="chalkboard"] {
    color-scheme: light;
    --overall-background-color: #f3f1eb;
    --overall-text-color: #28332f;
    --link-color: #276f62;
    --link-visited-color: #526477;
    --texty-link-visited-color: #626d68;
    --content-background-color: #fffefa;
    --content-border-color: #d7ddd8;
    --content-box-shadow-color: rgba(37, 52, 46, .09);
    --content-separator-color: #e7e9e5;
    --tab-active-background-color: rgba(39, 111, 98, .11);
    --tab-active-box-shadow-color: rgba(39, 111, 98, .15);
    --tab-active-top-border-color: #39796b;
    --inactive-item-background-color: #eceee9;
    --code-background-color: #eff1ed;
    --user-content-background-color-gradient-1: #f8f7f3;
    --user-content-background-color-gradient-2: #fffefa;
    --user-content-border-left-color: #cbd4ce;
    --list-option-background-color-gradient-1: #fffefa;
    --list-option-background-color-gradient-2: #f5f5f0;
    --list-option-hover-background-color-gradient-1: #f0f4f1;
    --list-option-hover-background-color-gradient-2: #e7eee9;
    --list-option-hover-box-shadow-top: rgba(255, 255, 255, .65);
    --list-option-hover-box-shadow-bottom: rgba(37, 107, 91, .12);
    --notice-background-color: #e7f0ec;
    --notice-border-color: #5a8f81;
    --notice-text-color: #25443b;
    --alert-background-color: #f5eccf;
    --alert-border-color: #b48a36;
    --alert-text-color: #614a1d;
    --chart-background-color: #4f897b;
    --chart-border-color: #367064;
    --install-stats-bar-color: #4f897b;
    --install-stats-bar-hover-color: #367064;
    --install-stats-grid-color: #d0d8d3;
    --install-stats-text-color: #3c514a;
    --highlight-background-color: #f1e5aa;
    --expander-color: #276f62;
    --expander-background-color: rgba(39, 111, 98, .09);
    --pagination-background-color: #e9eeea;
    --pagination-hover-background-color: #dce6df;
    --list-option-button-background-color: #faf9f5;
    --list-option-button-color: #28332f;
    --list-option-button-border-color: #c8d1cb;
    --list-option-button-background-color-gradient-1: #fffefa;
    --list-option-button-background-color-gradient-2: #eef1ed;
    --code-container-border-color: #c8d1cb;
    --prettyprint-background-color: #f7f7f2;
    --prettyprint-color: #28332f;
    --sidebar-background: #faf9f5;
    --close-sidebar-background: #e9eeea;
    --close-sidebar-border-bottom: #cbd3ce;
    --shadow-soft: 0 12px 30px rgba(37, 52, 46, .09);
    --shadow-hover: 0 16px 38px rgba(37, 52, 46, .14);
    --container-glow-stroke: rgba(57, 121, 107, .18);
    --container-glow-color: rgba(57, 121, 107, .055);
    --focus-ring-color: rgba(39, 111, 98, .38);
    --chalk-button-start: #4d7f72;
    --chalk-button-end: #38685d;
    --chalk-button-hover-start: #5b8c7f;
    --chalk-button-hover-end: #42766a;
    --chalk-button-border: rgba(32, 91, 77, .55);
    --chalk-button-text: #ffffff;
    --chalk-surface: #fffefa;
    --chalk-surface-alt: #f7f7f2;
    --chalk-field: #fffefa;
    --chalk-field-border: #c5d1c9;
    --chalk-action-bg: #eff2ef;
    --chalk-action-hover: #e1e8e3;
    --chalk-action-border: #c8d1cb;
    --chalk-action-text: #334740;
    --gfplus-scrollbar-track-start: #e4e9df;
    --gfplus-scrollbar-track-end: #edf1e8;
    --gfplus-scrollbar-track-border: #c7d1c9;
    --gfplus-scrollbar-thumb-start: #7a9a8d;
    --gfplus-scrollbar-thumb-end: #68887b;
    --gfplus-scrollbar-hover-start: #5d8072;
    --gfplus-scrollbar-hover-end: #4f7165;
    --gfplus-scrollbar-border: #edf1e8;
    --gfplus-scrollbar-shadow: rgba(32, 66, 54, .12);
    --hljs-bg: #f4f5ed;
    --hljs-bg-alt: #e9eee7;
    --hljs-border: #c4cec6;
    --hljs-text: #20302a;
    --hljs-line-number: #829189;
    --hljs-comment: #6d7f76;
    --hljs-keyword: #6b4f88;
    --hljs-number: #9a641f;
    --hljs-string: #2f7252;
    --hljs-title: #2c657d;
    --hljs-attr: #93613b;
    --hljs-tag: #2a746b;
    --hljs-meta: #596c63;
}

:root[data-theme="dark"][data-theme-variant="chalkboard"] {
    color-scheme: dark;
    --overall-background-color: #101513;
    --overall-text-color: #e8e9e5;
    --link-color: #82c7b6;
    --link-visited-color: #b5bed0;
    --texty-link-visited-color: #aeb5b1;
    --content-background-color: #181f1d;
    --content-border-color: #36413d;
    --content-box-shadow-color: rgba(0, 0, 0, .44);
    --content-separator-color: #29332f;
    --tab-active-background-color: rgba(130, 199, 182, .11);
    --tab-active-box-shadow-color: rgba(130, 199, 182, .15);
    --tab-active-top-border-color: #82c7b6;
    --inactive-item-background-color: #202825;
    --code-background-color: #111816;
    --user-content-background-color-gradient-1: #1b2421;
    --user-content-background-color-gradient-2: #151c1a;
    --user-content-border-left-color: #3b4b44;
    --list-option-background-color-gradient-1: #1b2421;
    --list-option-background-color-gradient-2: #151c1a;
    --list-option-hover-background-color-gradient-1: #27332f;
    --list-option-hover-background-color-gradient-2: #202a26;
    --list-option-hover-box-shadow-top: rgba(255, 255, 255, .035);
    --list-option-hover-box-shadow-bottom: rgba(0, 0, 0, .42);
    --notice-background-color: #192c27;
    --notice-border-color: #5b9b89;
    --notice-text-color: #e7ede9;
    --alert-background-color: #30270f;
    --alert-border-color: #c59a43;
    --alert-text-color: #f1d99d;
    --chart-background-color: #76bbaa;
    --chart-border-color: #9bcfc2;
    --install-stats-bar-color: #76bbaa;
    --install-stats-bar-hover-color: #9bcfc2;
    --install-stats-grid-color: #394640;
    --install-stats-text-color: #d1d8d4;
    --highlight-background-color: #393311;
    --expander-color: #82c7b6;
    --expander-background-color: rgba(130, 199, 182, .11);
    --pagination-background-color: #222c28;
    --pagination-hover-background-color: #2d3b36;
    --list-option-button-background-color: #1d2623;
    --list-option-button-color: #e8e9e5;
    --list-option-button-border-color: #3b4b44;
    --list-option-button-background-color-gradient-1: #222c28;
    --list-option-button-background-color-gradient-2: #19211e;
    --code-container-border-color: #36433d;
    --prettyprint-background-color: #111816;
    --prettyprint-color: #e8e9e5;
    --sidebar-background: #151c1a;
    --close-sidebar-background: #222c28;
    --close-sidebar-border-bottom: #3b4b44;
    --shadow-soft: 0 12px 32px rgba(0, 0, 0, .42);
    --shadow-hover: 0 16px 38px rgba(0, 0, 0, .52);
    --container-glow-stroke: rgba(130, 199, 182, .16);
    --container-glow-color: rgba(130, 199, 182, .045);
    --focus-ring-color: rgba(130, 199, 182, .42);
    --chalk-button-start: #416f63;
    --chalk-button-end: #31584f;
    --chalk-button-hover-start: #4e8073;
    --chalk-button-hover-end: #3a675c;
    --chalk-button-border: rgba(130, 199, 182, .3);
    --chalk-button-text: #f2f5f2;
    --chalk-surface: #181f1d;
    --chalk-surface-alt: #1c2421;
    --chalk-field: #121816;
    --chalk-field-border: #3b4b44;
    --chalk-action-bg: #222c28;
    --chalk-action-hover: #2d3b36;
    --chalk-action-border: #3b4b44;
    --chalk-action-text: #dde3df;
    --gfplus-scrollbar-track-start: #131917;
    --gfplus-scrollbar-track-end: #0f1412;
    --gfplus-scrollbar-track-border: #303b36;
    --gfplus-scrollbar-thumb-start: #4b5f56;
    --gfplus-scrollbar-thumb-end: #3d5048;
    --gfplus-scrollbar-hover-start: #5d7469;
    --gfplus-scrollbar-hover-end: #4e655b;
    --gfplus-scrollbar-border: #151c1a;
    --gfplus-scrollbar-shadow: rgba(214, 239, 226, .08);
    --hljs-bg: #111816;
    --hljs-bg-alt: #1a2220;
    --hljs-border: #36433d;
    --hljs-text: #e6e9e6;
    --hljs-line-number: #708079;
    --hljs-comment: #929f99;
    --hljs-keyword: #cbb1e8;
    --hljs-number: #e8b66b;
    --hljs-string: #8bd5a8;
    --hljs-title: #8fc8dc;
    --hljs-attr: #dfa178;
    --hljs-tag: #7bd1c4;
    --hljs-meta: #a8b8b0;
}

html[data-theme="light"][data-theme-variant="chalkboard"] body {
    background-color: var(--overall-background-color);
    background-image:
        radial-gradient(circle at 18% 24%, rgba(40, 51, 47, .025) 0 1px, transparent 1.5px),
        radial-gradient(circle at 72% 64%, rgba(39, 111, 98, .018) 0 1px, transparent 1.5px);
    background-size: 23px 23px, 31px 31px;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] body {
    background-color: var(--overall-background-color);
    background-image:
        radial-gradient(circle at 18% 24%, rgba(255, 255, 255, .02) 0 1px, transparent 1.5px),
        radial-gradient(circle at 72% 64%, rgba(130, 199, 182, .018) 0 1px, transparent 1.5px);
    background-size: 23px 23px, 31px 31px;
}

html[data-theme="light"][data-theme-variant="chalkboard"] #main-header {
    background-color: #2c554c;
    background-image: linear-gradient(180deg, #22473f, #23473f);
    border-bottom: 1px solid #203f38;
    box-shadow: 0 9px 26px rgba(35, 57, 50, .24);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #main-header {
    background-color: #142621;
    background-image: linear-gradient(180deg, #13241e, #13231e);
    border-bottom: 1px solid #34453e;
    box-shadow: 0 9px 26px rgba(0, 0, 0, .46);
}

html[data-theme-variant="chalkboard"] #main-header .subtitle {
    text-shadow: -1px -1px 0 rgba(14, 38, 30, .9), 1px -1px 0 rgba(14, 38, 30, .9), -1px 1px 0 rgba(14, 38, 30, .9), 1px 1px 0 rgba(14, 38, 30, .9);
}

html[data-theme="light"][data-theme-variant="chalkboard"] nav nav,
html[data-theme="light"][data-theme-variant="chalkboard"] nav[data-gfplus-favorites-shortcut="ready"] {
    background: #2c554c;
}

html[data-theme="light"][data-theme-variant="chalkboard"] #site-nav nav nav a {
    color: #ffffff;
}

html[data-theme="light"][data-theme-variant="chalkboard"] #site-nav nav nav a:hover,
html[data-theme="light"][data-theme-variant="chalkboard"] #site-nav nav nav a:focus-visible {
    background: rgba(255, 255, 255, .11);
    color: #ffffff;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] nav nav,
html[data-theme="dark"][data-theme-variant="chalkboard"] nav[data-gfplus-favorites-shortcut="ready"] {
    background: #142621;
}

html[data-theme="light"][data-theme-variant="chalkboard"] #mobile-nav,
html[data-theme="light"][data-theme-variant="chalkboard"] #mobile-nav nav,
html[data-theme="light"][data-theme-variant="chalkboard"] #mobile-nav-menu {
    background-color: #2c554c;
    background-image: linear-gradient(180deg, #22473f, #23473f);
    border-color: #486b61;
    color: #ffffff;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #mobile-nav,
html[data-theme="dark"][data-theme-variant="chalkboard"] #mobile-nav nav,
html[data-theme="dark"][data-theme-variant="chalkboard"] #mobile-nav-menu {
    background-color: #142621;
    background-image: linear-gradient(180deg, #13241e, #13231e);
    border-color: #34453e;
    color: #eef7f2;
}

html[data-theme-variant="chalkboard"] #mobile-nav-menu a {
    color: inherit;
}

html[data-theme="light"][data-theme-variant="chalkboard"] #mobile-nav-menu select {
    background-color: #fffefa;
    border-color: #c5d1c9;
    color: #28332f;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #mobile-nav-menu select {
    background-color: #18211e;
    border-color: #3b4b44;
    color: #e8e9e5;
}

html[data-theme-variant="chalkboard"] .pagination [aria-current="page"],
html[data-theme-variant="chalkboard"] .pagy.series-nav [aria-current="page"] {
    background-color: var(--expander-background-color);
    border-color: var(--link-color);
    color: var(--link-color);
    box-shadow: inset 0 0 0 1px var(--link-color);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #site-nav nav nav a {
    color: #eef7f2;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #site-nav nav nav a:hover,
html[data-theme="dark"][data-theme-variant="chalkboard"] #site-nav nav nav a:focus-visible {
    background: rgba(141, 216, 192, .12);
    color: #ffffff;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-icon:hover,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-icon.active {
    background-color: #e1e8e3;
    border-color: #c1cec6;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-icon:hover svg,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-icon.active svg {
    stroke: #276f62;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-icon--settings:hover svg,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-icon--settings.active svg {
    fill: #276f62;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-panel.active a:hover,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-user-panel.active a:focus-visible {
    background: #e1e8e3;
    color: #276f62 !important;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-icon:hover,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-icon.active {
    background-color: #2d3b36;
    border-color: #486057;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-icon:hover svg,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-icon.active svg {
    stroke: #82c7b6;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-icon--settings:hover svg,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-icon--settings.active svg {
    fill: #82c7b6;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-panel.active a:hover,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-user-panel.active a:focus-visible {
    background: #2d3b36;
    color: #82c7b6 !important;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar {
    background: #e8eee9;
    border-color: #c9d4cc;
    box-shadow: inset 0 1px rgba(255, 255, 255, .72), 0 10px 22px rgba(37, 52, 46, .08);
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-button,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button {
    background-color: #fffefa !important;
    border-color: #c5d1c9 !important;
    color: #34433d !important;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-button:hover,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-button:focus-visible,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select:hover,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select:focus-visible,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:hover,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:focus-visible,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar-color-tool:hover button.gf-editor-toolbar-color-swatch-button,
html[data-theme="light"][data-theme-variant="chalkboard"] .gf-editor-toolbar-color-tool:focus-within button.gf-editor-toolbar-color-swatch-button {
    background-color: #dce7e0 !important;
    border-color: #82aa9b !important;
    color: #276f62 !important;
    box-shadow: 0 7px 16px rgba(39, 111, 98, .1) !important;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar {
    background: #171e1c;
    border-color: #36413d;
    box-shadow: inset 0 1px rgba(255, 255, 255, .025), 0 10px 22px rgba(0, 0, 0, .28);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-button,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button {
    background-color: #202a26 !important;
    border-color: #3b4b44 !important;
    color: #e0e6e2 !important;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-button:hover,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-button:focus-visible,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select:hover,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar select.gf-editor-toolbar-heading-select:focus-visible,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:hover,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:focus-visible,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar-color-tool:hover button.gf-editor-toolbar-color-swatch-button,
html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-editor-toolbar-color-tool:focus-within button.gf-editor-toolbar-color-swatch-button {
    background-color: #2d3b36 !important;
    border-color: #587166 !important;
    color: #82c7b6 !important;
    box-shadow: 0 7px 16px rgba(0, 0, 0, .24) !important;
}

html[data-theme-variant="chalkboard"] .script-list > li:not(.ad-entry):nth-child(odd) {
    background-color: var(--chalk-surface);
}

html[data-theme-variant="chalkboard"] .script-list > li:not(.ad-entry):nth-child(even) {
    background-color: var(--chalk-surface-alt);
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-script-extra-info {
    border-top-color: #d2dad4;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-script-extra-status {
    background: #edf2ee;
    border-color: #c9d5ce;
    color: #3c514a;
    box-shadow: none;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-script-extra-status::before {
    border-color: #276f62;
    border-right-color: transparent;
    opacity: 1;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .gf-script-extra-info[data-gfplus-extra-info="error"] .gf-script-extra-status {
    background: #f6ece8;
    border-color: #d4aaa0;
    color: #7d4339;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-script-extra-info {
    border-top-color: #36413d;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-script-extra-status {
    background: #1c2522;
    border-color: #3b4b44;
    color: #cbd5cf;
    box-shadow: none;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-script-extra-status::before {
    border-color: #82c7b6;
    border-right-color: transparent;
    opacity: 1;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .gf-script-extra-info[data-gfplus-extra-info="error"] .gf-script-extra-status {
    background: #2a1c19;
    border-color: #69433a;
    color: #e4b0a5;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .list-option-group .list-current,
html[data-theme="dark"][data-theme-variant="chalkboard"] .list-option.list-current {
    background: linear-gradient(90deg, #27332f, #1c2522);
    border-left-color: #82c7b6;
    color: #e8e9e5;
    box-shadow: inset 0 1px rgba(130, 199, 182, .07), inset 0 -1px rgba(0, 0, 0, .32);
}

html[data-theme-variant="chalkboard"] button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button),
html[data-theme-variant="chalkboard"] input[type="submit"]:not(.search-submit),
html[data-theme-variant="chalkboard"] input[type="button"],
html[data-theme-variant="chalkboard"] .button {
    background: linear-gradient(180deg, var(--chalk-button-start), var(--chalk-button-end));
    border-color: var(--chalk-button-border);
    color: var(--chalk-button-text);
}

html[data-theme-variant="chalkboard"] button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):hover,
html[data-theme-variant="chalkboard"] button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus,
html[data-theme-variant="chalkboard"] input[type="submit"]:not(.search-submit):hover,
html[data-theme-variant="chalkboard"] input[type="button"]:hover,
html[data-theme-variant="chalkboard"] .button:hover {
    background: linear-gradient(180deg, var(--chalk-button-hover-start), var(--chalk-button-hover-end));
}

html[data-theme-variant="chalkboard"] .gf-script-install-button,
html[data-theme-variant="chalkboard"] .gf-script-install-button:visited,
html[data-theme-variant="chalkboard"] .gf-script-detail-button,
html[data-theme-variant="chalkboard"] .gf-script-note-button,
html[data-theme-variant="chalkboard"] .sidebar button.gf-list-option-toggle,
html[data-theme-variant="chalkboard"] .sidebar button.gf-sidebar-scroll-button {
    background: var(--chalk-action-bg);
    border-color: var(--chalk-action-border);
    color: var(--chalk-action-text);
    box-shadow: none;
}

html[data-theme-variant="chalkboard"] .gf-script-install-button:hover,
html[data-theme-variant="chalkboard"] .gf-script-install-button:focus-visible,
html[data-theme-variant="chalkboard"] .gf-script-detail-button:hover,
html[data-theme-variant="chalkboard"] .gf-script-detail-button:focus-visible,
html[data-theme-variant="chalkboard"] .gf-script-detail-button[data-expanded="true"],
html[data-theme-variant="chalkboard"] .gf-script-note-button:hover,
html[data-theme-variant="chalkboard"] .gf-script-note-button:focus-visible,
html[data-theme-variant="chalkboard"] .gf-script-note-button[data-expanded="true"] {
    background: var(--chalk-action-hover);
    border-color: var(--link-color);
    color: var(--link-color);
}

html[data-theme-variant="chalkboard"] .gf-script-star-button,
html[data-theme-variant="chalkboard"] .gf-script-star-button:hover,
html[data-theme-variant="chalkboard"] .gf-script-star-button:focus,
html[data-theme-variant="chalkboard"] .gf-script-star-button:focus-visible {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
}

html[data-theme-variant="chalkboard"] input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="submit"]):not([type="button"]):not([type="image"]):not([type="file"]),
html[data-theme-variant="chalkboard"] select,
html[data-theme-variant="chalkboard"] textarea {
    background-color: var(--chalk-field);
    border-color: var(--chalk-field-border);
    color: var(--overall-text-color);
}

html[data-theme-variant="chalkboard"] .form-control textarea[name="script_version[code]"],
html[data-theme-variant="chalkboard"] textarea[name="script_version[changelog]"],
html[data-theme-variant="chalkboard"] textarea.comment-entry,
html[data-theme-variant="chalkboard"] .form-control textarea[name*="[additional_info]"][name$="[attribute_value]"],
html[data-theme-variant="chalkboard"] .previewable textarea {
    background-color: var(--chalk-surface-alt);
    border-color: var(--chalk-field-border);
    color: var(--overall-text-color);
    box-shadow: inset 0 1px 2px rgba(21, 35, 29, .12);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .form-control textarea[name="script_version[code]"],
html[data-theme="dark"][data-theme-variant="chalkboard"] textarea[name="script_version[changelog]"],
html[data-theme="dark"][data-theme-variant="chalkboard"] textarea.comment-entry,
html[data-theme="dark"][data-theme-variant="chalkboard"] .form-control textarea[name*="[additional_info]"][name$="[attribute_value]"],
html[data-theme="dark"][data-theme-variant="chalkboard"] .previewable textarea {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .38);
}

html[data-theme-variant="chalkboard"] input[disabled],
html[data-theme-variant="chalkboard"] select[disabled],
html[data-theme-variant="chalkboard"] textarea[disabled],
html[data-theme-variant="chalkboard"] input[readonly],
html[data-theme-variant="chalkboard"] textarea[readonly] {
    background-color: var(--inactive-item-background-color) !important;
    border-color: var(--chalk-field-border) !important;
    color: var(--texty-link-visited-color) !important;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .field_with_errors textarea,
html[data-theme="light"][data-theme-variant="chalkboard"] .field_with_errors input {
    background-color: #faeeee !important;
    border-color: #b85d5d !important;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .field_with_errors textarea,
html[data-theme="dark"][data-theme-variant="chalkboard"] .field_with_errors input {
    background-color: #2b1718 !important;
    border-color: #9b5558 !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm {
    background-color: var(--chalk-surface-alt) !important;
    border-color: var(--chalk-field-border) !important;
    color: var(--overall-text-color) !important;
    box-shadow: inset 0 1px 2px rgba(21, 35, 29, .12);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #ace-editor.ace-tm {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .38);
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_scroller,
html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_content {
    background-color: var(--chalk-surface-alt) !important;
}

html[data-theme="light"][data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_gutter {
    background: #e8ece7 !important;
    border-right-color: #c9d2cb;
    color: #718078 !important;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_gutter {
    background: #18211e !important;
    border-right-color: #34423c;
    color: #8fa098 !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_print-margin {
    display: none !important;
    visibility: hidden !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_cursor {
    color: var(--overall-text-color) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_marker-layer .ace_active-line,
html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_gutter-active-line {
    background: color-mix(in srgb, var(--link-color) 10%, transparent) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_marker-layer .ace_selection {
    background: color-mix(in srgb, var(--link-color) 24%, transparent) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_marker-layer .ace_selected-word {
    background: color-mix(in srgb, var(--link-color) 12%, transparent) !important;
    border-color: color-mix(in srgb, var(--link-color) 48%, transparent) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_storage,
html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_keyword {
    color: var(--hljs-keyword) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_constant,
html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_constant.ace_numeric {
    color: var(--hljs-number) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_string {
    color: var(--hljs-string) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_comment {
    color: var(--hljs-comment) !important;
}

html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_variable,
html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_support.ace_function,
html[data-theme-variant="chalkboard"] #ace-editor.ace-tm .ace_entity.ace_name.ace_function {
    color: var(--hljs-title) !important;
}

html[data-theme-variant="chalkboard"] .gf-user-panel,
html[data-theme-variant="chalkboard"] .gf-script-note-panel {
    background-color: var(--chalk-surface);
    border-color: var(--content-border-color);
}

html[data-theme="light"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced {
    background: linear-gradient(180deg, #f5f5f1, #ecefea);
    border-color: #d2dad4;
    box-shadow: 0 12px 30px rgba(37, 52, 46, .09);
}

html[data-theme="light"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .selection-box,
html[data-theme="light"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced #script-set-scripts > .form-control:not(.selection-box) {
    background-color: #fffefa;
    border-color: #d7ddd8;
    box-shadow: inset 0 1px rgba(255, 255, 255, .72), 0 10px 22px rgba(37, 52, 46, .06);
}

html[data-theme="light"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .gf-set-script-row {
    background: linear-gradient(180deg, #f8f9f5, #f0f3ef);
    border-color: #d1dad4;
}

html[data-theme="light"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .gf-set-script-row:hover {
    background: #e8eee9;
    border-color: #94b3a8;
    box-shadow: 0 10px 20px rgba(39, 111, 98, .09);
}

html[data-theme="light"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .gf-set-script-list-count {
    background: #e1e8e3;
    color: #276f62;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced {
    background: linear-gradient(180deg, #171e1c, #121816);
    border-color: #303b36;
    box-shadow: 0 14px 34px rgba(0, 0, 0, .38);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .selection-box,
html[data-theme="dark"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced #script-set-scripts > .form-control:not(.selection-box) {
    background-color: #181f1d;
    border-color: #36413d;
    box-shadow: inset 0 1px rgba(255, 255, 255, .025), 0 10px 24px rgba(0, 0, 0, .24);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .gf-set-script-row {
    background: linear-gradient(180deg, #202a26, #1b2421);
    border-color: #3b4b44;
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .gf-set-script-row:hover {
    background: #27332f;
    border-color: #587166;
    box-shadow: 0 12px 22px rgba(0, 0, 0, .28);
}

html[data-theme="dark"][data-theme-variant="chalkboard"] .change-script-set.gf-set-editor-enhanced .gf-set-script-list-count {
    background: #27332f;
    color: #82c7b6;
}
`;
})(globalThis);
