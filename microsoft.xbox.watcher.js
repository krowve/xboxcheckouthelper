// ==UserScript==
// @name         microsoft.xbox.watcher
// @namespace    http://tampermonkey.net/
// @version      2021091710
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
var audio

(function() {

var idVar = setInterval(function() {
    var page = document.documentElement.innerHTML;
    var pagetitle = String(document.title);

    if (document.URL.includes("https://www.xbox.com/en-us/configure/8wj714n3rbtl")) {
        if (page.includes("Out of stock")) {
            console.log("Out of stock");
        } else {
            console.log("Cart it");
            audio = document.createElement("audio");
            audio.src = XBOXON;
            audio.play();
            document.getElementsByClassName("btn-primary")[0].click()
        }
        window.location = "https://www.xbox.com/en-us/configure/8wj714n3rbtl";
    }
    if (document.URL.includes("https://www.xbox.com/en-us/configure/8RPM8T9CK0P6")) {
        if (page.includes("Out of stock")) {
            console.log("Out of stock");
        } else {
            console.log("Cart it");
            audio = document.createElement("audio");
            audio.src = XBOXON;
            audio.play();
            document.getElementsByClassName("btn-primary")[0].click()
        }
        window.location = "https://www.xbox.com/en-us/configure/8RPM8T9CK0P6";
    }


},INTERVALTIME);
})();
