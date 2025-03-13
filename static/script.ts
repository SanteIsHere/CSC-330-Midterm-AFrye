/* Name: script.ts 
* Author: Asante Frye
* Description: The purpose of this script
* is primarily to handle URL redirection
* to different endpoints based on the selected
* operation.
*/

// Get input elements
const eqButt: HTMLInputElement = document.getElementById("eq-butt") as HTMLInputElement;
const opA: HTMLInputElement = document.getElementById("op_a") as HTMLInputElement;
const opB: HTMLInputElement = document.getElementById("op_b") as HTMLInputElement;

// Select button
const opSelect: HTMLSelectElement = document.getElementById("op-select") as HTMLSelectElement;

// Error message
const errMsg: HTMLParagraphElement = document.getElementById("error-msg") as HTMLParagraphElement;

// Map operators to operation names
const opMap: Map<string, string> =
new Map(
    [
        ['+', 'add'],
        ['-', 'subtract'],
        ['*', 'multiply'],
        ['/', 'divide'],
    ]    
);

// Set click event for '=' button
eqButt.addEventListener("click", () => {
    if (opA.value != "" && opB.value != "") {
        // Redirect to appropriate page based on selected operation
        window.location.href = `${opMap.get(opSelect.value)}/${opA.value}/${opB.value}`;
        sessionStorage.setItem("redirect", "true");
    } else {
        // Reveal error message
        errMsg.style.display = "block";
    
        setTimeout(() => {
            // hide after 2 secs
            errMsg.style.display = "none";
        }, 2000);
    }
})

// Check for page redirects
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("redirect") === "true") {
        sessionStorage.setItem("redirect", "false");
        setTimeout(() => {
            window.location.href = "/";
        }, 7000)
    }
});