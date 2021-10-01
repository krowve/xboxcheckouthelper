// ==UserScript==
// @name         microsoft.xbox.watcher
// @namespace    http://tampermonkey.net/
// @version      2021100101
// @description  try to take over the world!
// @author       You
// @updateURL    https://raw.githubusercontent.com/krowve/xboxcheckouthelper/main/microsoft.xbox.watcher.js
// @downloadURL  https://raw.githubusercontent.com/krowve/xboxcheckouthelper/main/microsoft.xbox.watcher.js
// @match        https://www.xbox.com/*
// @icon         https://www.google.com/s2/favicons?domain=microsoft.com
// @grant        none
// ==/UserScript==

// Change this value to lengthen or shorten the time between refreshes
var INTERVALTIME = 30000;
var XBOXON = "https://www.myinstants.com/media/sounds/brian_xbox.mp3";
var audio;
var XBOXXURL = "https://www.xbox.com/en-us/configure/8wj714n3rbtl"
var XBOXXHALOURL = "https://www.xbox.com/en-us/configure/8RPM8T9CK0P6"
var XBOXSURL = "https://www.xbox.com/en-us/configure/942j774tp9jn"
var DOCUMENTURL;

(function() {

var idVar = setInterval(function() {
    var page = document.documentElement.innerHTML;
    var pagetitle = String(document.title);
    var DOCUMENTURL = document.URL;

    if (document.URL.includes(XBOXXURL) || document.URL.includes(XBOXXHALOURL) || document.URL.includes(XBOXSURL)) {
        if (page.includes("Out of stock")) {
            console.log("Out of stock");
        } else {
            console.log("Cart it");
            audio = document.createElement("audio");
            audio.src = XBOXON;
            audio.play();
            clearInterval(idVar)
            document.getElementsByClassName("btn-primary")[0].click()
        }
        window.location = DOCUMENTURL;
    }

},INTERVALTIME);
})();
