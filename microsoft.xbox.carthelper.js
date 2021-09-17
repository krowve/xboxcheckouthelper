// ==UserScript==
// @name         microsoft.xbox.carthelper.js
// @namespace    http://tampermonkey.net/
// @version      2021091704
// @description  try to take over the world!
// @author       You
// @updateURL    https://raw.githubusercontent.com/krowve/xboxcheckouthelper/main/microsoft.xbox.carthelper.js
// @downloadURL  https://raw.githubusercontent.com/krowve/xboxcheckouthelper/main/microsoft.xbox.carthelper.js
// @match        https://www.microsoft.com/*
// @icon         https://www.google.com/s2/favicons?domain=microsoft.com
// @grant        none
// ==/UserScript==

// Change this value to lengthen or shorten the time between refreshes
var INTERVALTIME = 5000;
var CHECKOUT = 1;
var XBOXON = "https://www.myinstants.com/media/sounds/brian_xbox.mp3";

(function() {

var idVar = setInterval(function() {
    var page = document.documentElement.innerHTML;
    var pagetitle = String(document.title);
    if (pagetitle.includes("Shopping cart - Microsoft Store")) {
        if (page.includes("Xbox Series X")) {
            console.log("Xbox in Cart");
            window.location = "https://www.microsoft.com/en-us/store/checkout"
        }
    }
    if (pagetitle.includes("Checking out - Microsoft Store")) {
        console.log("Place Order Page");
        window.open(XBOXON);
    }

},INTERVALTIME);
})();

