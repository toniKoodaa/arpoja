
function GetNumbersFromUser() {
    const form = document.createElement("form");
    form.setAttribute("id", "numbersForm");
    form.setAttribute("method", "get");
    const firstNumber = document.createElement("input");
    firstNumber.setAttribute("type", "number");
    firstNumber.setAttribute("name", "firstNumber");
    firstNumber.setAttribute("placeholder", "Mista");
    const secondNumber = document.createElement("input");
    secondNumber.setAttribute("type", "number");
    secondNumber.setAttribute("name", "secondNumber")
    secondNumber.setAttribute("placeholder", "Mihin");
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    form.appendChild(firstNumber);
    form.appendChild(secondNumber);
    form.appendChild(submit);

    document.querySelector("#template").appendChild(form);
}

function GetValues() {
    console.log("toimiiko");
}