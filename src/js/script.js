const output = document.querySelector("output");
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    switch (button.className) {
        case "calculator__keyboard__key-num":
            button.addEventListener("click", () => {
                if (output.textContent.length === 11) {
                    output.textContent = "tooMuchChar";
                } else {
                    output.textContent += button.textContent;
                }
            });
            break;
        case "calculator__keyboard__key-del":
            if (button.textContent === "reset") {
                button.addEventListener("click", () => {
                    output.textContent = "";
                });
            } else {
                button.addEventListener("click", () => {
                    output.textContent = output.textContent.substring(
                        0,
                        output.textContent.length - 1
                    );
                });
            }
            break;
        case "calculator__keyboard__key-equ":
            button.addEventListener("click", () => {
                const splittedOutput = output.textContent.split("x");
                const outputValue = eval(splittedOutput.join("*"));
                if (outputValue.length === 11) {
                    output.textContent = "tooMuchChar";
                } else {
                    output.textContent = outputValue;
                }
            });
            break;
    }
}
