let count = 0;
let counterLabel = document.getElementById("counterLabel");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");

//Increase Button:
increaseBtn.onclick = () => {
  count += 1;
  counterLabel.innerHTML = count;
};



// Decrease Button
decreaseBtn.onclick = () => {
  if (count > 0) {
    count -= 1;
    counterLabel.innerHTML = count;
  }
};
