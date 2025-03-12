/* Get calculator number buttons */
const numButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("numButton");

/* Get calculator operator buttons */
const opButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("opButton");

/* Get operands and operator divs */
const opA: HTMLElement | null = document.getElementById("op_a");
const operator: HTMLElement | null = document.getElementById("operand");
const opB: HTMLElement | null = document.getElementById("op_b");

/* Enter button */
const enterButt: HTMLElement | null = document.getElementById("enterButt");

let currOp: string;

/* Define click events for operations */
for (let numButt of numButtons) {
    // Define click event for the button
    numButt.addEventListener("click", () => {
        console.log(`Button ${numButt} clicked`);
        if (operator?.textContent === "") {
            if (!opA)

                opA!.textContent = (numButt as HTMLInputElement).value;
            else
                // Add num to operand a
                opA!.textContent += (numButt as HTMLInputElement).value;
        } else {
            if (!opB)
                opB!.textContent = (numButt as HTMLInputElement).value;
            else
                // Add num to operand b
                opB!.textContent += (numButt as HTMLInputElement).value;
        }
    }
    );
}

/* Define events for operators */
for (let opButt of opButtons) {
    opButt.addEventListener("click", () => {
        if (opA?.textContent === "")
            console.log("Must enter first operand!");
        else {
            operator!.textContent = (opButt as HTMLInputElement).value;
            currOp = opButt.id;
        }
            
    });
}

/* Define click event for enter button */
enterButt?.addEventListener("click", () => {
    if (opA?.textContent && operator?.textContent && opB?.textContent) {
        console.log(`Current operation: ${currOp}`);
        // Switch to route for operation if expression is complete
        window.location.href = `${currOp}/${opA.textContent}/${opB.textContent}`;
    } else
        console.log("Expression not complete");
});

