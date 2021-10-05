// CONSTANTS
const output = document.querySelector("output");
const buttons = document.querySelectorAll("button");
const toggler = document.querySelector(".themes-menu__nav__toggler");
const togglerBeforeStyle = window.getComputedStyle(toggler, "::before");

// SET CALCULATOR BEHAVIOR
for (let button of buttons) {
    switch (button.className) {
        case "calculator__keyboard__key-num":
            button.addEventListener("click", () => {
                if (output.textContent.length === 11) {
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
                } else {
                    output.textContent = outputValue;
                }
            });
            break;
    }
}

// TOGGLER BEHAVIOR
toggler.addEventListener("click", () => {
    //0.35rem = 5.6px
    if (togglerBeforeStyle.left === "5.6px") toggler.classList.add("--active");
    else if (togglerBeforeStyle.left === "26.8px") {
        toggler.classList.add("--active-bis");
        toggler.classList.remove("--active");
    }
    else toggler.classList.remove("--active-bis");
})
