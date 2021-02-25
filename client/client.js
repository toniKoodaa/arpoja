
// Create or select needed elements
const templateElm = document.querySelector("#template");
const formsElm = document.querySelector("#forms");
const resultElm = document.querySelector("#results");
const selectorsElm = document.querySelector("#selectors");
const listElm = document.querySelector("#list");
const body = document.querySelector('body');


function clearNeededElements() {
    templateElm.innerHTML = "";
    formsElm.innerHTML = "";
    resultElm.innerHTML = "";
    listElm.innerHTML = "";
}
// get pseudorandom between min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function buttonMaker(text, doWhenClicked) {
    const button = document.createElement('button');
    button.setAttribute("id", "selectOne");
    button.setAttribute("onClick", doWhenClicked);
    button.innerText = text.toString();
    return button;
}

function numbersPage() {
    clearNeededElements();
    const buttonOne = buttonMaker("Arvo numero 1 - 2 välillä", "GetRandomBetweenNumbers(2)");
    const buttonTwo = buttonMaker("Arvo numero 1 - 10 välillä", "GetRandomBetweenNumbers(10)");
    const buttonThree = buttonMaker("Arvo numero 1 - 100 välillä", "GetRandomBetweenNumbers(100)");
    const buttonFore = buttonMaker("Arvo numero kahden luvun välillä", "GetRandomBetweenUserGiven()");
    templateElm.append(buttonOne, buttonTwo, buttonThree, buttonFore);
}

function dicesPage() {
    clearNeededElements();
    const buttonOne = buttonMaker("1D4", "GetRandomBetweenNumbers(4)");
    const buttonTwo = buttonMaker("1D6", "GetRandomBetweenNumbers(6)");
    const buttonThree = buttonMaker("1D8", "GetRandomBetweenNumbers(8)");
    const buttonFore = buttonMaker("1D10", "GetRandomBetweenNumbers(10)");
    const buttonFive = buttonMaker("1D12", "GetRandomBetweenNumbers(12)");
    const buttonSix = buttonMaker("1D20", "GetRandomBetweenNumbers(20)");
    templateElm.append(buttonOne, buttonTwo, buttonThree, buttonFore, buttonFive, buttonSix);
}

function pickWinnerPage() {
    clearNeededElements();
    participants = [];
    const form = document.createElement("form");
    form.setAttribute("id", "participantForm")

    const name = document.createElement("input");
    name.setAttribute("id", "nameInput");
    name.setAttribute("type", "text");
    name.setAttribute("name", "nameData");
    name.setAttribute("placeholder", "osallistuja");
    
    form.appendChild(name);
    formsElm.appendChild(form);
    const ul = document.createElement('ul');
    ul.setAttribute("id", "liststyle");
    listElm.appendChild(ul);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('nameData');
        participants.push(name);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = name;
    })
}

// get pseudorandom values for common random picks (like 1-10 and 1-100)
function GetRandomBetweenNumbers(max) {
    let min = 1;
    const resultNumber = getRndInteger(min, max + 1);
    resultElm.innerText = `${resultNumber}`; 
}

// Return pseudorandom from user given range - form is dynamically created
function GetRandomBetweenUserGiven() {
    formsElm.innerHTML = "";

    const form = document.createElement("form");
    form.setAttribute("id", "numbersForm");
    //form.setAttribute("method", "get");

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

    formsElm.appendChild(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const min = Number.parseInt(formData.get('firstNumber'));
        const max = Number.parseInt(formData.get('secondNumber'));

        const resultNumber = getRndInteger(min, max + 1);
        resultElm.innerText = `${resultNumber}`; 
    })
}