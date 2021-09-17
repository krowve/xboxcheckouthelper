// ==UserScript==
// @name         microsoft.xbox.checkouthelper
// @namespace    http://tampermonkey.net/
// @version      2021091701
// @description  try to take over the world!
// @author       You
// @match        https://www.microsoft.com/*
// @match        https://www.xbox.com/*
// @icon         https://www.google.com/s2/favicons?domain=microsoft.com
// @grant        none
// ==/UserScript==

// Change this value to lengthen or shorten the time between refreshes
var INTERVALTIME = 5000;
var CHECKOUT = 1;
var XBOXON = "https://www.myinstants.com/media/sounds/brian_xbox.mp3";
var XBOXCOMMERCIAL = "https://www.myinstants.com/media/sounds/xbox-360-novo-comercial-no-brasil.mp3";

(function() {

var idVar = setInterval(function() {
    var page = document.documentElement.innerHTML;
    var pagetitle = String(document.title);
    if (pagetitle.includes("Shopping cart - Microsoft Store")) {
        if (page.includes("This item is out of stock")) {
            console.log("Item out of stock");
            CHECKOUT = 0;
        }
        if (page.includes("Your cart is empty")) {
            console.log("Cart is empty");
            CHECKOUT = 0;
        }
        if (page.includes("Xbox Series X")) {
            console.log("Xbox in Cart");
            if (CHECKOUT == 1) {
                console.log("click checkout")
                window.open(XBOXON)
            }
        }
        CHECKOUT = 0;
        window.location = "https://www.microsoft.com/en-us/store/cart";
    }
    if (pagetitle.includes("Configure your Xbox Series X")) {
        if (page.includes("Out of stock")) {
            console.log("Out of stock");
        } else {
            console.log("Cart it");
            window.open(XBOXCOMMERCIAL)
        }
        window.location = "https://www.xbox.com/en-us/configure/8wj714n3rbtl";
    }

},INTERVALTIME);
})();
