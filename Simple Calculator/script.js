
function calculate(operation) {
  let num1 = parseFloat(document.querySelector("#num1").value);
  let num2 = parseFloat(document.querySelector("#num2").value);
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 === 0 ? "Error: Division by zero" : num1 / num2;
      break;
  }
  document.querySelector("#result").value = result;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => calculate(button.textContent));
});


