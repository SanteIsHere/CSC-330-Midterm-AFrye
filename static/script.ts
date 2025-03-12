/* Get calculator number and operator buttons */
const numButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll(".numButton");
const opButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll(".opButton");

/* Get operands and operator divs */
const opA = document.getElementById("op_a") as HTMLDivElement;
const operator = document.getElementById("operand") as HTMLDivElement;
const opB = document.getElementById("op_b") as HTMLDivElement;

/* Enter button and clear buttons */
const enterButt = document.getElementById("enterButt") as HTMLInputElement;
const clrButton = document.getElementById("clrButton") as HTMLInputElement;

// Keep track of current operation
let currOp: string;

/* Define click events for operations */
for (let numButt of numButtons) {
    // Define click event for the button
    numButt.addEventListener("click", () => {
        console.log(`Button ${(numButt as HTMLInputElement).value} clicked`);
        if (operator.textContent === "") {
            if (opA.textContent === "")
                opA.textContent = (numButt as HTMLInputElement).value;
            else
                // Add num to operand a
                opA.textContent += (numButt as HTMLInputElement).value;
        } else {
            if (opB.textContent === "")
                opB.textContent = (numButt as HTMLInputElement).value;
            else
                // Add num to operand b
                opB.textContent += (numButt as HTMLInputElement).value;
        }
    }
    );
}

/* Define events for operators */
for (let opButt of opButtons) {
    opButt.addEventListener("click", () => {
        if (opA.textContent === "")
            console.log("Must enter first operand!");
        else {
            operator.textContent = opButt.value;
            currOp = opButt.id;
        }
            
    });
}

/* Define click event for enter button */
enterButt.addEventListener("click", () => {
    if (opA.textContent && operator.textContent && opB.textContent) {
        console.log(`Current operation: ${currOp}`);
        // Switch to route for operation if expression is complete
        window.location.href = `${currOp}/${opA.textContent}/${opB.textContent}`;
        
        // Disable all buttons except clear
        numButtons.forEach(button => { button.disabled = true });
        opButtons.forEach(button => { button.disabled = true });
        enterButt.disabled = true;
    } else
        console.log("Expression not complete");
});

/* Define clear button event */
clrButton.addEventListener("click", () => {
    // Re-enable all buttons
    numButtons.forEach(button => { button.disabled = false });
    opButtons.forEach(button => { button.disabled = false });
    enterButt.disabled = false;

    // Return to homepage
    window.location.href = "/";
});

// TODO: Create functions for button toggling, Fix buttons not disabling properly
