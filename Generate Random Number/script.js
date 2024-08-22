let clickbtn = document.getElementById("clickbtn");

clickbtn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 10) + 1;
  document.getElementById("result").innerHTML = x;
});
