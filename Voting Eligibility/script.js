document.querySelector("#btn").addEventListener('click', () => {
    let age = parseInt(document.querySelector("#ageInput").value);
    let resultDisplay = document.querySelector("#result");

    if (isNaN(age)) return  (resultDisplay.innerText = "Please enter a valid number for age.");

    resultDisplay.innerText = age >= 18 ? "Congratulations! You are eligible to vote." : "Sorry, you are not eligible to vote yet.";
 });