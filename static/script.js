"use strict";
/* Get calculator number buttons */
const numButtons = document.getElementsByClassName("numButton");
/* Get calculator operator buttons */
const opButtons = document.getElementsByClassName("opButton");
/* Get operands and operator divs */
const opA = document.getElementById("op_a");
const operator = document.getElementById("operand");
const opB = document.getElementById("op_b");
/* Enter button */
const enterButt = document.getElementById("enterButt");
let currOp;
/* Define click events for operations */
for (let numButt of numButtons) {
    // Define click event for the button
    numButt.addEventListener("click", () => {
        console.log(`Button ${numButt} clicked`);
        if ((operator === null || operator === void 0 ? void 0 : operator.textContent) === "") {
            if (!opA)
                opA.textContent = numButt.value;
            else
                // Add num to operand a
                opA.textContent += numButt.value;
        }
        else {
            if (!opB)
                opB.textContent = numButt.value;
            else
                // Add num to operand b
                opB.textContent += numButt.value;
        }
    });
}
/* Define events for operators */
for (let opButt of opButtons) {
    opButt.addEventListener("click", () => {
        if ((opA === null || opA === void 0 ? void 0 : opA.textContent) === "")
            console.log("Must enter first operand!");
        else {
            operator.textContent = opButt.value;
            currOp = opButt.id;
        }
    });
}
/* Define click event for enter button */
enterButt === null || enterButt === void 0 ? void 0 : enterButt.addEventListener("click", () => {
    if ((opA === null || opA === void 0 ? void 0 : opA.textContent) && (operator === null || operator === void 0 ? void 0 : operator.textContent) && (opB === null || opB === void 0 ? void 0 : opB.textContent)) {
        console.log(`Current operation: ${currOp}`);
        // Switch to route for operation if expression is complete
        window.location.href = `${currOp}/${opA.textContent}/${opB.textContent}`;
    }
    else
        console.log("Expression not complete");
});
