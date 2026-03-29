// ==UserScript==
// @name         GreasyFork Premium
// @name:zh-CN   GreasyFork 高级版
// @name:hi      GreasyFork प्रीमियम
// @name:es      GreasyFork Premium
// @name:ar      GreasyFork بريميوم
// @name:fr      GreasyFork Premium
// @name:bn      GreasyFork প্রিমিয়াম
// @name:pt      GreasyFork Premium
// @name:ru      GreasyFork Premium
// @name:ja      GreasyFork プレミアム
// @name:ur      GreasyFork پریمیم
// @name:ml      GreasyFork പ്രീമിയം
// @name:tr      GreasyFork Premium
// @name:it      GreasyFork Premium
// @name:th      GreasyFork Premium
// @description        Premium UI enhancement for GreasyFork: modernized interface, instant light/dark theme toggle, improved readability, cleaner layout, and faster access to essential actions.
// @description:zh-CN  GreasyFork 的高级界面增强：现代化界面设计，即时浅色/深色主题切换，提升可读性、优化布局，并更快捷地访问核心功能。
// @description:hi     GreasyFork के लिए प्रीमियम UI सुधार: आधुनिक इंटरफ़ेस, तुरंत लाइट/डार्क थीम स्विच, बेहतर पठनीयता, साफ़ लेआउट और आवश्यक फ़ंक्शनों तक तेज़ पहुँच।
// @description:es     Mejora premium de la interfaz de GreasyFork: diseño modernizado, cambio instantáneo de tema claro/oscuro, mejor legibilidad y acceso más rápido a las acciones clave.
// @description:ar     تحسين واجهة GreasyFork بشكل احترافي: تصميم حديث، تبديل فوري بين الثيم الفاتح/الغامق، قراءة أوضح، تخطيط أنظف، ووصول أسرع للإجراءات الأساسية.
// @description:fr     Amélioration premium de l’interface GreasyFork : design modernisé, bascule instantanée thème clair/sombre, meilleure lisibilité et accès rapide aux actions essentielles.
// @description:bn     GreasyFork-এর জন্য প্রিমিয়াম UI উন্নয়ন: আধুনিক ইন্টারফেস, তাৎক্ষণিক লাইট/ডার্ক থিম সুইচ, উন্নত পাঠযোগ্যতা ও গুরুত্বপূর্ণ ফিচারে দ্রুত প্রবেশ।
// @description:pt     Melhoria premium da interface do GreasyFork: design modernizado, alternância instantânea de tema claro/escuro, melhor legibilidade e acesso rápido às ações essenciais.
// @description:ru     Премиальное улучшение интерфейса GreasyFork: современный дизайн, мгновенное переключение светлой/тёмной темы, улучшенная читаемость и быстрый доступ к действиям.
// @description:ja     GreasyFork 向けプレミアム UI 改善：モダンなデザイン、ライト／ダークテーマの即時切替、可読性の向上と主要操作への高速アクセス。
// @description:ur     GreasyFork کے لیے پریمیئم UI بہتری: جدید ڈیزائن، فوری لائٹ/ڈارک تھیم سوئچ، بہتر readability اور ضروری فیچرز تک تیز رسائی۔
// @description:ml     GreasyFork നായി പ്രീമിയം UI മെച്ചപ്പെടുത്തൽ: ആധുനിക ഡിസൈൻ, തൽക്ഷണ ലൈറ്റ്/ഡാർക്ക് തീം സ്വിച്ച്, മെച്ചപ്പെട്ട വായനാസൗകര്യം, പ്രധാന പ്രവർത്തനങ്ങളിലേക്ക് വേഗത്തിലുള്ള പ്രവേശനം.
// @description:tr     GreasyFork için premium arayüz geliştirmesi: modern tasarım, anında açık/karanlık tema geçişi, gelişmiş okunabilirlik ve temel işlemlere hızlı erişim.
// @description:it     Miglioramento premium dell’interfaccia GreasyFork: design moderno, cambio immediato tema chiaro/scuro, maggiore leggibilità e accesso rapido alle azioni principali.
// @description:th     การปรับปรุง UI ระดับพรีเมียมสำหรับ GreasyFork: ดีไซน์ทันสมัย สลับโหมดสว่าง/มืดได้ทันที อ่านง่ายขึ้น และเข้าถึงฟังก์ชันสำคัญได้รวดเร็ว

// @icon         https://raw.githubusercontent.com/DREwX-code/greasyfork-premium/refs/heads/main/assets/icon/logo-greasyfork-premium.png
// @namespace    https://github.com/DREwX-code/greasyfork-premium
// @version      1.0.1
// @author       Dℝ∃wX
// @copyright    2026 DℝᴇwX
// @license      Apache-2.0
// @tag          Productivity
// @match        https://greasyfork.org/*
// @run-at       document-start
// @grant        none

// ==/UserScript==

/*
Copyright 2026 Dℝ∃wX

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*
---

Third-Party Libraries:

This project uses Highlight.js for syntax highlighting.
Website: https://highlightjs.org/
Source code: https://github.com/highlightjs/highlight.js
License: BSD 3-Clause

---
*/

