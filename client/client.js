let selected = false;
let selectedInner = false;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function removeElement(element) {
    element.remove();
}

function GetRandomNumberBetweenNumbers(max) {
    if (selected) {
        document.querySelector("#template").innerHTML = "";
    }
    let min = 1;
    const resultNumber = getRndInteger(min, max + 1);
    const resultText = document.createElement("h1");
    resultText.setAttribute("id", "resultH1");
    resultText.innerText = `${resultNumber}`; 
    document.querySelector("#template").appendChild(resultText);
    selected = true;
}

function GetRandomNumberBetween() {
    if (selected) {
        document.querySelector("#template").innerHTML = "";
    }
    const form = document.createElement("form");
    form.setAttribute("id", "numbersForm");
    form.setAttribute("method", "get");
    const firstNumber = document.createElement("input");
    firstNumber.setAttribute("id", "numbersInput");
    firstNumber.setAttribute("type", "number");
    firstNumber.setAttribute("name", "firstNumber");
    firstNumber.setAttribute("placeholder", "Mista");
    const secondNumber = document.createElement("input");
    secondNumber.setAttribute("id", "numbersInput");
    secondNumber.setAttribute("type", "number");
    secondNumber.setAttribute("name", "secondNumber")
    secondNumber.setAttribute("placeholder", "Mihin");
    const button = document.createElement("button");
    button.setAttribute("id", "numbersInput");
    button.innerHTML = "Arvo";

    form.appendChild(firstNumber);
    form.appendChild(secondNumber);
    form.appendChild(button);

    document.querySelector("#template").appendChild(form);
    selected = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (selectedInner) {
            document.querySelector("#form").innerHTML = "";
        }
        const formData = new FormData(form);
        const min = Number.parseInt(formData.get('firstNumber'));
        const max = Number.parseInt(formData.get('secondNumber'));

        const resultNumber = getRndInteger(min, max + 1);
        const resultText = document.createElement("h1");
        resultText.setAttribute("id", "resultH1");
        resultText.innerText = `${resultNumber}`; 
        form.appendChild(resultText);

        const myBar = document.createElement("div");
        myBar.setAttribute("id", "progressBar");
        form.appendChild(resultText);
        selectedInner = true;
    })
}