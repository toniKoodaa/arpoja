// value to check if element needs to be cleared before new input
let selected = false;

// Create or select needed elements
const template = document.querySelector("#template");
const resultText = document.createElement("h1");
resultText.setAttribute("id", "resultH1");

// get pseudorandom between min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Preselected values for common random picks (1-10 and 1-100)
function GetRandomNumberBetweenNumbers(max) {
    if (selected) {
        template.innerHTML = "";
    }
    let min = 1;
    const resultNumber = getRndInteger(min, max + 1);
    const resultText = document.createElement("h1");
    resultText.setAttribute("id", "resultH1");
    resultText.innerText = `${resultNumber}`; 
    template.appendChild(resultText);
    selected = true;
}

// Return random from user given range - form is dynamically created
function GetRandomNumberBetween() {
    if (selected) {
        template.innerHTML = "";
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

    template.appendChild(form);
    selected = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const min = Number.parseInt(formData.get('firstNumber'));
        const max = Number.parseInt(formData.get('secondNumber'));

        const resultNumber = getRndInteger(min, max + 1);
        resultText.setAttribute("id", "resultH1");
        resultText.innerText = `${resultNumber}`; 
        form.appendChild(resultText);

    })
}