(function () {
    'use strict';

    const STORAGE_KEY = 'gfplus-theme';
    const LOADING_ATTR = 'data-gfplus-loading';
    const INTERNAL_NAV_FLAG_KEY = 'gfplus-internal-nav';
    const INTERNAL_LOADING_ATTR = 'data-gfplus-internal-loading';
    const HANDHELD_ATTR = 'data-gfplus-handheld';
    const BOOTSTRAP_THEME_SCRIPT_ID = 'gfplus-bootstrap-theme';
    const NO_TRANSITION_STYLE_ID = 'gfplus-no-transition';
    const THEME_STYLE_ID = 'gfplus-theme-style';
    let currentTheme = localStorage.getItem(STORAGE_KEY) || 'light';
    let internalNavigation = false;
    const root = document.documentElement;
    const THEME_COLORS = {
        light: {
            background: '#f5f7fb',
            text: '#111827'
        },
        dark: {
            background: '#0b111a',
            text: '#e5e7eb'
        }
    };

    const applyRootTheme = (theme) => {
        if (!root) {
            return;
        }

        const colors = THEME_COLORS[theme] || THEME_COLORS.light;
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;
        root.style.backgroundColor = colors.background;
        root.style.color = colors.text;
        root.style.setProperty('--gfplus-preload-bg', colors.background);
        root.style.setProperty('--gfplus-preload-text', colors.text);
    };

    const isPhoneDevice = () => {
        if (navigator.userAgentData?.mobile) {
            return true;
        }

        const userAgent = navigator.userAgent || '';
        return /Android.+Mobile|iPhone|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|Mobile Firefox/i.test(userAgent);
    };

    const syncHandheldMode = () => {
        if (!root) {
            return;
        }

        if (isPhoneDevice()) {
            root.setAttribute(HANDHELD_ATTR, 'true');
        } else {
            root.removeAttribute(HANDHELD_ATTR);
        }
    };

    const appendStyle = (styleEl) => {
        const target = document.head || root;
        target.appendChild(styleEl);
    };

    const prependCriticalStyle = (styleEl) => {
        if (!root) {
            appendStyle(styleEl);
            return;
        }

        root.prepend(styleEl);
    };

    const buildCriticalLoadingCss = () => `
    html[${LOADING_ATTR}] {
    background: var(--gfplus-preload-bg, #f5f7fb) !important;
    color: var(--gfplus-preload-text, #111827) !important;
    }
    html[${LOADING_ATTR}] body {
    background: transparent !important;
    color: inherit !important;
    }
    html[${LOADING_ATTR}] *,
    html[${LOADING_ATTR}] *::before,
    html[${LOADING_ATTR}] *::after {
    transition: none !important;
    animation: none !important;
    }
    html[${LOADING_ATTR}] body > :not(#main-header):not(script):not(style) {
    visibility: hidden !important;
    opacity: 0 !important;
    }
    html[${LOADING_ATTR}][${HANDHELD_ATTR}] body,
    html[${LOADING_ATTR}][${HANDHELD_ATTR}] body > :not(script):not(style),
    html[${LOADING_ATTR}][${HANDHELD_ATTR}][${INTERNAL_LOADING_ATTR}] body,
    html[${LOADING_ATTR}][${HANDHELD_ATTR}][${INTERNAL_LOADING_ATTR}] body > :not(script):not(style) {
    visibility: hidden !important;
    opacity: 0 !important;
    }
    `;

    applyRootTheme(currentTheme);
    syncHandheldMode();

    if (root) {
        root.setAttribute(LOADING_ATTR, 'true');
    }

    const noTransitionStyle = document.createElement('style');
    noTransitionStyle.id = NO_TRANSITION_STYLE_ID;
    noTransitionStyle.textContent = buildCriticalLoadingCss();
    prependCriticalStyle(noTransitionStyle);

    try {
        internalNavigation = sessionStorage.getItem(INTERNAL_NAV_FLAG_KEY) === '1';
        if (internalNavigation) {
            sessionStorage.removeItem(INTERNAL_NAV_FLAG_KEY);
            root.setAttribute(INTERNAL_LOADING_ATTR, 'true');
        }
    } catch (error) {
        internalNavigation = false;
    }

    const bootstrapThemeScript = document.createElement('script');
    bootstrapThemeScript.id = BOOTSTRAP_THEME_SCRIPT_ID;
    bootstrapThemeScript.textContent = `
    (() => {
        try {
            const theme = localStorage.getItem(${JSON.stringify(STORAGE_KEY)}) || 'light';
            const root = document.documentElement;
            if (!root) return;
            const colors = theme === 'dark'
                ? {
                    background: '#0b111a',
                    text: '#e5e7eb'
                }
                : {
                    background: '#f5f7fb',
                    text: '#111827'
                };
            root.setAttribute('data-theme', theme);
            root.style.colorScheme = theme;
            root.style.backgroundColor = colors.background;
            root.style.color = colors.text;
            root.style.setProperty('--gfplus-preload-bg', colors.background);
            root.style.setProperty('--gfplus-preload-text', colors.text);
        } catch (error) {}
    })();
    `;
    (root || document.head).prepend(bootstrapThemeScript);
    bootstrapThemeScript.remove();

    const rootThemeObserver = new MutationObserver(() => {
        if (root.getAttribute('data-theme') !== currentTheme) {
            applyRootTheme(currentTheme);
        }
    });
    rootThemeObserver.observe(root, {
        attributes: true,
        attributeFilter: ['data-theme']
    });

    window.addEventListener('resize', syncHandheldMode, { passive: true });

    const markInternalNavigation = () => {
        internalNavigation = true;
        root.setAttribute(LOADING_ATTR, 'true');
        root.setAttribute(INTERNAL_LOADING_ATTR, 'true');
        applyRootTheme(currentTheme);

        try {
            sessionStorage.setItem(INTERNAL_NAV_FLAG_KEY, '1');
        } catch (error) {}
    };

    const isInternalPageNavigation = (href) => {
        try {
            const destination = new URL(href, window.location.href);
            if (!/^https?:$/.test(destination.protocol)) {
                return false;
            }

            if (destination.origin !== window.location.origin) {
                return false;
            }

            const onlyHashChange = destination.pathname === window.location.pathname
                && destination.search === window.location.search
                && destination.hash
                && destination.hash !== window.location.hash;

            return !onlyHashChange;
        } catch (error) {
            return false;
        }
    };

    document.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const link = event.target.closest('a[href]');
        if (!link) {
            return;
        }

        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
            return;
        }

        if (link.target && link.target !== '_self') {
            return;
        }

        if (isInternalPageNavigation(link.href)) {
            markInternalNavigation();
        }
    }, true);
    const LIGHT_CSS = `


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
        --chart-background-color: #e2e8f0;
        --chart-border-color: #cbd5f5;
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
        --shadow-soft: 0 12px 28px rgba(15, 23, 42, 0.08);
        --shadow-hover: 0 18px 32px rgba(79, 70, 229, 0.12);
        --container-glow-stroke: rgba(99, 102, 241, 0.65);
        --container-glow-color: rgba(99, 102, 241, 0.45);
        --hljs-bg: #ffffff;
        --hljs-bg-alt: #f4f7fb;
        --hljs-line-height: 1.6em;
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
    }

    /* Light mode scrollbar styling only */
    :root {
        scrollbar-color: #c7d2fe #f5f7fb;
    }

    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    ::-webkit-scrollbar-track {
        background: linear-gradient(180deg, #f5f7fb, #eef2ff);
        border-radius: 999px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #a5b4fc, #6366f1);
        border-radius: 999px;
        border: 3px solid #f5f7fb;
        box-shadow: inset 0 0 0 1px rgba(79, 70, 229, 0.3);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #818cf8, #4f46e5);
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    ::selection {
        background-color: rgba(79, 70, 229, .35);
        color: var(--content-background-color);
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
        padding: .6em .8em;
        font: inherit;
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08);
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus,select:focus,textarea:focus {
        border-color: var(--link-color);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, .15);
        outline: none;
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus-visible,select:focus-visible,textarea:focus-visible {
        outline: none;
        border-color: var(--link-visited-color);
        box-shadow: 0 0 0 3px var(--focus-ring-color);
    }

    input[disabled],select[disabled],textarea[disabled] {
        background-color: rgba(148, 163, 184, .15);
        cursor: not-allowed;
        opacity: .7
    }

    button,input[type=submit],input[type=button],.button {
        background: var(--link-color);
        color: var(--content-background-color);
        margin-left: 1em;
        border: none;
        border-radius: var(--border-radius-small);
        padding: .6em 1.1em;
        font-weight: 600;
        letter-spacing: .02em;
        cursor: pointer;
        box-shadow: 0 10px 24px rgba(79, 70, 229, .16);
        transition: transform var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base), color var(--transition-base);
    }

    button:hover,input[type=submit]:hover,input[type=button]:hover,.button:hover,button:focus,input[type=submit]:focus,input[type=button]:focus,.button:focus {
        background: var(--link-visited-color);
        box-shadow: var(--shadow-hover);
        transform: translateY(-1px);
    }

    button:active,input[type=submit]:active,input[type=button]:active,.button:active {
        transform: translateY(0);
        box-shadow: 0 6px 18px rgba(17, 24, 39, .18);
    }

    button:disabled,input[type=submit]:disabled,input[type=button]:disabled,.button:disabled {
        opacity: .65;
        box-shadow: none;
        cursor: not-allowed;
        transform: none
    }

    button:focus-visible,input[type=submit]:focus-visible,input[type=button]:focus-visible,.button:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 3px
    }

    input.search-submit[value="🔎"] {
        color: transparent;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23111827' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='7'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg>") !important;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
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
        resize: both;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base)
    }

    .form-control input:not([type=radio]):not([type=file]):not([type=checkbox]):not([type=search]):not([type=submit]):not([size]) {
        box-sizing: border-box;
        width: 100%
    }

    .radio-group input[type=radio] {
        margin-left: 1em
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

    label.subselection-radio-title {
        font-weight: 400;
        font-size: small;
        display: block;
        margin-left: 3px
    }

    .field_with_errors textarea,.field_with_errors input {
        background-color: rgba(220, 38, 38, .12);
        border-color: var(--rating-icon-bad-border-color);
        box-shadow: 0 0 0 3px rgba(220, 38, 38, .12)
    }

    .label-note {
        font-size: smaller;
        color: var(--texty-link-visited-color)
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
        list-style-type: none;
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
        border-color: var(--link-color);
        box-shadow: var(--shadow-hover);
        transform: translateY(-1px)
    }

    .text-content:last-child {
        margin-bottom: 0
    }

    .text-content.text-content-compact {
        padding: clamp(.85rem, 1.5vw, 1.2rem);
    }

    .user-list {
        background-image: linear-gradient(160deg, rgba(79, 70, 229, .06), transparent 60%)
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

    .script-list li:not(.ad-entry) {
        border-bottom: 1px solid var(--content-separator-color);
        padding: clamp(1rem, 2.5vw, 1.6rem);
        display: grid;
        gap: .55rem;
        background: linear-gradient(180deg, rgba(79, 70, 229, .02), transparent);
        transition: background-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
    }

    .script-list li:not(.ad-entry):hover {
        background: linear-gradient(180deg, rgba(79, 70, 229, .08), rgba(79, 70, 229, .04));
        box-shadow: inset 0 0 0 1px rgba(79, 70, 229, .12);
        transform: translateY(-2px);
    }

    .script-list li:not(.ad-entry):last-child {
        border-bottom: none
    }

    .script-list .cf-wrapper {
        margin: 0!important
    }

    @media screen and (max-width: 960px) {
        .script-list li:not(.ad-entry) {
            padding: clamp(.9rem, 4vw, 1.3rem)
        }
    }

    .script-list h2 {
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

    .script-list h2 .gf-script-logo {
        margin-right: 0;
        align-self: center;
        vertical-align: middle;
    }

    .script-list p {
        margin: 0
    }

    .script-list footer {
        margin-top: .35em;
        display: flex;
        flex-wrap: wrap;
        gap: .6rem;
        font-size: .875rem;
        color: var(--texty-link-visited-color)
    }

    .script-list footer a {
        font-weight: 500
    }

    .list-current,.script-list h2 {
        font-weight: 700
    }

    .script-list .description {
        font-weight: 400;
        display: block;
        flex-basis: 100%;
        margin: .5em 0;
        font-size: .95rem;
        color: var(--texty-link-visited-color)
    }

    .script-list .name-description-separator {
        display: none
    }

    #script-description,.script-list h2>a,.script-list .description {
        word-wrap: break-word
    }

    @media screen and (max-width: 720px) {
        .script-list,#script-content {
            margin-left:unset
        }
    }

    .pagination,.script-list+.pagination,.user-list+.pagination {
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

    .pagination>*,.script-list+.pagination>*,.user-list+.pagination>* {
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

    .pagination .current {
        font-style: normal;
        font-weight: 700
    }

    .pagination .current,.pagination .gap {
        background-color: transparent;
        color: var(--texty-link-visited-color)
    }

    .pagination .current {
        border-color: var(--link-color);
        color: var(--link-color);
        box-shadow: inset 0 0 0 1px var(--link-color);
        background-color: rgba(79, 70, 229, .08)
    }

    .pagination>a:hover,.pagination>a:focus {
        background-color: var(--pagination-hover-background-color);
        color: var(--overall-text-color);
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(79, 70, 229, .18)
    }

    .pagination>a:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 2px
    }

    @media screen and (max-width: 400px) {
        .pagination,.script-list+.pagination,.user-list+.pagination {
            padding-left: 1rem;
            padding-right: 1rem
        }
    }

    .good-rating-count,.ok-rating-count,.bad-rating-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.2em;
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
        height: 400px
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
        border-bottom: 1px solid var(--content-border-color);
        padding: .75rem 1rem;
        text-align: left
    }

    .stats-table th {
        background: linear-gradient(180deg, rgba(79, 70, 229, .08), rgba(79, 70, 229, .02));
        font-weight: 600;
        color: var(--overall-text-color)
    }

    .stats-table tr:last-child td {
        border-bottom: none
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
        padding: 2px 2px 3px 25px;
        border: 1px solid black;
        border-radius: 2px;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: 5px 2px
    }

    .external-login-container {
        display: inline-block;
        vertical-align: top
    }

    .external-login-container * {
        text-align: center;
        display: block
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
        box-shadow: 0 4px 8px #0003,0 6px 20px #00000030;
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

    .sidebar-search,.home-search {
        position: relative;
        vertical-align: middle
    }

    .sidebar-search input[type=search],.home-search input[type=search] {
        padding: .6em 78px .6em .8em;
    }

    .sidebar-search input[type=search]::-webkit-search-cancel-button,
    .home-search input[type=search]::-webkit-search-cancel-button {
        margin-right: 38px;
    }

    .sidebar-search input[type=search] {
        width: 100%;
        margin: 0 0 1em
    }

    .sidebar-search input[type=submit],.home-search input[type=submit] {
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

    .sidebar-search input[type=submit] {
        bottom: 14px;
    }

    .sidebar-search input[type=submit]:hover,.sidebar-search input[type=submit]:focus,.sidebar-search input[type=submit]:active,
    .home-search input[type=submit]:hover,.home-search input[type=submit]:focus,.home-search input[type=submit]:active {
        background-color: var(--content-background-color) !important;
        box-shadow: none;
        transform: none
    }

    @media screen and (max-width: 680px) {
        .sidebar-search input[type=search],.home-search input[type=search] {
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

    .discussion-list-item,.notification-list-item {
        padding-top: 10px;
        border-top: 1px solid var(--content-separator-color)
    }

    .discussion-list-container:first-child .discussion-list-item {
        border-top: 0
    }

    .discussion-list-logged-in .discussion-read,.notification-read {
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
        right: -0.4rem;
        width: min(22rem, calc(100vw - 0.7rem));
        max-width: calc(100vw - 0.7rem);
        box-sizing: border-box;
        overflow-x: hidden;
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
        margin-bottom: 1em
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
        border: 1px solid gray;
        overflow: auto;
        box-sizing: border-box;
        margin: 0;
        padding: 16px
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
        border-color: var(--link-color);
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
        font-size: small
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

    dd.script-list-ratings {
        margin-top: 0;
        margin-bottom: 0
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
    }

    dd.script-list-ratings > span {
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px !important;
    }

    dd.script-list-ratings span.good-rating-count,
    dd.script-list-ratings span.ok-rating-count,
    dd.script-list-ratings span.bad-rating-count {
        display: inline-block !important;
        margin: 0 !important;
        padding: 0 0 !important;
        line-height: 1 !important;
    }

    dd.script-list-ratings span.good-rating-count { color: #4CAF50 !important; }
    dd.script-list-ratings span.ok-rating-count { color: #FFC107 !important; }
    dd.script-list-ratings span.bad-rating-count { color: #F44336 !important; }

    @media screen and (max-width: 600px) {
        .script-meta-block {
            column-count:1
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
        width: 45%;
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

    @media screen and (max-width: 800px) {
        .sidebarred {
            display:block;
            position: relative
        }

        .sidebar {
            position: absolute;
            right: 0;
            top: 0;
            background: var(--sidebar-background);
            padding-top: 0;
            padding-left: 1em;
            padding-right: 1em;
            border-width: 1px 0 1px 1px;
            border-style: solid;
            border-color: gray;
            border-radius: 6px 0 0 6px;
            overflow: hidden
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
            right: -0.35rem
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

    .lum-lightbox-inner {
        top: 2.5%;
        right: 2.5%;
        bottom: 2.5%;
        left: 2.5%
    }

    .lum-lightbox-inner img {
        position: relative
    }

    .lum-lightbox-inner .lum-lightbox-caption {
        margin: 0 auto;
        color: #fff;
        max-width: 700px;
        text-align: center
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

    .lum-loading .lum-img {
        opacity: 0
    }

    .lum-gallery-button {
        overflow: hidden;
        text-indent: 150%;
        white-space: nowrap;
        background: transparent;
        border: 0;
        margin: 0;
        padding: 0;
        outline: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 100px;
        max-height: 100%;
        width: 60px;
        cursor: pointer
    }

    .lum-close-button {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 32px;
        height: 32px;
        opacity: .3
    }

    .lum-close-button:hover {
        opacity: 1
    }

    .lum-close-button:before,.lum-close-button:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 33px;
        width: 2px;
        background-color: #fff
    }

    .lum-close-button:before {
        transform: rotate(45deg)
    }

    .lum-close-button:after {
        transform: rotate(-45deg)
    }

    .lum-previous-button {
        left: 12px
    }

    .lum-next-button {
        right: 12px
    }

    .lum-gallery-button:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        width: 36px;
        height: 36px;
        border-top: 4px solid rgba(255,255,255,.8)
    }

    .lum-previous-button:after {
        transform: translateY(-50%) rotate(-45deg);
        border-left: 4px solid rgba(255,255,255,.8);
        box-shadow: -2px 0 #0003;
        left: 12%;
        border-radius: 3px 0 0
    }

    .lum-next-button:after {
        transform: translateY(-50%) rotate(45deg);
        border-right: 4px solid rgba(255,255,255,.8);
        box-shadow: 2px 0 #0003;
        right: 12%;
        border-radius: 0 3px 0 0
    }

    @media (max-width: 460px) {
        .lum-lightbox-image-wrapper {
            display:flex;
            overflow: auto;
            -webkit-overflow-scrolling: touch
        }

        .lum-lightbox-caption {
            width: 100%;
            position: absolute;
            bottom: 0
        }

        .lum-lightbox-position-helper {
            margin: auto
        }

        .lum-lightbox-inner img {
            max-width: none;
            max-height: none
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
        --link-color-icon: #746bff;
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
        --chart-background-color: #e2e8f0;
        --chart-border-color: #cbd5f5;
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
        --shadow-soft: 0 12px 28px rgba(15, 23, 42, 0.08);
        --shadow-hover: 0 18px 32px rgba(79, 70, 229, 0.12);
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
        font-size: 0.9rem;
        line-height: var(--hljs-line-height);
        text-align: right;
        white-space: pre;
        user-select: none;
        border-right: 1px solid var(--hljs-border);
        background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
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
        font-size: 0.9rem;
        line-height: var(--hljs-line-height);
        white-space: pre;
        background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
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
        --hljs-line-height: 1.6em;
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


    const DARK_CSS = `

    :root {
        color-scheme: dark;
        scrollbar-color: #334155 #0b111a;
        --font-family-base: "Inter", "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-family-monospace: "JetBrains Mono", "Fira Code", "Source Code Pro", monospace;
        --overall-background-color: #0b111a;
        --overall-text-color: #e5e7eb;
        --link-color: #60a5fa;
        --link-visited-color: #93c5fd;
        --texty-link-visited-color: #9ca3af;
        --content-background-color: #111827;
        --content-border-color: #1f2937;
        --content-box-shadow-color: rgba(2, 6, 23, 0.6);
        --content-separator-color: #1f2937;
        --tab-active-background-color: rgba(59, 130, 246, 0.16);
        --tab-active-box-shadow-color: rgba(59, 130, 246, 0.3);
        --tab-active-top-border-color: #8b5cf6;
        --inactive-item-background-color: #141b2a;
        --code-background-color: #0f172a;
        --user-content-background-color-gradient-1: #101827;
        --user-content-background-color-gradient-2: #0c1220;
        --user-content-border-left-color: #1f2937;
        --list-option-background-color-gradient-1: #111827;
        --list-option-background-color-gradient-2: #0d1422;
        --list-option-hover-background-color-gradient-1: #162035;
        --list-option-hover-background-color-gradient-2: #101827;
        --list-option-hover-box-shadow-top: rgba(2, 6, 23, 0.7);
        --list-option-hover-box-shadow-bottom: rgba(59, 130, 246, 0.25);
        --notice-background-color: #0f1a2a;
        --notice-border-color: #38bdf8;
        --notice-text-color: #e5e7eb;
        --alert-background-color: #2f2411;
        --alert-border-color: #f59e0b;
        --alert-text-color: #fde68a;
        --chart-background-color: #111827;
        --chart-border-color: #1f2937;
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
        --list-option-button-background-color: #111827;
        --list-option-button-color: #e5e7eb;
        --list-option-button-border-color: #1f2937;
        --list-option-button-background-color-gradient-1: #111827;
        --list-option-button-background-color-gradient-2: #0f172a;
        --code-container-border-color: #1f2937;
        --prettyprint-background-color: #0c1220;
        --prettyprint-color: #e5e7eb;
        --sidebar-background: #0f1724;
        --close-sidebar-background: #141c2c;
        --close-sidebar-border-bottom: #1f2a3a;
        --border-radius-small: 6px;
        --border-radius-medium: 12px;
        --border-radius-large: 18px;
        --shadow-soft: 0 16px 36px rgba(2, 6, 23, 0.6);
        --shadow-hover: 0 24px 46px rgba(59, 130, 246, 0.22);
        --container-glow-stroke: rgba(96, 165, 250, 0.28);
        --container-glow-color: rgba(59, 130, 246, 0.18);
        --hljs-bg: #0f172a;
        --hljs-bg-alt: #111827;
        --hljs-line-height: 1.6em;
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
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    ::selection {
        background-color: rgba(139, 92, 246, .35);
        color: var(--content-background-color);
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
        padding: .6em .8em;
        font: inherit;
        box-shadow: inset 0 1px 2px rgba(15, 23, 42, .08);
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus,select:focus,textarea:focus {
        border-color: var(--link-color);
        box-shadow: 0 0 0 3px rgba(139, 92, 246, .25);
        outline: none;
    }

    input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):focus-visible,select:focus-visible,textarea:focus-visible {
        outline: none;
        border-color: var(--link-visited-color);
        box-shadow: 0 0 0 3px var(--focus-ring-color);
    }

    input[disabled],select[disabled],textarea[disabled] {
        background-color: rgba(148, 163, 184, .15);
        cursor: not-allowed;
        opacity: .7
    }

    button,input[type=submit],input[type=button],.button {
        background: var(--link-color);
        color: var(--content-background-color);
        margin-left: 1em;
        border: none;
        border-radius: var(--border-radius-small);
        padding: .6em 1.1em;
        font-weight: 600;
        letter-spacing: .02em;
        cursor: pointer;
        box-shadow: 0 10px 24px rgba(139, 92, 246, .28);
        transition: transform var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base), color var(--transition-base);
    }

    button:hover,input[type=submit]:hover,input[type=button]:hover,.button:hover,button:focus,input[type=submit]:focus,input[type=button]:focus,.button:focus {
        background: var(--link-visited-color);
        box-shadow: var(--shadow-hover);
        transform: translateY(-1px);
    }

    button:active,input[type=submit]:active,input[type=button]:active,.button:active {
        transform: translateY(0);
        box-shadow: 0 6px 18px rgba(17, 24, 39, .18);
    }

    button:disabled,input[type=submit]:disabled,input[type=button]:disabled,.button:disabled {
        opacity: .65;
        box-shadow: none;
        cursor: not-allowed;
        transform: none
    }

    button:focus-visible,input[type=submit]:focus-visible,input[type=button]:focus-visible,.button:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 3px
    }

    input.search-submit[value="🔎"] {
        color: transparent;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e2e8f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='7'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg>") no-repeat center / 16px 16px !important;
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
        resize: both;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base)
    }

    .form-control input:not([type=radio]):not([type=file]):not([type=checkbox]):not([type=search]):not([type=submit]):not([size]) {
        box-sizing: border-box;
        width: 100%
    }

    .radio-group input[type=radio] {
        margin-left: 1em
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

    label.subselection-radio-title {
        font-weight: 400;
        font-size: small;
        display: block;
        margin-left: 3px
    }

    .field_with_errors textarea,.field_with_errors input {
        background-color: rgba(220, 38, 38, .12);
        border-color: var(--rating-icon-bad-border-color);
        box-shadow: 0 0 0 3px rgba(220, 38, 38, .12)
    }

    .label-note {
        font-size: smaller;
        color: var(--texty-link-visited-color)
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
        list-style-type: none;
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
        border-color: var(--link-color);
        box-shadow: var(--shadow-hover);
        transform: translateY(-1px)
    }

    .text-content:last-child {
        margin-bottom: 0
    }

    .text-content.text-content-compact {
        padding: clamp(.85rem, 1.5vw, 1.2rem);
        margin-top: 0px
    }

    .user-list {
        background-image: linear-gradient(160deg, rgba(139, 92, 246, .12), transparent 60%)
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

    .script-list li:not(.ad-entry) {
        border-bottom: 1px solid var(--content-separator-color);
        padding: clamp(1rem, 2.5vw, 1.6rem);
        display: grid;
        gap: .55rem;
        background: rgba(255, 255, 255, 0.02);
        transition: background-color var(--transition-base, 0.25s ease),
                    box-shadow var(--transition-base, 0.25s ease),
                    transform var(--transition-base, 0.25s ease);
        border-radius: 6px;
    }

    .script-list li:not(.ad-entry):hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255,255,255,0.06);
        transform: translateY(-1px);
    }

    .script-list li:not(.ad-entry):last-child {
        border-bottom: none
    }

    .script-list .cf-wrapper {
        margin: 0!important
    }

    @media screen and (max-width: 960px) {
        .script-list li:not(.ad-entry) {
            padding: clamp(.9rem, 4vw, 1.3rem)
        }
    }

    .script-list h2 {
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

    .script-list h2 .gf-script-logo {
        margin-right: 0;
        align-self: center;
        vertical-align: middle;
    }

    .script-list p {
        margin: 0
    }

    .script-list footer {
        margin-top: .35em;
        display: flex;
        flex-wrap: wrap;
        gap: .6rem;
        font-size: .875rem;
        color: var(--texty-link-visited-color)
    }

    .script-list footer a {
        font-weight: 500
    }

    .list-current,.script-list h2 {
        font-weight: 700
    }

    .script-list .description {
        font-weight: 400;
        display: block;
        flex-basis: 100%;
        margin: .5em 0;
        font-size: .95rem;
        color: var(--texty-link-visited-color)
    }

    .script-list .name-description-separator {
        display: none
    }

    #script-description,.script-list h2>a,.script-list .description {
        word-wrap: break-word
    }

    @media screen and (max-width: 720px) {
        .script-list,#script-content {
            margin-left:unset
        }
    }

    .pagination,.script-list+.pagination,.user-list+.pagination {
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

    .pagination>*,.script-list+.pagination>*,.user-list+.pagination>* {
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

    .pagination .current {
        font-style: normal;
        font-weight: 700
    }

    .pagination .current,.pagination .gap {
        background-color: transparent;
        color: var(--texty-link-visited-color)
    }

    .pagination .current {
        border-color: var(--link-color);
        color: var(--link-color);
        box-shadow: inset 0 0 0 1px var(--link-color);
        background-color: rgba(139, 92, 246, .16)
    }

    .pagination>a:hover,.pagination>a:focus {
        background-color: var(--pagination-hover-background-color);
        color: var(--overall-text-color);
        transform: translateY(-1px);
        box-shadow: 0 12px 24px rgba(139, 92, 246, .28)
    }

    .pagination>a:focus-visible {
        outline: 2px solid var(--focus-ring-color);
        outline-offset: 2px
    }

    @media screen and (max-width: 400px) {
        .pagination,.script-list+.pagination,.user-list+.pagination {
            padding-left: 1rem;
            padding-right: 1rem
        }
    }

    .good-rating-count,.ok-rating-count,.bad-rating-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.2em;
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
        height: 400px
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
        border-bottom: 1px solid var(--content-border-color);
        padding: .75rem 1rem;
        text-align: left
    }

    .stats-table th {
        background: linear-gradient(180deg, rgba(139, 92, 246, .18), rgba(139, 92, 246, .06));
        font-weight: 600;
        color: var(--overall-text-color)
    }

    .stats-table tr:last-child td {
        border-bottom: none
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
        padding: 2px 2px 3px 25px;
        border: 1px solid var(--content-border-color);
        border-radius: 2px;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: 5px 2px
    }

    .external-login-container {
        display: inline-block;
        vertical-align: top
    }

    .external-login-container * {
        text-align: center;
        display: block
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
        border: 1px solid var(--content-border-color);
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
        border: 1px solid var(--content-border-color);
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
        color: #f8fafc;
        background-color: #3b1e8a;
        background-image: linear-gradient(#2f2675,#4c1d95);
        border: 0px solid transparent;
        box-shadow: 0 8px 18px rgba(139, 92, 246, .32),0 12px 28px rgba(15, 23, 42, .38);
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

    .sidebar-search,.home-search {
        position: relative;
        vertical-align: middle
    }

    .sidebar-search input[type=search],.home-search input[type=search] {
        padding: .6em 78px .6em .8em;
    }

    .sidebar-search input[type=search]::-webkit-search-cancel-button,
    .home-search input[type=search]::-webkit-search-cancel-button {
        margin-right: 38px;
    }

    .sidebar-search input[type=search] {
        width: 100%;
        margin: 0 0 1em
    }

    .sidebar-search input[type=submit],.home-search input[type=submit] {
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

    .sidebar-search input[type=submit] {
        bottom: 14px;
    }

    .sidebar-search input[type=submit]:hover,.sidebar-search input[type=submit]:focus,.sidebar-search input[type=submit]:active,
    .home-search input[type=submit]:hover,.home-search input[type=submit]:focus,.home-search input[type=submit]:active {
        background-color: var(--content-background-color) !important;
        box-shadow: none;
        transform: none
    }

    @media screen and (max-width: 680px) {
        .sidebar-search input[type=search],.home-search input[type=search] {
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
        background-color: #2563eb;
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
            background: #25282a
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

    .discussion-list-item,.notification-list-item {
        padding-top: 10px;
        border-top: 1px solid var(--content-separator-color)
    }

    .discussion-list-container:first-child .discussion-list-item {
        border-top: 0
    }

    .discussion-list-logged-in .discussion-read,.notification-read {
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
        right: -0.4rem;
        width: min(22rem, calc(100vw - 0.7rem));
        max-width: calc(100vw - 0.7rem);
        box-sizing: border-box;
        overflow-x: hidden;
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
        margin-bottom: 1em
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
        border: 1px solid gray;
        overflow: auto;
        box-sizing: border-box;
        margin: 0;
        padding: 16px
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
        border-color: var(--link-color);
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
        font-size: small
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

    dd.script-list-ratings {
        margin-top: 0;
        margin-bottom: 0
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
    }

    dd.script-list-ratings > span {
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px !important;
    }

    dd.script-list-ratings span.good-rating-count,
    dd.script-list-ratings span.ok-rating-count,
    dd.script-list-ratings span.bad-rating-count {
        display: inline-block !important;
        margin: 0 !important;
        padding: 0 0 !important;
        line-height: 1 !important;
    }

    dd.script-list-ratings span.good-rating-count { color: #4CAF50 !important; }
    dd.script-list-ratings span.ok-rating-count { color: #FFC107 !important; }
    dd.script-list-ratings span.bad-rating-count { color: #F44336 !important; }

    @media screen and (max-width: 600px) {
        .script-meta-block {
            column-count:1
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
        width: 45%;
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

    @media screen and (max-width: 800px) {
        .sidebarred {
            display:block;
            position: relative
        }

        .sidebar {
            position: absolute;
            right: 0;
            top: 0;
            background: var(--sidebar-background);
            padding-top: 0;
            padding-left: 1em;
            padding-right: 1em;
            border-width: 1px 0 1px 1px;
            border-style: solid;
            border-color: gray;
            border-radius: 6px 0 0 6px;
            overflow: hidden
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
            right: -0.35rem
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

    .lum-lightbox-inner {
        top: 2.5%;
        right: 2.5%;
        bottom: 2.5%;
        left: 2.5%
    }

    .lum-lightbox-inner img {
        position: relative
    }

    .lum-lightbox-inner .lum-lightbox-caption {
        margin: 0 auto;
        color: #fff;
        max-width: 700px;
        text-align: center
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

    .lum-loading .lum-img {
        opacity: 0
    }

    .lum-gallery-button {
        overflow: hidden;
        text-indent: 150%;
        white-space: nowrap;
        background: transparent;
        border: 0;
        margin: 0;
        padding: 0;
        outline: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 100px;
        max-height: 100%;
        width: 60px;
        cursor: pointer
    }

    .lum-close-button {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 32px;
        height: 32px;
        opacity: .3
    }

    .lum-close-button:hover {
        opacity: 1
    }

    .lum-close-button:before,.lum-close-button:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 33px;
        width: 2px;
        background-color: #fff
    }

    .lum-close-button:before {
        transform: rotate(45deg)
    }

    .lum-close-button:after {
        transform: rotate(-45deg)
    }

    .lum-previous-button {
        left: 12px
    }

    .lum-next-button {
        right: 12px
    }

    .lum-gallery-button:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        width: 36px;
        height: 36px;
        border-top: 4px solid rgba(255,255,255,.8)
    }

    .lum-previous-button:after {
        transform: translateY(-50%) rotate(-45deg);
        border-left: 4px solid rgba(255,255,255,.8);
        box-shadow: -2px 0 #0003;
        left: 12%;
        border-radius: 3px 0 0
    }

    .lum-next-button:after {
        transform: translateY(-50%) rotate(45deg);
        border-right: 4px solid rgba(255,255,255,.8);
        box-shadow: 2px 0 #0003;
        right: 12%;
        border-radius: 0 3px 0 0
    }

    @media (max-width: 460px) {
        .lum-lightbox-image-wrapper {
            display:flex;
            overflow: auto;
            -webkit-overflow-scrolling: touch
        }

        .lum-lightbox-caption {
            width: 100%;
            position: absolute;
            bottom: 0
        }

        .lum-lightbox-position-helper {
            margin: auto
        }

        .lum-lightbox-inner img {
            max-width: none;
            max-height: none
        }
    }

    .script-list dd span relative-time {
    display: inline-block;
    line-height: 1.2;
    vertical-align: middle;
    position: relative;
    top: 0.5px;
    }

    .script-list dd {
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
        font-size: 0.9rem;
        line-height: var(--hljs-line-height);
        text-align: right;
        white-space: pre;
        user-select: none;
        border-right: 1px solid var(--hljs-border);
        background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
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
        font-size: 0.9rem;
        line-height: var(--hljs-line-height);
        white-space: pre;
        background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) - 1px),
            var(--hljs-bg-alt) calc(var(--hljs-line-height) * 2)
        );
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


    let loadingCleared = false;
    let phoneLoadClearScheduled = false;

    const clearNoTransition = () => {
        if (loadingCleared) {
            return;
        }

        loadingCleared = true;
        root.removeAttribute(LOADING_ATTR);
        root.removeAttribute(INTERNAL_LOADING_ATTR);
        if (noTransitionStyle.parentNode) {
            noTransitionStyle.parentNode.removeChild(noTransitionStyle);
        }
    };

    const scheduleNoTransitionClear = (frames = 2) => {
        if (loadingCleared) {
            return;
        }

        let remainingFrames = Math.max(0, frames);
        const step = () => {
            if (loadingCleared) {
                return;
            }

            if (remainingFrames === 0) {
                clearNoTransition();
                return;
            }

            remainingFrames -= 1;
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const schedulePhoneLoadClear = () => {
        if (phoneLoadClearScheduled || !root.hasAttribute(HANDHELD_ATTR)) {
            return;
        }

        phoneLoadClearScheduled = true;
        const unlock = () => {
            scheduleNoTransitionClear(root.hasAttribute(INTERNAL_LOADING_ATTR) ? 3 : 1);
        };

        if (document.readyState === 'complete') {
            unlock();
            return;
        }

        window.addEventListener('load', unlock, { once: true });
    };

    const style = document.createElement('style');
    style.id = THEME_STYLE_ID;
    style.textContent = currentTheme === 'dark' ? DARK_CSS : LIGHT_CSS;
    appendStyle(style);
    if (root.hasAttribute(HANDHELD_ATTR)) {
        schedulePhoneLoadClear();
    }

    const themeSwitchHosts = [];

    const syncThemeSwitchHosts = (theme) => {
        themeSwitchHosts.forEach((host) => {
            host.setAttribute('theme', theme);
        });
    };

    const createThemeSwitchHost = (hostId, options = {}) => {
        if (document.getElementById(hostId)) {
            return null;
        }

        const host = document.createElement('div');
        host.id = hostId;
        host.style.display = 'inline-flex';
        host.style.alignItems = 'center';
        host.style.verticalAlign = 'middle';
        host.style.marginLeft = options.marginLeft || '0';
        host.style.marginRight = options.marginRight || '0';
        host.style.marginTop = options.marginTop || '0';
        host.style.justifyContent = options.justifyContent || 'flex-start';

        const shadow = host.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
        <style>
        :host {
            all: initial;
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
        }
        button {
            all: unset;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            width: 52px;
            height: 26px;
            border-radius: 20px;
            background: #ccc;
            position: relative;
            transition: background 0.3s ease;
            box-sizing: border-box;
        }
        .thumb {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease, background 0.3s ease;
            box-sizing: border-box;
        }
        svg {
            width: 14px;
            height: 14px;
            stroke-width: 2;
            fill: none;
        }
        .sun { stroke: #f9b208; }
        .moon { stroke: #58a6ff; display: none; }
        :host([theme="dark"]) button { background: #444; }
        :host([theme="dark"]) .thumb { transform: translateX(24px); background: #111; }
        :host([theme="dark"]) .sun { display: none; }
        :host([theme="dark"]) .moon { display: block; }
        </style>

        <button title="Changer de thème">
        <div class="thumb">
            <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        </div>
        </button>
    `;

        shadow.querySelector('button').addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            currentTheme = newTheme;
            applyRootTheme(newTheme);
            localStorage.setItem(STORAGE_KEY, newTheme);
            style.textContent = newTheme === 'dark' ? DARK_CSS : LIGHT_CSS;
            syncThemeSwitchHosts(newTheme);
        });

        themeSwitchHosts.push(host);
        host.setAttribute('theme', currentTheme);
        return host;
    };

    const initThemeSwitch = () => {
        const host = createThemeSwitchHost('gf-theme-switch', {
            marginLeft: '8px'
        });

        if (!host) {
            return;
        }

        const langForm = document.querySelector('form.language-selector');
        if (langForm && langForm.parentNode) {
            langForm.parentNode.insertBefore(host, langForm.nextSibling);
        }
    };

    const initMobileThemeSwitch = () => {
        const host = createThemeSwitchHost('gf-mobile-theme-switch', {
            marginTop: '0.85rem',
            marginRight: '1.2rem'
        });

        if (!host) {
            return;
        }

        const mobileNav = document.querySelector('#mobile-nav nav');
        const languageItem = document.querySelector('#mobile-nav form.language-selector')?.closest('li');
        if (!mobileNav || !languageItem) {
            return;
        }

        const switchItem = document.createElement('li');
        switchItem.id = 'gf-mobile-theme-switch-item';
        switchItem.appendChild(host);
        mobileNav.insertBefore(switchItem, languageItem);
    };

    const initMobileNavLayout = () => {
        const mobileNav = document.querySelector('#mobile-nav nav');
        if (!mobileNav || document.getElementById('gf-mobile-primary-nav-item')) {
            return;
        }

        const scriptsItem = mobileNav.querySelector('li.scripts-index-link');
        const forumItem = mobileNav.querySelector('li.forum-link');
        const helpItem = mobileNav.querySelector('li.help-link');
        if (!scriptsItem || !forumItem || !helpItem) {
            return;
        }

        const primaryItem = document.createElement('li');
        primaryItem.id = 'gf-mobile-primary-nav-item';

        const primaryNav = document.createElement('div');
        primaryNav.id = 'gf-mobile-primary-nav';

        [scriptsItem, forumItem, helpItem].forEach((item) => {
            const link = item.querySelector('a');
            if (link) {
                primaryNav.appendChild(link);
            }
            item.remove();
        });

        const toggleButton = document.createElement('button');
        toggleButton.id = 'gf-mobile-primary-nav-toggle';
        toggleButton.type = 'button';
        toggleButton.textContent = '+';
        toggleButton.setAttribute('aria-expanded', 'false');
        primaryNav.appendChild(toggleButton);
        primaryItem.appendChild(primaryNav);

        const secondaryItem = document.createElement('li');
        secondaryItem.id = 'gf-mobile-secondary-nav-item';

        const secondaryNav = document.createElement('div');
        secondaryNav.id = 'gf-mobile-secondary-nav';
        secondaryNav.className = 'collapsed';

        const divider = document.createElement('div');
        divider.className = 'gf-mobile-secondary-divider';
        secondaryNav.appendChild(divider);

        [
            ...mobileNav.querySelectorAll(':scope > li')
        ].filter((item) => {
            if (item.id === 'gf-mobile-theme-switch-item') {
                return false;
            }

            if (item.classList.contains('multi-link-nav')) {
                return false;
            }

            return !item.querySelector('form.language-selector');
        }).forEach((item) => {
            secondaryNav.appendChild(item);
        });

        toggleButton.addEventListener('click', () => {
            const willExpand = secondaryNav.classList.contains('collapsed');
            secondaryNav.classList.toggle('collapsed', !willExpand);
            toggleButton.textContent = willExpand ? '-' : '+';
            toggleButton.setAttribute('aria-expanded', willExpand ? 'true' : 'false');
        });

        secondaryItem.appendChild(secondaryNav);
        mobileNav.prepend(secondaryItem);
        mobileNav.prepend(primaryItem);
    };

    const initCompactUserScriptSets = () => {
        const scriptSets = document.querySelector('#user-script-sets');
        if (!scriptSets) {
            return;
        }

        const container = scriptSets.closest('.text-content');
        if (container) {
            container.classList.add('text-content-compact');
        }
    };

    const HIGHLIGHT_ATTR = 'data-gfplus-hljs';
    const HLJS_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    const HLJS_SCRIPT_ATTR = 'data-gfplus-hljs-script';
    let wrapLinesBound = false;

    const getWrapLinesToggle = () => document.querySelector('#wrap-lines');

    const syncWrapLines = () => {
        const toggle = getWrapLinesToggle();
        if (!toggle) {
            return;
        }

        const shouldWrap = toggle.checked;
        document.querySelectorAll('pre.gf-hljs').forEach((pre) => {
            pre.classList.toggle('wrap', shouldWrap);
        });
    };

    const maybeInitWrapLinesToggle = () => {
        if (wrapLinesBound) {
            return;
        }

        const toggle = getWrapLinesToggle();
        if (!toggle) {
            return;
        }

        wrapLinesBound = true;
        toggle.addEventListener('change', syncWrapLines);
    };

    const loadHighlightJs = () => {
        if (window.hljs && typeof window.hljs.highlightElement === 'function') {
            return Promise.resolve(true);
        }

        return new Promise((resolve) => {
            const existing = document.querySelector(`script[${HLJS_SCRIPT_ATTR}]`);
            if (existing) {
                existing.addEventListener('load', () => resolve(true), { once: true });
                existing.addEventListener('error', () => resolve(false), { once: true });
                return;
            }

            const script = document.createElement('script');
            script.src = HLJS_SRC;
            script.async = true;
            script.setAttribute(HLJS_SCRIPT_ATTR, 'true');
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            (document.head || document.documentElement).appendChild(script);
        });
    };

    const getHighlightLanguage = (element) => {
        if (!element || !element.className) {
            return null;
        }

        const classes = element.className.split(/\s+/);
        const langClass = classes.find((cls) => cls.startsWith('language-') || cls.startsWith('lang-'));
        if (!langClass) {
            return null;
        }

        return langClass.replace(/^language-/, '').replace(/^lang-/, '');
    };

    const ensureLineNumbers = (pre, codeText) => {
        if (pre.querySelector('.hljs-line-numbers')) {
            return;
        }

        const lineCount = codeText.split(/\n/).length;
        const numbers = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');
        const numbersEl = document.createElement('span');
        numbersEl.className = 'hljs-line-numbers';
        numbersEl.textContent = numbers;
        pre.insertBefore(numbersEl, pre.firstChild);
    };

    const highlightCodeBlock = (pre) => {
        const state = pre.getAttribute(HIGHLIGHT_ATTR);
        const hasHljs = window.hljs && typeof window.hljs.highlightElement === 'function';
        if (state === 'done') {
            return;
        }

        let codeEl = pre.querySelector('code.hljs');
        if (!codeEl) {
            const codeText = pre.textContent;
            if (!codeText || !codeText.trim()) {
                return;
            }

            codeEl = document.createElement('code');
            const lang = getHighlightLanguage(pre) || getHighlightLanguage(pre.querySelector('code'));
            codeEl.classList.add('hljs');
            if (lang) {
                codeEl.classList.add(`language-${lang}`);
            }
            codeEl.textContent = codeText;

            pre.innerHTML = '';
            pre.appendChild(codeEl);
            pre.classList.add('gf-hljs');
            pre.classList.remove('prettyprint', 'linenums');
            ensureLineNumbers(pre, codeText);
        } else {
            const codeText = codeEl.textContent || '';
            if (codeText) {
                ensureLineNumbers(pre, codeText);
            }
            pre.classList.add('gf-hljs');
        }

        if (hasHljs) {
            window.hljs.highlightElement(codeEl);
            pre.setAttribute(HIGHLIGHT_ATTR, 'done');
        } else {
            pre.setAttribute(HIGHLIGHT_ATTR, 'pending');
        }
    };

    const applyHighlightJs = () => {
        document
            .querySelectorAll('.code-container pre, #code-container pre, pre.prettyprint, pre.gf-hljs')
            .forEach(highlightCodeBlock);
        maybeInitWrapLinesToggle();
        syncWrapLines();
    };

    const initHighlightJs = () => {
        applyHighlightJs();

        const root = document.querySelector('#script-content') || document.body;
        const observer = new MutationObserver(applyHighlightJs);
        observer.observe(root, { childList: true, subtree: true });

        loadHighlightJs().then((loaded) => {
            if (!loaded || !window.hljs || typeof window.hljs.highlightElement !== 'function') {
                return;
            }

            applyHighlightJs();
        });
    };

    const SCRIPT_LOGO_ATTR = 'data-gfplus-logo';
    const scriptIconCache = new Map();
    let scriptLogoObserver = null;
    const LOGO_SIZE_LIST = 26;
    const LOGO_SIZE_TITLE = 34;

    const normalizeIconUrl = (iconUrl, baseUrl) => {
        if (!iconUrl) {
            return null;
        }

        if (iconUrl.startsWith('data:')) {
            return iconUrl;
        }

        if (iconUrl.startsWith('//')) {
            return `https:${iconUrl}`;
        }

        try {
            return new URL(iconUrl, baseUrl).href;
        } catch (error) {
            return iconUrl;
        }
    };

    const extractMetaIcon = (scriptText, baseUrl) => {
        const metaMatch = scriptText.match(/\/\/\s*==UserScript==[\s\S]*?\/\/\s*==\/UserScript==/);
        if (!metaMatch) {
            return null;
        }

        const lines = metaMatch[0].split(/\r?\n/);
        let iconValue = null;
        let icon64Value = null;

        lines.forEach((line) => {
            const cleaned = line.replace(/^\s*\/\/\s*/, '').trim();
            if (!cleaned.startsWith('@')) {
                return;
            }

            const [rawTag, ...rest] = cleaned.split(/\s+/);
            const tag = rawTag.toLowerCase();
            const value = rest.join(' ').trim();
            if (!value) {
                return;
            }

            if (tag === '@icon64' || tag === '@icon64url') {
                icon64Value = value;
            } else if (tag === '@icon' || tag === '@iconurl') {
                if (!iconValue) {
                    iconValue = value;
                }
            }
        });

        return normalizeIconUrl(icon64Value || iconValue, baseUrl);
    };

    const fetchScriptIcon = (codeUrl) => {
        if (!codeUrl) {
            return Promise.resolve(null);
        }

        if (scriptIconCache.has(codeUrl)) {
            return scriptIconCache.get(codeUrl);
        }

        const fetchPromise = (async () => {
            let scriptText = '';
            let iconUrl = null;

            try {
                const ranged = await fetch(codeUrl, { headers: { Range: 'bytes=0-8191' } });
                if (ranged.ok) {
                    scriptText = await ranged.text();
                    iconUrl = extractMetaIcon(scriptText, codeUrl);
                }
            } catch (error) {
                scriptText = '';
            }

            if (!iconUrl) {
                try {
                    const response = await fetch(codeUrl);
                    if (response.ok) {
                        scriptText = await response.text();
                        iconUrl = extractMetaIcon(scriptText, codeUrl);
                    }
                } catch (error) {
                    iconUrl = null;
                }
            }

            return iconUrl;
        })();

        scriptIconCache.set(codeUrl, fetchPromise);
        return fetchPromise;
    };

    const createScriptLogoElement = (iconUrl) => {
        if (iconUrl) {
            const img = document.createElement('img');
            img.className = 'gf-script-logo';
            img.alt = '';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.referrerPolicy = 'no-referrer';
            img.width = LOGO_SIZE_LIST;
            img.height = LOGO_SIZE_LIST;
            img.src = iconUrl;
            return img;
        }

        const fallback = document.createElement('span');
        fallback.className = 'gf-script-logo gf-script-logo--fallback';
        fallback.setAttribute('aria-hidden', 'true');
        fallback.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 8L3 12L7 16"></path>
            <path d="M17 8L21 12L17 16"></path>
            <path d="M10 19L14 5"></path>
        </svg>
        `;
        return fallback;
    };

    const ensureLogoForLink = (link) => {
        if (!link || link.getAttribute(SCRIPT_LOGO_ATTR)) {
            return;
        }

        const listItem = link.closest('li[data-code-url]');
        const codeUrl = listItem ? listItem.getAttribute('data-code-url') : null;
        if (!codeUrl) {
            return;
        }

        link.setAttribute(SCRIPT_LOGO_ATTR, 'pending');
        fetchScriptIcon(codeUrl)
            .then((iconUrl) => {
                const parent = link.parentNode;
                if (!parent) {
                    link.removeAttribute(SCRIPT_LOGO_ATTR);
                    return;
                }

                if (parent.querySelector('.gf-script-logo')) {
                    link.setAttribute(SCRIPT_LOGO_ATTR, 'done');
                    return;
                }

                const logoEl = createScriptLogoElement(iconUrl);
                if (!logoEl) {
                    link.removeAttribute(SCRIPT_LOGO_ATTR);
                    return;
                }

                parent.insertBefore(logoEl, link);
                link.setAttribute(SCRIPT_LOGO_ATTR, 'done');
            })
            .catch(() => {
                link.removeAttribute(SCRIPT_LOGO_ATTR);
            });
    };

    const ensureLogoForHeaderTitle = () => {
        const headerTitle = document.querySelector('#script-info header h2, #script-info h2');
        if (!headerTitle || headerTitle.getAttribute(SCRIPT_LOGO_ATTR)) {
            return;
        }

        const installLink = document.querySelector('a.install-link[data-install-format="js"]');
        const codeUrl = installLink ? installLink.href : null;
        if (!codeUrl) {
            return;
        }

        headerTitle.setAttribute(SCRIPT_LOGO_ATTR, 'pending');
        fetchScriptIcon(codeUrl)
            .then((iconUrl) => {
                if (headerTitle.querySelector('.gf-script-logo')) {
                    headerTitle.setAttribute(SCRIPT_LOGO_ATTR, 'done');
                    return;
                }

                const logoEl = createScriptLogoElement(iconUrl);
                if (!logoEl) {
                    headerTitle.removeAttribute(SCRIPT_LOGO_ATTR);
                    return;
                }

                logoEl.classList.add('gf-script-logo--title');
                if (logoEl.tagName === 'IMG') {
                    logoEl.width = LOGO_SIZE_TITLE;
                    logoEl.height = LOGO_SIZE_TITLE;
                }
                headerTitle.insertBefore(logoEl, headerTitle.firstChild);
                headerTitle.setAttribute(SCRIPT_LOGO_ATTR, 'done');
            })
            .catch(() => {
                headerTitle.removeAttribute(SCRIPT_LOGO_ATTR);
            });
    };

    const applyScriptLogos = () => {
        document.querySelectorAll('a.script-link').forEach(ensureLogoForLink);
        ensureLogoForHeaderTitle();
    };

    const initScriptLogos = () => {
        applyScriptLogos();
        if (scriptLogoObserver) {
            return;
        }

        scriptLogoObserver = new MutationObserver(applyScriptLogos);
        scriptLogoObserver.observe(document.body, { childList: true, subtree: true });
    };

    // i18n dictionary for user navigation
    const USER_NAV_I18N = {
        'en': {
            submitScript: 'Post a script',
            submitStyle: 'Post a style',
            submitSet: 'New script set',
            webhookInfo: 'Set up a webhook',
            importScripts: 'Import scripts',
            editProfile: 'Edit profile',
            editSignIn: 'Edit sign-in methods',
            viewNotifications: 'View notifications',
            notificationSettings: 'Edit notification settings',
            deleteAccount: 'Delete account'
        },

        'fr': {
            submitScript: 'Publier un script',
            submitStyle: 'Publier un style',
            submitSet: 'Nouveau jeu de scripts',
            webhookInfo: 'Mettre en place un Webhook',
            importScripts: 'Importer des scripts',
            editProfile: 'Modifier mon compte',
            editSignIn: 'Modifier mes méthodes d\'identification',
            viewNotifications: 'Afficher les notifications',
            notificationSettings: 'Modifier les paramètres de notification',
            deleteAccount: 'Supprimer mon compte'
        },

        'es': {
            submitScript: 'Publicar un script',
            submitStyle: 'Publicar un estilo',
            submitSet: 'Nuevo conjunto de scripts',
            webhookInfo: 'Configurar un webhook',
            importScripts: 'Importar scripts',
            editProfile: 'Editar perfil',
            editSignIn: 'Editar métodos de inicio de sesión',
            viewNotifications: 'Ver notificaciones',
            notificationSettings: 'Editar configuración de notificaciones',
            deleteAccount: 'Eliminar cuenta'
        },

        'de': {
            submitScript: 'Skript veröffentlichen',
            submitStyle: 'Style veröffentlichen',
            submitSet: 'Neues Skript-Set',
            webhookInfo: 'Webhook einrichten',
            importScripts: 'Skripte importieren',
            editProfile: 'Profil bearbeiten',
            editSignIn: 'Anmeldemethoden bearbeiten',
            viewNotifications: 'Benachrichtigungen anzeigen',
            notificationSettings: 'Benachrichtigungseinstellungen bearbeiten',
            deleteAccount: 'Konto löschen'
        },

        'it': {
            submitScript: 'Pubblica uno script',
            submitStyle: 'Pubblica uno stile',
            submitSet: 'Nuovo set di script',
            webhookInfo: 'Configurare un webhook',
            importScripts: 'Importa script',
            editProfile: 'Modifica profilo',
            editSignIn: 'Modifica metodi di accesso',
            viewNotifications: 'Visualizza notifiche',
            notificationSettings: 'Modifica impostazioni notifiche',
            deleteAccount: 'Elimina account'
        },

        'pt': {
            submitScript: 'Publicar script',
            submitStyle: 'Publicar estilo',
            submitSet: 'Novo conjunto de scripts',
            webhookInfo: 'Configurar webhook',
            importScripts: 'Importar scripts',
            editProfile: 'Editar perfil',
            editSignIn: 'Editar métodos de login',
            viewNotifications: 'Ver notificações',
            notificationSettings: 'Editar configurações de notificação',
            deleteAccount: 'Excluir conta'
        },

        'ru': {
            submitScript: 'Опубликовать скрипт',
            submitStyle: 'Опубликовать стиль',
            submitSet: 'Набор скриптов',
            webhookInfo: 'Настроить вебхук',
            importScripts: 'Импортировать скрипты',
            editProfile: 'Редактировать профиль',
            editSignIn: 'Редактировать способы входа',
            viewNotifications: 'Просмотр уведомлений',
            notificationSettings: 'Настройки уведомлений',
            deleteAccount: 'Удалить аккаунт'
        },

        'ja': {
            submitScript: 'スクリプトを投稿',
            submitStyle: 'スタイルを投稿',
            submitSet: '新しいスクリプトセット',
            webhookInfo: 'Webhookを設定',
            importScripts: 'スクリプトをインポート',
            editProfile: 'プロフィールを編集',
            editSignIn: 'ログイン方法を編集',
            viewNotifications: '通知を表示',
            notificationSettings: '通知設定を編集',
            deleteAccount: 'アカウントを削除'
        },

        'zh-CN': {
            submitScript: '发布脚本',
            submitStyle: '发布样式',
            submitSet: '新的脚本集',
            webhookInfo: '设置 Webhook',
            importScripts: '导入脚本',
            editProfile: '编辑个人资料',
            editSignIn: '编辑登录方式',
            viewNotifications: '查看通知',
            notificationSettings: '编辑通知设置',
            deleteAccount: '删除账户'
        },

        'zh-TW': {
            submitScript: '發佈腳本',
            submitStyle: '發佈樣式',
            submitSet: '新的腳本集',
            webhookInfo: '設定 Webhook',
            importScripts: '匯入腳本',
            editProfile: '編輯個人資料',
            editSignIn: '編輯登入方式',
            viewNotifications: '查看通知',
            notificationSettings: '編輯通知設定',
            deleteAccount: '刪除帳戶'
        },

        'ar': {
            submitScript: 'نشر سكربت',
            submitStyle: 'نشر نمط',
            submitSet: 'مجموعة سكربتات جديدة',
            webhookInfo: 'إعداد Webhook',
            importScripts: 'استيراد سكربتات',
            editProfile: 'تعديل الحساب',
            editSignIn: 'تعديل طرق تسجيل الدخول',
            viewNotifications: 'عرض الإشعارات',
            notificationSettings: 'تعديل إعدادات الإشعارات',
            deleteAccount: 'حذف الحساب'
        },

        'hi': {
            submitScript: 'स्क्रिप्ट प्रकाशित करें',
            submitStyle: 'स्टाइल प्रकाशित करें',
            submitSet: 'नया स्क्रिप्ट सेट',
            webhookInfo: 'Webhook सेट करें',
            importScripts: 'स्क्रिप्ट आयात करें',
            editProfile: 'प्रोफ़ाइल संपादित करें',
            editSignIn: 'लॉगिन विधियाँ संपादित करें',
            viewNotifications: 'सूचनाएँ देखें',
            notificationSettings: 'सूचना सेटिंग संपादित करें',
            deleteAccount: 'खाता हटाएँ'
        },
        'ko': {
            submitScript: '스크립트 게시',
            submitStyle: '스타일 게시',
            submitSet: '새 스크립트 세트',
            webhookInfo: 'Webhook 설정',
            importScripts: '스크립트 가져오기',
            editProfile: '프로필 수정',
            editSignIn: '로그인 방법 수정',
            viewNotifications: '알림 보기',
            notificationSettings: '알림 설정 수정',
            deleteAccount: '계정 삭제'
        },

        'tr': {
            submitScript: 'Script yayınla',
            submitStyle: 'Stil yayınla',
            submitSet: 'Yeni script seti',
            webhookInfo: 'Webhook ayarla',
            importScripts: 'Script içe aktar',
            editProfile: 'Profili düzenle',
            editSignIn: 'Giriş yöntemlerini düzenle',
            viewNotifications: 'Bildirimleri görüntüle',
            notificationSettings: 'Bildirim ayarlarını düzenle',
            deleteAccount: 'Hesabı sil'
        },

        'pl': {
            submitScript: 'Opublikuj skrypt',
            submitStyle: 'Opublikuj styl',
            submitSet: 'Nowy zestaw skryptów',
            webhookInfo: 'Skonfiguruj webhook',
            importScripts: 'Importuj skrypty',
            editProfile: 'Edytuj profil',
            editSignIn: 'Edytuj metody logowania',
            viewNotifications: 'Zobacz powiadomienia',
            notificationSettings: 'Edytuj ustawienia powiadomień',
            deleteAccount: 'Usuń konto'
        },

        'nl': {
            submitScript: 'Script publiceren',
            submitStyle: 'Stijl publiceren',
            submitSet: 'Nieuwe scriptset',
            webhookInfo: 'Webhook instellen',
            importScripts: 'Scripts importeren',
            editProfile: 'Profiel bewerken',
            editSignIn: 'Aanmeldmethoden bewerken',
            viewNotifications: 'Meldingen bekijken',
            notificationSettings: 'Meldingsinstellingen bewerken',
            deleteAccount: 'Account verwijderen'
        },

        'sv': {
            submitScript: 'Publicera skript',
            submitStyle: 'Publicera stil',
            submitSet: 'Ny skriptsamling',
            webhookInfo: 'Konfigurera webhook',
            importScripts: 'Importera skript',
            editProfile: 'Redigera profil',
            editSignIn: 'Redigera inloggningsmetoder',
            viewNotifications: 'Visa notiser',
            notificationSettings: 'Redigera notisinställningar',
            deleteAccount: 'Ta bort konto'
        },

        'ro': {
            submitScript: 'Publică script',
            submitStyle: 'Publică stil',
            submitSet: 'Set nou de scripturi',
            webhookInfo: 'Configurează webhook',
            importScripts: 'Importă scripturi',
            editProfile: 'Editează profil',
            editSignIn: 'Editează metodele de autentificare',
            viewNotifications: 'Vezi notificări',
            notificationSettings: 'Editează setările notificărilor',
            deleteAccount: 'Șterge contul'
        },

        'vi': {
            submitScript: 'Đăng script',
            submitStyle: 'Đăng kiểu',
            submitSet: 'Bộ script mới',
            webhookInfo: 'Thiết lập webhook',
            importScripts: 'Nhập script',
            editProfile: 'Chỉnh sửa hồ sơ',
            editSignIn: 'Chỉnh sửa phương thức đăng nhập',
            viewNotifications: 'Xem thông báo',
            notificationSettings: 'Chỉnh sửa cài đặt thông báo',
            deleteAccount: 'Xóa tài khoản'
        },

        'id': {
            submitScript: 'Publikasikan skrip',
            submitStyle: 'Publikasikan gaya',
            submitSet: 'Set skrip baru',
            webhookInfo: 'Atur webhook',
            importScripts: 'Impor skrip',
            editProfile: 'Edit profil',
            editSignIn: 'Edit metode masuk',
            viewNotifications: 'Lihat notifikasi',
            notificationSettings: 'Edit pengaturan notifikasi',
            deleteAccount: 'Hapus akun'
        },

        'ms': {
            submitScript: 'Terbitkan skrip',
            submitStyle: 'Terbitkan gaya',
            submitSet: 'Set skrip baharu',
            webhookInfo: 'Sediakan webhook',
            importScripts: 'Import skrip',
            editProfile: 'Edit profil',
            editSignIn: 'Edit kaedah log masuk',
            viewNotifications: 'Lihat notifikasi',
            notificationSettings: 'Edit tetapan notifikasi',
            deleteAccount: 'Padam akaun'
        },

        'th': {
            submitScript: 'เผยแพร่สคริปต์',
            submitStyle: 'เผยแพร่สไตล์',
            submitSet: 'ชุดสคริปต์ใหม่',
            webhookInfo: 'ตั้งค่า Webhook',
            importScripts: 'นำเข้าสคริปต์',
            editProfile: 'แก้ไขโปรไฟล์',
            editSignIn: 'แก้ไขวิธีเข้าสู่ระบบ',
            viewNotifications: 'ดูการแจ้งเตือน',
            notificationSettings: 'แก้ไขการตั้งค่าการแจ้งเตือน',
            deleteAccount: 'ลบบัญชี'
        }
    }


    const initUserNavigation = () => {
        const navUserInfo = document.getElementById('nav-user-info');
        if (!navUserInfo) {
            return;
        }

        // Extract user ID and locale from the profile link
        const profileLink = navUserInfo.querySelector('.user-profile-link a');
        if (!profileLink) {
            return;
        }

        const profileHref = profileLink.getAttribute('href');
        const match = profileHref.match(/\/([a-z]{2}(?:-[A-Z]{2})?)\/users\/(\d+)-/);
        if (!match) {
            return;
        }

        const locale = match[1];
        const userId = match[2];

        // Get i18n strings for current locale (fallback to English)
        const i18n = USER_NAV_I18N[locale] || USER_NAV_I18N['en'];

        // Remove old sign-out link
        const signOutLink = navUserInfo.querySelector('.sign-out-link');
        if (signOutLink) {
            signOutLink.remove();
        }

        // Create icons container
        const iconsContainer = document.createElement('span');
        iconsContainer.className = 'gf-user-nav-icons';

        // Create Edit Icon and Panel
        const editIconContainer = document.createElement('span');
        editIconContainer.className = 'gf-user-icon';
        editIconContainer.setAttribute('data-panel', 'edit');
        editIconContainer.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
            `;

        const editPanel = document.createElement('div');
        editPanel.className = 'gf-user-panel';
        editPanel.setAttribute('data-panel-type', 'edit');
        editPanel.innerHTML = `
                <a href="/${locale}/script_versions/new">${i18n.submitScript}</a>
                <a href="/${locale}/script_versions/new?language=css">${i18n.submitStyle}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/users/${userId}/sets/new">${i18n.submitSet}</a>
                <a href="/${locale}/users/webhook-info">${i18n.webhookInfo}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/import">${i18n.importScripts}</a>
            `;
        editIconContainer.appendChild(editPanel);

        // Create Settings Icon and Panel
        const settingsIconContainer = document.createElement('span');
        settingsIconContainer.className = 'gf-user-icon gf-user-icon--settings gf-user-icon--settings--hover';
        settingsIconContainer.setAttribute('data-panel', 'settings');
        settingsIconContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor">
                <path d="M217.6,499.2v-55.279c-23.97-4.89-46.908-14.387-67.328-27.887l-39.091,39.083l-54.298-54.298
                        l39.083-39.091c-13.5-20.429-22.997-43.366-27.887-67.328H12.8v-76.8h55.279
                        c4.89-23.97,14.387-46.908,27.887-67.328l-39.083-39.091l54.298-54.306
                        l39.091,39.091c20.42-13.5,43.358-22.997,67.328-27.887V12.8h76.8v55.279
                        c23.97,4.89,46.908,14.387,67.328,27.887l39.091-39.091l54.298,54.306
                        l-39.083,39.091c13.5,20.429,22.997,43.366,27.887,67.328H499.2v76.8h-55.279
                        c-4.89,23.97-14.387,46.908-27.887,67.328l39.083,39.091l-54.298,54.298
                        l-39.091-39.083c-20.429,13.5-43.366,22.997-67.328,27.887V499.2H217.6z
                        M256,140.8c-63.522,0-115.2,51.678-115.2,115.2S192.478,371.2,256,371.2
                        S371.2,319.522,371.2,256S319.522,140.8,256,140.8z"/>
                </svg>
            `;

        const settingsPanel = document.createElement('div');
        settingsPanel.className = 'gf-user-panel';
        settingsPanel.setAttribute('data-panel-type', 'settings');
        settingsPanel.innerHTML = `
                <a href="/${locale}/users/edit">${i18n.editProfile}</a>
                <a href="/${locale}/users/edit_sign_in">${i18n.editSignIn}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/users/${userId}/notifications">${i18n.viewNotifications}</a>
                <a href="/${locale}/users/${userId}/notification_settings">${i18n.notificationSettings}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/users/edit_account_deletion">${i18n.deleteAccount}</a>
            `;
        settingsIconContainer.appendChild(settingsPanel);

        // Create Sign-out Icon
        const signOutIconContainer = document.createElement('a');
        signOutIconContainer.className = 'gf-user-icon';
        signOutIconContainer.setAttribute('href', `/${locale}/users/sign_out`);
        signOutIconContainer.setAttribute('rel', 'nofollow');
        signOutIconContainer.setAttribute('data-method', 'delete');
        signOutIconContainer.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
            `;

        // Append icons to container
        iconsContainer.appendChild(editIconContainer);
        iconsContainer.appendChild(settingsIconContainer);
        iconsContainer.appendChild(signOutIconContainer);

        // Insert icons container after the profile link
        const profileLinkSpan = navUserInfo.querySelector('.user-profile-link');
        if (profileLinkSpan.nextSibling) {
            navUserInfo.insertBefore(iconsContainer, profileLinkSpan.nextSibling);
        } else {
            navUserInfo.appendChild(iconsContainer);
        }

        // Panel toggle logic
        let activePanel = null;

        const closeAllPanels = () => {
            document.querySelectorAll('.gf-user-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            document.querySelectorAll('.gf-user-icon[data-panel]').forEach(icon => {
                icon.classList.remove('active');
            });
            activePanel = null;
        };

        const togglePanel = (icon, panel) => {
            const isActive = panel.classList.contains('active');

            closeAllPanels();

            if (!isActive) {
                panel.classList.add('active');
                icon.classList.add('active');
                activePanel = panel;
            }
        };

        // Add click handlers for edit and settings icons
        editIconContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePanel(editIconContainer, editPanel);
        });

        settingsIconContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePanel(settingsIconContainer, settingsPanel);
        });

        // Close panels when clicking outside
        document.addEventListener('click', (e) => {
            if (activePanel && !e.target.closest('.gf-user-icon')) {
                closeAllPanels();
            }
        });

        // Close panels on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && activePanel) {
                closeAllPanels();
            }
        });
    };

    const initMobileUserNavigation = () => {
        const mobileUserItem = document.querySelector('#mobile-nav li.multi-link-nav');
        if (!mobileUserItem) {
            return;
        }

        const profileLinkSpan = mobileUserItem.querySelector('.user-profile-link');
        const profileLink = profileLinkSpan?.querySelector('a');
        const signOutContainer = mobileUserItem.querySelector('.sign-out-link');
        if (!profileLink || !signOutContainer || mobileUserItem.querySelector('#gf-mobile-user-actions')) {
            return;
        }

        const profileHref = profileLink.getAttribute('href') || '';
        const match = profileHref.match(/\/([a-z]{2}(?:-[A-Z]{2})?)\/users\/(\d+)-/);
        if (!match) {
            return;
        }

        const locale = match[1];
        const userId = match[2];
        const i18n = USER_NAV_I18N[locale] || USER_NAV_I18N.en;
        const signOutAnchor = signOutContainer.querySelector('a');
        if (!signOutAnchor) {
            return;
        }

        const userRow = document.createElement('div');
        userRow.id = 'gf-mobile-user-row';

        const actions = document.createElement('span');
        actions.id = 'gf-mobile-user-actions';

        const editIconContainer = document.createElement('span');
        editIconContainer.className = 'gf-user-icon gf-mobile-edit-icon';
        editIconContainer.setAttribute('data-panel', 'edit');
        editIconContainer.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
            `;

        const editPanel = document.createElement('div');
        editPanel.className = 'gf-user-panel gf-mobile-user-panel';
        editPanel.setAttribute('data-panel-type', 'edit');
        editPanel.innerHTML = `
                <a href="/${locale}/script_versions/new">${i18n.submitScript}</a>
                <a href="/${locale}/script_versions/new?language=css">${i18n.submitStyle}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/users/${userId}/sets/new">${i18n.submitSet}</a>
                <a href="/${locale}/users/webhook-info">${i18n.webhookInfo}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/import">${i18n.importScripts}</a>
            `;

        const settingsIconContainer = document.createElement('span');
        settingsIconContainer.className = 'gf-user-icon gf-user-icon--settings gf-user-icon--settings--hover';
        settingsIconContainer.setAttribute('data-panel', 'settings');
        settingsIconContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M217.6,499.2v-55.279c-23.97-4.89-46.908-14.387-67.328-27.887l-39.091,39.083l-54.298-54.298
                            l39.083-39.091c-13.5-20.429-22.997-43.366-27.887-67.328H12.8v-76.8h55.279
                            c4.89-23.97,14.387-46.908,27.887-67.328l-39.083-39.091l54.298-54.306
                            l39.091,39.091c20.42-13.5,43.358-22.997,67.328-27.887V12.8h76.8v55.279
                            c23.97,4.89,46.908,14.387,67.328,27.887l39.091-39.091l54.298,54.306
                            l-39.083,39.091c13.5,20.429,22.997,43.366,27.887,67.328H499.2v76.8h-55.279
                            c-4.89,23.97-14.387,46.908-27.887,67.328l39.083,39.091l-54.298,54.298
                            l-39.091-39.083c-20.429,13.5-43.366,22.997-67.328,27.887V499.2H217.6z
                            M256,140.8c-63.522,0-115.2,51.678-115.2,115.2S192.478,371.2,256,371.2
                            S371.2,319.522,371.2,256S319.522,140.8,256,140.8z"/>
                </svg>
            `;

        const settingsPanel = document.createElement('div');
        settingsPanel.className = 'gf-user-panel gf-mobile-user-panel';
        settingsPanel.setAttribute('data-panel-type', 'settings');
        settingsPanel.innerHTML = `
                <a href="/${locale}/users/edit">${i18n.editProfile}</a>
                <a href="/${locale}/users/edit_sign_in">${i18n.editSignIn}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/users/${userId}/notifications">${i18n.viewNotifications}</a>
                <a href="/${locale}/users/${userId}/notification_settings">${i18n.notificationSettings}</a>
                <div class="gf-user-panel-separator"></div>
                <a href="/${locale}/users/edit_account_deletion">${i18n.deleteAccount}</a>
            `;

        const mobileSignOutLink = document.createElement('a');
        mobileSignOutLink.className = 'gf-user-icon gf-mobile-sign-out-icon';
        mobileSignOutLink.href = signOutAnchor.href;
        mobileSignOutLink.setAttribute('rel', signOutAnchor.getAttribute('rel') || 'nofollow');

        const method = signOutAnchor.getAttribute('data-method');
        if (method) {
            mobileSignOutLink.setAttribute('data-method', method);
        }

        mobileSignOutLink.innerHTML = `
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
            `;

        actions.appendChild(editIconContainer);
        actions.appendChild(settingsIconContainer);
        actions.appendChild(mobileSignOutLink);

        const userMeta = document.createElement('div');
        userMeta.id = 'gf-mobile-user-meta';
        userMeta.appendChild(profileLinkSpan);

        const mobileThemeSwitch = document.getElementById('gf-mobile-theme-switch');
        const mobileThemeSwitchItem = document.getElementById('gf-mobile-theme-switch-item');
        if (mobileThemeSwitch) {
            mobileThemeSwitch.style.marginTop = '0';
            mobileThemeSwitch.style.marginRight = '0';
            mobileThemeSwitch.style.marginLeft = '0';
            userMeta.appendChild(mobileThemeSwitch);
        }

        if (mobileThemeSwitchItem) {
            mobileThemeSwitchItem.remove();
        }

        userRow.appendChild(userMeta);
        userRow.appendChild(actions);

        signOutContainer.remove();
        mobileUserItem.prepend(userRow);
        mobileUserItem.appendChild(editPanel);
        mobileUserItem.appendChild(settingsPanel);

        let activePanel = null;

        const closeMobilePanels = () => {
            [editPanel, settingsPanel].forEach((panel) => panel.classList.remove('active'));
            [editIconContainer, settingsIconContainer].forEach((icon) => icon.classList.remove('active'));
            activePanel = null;
        };

        const toggleMobilePanel = (icon, panel) => {
            const isActive = panel.classList.contains('active');
            closeMobilePanels();

            if (!isActive) {
                panel.classList.add('active');
                icon.classList.add('active');
                activePanel = panel;
            }
        };

        editIconContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMobilePanel(editIconContainer, editPanel);
        });

        settingsIconContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMobilePanel(settingsIconContainer, settingsPanel);
        });

        document.addEventListener('click', (event) => {
            if (activePanel && !event.target.closest('#gf-mobile-user-actions')) {
                closeMobilePanels();
            }
        });
    };

    let uiInitialized = false;
    const initUi = () => {
        if (uiInitialized) {
            return;
        }

        uiInitialized = true;
        initThemeSwitch();
        initMobileNavLayout();
        initMobileThemeSwitch();
        initCompactUserScriptSets();
        initHighlightJs();
        initScriptLogos();
        initUserNavigation();
        initMobileUserNavigation();

        if (root.hasAttribute(HANDHELD_ATTR)) {
            schedulePhoneLoadClear();
            return;
        }

        scheduleNoTransitionClear();
    };

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initUi, { once: true });
    } else {
        initUi();
    }
})();
