let string = "";
let operators = ["+", "-", "*", "/", "."];

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {   // Create array of buttons
    button.addEventListener("click", (details) => { // Add click event on all the buttons.
        if (details.target.textContent == "=") {
            string = eval(string);
            document.querySelector("#input").value = string;
        }
        else if (details.target.textContent == "AC") {
            string = "";
            document.querySelector("#input").value = string;
        }
        else if (details.target.textContent == "%") {
            let num = Number(string);
            let rem = num % num;
            document.querySelector("#input").value = rem;
        }
        else if (details.target.textContent == "Sqrt") {
            let num = Number(string);
            let sqrt = Math.sqrt(num);
            document.querySelector("#input").value = sqrt;
        }
        else {
            console.log(details.target.textContent);
            string += details.target.textContent;
            document.querySelector("#input").value = string;
        }

    })
})