"use strict";
/* Name: script.ts
* Author: Asante Frye
* Description: The purpose of this script
* is primarily to handle URL redirection
* to different endpoints based on the selected
* operation.
*/
// Get input elements
const eqButt = document.getElementById("eq-butt");
const opA = document.getElementById("op_a");
const opB = document.getElementById("op_b");
// Select button
const opSelect = document.getElementById("op-select");
// Error message
const errMsg = document.getElementById("error-msg");
// Map operators to operation names
const opMap = new Map([
    ['+', 'add'],
    ['-', 'subtract'],
    ['*', 'multiply'],
    ['/', 'divide'],
]);
// Set click event for '=' button
eqButt.addEventListener("click", () => {
    if (opA.value != "" && opB.value != "") {
        // Redirect to appropriate page based on selected operation
        window.location.href = `${opMap.get(opSelect.value)}/${opA.value}/${opB.value}`;
        sessionStorage.setItem("redirect", "true");
    }
    else {
        // Reveal error message
        errMsg.style.display = "block";
        setTimeout(() => {
            // hide after 2 secs
            errMsg.style.display = "none";
        }, 2000);
    }
});
// Check for page redirects
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("redirect") === "true") {
        sessionStorage.setItem("redirect", "false");
        setTimeout(() => {
            window.location.href = "/";
        }, 7000);
    }
});
