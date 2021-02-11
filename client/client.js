const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const firstNumber = formData.get('first');
    const secondNumber = formData.get('second');
    console.log("First number: ", firstNumber);
    console.log("Second number: ", secondNumber);
})