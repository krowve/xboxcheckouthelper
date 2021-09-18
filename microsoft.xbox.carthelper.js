// ==UserScript==
// @name         microsoft.xbox.carthelper.js
// @namespace    http://tampermonkey.net/
// @version      2021091707
// @description  try to take over the world!
// @author       You
// @updateURL    https://raw.githubusercontent.com/krowve/xboxcheckouthelper/main/microsoft.xbox.carthelper.js
// @downloadURL  https://raw.githubusercontent.com/krowve/xboxcheckouthelper/main/microsoft.xbox.carthelper.js
// @match        https://www.microsoft.com/*
// @match        https://login.live.com/*
// @icon         https://www.google.com/s2/favicons?domain=microsoft.com
// @grant        none
// ==/UserScript==

// Change this value to lengthen or shorten the time between refreshes
var INTERVALTIME = 30000;
var audio
var XBOXON = "https://www.myinstants.com/media/sounds/brian_xbox.mp3";


(function() {

var page = document.documentElement.innerHTML;
var pagetitle = String(document.title);


if (pagetitle.includes("Shopping cart - Microsoft Store")) {
    if (page.includes("Xbox Series X")) {
        if (!(page.includes("This item is out of stock. Please remove or save for later"))) {
                audio = document.createElement("audio");
                audio.src = XBOXON;
                audio.play();
                window.location = "https://www.microsoft.com/en-us/store/checkout"
        }
    }
}

var idVar = setInterval(function() {

    if (pagetitle.includes("Shopping cart - Microsoft Store")) {
        if (page.includes("Xbox Series X")) {
            console.log("Xbox in Cart");
            window.location = "https://www.microsoft.com/en-us/store/checkout"
        }
    }
    if (pagetitle.includes("Checking out - Microsoft Store")) {
        console.log("Place Order Page");
    }
    if (pagetitle.includes("Sign in to your Microsoft account")) {
        console.log("Sign in Page");
        document.getElementsByClassName("button")[0].click();
    }

},INTERVALTIME);
})();

