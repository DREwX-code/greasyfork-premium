// ==UserScript==
// @name         GreasyFork Premium - Classic Theme
// @namespace    https://github.com/DREwX-code/greasyfork-premium
// @version      1.0.0
// @description  Classic light and dark theme stylesheet library for GreasyFork Premium.
// @author       Dℝ∃wX
// @license      Apache-2.0
// ==/UserScript==

(function registerGreasyForkPremiumTheme(root) {
    'use strict';

    const registry = root.GFPlusThemeLibraries || (root.GFPlusThemeLibraries = Object.create(null));
    registry.light = String.raw`
    :root {
        color-scheme: light;
        --font-family-base: "Inter", "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-family-monospace: "JetBrains Mono", "Fira Code", "Source Code Pro", monospace;
        --overall-background-color: #f5f7fb;
        --overall-text-color: #111827;
        --link-color: #4f46e5;
        --link-visited-color: #4338ca;
        --texty-link-visited-color: #4b5563;
        --content-background-color: #ffffff;
        --content-border-color: #e2e8f0;
        --content-box-shadow-color: rgba(15, 23, 42, 0.08);
        --content-separator-color: #edf1f7;
        --tab-active-background-color: rgba(79, 70, 229, 0.12);
        --tab-active-box-shadow-color: rgba(79, 70, 229, 0.18);
        --tab-active-top-border-color: #4f46e5;
        --inactive-item-background-color: #f3f4f6;
        --code-background-color: #f4f2ff;
        --user-content-background-color-gradient-1: #f8fafc;
        --user-content-background-color-gradient-2: #ffffff;
        --user-content-border-left-color: #e2e8f0;
        --list-option-background-color-gradient-1: #ffffff;
        --list-option-background-color-gradient-2: #f5f7fb;
        --list-option-hover-background-color-gradient-1: #f4f7ff;
        --list-option-hover-background-color-gradient-2: #e1e7ff;
        --list-option-hover-box-shadow-top: rgba(15, 23, 42, 0.06);
        --list-option-hover-box-shadow-bottom: rgba(79, 70, 229, 0.1);
        --notice-background-color: #e0f2fe;
        --notice-border-color: #0284c7;
        --notice-text-color: #0f172a;
        --alert-background-color: #fef3c7;
        --alert-border-color: #f59e0b;
        --alert-text-color: #78350f;
        --chart-background-color: #61a5fa;
        --chart-border-color: #61a5fa;
        --install-stats-bar-color: #61a5fa;
        --install-stats-bar-hover-color: #61a5fa;
        --install-stats-grid-color: #dbe4f0;
        --install-stats-text-color: #334155;
        --highlight-background-color: #fef9c3;
        --rating-icon-good-border-color: #16a34a;
        --rating-icon-good-background-color: rgba(22, 163, 74, 0.12);
        --rating-icon-good-color: #166534;
        --rating-icon-ok-border-color: #ca8a04;
        --rating-icon-ok-background-color: rgba(202, 138, 4, 0.14);
        --rating-icon-ok-color: #92400e;
        --rating-icon-bad-border-color: #dc2626;
        --rating-icon-bad-background-color: rgba(220, 38, 38, 0.12);
        --rating-icon-bad-color: #7f1d1d;
        --expander-color: #4f46e5;
        --expander-background-color: rgba(79, 70, 229, 0.08);
        --pagination-background-color: rgba(79, 70, 229, 0.08);
        --pagination-hover-background-color: rgba(79, 70, 229, 0.18);
        --diff-del-background: #fee2e2;
        --diff-del-color: #b91c1c;
        --diff-ins-background: #dcfce7;
        --diff-ins-color: #047857;
        --diff-del-strong-background: #fecaca;
        --diff-ins-strong-background: #bbf7d0;
        --diff-block-info: #64748b;
        --list-option-button-background-color: #ffffff;
        --list-option-button-color: #0f172a;
        --list-option-button-border-color: #d0d5dd;
        --list-option-button-background-color-gradient-1: #ffffff;
        --list-option-button-background-color-gradient-2: #f5f7fb;
        --code-container-border-color: #e2e8f0;
        --prettyprint-background-color: #ffffff;
        --prettyprint-color: #111827;
        --sidebar-background: #ffffff;
        --close-sidebar-background: #f1f5f9;
        --close-sidebar-border-bottom: #cbd5f5;
        --border-radius-small: 6px;
        --border-radius-medium: 12px;
        --border-radius-large: 18px;
        --shadow-soft: 0 6px 20px rgba(15, 23, 42, 0.07);
        --shadow-hover: 0 8px 24px rgba(15, 23, 42, 0.1);
        --container-glow-stroke: rgba(79, 70, 229, 0.24);
        --container-glow-color: rgba(79, 70, 229, 0.08);
        --hljs-bg: #ffffff;
        --hljs-bg-alt: #f4f7fb;
        --hljs-line-height: 24px;
        --hljs-font-size: 14px;
        --hljs-border: #e2e8f0;
        --hljs-text: #0f172a;
        --hljs-line-number: #94a3b8;
        --hljs-comment: #64748b;
        --hljs-keyword: #6d28d9;
        --hljs-number: #b45309;
        --hljs-string: #15803d;
        --hljs-title: #1d4ed8;
        --hljs-attr: #c2410c;
        --hljs-tag: #0f766e;
        --hljs-meta: #475569;
        --hljs-add-bg: #dcfce7;
        --hljs-add-text: #14532d;
        --hljs-del-bg: #fee2e2;
        --hljs-del-text: #7f1d1d;
        --focus-ring-color: rgba(79, 70, 229, 0.45);
        --transition-base: 160ms ease;
        --gfplus-scrollbar-track-start: rgba(226, 232, 240, 0.82);
        --gfplus-scrollbar-track-end: rgba(241, 245, 249, 0.68);
        --gfplus-scrollbar-track-border: rgba(27, 31, 36, 0.55);
        --gfplus-scrollbar-thumb-start: #8c959f;
        --gfplus-scrollbar-thumb-end: #8c959f;
        --gfplus-scrollbar-hover-start: #6e7781;
        --gfplus-scrollbar-hover-end: #6e7781;
        --gfplus-scrollbar-border: rgba(182, 185, 187, 0.82);
        --gfplus-scrollbar-shadow: rgba(27, 31, 36, 0.15);
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    ::selection {
        background-color: #B4D8FF;
    }

    @media (prefers-reduced-motion: reduce) {
        *,*::before,*::after {
            animation-duration: .01ms!important;
            animation-iteration-count: 1!important;
            transition-duration: .01ms!important;
            scroll-behavior: auto!important;
        }
    }

    html {
        overflow-y: scroll;
        scroll-behavior: smooth;
        background-color: var(--overall-background-color);
    }

    body {
        margin: 0;
        min-height: 100vh;
        background: var(--overall-background-color);
        color: var(--overall-text-color);
        line-height: 1.6;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        transition: background-color var(--transition-base), color var(--transition-base);
    }

    body,select,input {
        font-family: var(--font-family-base);
        letter-spacing: .01em;
        transition: color var(--transition-base), background-color var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
    }

    body:lang(zh-CN),select:lang(zh-CN),input:lang(zh-CN) {
        font-family: "Noto Sans SC","Microsoft YaHei UI",var(--font-family-base)
    }

    body:lang(zh-TW),select:lang(zh-TW),input:lang(zh-TW) {
        font-family: "Noto Sans TC","Microsoft JHengHei UI",var(--font-family-base)
    }

    pre,code {
        direction: ltr!important;
        font-family: var(--font-family-monospace)
    }

    code {
        background-color: var(--code-background-color);
        border-radius: var(--border-radius-small);
        padding: .15em .4em
    }

    pre {
        margin: 0;
        padding: 1em;
        background-color: var(--code-background-color);
        border-radius: var(--border-radius-medium);
        box-shadow: inset 0 0 0 1px rgba(79, 70, 229, .08);
        overflow-x: auto
    }

    pre code {
        background-color: transparent;
        padding: 0
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),select,textarea {
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        padding: .6em .7em;
        font: inherit;
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08);
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus,select:focus,textarea:focus {
        border-color: var(--link-color);
        box-shadow: 0 0 0 0 rgba(79, 70, 229, .15);
        outline: none;
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus-visible,select:focus-visible,textarea:focus-visible {
        outline: none;
        border-color: var(--link-visited-color);
        box-shadow: 0 0 0 0 var(--focus-ring-color);
    }

    input[disabled],select[disabled],textarea[disabled] {
        background-color: rgba(148, 163, 184, .15);
        cursor: not-allowed;
        opacity: .7
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button),input[type=submit]:not(.search-submit),input[type=submit].search-submit:not([value="🔎"]),input[type=button],.button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        max-width: 100%;
        margin: .25rem .35rem .25rem 0;
        margin-inline: 0 .35rem;
        border: 1px solid rgba(79, 70, 229, .35);
        border-radius: 8px;
        padding: .64em 1.05em;
        background: linear-gradient(180deg, #6366f1, #4f46e5);
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: .01em;
        cursor: pointer;
        box-shadow: none;
        text-decoration: none;
        white-space: normal;
        transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base), border-color var(--transition-base), color var(--transition-base);
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):hover,input[type=submit]:not(.search-submit):hover,input[type=submit].search-submit:not([value="🔎"]):hover,input[type=button]:hover,.button:hover,button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus,input[type=submit]:not(.search-submit):focus,input[type=submit].search-submit:not([value="🔎"]):focus,input[type=button]:focus,.button:focus {
        background: linear-gradient(180deg, #7c83ff, #4338ca);
        border-color: rgba(67, 56, 202, .55);
        box-shadow: none;
        transform: translateY(-1px);
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):active,input[type=submit]:not(.search-submit):active,input[type=submit].search-submit:not([value="🔎"]):active,input[type=button]:active,.button:active {
        transform: translateY(0);
        box-shadow: 0 7px 18px rgba(79, 70, 229, .2), inset 0 1px 2px rgba(15, 23, 42, .2);
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):disabled,input[type=submit]:not(.search-submit):disabled,input[type=submit].search-submit:not([value="🔎"]):disabled,input[type=button]:disabled,.button:disabled {
        opacity: .65;
        box-shadow: none;
        cursor: not-allowed;
        transform: none
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus-visible,input[type=submit]:not(.search-submit):focus-visible,input[type=submit].search-submit:not([value="🔎"]):focus-visible,input[type=button]:focus-visible,.button:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 3px
    }

    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button),
    .form-control input[type=submit]:not(.search-submit),
    .form-control input[type=button] {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.55rem;
        width: fit-content;
        max-width: 100%;
        margin: .25rem 0 0;
        padding: .68rem 1.05rem;
        border: 1px solid rgba(79, 70, 229, .35);
        border-radius: 8px;
        background: linear-gradient(180deg, #6366f1, #4f46e5);
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: .01em;
        box-shadow: none;
        text-decoration: none;
        white-space: normal
    }

    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):hover,
    .form-control input[type=submit]:not(.search-submit):hover,
    .form-control input[type=button]:hover,
    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus,
    .form-control input[type=submit]:not(.search-submit):focus,
    .form-control input[type=button]:focus {
        background: linear-gradient(180deg, #7c83ff, #4338ca);
        border-color: rgba(67, 56, 202, .55);
        box-shadow: none;
        transform: translateY(-1px)
    }

    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):active,
    .form-control input[type=submit]:not(.search-submit):active,
    .form-control input[type=button]:active {
        transform: translateY(0);
        box-shadow: 0 7px 18px rgba(79, 70, 229, .2), inset 0 1px 2px rgba(15, 23, 42, .2)
    }

    input.search-submit[value="🔎"] {
        color: transparent;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23111827' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='7'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg>") !important;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
        cursor: pointer;
        opacity: 1 !important;
    }

    textarea {
        resize: vertical;
        min-height: 6em;
        background-color: var(--content-background-color)
    }

    a {
        color: var(--link-color);
        font-weight: 600;
        text-decoration: none;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
        transition: color var(--transition-base), text-decoration-color var(--transition-base), opacity var(--transition-base);
    }

    a:visited {
        color: var(--link-visited-color)
    }

    a:hover,a:focus {
        color: var(--link-visited-color);
        text-decoration: underline;
        text-decoration-color: currentColor
    }

    a:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 3px;
        border-radius: var(--border-radius-small)
    }

    input[type=checkbox],input[type=radio] {
        vertical-align: middle;
        accent-color: var(--link-color)
    }

    .form-control input[type=checkbox],
    .form-control input[type=radio] {
        inline-size: 1rem;
        block-size: 1rem;
        margin: 0 .45em 0 0;
        margin-inline: 0 .45em;
        vertical-align: -0.14em;
        accent-color: var(--link-color)
    }

    .form-control input[type=checkbox] + label.radio-label,
    .form-control input[type=checkbox] + label.checkbox-label,
    .form-control input[type=radio] + label.radio-label,
    .form-control input[type=radio] + label.checkbox-label,
    .form-control input[type=radio] + label {
        display: inline;
        margin: 0;
        line-height: 1.45;
        vertical-align: baseline;
        font-size: inherit;
        font-weight: 400
    }

    .width-constraint {
        margin: auto;
        max-width: 1200px;
        width: min(96%, 1200px);
    }

    @media screen and (max-width: 1228px) {
        .width-constraint {
            margin:auto 1.2vw;
            padding-inline: clamp(.8rem, 4vw, 1.5rem)
        }
    }

    @media screen and (max-width: 400px) {
        .width-constraint {
            margin:auto 0;
            padding-inline: 0
        }
    }

    .inline-list,.block-list {
        padding-left: 0;
        padding-right: 0;
        list-style: none
    }

    .inline-list {
        display: inline
    }

    .block-list {
        display: block;
        margin: 0
    }

    .inline-list li,.block-list li {
        display: inline
    }

    .inline-list li:after,.block-list li:after {
        content: ", "
    }

    body:lang(he) .inline-list li:after,body:lang(he) .block-list li:after,body:lang(ar) .inline-list li:after,body:lang(ar) .block-list li:after,body:lang(ug) .inline-list li:after,body:lang(ug) .block-list li:after,body:lang(ckb) .inline-list li:after,body:lang(ckb) .block-list li:after {
        content: "،"
    }

    .inline-list li:last-child:after,.block-list li:last-child:after {
        content: ""
    }

    dt[title]>span {
        border-bottom: 1px dotted black
    }

    .form-section {
        margin-bottom: 2em
    }

    .form-control {
        margin-bottom: 1.4em;
        flex-direction: column;
        gap: .4em
    }

    .form-control textarea,#ace-editor {
        width: 100%;
        box-sizing: border-box;
        margin-top: 1px;
        margin-bottom: 1px
    }

    .form-control textarea:not([rows]),#ace-editor {
        height: 20em
    }

    #ace-editor {
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        background-color: var(--content-background-color);
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08);
        resize: vertical;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base)
    }

    #ace-editor.ace-tm {
        background-color: #ffffff !important;
        color: #111827 !important;
        border-color: var(--content-border-color) !important;
    }

    #ace-editor.ace-tm .ace_scroller,
    #ace-editor.ace-tm .ace_content {
        background-color: #ffffff !important;
    }

    #ace-editor.ace-tm .ace_gutter {
        background: #f8fafc !important;
        color: #64748b !important;
        border-right: 1px solid #e2e8f0;
    }

    #ace-editor.ace-tm .ace_print-margin {
        display: none !important;
        visibility: hidden !important;
    }

    #ace-editor.ace-tm .ace_cursor {
        color: #111827 !important;
    }

    #ace-editor.ace-tm .ace_marker-layer .ace_active-line,
    #ace-editor.ace-tm .ace_gutter-active-line {
        background: rgba(79, 70, 229, .08) !important;
    }

    #ace-editor.ace-tm .ace_marker-layer .ace_selection {
        background: rgba(79, 70, 229, .22) !important;
    }

    #ace-editor.ace-tm .ace_marker-layer .ace_selected-word {
        background: rgba(79, 70, 229, .12) !important;
        border: 1px solid rgba(79, 70, 229, .35) !important;
    }

    #ace-editor.ace-tm .ace_fold {
        background-color: #4f46e5 !important;
    }

    #ace-editor.ace-tm .ace_invisible {
        color: #cbd5e1 !important;
    }

    #ace-editor.ace-tm .ace_storage,
    #ace-editor.ace-tm .ace_keyword {
        color: #6d28d9 !important;
    }

    #ace-editor.ace-tm .ace_constant,
    #ace-editor.ace-tm .ace_constant.ace_numeric {
        color: #b45309 !important;
    }

    #ace-editor.ace-tm .ace_string {
        color: #15803d !important;
    }

    #ace-editor.ace-tm .ace_comment {
        color: #64748b !important;
    }

    #ace-editor.ace-tm .ace_variable,
    #ace-editor.ace-tm .ace_support.ace_function,
    #ace-editor.ace-tm .ace_entity.ace_name.ace_function {
        color: #1d4ed8 !important;
    }

    #ace-editor.ace-tm .ace_keyword.ace_operator,
    #ace-editor.ace-tm .ace_paren,
    #ace-editor.ace-tm .ace_punctuation {
        color: #334155 !important;
    }

    #ace-editor.ace-tm .ace_invalid {
        background-color: rgba(220, 38, 38, .12) !important;
        color: #b91c1c !important;
    }

    .form-control input:not([type=radio]):not([type=file]):not([type=checkbox]):not([type=search]):not([type=submit]):not([size]) {
        box-sizing: border-box;
        width: 100%
    }

    .radio-group input[type=radio] {
        inline-size: 1rem;
        block-size: 1rem;
        margin: 0 .45em 0 1em;
        margin-inline: 1em .45em;
        vertical-align: -0.14em;
        accent-color: var(--link-color)
    }

    .radio-group input[type=radio] + label {
        display: inline;
        line-height: 1.45;
        vertical-align: baseline
    }

    .form-control label {
        font-weight: 600;
        color: var(--overall-text-color);
        display: inline-block;
        margin-bottom: .4em;
        letter-spacing: .01em
    }

    .form-control label.radio-label,.form-control label.checkbox-label {
        font-weight: 400
    }

    .form-control .enable-source-editor + label.checkbox-label {
        display: inline;
        margin: 0;
        line-height: 1.25;
        vertical-align: middle;
    }

    .form-control .label-note .enable-source-editor {
        margin: 0 .35em 0 0;
        vertical-align: middle;
    }

    .form-control select[name*="[additional_info]"][name$="[locale]"] {
        width: auto;
        max-width: min(100%, 18rem);
        padding: .35em .65em;
        font-size: .92rem;
    }

    .form-control textarea[name="script_version[code]"],
    textarea[name="script_version[changelog]"],
    textarea.comment-entry,
    .form-control textarea[name*="[additional_info]"][name$="[attribute_value]"] {
        background-color: #f8fafc;
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08), 0 0 0 1px rgba(79, 70, 229, .04);
    }

    .form-control textarea[name*="[additional_info]"][name$="[attribute_value]"] {
        border-top-left-radius: 0;
    }

    textarea.comment-entry {
        border-top-left-radius: 0;
    }

    .previewable[data-markup-option-name="script_version[changelog_markup]"] textarea,
    .previewable[data-markup-option-name="script_version[changelog_markup]"] .preview-results {
        border-top-left-radius: 0;
    }

    label.subselection-radio-title {
        font-weight: 400;
        font-size: small;
        display: block;
        margin-left: 3px
    }

    .field_with_errors textarea,.field_with_errors input {
        background-color: rgba(220, 38, 38, .12);
        border-color: var(--rating-icon-bad-border-color);
        box-shadow: 0 0 0 0 rgba(220, 38, 38, .12)
    }

    .label-note {
        font-size: smaller;
        color: var(--texty-link-visited-color)
    }

    .label-note.markup-options > a:first-child {
        margin-inline-end: .75em
    }

    .label-note.markup-options label.radio-label {
        margin-inline-end: .65em
    }

    .screenshots-controls>*:not(label) {
        padding-left: 1em
    }

    .add-screenshot-control,.screenshot-control {
        clear: left
    }

    .screenshot-control>* {
        vertical-align: middle
    }

    .screenshot-control a {
        float: left;
        min-width: 150px;
        text-align: center
    }

    #script-info,.user-list,.text-content,.discussion-list,.notification-list {
        padding: clamp(1rem, 2.4vw, 1.5rem)
    }

    #script-info>*:last-child,.user-list>*:last-child,.text-content>*:last-child,.discussion-list>*:last-child,.notification-list>*:last-child {
        margin-bottom: 0
    }

    .script-list {
        padding: 0;
        border-radius: var(--border-radius-medium);
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        box-shadow: var(--shadow-soft);
        box-sizing: border-box;
        margin: 18px 0;
        overflow: hidden;
        transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base)
    }

    .user-list,.text-content,.discussion-list,.notification-list {
        list-style-type: none;
        box-shadow: var(--shadow-soft);
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-sizing: border-box;
        margin: 18px 0;
        padding: clamp(1.15rem, 2vw, 1.6rem);
        display: flex;
        flex-direction: column;
        transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base)
    }

    .script-list:hover,.user-list:hover,.text-content:hover,.discussion-list:hover,.notification-list:hover {
        border-color: var(--container-glow-stroke);
        box-shadow: var(--shadow-hover);
        transform: none
    }

    .text-content:last-child {
        margin-bottom: 0
    }

    .text-content.text-content-compact {
        padding: clamp(.85rem, 1.5vw, 1.2rem);
    }

    html[data-gfplus-set-editor-page] .text-content > p:first-of-type {
        font-size: 1.3rem;
        line-height: 1.72;
        margin-top: 0;
    }

    .user-list {
        background-image: none
    }

    .script-link,.script-description,.user-link {
        unicode-bidi: isolate
    }

    .gf-script-logo {
        width: 26px;
        height: 26px;
        aspect-ratio: 1 / 1;
        min-width: 26px;
        min-height: 26px;
        max-width: 26px;
        max-height: 26px;
        flex: 0 0 26px;
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        vertical-align: text-bottom;
        border: 0;
        background: transparent;
        box-shadow: none;
        overflow: hidden;
        line-height: 0;
    }

    img.gf-script-logo {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
        object-position: center;
        max-width: 100%;
        max-height: 100%;
        filter: none;
        mix-blend-mode: normal;
        image-rendering: auto;
    }

    .gf-script-logo--title {
        width: 34px;
        height: 34px;
        min-width: 34px;
        min-height: 34px;
        max-width: 34px;
        max-height: 34px;
        flex-basis: 34px;
        margin-right: 10px;
    }

    .gf-script-logo--fallback {
        color: var(--link-color);
    }

    .gf-script-logo--fallback svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
    }

    #script-info header h2,
    #script-info > h2 {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    #script-info header h2 .gf-script-logo,
    #script-info > h2 .gf-script-logo {
        margin-right: 0;
    }

    #script-info header h2 .gf-script-logo--fallback svg,
    #script-info > h2 .gf-script-logo--fallback svg {
        width: 18px;
        height: 18px;
    }

    .list-option-groups~ol {
        width: calc(960px - 14em)
    }

    .text-content .list-option-groups~ol {
        width: calc(960px - 16em)
    }

    @media screen and (max-width: 960px) {
        #script-info,.user-list,.text-content {
            padding: clamp(.9rem, 4vw, 1.2rem)
        }
    }

    @media screen and (max-width: 400px) {
        .script-list,.user-list,.text-content,.discussion-list,.notification-list {
            border-left:0;
            border-right: 0
        }

        .user-list,.text-content,.discussion-list,.notification-list,.script-list-description {
            padding-left: 1rem;
            padding-right: 1rem
        }

        .discussion-list-header,.user-list-header,.library-list-header {
            padding-left: 1em;
            padding-right: 1em;
            margin-top: 15px;
            margin-bottom: 10px
        }

        #script-info {
            padding-left: 1em;
            padding-right: 1em
        }

        #script-links {
            margin-left: -1em;
            margin-right: -1em;
            padding: 0
        }

        #additional-info {
            margin-left: -1em;
            margin-right: -1em
        }
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) {
        border-bottom: 1px solid var(--content-separator-color);
        padding: clamp(1rem, 2.5vw, 1.6rem);
        display: grid;
        min-width: 0;
        max-width: 100%;
        box-sizing: border-box;
        list-style-type: none;
        gap: .55rem;
        background: linear-gradient(180deg, rgba(79, 70, 229, .02), transparent);
        transition: background-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):hover {
        background: linear-gradient(180deg, rgba(79, 70, 229, .045), rgba(79, 70, 229, .018));
        box-shadow: inset 0 0 0 1px rgba(79, 70, 229, .08);
        transform: translateY(-1px);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):has(.gf-script-star-button[data-active="true"]) {
        background: linear-gradient(90deg, rgba(244, 180, 0, .07), rgba(244, 180, 0, .015) 42%, transparent);
        box-shadow: inset 3px 0 rgba(202, 138, 4, .72);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):has(.gf-script-star-button[data-active="true"]):hover {
        background: linear-gradient(90deg, rgba(244, 180, 0, .11), rgba(244, 180, 0, .025) 48%, transparent);
        box-shadow: inset 3px 0 rgba(202, 138, 4, .9), inset 0 0 0 1px rgba(202, 138, 4, .12);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):last-child {
        border-bottom: none
    }

    .script-list .cf-wrapper {
        margin: 0!important
    }

    @media screen and (max-width: 960px) {
        .script-list > li:not(.ad-entry):not(.gf-script-extra-info) {
            padding: clamp(.9rem, 4vw, 1.3rem)
        }
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.35;
        letter-spacing: .01em;
        color: var(--overall-text-color);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 8px;
        row-gap: .35em;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 .gf-script-logo {
        flex: 0 0 26px;
        margin-right: 0;
        align-self: center;
        vertical-align: middle;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 .gf-script-title-content {
        display: block;
        flex: 1 1 0;
        min-width: 0;
        max-width: calc(100% - 34px);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 > .script-link,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 .gf-script-title-content .script-link {
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
        word-break: normal;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > p {
        margin: 0
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > footer {
        margin-top: .35em;
        display: flex;
        flex-wrap: wrap;
        gap: .6rem;
        font-size: .875rem;
        color: var(--texty-link-visited-color)
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > footer a {
        font-weight: 500
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article {
        min-width: 0;
        max-width: 100%;
    }

    .list-current,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 {
        font-weight: 700
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article .description {
        font-weight: 400;
        display: block;
        flex: 0 0 100%;
        margin: .5em 0;
        font-size: .95rem;
        color: var(--texty-link-visited-color)
    }

    .gf-script-extra-info {
        display: none;
        min-width: 0;
        max-width: 100%;
        margin-top: .8rem;
        padding-top: .8rem;
        border-top: 1px solid var(--content-separator-color);
    }

    .gf-script-extra-info[data-open="true"] {
        display: block;
    }

    .gf-script-extra-info .user-content ul,
    .gf-script-extra-info .user-content ol {
        margin-top: .35em;
        margin-bottom: .45em;
        padding-left: 1.45em;
    }

    .gf-script-extra-info .user-content li {
        display: list-item;
        margin: 0;
        padding: 0;
        border-bottom: 0;
        background: transparent;
        box-shadow: none;
        transform: none;
        transition: none;
    }

    .gf-script-extra-info .user-content li > ul,
    .gf-script-extra-info .user-content li > ol {
        margin-top: .2em;
        margin-bottom: .2em;
    }

    .gf-script-extra-status {
        display: inline-flex;
        align-items: center;
        gap: .6rem;
        min-height: 40px;
        max-width: 100%;
        box-sizing: border-box;
        padding: .65rem .85rem;
        border: 1px solid rgba(79, 70, 229, .16);
        border-radius: var(--border-radius-small);
        background: linear-gradient(180deg, rgba(79, 70, 229, .075), rgba(79, 70, 229, .025));
        color: var(--texty-link-visited-color);
        font-size: .9rem;
        font-weight: 600;
    }

    .gf-script-extra-status::before {
        content: "";
        width: 14px;
        height: 14px;
        flex: 0 0 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 999px;
        opacity: .72;
        animation: gf-script-extra-spin .8s linear infinite;
    }

    .gf-script-extra-info[data-gfplus-extra-info="loaded"] .gf-script-extra-status::before,
    .gf-script-extra-info[data-gfplus-extra-info="error"] .gf-script-extra-status::before {
        display: none;
    }

    @keyframes gf-script-extra-spin {
        to {
            transform: rotate(360deg);
        }
    }

    .script-list .name-description-separator {
        display: none
    }

    #script-description,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 > a,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article .description {
        word-wrap: break-word
    }

    @media screen and (max-width: 720px) {
        .script-list,#script-content {
            margin-left:unset
        }
    }

    .pagination,.script-list+.pagination,.user-list+.pagination,.pagy.series-nav {
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .6rem;
        background-color: transparent;
        padding: 1.1rem 0;
        margin: 0;
        border-radius: var(--border-radius-small)
    }

    .pagination>*,.script-list+.pagination>*,.user-list+.pagination>*,.pagy.series-nav>* {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.6rem;
        background-color: var(--pagination-background-color);
        padding: .55em .95em;
        border-radius: var(--border-radius-small);
        text-decoration: none;
        border: 1px solid transparent;
        color: var(--overall-text-color);
        font-weight: 600;
        transition: background-color var(--transition-base), color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)
    }

    .pagination .disabled {
        display: none
    }

    .pagination .current,.pagy.series-nav [aria-current="page"] {
        font-style: normal;
        font-weight: 700
    }

    .pagination .current,.pagination .gap,.pagy.series-nav [aria-disabled="true"] {
        background-color: transparent;
        color: var(--texty-link-visited-color);
        text-decoration: none;
        cursor: default
    }

    .pagination .current,.pagy.series-nav [aria-current="page"] {
        border-color: var(--link-color);
        color: var(--link-color);
        box-shadow: inset 0 0 0 1px var(--link-color);
        background-color: rgba(79, 70, 229, .08)
    }

    .pagy.series-nav [aria-disabled="true"] {
        pointer-events: none
    }

    .pagination>a:hover,.pagination>a:focus,.pagy.series-nav>a:hover,.pagy.series-nav>a:focus {
        background-color: var(--pagination-hover-background-color);
        color: var(--overall-text-color);
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(79, 70, 229, .18)
    }

    .pagy.series-nav>a:hover,.pagy.series-nav>a:focus {
        transform: none;
        box-shadow: none
    }

    .pagination>a:focus-visible,.pagy.series-nav>a:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 2px
    }

    @media screen and (max-width: 400px) {
        .pagination,.script-list+.pagination,.user-list+.pagination,.pagy.series-nav {
            padding-left: 1rem;
            padding-right: 1rem
        }
    }

    .good-rating-count,.ok-rating-count,.bad-rating-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.5em;
        text-align: center;
        padding: .1em .5em;
        border-radius: 999px;
        font-weight: 600;
        font-size: .85rem;
        border: 1px solid transparent;
        transition: transform var(--transition-base), box-shadow var(--transition-base)
    }

    .good-rating-count {
        background-color: var(--rating-icon-good-background-color);
        border-color: var(--rating-icon-good-border-color);
        color: var(--rating-icon-good-color)
    }

    .ok-rating-count {
        background-color: var(--rating-icon-ok-background-color);
        border-color: var(--rating-icon-ok-border-color);
        color: var(--rating-icon-ok-color)
    }

    .bad-rating-count {
        background-color: var(--rating-icon-bad-background-color);
        border-color: var(--rating-icon-bad-border-color);
        color: var(--rating-icon-bad-color)
    }

    .select-all,.select-none {
        display: none
    }

    #help-allowed-elements,#help-allowed-styles {
        column-width: 20em
    }

    #help-allowed-elements li,#help-allowed-styles li {
        padding-right: 1em
    }

    #by-site-list {
        list-style-type: none;
        padding: 0
    }

    #by-site-list li {
        display: inline;
        vertical-align: middle
    }

    #user_profile {
        width: 100%;
        height: 10em
    }

    .preview-result {
        display: none;
        background-color: #ffa;
        padding: .5em
    }

    .failed-sync {
        background-color: #fcc
    }

    .alert {
        font-style: normal;
        background-color: var(--alert-background-color);
        border: 1px solid rgba(245, 158, 11, .25);
        border-left: 6px solid var(--alert-border-color);
        padding: 1rem 1.1rem;
        color: var(--alert-text-color);
        border-radius: var(--border-radius-small);
        box-shadow: 0 12px 20px rgba(120, 53, 15, .12)
    }

    .notice,.validation-errors {
        background-color: var(--notice-background-color);
        border: 1px solid rgba(2, 132, 199, .2);
        border-left: 6px solid var(--notice-border-color);
        padding: 1rem 1.1rem;
        color: var(--notice-text-color);
        border-radius: var(--border-radius-small);
        box-shadow: 0 12px 20px rgba(15, 23, 42, .08)
    }

    .validation-errors {
        margin: .5em 0
    }

    .validation-errors>p:first-child {
        margin-top: 0
    }

    .validation-errors>p:last-child {
        margin-bottom: 0
    }

    .alert p,.notice p,.validation-errors p {
        margin: 0
    }

    .alert p+p,.notice p+p,.validation-errors p+p {
        margin-top: .6rem
    }

    #install-stats-chart {
        width: 100%;
        height: 400px;
        background: var(--content-background-color) !important;
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        overflow: hidden
    }

    #install-stats-chart-container,
    #weekly-install-stats-chart-container,
    #update-check-stats-chart-container {
        width: 100%;
        min-height: 320px;
        background: var(--content-background-color) !important;
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        overflow: hidden
    }

    #install-stats-chart-container canvas,
    #weekly-install-stats-chart-container canvas,
    #update-check-stats-chart-container canvas {
        display: block;
        max-width: 100%;
    }

    #install-stats-chart svg text {
        fill: var(--install-stats-text-color) !important
    }

    #install-stats-chart svg line[stroke],
    #install-stats-chart svg path[stroke="#cccccc"],
    #install-stats-chart svg path[stroke="#e6e6e6"],
    #install-stats-chart svg path[stroke="#d9d9d9"] {
        stroke: var(--install-stats-grid-color) !important
    }

    #install-stats-chart svg rect[fill="#ffffff"],
    #install-stats-chart svg rect[fill="white"] {
        fill: var(--content-background-color) !important
    }

    .stats-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        overflow: hidden;
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, .04)
    }

    .stats-table th,.stats-table td {
        border: 1px solid var(--content-border-color);
        padding: .75rem 1rem;
        text-align: left
    }

    .stats-table th {
        background: linear-gradient(180deg, rgba(79, 70, 229, .08), rgba(79, 70, 229, .02));
        font-weight: 600;
        color: var(--overall-text-color)
    }

    .stats-table thead tr:first-child th:first-child {
        border-start-start-radius: 5px;
        overflow: hidden
    }

    .stats-table thead tr:first-child th:last-child {
        border-start-end-radius: 5px;
        overflow: hidden
    }

    .stats-table tbody tr:last-child > * {
        border-block-end: 1px solid var(--content-border-color) !important;
        border-bottom: 1px solid var(--content-border-color) !important;
        background-clip: padding-box
    }

    .stats-table tbody tr:last-child > *:first-child {
        border-inline-start: 1px solid var(--content-border-color) !important;
        border-bottom-left-radius: 5px;
        border-end-start-radius: 5px;
        overflow: hidden
    }

    .stats-table tbody tr:last-child > *:last-child {
        border-inline-end: 1px solid var(--content-border-color) !important;
        border-bottom-right-radius: 5px;
        border-end-end-radius: 5px;
        overflow: hidden
    }

    body:lang(ar) .stats-table tbody tr:last-child > *:first-child,
    body:lang(he) .stats-table tbody tr:last-child > *:first-child,
    body:lang(ug) .stats-table tbody tr:last-child > *:first-child,
    body:lang(ckb) .stats-table tbody tr:last-child > *:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 5px
    }

    body:lang(ar) .stats-table tbody tr:last-child > *:last-child,
    body:lang(he) .stats-table tbody tr:last-child > *:last-child,
    body:lang(ug) .stats-table tbody tr:last-child > *:last-child,
    body:lang(ckb) .stats-table tbody tr:last-child > *:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 0
    }

    .stats-table tbody tr:hover {
        background-color: rgba(79, 70, 229, .06)
    }

    td.numeric,th.numeric {
        text-align: right
    }

    .translation_missing {
        outline: dashed red
    }

    #edit_user>div {
        margin-bottom: .5em
    }

    #edit_user>div>label:first-child {
        font-weight: 700
    }

    .inline-form {
        display: inline
    }

    a.self-link,a.self-link:visited {
        text-decoration: none;
        color: #000;
        opacity: .2
    }

    .indented {
        padding-left: 1em
    }

    .external-login {
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        max-width: 100%;
        margin: .25rem .35rem .25rem 0;
        padding: .64em 1.05em .64em 2.35em;
        border: 1px solid rgba(79, 70, 229, .35);
        border-radius: 8px;
        background-color: #5f5fee;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: .82em center;
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: .01em;
        cursor: pointer;
        box-shadow: none;
        text-decoration: none;
        white-space: normal;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base);
        transform: none !important;
    }

    .external-login:hover,
    .external-login:focus,
    .external-login:active {
        border-color: rgba(67, 56, 202, .55);
        background-color: #4338ca;
        background-repeat: no-repeat !important;
        background-size: 16px 16px !important;
        background-position: .82em center !important;
        color: #ffffff;
        transform: none !important;
    }

    .external-login.github-login,
    .external-login.gitlab-login,
    .external-login.google_oauth2-login,
    .external-login.github-login:hover,
    .external-login.gitlab-login:hover,
    .external-login.google_oauth2-login:hover,
    .external-login.github-login:focus,
    .external-login.gitlab-login:focus,
    .external-login.google_oauth2-login:focus,
    .external-login.github-login:active,
    .external-login.gitlab-login:active,
    .external-login.google_oauth2-login:active {
        box-shadow: none !important;
    }

    .external-login-container {
        display: inline-block;
        vertical-align: top
    }

    .external-login-container * {
        text-align: center;
        display: block
    }

    .external-login-container .external-login {
        display: inline-flex !important
    }

    .external-login-container>*:not(button) {
        font-size: smaller
    }

    .external-login-container:not(:last-child) {
        margin-right: 5px
    }

    .external-login-container .github-login {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==)
    }

    .external-login-container .gitlab-login {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACoUlEQVRYhc3WzW+UVRQG8N/MtKKYsEFMmpo27DUEFgSiSIHSsDAxsYr6L4Cs+AMkMWiMCwgB2lQMhIWJ0Rip7owbXbhjhekGTFBQkC9rTCxBWxb3vpkzb2Y6H+00PsnN3Hve8zznzL3nfvA/xQRm8Qk2rUBnU9aYxf5OSevxF5ZyO7eCBM4Fnb/xVCekyUBawl0M9BB8EPdLWq92Qvy0RFrCvh4SmGiic7EdaZ3G6S/aVA8JzDTR+RNPLEd6JTi/h19z/zZqXQQfwB+Zex3Hg+6B5Yjng+MWnAzjl7tIYE/gncDWMP64FSkWzVVUsCsQT3WRwOnAeylr/ZzHd7Qo6v2B9GG21XAr226i2kHwKn7LnN8D56Ogv6cZcTo4bA/2qWDf2UECLwb/s8G+I9jPFMZK/q3lrJ+VCm80O8I4vs39RRxtk8CJ0B/Hd7lfxS8YlmbmuawHxjQWTcSgdBiVt1S71uwAOxW+7yqygteD05cl0iNcaPl/W+MC/i3Zvgj9g6QlqOIGhqSCGxamJqOKbXiyw+ALuNxEpyYt8ZB0tgyTCqtZ0fQLcRn2VqXLp0B5+vuBz0L/TbiWs7knFVy/UVU/4u9QP7Pn5crsM8bVl+AfeDcY/svjXu7/dhjAMY1b9Trpejxf+vA9RlYx+Ah+KMX4HBui09vSMhQO9/HaKgSfxIOgO4+3Wjlvxo+lTKeld2K3WK/xflnK2pvbEQelB8RiIF7B810EfwE/Bf5i1uxql+1Vv1aLij2kfoE1QwWHpZOw4N3MWj3hGXytcRq/wsYmvhtxqeQ7mzVWhAqO4GEQvoHdwWcs24rvC3jH8rPVNbZgTuO6vo8PNNbLXPbtC56WHpWt3gAz2afveEN64xeBH2h8U6wJRvFNbqNrHXzV8BjO7vx8x02KpQAAAABJRU5ErkJggg==)
    }

    .external-login-container .google_oauth2-login {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAnFJREFUOI2FU11Ik1EYfs75zvZ9c35buAKpaWaSSVZoiheBKVmYdWF1ERi7kMhFUeqNFxLURRAhFKvhTcHMioQiCBG8iOgH8QfFKZj4M81ES0fONfe5tW87XcQncw17rs7znud5f87LIUgCn8u1jQaWL2MtWMTBGZGkKUgpLvPVxolELYkn3if3ZP38ytvQ8EAZCa6RzUoK4WDBrJiXey61rtH9T4LVx86cWF/PsPp1OjVZVxpo+q6wpfSUTOz2CAAwAIg5HOJqf89QvFnI3KNQa6ab6vTB2Ir3QGRsdCeMqVw8WmbTzBsJFPNSmzo7bfpbgkI6UeWSm25dIgDXhAHn/YtgRJWvNLza1BLnIOHPWZFwVyVfrizhvjvNXVuNkAimTjVV0PADBnEBpuYiVRnfXRMvaOkMOaOcpyUz7zDgJiPRtRKtTyrBn2a3++NFg7NqnTcAXbIE1UWsjwJkY07ON6/1v4hBYlxn6tP4SHS7yTH5zFS/z/ZLix3OEDrDUVg0PjSjlioRQgBA1GGSsb1334cXsyMd5Liudd7HKuB9CeC0Zmg+azivnR92h6qVCDkGAAYd53pB7KaEgLeJ1147F1YQ4xzv5nurbvc/eoqEcZwfh0r7PWqHxvOtwlhtOQkRAHBMOsQBz9zShH/OrAky5PT1LKN1lDG6/nPdnzPu81gPyeWYGbkAA2P8zBF9YV256N6o0jr6IvvT4qB7evWbvNW75Znzo8VCU8ONk0YnkPCZWtztRp+y/Kb3x0hF4LdC4+8oIci37P9eYMmtuV5g+6DFk66txd1uRFStDarBYnAuiYLkSREMz+sLbV8StX8AjxDtgxiuzNwAAAAASUVORK5CYII=)
    }

    .centered-sections h2,.centered-sections h3 {
        text-align: center
    }

    form.external-login-form {
        position: relative;
        display: table;
        margin: 0 auto;
        padding: 1em;
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: 5px;
        text-align: center
    }

    form.external-login-form .remember-me {
        margin-top: 12px
    }

    form.new_user {
        position: relative;
        width: 340px;
        margin: 0 auto;
        padding: 1em;
        background-color: var(--content-background-color);
        border: 1px solid content(--content-border-color);
        border-radius: 5px;
        text-align: start
    }

    @media screen and (max-width: 440px) {
        form.new_user {
            width:unset
        }
    }

    form.new_user label,form.new_user em {
        display: block;
        font-size: small
    }

    form.new_user br {
        display: none
    }

    form.new_user input[type=text],form.new_user input[type=email],form.new_user input[type=password] {
        display: block;
        width: 100%;
        min-height: 34px;
        box-sizing: border-box;
        margin-top: .2em;
        margin-bottom: .5em;
        padding: 6px 8px;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
        border: 1px solid #ddd;
        border-radius: 3px;
        outline: none;
        box-shadow: inset 0 1px 2px #0000001a
    }

    form input[type=checkbox],input[type=checkbox]+label,form input[type=radio],input[type=radio]+label {
        display: inline-block;
        font-size: small
    }

    .radio-note {
        font-size: small;
        margin-top: 5px
    }

    @media screen and (max-width: 440px) {
        form input[type=checkbox]+label {
            display:unset;
            word-wrap: break-word
        }
    }

    form.new_user input[type=submit] {
        display: block;
        width: 100%;
        min-height: 34px;
        box-sizing: border-box;
        margin: .5em 0 0;
        padding: 6px 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        background-color: #670000;
        background-image: linear-gradient(#900,#670000);
        border: 0px solid #ddd;
        box-shadow: none;
        border-radius: 3px;
        white-space: normal
    }

    form.new_user~br {
        display: none
    }

    form.new_user~a {
        width: 340px;
        display: block;
        margin: 0 auto 2em;
        font-size: small
    }

    form.new_user+a {
        width: 340px;
        display: block;
        margin: 0 auto
    }

    .qr-code {
        max-width: 400px;
        background-color: #fff
    }

    .sidebar-search,.home-search,
    #library-search,#user-search,#code-search {
        position: relative;
        vertical-align: middle
    }

    .sidebar-search input[type=search],.home-search input[type=search],
    #library-search input[type=search],
    #user-search input[type=search],
    #code-search input[type=search] {
        padding: .6em 78px .6em .8em;
    }

    .sidebar-search input[type=search]::-webkit-search-cancel-button,
    .home-search input[type=search]::-webkit-search-cancel-button,
    #library-search input[type=search]::-webkit-search-cancel-button,
    #user-search input[type=search]::-webkit-search-cancel-button,
    #code-search input[type=search]::-webkit-search-cancel-button {
        margin-right: 38px;
    }

    .sidebar-search input[type=search],
    #library-search input[type=search],
    #user-search input[type=search],
    #code-search input[type=search] {
        width: 100%;
        margin: 0 0 16px;
    }

    .sidebar-search input.search-submit[value="🔎"],.home-search input.search-submit[value="🔎"],
    #library-search input.search-submit[value="🔎"],
    #user-search input.search-submit[value="🔎"],
    #code-search input.search-submit[value="🔎"] {
        position: absolute;
        -moz-appearance: none;
        -webkit-appearance: none;
        inset-inline-end: 1px;
        top: 1px;
        bottom: 1px;
        width: 38px;
        border: 0;
        border-inline-start: 1px solid var(--content-border-color);
        border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
        padding: 0;
        margin-left: 0;
        margin-right: 0;
        background-color: var(--content-background-color) !important;
        box-shadow: none;
        opacity: 1;
        transform: none
    }

    .sidebar-search input.search-submit[value="🔎"] {
        bottom: 17px;
    }

    .sidebar-search input.search-submit[value="🔎"]:hover,.sidebar-search input.search-submit[value="🔎"]:focus,.sidebar-search input.search-submit[value="🔎"]:active,
    .home-search input.search-submit[value="🔎"]:hover,.home-search input.search-submit[value="🔎"]:focus,.home-search input.search-submit[value="🔎"]:active,
    #library-search input.search-submit[value="🔎"]:hover,#library-search input.search-submit[value="🔎"]:focus,#library-search input.search-submit[value="🔎"]:active,
    #user-search input.search-submit[value="🔎"]:hover,#user-search input.search-submit[value="🔎"]:focus,#user-search input.search-submit[value="🔎"]:active,
    #code-search input.search-submit[value="🔎"]:hover,#code-search input.search-submit[value="🔎"]:focus,#code-search input.search-submit[value="🔎"]:active {
        background-color: var(--content-background-color) !important;
        box-shadow: none;
        transform: none
    }

    #library-search,
    #user-search,
    #code-search {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 38px;
        align-items: stretch
    }

    #library-search > h3,
    #library-search > p,
    #user-search > h3,
    #user-search > p,
    #code-search > h3,
    #code-search > p {
        grid-column: 1 / -1
    }

    #library-search input[type=search],
    #user-search input[type=search],
    #code-search input[type=search] {
        grid-column: 1;
        margin: 0 0 16px;
        padding: .6em 34px .6em .8em;
        border-start-end-radius: 0;
        border-end-end-radius: 0
    }

    #library-search input[type=search]::-webkit-search-cancel-button,
    #user-search input[type=search]::-webkit-search-cancel-button,
    #code-search input[type=search]::-webkit-search-cancel-button {
        margin-right: 8px
    }

    #library-search input.search-submit[value="🔎"],
    #user-search input.search-submit[value="🔎"],
    #code-search input.search-submit[value="🔎"] {
        position: static;
        grid-column: 2;
        align-self: stretch;
        width: 38px;
        min-height: auto;
        margin: 0 0 16px;
        border: 1px solid var(--content-border-color);
        border-inline-start: 0;
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        border-start-end-radius: var(--border-radius-small);
        border-end-end-radius: var(--border-radius-small);
        background-color: var(--content-background-color) !important
    }

    @media screen and (max-width: 680px) {
        .sidebar-search input[type=search],.home-search input[type=search],
        #library-search input[type=search],
        #user-search input[type=search],
        #code-search input[type=search] {
            font-size:unset
        }
    }

    figure {
        padding: 5px;
        box-shadow: 0 4px 8px #00000026,0 6px 10px #00000026;
        border-radius: 5px
    }

    figcaption {
        font-size: smaller;
        text-align: center
    }

    .multiform-page:not(:first-child) {
        margin-top: 30px
    }

    .multiform-page:not(:last-child) {
        padding-bottom: 30px;
        border-bottom: 1px solid lightgray
    }

    summary {
        cursor: pointer
    }

    @media screen and (max-width: 400px) {
        .user-list {
            padding-top:1em;
            padding-bottom: 1em
        }
    }

    .blocked-script-codes {
        font-size: smaller;
        border-collapse: collapse;
        width: 100%;
        text-align: left
    }

    .blocked-script-codes .pattern-row code {
        font-size: medium
    }

    .blocked-script-codes .pattern-row {
        border-top: 1px solid gray
    }

    .blocked-script-codes .info-row td:first-child {
        width: 2em
    }

    .ad {
        margin-top: 1em;
        margin-bottom: 1em
    }

    .script-list-cd-entry {
        border-bottom: 1px solid #DDDDDD
    }

    #script-list-cd,#discussion-show-cd {
        width: 300px;
        margin-left: auto;
        margin-right: auto
    }

    #script-list-cd {
        padding: 1em
    }

    .ethical-ads-text .ea-placement {
        position: relative
    }

    .ethical-ads-text .ea-callout {
        position: absolute;
        bottom: 0;
        right: 0
    }

    .ethical-ads-text:empty {
        min-height: 46px
    }

    .ethical-ads.text-content-top-ad {
        margin: 0 calc(-1em - 1px);
        border-radius: 5px 5px 0 0
    }

    @media screen and (max-width: 960px) {
        .ethical-ads.text-content-top-ad {
            margin:0 calc(-1.2vw - 1px)
        }
    }

    @media screen and (max-width: 400px) {
        .ethical-ads.text-content-top-ad {
            margin:0 calc(-1em - 1px);
            border-radius: 5px 5px 0 0
        }
    }

    @media screen and (max-width: 400px) {
        .script-list li.ad-entry {
            padding:0
        }
    }

    #script-info .ethical-ads-text {
        margin: 0 calc(-1em - 1px)
    }

    #script-info .ethical-ads-text .ea-content {
        border-radius: 0!important
    }

    @media screen and (max-width: 960px) {
        #script-info .ethical-ads-text {
            margin:0 calc(-1.2vw - 1px)
        }
    }

    .after-radio-chosen {
        display: none;
        margin-left: 29px
    }

    input[type=radio]:checked~.after-radio-chosen {
        display: block
    }

    .announcement {
        margin: 14px 0;
        text-align: center;
        font-size: smaller
    }

    .announcement form {
        display: inline
    }

    .announcement input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border: 0;
        background: none;
        margin: 0 0 0 4px;
        padding: 0;
        cursor: pointer
    }

    .announcement,.announcement input {
        font-size: 12px
    }

    .badge {
        margin-left: 1ex;
        border-radius: 10%/25%;
        font-size: 70%;
        padding: 0 .5ex;
        text-transform: uppercase;
        position: relative;
        top: -.2ex
    }

    .badge-banned,.badge-deleted {
        background-color: #ff0000e6;
        color: #fff
    }

    .badge-deleted {
        margin-left: 0;
        border-color: #ff0000e6
    }

    .badge-moderator {
        background-color: #1a1da8e6;
        color: #fff
    }

    .badge-author {
        background-color: #1e971ee6;
        color: #fff
    }

    .badge-js {
        background-color: #efd81d;
        color: #000
    }

    .badge-css {
        background-color: #254bdd;
        color: #fff
    }

    .badge-js,.badge-css {
        display: none
    }

    .showing-all-languages .badge-js,.showing-all-languages .badge-css {
        display: inline
    }

    code {
        background-color: var(--code-background-color)
    }

    pre code {
        background: none;
        border: 0
    }

    pre,code {
        border-radius: 2px
    }

    pre {
        padding: 1em
    }

    .prettyprint {
        min-width: calc(100% - 6px);
        background-color: var(--prettyprint-background-color);
        color: var(--prettyprint-color)
    }

    .prettyprint.wrap {
        white-space: pre-wrap;
        line-break: anywhere
    }

    .prettyprint:not(.wrap) {
        width: max-content
    }

    .code-container {
        max-height: calc(100vh - 54px);
        overflow-x: auto;
        border-radius: 2px;
        border: 1px solid var(--code-container-border-color)
    }

    .code-container pre {
        border: 0;
        margin: 0
    }

    li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9 {
        list-style-type: decimal!important
    }

    @media screen and (max-width: 440px) {
        #code-container {
            font-size:small
        }
    }

    .diff_options input[type=number] {
        width: 10ch
    }

    .diff {
        overflow: auto
    }

    .diff ul {
        background: #fff;
        overflow: auto;
        font-size: 13px;
        list-style: none;
        margin: 0;
        padding: 0;
        display: table;
        width: 100%
    }

    .diff del,.diff ins {
        display: block;
        text-decoration: none
    }

    .diff li {
        padding: 0;
        display: table-row;
        margin: 0;
        height: 1em
    }

    .diff li.ins {
        background: var(--diff-ins-background);
        color: var(--diff-ins-color)
    }

    .diff li.del {
        background: var(--diff-del-background);
        color: var(--diff-del-color)
    }

    .diff li:hover {
        background: #ffc
    }

    .diff del,.diff ins,.diff span {
        white-space: pre;
        font-family: courier
    }

    .diff del strong {
        font-weight: 400;
        background: var(--diff-del-strong-background)
    }

    .diff ins strong {
        font-weight: 400;
        background: var(--diff-ins-strong-background)
    }

    .diff li.diff-comment {
        display: none
    }

    .diff li.diff-block-info {
        background: none repeat scroll 0 0 var(--diff-block-info)
    }

    .diff del,.diff ins,.diff span {
        font-family: monospace
    }

    .diff {
        max-height: calc(100vh - 54px);
        overflow-y: auto
    }

    .report-diff .diff {
        max-height: 75vh
    }

    .report-diff form {
        display: inline
    }

    .diff ul {
        background-color: var(--content-background-color);
        color: var(--overall-text-color)
    }

    .diff {
        border: 2px solid var(--content-border-color)
    }

    .diff li:hover {
        background: var(--highlight-background-color)
    }

    .ea-content,.ea-callout {
        margin: 0!important
    }

    #about-user .ethical-ads {
        margin: 0 calc(-1em - 5px)
    }

    @media screen and (max-width: 960px) {
        #about-user .ethical-ads {
            margin:0 -1.2vw
        }
    }

    @media screen and (max-width: 400px) {
        #about-user .ethical-ads {
            margin:0 -1em
        }
    }

    #user-show-ea+.report-link {
        top: 65px
    }

    .expander {
        cursor: pointer;
        display: block;
        color: var(--expander-color);
        border-radius: 3px;
        background-color: var(--expander-background-color);
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        inset-inline-end: -22px;
        bottom: 0
    }

    .expanded {
        overflow: auto
    }

    .collapsed {
        overflow: hidden
    }

    .comment {
        margin-bottom: 20px
    }

    .comment-entry {
        width: 100%;
        height: 10em
    }

    .discussion-meta,.comment-meta,.notification-meta {
        display: flex;
        align-items: flex-end
    }

    .discussion-meta,.notification-meta {
        font-size: 11px
    }

    .comment-meta {
        font-size: smaller;
        margin-bottom: 2px
    }

    .comment-meta-item-main {
        font-size: medium;
        font-weight: 700
    }

    .comment-meta-item+.comment-meta-item {
        margin-left: 15px
    }

    .discussion-meta-item,.notification-meta-item {
        flex: 1;
        text-align: left
    }

    .discussion-meta-item:not(:first-child) {
        margin-left: 8px
    }

    .discussion-meta-item:not(:last-child) {
        margin-right: 8px
    }

    .discussion-meta-item:last-child {
        text-align: right
    }

    .comment-meta-spacer {
        flex: 1
    }

    .post-reply {
        margin-top: 20px
    }

    .post-reply h3,.edit-comment-form h3 {
        margin-bottom: 0
    }

    .post-reply input[type=submit],.edit-comment-form input[type=submit] {
        margin-top: 5px
    }

    .discussion-up-level {
        font-size: smaller;
        margin-top: 0
    }

    .edit-comment-form {
        display: none
    }

    .edit-comment-mode .edit-comment-form {
        display: block
    }

    .edit-comment-mode .user-content,.edit-comment-mode .comment-meta {
        display: none
    }

    .discussion-rating {
        margin-top: 10px
    }

    .discussion-list,.notification-list {
        padding-bottom: 0
    }

    .discussion-list.discussion-list-logged-in {
        padding: 0;
        overflow: hidden
    }

    .discussion-list.discussion-list-logged-in .discussion-list-container {
        box-sizing: border-box;
        margin: 0;
        padding-left: clamp(1rem, 2vw, 1.5rem);
        padding-right: clamp(1rem, 2vw, 1.5rem);
        border-radius: 0
    }

    .discussion-list.discussion-list-logged-in .discussion-list-container:first-child {
        border-top-left-radius: var(--border-radius-medium);
        border-top-right-radius: var(--border-radius-medium)
    }

    .discussion-list.discussion-list-logged-in .discussion-list-container:last-child {
        border-bottom-left-radius: var(--border-radius-medium);
        border-bottom-right-radius: var(--border-radius-medium)
    }

    .discussion-list-item,.notification-list-item {
        padding-top: 10px;
        border-top: 1px solid var(--content-separator-color)
    }

    .discussion-list.discussion-list-logged-in .discussion-list-item {
        border-top-color: color-mix(in srgb, #fff 72%, #7d76ef 28%)
    }

    .text-content > .discussion-list-container .discussion-list-item {
        border-top-color: color-mix(in srgb, #fff 72%, #7d76ef 28%)
    }

    .discussion-list-container:first-child .discussion-list-item {
        border-top: 0
    }

    .discussion-list-logged-in .discussion-read {
        background-color: var(--inactive-item-background-color);
        margin-left: 0;
        margin-right: 0
    }

    .discussion-list-logged-in .discussion-unread,
    .discussion-list-logged-in .discussion-not-read,
    .discussion-list-logged-in .discussion-list-container:not(.discussion-read) {
        background-color: color-mix(in srgb, var(--content-background-color) 92%, var(--link-color) 8%);
        box-shadow: inset 3px 0 0 var(--link-color)
    }

    .discussion-list-logged-in .discussion-unread .discussion-title,
    .discussion-list-logged-in .discussion-not-read .discussion-title,
    .discussion-list-logged-in .discussion-list-container:not(.discussion-read) .discussion-title {
        font-weight: 650
    }

    .notification-read {
        background-color: var(--inactive-item-background-color);
        margin-left: -16px;
        margin-right: -16px;
        padding-left: 16px;
        padding-right: 16px
    }

    .script-discussion-list .discussion-list-item:last-child {
        border-bottom: 1px solid var(--content-separator-color)
    }

    a.discussion-title,.notification-list-item a {
        display: block;
        text-decoration: none;
        color: var(--overall-text-color);
        padding: 4px 0 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .discussion-title,.notification-list-item a {
        vertical-align: middle
    }

    .discussion-title:hover,.notification-list-item a {
        color: var(--texty-link-visited-color)
    }

    .rating-icon,.badge-deleted {
        border: 2px solid black;
        border-radius: 5px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 800;
        padding: 2px 5px;
        margin-right: 5px;
        display: inline-block;
        text-align: center;
        min-width: 45px;
        position: relative;
        top: -1px
    }

    .rating-icon-good {
        border-color: var(--rating-icon-good-border-color);
        background-color: var(--rating-icon-good-background-color);
        color: var(--rating-icon-good-color)
    }

    .rating-icon-ok {
        border-color: var(--rating-icon-ok-border-color);
        background-color: var(--rating-icon-ok-background-color);
        color: var(--rating-icon-ok-color)
    }

    .rating-icon-bad {
        border-color: var(--rating-icon-bad-border-color);
        background-color: var(--rating-icon-bad-background-color);
        color: var(--rating-icon-bad-color)
    }

    .discussion-meta-item-script-name {
        overflow: hidden
    }

    .discussion-meta-item-script-name a {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block
    }

    .comment .user-content>*:first-child {
        margin-top: 0
    }

    .comment-screenshot-control {
        font-size: smaller;
        padding: .5em 0
    }

    .discussion-header,.discussion-list-header,.notification-list-header {
        display: flex;
        margin-top: 30px;
        margin-bottom: 20px
    }

    @media screen and (max-width: 400px) {
        .discussion-header,.discussion-list-header,.notification-list-header,.user-list-header {
            margin-top:15px;
            margin-bottom: 10px
        }
    }

    .discussion-header-no-script {
        margin-top: 16px
    }

    .discussion-header>*:first-child,.discussion-list-header h2,.notification-list-header>*:first-child {
        flex: 1;
        margin: 0!important
    }

    .discussion-header h2,.discussion-header .discussion-up-level,.notification-list-header h2 {
        margin: 0
    }

    .discussion-header .badge {
        vertical-align: middle
    }

    .discussion-actions,.notification-actions {
        font-size: smaller
    }

    .discussion-subscribed .discussion-subscribe,.discussion-not-subscribed .discussion-unsubscribe {
        display: none
    }

    .post-discussion label:not(.radio-label),.post-reply label:not(.radio-label),.post-discussion .form-note,.post-reply .form-note {
        font-size: smaller
    }

    #main-header {
        background-color: #670000;
        background-image: linear-gradient(#670000,#900);
        box-shadow: 0 0 15px 2px #00000080;
        padding: .25em 0
    }

    #main-header .width-constraint {
        padding: 0 0 .25em;
        position: relative
    }

    #site-name img {
        vertical-align: bottom
    }

    #site-name-text {
        display: inline-block;
        vertical-align: top
    }

    #site-name-text h1 {
        line-height: 1.1em
    }

    #main-header,#main-header a,#main-header a:visited,#main-header a:active {
        color: #fff
    }

    #main-header h1 {
        font-size: 72px;
        margin: 0;
        letter-spacing: -2px
    }

    #main-header h1 a {
        text-decoration: none
    }

    #main-header .subtitle {
        margin: -8px 0 0 10px;
        font-size: .7em;
        text-shadow: -1px -1px 0px #670000,1px -1px 0px #670000,-1px 1px 0px #670000,1px 1px 0px #670000
    }

    #site-nav>nav,#nav-user-info {
        text-align: end;
        position: absolute;
        right: 0
    }

    #site-nav>nav {
        bottom: 0
    }

    #nav-user-info {
        top: 0
    }

    #site-nav>nav a:hover {
        color: #fff
    }

    #site-nav>nav {
        padding: 0
    }

    #site-nav>nav>li {
        list-style-type: none;
        display: inline-block
    }

    #site-nav>nav>li+li {
        margin-left: .5em
    }

    #script-search,.language-selector {
        display: inline
    }

    #nav-user-info {
        font-size: small
    }

    #nav-user-info select,#nav-user-info input {
        font-size: 11px
    }

    nav nav {
        position: absolute;
        right: 0;
        background-color: #900;
        min-width: 100%;
        display: none;
        padding: 5px 0;
        z-index: 10
    }

    nav nav li {
        white-space: nowrap;
        margin: 0
    }

    nav nav li a {
        display: block;
        padding: 5px 15px
    }

    #site-nav nav nav li.gf-favorites-nav-shortcut {
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(255, 255, 255, .18)
    }

    #site-nav nav nav li.gf-favorites-nav-shortcut a::before {
        content: "★";
        display: inline-block;
        margin-inline-end: .48em;
        color: #ffd166
    }

    nav a:hover+nav,nav nav:hover,nav a:focus+nav {
        display: block
    }

    .with-submenu {
        position: relative;
        padding-right: 15px
    }

    nav .with-submenu>a:after {
        content: " ▾"
    }

    @media screen and (max-width: 920px) {
        #site-name img {
            max-width:96px;
            max-height: 96px;
            width: 12%;
            height: 12%
        }

        #site-name-text {
            margin-top: 1.15vw;
            margin-bottom: 1.15vw
        }

        #main-header h1 {
            font-size: 8.3vw
        }

        #main-header .subtitle {
            margin: -.8em 0 0 10px;
            font-size: 2vw
        }

        #site-nav {
            margin-top: -1vw
        }

        #site-nav>nav,#nav-user-info {
            display: block;
            position: unset;
            right: unset;
            padding-top: .3em
        }

        #site-nav>nav {
            bottom: unset
        }

        #nav-user-info {
            top: unset;
            font-size: unset;
            width: 100%
        }

        #nav-user-info .sign-in-link {
            padding-right: .7em
        }

        #script-search,.language-selector {
            display: unset
        }
    }

    #mobile-nav {
        display: none
    }

    .mobile-nav-opener {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 8.3vw;
        padding: 0 2vw
    }

    #mobile-nav .collapsed {
        display: none
    }

    #mobile-nav nav {
        text-align: end;
        position: absolute;
        top: calc(100% + 4px);
        right: calc((100vw - 100%) / -2);
        width: min(22rem, calc(100vw - 0.8rem));
        max-width: calc(100vw - 0.8rem);
        max-height: calc(100vh - 0.75rem);
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #900;
        z-index: 1000;
        border-radius: 0 0 0 5px;
        font-size: 24px
    }

    #mobile-nav nav li {
        list-style-type: none
    }

    #mobile-nav nav li>a {
        display: block;
        padding: 10px 15px
    }

    #mobile-nav nav select {
        margin: 10px 15px;
        width: calc(100% - 30px);
        max-width: calc(100% - 30px);
        font: -webkit-small-control;
        box-sizing: border-box
    }

    #mobile-nav nav select.language-selector-locale {
        font-size: .92rem;
        min-height: 2rem;
        padding: .15rem .35rem;
    }

    #mobile-nav nav li.multi-link-nav {
        padding: 10px 15px
    }

    #mobile-nav nav li.multi-link-nav > a {
        display: inline;
        padding: 0
    }

    .gf-mobile-sign-out-icon {
        display: inline-flex !important;
        margin-top: 0;
        padding: 0 !important;
    }

    .gf-user-icon.gf-mobile-sign-out-icon svg {
        stroke-width: 3;
    }

    #mobile-nav .gf-user-icon.gf-mobile-edit-icon svg {
        stroke-width: 3;
    }

    #gf-mobile-primary-nav {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        padding: 0.7rem 0.85rem 0.55rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    }

    #gf-mobile-primary-nav > a {
        display: inline-flex !important;
        align-items: center;
        justify-content: flex-start;
        flex: 0 1 auto;
        min-width: 0;
        padding: 0 !important;
        color: inherit;
        text-decoration: none;
        font-size: 1.16rem;
        font-weight: 700;
        line-height: 1.2;
        min-height: 50px;
    }

    #gf-mobile-primary-nav-toggle {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        color: inherit;
        font-size: 1.32rem;
        font-weight: 700;
        cursor: pointer;
        flex: none;
        margin-left: auto;
    }

    #gf-mobile-secondary-nav {
        padding: 0 0.85rem 0.45rem;
    }

    #gf-mobile-secondary-nav.collapsed {
        display: none;
    }

    .gf-mobile-secondary-divider {
        display: none;
    }

    #gf-mobile-secondary-nav > li > a {
        display: block !important;
        font-size: 1.04rem;
        line-height: 1.2;
    }

    #gf-mobile-user-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        padding: 0.2rem 0 0;
    }

    #gf-mobile-user-row .user-profile-link a {
        display: inline-block;
        padding: 0;
        font-weight: 700;
    }

    #gf-mobile-user-meta {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        min-width: 0;
    }

    #gf-mobile-user-actions {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        flex: none;
    }

    #gf-mobile-user-actions .gf-user-icon {
        width: 30px;
        height: 30px;
    }

    #gf-mobile-user-actions .gf-user-icon[data-panel] {
        cursor: pointer;
    }

    .gf-mobile-user-panel {
        position: static;
        display: none;
        opacity: 1;
        transform: none;
        min-width: 0;
        margin-top: 0.7rem;
    }

    .gf-mobile-user-panel.active {
        display: block !important;
        position: relative;
        z-index: 1;
    }

    .gf-mobile-user-panel a {
        display: block !important;
        padding: 0.75em 1.25em !important;
    }

    @media screen and (max-width: 920px) {
        #site-nav {
            display:none
        }

        #main-header,
        #main-header .width-constraint,
        #mobile-nav {
            overflow: visible;
        }

        #mobile-nav {
            display: block
        }

        .width-constraint {
            margin-inline: auto;
            padding-inline: 0;
            width: calc(100% - 0.7rem);
        }

        #main-header .width-constraint {
            width: calc(100% - 0.8rem);
            padding-inline: 0.4rem;
        }
    }

    @media screen and (max-width: 400px) {
        #site-name {
            margin-left:1em
        }
    }

    #test-require-result-ok,#test-require-result-not-ok {
        display: none;
        font-weight: 700
    }

    #test-require-result-ok {
        color: green
    }

    #test-require-result-not-ok {
        color: red
    }

    #home-script-nav {
        max-width: 700px;
        margin: 0 auto 15px;
        padding-bottom: 20px;
        border-bottom: 1px solid #BBBBBB
    }

    .home-search input {
        font-size: large
    }

    .home-search input[type=search] {
        width: 100%
    }

    #home-top-sites {
        overflow: hidden;
        margin-top: 5px
    }

    #home-top-sites a {
        margin: 0 5px
    }

    #home-step-1,#home-step-2,#home-step-3 {
        overflow: auto
    }

    #home-step-1 figure {
        float: right;
        max-width: 50%;
        margin-inline-end:10px;margin-top: 0
    }

    #home-step-2 figure {
        float: left;
        max-width: 50%;
        margin-inline-start:7px;margin-top: 0
    }

    #home-step-2 li {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    @media screen and (max-width: 680px) {
        #home-step-1 figure,#home-step-2 figure,#home-step-3 figure {
            float:unset;
            max-width: unset;
            width: fit-content;
            margin: 0 auto
        }

        [id^=home-step-] figure img {
            width: 100%;
            height: auto
        }
    }

    .super-title {
        text-align: center
    }

    .browser-list {
        display: none
    }

    #desktop-browser-list {
        display: block
    }

    .browser-list-selector:not(.browser-list-selector-active) {
        text-decoration: underline;
        cursor: pointer
    }

    .browser-list-selector-active {
        font-weight: 700
    }

    .browser-list-selector:not(:last-child) {
        margin-right: 1em
    }

    .highlight {
        background-color: #ff0
    }

    #install-area {
        margin-bottom: 1em;
        display: flex;
        align-items: center;
        flex-wrap: wrap
    }

    #install-area .install-link:hover,#install-area .install-link:focus,#install-area .install-help-link:hover,#install-area .install-help-link:focus {
        transition: box-shadow .2s;
        box-shadow: 0 8px 16px #0003,0 6px 20px #00000030
    }

    .install-link,.install-link:visited,.install-link:active,.install-link:hover,.install-help-link {
        transition: box-shadow .2s;
        display: inline-block;
        background-color: #005200;
        padding: .5em 1em;
        color: #fff;
        text-decoration: none;
        border-radius: .25rem 0 0 .25rem
    }

    .install-help-link,.install-help-link:visited,.install-help-link:active,.install-help-link:hover {
        background-color: #1e971e;
        color: #fff;
        border-radius: 0 .25rem .25rem 0;
        text-decoration: none;
    }

    .installation-instructions-modal-content-firefox,.installation-instructions-modal-content-chrome,.installation-instructions-modal-content-opera,.installation-instructions-modal-content-safari,.installation-instructions-modal-content-edge,.installation-instructions-modal-content-other {
        display: none
    }

    .installation-instructions-modal-firefox .installation-instructions-modal-content-firefox,.installation-instructions-modal-chrome .installation-instructions-modal-content-chrome,.installation-instructions-modal-opera .installation-instructions-modal-content-opera,.installation-instructions-modal-safari .installation-instructions-modal-content-safari,.installation-instructions-modal-edge .installation-instructions-modal-content-edge,.installation-instructions-modal-other .installation-instructions-modal-content-other {
        display: block
    }

    .installation-instructions-modal-content-bypass,.list-option-groups {
        font-size: smaller
    }

    .list-option-group {
        margin-bottom: 1em
    }

    .list-option-group ul {
        margin: .5em 0 0;
        list-style-type: none;
        padding: 1em 0;
        box-shadow: 0 0 5px var(--content-box-shadow-color);
        border: 1px solid var(--content-border-color);
        border-radius: 5px;
        background-color: var(--content-background-color)
    }

    .list-option-group li,
    .list-option-group a {
        box-sizing: border-box;
        max-width: calc(100% + 4px);
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word
    }

    .list-option-group[data-gfplus-collapsed="true"] > ul > :not(.list-current) {
        display: none;
    }

    .list-option-group .gf-list-option-toggle-row {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 2;
        height: 14px;
        margin-top: -14px;
        margin-bottom: .55rem;
    }

    .sidebar button.gf-list-option-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        min-width: 28px;
        height: 28px;
        min-height: 28px;
        margin: 0;
        padding: 0;
        border: 1px solid var(--content-border-color);
        border-radius: 50%;
        background: var(--content-background-color) !important;
        color: var(--overall-text-color) !important;
        box-shadow: none !important;
        cursor: pointer;
        transform: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base), transform var(--transition-base);
    }

    .sidebar button.gf-list-option-toggle:hover,
    .sidebar button.gf-list-option-toggle:focus-visible {
        background: var(--inactive-item-background-color);
        border-color: var(--link-color);
        color: var(--link-color) !important;
        box-shadow: none !important;
        outline: none;
        transform: scale(1.06) !important;
    }

    .sidebar button.gf-list-option-toggle:focus {
        box-shadow: none !important;
        outline: none;
    }

    .sidebar button.gf-list-option-toggle svg {
        width: 15px;
        height: 15px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .list-option-group a {
        padding: .35em 1em;
        display: block
    }

    .list-option-group a:hover,.list-option-group a:focus {
        background: linear-gradient(var(--list-option-hover-background-color-gradient-1),var(--list-option-hover-background-color-gradient-2));
        text-decoration: none;
        box-shadow: inset 0 -1px var(--list-option-hover-box-shadow-top),inset 0 1px var(--list-option-hover-box-shadow-bottom)
    }

    .list-option-group .list-current {
        border-left: 7px solid #800;
        box-shadow: inset 0 1px #0000001a,inset 0 -1px #0000001a;
        margin: 0 0 0 -4px;
        padding: .4em 1em .4em calc(1em - 3px);
        background: linear-gradient(var(--list-option-background-color-gradient-1),var(--list-option-background-color-gradient-2))
    }

    @media screen and (min-width: 440px) and (max-width: 960px) {
        .list-option-group a,.list-option-group .list-current {
            padding-left:1.2vw;
            padding-right: 1.2vw
        }
    }

    .list-option-button {
        display: block;
        background-color: var(--list-option-button-background-color);
        text-align: center;
        text-decoration: none;
        color: var(--list-option-button-color)!important;
        border: 1px solid var(--list-option-button-border-color);
        padding: .5em;
        font-weight: 700
    }

    .list-option-button:hover,.list-option-button:focus {
        background: linear-gradient(var(--list-option-button-background-color-gradient-1),var(--list-option-button-background-color-gradient-2));
        text-decoration: none
    }

    .list-option:not(.list-current) select {
        width: calc(100% - 1.4em + 3px);
        margin: .4em 1em .4em calc(1em - 3px)
    }

    .list-option.list-current select,.log-table {
        width: 100%
    }

    .log-table th {
        text-align: left
    }

    .log-table td,.log-table th {
        padding: 0 5px
    }

    .log-table td .possibly-long-text {
        max-width: 500px;
        overflow-wrap: break-word
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content {
        display: table;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content thead {
        display: table-header-group;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content tbody {
        display: table-row-group;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content tr {
        display: table-row;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content th,
    html[data-gfplus-moderator-actions-page] table.log-table.text-content td {
        display: table-cell;
        vertical-align: top;
    }

    @media screen and (max-width: 820px) {
        html[data-gfplus-moderator-actions-page] .width-constraint {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: .25rem;
        }

        html[data-gfplus-moderator-actions-page] .width-constraint > .log-table {
            min-width: 48rem;
        }
    }

    .modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0009;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100
    }

    .modal__container {
        background-color: #fff;
        padding: 30px;
        max-width: 500px;
        max-height: 100vh;
        border-radius: 4px;
        overflow-y: auto;
        box-sizing: border-box
    }

    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .modal__title {
        margin-top: 0!important;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.25;
        box-sizing: border-box
    }

    .modal__close {
        background: transparent;
        border: 0
    }

    .modal__header .modal__close:before {
        content: "✕"
    }

    .modal__content {
        margin-bottom: 2rem
    }

    .modal__content q {
        font-style: italic
    }

    .modal__btn {
        font-size: .875rem;
        padding: .5rem 1rem;
        background-color: #e6e6e6;
        color: #000c;
        border-radius: .25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0 0 0 .5rem;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform .25s ease-out;
        transition: transform .25s ease-out;
        transition: transform .25s ease-out,-webkit-transform .25s ease-out
    }

    .modal__btn:focus,.modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05)
    }

    .modal__btn-primary {
        background-color: #005200;
        color: #fff
    }

    .modal__footer {
        text-align: right
    }

    @keyframes mmfadeIn {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    @keyframes mmfadeOut {
        0% {
            opacity: 1
        }

        to {
            opacity: 0
        }
    }

    @keyframes mmslideIn {
        0% {
            transform: translateY(15%)
        }

        to {
            transform: translateY(0)
        }
    }

    @keyframes mmslideOut {
        0% {
            transform: translateY(0)
        }

        to {
            transform: translateY(-10%)
        }
    }

    .micromodal-slide {
        display: none
    }

    .micromodal-slide.is-open {
        display: block
    }

    .micromodal-slide[aria-hidden=false] .modal__overlay {
        animation: mmfadeIn .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide[aria-hidden=false] .modal__container {
        animation: mmslideIn .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide[aria-hidden=true] .modal__overlay {
        animation: mmfadeOut .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide[aria-hidden=true] .modal__container {
        animation: mmslideOut .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide .modal__container,.micromodal-slide .modal__overlay {
        will-change: transform
    }

    .notification-widget {
        display: inline-block;
        width: 1em;
        height: 1em;
        text-align: center;
        line-height: 1em;
        padding: 2px;
        background-color: #31708f;
        border-radius: 50%;
        color: #fff;
        text-decoration: none
    }

    .notification-type-consecutive_bad_ratings a {
        white-space: normal
    }

    .post-install {
        margin: 1em 0;
        border-radius: 2px;
        padding: 5px;
        max-width: 600px;
        display: none;
        align-items: center;
        background-color: #c4e3ed;
        border: 1px solid #c4e3ed;
        position: relative
    }

    .post-install-label {
        font-size: xx-small;
        position: absolute;
        top: -2px;
        left: 2px;
        opacity: .5
    }

    .post-install-text {
        text-align: center;
        align-items: center;
        flex: 1
    }

    .post-install-text p {
        margin: 0;
        padding: 0
    }

    .post-install-button {
        text-align: center;
        margin-left: 10px;
        white-space: nowrap
    }

    .preview-results {
        border: 1px solid var(--content-border-color);
        border-left: 1px solid var(--content-border-color) !important;
        border-radius: 0 0 var(--border-radius-small) var(--border-radius-small);
        background: var(--content-background-color) !important;
        overflow: auto;
        box-sizing: border-box;
        margin: 0;
        padding: 16px
    }

    .previewable .preview-results.user-content {
        border-left: 1px solid var(--content-border-color) !important;
        border-radius: 0 0 var(--border-radius-small) var(--border-radius-small);
        background: var(--content-background-color) !important;
    }

    .preview-results>p:first-child {
        margin-top: 0
    }

    .preview-results>p:last-child {
        margin-bottom: 0
    }

    .previewable textarea {
        margin: 0
    }

    .previewable .tabs {
        margin-top: 10px;
        margin-bottom: -4px
    }

    .gf-editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .3rem;
        padding: .42rem;
        margin: 0;
        background: color-mix(in srgb, var(--content-background-color) 88%, #4f46e5 12%);
        border: 1px solid var(--content-border-color);
        border-bottom: 0;
        border-radius: 0 10px 0 0;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .55), 0 8px 18px rgba(15, 23, 42, .04)
    }

    .gf-editor-toolbar + textarea,
    .gf-editor-toolbar + .field_with_errors textarea,
    .gf-editor-toolbar ~ .preview-results {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button {
        all: unset;
        box-sizing: border-box !important;
        inline-size: 34px !important;
        block-size: 34px !important;
        min-inline-size: 34px !important;
        min-block-size: 34px !important;
        position: relative !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 1px solid rgba(79, 70, 229, .16) !important;
        border-radius: 9px !important;
        background: rgba(255, 255, 255, .72) !important;
        color: var(--overall-text-color) !important;
        cursor: pointer !important;
        line-height: 1 !important;
        box-shadow: none !important;
        transform: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base) !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button:hover,
    .gf-editor-toolbar button.gf-editor-toolbar-button:focus-visible {
        background: rgba(79, 70, 229, .12) !important;
        border-color: rgba(79, 70, 229, .34) !important;
        color: var(--link-color) !important;
        transform: none !important;
        box-shadow: 0 6px 14px rgba(79, 70, 229, .1) !important;
        outline: none !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button:active {
        transform: none !important;
        box-shadow: none !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button svg {
        inline-size: 17px;
        block-size: 17px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button--text {
        font-size: .8rem !important;
        font-weight: 800;
        font-family: var(--font-family-base);
    }

    .gf-editor-toolbar-color-tool {
        display: inline-flex;
        align-items: center;
        position: relative;
        margin: 0;
    }

    .gf-editor-toolbar-heading-tool {
        display: inline-flex;
        align-items: center;
        margin: 0;
    }

    .gf-editor-toolbar-heading-tool button.gf-editor-toolbar-button {
        inline-size: 31px !important;
        min-inline-size: 31px !important;
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
        border-inline-end: 0 !important;
    }

    .gf-editor-toolbar select.gf-editor-toolbar-heading-select {
        appearance: none !important;
        -webkit-appearance: none !important;
        box-sizing: border-box !important;
        inline-size: 42px !important;
        block-size: 34px !important;
        min-inline-size: 42px !important;
        min-block-size: 34px !important;
        padding: 0 16px 0 8px !important;
        margin: 0 !important;
        border: 1px solid rgba(79, 70, 229, .16) !important;
        border-start-start-radius: 0 !important;
        border-end-start-radius: 0 !important;
        border-start-end-radius: 9px !important;
        border-end-end-radius: 9px !important;
        background: rgba(255, 255, 255, .56) !important;
        color: var(--overall-text-color) !important;
        font: 800 .75rem/1 var(--font-family-base) !important;
        cursor: pointer !important;
        box-shadow: none !important;
        background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%) !important;
        background-position: calc(100% - 10px) 14px, calc(100% - 6px) 14px !important;
        background-size: 4px 4px, 4px 4px !important;
        background-repeat: no-repeat !important;
    }

    .gf-editor-toolbar select.gf-editor-toolbar-heading-select:hover,
    .gf-editor-toolbar select.gf-editor-toolbar-heading-select:focus-visible {
        background-color: rgba(79, 70, 229, .1) !important;
        border-color: rgba(79, 70, 229, .34) !important;
        color: var(--link-color) !important;
        outline: none !important;
    }

    .gf-editor-toolbar-color-tool button.gf-editor-toolbar-button {
        inline-size: 31px !important;
        min-inline-size: 31px !important;
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
        border-inline-end: 0 !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button {
        all: unset;
        box-sizing: border-box !important;
        inline-size: 20px !important;
        block-size: 34px !important;
        min-inline-size: 20px !important;
        min-block-size: 34px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 1px solid rgba(79, 70, 229, .16) !important;
        border-start-start-radius: 0 !important;
        border-end-start-radius: 0 !important;
        border-start-end-radius: 9px !important;
        border-end-end-radius: 9px !important;
        background: rgba(255, 255, 255, .56) !important;
        cursor: pointer !important;
        box-shadow: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base) !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:hover,
    .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:focus-visible,
    .gf-editor-toolbar-color-tool:hover button.gf-editor-toolbar-color-swatch-button,
    .gf-editor-toolbar-color-tool:focus-within button.gf-editor-toolbar-color-swatch-button {
        background: rgba(79, 70, 229, .1) !important;
        border-color: rgba(79, 70, 229, .34) !important;
        transform: none !important;
        outline: none !important;
        box-shadow: 0 6px 14px rgba(79, 70, 229, .08) !important;
    }

    .gf-editor-toolbar-color-input {
        position: absolute !important;
        inset-block-start: 0 !important;
        inset-inline-end: 0 !important;
        inline-size: 20px !important;
        block-size: 34px !important;
        opacity: 0 !important;
        cursor: pointer !important;
        pointer-events: auto !important;
        z-index: 2 !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
    }

    .gf-editor-toolbar-color-swatch {
        inline-size: 12px;
        block-size: 22px;
        border-radius: 999px;
        border: 1px solid rgba(15, 23, 42, .22);
        box-shadow: 0 0 0 1px rgba(255, 255, 255, .7);
    }

    #report_explanation {
        width: 100%;
        height: 10em
    }

    .reportable {
        position: relative
    }

    .report-link-abs {
        position: absolute;
        top: 0;
        right: 0;
        font-size: smaller;
        margin-right: 16px;
        margin-top: 8px
    }

    .report-list-item:not(:last-child) {
        padding-bottom: 20px;
        border-bottom: 1px solid gray;
        margin-bottom: 20px
    }

    .report-list-item .inline-form {
        margin-right: 5px
    }

    .report-resolution-options {
        display: inline-block;
        vertical-align: top;
        min-width: 30%
    }

    .report-resolution-options+.report-resolution-options {
        margin-left: 1em
    }

    .report-resolution-options input[type=submit] {
        margin-top: .5em
    }

    .report-resolution-options textarea {
        width: 100%
    }

    .report-screenshot-control {
        font-size: smaller;
        padding: .5em 0
    }

    .unauthorized-code-comparison th {
        text-align: left
    }

    .unauthorized-code-comparison th,.unauthorized-code-comparison td {
        padding-right: 1em
    }

    body:lang(he),body:lang(ar),body:lang(ug),body:lang(ckb) {
        direction: rtl
    }

    :not(:lang(he)):not(:lang(ar)):not(:lang(ug)):not(:lang(ckb)) {
        direction: ltr
    }

    body:lang(he) #main-header,body:lang(ar) #main-header,body:lang(ug) #main-header,body:lang(ckb) #main-header {
        direction: ltr
    }

    :lang(ar) #home-step-1 figure,:lang(he) #home-step-1 figure,:lang(ug) #home-step-1 figure,:lang(ckb) #home-step-1 figure {
        float: left
    }

    :lang(ar) #home-step-2 figure,:lang(he) #home-step-2 figure,:lang(ug) #home-step-2 figure,:lang(ckb) #home-step-2 figure {
        float: right
    }

    #script-info {
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        clear: left;
        background-color: var(--content-background-color);
        margin: 1.5em 0 0;
        box-shadow: var(--shadow-soft);
        display: grid;
        gap: 1.1rem;
        overflow-x: hidden;
        overflow-wrap: anywhere;
        word-break: break-word;
        transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base)
    }

    #script-info>* {
        min-width: 0
    }

    #script-info:hover {
        border-color: var(--container-glow-stroke);
        box-shadow: var(--shadow-hover)
    }

    #script-content {
        margin-top: 1.5em
    }

    #script-content>*:first-child {
        margin-top: 0
    }

    #script-info header h2 {
        margin: .2em 0 0;
        font-size: clamp(1.75rem, 2.8vw, 2.4rem);
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: .01em;
        overflow-wrap: anywhere
    }

    #script-description {
        margin: 0
    }

    #version-note,#reported-note,#deleted-note {
        font-style: italic;
        background-color: var(--alert-background-color);
        border: 2px dotted var(--alert-border-color);
        color: var(--alert-text-color);
        padding: .5em
    }

    #script-feedback-suggestion {
        margin: .75em 0
    }

    #script-content h3 {
        margin-top: 30px
    }

    .checkup-list {
        padding-inline-start:1em}

    .checkup-list li {
        list-style-type: "✗";
        padding-inline-start:.5em}

    .checkup-list li::marker {
        color: red
    }

    .checkup-list li.good-check {
        list-style-type: "✓"
    }

    .checkup-list li.good-check::marker {
        color: green
    }

    .script-meta-block {
        max-width: 600px;
        column-count: 2
    }

    .script-meta-block>*:last-child {
        margin-bottom: 1em
    }

    .gf-script-card-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.55rem;
        margin-top: 0.9rem;
    }

    #install-area .gf-script-card-actions,
    #script-links .gf-script-card-actions {
        justify-content: flex-start;
        margin-top: 0.75rem;
    }

    #install-area > .gf-script-star-button {
        margin-left: .45rem;
        min-width: 2.4rem;
        min-height: 2.4rem;
    }

    #install-area > .gf-script-note-button,
    #install-area .gf-script-card-actions > .gf-script-note-button:first-child {
        margin-left: 13px;
    }

    #install-area > .gf-script-star-button svg {
        width: 24px;
        height: 24px;
    }

    .gf-script-install-button,
    .gf-script-detail-button,
    .gf-script-note-button,
    .gf-script-star-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.2rem;
        border-radius: 999px;
        border: 1px solid var(--content-border-color);
        background: linear-gradient(180deg, rgba(79, 70, 229, 0.12), rgba(79, 70, 229, 0.06));
        color: var(--overall-text-color) !important;
        text-decoration: none;
        box-sizing: border-box;
        transition: transform var(--transition-base), background-color var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base), color var(--transition-base);
    }

    .gf-script-install-button,
    .gf-script-install-button:visited,
    .gf-script-install-button:hover,
    .gf-script-install-button:focus-visible,
    .gf-script-detail-button,
    .gf-script-detail-button:visited,
    .gf-script-detail-button:hover,
    .gf-script-detail-button:focus-visible {
        text-decoration: none !important;
    }

    .gf-script-install-button {
        gap: 0.45rem;
        padding: 0 0.95rem;
        font-size: 0.92rem;
        font-weight: 700;
        letter-spacing: 0.01em;
    }

    .gf-script-detail-button {
        width: 2.2rem;
        min-width: 2.2rem;
        padding: 0;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .gf-script-note-button {
        width: 2.2rem;
        min-width: 2.2rem;
        padding: 0;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .gf-script-star-button {
        width: auto;
        height: auto;
        padding: 0;
        margin-left: 0;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        border: none;
        background: transparent;
        color: var(--overall-text-color) !important;
        box-shadow: none;
        line-height: 0;
        transform: none;
        transition: color var(--transition-base);
    }

    .gf-script-install-button svg,
    .gf-script-detail-button svg,
    .gf-script-note-button svg,
    .gf-script-star-button svg {
        width: 19px;
        height: 19px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex: none;
        transition: fill var(--transition-base), stroke var(--transition-base), stroke-width var(--transition-base), transform var(--transition-base);
    }

    .gf-script-install-button:hover,
    .gf-script-install-button:focus-visible,
    .gf-script-detail-button:hover,
    .gf-script-detail-button:focus-visible,
    .gf-script-detail-button[data-expanded="true"],
    .gf-script-note-button:hover,
    .gf-script-note-button:focus-visible,
    .gf-script-note-button[data-expanded="true"],
    .gf-script-note-button[data-has-note="true"] {
        border-color: var(--link-color);
        color: var(--link-color) !important;
        box-shadow: none;
        outline: none;
    }

    .gf-script-note-button[data-has-note="true"] {
        background: transparent;
        border-color: color-mix(in srgb, var(--content-border-color) 72%, var(--link-color) 28%);
    }

    .gf-script-detail-button[data-expanded="true"] svg {
        transform: rotate(45deg);
    }

    .gf-script-note-panel {
        display: none;
        margin-top: .65rem;
        border: 1px solid color-mix(in srgb, var(--content-border-color) 88%, var(--link-color) 12%);
        border-radius: var(--border-radius-small);
        background: color-mix(in srgb, var(--content-background-color) 98%, var(--overall-text-color) 2%);
        overflow: hidden;
    }

    .gf-script-note-panel[data-open="true"],
    .gf-script-note-panel[data-has-note="true"] {
        display: block;
    }

    .gf-script-note-preview {
        display: none;
        padding: .65rem .8rem;
        color: color-mix(in srgb, var(--overall-text-color) 76%, transparent);
        font-size: .88rem;
        line-height: 1.45;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    }

    .gf-script-note-panel[data-has-note="true"][data-open="false"] .gf-script-note-preview {
        display: block;
        margin: .55rem .15rem 0;
        border-left: 3px solid color-mix(in srgb, var(--link-color) 42%, var(--content-border-color) 58%);
        background: color-mix(in srgb, var(--content-background-color) 96%, var(--overall-text-color) 4%);
        border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
    }

    .gf-script-note-panel[data-has-note="true"][data-open="false"] {
        border: 0;
        background: transparent;
    }

    .gf-script-note-editor {
        display: none;
        padding: .65rem;
    }

    .gf-script-note-panel[data-open="true"] .gf-script-note-editor {
        display: block;
    }

    .gf-script-note-textarea {
        box-sizing: border-box;
        width: 100%;
        min-height: 4.25rem;
        resize: vertical;
        border: 1px solid color-mix(in srgb, var(--content-border-color) 88%, transparent);
        border-radius: var(--border-radius-small);
        background: color-mix(in srgb, var(--content-background-color) 97%, var(--overall-text-color) 3%);
        color: var(--overall-text-color);
        padding: .7rem .8rem;
        font: 500 .9rem/1.45 var(--font-family-base);
        outline: none;
        box-shadow: none;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
    }

    .gf-script-note-textarea:focus {
        border-color: color-mix(in srgb, var(--link-color) 46%, var(--content-border-color) 54%);
        box-shadow: none;
    }

    .gf-script-note-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .75rem;
        margin-top: .5rem;
    }

    .gf-script-note-footer-actions {
        display: inline-flex;
        align-items: center;
        gap: .45rem;
    }

    .gf-script-note-status {
        color: var(--texty-link-visited-color);
        font-size: .78rem;
    }

    .gf-script-note-status:empty {
        display: none;
    }

    .gf-script-note-done {
        border: 1px solid var(--content-border-color);
        border-radius: 999px;
        background: color-mix(in srgb, var(--link-color) 10%, var(--content-background-color) 90%);
        color: var(--overall-text-color);
        padding: .3rem .65rem;
        font: 700 .78rem/1 var(--font-family-base);
        cursor: pointer;
    }

    .gf-script-note-done:hover,
    .gf-script-note-done:focus-visible {
        border-color: var(--link-color);
        color: var(--link-color);
        outline: none;
    }

    .gf-script-note-delete {
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: var(--texty-link-visited-color);
        padding: .3rem .45rem;
        font: 700 .78rem/1 var(--font-family-base);
        cursor: pointer;
    }

    .gf-script-note-delete:hover,
    .gf-script-note-delete:focus-visible {
        color: #dc2626;
        background: color-mix(in srgb, #dc2626 9%, transparent);
        outline: none;
    }


    .gf-script-star-button:hover,
    .gf-script-star-button:focus,
    .gf-script-star-button:focus-visible,
    .gf-script-star-button[data-active="true"],
    .gf-script-star-button[data-active="true"]:hover,
    .gf-script-star-button[data-active="true"]:focus,
    .gf-script-star-button[data-active="true"]:focus-visible {
        background: transparent !important;
        border-color: transparent !important;
        box-shadow: none !important;
        outline: none !important;
        transform: none !important;
    }

    .gf-script-star-button:hover,
    .gf-script-star-button:focus,
    .gf-script-star-button:focus-visible {
        color: var(--overall-text-color) !important;
    }

    .gf-script-star-button:hover svg,
    .gf-script-star-button:focus-visible svg {
        fill: none;
        stroke: currentColor;
        stroke-width: 2.55;
        transform: scale(1.06);
    }

    .gf-script-star-button[data-active="true"] {
        color: #f4b400 !important;
    }

    .gf-script-star-button[data-active="true"] svg {
        stroke: #f4b400;
        fill: rgba(244, 180, 0, 0.18);
        stroke-width: 2.1;
        width: 21px;
        height: 21px;
    }

    .gf-script-star-button[data-active="true"]:hover svg,
    .gf-script-star-button[data-active="true"]:focus-visible svg {
        stroke-width: 2.65;
        transform: scale(1.06);
    }

    .gf-script-star-button[data-active="true"]:hover,
    .gf-script-star-button[data-active="true"]:focus,
    .gf-script-star-button[data-active="true"]:focus-visible {
        color: #f4b400 !important;
    }

    .inline-script-stats {
        align-items: center;
    }

    .inline-script-stats dd span relative-time {
        white-space: nowrap !important;
        display: inline-block !important;
        line-height: 1.3;
        vertical-align: middle;
    }


    .inline-script-stats,.inline-script-stats dt,.inline-script-stats dd {
        vertical-align: top;
        padding: 0;
        font-size: small;
    }

    .inline-script-stats dt,.inline-script-stats dd {
        box-sizing: border-box;
        overflow-wrap: break-word;
        margin: 1px 0
    }

    .inline-script-stats dt {
        font-weight: 700;
        text-align: end;
        padding-inline-end:1em}

    html[data-gfplus-safari] .script-meta-block {
        column-count: initial;
    }

    html[data-gfplus-safari] .inline-script-stats {
        display: grid;
        grid-template-columns: max-content minmax(0, 1fr) max-content minmax(0, 1fr);
        column-gap: 1.4rem;
        row-gap: .32rem;
        margin: 0;
    }

    html[data-gfplus-safari] .inline-script-stats dt,
    html[data-gfplus-safari] .inline-script-stats dd {
        margin: 0;
        break-inside: avoid;
        -webkit-column-break-inside: avoid;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(-n+3) {
        grid-column: 1;
    }

    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(-n+3) {
        grid-column: 2;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(n+4) {
        grid-column: 3;
    }

    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(n+4) {
        grid-column: 4;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(1),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(1),
    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(4),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(4) {
        grid-row: 1;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(2),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(2),
    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(5),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(5) {
        grid-row: 2;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(3),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(3),
    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(6),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(6) {
        grid-row: 3;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(-n+5) {
        grid-column: 1;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(-n+5) {
        grid-column: 2;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(n+6) {
        grid-column: 3;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(n+6) {
        grid-column: 4;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(1),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(1),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(6),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(6) {
        grid-row: 1;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(2),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(2),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(7),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(7) {
        grid-row: 2;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(3),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(3),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(8),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(8) {
        grid-row: 3;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(4),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(4),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(9),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(9) {
        grid-row: 4;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(5),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(5),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(10),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(10) {
        grid-row: 5;
    }

    dd.script-list-ratings {
        margin-top: 0;
        margin-bottom: 0;
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
        overflow: visible;
        overflow-wrap: normal;
        word-break: normal;
        white-space: nowrap;
    }

    dd.script-list-ratings > span {
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px !important;
        overflow: visible;
        flex-wrap: nowrap !important;
        overflow-wrap: normal;
        word-break: normal;
        white-space: nowrap;
    }

    dd.script-list-ratings span.good-rating-count,
    dd.script-list-ratings span.ok-rating-count,
    dd.script-list-ratings span.bad-rating-count {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex: 0 0 auto !important;
        min-width: 2.8em !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: .1em .5em !important;
        line-height: 1.1 !important;
        overflow-wrap: normal !important;
        word-break: normal !important;
        white-space: nowrap !important;
    }

    dd.script-list-ratings span.good-rating-count { color: #4CAF50 !important; }
    dd.script-list-ratings span.ok-rating-count { color: #FFC107 !important; }
    dd.script-list-ratings span.bad-rating-count { color: #F44336 !important; }

    @media screen and (max-width: 600px) {
        .script-meta-block {
            max-width: 100%;
            column-count: initial;
        }

        .inline-script-stats,
        html[data-gfplus-safari] .inline-script-stats,
        html[data-gfplus-safari] #script-stats.inline-script-stats {
            display: grid;
            grid-template-columns: minmax(6.8rem, 42%) minmax(0, 1fr);
            column-gap: .75rem;
            row-gap: .34rem;
            align-items: start;
            margin: 0;
        }

        .inline-script-stats dt,
        .inline-script-stats dd,
        html[data-gfplus-safari] .inline-script-stats dt,
        html[data-gfplus-safari] .inline-script-stats dd,
        html[data-gfplus-safari] #script-stats.inline-script-stats dt,
        html[data-gfplus-safari] #script-stats.inline-script-stats dd {
            grid-column: auto !important;
            grid-row: auto !important;
            min-width: 0;
            margin: 0;
            break-inside: auto;
            -webkit-column-break-inside: auto;
        }

        .inline-script-stats dt {
            grid-column: 1 !important;
            text-align: start;
            padding-inline-end: .35rem;
        }

        .inline-script-stats dd {
            grid-column: 2 !important;
            overflow-wrap: anywhere;
        }

        dd.script-list-ratings {
            justify-content: flex-start !important;
            white-space: normal !important;
        }

        dd.script-list-ratings > span {
            flex-wrap: wrap !important;
            gap: 3px !important;
            white-space: normal !important;
        }

        dd.script-list-ratings span.good-rating-count,
        dd.script-list-ratings span.ok-rating-count,
        dd.script-list-ratings span.bad-rating-count {
            min-width: 2.65em !important;
            padding: .08em .38em !important;
        }
    }

    .script-antifeatures span[title] {
        text-decoration: underline;
        text-decoration-style: dotted
    }

    .script-show-compatibility {
        vertical-align: bottom
    }

    .browser-compatible,.browser-incompatible,.browser-incompatible-marker {
        width: 16px;
        height: 16px
    }

    .browser-incompatible {
        opacity: .5
    }

    .browser-incompatible-marker {
        position: absolute
    }

    .script-lock-appeal-actions form {
        display: inline-block;
        margin-top: 1em
    }

    .change-script-set section {
        border-bottom: 1px solid #DDDDDD;
        padding-bottom: 1em
    }

    .change-script-set textarea {
        height: 5em
    }

    .change-script-set .selection-box {
        width: 100%;
        display: inline-block;
        vertical-align: top;
        margin-bottom: 1em
    }

    @media screen and (max-width: 720px) {
        .change-script-set .selection-box {
            width:100%
        }
    }

    .change-script-set select[multiple] {
        width: 100%
    }

    .change-script-set {
        display: grid;
        gap: 1.25rem;
        padding: 1.25rem;
        background: linear-gradient(180deg, rgba(79, 70, 229, .05), rgba(255, 255, 255, .96));
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-soft);
    }

    .change-script-set section {
        margin: 0;
    }

    .change-script-set button {
        margin-left: 0;
    }

    .change-script-set #script-set-scripts {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
        gap: 1rem;
        align-items: start;
    }

    .change-script-set .selection-box,
    .change-script-set #script-set-scripts > .form-control:not(.selection-box) {
        margin-bottom: 0;
        padding: 1rem;
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .7), 0 10px 24px rgba(15, 23, 42, .06);
    }

    .change-script-set.gf-set-editor-enhanced select[name="remove-scripts-included[]"],
    .change-script-set.gf-set-editor-enhanced button[name="remove-selected-scripts"] {
        display: none !important;
    }

    .gf-set-script-list-panel {
        display: grid;
        gap: .85rem;
    }

    .gf-set-script-list-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .75rem;
    }

    .gf-set-script-list-title {
        font-size: 1rem;
        font-weight: 700;
        color: var(--overall-text-color);
    }

    .gf-set-script-list-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        padding: .25rem .65rem;
        border-radius: 999px;
        background: rgba(79, 70, 229, .12);
        color: var(--link-color);
        font-size: .82rem;
        font-weight: 700;
    }

    .gf-set-script-list {
        display: grid;
        gap: .6rem;
    }

    .gf-set-script-row {
        display: flex;
        align-items: center;
        gap: .75rem;
        padding: .8rem .9rem;
        background: linear-gradient(180deg, rgba(79, 70, 229, .05), rgba(79, 70, 229, .02));
        border: 1px solid rgba(79, 70, 229, .12);
        border-radius: var(--border-radius-small);
        transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
    }

    .gf-set-script-row:hover {
        border-color: rgba(79, 70, 229, .28);
        box-shadow: 0 10px 20px rgba(79, 70, 229, .08);
        transform: translateY(-1px);
    }

    .gf-set-script-name {
        flex: 1;
        min-width: 0;
        color: var(--overall-text-color);
        font-weight: 600;
        overflow-wrap: anywhere;
    }

    .gf-set-script-remove {
        display: inline-grid;
        place-items: center;
        width: 1.35rem;
        height: 1.35rem;
        min-width: 1.35rem;
        min-height: 1.35rem;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #b91c1c !important;
        box-shadow: none;
        cursor: pointer;
        transform: none !important;
    }

    .gf-set-script-remove:hover,
    .gf-set-script-remove:focus-visible {
        background: transparent;
        color: #991b1b !important;
        box-shadow: none;
        transform: none !important;
    }

    .gf-set-script-remove svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
        stroke-width: 2.25;
        fill: none;
    }

    .gf-set-script-empty {
        padding: .95rem 1rem;
        background: rgba(148, 163, 184, .08);
        border: 1px dashed rgba(100, 116, 139, .28);
        border-radius: var(--border-radius-small);
        color: var(--texty-link-visited-color);
    }

    .gf-set-editor-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: .75rem;
        padding-top: .25rem;
    }

    .gf-set-editor-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: .85rem;
    }

    @media screen and (max-width: 820px) {
        .change-script-set #script-set-scripts {
            grid-template-columns: 1fr;
        }
    }

    .add-script-set label {
        font-weight: 700;
        display: block
    }

    .add-automatic-script-set-4>* {
        vertical-align: top
    }

    .history_versions {
        display: table;
        padding: 0
    }

    .history_versions>li {
        display: table-row
    }

    .diff-controls,.version-number,.version-date,.version-changelog {
        display: table-cell;
        padding-bottom: .5em
    }

    .diff-controls,.version-number,.version-date {
        white-space: nowrap;
        padding-right: 1em
    }

    .version-changelog {
        overflow-wrap: anywhere
    }

    .version-changelog img {
        max-width: 100%
    }

    .version-changelog p:first-child {
        margin-top: 0
    }

    .version-changelog p:last-child {
        margin-bottom: 0
    }

    .remove-attachment {
        margin-top: 20px
    }

    .remove-attachment input {
        margin-left: 0
    }

    .sidebarred {
        display: flex
    }

    .sidebarred-main-content {
        flex: 1
    }

    .sidebar {
        width: 200px;
        padding-top: 1.75em;
        padding-bottom: .75em;
        margin-inline-start:1.5em;flex: none
    }

    @media screen and (min-width: 801px) {
        .sidebar {
            position: sticky;
            top: var(--gfplus-sidebar-sticky-top, 1rem);
            align-self: flex-start;
            box-sizing: border-box;
            max-height: none;
            overflow: visible;
            scrollbar-gutter: auto;
            will-change: top;
        }
    }

    .close-sidebar,.open-sidebar {
        cursor: pointer
    }

    .close-sidebar {
        display: none
    }

    .open-sidebar {
        visibility: hidden;
        float: right;
        background-color: var(--sidebar-background);
        padding: 2px 1.2vw;
        margin-left: 1.2vw;
        margin-right: -1.2vw;
        border-radius: 6px 0 0 6px;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        border-color: gray
    }

    .sidebar-title {
        flex: 1
    }

    .gf-sidebar-scroll-controls {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: .5rem;
        margin-top: .9rem;
    }

    .sidebar button.gf-sidebar-scroll-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 2.25rem;
        margin: 0;
        padding: .4rem;
        border: 1px solid var(--content-border-color);
        border-radius: 7px;
        background: var(--content-background-color);
        color: var(--overall-text-color) !important;
        box-shadow: none !important;
        cursor: pointer;
        transform: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base);
    }

    .sidebar button.gf-sidebar-scroll-button:hover,
    .sidebar button.gf-sidebar-scroll-button:focus-visible {
        background: var(--inactive-item-background-color);
        border-color: var(--link-color);
        color: var(--link-color) !important;
        box-shadow: none !important;
        outline: none;
        transform: none !important;
    }

    .sidebar button.gf-sidebar-scroll-button:focus {
        box-shadow: none !important;
        outline: none;
    }

    .sidebar button.gf-sidebar-scroll-button:active {
        box-shadow: none !important;
        transform: translateY(1px) !important;
    }

    .sidebar button.gf-sidebar-scroll-button svg {
        width: 18px;
        height: 18px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    @media screen and (max-width: 800px) {
        .sidebarred {
            display:block;
            position: relative
        }

        .sidebar {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 40;
            background: var(--sidebar-background);
            padding-top: 0;
            padding-left: 1em;
            padding-right: 1em;
            max-height: min(calc(100vh - 1.5rem), calc(100dvh - 1.5rem));
            border-width: 1px 0 1px 1px;
            border-style: solid;
            border-color: gray;
            border-radius: 6px 0 0 6px;
            overflow-y: auto;
            overscroll-behavior: contain;
            box-shadow: var(--shadow-soft)
        }

        .sidebar.collapsed {
            display: none
        }

        .close-sidebar {
            display: flex;
            margin-bottom: 1.5em;
            background-color: var(--close-sidebar-background);
            border-bottom: 1px solid var(--close-sidebar-border-bottom);
            margin-left: -16px;
            margin-right: -16px;
            padding: .25em 1.2vw .25em 16px
        }

        .open-sidebar.sidebar-collapsed {
            visibility: visible;
            margin-right: 0;
            position: relative;
            right: -0.35rem;
            z-index: 39;
            box-shadow: var(--shadow-soft)
        }

        html.gfplus-mobile-sidebar-stuck .sidebar:not(.collapsed) {
            position: fixed;
            top: .75rem;
            right: 0;
        }

        html.gfplus-mobile-sidebar-stuck .open-sidebar.sidebar-collapsed {
            position: fixed;
            top: .75rem;
            right: 0;
        }
    }

    @media screen and (min-width: 800px) {
        .sidebarred-main-content {
            max-width:calc(100% - 224px)
        }
    }

    @media screen and (max-width: 400px) {
        .open-sidebar {
            margin-right:0
        }

        .close-sidebar {
            padding-right: 2.4vw;
            margin-right: -1em
        }
    }

    .tabs {
        list-style: none;
        padding: 0 1em;
        margin: 0 -1em;
        display: flex;
        position: relative;
        top: -3.5px;
        flex-wrap: wrap
    }

    .tabs>* {
        align-items: stretch
    }

    .tabs>*>* {
        padding: .25em .5em .5em;
        display: block
    }

    .tabs a {
        text-decoration: none;
        cursor: pointer
    }

    .tabs .current,.tabs>*:not(.current) a:hover,.tabs>*:not(.current) a:focus {
        background: var(--tab-active-background-color);
        box-shadow: inset 1px 0 var(--tab-active-box-shadow-color),inset -1px 0 var(--tab-active-box-shadow-color),inset 0 -1px var(--tab-active-box-shadow-color)
    }

    .tabs .current {
        border-top: 7px solid var(--tab-active-top-border-color)
    }

    .tabs>*:not(.current) a {
        margin-top: 3.5px;
        padding-top: calc(.25em + 3.5px)
    }

    .user-content {
        background: linear-gradient(to right,var(--user-content-background-color-gradient-1),var(--user-content-background-color-gradient-2) 1em);
        border-left: 2px solid var(--user-content-border-left-color);
        padding: .5em 1em;
        overflow-x: auto
    }

    .user-content>p:first-child {
        margin-top: 0
    }

    .user-content>p:last-child {
        margin-bottom: 0
    }

    .user-content img {
        max-width: 100%
    }

    .user-content img.gfplus-standalone-lightbox-trigger,
    #script-content img.gfplus-standalone-lightbox-trigger {
        cursor: zoom-in
    }

    .user-screenshots * {
        vertical-align: middle
    }

    .user-screenshots a {
        text-decoration: none
    }

    .comment-screenshot-control {
        margin: 10px 0
    }

    .remove-images {
        display: flex;
        margin-top: 5px
    }

    .remove-image {
        border: 2px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column
    }

    .remove-image:not(:first-child) {
        margin-left: 5px
    }

    .remove-image img {
        display: block
    }

    .remove-image-selecter,.comment .user-content .user-screenshots {
        margin-top: 10px
    }

    #additional-info .user-screenshots {
        margin-top: 1em
    }

    .user-content blockquote {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 2px solid #CCC
    }

    .user-content>ol:first-child,.user-content>ul:first-child {
        margin-top: 0
    }

    .user-content>ol:last-child,.user-content>ul:last-child {
        margin-bottom: 0
    }

    @keyframes lum-fade {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    @keyframes lum-fadeZoom {
        0% {
            transform: scale(.5);
            opacity: 0
        }

        to {
            transform: scale(1);
            opacity: 1
        }
    }

    @keyframes lum-loader-rotate {
        0% {
            transform: translate(-50%,-50%) rotate(0)
        }

        50% {
            transform: translate(-50%,-50%) rotate(-180deg)
        }

        to {
            transform: translate(-50%,-50%) rotate(-360deg)
        }
    }

    @keyframes lum-loader-before {
        0% {
            transform: scale(1)
        }

        10% {
            transform: scale(1.2) translate(6px)
        }

        25% {
            transform: scale(1.3) translate(8px)
        }

        40% {
            transform: scale(1.2) translate(6px)
        }

        50% {
            transform: scale(1)
        }

        60% {
            transform: scale(.8) translate(6px)
        }

        75% {
            transform: scale(.7) translate(8px)
        }

        90% {
            transform: scale(.8) translate(6px)
        }

        to {
            transform: scale(1)
        }
    }

    @keyframes lum-loader-after {
        0% {
            transform: scale(1)
        }

        10% {
            transform: scale(1.2) translate(-6px)
        }

        25% {
            transform: scale(1.3) translate(-8px)
        }

        40% {
            transform: scale(1.2) translate(-6px)
        }

        50% {
            transform: scale(1)
        }

        60% {
            transform: scale(.8) translate(-6px)
        }

        75% {
            transform: scale(.7) translate(-8px)
        }

        90% {
            transform: scale(.8) translate(-6px)
        }

        to {
            transform: scale(1)
        }
    }

    .lum-lightbox {
        background: #0009
    }

    .lum-lightbox.lum-open {
        position: fixed !important;
        inset: 0 !important;
        z-index: 2147483000;
        display: block;
        overflow: hidden !important
    }

    html.gfplus-lightbox-open,
    html.gfplus-lightbox-open body {
        overflow: hidden !important;
        overscroll-behavior: none;
        touch-action: none
    }

    .lum-lightbox-inner {
        position: absolute;
        top: 2.5%;
        right: 2.5%;
        bottom: 2.5%;
        left: 2.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden
    }

    .lum-lightbox-inner img {
        position: relative
    }

    .lum-lightbox-image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        overflow: hidden
    }

    .lum-lightbox-position-helper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        max-height: 100%;
        margin: auto
    }

    .lum-lightbox-image-wrapper .lum-img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: calc(100vh - 7rem);
        max-height: calc(100dvh - 7rem);
        object-fit: contain
    }

    .lum-lightbox-inner .lum-lightbox-caption {
        display: block;
        flex: 0 0 auto;
        width: min(700px, 100%);
        margin: .75rem auto 0;
        color: #fff;
        max-width: 700px;
        text-align: center;
        line-height: 1.35
    }

    .lum-loading .lum-lightbox-loader {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 66px;
        height: 20px;
        animation: lum-loader-rotate 1.8s infinite linear
    }

    .lum-lightbox-loader:before,.lum-lightbox-loader:after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        border-radius: 20px;
        background: #ffffffe6
    }

    .lum-lightbox-loader:before {
        left: 0;
        animation: lum-loader-before 1.8s infinite linear
    }

    .lum-lightbox-loader:after {
        right: 0;
        animation: lum-loader-after 1.8s infinite linear;
        animation-delay: -.9s
    }

    .lum-lightbox.lum-opening {
        animation: lum-fade .18s ease-out
    }

    .lum-lightbox.lum-opening .lum-lightbox-inner {
        animation: lum-fadeZoom .18s ease-out
    }

    .lum-lightbox.lum-closing {
        animation: lum-fade .3s ease-in;
        animation-direction: reverse
    }

    .lum-lightbox.lum-closing .lum-lightbox-inner {
        animation: lum-fadeZoom .3s ease-in;
        animation-direction: reverse
    }

    .lum-img {
        transition: opacity .12s ease-out
    }

    .lum-lightbox img.gfplus-lightbox-zoomable {
        cursor: zoom-in;
        touch-action: none;
        transform-origin: center center;
        transition: opacity .12s ease-out, transform .12s ease-out;
        will-change: transform
    }

    .lum-lightbox img.gfplus-lightbox-zoomed {
        cursor: grab
    }

    .lum-lightbox img.gfplus-lightbox-dragging {
        cursor: grabbing;
        transition: opacity .12s ease-out
    }

    .lum-loading .lum-img {
        opacity: 0
    }

    .lum-gallery-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
        text-indent: -9999px;
        font-size: 0;
        line-height: 0;
        white-space: nowrap;
        background: rgba(15, 23, 42, .46) !important;
        color: #fff !important;
        border: 1px solid rgba(255, 255, 255, .18) !important;
        border-radius: 999px;
        margin: 0;
        padding: 0;
        outline: 0;
        position: absolute;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%) !important;
        height: 48px;
        max-height: none;
        width: 48px;
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(0, 0, 0, .22) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: background-color .16s ease, border-color .16s ease, box-shadow .16s ease, transform .16s ease
    }

    .lum-gallery-button:hover,
    .lum-gallery-button:focus-visible {
        background: rgba(15, 23, 42, .66) !important;
        border-color: rgba(255, 255, 255, .32) !important;
        box-shadow: 0 10px 24px rgba(0, 0, 0, .28) !important;
        transform: translateY(-50%) !important;
        outline: none
    }

    .lum-gallery-button:focus {
        outline: none
    }

    .lum-gallery-button:active {
        background: rgba(15, 23, 42, .74) !important;
        transform: translateY(-50%) !important
    }

    .lum-close-button {
        position: absolute;
        z-index: 3;
        right: 12px;
        top: 12px;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, .2);
        background: rgba(15, 23, 42, .52);
        box-shadow: 0 8px 20px rgba(0, 0, 0, .22);
        opacity: 1;
        cursor: pointer;
        transition: background-color .16s ease, border-color .16s ease, box-shadow .16s ease
    }

    .lum-close-button:hover {
        background: rgba(15, 23, 42, .72);
        border-color: rgba(255, 255, 255, .34);
        box-shadow: 0 10px 24px rgba(0, 0, 0, .28)
    }

    .lum-close-button,
    .lum-close-button:hover,
    .lum-close-button:focus-visible,
    .lum-close-button:active {
        transform: none !important
    }

    .lum-close-button:before,.lum-close-button:after {
        position: absolute;
        left: 50%;
        top: 50%;
        content: " ";
        height: 20px;
        width: 2px;
        border-radius: 999px;
        background-color: rgba(255, 255, 255, .95)
    }

    .lum-close-button:before {
        transform: translate(-50%,-50%) rotate(45deg)
    }

    .lum-close-button:after {
        transform: translate(-50%,-50%) rotate(-45deg)
    }

    .lum-previous-button {
        left: clamp(10px,3vw,28px)
    }

    .lum-next-button {
        right: clamp(10px,3vw,28px)
    }

    .lum-gallery-button:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 13px;
        height: 13px;
        border: 0;
        border-top: 2.5px solid currentColor;
        box-shadow: none
    }

    .lum-previous-button:after {
        transform: translate(-35%,-50%) rotate(-45deg);
        border-left: 2.5px solid currentColor;
        border-radius: 2px 0 0
    }

    .lum-next-button:after {
        transform: translate(-65%,-50%) rotate(45deg);
        border-right: 2.5px solid currentColor;
        border-radius: 0 2px 0 0
    }

    @media (max-width: 460px) {
        .lum-lightbox,
        .lum-lightbox-inner {
            overflow: hidden !important
        }

        .lum-lightbox-inner {
            top: .75rem;
            right: .75rem;
            bottom: .75rem;
            left: .75rem
        }

        .lum-gallery-button {
            width: 40px;
            height: 40px;
            top: auto;
            bottom: 4.25rem;
            transform: none !important;
            background: rgba(15, 23, 42, .58) !important;
            box-shadow: 0 8px 18px rgba(0, 0, 0, .24) !important
        }

        .lum-gallery-button:hover,
        .lum-gallery-button:focus-visible {
            transform: none !important
        }

        .lum-gallery-button:active {
            transform: none !important
        }

        .lum-previous-button {
            left: 12px
        }

        .lum-next-button {
            right: 12px
        }

        .lum-gallery-button:after {
            width: 11px;
            height: 11px;
            border-top-width: 2.25px
        }

        .lum-previous-button:after {
            border-left-width: 2.25px
        }

        .lum-next-button:after {
            border-right-width: 2.25px
        }

        .lum-lightbox-image-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100% !important;
            max-width: 100% !important;
            height: calc(100dvh - 1.5rem) !important;
            max-height: calc(100dvh - 1.5rem) !important;
            overflow: hidden !important
        }

        .lum-lightbox-caption {
            width: 100%;
            position: static;
            bottom: auto;
            margin-top: .55rem
        }

        .lum-lightbox-position-helper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            max-height: 100%;
            margin: auto
        }

        .lum-lightbox-inner img {
            width: auto !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: calc(100dvh - 5.5rem) !important;
            object-fit: contain
        }
    }
    :root {
        color-scheme: light;
        --font-family-base: "Inter", "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-family-monospace: "JetBrains Mono", "Fira Code", "Source Code Pro", monospace;
        --overall-background-color: #f5f7fb;
        --overall-text-color: #111827;
        --overall-text-color-icon: #e5e7eb;
        --link-color: #4f46e5;
        --link-color-icon: #e5bcbc;
        --link-visited-color: #4338ca;
        --texty-link-visited-color: #4b5563;
        --content-background-color: #ffffff;
        --content-border-color: #e2e8f0;
        --content-box-shadow-color: rgba(15, 23, 42, 0.08);
        --content-separator-color: #edf1f7;
        --tab-active-background-color: rgba(79, 70, 229, 0.12);
        --tab-active-box-shadow-color: rgba(79, 70, 229, 0.18);
        --tab-active-top-border-color: #4f46e5;
        --inactive-item-background-color: #f3f4f6;
        --code-background-color: #f4f2ff;
        --user-content-background-color-gradient-1: #f8fafc;
        --user-content-background-color-gradient-2: #ffffff;
        --user-content-border-left-color: #e2e8f0;
        --list-option-background-color-gradient-1: #ffffff;
        --list-option-background-color-gradient-2: #f5f7fb;
        --list-option-hover-background-color-gradient-1: #f4f7ff;
        --list-option-hover-background-color-gradient-2: #e1e7ff;
        --list-option-hover-box-shadow-top: rgba(15, 23, 42, 0.06);
        --list-option-hover-box-shadow-bottom: rgba(79, 70, 229, 0.1);
        --notice-background-color: #e0f2fe;
        --notice-border-color: #0284c7;
        --notice-text-color: #0f172a;
        --alert-background-color: #fef3c7;
        --alert-border-color: #f59e0b;
        --alert-text-color: #78350f;
        --chart-background-color: #61a5fa;
        --chart-border-color: #61a5fa;
        --install-stats-bar-color: #61a5fa;
        --install-stats-bar-hover-color: #61a5fa;
        --install-stats-grid-color: #dbe4f0;
        --install-stats-text-color: #334155;
        --highlight-background-color: #fef9c3;
        --rating-icon-good-border-color: #16a34a;
        --rating-icon-good-background-color: rgba(22, 163, 74, 0.12);
        --rating-icon-good-color: #166534;
        --rating-icon-ok-border-color: #ca8a04;
        --rating-icon-ok-background-color: rgba(202, 138, 4, 0.14);
        --rating-icon-ok-color: #92400e;
        --rating-icon-bad-border-color: #dc2626;
        --rating-icon-bad-background-color: rgba(220, 38, 38, 0.12);
        --rating-icon-bad-color: #7f1d1d;
        --expander-color: #4f46e5;
        --expander-background-color: rgba(79, 70, 229, 0.08);
        --pagination-background-color: rgba(79, 70, 229, 0.08);
        --pagination-hover-background-color: rgba(79, 70, 229, 0.18);
        --diff-del-background: #fee2e2;
        --diff-del-color: #b91c1c;
        --diff-ins-background: #dcfce7;
        --diff-ins-color: #047857;
        --diff-del-strong-background: #fecaca;
        --diff-ins-strong-background: #bbf7d0;
        --diff-block-info: #64748b;
        --list-option-button-background-color: #ffffff;
        --list-option-button-color: #0f172a;
        --list-option-button-border-color: #d0d5dd;
        --list-option-button-background-color-gradient-1: #ffffff;
        --list-option-button-background-color-gradient-2: #f5f7fb;
        --code-container-border-color: #e2e8f0;
        --prettyprint-background-color: #ffffff;
        --prettyprint-color: #111827;
        --sidebar-background: #ffffff;
        --close-sidebar-background: #f1f5f9;
        --close-sidebar-border-bottom: #cbd5f5;
        --border-radius-small: 6px;
        --border-radius-medium: 12px;
        --border-radius-large: 18px;
        --shadow-soft: 0 6px 20px rgba(15, 23, 42, 0.07);
        --shadow-hover: 0 8px 24px rgba(15, 23, 42, 0.1);
        --focus-ring-color: rgba(79, 70, 229, 0.45);
        --transition-base: 160ms ease;
    }

    .code-container pre.prettyprint,
    .code-container pre.prettyprint .pln,
    .code-container pre.prettyprint .com,
    .code-container pre.prettyprint .kwd,
    .code-container pre.prettyprint .str,
    .code-container pre.prettyprint .typ {
        font-size: 0.85rem !important;
        line-height: 1.4 !important;
        font-family: "Fira Code", "Consolas", "Menlo", monospace !important;
    }

    /* Highlight.js theme */
    pre.gf-hljs {
        min-width: calc(100% - 6px);
        background-color: var(--hljs-bg);
        color: var(--hljs-text);
        border: 1px solid var(--hljs-border);
        border-radius: var(--border-radius-small);
        padding: 0;
        overflow: auto;
        display: flex;
        gap: 0;
    }

    pre.gf-hljs .hljs-line-numbers {
        flex: 0 0 auto;
        padding: 0 .75em .85em;
        background-color: var(--hljs-bg);
        color: var(--hljs-line-number);
        font-family: var(--font-family-monospace);
        font-size: var(--hljs-font-size);
        line-height: var(--hljs-line-height);
        text-align: right;
        white-space: pre;
        user-select: none;
        border-right: 1px solid var(--hljs-border);
        background-image: linear-gradient(
            to bottom,
            transparent 0,
            transparent var(--hljs-line-height),
            var(--hljs-bg-alt) var(--hljs-line-height),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
        background-repeat: repeat-y;
        background-size: 100% calc(var(--hljs-line-height) * 2);
        background-attachment: local;
    }

    pre.gf-hljs code.hljs {
        display: block;
        flex: 0 0 auto;
        min-width: 100%;
        width: max-content;
        padding: 0 1em .85em;
        background: transparent;
        color: inherit;
        font-family: var(--font-family-monospace);
        font-size: var(--hljs-font-size);
        line-height: var(--hljs-line-height);
        white-space: pre;
        background-image: linear-gradient(
            to bottom,
            transparent 0,
            transparent var(--hljs-line-height),
            var(--hljs-bg-alt) var(--hljs-line-height),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
        background-repeat: repeat-y;
        background-size: 100% calc(var(--hljs-line-height) * 2);
        background-attachment: local;
    }

    pre.gf-hljs.wrap code.hljs {
        white-space: pre-wrap;
        flex: 1 1 auto;
        min-width: 0;
        width: 100%;
        overflow-wrap: anywhere;
        word-break: break-word;
        line-break: anywhere;
    }

    .hljs-comment,.hljs-quote {
        color: var(--hljs-comment);
        font-style: italic;
    }

    .hljs-keyword,.hljs-selector-tag,.hljs-subst {
        color: var(--hljs-keyword);
    }

    .hljs-number,.hljs-literal,.hljs-symbol,.hljs-bullet {
        color: var(--hljs-number);
    }

    .hljs-string,.hljs-doctag,.hljs-built_in,.hljs-builtin-name {
        color: var(--hljs-string);
    }

    .hljs-title,.hljs-section,.hljs-name {
        color: var(--hljs-title);
        font-weight: 600;
    }

    .hljs-attr,.hljs-attribute {
        color: var(--hljs-attr);
    }

    .hljs-tag {
        color: var(--hljs-tag);
    }

    .hljs-meta,.hljs-link {
        color: var(--hljs-meta);
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: 700;
    }

    .hljs-addition {
        background-color: var(--hljs-add-bg);
        color: var(--hljs-add-text);
    }

    .hljs-deletion {
        background-color: var(--hljs-del-bg);
        color: var(--hljs-del-text);
    }

    :root[data-theme="light"] {
        --hljs-bg: #ffffff;
        --hljs-bg-alt: #f4f7fb;
        --hljs-line-height: 24px;
        --hljs-font-size: 14px;
        --hljs-border: #e2e8f0;
        --hljs-text: #0f172a;
        --hljs-line-number: #94a3b8;
        --hljs-comment: #64748b;
        --hljs-keyword: #6d28d9;
        --hljs-number: #b45309;
        --hljs-string: #15803d;
        --hljs-title: #1d4ed8;
        --hljs-attr: #c2410c;
        --hljs-tag: #0f766e;
        --hljs-meta: #475569;
        --hljs-add-bg: #dcfce7;
        --hljs-add-text: #14532d;
        --hljs-del-bg: #fee2e2;
        --hljs-del-text: #7f1d1d;
    }

    #user-script-sets {
    margin-top: 0px;
    }

    /* User Navigation Icons and Panels */
    .gf-user-nav-icons {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        margin-left: 0.75em;
        vertical-align: middle;
    }

    .gf-user-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: var(--border-radius-small);
        cursor: pointer;
        background: transparent;
        border: 1px solid transparent;
        transition: background-color var(--transition-base), border-color var(--transition-base);
    }

    .gf-user-icon:hover,
    .gf-user-icon.active {
        background-color: rgb(255 122 122 / 16%);
        border-color: rgba(255, 122, 122, 0.2);
    }

    .gf-user-icon svg {
        width: 18px;
        height: 18px;
        stroke: var(--overall-text-color-icon);
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: stroke var(--transition-base);
    }

    .gf-user-icon:hover svg {
        stroke: var(--link-color-icon);
    }

    .gf-user-icon--settings:hover svg {
        fill: var(--link-color-icon);
    }

    .gf-user-icon--settings svg {
        fill: currentColor;
        stroke: none;
    }

    /* User Panels */
    .gf-user-panel {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 220px;
        background: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-soft);
        padding: 0.5em 0;
        z-index: 1000;
        display: none;
        opacity: 0;
        transform: translateY(-8px);
        transition: opacity var(--transition-base), transform var(--transition-base);
    }

    .gf-user-panel.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }

    .gf-user-panel a {
        display: block;
        padding: 0.75em 1.25em;
        color: #111827 !important;
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        transition: background-color var(--transition-base), color var(--transition-base);
    }

    .gf-user-panel a:visited {
        color: var(--overall-text-color);
    }

    .gf-user-panel a:hover {
        background: linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(79, 70, 229, 0.06));
        color: var(--link-color);
    }

    .gf-user-panel-separator {
        height: 1px;
        background-color: var(--content-separator-color);
        margin: 0.5em 0;
    }
`;

    registry.dark = String.raw`
    :root {
        color-scheme: dark;
        --font-family-base: "Inter", "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-family-monospace: "JetBrains Mono", "Fira Code", "Source Code Pro", monospace;
        --overall-background-color: #0d1117;
        --overall-text-color: #e6edf3;
        --link-color: #78a9ff;
        --link-visited-color: #a8c7fa;
        --texty-link-visited-color: #a7b1bd;
        --content-background-color: #151b23;
        --content-border-color: #27313d;
        --content-box-shadow-color: rgba(0, 0, 0, 0.28);
        --content-separator-color: #202934;
        --tab-active-background-color: rgba(120, 169, 255, 0.12);
        --tab-active-box-shadow-color: rgba(120, 169, 255, 0.18);
        --tab-active-top-border-color: #78a9ff;
        --inactive-item-background-color: #1a222d;
        --code-background-color: #0f172a;
        --user-content-background-color-gradient-1: #151b23;
        --user-content-background-color-gradient-2: #131922;
        --user-content-border-left-color: #27313d;
        --list-option-background-color-gradient-1: #151b23;
        --list-option-background-color-gradient-2: #131922;
        --list-option-hover-background-color-gradient-1: #1b2633;
        --list-option-hover-background-color-gradient-2: #18212c;
        --list-option-hover-box-shadow-top: rgba(0, 0, 0, 0.24);
        --list-option-hover-box-shadow-bottom: rgba(120, 169, 255, 0.12);
        --notice-background-color: #0f1a2a;
        --notice-border-color: #38bdf8;
        --notice-text-color: #e5e7eb;
        --alert-background-color: #2f2411;
        --alert-border-color: #f59e0b;
        --alert-text-color: #fde68a;
        --chart-background-color: #61a5fa;
        --chart-border-color: #61a5fa;
        --install-stats-bar-color: #61a5fa;
        --install-stats-bar-hover-color: #61a5fa;
        --install-stats-grid-color: #263449;
        --install-stats-text-color: #cbd5e1;
        --highlight-background-color: #3a2f1a;
        --rating-icon-good-border-color: #22c55e;
        --rating-icon-good-background-color: rgba(34, 197, 94, 0.18);
        --rating-icon-good-color: #bbf7d0;
        --rating-icon-ok-border-color: #eab308;
        --rating-icon-ok-background-color: rgba(234, 179, 8, 0.18);
        --rating-icon-ok-color: #facc15;
        --rating-icon-bad-border-color: #f87171;
        --rating-icon-bad-background-color: rgba(248, 113, 113, 0.18);
        --rating-icon-bad-color: #fca5a5;
        --expander-color: #60a5fa;
        --expander-background-color: rgba(59, 130, 246, 0.2);
        --pagination-background-color: rgba(59, 130, 246, 0.18);
        --pagination-hover-background-color: rgba(59, 130, 246, 0.32);
        --diff-del-background: rgba(248, 113, 113, 0.18);
        --diff-del-color: #fca5a5;
        --diff-ins-background: rgba(34, 197, 94, 0.18);
        --diff-ins-color: #86efac;
        --diff-del-strong-background: rgba(248, 113, 113, 0.28);
        --diff-ins-strong-background: rgba(34, 197, 94, 0.28);
        --diff-block-info: #94a3b8;
        --list-option-button-background-color: #151b23;
        --list-option-button-color: #e6edf3;
        --list-option-button-border-color: #27313d;
        --list-option-button-background-color-gradient-1: #151b23;
        --list-option-button-background-color-gradient-2: #131922;
        --code-container-border-color: #27313d;
        --prettyprint-background-color: #111820;
        --prettyprint-color: #e6edf3;
        --sidebar-background: #121820;
        --close-sidebar-background: #19212b;
        --close-sidebar-border-bottom: #27313d;
        --border-radius-small: 6px;
        --border-radius-medium: 12px;
        --border-radius-large: 18px;
        --shadow-soft: 0 8px 24px rgba(0, 0, 0, 0.28);
        --shadow-hover: 0 10px 28px rgba(0, 0, 0, 0.34);
        --container-glow-stroke: rgba(120, 169, 255, 0.22);
        --container-glow-color: rgba(120, 169, 255, 0.08);
        --hljs-bg: #0f172a;
        --hljs-bg-alt: #182235;
        --hljs-line-height: 24px;
        --hljs-font-size: 14px;
        --hljs-border: #1f2937;
        --hljs-text: #e5e7eb;
        --hljs-line-number: #64748b;
        --hljs-comment: #94a3b8;
        --hljs-keyword: #a78bfa;
        --hljs-number: #f59e0b;
        --hljs-string: #34d399;
        --hljs-title: #60a5fa;
        --hljs-attr: #f97316;
        --hljs-tag: #22d3ee;
        --hljs-meta: #94a3b8;
        --hljs-add-bg: rgba(34, 197, 94, 0.18);
        --hljs-add-text: #bbf7d0;
        --hljs-del-bg: rgba(248, 113, 113, 0.2);
        --hljs-del-text: #fecaca;
        --focus-ring-color: rgba(59, 130, 246, 0.45);
        --transition-base: 160ms ease;
        --gfplus-scrollbar-track-start: rgba(22, 27, 34, 0.72);
        --gfplus-scrollbar-track-end: rgba(13, 17, 23, 0.5);
        --gfplus-scrollbar-track-border: rgba(240, 246, 252, 0.55);
        --gfplus-scrollbar-thumb-start: #484f58;
        --gfplus-scrollbar-thumb-end: #484f58;
        --gfplus-scrollbar-hover-start: #6e7681;
        --gfplus-scrollbar-hover-end: #6e7681;
        --gfplus-scrollbar-border: rgba(57, 58, 59, 0.82);
        --gfplus-scrollbar-shadow: rgba(240, 246, 252, 0.12);
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    ::selection {
        background-color: #355374;
    }

    @media (prefers-reduced-motion: reduce) {
        *,*::before,*::after {
            animation-duration: .01ms!important;
            animation-iteration-count: 1!important;
            transition-duration: .01ms!important;
            scroll-behavior: auto!important;
        }
    }

    html {
        overflow-y: scroll;
        scroll-behavior: smooth;
        background-color: var(--overall-background-color);
    }

    body {
        margin: 0;
        min-height: 100vh;
        background: var(--overall-background-color);
        color: var(--overall-text-color);
        line-height: 1.6;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        transition: background-color var(--transition-base), color var(--transition-base);
    }

    body,select,input {
        font-family: var(--font-family-base);
        letter-spacing: .01em;
        transition: color var(--transition-base), background-color var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
    }

    body:lang(zh-CN),select:lang(zh-CN),input:lang(zh-CN) {
        font-family: "Noto Sans SC","Microsoft YaHei UI",var(--font-family-base)
    }

    body:lang(zh-TW),select:lang(zh-TW),input:lang(zh-TW) {
        font-family: "Noto Sans TC","Microsoft JHengHei UI",var(--font-family-base)
    }

    pre,code {
        direction: ltr!important;
        font-family: var(--font-family-monospace)
    }

    code {
        background-color: var(--code-background-color);
        border-radius: var(--border-radius-small);
        padding: .15em .4em
    }

    pre {
        margin: 0;
        padding: 1em;
        background-color: var(--code-background-color);
        border-radius: var(--border-radius-medium);
        box-shadow: inset 0 0 0 1px rgba(139, 92, 246, .2);
        overflow-x: auto
    }

    pre code {
        background-color: transparent;
        padding: 0
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),select,textarea {
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        padding: .6em .7em;
        font: inherit;
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08);
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus,select:focus,textarea:focus {
        border-color: var(--link-color);
        box-shadow: 0 0 0 0 rgba(139, 92, 246, .25);
        outline: none;
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus-visible,select:focus-visible,textarea:focus-visible {
        outline: none;
        border-color: var(--link-visited-color);
        box-shadow: 0 0 0 0 var(--focus-ring-color);
    }

    input[disabled],select[disabled],textarea[disabled] {
        background-color: rgba(148, 163, 184, .15);
        cursor: not-allowed;
        opacity: .7
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button),input[type=submit]:not(.search-submit),input[type=submit].search-submit:not([value="🔎"]),input[type=button],.button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        max-width: 100%;
        margin: .25rem .35rem .25rem 0;
        margin-inline: 0 .35rem;
        border: 1px solid rgba(96, 165, 250, .38);
        border-radius: 8px;
        padding: .64em 1.05em;
        background: linear-gradient(180deg, #3f76c9, #315fae);
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: .01em;
        cursor: pointer;
        box-shadow: none;
        text-decoration: none;
        white-space: normal;
        transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base), border-color var(--transition-base), color var(--transition-base);
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):hover,input[type=submit]:not(.search-submit):hover,input[type=submit].search-submit:not([value="🔎"]):hover,input[type=button]:hover,.button:hover,button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus,input[type=submit]:not(.search-submit):focus,input[type=submit].search-submit:not([value="🔎"]):focus,input[type=button]:focus,.button:focus {
        background: linear-gradient(180deg, #4d83d5, #3768bd);
        border-color: rgba(120, 169, 255, .42);
        box-shadow: none;
        transform: translateY(-1px);
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):active,input[type=submit]:not(.search-submit):active,input[type=submit].search-submit:not([value="🔎"]):active,input[type=button]:active,.button:active {
        transform: translateY(0);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .28);
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):disabled,input[type=submit]:not(.search-submit):disabled,input[type=submit].search-submit:not([value="🔎"]):disabled,input[type=button]:disabled,.button:disabled {
        opacity: .65;
        box-shadow: none;
        cursor: not-allowed;
        transform: none
    }

    button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus-visible,input[type=submit]:not(.search-submit):focus-visible,input[type=submit].search-submit:not([value="🔎"]):focus-visible,input[type=button]:focus-visible,.button:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 3px
    }

    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button),
    .form-control input[type=submit]:not(.search-submit),
    .form-control input[type=button] {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.55rem;
        width: fit-content;
        max-width: 100%;
        margin: .25rem 0 0;
        padding: .68rem 1.05rem;
        border: 1px solid rgba(96, 165, 250, .38);
        border-radius: 8px;
        background: linear-gradient(180deg, #3f76c9, #315fae);
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: .01em;
        box-shadow: none;
        text-decoration: none;
        white-space: normal
    }

    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):hover,
    .form-control input[type=submit]:not(.search-submit):hover,
    .form-control input[type=button]:hover,
    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):focus,
    .form-control input[type=submit]:not(.search-submit):focus,
    .form-control input[type=button]:focus {
        background: linear-gradient(180deg, #4d83d5, #3768bd);
        border-color: rgba(120, 169, 255, .42);
        box-shadow: none;
        transform: translateY(-1px)
    }

    .form-control button:not(.external-login):not(.gf-set-script-remove):not(.gf-script-star-button):not(.gf-script-detail-button):not(.gf-script-note-button):not(.gf-script-note-delete):not(.gf-script-note-done):not(.gf-list-option-toggle):not(.gf-sidebar-scroll-button):active,
    .form-control input[type=submit]:not(.search-submit):active,
    .form-control input[type=button]:active {
        transform: translateY(0);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .28)
    }

    input.search-submit[value="🔎"] {
        color: transparent;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e2e8f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='7'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg>") no-repeat center / 16px 16px !important;
        cursor: pointer;
        opacity: 1 !important;
    }

    textarea {
        resize: vertical;
        min-height: 6em;
        background-color: var(--content-background-color)
    }

    a {
        color: var(--link-color);
        font-weight: 600;
        text-decoration: none;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
        transition: color var(--transition-base), text-decoration-color var(--transition-base), opacity var(--transition-base);
    }

    a:visited {
        color: var(--link-visited-color)
    }

    a:hover,a:focus {
        color: var(--link-visited-color);
        text-decoration: underline;
        text-decoration-color: currentColor
    }

    a:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 3px;
        border-radius: var(--border-radius-small)
    }

    input[type=checkbox],input[type=radio] {
        vertical-align: middle;
        accent-color: var(--link-color)
    }

    .form-control input[type=checkbox],
    .form-control input[type=radio] {
        inline-size: 1rem;
        block-size: 1rem;
        margin: 0 .45em 0 0;
        margin-inline: 0 .45em;
        vertical-align: -0.14em;
        accent-color: var(--link-color)
    }

    .form-control input[type=checkbox] + label.radio-label,
    .form-control input[type=checkbox] + label.checkbox-label,
    .form-control input[type=radio] + label.radio-label,
    .form-control input[type=radio] + label.checkbox-label,
    .form-control input[type=radio] + label {
        display: inline;
        margin: 0;
        line-height: 1.45;
        vertical-align: baseline;
        font-size: inherit;
        font-weight: 400
    }

    .width-constraint {
        margin: auto;
        max-width: 1200px;
        width: min(96%, 1200px);
    }

    @media screen and (max-width: 1228px) {
        .width-constraint {
            margin:auto 1.2vw;
            padding-inline: clamp(.8rem, 4vw, 1.5rem)
        }
    }

    @media screen and (max-width: 400px) {
        .width-constraint {
            margin:auto 0;
            padding-inline: 0
        }
    }

    .inline-list,.block-list {
        padding-left: 0;
        padding-right: 0;
        list-style: none
    }

    .inline-list {
        display: inline
    }

    .block-list {
        display: block;
        margin: 0
    }

    .inline-list li,.block-list li {
        display: inline
    }

    .inline-list li:after,.block-list li:after {
        content: ", "
    }

    body:lang(he) .inline-list li:after,body:lang(he) .block-list li:after,body:lang(ar) .inline-list li:after,body:lang(ar) .block-list li:after,body:lang(ug) .inline-list li:after,body:lang(ug) .block-list li:after,body:lang(ckb) .inline-list li:after,body:lang(ckb) .block-list li:after {
        content: "،"
    }

    .inline-list li:last-child:after,.block-list li:last-child:after {
        content: ""
    }

    dt[title]>span {
        border-bottom: 1px dotted black
    }

    .form-section {
        margin-bottom: 2em
    }

    .form-control {
        margin-bottom: 1.4em;
        flex-direction: column;
        gap: .4em
    }

    .form-control textarea,#ace-editor {
        width: 100%;
        box-sizing: border-box;
        margin-top: 1px;
        margin-bottom: 1px
    }

    .form-control textarea:not([rows]),#ace-editor {
        height: 20em
    }

    #ace-editor {
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        background-color: var(--content-background-color);
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08);
        resize: vertical;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base)
    }

    .form-control input:not([type=radio]):not([type=file]):not([type=checkbox]):not([type=search]):not([type=submit]):not([size]) {
        box-sizing: border-box;
        width: 100%
    }

    .radio-group input[type=radio] {
        inline-size: 1rem;
        block-size: 1rem;
        margin: 0 .45em 0 1em;
        margin-inline: 1em .45em;
        vertical-align: -0.14em;
        accent-color: var(--link-color)
    }

    .radio-group input[type=radio] + label {
        display: inline;
        line-height: 1.45;
        vertical-align: baseline
    }

    .form-control label {
        font-weight: 600;
        color: var(--overall-text-color);
        display: inline-block;
        margin-bottom: .4em;
        letter-spacing: .01em
    }

    .form-control label.radio-label,.form-control label.checkbox-label {
        font-weight: 400
    }

    .form-control .enable-source-editor + label.checkbox-label {
        display: inline;
        margin: 0;
        line-height: 1.25;
        vertical-align: middle;
    }

    .form-control .label-note .enable-source-editor {
        margin: 0 .35em 0 0;
        vertical-align: middle;
    }

    .form-control select[name*="[additional_info]"][name$="[locale]"] {
        width: auto;
        max-width: min(100%, 18rem);
        padding: .35em .65em;
        font-size: .92rem;
    }

    .form-control textarea[name="script_version[code]"],
    textarea[name="script_version[changelog]"],
    textarea.comment-entry,
    .form-control textarea[name*="[additional_info]"][name$="[attribute_value]"] {
        background-color: #0b1220;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .34), 0 0 0 1px rgba(167, 139, 250, .12);
    }

    .form-control textarea[name*="[additional_info]"][name$="[attribute_value]"] {
        border-top-left-radius: 0;
    }

    textarea.comment-entry {
        border-top-left-radius: 0;
    }

    .previewable[data-markup-option-name="script_version[changelog_markup]"] textarea,
    .previewable[data-markup-option-name="script_version[changelog_markup]"] .preview-results {
        border-top-left-radius: 0;
    }

    label.subselection-radio-title {
        font-weight: 400;
        font-size: small;
        display: block;
        margin-left: 3px
    }

    .field_with_errors textarea,.field_with_errors input {
        background-color: rgba(220, 38, 38, .12);
        border-color: var(--rating-icon-bad-border-color);
        box-shadow: 0 0 0 0 rgba(220, 38, 38, .12)
    }

    .label-note {
        font-size: smaller;
        color: var(--texty-link-visited-color)
    }

    .label-note.markup-options > a:first-child {
        margin-inline-end: .75em
    }

    .label-note.markup-options label.radio-label {
        margin-inline-end: .65em
    }

    .screenshots-controls>*:not(label) {
        padding-left: 1em
    }

    .add-screenshot-control,.screenshot-control {
        clear: left
    }

    .screenshot-control>* {
        vertical-align: middle
    }

    .screenshot-control a {
        float: left;
        min-width: 150px;
        text-align: center
    }

    #script-info,.user-list,.text-content,.discussion-list,.notification-list {
        padding: clamp(1rem, 2.4vw, 1.5rem)
    }

    #script-info>*:last-child,.user-list>*:last-child,.text-content>*:last-child,.discussion-list>*:last-child,.notification-list>*:last-child {
        margin-bottom: 0
    }

    .script-list {
        padding: 0;
        border-radius: var(--border-radius-medium);
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        box-shadow: var(--shadow-soft);
        box-sizing: border-box;
        margin: 18px 0;
        overflow: hidden;
        transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base)
    }

    .user-list,.text-content,.discussion-list,.notification-list {
        list-style-type: none;
        box-shadow: var(--shadow-soft);
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-sizing: border-box;
        margin: 18px 0;
        padding: clamp(1.15rem, 2vw, 1.6rem);
        display: flex;
        flex-direction: column;
        transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base)
    }

    .script-list:hover,.user-list:hover,.text-content:hover,.discussion-list:hover,.notification-list:hover {
        border-color: var(--container-glow-stroke);
        box-shadow: var(--shadow-hover);
        transform: none
    }

    .text-content:last-child {
        margin-bottom: 0
    }

    .text-content.text-content-compact {
        padding: clamp(.85rem, 1.5vw, 1.2rem);
        margin-top: 0px
    }

    html[data-gfplus-set-editor-page] .text-content > p:first-of-type {
        font-size: 1.3rem;
        line-height: 1.72;
        margin-top: 0;
    }

    .user-list {
        background-image: none
    }

    .script-link,.script-description,.user-link {
        unicode-bidi: isolate
    }

    .gf-script-logo {
        width: 26px;
        height: 26px;
        aspect-ratio: 1 / 1;
        min-width: 26px;
        min-height: 26px;
        max-width: 26px;
        max-height: 26px;
        flex: 0 0 26px;
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        vertical-align: text-bottom;
        border: 0;
        background: transparent;
        box-shadow: none;
        overflow: hidden;
        line-height: 0;
    }

    img.gf-script-logo {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
        object-position: center;
        max-width: 100%;
        max-height: 100%;
        filter: none;
        mix-blend-mode: normal;
        image-rendering: auto;
    }

    .gf-script-logo--title {
        width: 34px;
        height: 34px;
        min-width: 34px;
        min-height: 34px;
        max-width: 34px;
        max-height: 34px;
        flex-basis: 34px;
        margin-right: 10px;
    }

    .gf-script-logo--fallback {
        color: var(--link-color);
    }

    .gf-script-logo--fallback svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
    }

    #script-info header h2,
    #script-info > h2 {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    #script-info header h2 .gf-script-logo,
    #script-info > h2 .gf-script-logo {
        margin-right: 0;
    }

    #script-info header h2 .gf-script-logo--fallback svg,
    #script-info > h2 .gf-script-logo--fallback svg {
        width: 18px;
        height: 18px;
    }

    .list-option-groups~ol {
        width: calc(960px - 14em)
    }

    .text-content .list-option-groups~ol {
        width: calc(960px - 16em)
    }

    @media screen and (max-width: 960px) {
        #script-info,.user-list,.text-content {
            padding: clamp(.9rem, 4vw, 1.2rem)
        }
    }

    @media screen and (max-width: 400px) {
        .script-list,.user-list,.text-content,.discussion-list,.notification-list {
            border-left:0;
            border-right: 0
        }

        .user-list,.text-content,.discussion-list,.notification-list,.script-list-description {
            padding-left: 1rem;
            padding-right: 1rem
        }

        .discussion-list-header,.user-list-header,.library-list-header {
            padding-left: 1em;
            padding-right: 1em;
            margin-top: 15px;
            margin-bottom: 10px
        }

        #script-info {
            padding-left: 1em;
            padding-right: 1em
        }

        #script-links {
            margin-left: -1em;
            margin-right: -1em;
            padding: 0
        }

        #additional-info {
            margin-left: -1em;
            margin-right: -1em
        }
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) {
        border-bottom: 1px solid var(--content-separator-color);
        padding: clamp(1rem, 2.5vw, 1.6rem);
        display: grid;
        min-width: 0;
        max-width: 100%;
        box-sizing: border-box;
        list-style-type: none;
        gap: .55rem;
        background: rgba(255, 255, 255, 0.02);
        transition: background-color var(--transition-base, 0.25s ease),
                    box-shadow var(--transition-base, 0.25s ease),
                    transform var(--transition-base, 0.25s ease);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255,255,255,0.06);
        transform: translateY(-1px);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):has(.gf-script-star-button[data-active="true"]) {
        background: linear-gradient(90deg, rgba(244, 180, 0, .075), rgba(244, 180, 0, .018) 44%, transparent);
        box-shadow: inset 3px 0 rgba(244, 180, 0, .68);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):has(.gf-script-star-button[data-active="true"]):hover {
        background: linear-gradient(90deg, rgba(244, 180, 0, .12), rgba(244, 180, 0, .03) 50%, transparent);
        box-shadow: inset 3px 0 rgba(244, 180, 0, .92), inset 0 0 0 1px rgba(244, 180, 0, .1);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info):last-child {
        border-bottom: none
    }

    .script-list .cf-wrapper {
        margin: 0!important
    }

    @media screen and (max-width: 960px) {
        .script-list > li:not(.ad-entry):not(.gf-script-extra-info) {
            padding: clamp(.9rem, 4vw, 1.3rem)
        }
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.35;
        letter-spacing: .01em;
        color: var(--overall-text-color);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 8px;
        row-gap: .35em;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 .gf-script-logo {
        flex: 0 0 26px;
        margin-right: 0;
        align-self: center;
        vertical-align: middle;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 .gf-script-title-content {
        display: block;
        flex: 1 1 0;
        min-width: 0;
        max-width: calc(100% - 34px);
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 > .script-link,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 .gf-script-title-content .script-link {
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
        word-break: normal;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > p {
        margin: 0
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > footer {
        margin-top: .35em;
        display: flex;
        flex-wrap: wrap;
        gap: .6rem;
        font-size: .875rem;
        color: var(--texty-link-visited-color)
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > footer a {
        font-weight: 500
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article {
        min-width: 0;
        max-width: 100%;
    }

    .list-current,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 {
        font-weight: 700
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article .description {
        font-weight: 400;
        display: block;
        flex: 0 0 100%;
        margin: .5em 0;
        font-size: .95rem;
        color: var(--texty-link-visited-color)
    }

    .gf-script-extra-info {
        display: none;
        min-width: 0;
        max-width: 100%;
        margin-top: .8rem;
        padding-top: .8rem;
        border-top: 1px solid var(--content-separator-color);
    }

    .gf-script-extra-info[data-open="true"] {
        display: block;
    }

    .gf-script-extra-info .user-content ul,
    .gf-script-extra-info .user-content ol {
        margin-top: .35em;
        margin-bottom: .45em;
        padding-left: 1.45em;
    }

    .gf-script-extra-info .user-content li {
        display: list-item;
        margin: 0;
        padding: 0;
        border-bottom: 0;
        background: transparent;
        box-shadow: none;
        transform: none;
        transition: none;
    }

    .gf-script-extra-info .user-content li > ul,
    .gf-script-extra-info .user-content li > ol {
        margin-top: .2em;
        margin-bottom: .2em;
    }

    .gf-script-extra-status {
        display: inline-flex;
        align-items: center;
        gap: .6rem;
        min-height: 40px;
        max-width: 100%;
        box-sizing: border-box;
        padding: .65rem .85rem;
        border: 1px solid rgba(129, 140, 248, .18);
        border-radius: var(--border-radius-small);
        background: linear-gradient(180deg, rgba(129, 140, 248, .12), rgba(129, 140, 248, .045));
        color: var(--texty-link-visited-color);
        font-size: .9rem;
        font-weight: 600;
    }

    .gf-script-extra-status::before {
        content: "";
        width: 14px;
        height: 14px;
        flex: 0 0 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 999px;
        opacity: .72;
        animation: gf-script-extra-spin .8s linear infinite;
    }

    .gf-script-extra-info[data-gfplus-extra-info="loaded"] .gf-script-extra-status::before,
    .gf-script-extra-info[data-gfplus-extra-info="error"] .gf-script-extra-status::before {
        display: none;
    }

    @keyframes gf-script-extra-spin {
        to {
            transform: rotate(360deg);
        }
    }

    .script-list .name-description-separator {
        display: none
    }

    #script-description,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article > h2 > a,
    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article .description {
        word-wrap: break-word
    }

    @media screen and (max-width: 720px) {
        .script-list,#script-content {
            margin-left:unset
        }
    }

    .pagination,.script-list+.pagination,.user-list+.pagination,.pagy.series-nav {
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .6rem;
        background-color: transparent;
        padding: 1.1rem 0;
        margin: 0;
        border-radius: var(--border-radius-small)
    }

    .pagination>*,.script-list+.pagination>*,.user-list+.pagination>*,.pagy.series-nav>* {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.6rem;
        background-color: var(--pagination-background-color);
        padding: .55em .95em;
        border-radius: var(--border-radius-small);
        text-decoration: none;
        border: 1px solid transparent;
        color: var(--overall-text-color);
        font-weight: 600;
        transition: background-color var(--transition-base), color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)
    }

    .pagination .disabled {
        display: none
    }

    .pagination .current,.pagy.series-nav [aria-current="page"] {
        font-style: normal;
        font-weight: 700
    }

    .pagination .current,.pagination .gap,.pagy.series-nav [aria-disabled="true"] {
        background-color: transparent;
        color: var(--texty-link-visited-color);
        text-decoration: none;
        cursor: default
    }

    .pagination .current,.pagy.series-nav [aria-current="page"] {
        border-color: var(--link-color);
        color: var(--link-color);
        box-shadow: inset 0 0 0 1px var(--link-color);
        background-color: rgba(139, 92, 246, .16)
    }

    .pagy.series-nav [aria-disabled="true"] {
        pointer-events: none
    }

    .pagination>a:hover,.pagination>a:focus,.pagy.series-nav>a:hover,.pagy.series-nav>a:focus {
        background-color: var(--pagination-hover-background-color);
        color: var(--overall-text-color);
        transform: translateY(-1px);
        box-shadow: 0 12px 24px rgba(139, 92, 246, .28)
    }

    .pagy.series-nav>a:hover,.pagy.series-nav>a:focus {
        transform: none;
        box-shadow: none
    }

    .pagination>a:focus-visible,.pagy.series-nav>a:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 2px
    }

    @media screen and (max-width: 400px) {
        .pagination,.script-list+.pagination,.user-list+.pagination,.pagy.series-nav {
            padding-left: 1rem;
            padding-right: 1rem
        }
    }

    .good-rating-count,.ok-rating-count,.bad-rating-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.5em;
        text-align: center;
        padding: .1em .5em;
        border-radius: 999px;
        font-weight: 600;
        font-size: .85rem;
        border: 1px solid transparent;
        transition: transform var(--transition-base), box-shadow var(--transition-base)
    }

    .good-rating-count {
        background-color: var(--rating-icon-good-background-color);
        border-color: var(--rating-icon-good-border-color);
        color: var(--rating-icon-good-color)
    }

    .ok-rating-count {
        background-color: var(--rating-icon-ok-background-color);
        border-color: var(--rating-icon-ok-border-color);
        color: var(--rating-icon-ok-color)
    }

    .bad-rating-count {
        background-color: var(--rating-icon-bad-background-color);
        border-color: var(--rating-icon-bad-border-color);
        color: var(--rating-icon-bad-color)
    }

    .select-all,.select-none {
        display: none
    }

    #help-allowed-elements,#help-allowed-styles {
        column-width: 20em
    }

    #help-allowed-elements li,#help-allowed-styles li {
        padding-right: 1em
    }

    #by-site-list {
        list-style-type: none;
        padding: 0
    }

    #by-site-list li {
        display: inline;
        vertical-align: middle
    }

    #user_profile {
        width: 100%;
        height: 10em
    }

    .preview-result {
        display: none;
        background-color: rgba(253, 230, 138, 0.2);
        padding: .5em
    }

    .failed-sync {
        background-color: rgba(248, 113, 113, 0.22)
    }

    .alert {
        font-style: normal;
        background-color: var(--alert-background-color);
        border: 1px solid rgba(245, 158, 11, .25);
        border-left: 6px solid var(--alert-border-color);
        padding: 1rem 1.1rem;
        color: var(--alert-text-color);
        border-radius: var(--border-radius-small);
        box-shadow: 0 12px 20px rgba(120, 53, 15, .12)
    }

    .notice,.validation-errors {
        background-color: var(--notice-background-color);
        border: 1px solid rgba(2, 132, 199, .2);
        border-left: 6px solid var(--notice-border-color);
        padding: 1rem 1.1rem;
        color: var(--notice-text-color);
        border-radius: var(--border-radius-small);
        box-shadow: 0 12px 20px rgba(15, 23, 42, .08)
    }

    .validation-errors {
        margin: .5em 0
    }

    .validation-errors>p:first-child {
        margin-top: 0
    }

    .validation-errors>p:last-child {
        margin-bottom: 0
    }

    .alert p,.notice p,.validation-errors p {
        margin: 0
    }

    .alert p+p,.notice p+p,.validation-errors p+p {
        margin-top: .6rem
    }

    #install-stats-chart {
        width: 100%;
        height: 400px;
        background: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        overflow: hidden
    }

    #install-stats-chart-container,
    #weekly-install-stats-chart-container,
    #update-check-stats-chart-container {
        width: 100%;
        min-height: 320px;
        background: var(--content-background-color) !important;
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        overflow: hidden
    }

    #install-stats-chart-container canvas,
    #weekly-install-stats-chart-container canvas,
    #update-check-stats-chart-container canvas {
        display: block;
        max-width: 100%;
    }

    #install-stats-chart svg text {
        fill: var(--install-stats-text-color) !important
    }

    #install-stats-chart svg line[stroke],
    #install-stats-chart svg path[stroke="#cccccc"],
    #install-stats-chart svg path[stroke="#e6e6e6"],
    #install-stats-chart svg path[stroke="#d9d9d9"] {
        stroke: var(--install-stats-grid-color) !important
    }

    #install-stats-chart svg rect[fill="#ffffff"],
    #install-stats-chart svg rect[fill="white"] {
        fill: var(--content-background-color) !important
    }

    .stats-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-small);
        overflow: hidden;
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, .04)
    }

    .stats-table th,.stats-table td {
        border: 1px solid var(--content-border-color);
        padding: .75rem 1rem;
        text-align: left
    }

    .stats-table th {
        background: linear-gradient(180deg, rgba(139, 92, 246, .18), rgba(139, 92, 246, .06));
        font-weight: 600;
        color: var(--overall-text-color)
    }

    .stats-table thead tr:first-child th:first-child {
        border-start-start-radius: 5px;
        overflow: hidden
    }

    .stats-table thead tr:first-child th:last-child {
        border-start-end-radius: 5px;
        overflow: hidden
    }

    .stats-table tbody tr:last-child > * {
        border-block-end: 1px solid var(--content-border-color) !important;
        border-bottom: 1px solid var(--content-border-color) !important;
        background-clip: padding-box
    }

    .stats-table tbody tr:last-child > *:first-child {
        border-inline-start: 1px solid var(--content-border-color) !important;
        border-bottom-left-radius: 5px;
        border-end-start-radius: 5px;
        overflow: hidden
    }

    .stats-table tbody tr:last-child > *:last-child {
        border-inline-end: 1px solid var(--content-border-color) !important;
        border-bottom-right-radius: 5px;
        border-end-end-radius: 5px;
        overflow: hidden
    }

    body:lang(ar) .stats-table tbody tr:last-child > *:first-child,
    body:lang(he) .stats-table tbody tr:last-child > *:first-child,
    body:lang(ug) .stats-table tbody tr:last-child > *:first-child,
    body:lang(ckb) .stats-table tbody tr:last-child > *:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 5px
    }

    body:lang(ar) .stats-table tbody tr:last-child > *:last-child,
    body:lang(he) .stats-table tbody tr:last-child > *:last-child,
    body:lang(ug) .stats-table tbody tr:last-child > *:last-child,
    body:lang(ckb) .stats-table tbody tr:last-child > *:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 0
    }

    .stats-table tbody tr:hover {
        background-color: rgba(139, 92, 246, .14)
    }

    td.numeric,th.numeric {
        text-align: right
    }

    .translation_missing {
        outline: dashed red
    }

    #edit_user>div {
        margin-bottom: .5em
    }

    #edit_user>div>label:first-child {
        font-weight: 700
    }

    .inline-form {
        display: inline
    }

    a.self-link,a.self-link:visited {
        text-decoration: none;
        color: var(--overall-text-color);
        opacity: .35
    }

    .indented {
        padding-left: 1em
    }

    .external-login {
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        max-width: 100%;
        margin: .25rem .35rem .25rem 0;
        padding: .64em 1.05em .64em 2.35em;
        border: 1px solid rgba(96, 165, 250, .38);
        border-radius: 8px;
        background-color: #315fae;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: .82em center;
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: .01em;
        cursor: pointer;
        box-shadow: none;
        text-decoration: none;
        white-space: normal;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base);
        transform: none !important;
    }

    .external-login:hover,
    .external-login:focus,
    .external-login:active {
        border-color: rgba(120, 169, 255, .42);
        background-color: #3768bd;
        background-repeat: no-repeat !important;
        background-size: 16px 16px !important;
        background-position: .82em center !important;
        color: #ffffff;
        transform: none !important;
    }

    .external-login.github-login,
    .external-login.gitlab-login,
    .external-login.google_oauth2-login,
    .external-login.github-login:hover,
    .external-login.gitlab-login:hover,
    .external-login.google_oauth2-login:hover,
    .external-login.github-login:focus,
    .external-login.gitlab-login:focus,
    .external-login.google_oauth2-login:focus,
    .external-login.github-login:active,
    .external-login.gitlab-login:active,
    .external-login.google_oauth2-login:active {
        box-shadow: none !important;
    }

    .external-login-container {
        display: inline-block;
        vertical-align: top
    }

    .external-login-container * {
        text-align: center;
        display: block
    }

    .external-login-container .external-login {
        display: inline-flex !important
    }

    .external-login-container>*:not(button) {
        font-size: smaller
    }

    .external-login-container:not(:last-child) {
        margin-right: 5px
    }

    .external-login-container .github-login {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==)
    }

    .external-login-container .gitlab-login {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACoUlEQVRYhc3WzW+UVRQG8N/MtKKYsEFMmpo27DUEFgSiSIHSsDAxsYr6L4Cs+AMkMWiMCwgB2lQMhIWJ0Rip7owbXbhjhekGTFBQkC9rTCxBWxb3vpkzb2Y6H+00PsnN3Hve8zznzL3nfvA/xQRm8Qk2rUBnU9aYxf5OSevxF5ZyO7eCBM4Fnb/xVCekyUBawl0M9BB8EPdLWq92Qvy0RFrCvh4SmGiic7EdaZ3G6S/aVA8JzDTR+RNPLEd6JTi/h19z/zZqXQQfwB+Zex3Hg+6B5Yjng+MWnAzjl7tIYE/gncDWMP64FSkWzVVUsCsQT3WRwOnAeylr/ZzHd7Qo6v2B9GG21XAr226i2kHwKn7LnN8D56Ogv6cZcTo4bA/2qWDf2UECLwb/s8G+I9jPFMZK/q3lrJ+VCm80O8I4vs39RRxtk8CJ0B/Hd7lfxS8YlmbmuawHxjQWTcSgdBiVt1S71uwAOxW+7yqygteD05cl0iNcaPl/W+MC/i3Zvgj9g6QlqOIGhqSCGxamJqOKbXiyw+ALuNxEpyYt8ZB0tgyTCqtZ0fQLcRn2VqXLp0B5+vuBz0L/TbiWs7knFVy/UVU/4u9QP7Pn5crsM8bVl+AfeDcY/svjXu7/dhjAMY1b9Trpejxf+vA9RlYx+Ah+KMX4HBui09vSMhQO9/HaKgSfxIOgO4+3Wjlvxo+lTKeld2K3WK/xflnK2pvbEQelB8RiIF7B810EfwE/Bf5i1uxql+1Vv1aLij2kfoE1QwWHpZOw4N3MWj3hGXytcRq/wsYmvhtxqeQ7mzVWhAqO4GEQvoHdwWcs24rvC3jH8rPVNbZgTuO6vo8PNNbLXPbtC56WHpWt3gAz2afveEN64xeBH2h8U6wJRvFNbqNrHXzV8BjO7vx8x02KpQAAAABJRU5ErkJggg==)
    }

    .external-login-container .google_oauth2-login {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAnFJREFUOI2FU11Ik1EYfs75zvZ9c35buAKpaWaSSVZoiheBKVmYdWF1ERi7kMhFUeqNFxLURRAhFKvhTcHMioQiCBG8iOgH8QfFKZj4M81ES0fONfe5tW87XcQncw17rs7znud5f87LIUgCn8u1jQaWL2MtWMTBGZGkKUgpLvPVxolELYkn3if3ZP38ytvQ8EAZCa6RzUoK4WDBrJiXey61rtH9T4LVx86cWF/PsPp1OjVZVxpo+q6wpfSUTOz2CAAwAIg5HOJqf89QvFnI3KNQa6ab6vTB2Ir3QGRsdCeMqVw8WmbTzBsJFPNSmzo7bfpbgkI6UeWSm25dIgDXhAHn/YtgRJWvNLza1BLnIOHPWZFwVyVfrizhvjvNXVuNkAimTjVV0PADBnEBpuYiVRnfXRMvaOkMOaOcpyUz7zDgJiPRtRKtTyrBn2a3++NFg7NqnTcAXbIE1UWsjwJkY07ON6/1v4hBYlxn6tP4SHS7yTH5zFS/z/ZLix3OEDrDUVg0PjSjlioRQgBA1GGSsb1334cXsyMd5Liudd7HKuB9CeC0Zmg+azivnR92h6qVCDkGAAYd53pB7KaEgLeJ1147F1YQ4xzv5nurbvc/eoqEcZwfh0r7PWqHxvOtwlhtOQkRAHBMOsQBz9zShH/OrAky5PT1LKN1lDG6/nPdnzPu81gPyeWYGbkAA2P8zBF9YV256N6o0jr6IvvT4qB7evWbvNW75Znzo8VCU8ONk0YnkPCZWtztRp+y/Kb3x0hF4LdC4+8oIci37P9eYMmtuV5g+6DFk66txd1uRFStDarBYnAuiYLkSREMz+sLbV8StX8AjxDtgxiuzNwAAAAASUVORK5CYII=)
    }

    .centered-sections h2,.centered-sections h3 {
        text-align: center
    }

    form.external-login-form {
        position: relative;
        display: table;
        margin: 0 auto;
        padding: 1em;
        background-color: var(--content-background-color);
        border: 1px solid #414954;
        border-radius: 5px;
        text-align: center
    }

    form.external-login-form .remember-me {
        margin-top: 12px
    }

    form.new_user {
        position: relative;
        width: 340px;
        margin: 0 auto;
        padding: 1em;
        background-color: var(--content-background-color);
        border: 0;
        border-radius: 5px;
        text-align: start
    }

    @media screen and (max-width: 440px) {
        form.new_user {
            width:unset
        }
    }

    form.new_user label,form.new_user em {
        display: block;
        font-size: small
    }

    form.new_user br {
        display: none
    }

    form.new_user input[type=text],form.new_user input[type=email],form.new_user input[type=password] {
        display: block;
        width: 100%;
        min-height: 34px;
        box-sizing: border-box;
        margin-top: .2em;
        margin-bottom: .5em;
        padding: 6px 8px;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
        border: 1px solid rgba(196, 181, 253, .32);
        border-radius: 3px;
        outline: none;
        box-shadow: inset 0 1px 2px #0000001a
    }

    form.new_user #user_email,
    form.new_user #user_password {
        border: 1px solid #414954;
    }

    form input[type=checkbox],input[type=checkbox]+label,form input[type=radio],input[type=radio]+label {
        display: inline-block;
        font-size: small
    }

    .radio-note {
        font-size: small;
        margin-top: 5px
    }

    @media screen and (max-width: 440px) {
        form input[type=checkbox]+label {
            display:unset;
            word-wrap: break-word
        }
    }

    form.new_user input[type=submit] {
        display: block;
        width: 100%;
        min-height: 34px;
        box-sizing: border-box;
        margin: .5em 0 0;
        padding: 6px 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        color: #f8fafc;
        background-color: #3b1e8a;
        background-image: linear-gradient(#2f2675,#4c1d95);
        border: 0px solid transparent;
        box-shadow: none;
        border-radius: 3px;
        white-space: normal
    }

    form.new_user~br {
        display: none
    }

    form.new_user~a {
        width: 340px;
        display: block;
        margin: 0 auto 2em;
        font-size: small
    }

    form.new_user+a {
        width: 340px;
        display: block;
        margin: 0 auto
    }

    .qr-code {
        max-width: 400px;
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        box-shadow: var(--shadow-soft);
        border-radius: var(--border-radius-small)
    }

    .sidebar-search,.home-search,
    #library-search,#user-search,#code-search {
        position: relative;
        vertical-align: middle
    }

    .sidebar-search input[type=search],.home-search input[type=search],
    #library-search input[type=search],
    #user-search input[type=search],
    #code-search input[type=search] {
        padding: .6em 78px .6em .8em;
    }

    .sidebar-search input[type=search]::-webkit-search-cancel-button,
    .home-search input[type=search]::-webkit-search-cancel-button,
    #library-search input[type=search]::-webkit-search-cancel-button,
    #user-search input[type=search]::-webkit-search-cancel-button,
    #code-search input[type=search]::-webkit-search-cancel-button {
        margin-right: 38px;
    }

    .sidebar-search input[type=search],
    #library-search input[type=search],
    #user-search input[type=search],
    #code-search input[type=search] {
        width: 100%;
        margin: 0 0 16px;
    }

    .sidebar-search input.search-submit[value="🔎"],.home-search input.search-submit[value="🔎"],
    #library-search input.search-submit[value="🔎"],
    #user-search input.search-submit[value="🔎"],
    #code-search input.search-submit[value="🔎"] {
        position: absolute;
        -moz-appearance: none;
        -webkit-appearance: none;
        inset-inline-end: 1px;
        top: 1px;
        bottom: 1px;
        width: 38px;
        border: 0;
        border-inline-start: 1px solid var(--content-border-color);
        border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
        padding: 0;
        margin-left: 0;
        margin-right: 0;
        background-color: var(--content-background-color) !important;
        box-shadow: none;
        opacity: 1;
        transform: none
    }

    .sidebar-search input.search-submit[value="🔎"] {
        bottom: 17px;
    }

    .sidebar-search input.search-submit[value="🔎"]:hover,.sidebar-search input.search-submit[value="🔎"]:focus,.sidebar-search input.search-submit[value="🔎"]:active,
    .home-search input.search-submit[value="🔎"]:hover,.home-search input.search-submit[value="🔎"]:focus,.home-search input.search-submit[value="🔎"]:active,
    #library-search input.search-submit[value="🔎"]:hover,#library-search input.search-submit[value="🔎"]:focus,#library-search input.search-submit[value="🔎"]:active,
    #user-search input.search-submit[value="🔎"]:hover,#user-search input.search-submit[value="🔎"]:focus,#user-search input.search-submit[value="🔎"]:active,
    #code-search input.search-submit[value="🔎"]:hover,#code-search input.search-submit[value="🔎"]:focus,#code-search input.search-submit[value="🔎"]:active {
        background-color: var(--content-background-color) !important;
        box-shadow: none;
        transform: none
    }

    #library-search,
    #user-search,
    #code-search {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 38px;
        align-items: stretch
    }

    #library-search > h3,
    #library-search > p,
    #user-search > h3,
    #user-search > p,
    #code-search > h3,
    #code-search > p {
        grid-column: 1 / -1
    }

    #library-search input[type=search],
    #user-search input[type=search],
    #code-search input[type=search] {
        grid-column: 1;
        margin: 0 0 16px;
        padding: .6em 34px .6em .8em;
        border-start-end-radius: 0;
        border-end-end-radius: 0
    }

    #library-search input[type=search]::-webkit-search-cancel-button,
    #user-search input[type=search]::-webkit-search-cancel-button,
    #code-search input[type=search]::-webkit-search-cancel-button {
        margin-right: 8px
    }

    #library-search input.search-submit[value="🔎"],
    #user-search input.search-submit[value="🔎"],
    #code-search input.search-submit[value="🔎"] {
        position: static;
        grid-column: 2;
        align-self: stretch;
        width: 38px;
        min-height: auto;
        margin: 0 0 16px;
        border: 1px solid var(--content-border-color);
        border-inline-start: 0;
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        border-start-end-radius: var(--border-radius-small);
        border-end-end-radius: var(--border-radius-small);
        background-color: var(--content-background-color) !important
    }

    @media screen and (max-width: 680px) {
        .sidebar-search input[type=search],.home-search input[type=search],
        #library-search input[type=search],
        #user-search input[type=search],
        #code-search input[type=search] {
            font-size:unset
        }
    }

    figure {
        padding: 5px;
        box-shadow: 0 4px 8px #00000026,0 6px 10px #00000026;
        border-radius: 5px
    }

    figcaption {
        font-size: smaller;
        text-align: center
    }

    .multiform-page:not(:first-child) {
        margin-top: 30px
    }

    .multiform-page:not(:last-child) {
        padding-bottom: 30px;
        border-bottom: 1px solid lightgray
    }

    summary {
        cursor: pointer
    }

    @media screen and (max-width: 400px) {
        .user-list {
            padding-top:1em;
            padding-bottom: 1em
        }
    }

    .blocked-script-codes {
        font-size: smaller;
        border-collapse: collapse;
        width: 100%;
        text-align: left
    }

    .blocked-script-codes .pattern-row code {
        font-size: medium
    }

    .blocked-script-codes .pattern-row {
        border-top: 1px solid gray
    }

    .blocked-script-codes .info-row td:first-child {
        width: 2em
    }

    .ad {
        margin-top: 1em;
        margin-bottom: 1em
    }

    .script-list-cd-entry {
        border-bottom: 1px solid var(--content-border-color)
    }

    #script-list-cd,#discussion-show-cd {
        width: 300px;
        margin-left: auto;
        margin-right: auto
    }

    #script-list-cd {
        padding: 1em
    }

    .ethical-ads-text .ea-placement {
        position: relative
    }

    .ethical-ads-text .ea-callout {
        position: absolute;
        bottom: 0;
        right: 0
    }

    .ethical-ads-text:empty {
        min-height: 46px
    }

    .ethical-ads.text-content-top-ad {
        margin: 0 calc(-1em - 1px);
        border-radius: 5px 5px 0 0
    }

    @media screen and (max-width: 960px) {
        .ethical-ads.text-content-top-ad {
            margin:0 calc(-1.2vw - 1px)
        }
    }

    @media screen and (max-width: 400px) {
        .ethical-ads.text-content-top-ad {
            margin:0 calc(-1em - 1px);
            border-radius: 5px 5px 0 0
        }
    }

    @media screen and (max-width: 400px) {
        .script-list li.ad-entry {
            padding:0
        }
    }

    #script-info .ethical-ads-text {
        margin: 0 calc(-1em - 1px)
    }

    #script-info .ethical-ads-text .ea-content {
        border-radius: 0!important
    }

    @media screen and (max-width: 960px) {
        #script-info .ethical-ads-text {
            margin:0 calc(-1.2vw - 1px)
        }
    }

    .after-radio-chosen {
        display: none;
        margin-left: 29px
    }

    input[type=radio]:checked~.after-radio-chosen {
        display: block
    }

    .announcement {
        margin: 14px 0;
        text-align: center;
        font-size: smaller
    }

    .announcement form {
        display: inline
    }

    .announcement input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border: 0;
        background: none;
        margin: 0 0 0 4px;
        padding: 0;
        cursor: pointer
    }

    .announcement,.announcement input {
        font-size: 12px
    }

    .badge {
        margin-left: 1ex;
        border-radius: 10%/25%;
        font-size: 70%;
        padding: 0 .5ex;
        text-transform: uppercase;
        position: relative;
        top: -.2ex
    }

    .badge-banned,.badge-deleted {
        background-color: rgba(248, 113, 113, .85);
        color: #fef2f2
    }

    .badge-deleted {
        margin-left: 0;
        border-color: rgba(248, 113, 113, .85)
    }

    .badge-moderator {
        background-color: rgba(99, 102, 241, .85);
        color: #eef2ff
    }

    .badge-author {
        background-color: rgba(34, 197, 94, .82);
        color: #ecfdf5
    }

    .badge-js {
        background-color: #facc15;
        color: #0f172a
    }

    .badge-css {
        background-color: #61a5fa;
        color: #e0f2fe
    }

    .badge-js,.badge-css {
        display: none
    }

    .showing-all-languages .badge-js,.showing-all-languages .badge-css {
        display: inline
    }

    code {
        background-color: var(--code-background-color)
    }

    pre code {
        background: none;
        border: 0
    }

    pre,code {
        border-radius: 2px
    }

    pre {
        padding: 1em
    }

    .prettyprint {
        min-width: calc(100% - 6px);
        background-color: var(--prettyprint-background-color);
        color: var(--prettyprint-color)
    }

    .prettyprint.wrap {
        white-space: pre-wrap;
        line-break: anywhere
    }

    .prettyprint:not(.wrap) {
        width: max-content
    }

    .code-container {
        max-height: calc(100vh - 54px);
        overflow-x: auto;
        border-radius: 2px;
        border: 1px solid var(--code-container-border-color)
    }

    .code-container pre {
        border: 0;
        margin: 0
    }

    li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9 {
        list-style-type: decimal!important
    }

    @media screen and (max-width: 440px) {
        #code-container {
            font-size:small
        }
    }

    .diff_options input[type=number] {
        width: 10ch
    }

    .diff {
        overflow: auto
    }

    .diff ul {
        background: var(--content-background-color);
        overflow: auto;
        font-size: 13px;
        list-style: none;
        margin: 0;
        padding: 0;
        display: table;
        width: 100%
    }

    .diff del,.diff ins {
        display: block;
        text-decoration: none
    }

    .diff li {
        padding: 0;
        display: table-row;
        margin: 0;
        height: 1em
    }

    .diff li.ins {
        background: var(--diff-ins-background);
        color: var(--diff-ins-color)
    }

    .diff li.del {
        background: var(--diff-del-background);
        color: var(--diff-del-color)
    }

    .diff li:hover {
        background: rgba(253, 230, 138, 0.14)
    }

    .diff del,.diff ins,.diff span {
        white-space: pre;
        font-family: courier
    }

    .diff del strong {
        font-weight: 400;
        background: var(--diff-del-strong-background)
    }

    .diff ins strong {
        font-weight: 400;
        background: var(--diff-ins-strong-background)
    }

    .diff li.diff-comment {
        display: none
    }

    .diff li.diff-block-info {
        background: none repeat scroll 0 0 var(--diff-block-info)
    }

    .diff del,.diff ins,.diff span {
        font-family: monospace
    }

    .diff {
        max-height: calc(100vh - 54px);
        overflow-y: auto
    }

    .report-diff .diff {
        max-height: 75vh
    }

    .report-diff form {
        display: inline
    }

    .diff ul {
        background-color: var(--content-background-color);
        color: var(--overall-text-color)
    }

    .diff {
        border: 2px solid var(--content-border-color)
    }

    .diff li:hover {
        background: var(--highlight-background-color)
    }

    #ace-editor.ace-tm {
        background-color:#181a1b;
        color: #e8e6e3;
        border-color: #43494c
    }

    #ace-editor.ace-tm .ace_indent-guide {
        opacity: .1
    }

    #ace-editor.ace-tm .ace_scroller {
        background-color: #181a1b
    }

        #ace-editor.ace-tm .ace_gutter {
            background: #202325;
            color: #c8c3bc
        }

        #ace-editor.ace-tm .ace_print-margin {
            display: none!important;
            visibility: hidden!important
        }

        #ace-editor.ace-tm .ace_fold {
            background-color: #161d84
        }

        #ace-editor.ace-tm .ace_cursor {
            color: #e8e6e3
        }

        #ace-editor.ace-tm .ace_invisible {
            color: #c0bab2
        }

        #ace-editor.ace-tm .ace_storage,#ace-editor.ace-tm .ace_keyword {
            color: #337dff
        }

        #ace-editor.ace-tm .ace_constant {
            color: #f94448
        }

        #ace-editor.ace-tm .ace_constant.ace_buildin {
            color: #5e4ef6
        }

        #ace-editor.ace-tm .ace_constant.ace_language {
            color: #5a94f6
        }

        #ace-editor.ace-tm .ace_constant.ace_library {
            color: #65f96d
        }

        #ace-editor.ace-tm .ace_invalid {
            background-color: #cc00001a;
            color: #ff1a1a
        }

        #ace-editor.ace-tm .ace_support.ace_function {
            color: #99b0c9
        }

        #ace-editor.ace-tm .ace_support.ace_constant {
            color: #65f96d
        }

        #ace-editor.ace-tm .ace_support.ace_type,#ace-editor.ace-tm .ace_support.ace_class {
            color: #6f9cde
        }

        #ace-editor.ace-tm .ace_keyword.ace_operator {
            color: #9d9487
        }

        #ace-editor.ace-tm .ace_string {
            color: #83fb88
        }

        #ace-editor.ace-tm .ace_comment {
            color: #7fb89c
        }

        #ace-editor.ace-tm .ace_comment.ace_doc {
            color: #339cff
        }

        #ace-editor.ace-tm .ace_comment.ace_doc.ace_tag {
            color: #84a6c1
        }

        #ace-editor.ace-tm .ace_constant.ace_numeric {
            color: #5190ff
        }

        #ace-editor.ace-tm .ace_variable {
            color: #70c0d0
        }

        #ace-editor.ace-tm .ace_xml-pe {
            color: #aaa398
        }

        #ace-editor.ace-tm .ace_entity.ace_name.ace_function {
            color: #6ba1ff
        }

        #ace-editor.ace-tm .ace_heading {
            color: #1e6fff
        }

        #ace-editor.ace-tm .ace_list {
            color: #f94cd2
        }

        #ace-editor.ace-tm .ace_meta.ace_tag {
            color: #77b0ff
        }

        #ace-editor.ace-tm .ace_string.ace_regex {
            color: #ff1a1a
        }

        #ace-editor.ace-tm .ace_marker-layer .ace_selection {
            background: #2d3133
        }

        #ace-editor.ace-tm.ace_multiselect .ace_selection.ace_start {
            box-shadow: 0 0 3px #181a1b
        }

        #ace-editor.ace-tm .ace_marker-layer .ace_step {
            background: #989900
        }

        #ace-editor.ace-tm .ace_marker-layer .ace_stack {
            background: #5d8817
        }

        #ace-editor.ace-tm .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid #42474a
        }

        #ace-editor.ace-tm .ace_marker-layer .ace_active-line {
            background: #00000012
        }

        #ace-editor.ace-tm .ace_gutter-active-line {
            background-color: #2c2f31
        }

    #ace-editor.ace-tm .ace_marker-layer .ace_selected-word {
        background: #191c1d;
        border: 1px solid #0a0a6e
    }

    .code-container pre.prettyprint {
        border:1px solid #52585c
    }

    .prettyprint li.L1,.prettyprint li.L3,.prettyprint li.L5,.prettyprint li.L7,.prettyprint li.L9 {
        background: #222426
    }

        .prettyprint .pln {
            color: #e8e6e3
        }

        .prettyprint .str {
            color: #6dff6d
        }

        .prettyprint .kwd {
            color: #7aabff
        }

        .prettyprint .com {
            color: #ff6d6d
        }

        .prettyprint .typ {
            color: #ff85ff
        }

        .prettyprint .lit {
            color: #85ffff
        }

        .prettyprint .clo,.prettyprint .opn,.prettyprint .pun {
            color: #ffff85
        }

        .prettyprint .tag {
            color: #7aabff
        }

        .prettyprint .atn {
            color: #ff85ff
        }

        .prettyprint .atv {
            color: #6dff6d
        }

        .prettyprint .var,.prettyprint .dec {
            color: #ff85ff
        }

    .prettyprint .fun {
        color: red
    }

    .ea-content,.ea-callout {
        margin: 0!important
    }

    #about-user .ethical-ads {
        margin: 0 calc(-1em - 5px)
    }

    @media screen and (max-width: 960px) {
        #about-user .ethical-ads {
            margin:0 -1.2vw
        }
    }

    @media screen and (max-width: 400px) {
        #about-user .ethical-ads {
            margin:0 -1em
        }
    }

    #user-show-ea+.report-link {
        top: 65px
    }

    .expander {
        cursor: pointer;
        display: block;
        color: var(--expander-color);
        border-radius: 3px;
        background-color: var(--expander-background-color);
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        inset-inline-end: -22px;
        bottom: 0
    }

    .expanded {
        overflow: auto
    }

    .collapsed {
        overflow: hidden
    }

    .comment {
        margin-bottom: 20px
    }

    .comment-entry {
        width: 100%;
        height: 10em
    }

    .discussion-meta,.comment-meta,.notification-meta {
        display: flex;
        align-items: flex-end
    }

    .discussion-meta,.notification-meta {
        font-size: 11px
    }

    .comment-meta {
        font-size: smaller;
        margin-bottom: 2px
    }

    .comment-meta-item-main {
        font-size: medium;
        font-weight: 700
    }

    .comment-meta-item+.comment-meta-item {
        margin-left: 15px
    }

    .discussion-meta-item,.notification-meta-item {
        flex: 1;
        text-align: left
    }

    .discussion-meta-item:not(:first-child) {
        margin-left: 8px
    }

    .discussion-meta-item:not(:last-child) {
        margin-right: 8px
    }

    .discussion-meta-item:last-child {
        text-align: right
    }

    .comment-meta-spacer {
        flex: 1
    }

    .post-reply {
        margin-top: 20px
    }

    .post-reply h3,.edit-comment-form h3 {
        margin-bottom: 0
    }

    .post-reply input[type=submit],.edit-comment-form input[type=submit] {
        margin-top: 5px
    }

    .discussion-up-level {
        font-size: smaller;
        margin-top: 0
    }

    .edit-comment-form {
        display: none
    }

    .edit-comment-mode .edit-comment-form {
        display: block
    }

    .edit-comment-mode .user-content,.edit-comment-mode .comment-meta {
        display: none
    }

    .discussion-rating {
        margin-top: 10px
    }

    .discussion-list,.notification-list {
        padding-bottom: 0
    }

    .discussion-list.discussion-list-logged-in {
        padding: 0;
        overflow: hidden
    }

    .discussion-list.discussion-list-logged-in .discussion-list-container {
        box-sizing: border-box;
        margin: 0;
        padding-left: clamp(1rem, 2vw, 1.5rem);
        padding-right: clamp(1rem, 2vw, 1.5rem);
        border-radius: 0
    }

    .discussion-list.discussion-list-logged-in .discussion-list-container:first-child {
        border-top-left-radius: var(--border-radius-medium);
        border-top-right-radius: var(--border-radius-medium)
    }

    .discussion-list.discussion-list-logged-in .discussion-list-container:last-child {
        border-bottom-left-radius: var(--border-radius-medium);
        border-bottom-right-radius: var(--border-radius-medium)
    }

    .discussion-list-item,.notification-list-item {
        padding-top: 10px;
        border-top: 1px solid var(--content-separator-color)
    }

    .discussion-list.discussion-list-logged-in .discussion-list-item {
        border-top-color: color-mix(in srgb, var(--content-separator-color) 72%, var(--link-color) 28%)
    }

    .discussion-list-container:first-child .discussion-list-item {
        border-top: 0
    }

    .discussion-list-logged-in .discussion-read {
        background-color: var(--inactive-item-background-color);
        margin-left: 0;
        margin-right: 0
    }

    .discussion-list-logged-in .discussion-unread,
    .discussion-list-logged-in .discussion-not-read,
    .discussion-list-logged-in .discussion-list-container:not(.discussion-read) {
        background-color: color-mix(in srgb, var(--content-background-color) 92%, #0054e8 8%);
        box-shadow: inset 3px 0 0 var(--link-color)
    }

    .discussion-list-logged-in .discussion-unread .discussion-title,
    .discussion-list-logged-in .discussion-not-read .discussion-title,
    .discussion-list-logged-in .discussion-list-container:not(.discussion-read) .discussion-title {
        font-weight: 650
    }

    .notification-read {
        background-color: var(--inactive-item-background-color);
        margin-left: -16px;
        margin-right: -16px;
        padding-left: 16px;
        padding-right: 16px
    }

    .script-discussion-list .discussion-list-item:last-child {
        border-bottom: 1px solid var(--content-separator-color)
    }

    a.discussion-title,.notification-list-item a {
        display: block;
        text-decoration: none;
        color: var(--overall-text-color);
        padding: 4px 0 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .discussion-title,.notification-list-item a {
        vertical-align: middle
    }

    .discussion-title:hover,.notification-list-item a {
        color: var(--texty-link-visited-color)
    }

    .rating-icon,.badge-deleted {
        border: 2px solid black;
        border-radius: 5px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 800;
        padding: 2px 5px;
        margin-right: 5px;
        display: inline-block;
        text-align: center;
        min-width: 45px;
        position: relative;
        top: -1px
    }

    .rating-icon-good {
        border-color: var(--rating-icon-good-border-color);
        background-color: var(--rating-icon-good-background-color);
        color: var(--rating-icon-good-color)
    }

    .rating-icon-ok {
        border-color: var(--rating-icon-ok-border-color);
        background-color: var(--rating-icon-ok-background-color);
        color: var(--rating-icon-ok-color)
    }

    .rating-icon-bad {
        border-color: var(--rating-icon-bad-border-color);
        background-color: var(--rating-icon-bad-background-color);
        color: var(--rating-icon-bad-color)
    }

    .discussion-meta-item-script-name {
        overflow: hidden
    }

    .discussion-meta-item-script-name a {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block
    }

    .comment .user-content>*:first-child {
        margin-top: 0
    }

    .comment-screenshot-control {
        font-size: smaller;
        padding: .5em 0
    }

    .discussion-header,.discussion-list-header,.notification-list-header {
        display: flex;
        margin-top: 30px;
        margin-bottom: 20px
    }

    @media screen and (max-width: 400px) {
        .discussion-header,.discussion-list-header,.notification-list-header,.user-list-header {
            margin-top:15px;
            margin-bottom: 10px
        }
    }

    .discussion-header-no-script {
        margin-top: 16px
    }

    .discussion-header>*:first-child,.discussion-list-header h2,.notification-list-header>*:first-child {
        flex: 1;
        margin: 0!important
    }

    .discussion-header h2,.discussion-header .discussion-up-level,.notification-list-header h2 {
        margin: 0
    }

    .discussion-header .badge {
        vertical-align: middle
    }

    .discussion-actions,.notification-actions {
        font-size: smaller
    }

    .discussion-subscribed .discussion-subscribe,.discussion-not-subscribed .discussion-unsubscribe {
        display: none
    }

    .post-discussion label:not(.radio-label),.post-reply label:not(.radio-label),.post-discussion .form-note,.post-reply .form-note {
        font-size: smaller
    }

    #main-header {
        background-color: #2d2260;
        background-image: linear-gradient(180deg, #2d2260, #21194a);
        box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.6);
        padding: .25em 0;
    }


    #main-header .width-constraint {
        padding: 0 0 .25em;
        position: relative
    }

    #site-name img {
        vertical-align: bottom
    }

    #site-name-text {
        display: inline-block;
        vertical-align: top
    }

    #site-name-text h1 {
        line-height: 1.1em
    }

    #main-header,#main-header a,#main-header a:visited,#main-header a:active {
        color: #ede9fe
    }

    #main-header h1 {
        font-size: 72px;
        margin: 0;
        letter-spacing: -2px
    }

    #main-header h1 a {
        text-decoration: none
    }

    #main-header .subtitle {
        margin: -8px 0 0 10px;
        font-size: .7em;
        text-shadow: -1px -1px 0px #301c7a,1px -1px 0px #301c7a,-1px 1px 0px #301c7a,1px 1px 0px #301c7a
    }

    #site-nav>nav,#nav-user-info {
        text-align: end;
        position: absolute;
        right: 0
    }

    #site-nav>nav {
        bottom: 0
    }

    #nav-user-info {
        top: 0
    }

    #site-nav>nav a:hover {
        color: #ede9fe
    }

    #site-nav>nav {
        padding: 0
    }

    #site-nav>nav>li {
        list-style-type: none;
        display: inline-block
    }

    #site-nav>nav>li+li {
        margin-left: .5em
    }

    #script-search,.language-selector {
        display: inline
    }

    #nav-user-info {
        font-size: small
    }

    #nav-user-info select,#nav-user-info input {
        font-size: 11px
    }

    nav nav {
        position: absolute;
        right: 0;
        background-color: #20194a;
        min-width: 100%;
        display: none;
        padding: 5px 0;
        z-index: 10
    }

    nav nav li {
        white-space: nowrap;
        margin: 0
    }

    nav nav li a {
        display: block;
        padding: 5px 15px
    }

    #site-nav nav nav li.gf-favorites-nav-shortcut {
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(255, 255, 255, .18)
    }

    #site-nav nav nav li.gf-favorites-nav-shortcut a::before {
        content: "★";
        display: inline-block;
        margin-inline-end: .48em;
        color: #ffd166
    }

    nav a:hover+nav,nav nav:hover,nav a:focus+nav {
        display: block
    }

    .with-submenu {
        position: relative;
        padding-right: 15px
    }

    nav .with-submenu>a:after {
        content: " ▾"
    }

    @media screen and (max-width: 920px) {
        #site-name img {
            max-width:96px;
            max-height: 96px;
            width: 12%;
            height: 12%
        }

        #site-name-text {
            margin-top: 1.15vw;
            margin-bottom: 1.15vw
        }

        #main-header h1 {
            font-size: 8.3vw
        }

        #main-header .subtitle {
            margin: -.8em 0 0 10px;
            font-size: 2vw
        }

        #site-nav {
            margin-top: -1vw
        }

        #site-nav>nav,#nav-user-info {
            display: block;
            position: unset;
            right: unset;
            padding-top: .3em
        }

        #site-nav>nav {
            bottom: unset
        }

        #nav-user-info {
            top: unset;
            font-size: unset;
            width: 100%
        }

        #nav-user-info .sign-in-link {
            padding-right: .7em
        }

        #script-search,.language-selector {
            display: unset
        }
    }

    #mobile-nav {
        display: none
    }

    .mobile-nav-opener {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 8.3vw;
        padding: 0 2vw
    }

    #mobile-nav .collapsed {
        display: none
    }

    #mobile-nav nav {
        text-align: end;
        position: absolute;
        top: calc(100% + 4px);
        right: calc((100vw - 100%) / -2);
        width: min(22rem, calc(100vw - 0.8rem));
        max-width: calc(100vw - 0.8rem);
        max-height: calc(100vh - 0.75rem);
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #22194a;
        background-image: linear-gradient(180deg, #22194a, #21194a);
        z-index: 1000;
        border-radius: 0 0 0 5px;
        font-size: 24px
    }

    #mobile-nav nav li {
        list-style-type: none
    }

    #mobile-nav nav li>a {
        display: block;
        padding: 10px 15px
    }

    #mobile-nav nav select {
        margin: 10px 15px;
        width: calc(100% - 30px);
        max-width: calc(100% - 30px);
        font: -webkit-small-control;
        box-sizing: border-box
    }

    #mobile-nav nav select.language-selector-locale {
        font-size: .92rem;
        min-height: 2rem;
        padding: .15rem .35rem;
    }

    #mobile-nav nav li.multi-link-nav {
        padding: 10px 15px
    }

    #mobile-nav nav li.multi-link-nav > a {
        display: inline;
        padding: 0
    }

    .gf-mobile-sign-out-icon {
        display: inline-flex !important;
        margin-top: 0;
        padding: 0 !important;
    }

    .gf-user-icon.gf-mobile-sign-out-icon svg {
        stroke-width: 3;
    }

    #mobile-nav .gf-user-icon.gf-mobile-edit-icon svg {
        stroke-width: 3;
    }

    #gf-mobile-primary-nav {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        padding: 0.7rem 0.85rem 0.55rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    #gf-mobile-primary-nav > a {
        display: inline-flex !important;
        align-items: center;
        justify-content: flex-start;
        flex: 0 1 auto;
        min-width: 0;
        padding: 0 !important;
        color: inherit;
        text-decoration: none;
        font-size: 1.16rem;
        font-weight: 700;
        line-height: 1.2;
        min-height: 50px;
    }

    #gf-mobile-primary-nav-toggle {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        color: inherit;
        font-size: 1.32rem;
        font-weight: 700;
        cursor: pointer;
        flex: none;
        margin-left: auto;
    }

    #gf-mobile-secondary-nav {
        padding: 0 0.85rem 0.45rem;
    }

    #gf-mobile-secondary-nav.collapsed {
        display: none;
    }

    .gf-mobile-secondary-divider {
        display: none;
    }

    #gf-mobile-secondary-nav > li > a {
        display: block !important;
        font-size: 1.04rem;
        line-height: 1.2;
    }

    #gf-mobile-user-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        padding: 0.2rem 0 0;
    }

    #gf-mobile-user-row .user-profile-link a {
        display: inline-block;
        padding: 0;
        font-weight: 700;
    }

    #gf-mobile-user-meta {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        min-width: 0;
    }

    #gf-mobile-user-actions {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        flex: none;
    }

    #gf-mobile-user-actions .gf-user-icon {
        width: 30px;
        height: 30px;
    }

    #gf-mobile-user-actions .gf-user-icon[data-panel] {
        cursor: pointer;
    }

    .gf-mobile-user-panel {
        position: static;
        display: none;
        opacity: 1;
        transform: none;
        min-width: 0;
        margin-top: 0.7rem;
    }

    .gf-mobile-user-panel.active {
        display: block !important;
        position: relative;
        z-index: 1;
    }

    .gf-mobile-user-panel a {
        display: block !important;
        padding: 0.75em 1.25em !important;
    }

    @media screen and (max-width: 920px) {
        #site-nav {
            display:none
        }

        #main-header,
        #main-header .width-constraint,
        #mobile-nav {
            overflow: visible;
        }

        #mobile-nav {
            display: block
        }

        .width-constraint {
            margin-inline: auto;
            padding-inline: 0;
            width: calc(100% - 0.7rem);
        }

        #main-header .width-constraint {
            width: calc(100% - 0.8rem);
            padding-inline: 0.4rem;
        }
    }

    @media screen and (max-width: 400px) {
        #site-name {
            margin-left:1em
        }
    }

    #test-require-result-ok,#test-require-result-not-ok {
        display: none;
        font-weight: 700
    }

    #test-require-result-ok {
        color: green
    }

    #test-require-result-not-ok {
        color: red
    }

    #home-script-nav {
        max-width: 700px;
        margin: 0 auto 15px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--content-border-color)
    }

    .home-search input {
        font-size: large
    }

    .home-search input[type=search] {
        width: 100%
    }

    #home-top-sites {
        overflow: hidden;
        margin-top: 5px
    }

    #home-top-sites a {
        margin: 0 5px
    }

    #home-step-1,#home-step-2,#home-step-3 {
        overflow: auto
    }

    #home-step-1 figure {
        float: right;
        max-width: 50%;
        margin-inline-end:10px;margin-top: 0
    }

    #home-step-2 figure {
        float: left;
        max-width: 50%;
        margin-inline-start:7px;margin-top: 0
    }

    #home-step-2 li {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    @media screen and (max-width: 680px) {
        #home-step-1 figure,#home-step-2 figure,#home-step-3 figure {
            float:unset;
            max-width: unset;
            width: fit-content;
            margin: 0 auto
        }

        [id^=home-step-] figure img {
            width: 100%;
            height: auto
        }
    }

    .super-title {
        text-align: center
    }

    .browser-list {
        display: none
    }

    #desktop-browser-list {
        display: block
    }

    .browser-list-selector:not(.browser-list-selector-active) {
        text-decoration: underline;
        cursor: pointer
    }

    .browser-list-selector-active {
        font-weight: 700
    }

    .browser-list-selector:not(:last-child) {
        margin-right: 1em
    }

    .highlight {
        background-color: rgba(253, 224, 71, 0.28)
    }

    #install-area {
        margin-bottom: 1em;
        display: flex;
        align-items: center;
        flex-wrap: wrap
    }

    #install-area .install-link:hover,#install-area .install-link:focus,#install-area .install-help-link:hover,#install-area .install-help-link:focus {
        transition: box-shadow .2s;
        box-shadow: 0 8px 16px #0003,0 6px 20px #00000030
    }

    .install-link,.install-link:visited,.install-link:active,.install-link:hover,.install-help-link {
        transition: box-shadow .2s;
        display: inline-block;
        background-color: #166534;
        padding: .5em 1em;
        color: #ecfdf5;
        text-decoration: none;
        border-radius: .25rem 0 0 .25rem
    }

    .install-help-link,.install-help-link:visited,.install-help-link:active,.install-help-link:hover {
        background-color: #22c55e;
        color: #f0fdf4;
        border-radius: 0 .25rem .25rem 0;
        text-decoration: none;
    }

    .installation-instructions-modal-content-firefox,.installation-instructions-modal-content-chrome,.installation-instructions-modal-content-opera,.installation-instructions-modal-content-safari,.installation-instructions-modal-content-edge,.installation-instructions-modal-content-other {
        display: none
    }

    .installation-instructions-modal-firefox .installation-instructions-modal-content-firefox,.installation-instructions-modal-chrome .installation-instructions-modal-content-chrome,.installation-instructions-modal-opera .installation-instructions-modal-content-opera,.installation-instructions-modal-safari .installation-instructions-modal-content-safari,.installation-instructions-modal-edge .installation-instructions-modal-content-edge,.installation-instructions-modal-other .installation-instructions-modal-content-other {
        display: block
    }

    .installation-instructions-modal-content-bypass,.list-option-groups {
        font-size: smaller
    }

    .list-option-group {
        margin-bottom: 1em
    }

    .list-option-group ul {
        margin: .5em 0 0;
        list-style-type: none;
        padding: 1em 0;
        box-shadow: 0 0 5px var(--content-box-shadow-color);
        border: 1px solid var(--content-border-color);
        border-radius: 5px;
        background-color: var(--content-background-color)
    }

    .list-option-group li,
    .list-option-group a {
        box-sizing: border-box;
        max-width: calc(100% + 4px);
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word
    }

    .list-option-group[data-gfplus-collapsed="true"] > ul > :not(.list-current) {
        display: none;
    }

    .list-option-group .gf-list-option-toggle-row {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 2;
        height: 14px;
        margin-top: -14px;
        margin-bottom: .55rem;
    }

    .sidebar button.gf-list-option-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        min-width: 28px;
        height: 28px;
        min-height: 28px;
        margin: 0;
        padding: 0;
        border: 1px solid var(--content-border-color);
        border-radius: 50%;
        background: var(--content-background-color);
        color: var(--overall-text-color) !important;
        box-shadow: none !important;
        cursor: pointer;
        transform: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base), transform var(--transition-base);
    }

    .sidebar button.gf-list-option-toggle:hover,
    .sidebar button.gf-list-option-toggle:focus-visible {
        background: var(--inactive-item-background-color);
        border-color: var(--link-color);
        color: var(--link-color) !important;
        box-shadow: none !important;
        outline: none;
        transform: scale(1.06) !important;
    }

    .sidebar button.gf-list-option-toggle:focus {
        box-shadow: none !important;
        outline: none;
    }

    .sidebar button.gf-list-option-toggle svg {
        width: 15px;
        height: 15px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .list-option-group a {
        padding: .35em 1em;
        display: block
    }

    .list-option-group a:hover,.list-option-group a:focus {
        background: linear-gradient(var(--list-option-hover-background-color-gradient-1),var(--list-option-hover-background-color-gradient-2));
        text-decoration: none;
        box-shadow: inset 0 -1px var(--list-option-hover-box-shadow-top),inset 0 1px var(--list-option-hover-box-shadow-bottom)
    }

    .list-option-group .list-current {
        border-left: 7px solid var(--link-color);
        color: #f1f5f9;
        font-weight: 600;
        box-shadow: inset 0 1px rgba(120, 169, 255, .12), inset 0 -1px rgba(0, 0, 0, .24);
        margin: 0 0 0 -4px;
        padding: .4em 1em .4em calc(1em - 3px);
        background: linear-gradient(90deg, rgba(120, 169, 255, .14), rgba(120, 169, 255, .04))
    }

    @media screen and (min-width: 440px) and (max-width: 960px) {
        .list-option-group a,.list-option-group .list-current {
            padding-left:1.2vw;
            padding-right: 1.2vw
        }
    }

    .list-option-button {
        display: block;
        background-color: var(--list-option-button-background-color);
        text-align: center;
        text-decoration: none;
        color: var(--list-option-button-color)!important;
        border: 1px solid var(--list-option-button-border-color);
        padding: .5em;
        font-weight: 700
    }

    .list-option-button:hover,.list-option-button:focus {
        background: linear-gradient(var(--list-option-button-background-color-gradient-1),var(--list-option-button-background-color-gradient-2));
        text-decoration: none
    }

    .list-option:not(.list-current) select {
        width: calc(100% - 1.4em + 3px);
        margin: .4em 1em .4em calc(1em - 3px)
    }

    .list-option.list-current select,.log-table {
        width: 100%
    }

    .log-table th {
        text-align: left
    }

    .log-table td,.log-table th {
        padding: 0 5px
    }

    .log-table td .possibly-long-text {
        max-width: 500px;
        overflow-wrap: break-word
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content {
        display: table;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content thead {
        display: table-header-group;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content tbody {
        display: table-row-group;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content tr {
        display: table-row;
    }

    html[data-gfplus-moderator-actions-page] table.log-table.text-content th,
    html[data-gfplus-moderator-actions-page] table.log-table.text-content td {
        display: table-cell;
        vertical-align: top;
    }

    @media screen and (max-width: 820px) {
        html[data-gfplus-moderator-actions-page] .width-constraint {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: .25rem;
        }

        html[data-gfplus-moderator-actions-page] .width-constraint > .log-table {
            min-width: 48rem;
        }
    }

    .modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0009;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100
    }

    .modal__container {
        background-color: var(--content-background-color);
        padding: 30px;
        max-width: 500px;
        max-height: 100vh;
        border-radius: var(--border-radius-small);
        overflow-y: auto;
        box-sizing: border-box;
        border: 1px solid var(--content-border-color);
        box-shadow: var(--shadow-soft)
    }

    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .modal__title {
        margin-top: 0!important;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.25;
        box-sizing: border-box
    }

    .modal__close {
        background: transparent;
        border: 0
    }

    .modal__header .modal__close:before {
        content: "✕"
    }

    .modal__content {
        margin-bottom: 2rem
    }

    .modal__content q {
        font-style: italic
    }

    .modal__btn {
        font-size: .875rem;
        padding: .5rem 1rem;
        background-color: rgba(148, 163, 184, .16);
        color: var(--overall-text-color);
        border-radius: .25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0 0 0 .5rem;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform .25s ease-out;
        transition: transform .25s ease-out;
        transition: transform .25s ease-out,-webkit-transform .25s ease-out
    }

    .modal__btn:focus,.modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05)
    }

    .modal__btn-primary {
        background-color: #22c55e;
        color: #052e16
    }

    .modal__footer {
        text-align: right
    }

    @keyframes mmfadeIn {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    @keyframes mmfadeOut {
        0% {
            opacity: 1
        }

        to {
            opacity: 0
        }
    }

    @keyframes mmslideIn {
        0% {
            transform: translateY(15%)
        }

        to {
            transform: translateY(0)
        }
    }

    @keyframes mmslideOut {
        0% {
            transform: translateY(0)
        }

        to {
            transform: translateY(-10%)
        }
    }

    .micromodal-slide {
        display: none
    }

    .micromodal-slide.is-open {
        display: block
    }

    .micromodal-slide[aria-hidden=false] .modal__overlay {
        animation: mmfadeIn .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide[aria-hidden=false] .modal__container {
        animation: mmslideIn .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide[aria-hidden=true] .modal__overlay {
        animation: mmfadeOut .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide[aria-hidden=true] .modal__container {
        animation: mmslideOut .3s cubic-bezier(0,0,.2,1)
    }

    .micromodal-slide .modal__container,.micromodal-slide .modal__overlay {
        will-change: transform
    }

    .notification-widget {
        display: inline-block;
        width: 1em;
        height: 1em;
        text-align: center;
        line-height: 1em;
        padding: 2px;
        background-color: #0ea5e9;
        border-radius: 50%;
        color: #0f172a;
        text-decoration: none
    }

    .notification-type-consecutive_bad_ratings a {
        white-space: normal
    }

    .post-install {
        margin: 1em 0;
        border-radius: 2px;
        padding: 5px;
        max-width: 600px;
        display: none;
        align-items: center;
        background-color: rgba(14, 165, 233, 0.18);
        border: 1px solid rgba(14, 165, 233, 0.35);
        position: relative
    }

    .post-install-label {
        font-size: xx-small;
        position: absolute;
        top: -2px;
        left: 2px;
        opacity: .5
    }

    .post-install-text {
        text-align: center;
        align-items: center;
        flex: 1
    }

    .post-install-text p {
        margin: 0;
        padding: 0
    }

    .post-install-button {
        text-align: center;
        margin-left: 10px;
        white-space: nowrap
    }

    .preview-results {
        border: 1px solid var(--content-border-color);
        border-left: 1px solid var(--content-border-color) !important;
        border-radius: 0 0 var(--border-radius-small) var(--border-radius-small);
        background: var(--content-background-color);
        overflow: auto;
        box-sizing: border-box;
        margin: 0;
        padding: 16px
    }

    .previewable .preview-results.user-content {
        border-left: 1px solid var(--content-border-color) !important;
        border-radius: 0 0 var(--border-radius-small) var(--border-radius-small);
        background: var(--content-background-color);
    }

    .preview-results>p:first-child {
        margin-top: 0
    }

    .preview-results>p:last-child {
        margin-bottom: 0
    }

    .previewable textarea {
        margin: 0
    }

    .previewable .tabs {
        margin-top: 10px;
        margin-bottom: -4px
    }

    .gf-editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .3rem;
        padding: .42rem;
        margin: 0;
        background: color-mix(in srgb, var(--content-background-color) 84%, #78a9ff 16%);
        border: 1px solid var(--content-border-color);
        border-bottom: 0;
        border-radius: 0 10px 0 0;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .06), 0 10px 22px rgba(0, 0, 0, .14)
    }

    .gf-editor-toolbar + textarea,
    .gf-editor-toolbar + .field_with_errors textarea,
    .gf-editor-toolbar ~ .preview-results {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button {
        all: unset;
        box-sizing: border-box !important;
        inline-size: 34px !important;
        block-size: 34px !important;
        min-inline-size: 34px !important;
        min-block-size: 34px !important;
        position: relative !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 1px solid rgba(120, 169, 255, .2) !important;
        border-radius: 9px !important;
        background: rgba(11, 18, 32, .72) !important;
        color: var(--overall-text-color) !important;
        cursor: pointer !important;
        line-height: 1 !important;
        box-shadow: none !important;
        transform: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base) !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button:hover,
    .gf-editor-toolbar button.gf-editor-toolbar-button:focus-visible {
        background: rgba(120, 169, 255, .16) !important;
        border-color: rgba(120, 169, 255, .44) !important;
        color: var(--link-color) !important;
        transform: none !important;
        box-shadow: 0 7px 16px rgba(0, 0, 0, .2) !important;
        outline: none !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button:active {
        transform: none !important;
        box-shadow: none !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button svg {
        inline-size: 17px;
        block-size: 17px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round
    }

    .gf-editor-toolbar button.gf-editor-toolbar-button--text {
        font-size: .8rem !important;
        font-weight: 800;
        font-family: var(--font-family-base);
    }

    .gf-editor-toolbar-color-tool {
        display: inline-flex;
        align-items: center;
        position: relative;
        margin: 0;
    }

    .gf-editor-toolbar-heading-tool {
        display: inline-flex;
        align-items: center;
        margin: 0;
    }

    .gf-editor-toolbar-heading-tool button.gf-editor-toolbar-button {
        inline-size: 31px !important;
        min-inline-size: 31px !important;
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
        border-inline-end: 0 !important;
    }

    .gf-editor-toolbar select.gf-editor-toolbar-heading-select {
        appearance: none !important;
        -webkit-appearance: none !important;
        box-sizing: border-box !important;
        inline-size: 42px !important;
        block-size: 34px !important;
        min-inline-size: 42px !important;
        min-block-size: 34px !important;
        padding: 0 16px 0 8px !important;
        margin: 0 !important;
        border: 1px solid rgba(120, 169, 255, .2) !important;
        border-start-start-radius: 0 !important;
        border-end-start-radius: 0 !important;
        border-start-end-radius: 9px !important;
        border-end-end-radius: 9px !important;
        background: rgba(11, 18, 32, .58) !important;
        color: var(--overall-text-color) !important;
        font: 800 .75rem/1 var(--font-family-base) !important;
        cursor: pointer !important;
        box-shadow: none !important;
        background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%) !important;
        background-position: calc(100% - 10px) 14px, calc(100% - 6px) 14px !important;
        background-size: 4px 4px, 4px 4px !important;
        background-repeat: no-repeat !important;
    }

    .gf-editor-toolbar select.gf-editor-toolbar-heading-select:hover,
    .gf-editor-toolbar select.gf-editor-toolbar-heading-select:focus-visible {
        background-color: rgba(120, 169, 255, .14) !important;
        border-color: rgba(120, 169, 255, .44) !important;
        color: var(--link-color) !important;
        outline: none !important;
    }

    .gf-editor-toolbar-color-tool button.gf-editor-toolbar-button {
        inline-size: 31px !important;
        min-inline-size: 31px !important;
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
        border-inline-end: 0 !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button {
        all: unset;
        box-sizing: border-box !important;
        inline-size: 20px !important;
        block-size: 34px !important;
        min-inline-size: 20px !important;
        min-block-size: 34px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 1px solid rgba(120, 169, 255, .2) !important;
        border-start-start-radius: 0 !important;
        border-end-start-radius: 0 !important;
        border-start-end-radius: 9px !important;
        border-end-end-radius: 9px !important;
        background: rgba(11, 18, 32, .58) !important;
        cursor: pointer !important;
        box-shadow: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base) !important;
    }

    .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:hover,
    .gf-editor-toolbar button.gf-editor-toolbar-color-swatch-button:focus-visible,
    .gf-editor-toolbar-color-tool:hover button.gf-editor-toolbar-color-swatch-button,
    .gf-editor-toolbar-color-tool:focus-within button.gf-editor-toolbar-color-swatch-button {
        background: rgba(120, 169, 255, .14) !important;
        border-color: rgba(120, 169, 255, .44) !important;
        transform: none !important;
        outline: none !important;
        box-shadow: 0 7px 16px rgba(0, 0, 0, .16) !important;
    }

    .gf-editor-toolbar-color-input {
        position: absolute !important;
        inset-block-start: 0 !important;
        inset-inline-end: 0 !important;
        inline-size: 20px !important;
        block-size: 34px !important;
        opacity: 0 !important;
        cursor: pointer !important;
        pointer-events: auto !important;
        z-index: 2 !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
    }

    .gf-editor-toolbar-color-swatch {
        inline-size: 12px;
        block-size: 22px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, .24);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .35);
    }

    #report_explanation {
        width: 100%;
        height: 10em
    }

    .reportable {
        position: relative
    }

    .report-link-abs {
        position: absolute;
        top: 0;
        right: 0;
        font-size: smaller;
        margin-right: 16px;
        margin-top: 8px
    }

    .report-list-item:not(:last-child) {
        padding-bottom: 20px;
        border-bottom: 1px solid gray;
        margin-bottom: 20px
    }

    .report-list-item .inline-form {
        margin-right: 5px
    }

    .report-resolution-options {
        display: inline-block;
        vertical-align: top;
        min-width: 30%
    }

    .report-resolution-options+.report-resolution-options {
        margin-left: 1em
    }

    .report-resolution-options input[type=submit] {
        margin-top: .5em
    }

    .report-resolution-options textarea {
        width: 100%
    }

    .report-screenshot-control {
        font-size: smaller;
        padding: .5em 0
    }

    .unauthorized-code-comparison th {
        text-align: left
    }

    .unauthorized-code-comparison th,.unauthorized-code-comparison td {
        padding-right: 1em
    }

    body:lang(he),body:lang(ar),body:lang(ug),body:lang(ckb) {
        direction: rtl
    }

    :not(:lang(he)):not(:lang(ar)):not(:lang(ug)):not(:lang(ckb)) {
        direction: ltr
    }

    body:lang(he) #main-header,body:lang(ar) #main-header,body:lang(ug) #main-header,body:lang(ckb) #main-header {
        direction: ltr
    }

    :lang(ar) #home-step-1 figure,:lang(he) #home-step-1 figure,:lang(ug) #home-step-1 figure,:lang(ckb) #home-step-1 figure {
        float: left
    }

    :lang(ar) #home-step-2 figure,:lang(he) #home-step-2 figure,:lang(ug) #home-step-2 figure,:lang(ckb) #home-step-2 figure {
        float: right
    }

    #script-info {
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        clear: left;
        background-color: var(--content-background-color);
        margin: 1.5em 0 0;
        box-shadow: var(--shadow-soft);
        display: grid;
        gap: 1.1rem;
        overflow-x: hidden;
        overflow-wrap: anywhere;
        word-break: break-word;
        transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base)
    }

    #script-info>* {
        min-width: 0
    }

    #script-info:hover {
        border-color: var(--container-glow-stroke);
        box-shadow: var(--shadow-hover)
    }

    #script-content {
        margin-top: 1.5em
    }

    #script-content>*:first-child {
        margin-top: 0
    }

    #script-info header h2 {
        margin: .2em 0 0;
        font-size: clamp(1.75rem, 2.8vw, 2.4rem);
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: .01em;
        overflow-wrap: anywhere
    }

    #script-description {
        margin: 0
    }

    #version-note,#reported-note,#deleted-note {
        font-style: italic;
        background-color: var(--alert-background-color);
        border: 2px dotted var(--alert-border-color);
        color: var(--alert-text-color);
        padding: .5em
    }

    #script-feedback-suggestion {
        margin: .75em 0
    }

    #script-content h3 {
        margin-top: 30px
    }

    .checkup-list {
        padding-inline-start:1em}

    .checkup-list li {
        list-style-type: "✗";
        padding-inline-start:.5em}

    .checkup-list li::marker {
        color: red
    }

    .checkup-list li.good-check {
        list-style-type: "✓"
    }

    .checkup-list li.good-check::marker {
        color: green
    }

    .script-meta-block {
        max-width: 600px;
        column-count: 2
    }

    .script-meta-block>*:last-child {
        margin-bottom: 1em
    }

    .gf-script-card-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.55rem;
        margin-top: 0.9rem;
    }

    #install-area .gf-script-card-actions,
    #script-links .gf-script-card-actions {
        justify-content: flex-start;
        margin-top: 0.75rem;
    }

    #install-area > .gf-script-star-button {
        margin-left: .45rem;
        min-width: 2.4rem;
        min-height: 2.4rem;
    }

    #install-area > .gf-script-note-button,
    #install-area .gf-script-card-actions > .gf-script-note-button:first-child {
        margin-left: 13px;
    }

    #install-area > .gf-script-star-button svg {
        width: 24px;
        height: 24px;
    }

    .gf-script-install-button,
    .gf-script-detail-button,
    .gf-script-note-button,
    .gf-script-star-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.2rem;
        border-radius: 999px;
        border: 1px solid var(--content-border-color);
        background: linear-gradient(180deg, rgba(139, 92, 246, 0.22), rgba(139, 92, 246, 0.1));
        color: var(--overall-text-color) !important;
        text-decoration: none;
        box-sizing: border-box;
        transition: transform var(--transition-base), background-color var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base), color var(--transition-base);
    }

    .gf-script-install-button,
    .gf-script-install-button:visited,
    .gf-script-install-button:hover,
    .gf-script-install-button:focus-visible,
    .gf-script-detail-button,
    .gf-script-detail-button:visited,
    .gf-script-detail-button:hover,
    .gf-script-detail-button:focus-visible {
        text-decoration: none !important;
    }

    .gf-script-install-button {
        gap: 0.45rem;
        padding: 0 0.95rem;
        font-size: 0.92rem;
        font-weight: 700;
        letter-spacing: 0.01em;
    }

    .gf-script-detail-button {
        width: 2.2rem;
        min-width: 2.2rem;
        padding: 0;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .gf-script-note-button {
        width: 2.2rem;
        min-width: 2.2rem;
        padding: 0;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .gf-script-star-button {
        width: auto;
        height: auto;
        padding: 0;
        margin-left: 0;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        border: none;
        background: transparent;
        color: var(--overall-text-color) !important;
        box-shadow: none;
        line-height: 0;
        transform: none;
        transition: color var(--transition-base);
    }

    .gf-script-install-button svg,
    .gf-script-detail-button svg,
    .gf-script-note-button svg,
    .gf-script-star-button svg {
        width: 19px;
        height: 19px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex: none;
        transition: fill var(--transition-base), stroke var(--transition-base), stroke-width var(--transition-base), transform var(--transition-base);
    }

    .gf-script-install-button:hover,
    .gf-script-install-button:focus-visible,
    .gf-script-detail-button:hover,
    .gf-script-detail-button:focus-visible,
    .gf-script-detail-button[data-expanded="true"],
    .gf-script-note-button:hover,
    .gf-script-note-button:focus-visible,
    .gf-script-note-button[data-expanded="true"],
    .gf-script-note-button[data-has-note="true"] {
        border-color: var(--link-color);
        color: var(--link-color) !important;
        box-shadow: none;
        outline: none;
    }

    .gf-script-note-button[data-has-note="true"] {
        background: transparent;
        border-color: color-mix(in srgb, var(--content-border-color) 72%, var(--link-color) 28%);
    }

    .gf-script-detail-button[data-expanded="true"] svg {
        transform: rotate(45deg);
    }

    .gf-script-note-panel {
        display: none;
        margin-top: .65rem;
        border: 1px solid color-mix(in srgb, var(--content-border-color) 88%, var(--link-color) 12%);
        border-radius: var(--border-radius-small);
        background: color-mix(in srgb, var(--content-background-color) 98%, var(--overall-text-color) 2%);
        overflow: hidden;
    }

    .gf-script-note-panel[data-open="true"],
    .gf-script-note-panel[data-has-note="true"] {
        display: block;
    }

    .gf-script-note-preview {
        display: none;
        padding: .65rem .8rem;
        color: color-mix(in srgb, var(--overall-text-color) 76%, transparent);
        font-size: .88rem;
        line-height: 1.45;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    }

    .gf-script-note-panel[data-has-note="true"][data-open="false"] .gf-script-note-preview {
        display: block;
        margin: .55rem .15rem 0;
        border-left: 3px solid color-mix(in srgb, var(--link-color) 42%, var(--content-border-color) 58%);
        background: color-mix(in srgb, var(--content-background-color) 96%, var(--overall-text-color) 4%);
        border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
    }

    .gf-script-note-panel[data-has-note="true"][data-open="false"] {
        border: 0;
        background: transparent;
    }

    .gf-script-note-editor {
        display: none;
        padding: .65rem;
    }

    .gf-script-note-panel[data-open="true"] .gf-script-note-editor {
        display: block;
    }

    .gf-script-note-textarea {
        box-sizing: border-box;
        width: 100%;
        min-height: 4.25rem;
        resize: vertical;
        border: 1px solid color-mix(in srgb, var(--content-border-color) 88%, transparent);
        border-radius: var(--border-radius-small);
        background: color-mix(in srgb, var(--content-background-color) 97%, var(--overall-text-color) 3%);
        color: var(--overall-text-color);
        padding: .7rem .8rem;
        font: 500 .9rem/1.45 var(--font-family-base);
        outline: none;
        box-shadow: none;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
    }

    .gf-script-note-textarea:focus {
        border-color: color-mix(in srgb, var(--link-color) 46%, var(--content-border-color) 54%);
        box-shadow: none;
    }

    .gf-script-note-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .75rem;
        margin-top: .5rem;
    }

    .gf-script-note-footer-actions {
        display: inline-flex;
        align-items: center;
        gap: .45rem;
    }

    .gf-script-note-status {
        color: var(--texty-link-visited-color);
        font-size: .78rem;
    }

    .gf-script-note-status:empty {
        display: none;
    }

    .gf-script-note-done {
        border: 1px solid var(--content-border-color);
        border-radius: 999px;
        background: color-mix(in srgb, var(--link-color) 12%, var(--content-background-color) 88%);
        color: var(--overall-text-color);
        padding: .3rem .65rem;
        font: 700 .78rem/1 var(--font-family-base);
        cursor: pointer;
    }

    .gf-script-note-done:hover,
    .gf-script-note-done:focus-visible {
        border-color: var(--link-color);
        color: var(--link-color);
        outline: none;
    }

    .gf-script-note-delete {
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: var(--texty-link-visited-color);
        padding: .3rem .45rem;
        font: 700 .78rem/1 var(--font-family-base);
        cursor: pointer;
    }

    .gf-script-note-delete:hover,
    .gf-script-note-delete:focus-visible {
        color: #f87171;
        background: color-mix(in srgb, #f87171 12%, transparent);
        outline: none;
    }


    .gf-script-star-button:hover,
    .gf-script-star-button:focus,
    .gf-script-star-button:focus-visible,
    .gf-script-star-button[data-active="true"],
    .gf-script-star-button[data-active="true"]:hover,
    .gf-script-star-button[data-active="true"]:focus,
    .gf-script-star-button[data-active="true"]:focus-visible {
        background: transparent !important;
        border-color: transparent !important;
        box-shadow: none !important;
        outline: none !important;
        transform: none !important;
    }

    .gf-script-star-button:hover,
    .gf-script-star-button:focus,
    .gf-script-star-button:focus-visible {
        color: var(--overall-text-color) !important;
    }

    .gf-script-star-button:hover svg,
    .gf-script-star-button:focus-visible svg {
        fill: none;
        stroke: currentColor;
        stroke-width: 2.55;
        transform: scale(1.06);
    }

    .gf-script-star-button[data-active="true"] {
        color: #f4b400 !important;
    }

    .gf-script-star-button[data-active="true"] svg {
        stroke: #f4b400;
        fill: rgba(244, 180, 0, 0.18);
        stroke-width: 2.1;
        width: 21px;
        height: 21px;
    }

    .gf-script-star-button[data-active="true"]:hover svg,
    .gf-script-star-button[data-active="true"]:focus-visible svg {
        stroke-width: 2.65;
        transform: scale(1.06);
    }

    .gf-script-star-button[data-active="true"]:hover,
    .gf-script-star-button[data-active="true"]:focus,
    .gf-script-star-button[data-active="true"]:focus-visible {
        color: #f4b400 !important;
    }

    .inline-script-stats {
        align-items: center;
    }

    .inline-script-stats dd span relative-time {
        white-space: nowrap !important;
        display: inline-block !important;
        line-height: 1.3;
        vertical-align: middle;
    }


    .inline-script-stats,.inline-script-stats dt,.inline-script-stats dd {
        vertical-align: top;
        padding: 0;
        font-size: small;
    }

    .inline-script-stats dt,.inline-script-stats dd {
        box-sizing: border-box;
        overflow-wrap: break-word;
        margin: 1px 0
    }

    .inline-script-stats dt {
        font-weight: 700;
        text-align: end;
        padding-inline-end:1em}

    html[data-gfplus-safari] .script-meta-block {
        column-count: initial;
    }

    html[data-gfplus-safari] .inline-script-stats {
        display: grid;
        grid-template-columns: max-content minmax(0, 1fr) max-content minmax(0, 1fr);
        column-gap: 1.4rem;
        row-gap: .32rem;
        margin: 0;
    }

    html[data-gfplus-safari] .inline-script-stats dt,
    html[data-gfplus-safari] .inline-script-stats dd {
        margin: 0;
        break-inside: avoid;
        -webkit-column-break-inside: avoid;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(-n+3) {
        grid-column: 1;
    }

    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(-n+3) {
        grid-column: 2;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(n+4) {
        grid-column: 3;
    }

    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(n+4) {
        grid-column: 4;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(1),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(1),
    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(4),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(4) {
        grid-row: 1;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(2),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(2),
    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(5),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(5) {
        grid-row: 2;
    }

    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(3),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(3),
    html[data-gfplus-safari] .inline-script-stats dt:nth-of-type(6),
    html[data-gfplus-safari] .inline-script-stats dd:nth-of-type(6) {
        grid-row: 3;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(-n+5) {
        grid-column: 1;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(-n+5) {
        grid-column: 2;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(n+6) {
        grid-column: 3;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(n+6) {
        grid-column: 4;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(1),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(1),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(6),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(6) {
        grid-row: 1;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(2),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(2),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(7),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(7) {
        grid-row: 2;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(3),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(3),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(8),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(8) {
        grid-row: 3;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(4),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(4),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(9),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(9) {
        grid-row: 4;
    }

    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(5),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(5),
    html[data-gfplus-safari] #script-stats.inline-script-stats dt:nth-of-type(10),
    html[data-gfplus-safari] #script-stats.inline-script-stats dd:nth-of-type(10) {
        grid-row: 5;
    }

    dd.script-list-ratings {
        margin-top: 0;
        margin-bottom: 0;
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
        overflow: visible;
        overflow-wrap: normal;
        word-break: normal;
        white-space: nowrap;
    }

    dd.script-list-ratings > span {
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px !important;
        overflow: visible;
        flex-wrap: nowrap !important;
        overflow-wrap: normal;
        word-break: normal;
        white-space: nowrap;
    }

    dd.script-list-ratings span.good-rating-count,
    dd.script-list-ratings span.ok-rating-count,
    dd.script-list-ratings span.bad-rating-count {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex: 0 0 auto !important;
        min-width: 2.8em !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: .1em .5em !important;
        line-height: 1.1 !important;
        overflow-wrap: normal !important;
        word-break: normal !important;
        white-space: nowrap !important;
    }

    dd.script-list-ratings span.good-rating-count { color: #4CAF50 !important; }
    dd.script-list-ratings span.ok-rating-count { color: #FFC107 !important; }
    dd.script-list-ratings span.bad-rating-count { color: #F44336 !important; }

    @media screen and (max-width: 600px) {
        .script-meta-block {
            max-width: 100%;
            column-count: initial;
        }

        .inline-script-stats,
        html[data-gfplus-safari] .inline-script-stats,
        html[data-gfplus-safari] #script-stats.inline-script-stats {
            display: grid;
            grid-template-columns: minmax(6.8rem, 42%) minmax(0, 1fr);
            column-gap: .75rem;
            row-gap: .34rem;
            align-items: start;
            margin: 0;
        }

        .inline-script-stats dt,
        .inline-script-stats dd,
        html[data-gfplus-safari] .inline-script-stats dt,
        html[data-gfplus-safari] .inline-script-stats dd,
        html[data-gfplus-safari] #script-stats.inline-script-stats dt,
        html[data-gfplus-safari] #script-stats.inline-script-stats dd {
            grid-column: auto !important;
            grid-row: auto !important;
            min-width: 0;
            margin: 0;
            break-inside: auto;
            -webkit-column-break-inside: auto;
        }

        .inline-script-stats dt {
            grid-column: 1 !important;
            text-align: start;
            padding-inline-end: .35rem;
        }

        .inline-script-stats dd {
            grid-column: 2 !important;
            overflow-wrap: anywhere;
        }

        dd.script-list-ratings {
            justify-content: flex-start !important;
            white-space: normal !important;
        }

        dd.script-list-ratings > span {
            flex-wrap: wrap !important;
            gap: 3px !important;
            white-space: normal !important;
        }

        dd.script-list-ratings span.good-rating-count,
        dd.script-list-ratings span.ok-rating-count,
        dd.script-list-ratings span.bad-rating-count {
            min-width: 2.65em !important;
            padding: .08em .38em !important;
        }
    }

    .script-antifeatures span[title] {
        text-decoration: underline;
        text-decoration-style: dotted
    }

    .script-show-compatibility {
        vertical-align: bottom
    }

    .browser-compatible,.browser-incompatible,.browser-incompatible-marker {
        width: 16px;
        height: 16px
    }

    .browser-incompatible {
        opacity: .5
    }

    .browser-incompatible-marker {
        position: absolute
    }

    .script-lock-appeal-actions form {
        display: inline-block;
        margin-top: 1em
    }

    .change-script-set section {
        border-bottom: 1px solid var(--content-border-color);
        padding-bottom: 1em
    }

    .change-script-set textarea {
        height: 5em
    }

    .change-script-set .selection-box {
        width: 100%;
        display: inline-block;
        vertical-align: top;
        margin-bottom: 1em
    }

    @media screen and (max-width: 720px) {
        .change-script-set .selection-box {
            width:100%
        }
    }

    .change-script-set select[multiple] {
        width: 100%
    }

    .change-script-set {
        display: grid;
        gap: 1.25rem;
        padding: 1.25rem;
        background: linear-gradient(180deg, rgba(139, 92, 246, .08), rgba(17, 24, 39, .55));
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-soft);
    }

    .change-script-set section {
        margin: 0;
    }

    .change-script-set button {
        margin-left: 0;
    }

    .change-script-set #script-set-scripts {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
        gap: 1rem;
        align-items: start;
    }

    .change-script-set .selection-box,
    .change-script-set #script-set-scripts > .form-control:not(.selection-box) {
        margin-bottom: 0;
        padding: 1rem;
        background-color: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .04), 0 10px 24px rgba(15, 23, 42, .18);
    }

    .change-script-set.gf-set-editor-enhanced select[name="remove-scripts-included[]"],
    .change-script-set.gf-set-editor-enhanced button[name="remove-selected-scripts"] {
        display: none !important;
    }

    .gf-set-script-list-panel {
        display: grid;
        gap: .85rem;
    }

    .gf-set-script-list-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .75rem;
    }

    .gf-set-script-list-title {
        font-size: 1rem;
        font-weight: 700;
        color: var(--overall-text-color);
    }

    .gf-set-script-list-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        padding: .25rem .65rem;
        border-radius: 999px;
        background: rgba(139, 92, 246, .18);
        color: #ddd6fe;
        font-size: .82rem;
        font-weight: 700;
    }

    .gf-set-script-list {
        display: grid;
        gap: .6rem;
    }

    .gf-set-script-row {
        display: flex;
        align-items: center;
        gap: .75rem;
        padding: .8rem .9rem;
        background: linear-gradient(180deg, rgba(139, 92, 246, .12), rgba(139, 92, 246, .06));
        border: 1px solid rgba(167, 139, 250, .22);
        border-radius: var(--border-radius-small);
        transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
    }

    .gf-set-script-row:hover {
        border-color: rgba(196, 181, 253, .34);
        box-shadow: 0 12px 22px rgba(15, 23, 42, .2);
        transform: translateY(-1px);
    }

    .gf-set-script-name {
        flex: 1;
        min-width: 0;
        color: var(--overall-text-color);
        font-weight: 600;
        overflow-wrap: anywhere;
    }

    .gf-set-script-remove {
        display: inline-grid;
        place-items: center;
        width: 1.35rem;
        height: 1.35rem;
        min-width: 1.35rem;
        min-height: 1.35rem;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #fecaca !important;
        box-shadow: none;
        cursor: pointer;
        transform: none !important;
    }

    .gf-set-script-remove:hover,
    .gf-set-script-remove:focus-visible {
        background: transparent;
        color: #fee2e2 !important;
        box-shadow: none;
        transform: none !important;
    }

    .gf-set-script-remove svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
        stroke-width: 2.25;
        fill: none;
    }

    .gf-set-script-empty {
        padding: .95rem 1rem;
        background: rgba(148, 163, 184, .08);
        border: 1px dashed rgba(148, 163, 184, .25);
        border-radius: var(--border-radius-small);
        color: var(--texty-link-visited-color);
    }

    .gf-set-editor-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: .75rem;
        padding-top: .25rem;
    }

    .gf-set-editor-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: .85rem;
    }

    @media screen and (max-width: 820px) {
        .change-script-set #script-set-scripts {
            grid-template-columns: 1fr;
        }
    }

    .add-script-set label {
        font-weight: 700;
        display: block
    }

    .add-automatic-script-set-4>* {
        vertical-align: top
    }

    .history_versions {
        display: table;
        padding: 0
    }

    .history_versions>li {
        display: table-row
    }

    .diff-controls,.version-number,.version-date,.version-changelog {
        display: table-cell;
        padding-bottom: .5em
    }

    .diff-controls,.version-number,.version-date {
        white-space: nowrap;
        padding-right: 1em
    }

    .version-changelog {
        overflow-wrap: anywhere
    }

    .version-changelog img {
        max-width: 100%
    }

    .version-changelog p:first-child {
        margin-top: 0
    }

    .version-changelog p:last-child {
        margin-bottom: 0
    }

    .remove-attachment {
        margin-top: 20px
    }

    .remove-attachment input {
        margin-left: 0
    }

    .sidebarred {
        display: flex
    }

    .sidebarred-main-content {
        flex: 1
    }

    .sidebar {
        width: 200px;
        padding-top: 1.75em;
        padding-bottom: .75em;
        margin-inline-start:1.5em;flex: none
    }

    @media screen and (min-width: 801px) {
        .sidebar {
            position: sticky;
            top: var(--gfplus-sidebar-sticky-top, 1rem);
            align-self: flex-start;
            box-sizing: border-box;
            max-height: none;
            overflow: visible;
            scrollbar-gutter: auto;
            will-change: top;
        }
    }

    .close-sidebar,.open-sidebar {
        cursor: pointer
    }

    .close-sidebar {
        display: none
    }

    .open-sidebar {
        visibility: hidden;
        float: right;
        background-color: var(--sidebar-background);
        padding: 2px 1.2vw;
        margin-left: 1.2vw;
        margin-right: -1.2vw;
        border-radius: 6px 0 0 6px;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        border-color: gray
    }

    .sidebar-title {
        flex: 1
    }

    .gf-sidebar-scroll-controls {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: .5rem;
        margin-top: .9rem;
    }

    .sidebar button.gf-sidebar-scroll-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 2.25rem;
        margin: 0;
        padding: .4rem;
        border: 1px solid var(--content-border-color);
        border-radius: 7px;
        background: var(--content-background-color);
        color: var(--overall-text-color) !important;
        box-shadow: none !important;
        cursor: pointer;
        transform: none !important;
        transition: background-color var(--transition-base), border-color var(--transition-base), color var(--transition-base);
    }

    .sidebar button.gf-sidebar-scroll-button:hover,
    .sidebar button.gf-sidebar-scroll-button:focus-visible {
        background: var(--inactive-item-background-color);
        border-color: var(--link-color);
        color: var(--link-color) !important;
        box-shadow: none !important;
        outline: none;
        transform: none !important;
    }

    .sidebar button.gf-sidebar-scroll-button:focus {
        box-shadow: none !important;
        outline: none;
    }

    .sidebar button.gf-sidebar-scroll-button:active {
        box-shadow: none !important;
        transform: translateY(1px) !important;
    }

    .sidebar button.gf-sidebar-scroll-button svg {
        width: 18px;
        height: 18px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    @media screen and (max-width: 800px) {
        .sidebarred {
            display:block;
            position: relative
        }

        .sidebar {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 40;
            background: var(--sidebar-background);
            padding-top: 0;
            padding-left: 1em;
            padding-right: 1em;
            max-height: min(calc(100vh - 1.5rem), calc(100dvh - 1.5rem));
            border-width: 1px 0 1px 1px;
            border-style: solid;
            border-color: gray;
            border-radius: 6px 0 0 6px;
            overflow-y: auto;
            overscroll-behavior: contain;
            box-shadow: var(--shadow-soft)
        }

        .sidebar.collapsed {
            display: none
        }

        .close-sidebar {
            display: flex;
            margin-bottom: 1.5em;
            background-color: var(--close-sidebar-background);
            border-bottom: 1px solid var(--close-sidebar-border-bottom);
            margin-left: -16px;
            margin-right: -16px;
            padding: .25em 1.2vw .25em 16px
        }

        .open-sidebar.sidebar-collapsed {
            visibility: visible;
            margin-right: 0;
            position: relative;
            right: -0.35rem;
            z-index: 39;
            box-shadow: var(--shadow-soft)
        }

        html.gfplus-mobile-sidebar-stuck .sidebar:not(.collapsed) {
            position: fixed;
            top: .75rem;
            right: 0;
        }

        html.gfplus-mobile-sidebar-stuck .open-sidebar.sidebar-collapsed {
            position: fixed;
            top: .75rem;
            right: 0;
        }
    }

    @media screen and (min-width: 800px) {
        .sidebarred-main-content {
            max-width:calc(100% - 224px)
        }
    }

    @media screen and (max-width: 400px) {
        .open-sidebar {
            margin-right:0
        }

        .close-sidebar {
            padding-right: 2.4vw;
            margin-right: -1em
        }
    }

    .tabs {
        list-style: none;
        padding: 0 1em;
        margin: 0 -1em;
        display: flex;
        position: relative;
        top: -3.5px;
        flex-wrap: wrap
    }

    .tabs>* {
        align-items: stretch
    }

    .tabs>*>* {
        padding: .25em .5em .5em;
        display: block
    }

    .tabs a {
        text-decoration: none;
        cursor: pointer
    }

    .tabs .current,.tabs>*:not(.current) a:hover,.tabs>*:not(.current) a:focus {
        background: var(--tab-active-background-color);
        box-shadow: inset 1px 0 var(--tab-active-box-shadow-color),inset -1px 0 var(--tab-active-box-shadow-color),inset 0 -1px var(--tab-active-box-shadow-color)
    }

    .tabs .current {
        border-top: 7px solid var(--tab-active-top-border-color)
    }

    .tabs>*:not(.current) a {
        margin-top: 3.5px;
        padding-top: calc(.25em + 3.5px)
    }

    .user-content {
        background: linear-gradient(to right,var(--user-content-background-color-gradient-1),var(--user-content-background-color-gradient-2) 1em);
        border-left: 2px solid var(--user-content-border-left-color);
        padding: .5em 1em;
        overflow-x: auto
    }

    .user-content>p:first-child {
        margin-top: 0
    }

    .user-content>p:last-child {
        margin-bottom: 0
    }

    .user-content img {
        max-width: 100%
    }

    .user-content img.gfplus-standalone-lightbox-trigger,
    #script-content img.gfplus-standalone-lightbox-trigger {
        cursor: zoom-in
    }

    .user-screenshots * {
        vertical-align: middle
    }

    .user-screenshots a {
        text-decoration: none
    }

    .comment-screenshot-control {
        margin: 10px 0
    }

    .remove-images {
        display: flex;
        margin-top: 5px
    }

    .remove-image {
        border: 2px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column
    }

    .remove-image:not(:first-child) {
        margin-left: 5px
    }

    .remove-image img {
        display: block
    }

    .remove-image-selecter,.comment .user-content .user-screenshots {
        margin-top: 10px
    }

    #additional-info .user-screenshots {
        margin-top: 1em
    }

    .user-content blockquote {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 2px solid var(--content-border-color)
    }

    .user-content>ol:first-child,.user-content>ul:first-child {
        margin-top: 0
    }

    .user-content>ol:last-child,.user-content>ul:last-child {
        margin-bottom: 0
    }

    @keyframes lum-fade {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    @keyframes lum-fadeZoom {
        0% {
            transform: scale(.5);
            opacity: 0
        }

        to {
            transform: scale(1);
            opacity: 1
        }
    }

    @keyframes lum-loader-rotate {
        0% {
            transform: translate(-50%,-50%) rotate(0)
        }

        50% {
            transform: translate(-50%,-50%) rotate(-180deg)
        }

        to {
            transform: translate(-50%,-50%) rotate(-360deg)
        }
    }

    @keyframes lum-loader-before {
        0% {
            transform: scale(1)
        }

        10% {
            transform: scale(1.2) translate(6px)
        }

        25% {
            transform: scale(1.3) translate(8px)
        }

        40% {
            transform: scale(1.2) translate(6px)
        }

        50% {
            transform: scale(1)
        }

        60% {
            transform: scale(.8) translate(6px)
        }

        75% {
            transform: scale(.7) translate(8px)
        }

        90% {
            transform: scale(.8) translate(6px)
        }

        to {
            transform: scale(1)
        }
    }

    @keyframes lum-loader-after {
        0% {
            transform: scale(1)
        }

        10% {
            transform: scale(1.2) translate(-6px)
        }

        25% {
            transform: scale(1.3) translate(-8px)
        }

        40% {
            transform: scale(1.2) translate(-6px)
        }

        50% {
            transform: scale(1)
        }

        60% {
            transform: scale(.8) translate(-6px)
        }

        75% {
            transform: scale(.7) translate(-8px)
        }

        90% {
            transform: scale(.8) translate(-6px)
        }

        to {
            transform: scale(1)
        }
    }

    .lum-lightbox {
        background: #0009
    }

    .lum-lightbox.lum-open {
        position: fixed !important;
        inset: 0 !important;
        z-index: 2147483000;
        display: block;
        overflow: hidden !important
    }

    html.gfplus-lightbox-open,
    html.gfplus-lightbox-open body {
        overflow: hidden !important;
        overscroll-behavior: none;
        touch-action: none
    }

    .lum-lightbox-inner {
        position: absolute;
        top: 2.5%;
        right: 2.5%;
        bottom: 2.5%;
        left: 2.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden
    }

    .lum-lightbox-inner img {
        position: relative
    }

    .lum-lightbox-image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        overflow: hidden
    }

    .lum-lightbox-position-helper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        max-height: 100%;
        margin: auto
    }

    .lum-lightbox-image-wrapper .lum-img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: calc(100vh - 7rem);
        max-height: calc(100dvh - 7rem);
        object-fit: contain
    }

    .lum-lightbox-inner .lum-lightbox-caption {
        display: block;
        flex: 0 0 auto;
        width: min(700px, 100%);
        margin: .75rem auto 0;
        color: #fff;
        max-width: 700px;
        text-align: center;
        line-height: 1.35
    }

    .lum-loading .lum-lightbox-loader {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 66px;
        height: 20px;
        animation: lum-loader-rotate 1.8s infinite linear
    }

    .lum-lightbox-loader:before,.lum-lightbox-loader:after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        border-radius: 20px;
        background: rgba(148, 163, 184, .9)
    }

    .lum-lightbox-loader:before {
        left: 0;
        animation: lum-loader-before 1.8s infinite linear
    }

    .lum-lightbox-loader:after {
        right: 0;
        animation: lum-loader-after 1.8s infinite linear;
        animation-delay: -.9s
    }

    .lum-lightbox.lum-opening {
        animation: lum-fade .18s ease-out
    }

    .lum-lightbox.lum-opening .lum-lightbox-inner {
        animation: lum-fadeZoom .18s ease-out
    }

    .lum-lightbox.lum-closing {
        animation: lum-fade .3s ease-in;
        animation-direction: reverse
    }

    .lum-lightbox.lum-closing .lum-lightbox-inner {
        animation: lum-fadeZoom .3s ease-in;
        animation-direction: reverse
    }

    .lum-img {
        transition: opacity .12s ease-out
    }

    .lum-lightbox img.gfplus-lightbox-zoomable {
        cursor: zoom-in;
        touch-action: none;
        transform-origin: center center;
        transition: opacity .12s ease-out, transform .12s ease-out;
        will-change: transform
    }

    .lum-lightbox img.gfplus-lightbox-zoomed {
        cursor: grab
    }

    .lum-lightbox img.gfplus-lightbox-dragging {
        cursor: grabbing;
        transition: opacity .12s ease-out
    }

    .lum-loading .lum-img {
        opacity: 0
    }

    .lum-gallery-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
        text-indent: -9999px;
        font-size: 0;
        line-height: 0;
        white-space: nowrap;
        background: rgba(15, 23, 42, .46) !important;
        color: #fff !important;
        border: 1px solid rgba(255, 255, 255, .18) !important;
        border-radius: 999px;
        margin: 0;
        padding: 0;
        outline: 0;
        position: absolute;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%) !important;
        height: 48px;
        max-height: none;
        width: 48px;
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(0, 0, 0, .22) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: background-color .16s ease, border-color .16s ease, box-shadow .16s ease, transform .16s ease
    }

    .lum-gallery-button:hover,
    .lum-gallery-button:focus-visible {
        background: rgba(15, 23, 42, .66) !important;
        border-color: rgba(255, 255, 255, .32) !important;
        box-shadow: 0 10px 24px rgba(0, 0, 0, .28) !important;
        transform: translateY(-50%) !important;
        outline: none
    }

    .lum-gallery-button:focus {
        outline: none
    }

    .lum-gallery-button:active {
        background: rgba(15, 23, 42, .74) !important;
        transform: translateY(-50%) !important
    }

    .lum-close-button {
        position: absolute;
        z-index: 3;
        right: 12px;
        top: 12px;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, .2);
        background: rgba(15, 23, 42, .52);
        box-shadow: 0 8px 20px rgba(0, 0, 0, .22);
        opacity: 1;
        cursor: pointer;
        transition: background-color .16s ease, border-color .16s ease, box-shadow .16s ease
    }

    .lum-close-button:hover {
        background: rgba(15, 23, 42, .72);
        border-color: rgba(255, 255, 255, .34);
        box-shadow: 0 10px 24px rgba(0, 0, 0, .28)
    }

    .lum-close-button,
    .lum-close-button:hover,
    .lum-close-button:focus-visible,
    .lum-close-button:active {
        transform: none !important
    }

    .lum-close-button:before,.lum-close-button:after {
        position: absolute;
        left: 50%;
        top: 50%;
        content: " ";
        height: 20px;
        width: 2px;
        border-radius: 999px;
        background-color: rgba(255, 255, 255, .95)
    }

    .lum-close-button:before {
        transform: translate(-50%,-50%) rotate(45deg)
    }

    .lum-close-button:after {
        transform: translate(-50%,-50%) rotate(-45deg)
    }

    .lum-previous-button {
        left: clamp(10px,3vw,28px)
    }

    .lum-next-button {
        right: clamp(10px,3vw,28px)
    }

    .lum-gallery-button:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 13px;
        height: 13px;
        border: 0;
        border-top: 2.5px solid currentColor;
        box-shadow: none
    }

    .lum-previous-button:after {
        transform: translate(-35%,-50%) rotate(-45deg);
        border-left: 2.5px solid currentColor;
        border-radius: 2px 0 0
    }

    .lum-next-button:after {
        transform: translate(-65%,-50%) rotate(45deg);
        border-right: 2.5px solid currentColor;
        border-radius: 0 2px 0 0
    }

    @media (max-width: 460px) {
        .lum-lightbox,
        .lum-lightbox-inner {
            overflow: hidden !important
        }

        .lum-lightbox-inner {
            top: .75rem;
            right: .75rem;
            bottom: .75rem;
            left: .75rem
        }

        .lum-gallery-button {
            width: 40px;
            height: 40px;
            top: auto;
            bottom: 4.25rem;
            transform: none !important;
            background: rgba(15, 23, 42, .58) !important;
            box-shadow: 0 8px 18px rgba(0, 0, 0, .24) !important
        }

        .lum-gallery-button:hover,
        .lum-gallery-button:focus-visible {
            transform: none !important
        }

        .lum-gallery-button:active {
            transform: none !important
        }

        .lum-previous-button {
            left: 12px
        }

        .lum-next-button {
            right: 12px
        }

        .lum-gallery-button:after {
            width: 11px;
            height: 11px;
            border-top-width: 2.25px
        }

        .lum-previous-button:after {
            border-left-width: 2.25px
        }

        .lum-next-button:after {
            border-right-width: 2.25px
        }

        .lum-lightbox-image-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100% !important;
            max-width: 100% !important;
            height: calc(100dvh - 1.5rem) !important;
            max-height: calc(100dvh - 1.5rem) !important;
            overflow: hidden !important
        }

        .lum-lightbox-caption {
            width: 100%;
            position: static;
            bottom: auto;
            margin-top: .55rem
        }

        .lum-lightbox-position-helper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            max-height: 100%;
            margin: auto
        }

        .lum-lightbox-inner img {
            width: auto !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: calc(100dvh - 5.5rem) !important;
            object-fit: contain
        }
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article dd span relative-time {
    display: inline-block;
    line-height: 1.2;
    vertical-align: middle;
    position: relative;
    top: 0.5px;
    }

    .script-list > li:not(.ad-entry):not(.gf-script-extra-info) > article dd {
    align-items: center;
    }

    .code-container pre.prettyprint,
    .code-container pre.prettyprint .pln,
    .code-container pre.prettyprint .com,
    .code-container pre.prettyprint .kwd,
    .code-container pre.prettyprint .str,
    .code-container pre.prettyprint .typ {
        font-size: 0.85rem !important;
        line-height: 1.4 !important;
        font-family: "Fira Code", "Consolas", "Menlo", monospace !important;
    }

    /* Highlight.js theme */
    pre.gf-hljs {
        min-width: calc(100% - 6px);
        background-color: var(--hljs-bg);
        color: var(--hljs-text);
        border: 1px solid var(--hljs-border);
        border-radius: var(--border-radius-small);
        padding: 0;
        overflow: auto;
        display: flex;
        gap: 0;
    }

    pre.gf-hljs .hljs-line-numbers {
        flex: 0 0 auto;
        padding: 0 .75em .85em;
        background-color: var(--hljs-bg);
        color: var(--hljs-line-number);
        font-family: var(--font-family-monospace);
        font-size: var(--hljs-font-size);
        line-height: var(--hljs-line-height);
        text-align: right;
        white-space: pre;
        user-select: none;
        border-right: 1px solid var(--hljs-border);
        background-image: linear-gradient(
            to bottom,
            transparent 0,
            transparent var(--hljs-line-height),
            var(--hljs-bg-alt) var(--hljs-line-height),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
        background-repeat: repeat-y;
        background-size: 100% calc(var(--hljs-line-height) * 2);
        background-attachment: local;
    }

    pre.gf-hljs code.hljs {
        display: block;
        flex: 0 0 auto;
        min-width: 100%;
        width: max-content;
        padding: 0 1em .85em;
        background: transparent;
        color: inherit;
        font-family: var(--font-family-monospace);
        font-size: var(--hljs-font-size);
        line-height: var(--hljs-line-height);
        white-space: pre;
        background-image: linear-gradient(
            to bottom,
            transparent 0,
            transparent var(--hljs-line-height),
            var(--hljs-bg-alt) var(--hljs-line-height),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
        background-repeat: repeat-y;
        background-size: 100% calc(var(--hljs-line-height) * 2);
        background-attachment: local;
    }

    pre.gf-hljs.wrap code.hljs {
        white-space: pre-wrap;
        flex: 1 1 auto;
        min-width: 0;
        width: 100%;
        overflow-wrap: anywhere;
        word-break: break-word;
        line-break: anywhere;
    }

    .hljs-comment,.hljs-quote {
        color: var(--hljs-comment);
        font-style: italic;
    }

    .hljs-keyword,.hljs-selector-tag,.hljs-subst {
        color: var(--hljs-keyword);
    }

    .hljs-number,.hljs-literal,.hljs-symbol,.hljs-bullet {
        color: var(--hljs-number);
    }

    .hljs-string,.hljs-doctag,.hljs-built_in,.hljs-builtin-name {
        color: var(--hljs-string);
    }

    .hljs-title,.hljs-section,.hljs-name {
        color: var(--hljs-title);
        font-weight: 600;
    }

    .hljs-attr,.hljs-attribute {
        color: var(--hljs-attr);
    }

    .hljs-tag {
        color: var(--hljs-tag);
    }

    .hljs-meta,.hljs-link {
        color: var(--hljs-meta);
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: 700;
    }

    .hljs-addition {
        background-color: var(--hljs-add-bg);
        color: var(--hljs-add-text);
    }

    .hljs-deletion {
        background-color: var(--hljs-del-bg);
        color: var(--hljs-del-text);
    }

    .gf-script-logo--fallback {
        color: #4f46e5;
    }

    #user-script-sets {
    margin-top: 0px;
    }

    /* User Navigation Icons and Panels */
    .gf-user-nav-icons {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        margin-left: 0.75em;
        vertical-align: middle;
    }

    .gf-user-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: var(--border-radius-small);
        cursor: pointer;
        background: transparent;
        border: 1px solid transparent;
        transition: background-color var(--transition-base), border-color var(--transition-base);
    }

    .gf-user-icon:hover,
    .gf-user-icon.active {
        background-color: rgba(59, 130, 246, 0.18);
        border-color: rgba(59, 130, 246, 0.3);
    }

    .gf-user-icon svg {
        width: 18px;
        height: 18px;
        stroke: var(--overall-text-color);
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: stroke var(--transition-base);
    }

    .gf-user-icon:hover svg {
        stroke: var(--link-color);
    }

    .gf-user-icon--settings:hover svg {
        fill: var(--link-color);
    }

    .gf-user-icon--settings svg {
        fill: currentColor;
        stroke: none;
    }

    /* User Panels */
    .gf-user-panel {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 220px;
        background: var(--content-background-color);
        border: 1px solid var(--content-border-color);
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-soft);
        padding: 0.5em 0;
        z-index: 1000;
        display: none;
        opacity: 0;
        transform: translateY(-8px);
        transition: opacity var(--transition-base), transform var(--transition-base);
    }

    .gf-user-panel.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }

    .gf-user-panel a {
        display: block;
        padding: 0.75em 1.25em;
        color: var(--overall-text-color);
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        transition: background-color var(--transition-base), color var(--transition-base);
    }

    .gf-user-panel a:visited {
        color: var(--overall-text-color);
    }

    .gf-user-panel a:hover {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(59, 130, 246, 0.1));
        color: var(--link-color);
    }

    .gf-user-panel-separator {
        height: 1px;
        background-color: var(--content-separator-color);
        margin: 0.5em 0;
    }
`;
})(globalThis);
