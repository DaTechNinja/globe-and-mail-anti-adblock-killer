// ==UserScript==
// @name         The Globe and Mail Anti-Adblock Killer
// @namespace    https://openuserjs.org/scripts/DaTechNinja/
// @description  This user script disables the annoying anti Ad-block message on The Globe and mail website and allows you to read the article
// @author       DaTechNinja
// @version      0.0.0
// @encoding     utf-8
// @license      https://raw.githubusercontent.com/DaTechNinja/globe-and-mail-anti-adblock-killer/master/LICENSE
// @icon         https://raw.githubusercontent.com/DaTechNinja/globe-and-mail-anti-adblock-killer/master/favicon.ico
// @homepage     https://github.com/DaTechNinja/globe-and-mail-anti-adblock-killer
// @supportURL   https://github.com/DaTechNinja/globe-and-mail-anti-adblock-killer/issues
// @updateURL    https://raw.githubusercontent.com/DaTechNinja/globe-and-mail-anti-adblock-killer/globe-and-mail-anti-adblock-killer.user.js
// @downloadURL  https://raw.githubusercontent.com/DaTechNinja/globe-and-mail-anti-adblock-killer/globe-and-mail-anti-adblock-killer.user.js
// @match        http*://*.theglobeandmail.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

/*
   DISCLAIMER: The Globe and Mail® is a registered and/or unregistered trademark of The Globe and Mail Inc. in Canada, the United States and/or other countries.aa
*/

(function ($, undefined) {
  $(function () {
     'use strict';

    $(document).ready(function() {
        var adblockModal = $('#adblockModal');

        if (typeof adblockModal !== 'undefined') {
            $('#adblockModal').remove();
        }

        $('.adblockHideContent').removeClass('adblockHideContent');
    });
  });
})(window.jQuery.noConflict(true));
