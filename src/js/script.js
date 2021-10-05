const output = document.querySelector("output");
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    switch (button.className) {
        case "calculator__keyboard__key-num":
            button.addEventListener("click", () => {
                output.textContent += button.textContent;
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
                output.textContent = eval(output.textContent.replace("x", "*"));
            });
            break;
    }
}
