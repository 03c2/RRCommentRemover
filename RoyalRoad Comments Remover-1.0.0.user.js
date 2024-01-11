// ==UserScript==
// @name         RoyalRoad Comments Remover
// @namespace    https://github.com/03c2/RRCommentRemover
// @version      1.0.0
// @description  Automatically hides comments on RoyalRoad
// @author       elbas
// @match        http://royalroad.com/*
// @match        https://royalroad.com/*
// @match        http://*.royalroad.com/*
// @match        https://*.royalroad.com/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    let css = `
        .comments-container, #comments {
            display: none !important;
        }
    `;

    GM_addStyle(css);
})();