document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#button").addEventListener("click", calcMain);
  document.querySelector("#resetBtn").addEventListener("click", resetForm);
});
function calcMain() {
  let weight = parseFloat(document.querySelector("#weight").value);
  let height = parseFloat(document.querySelector("#height").value);
  let status = document.querySelector("h2");

  height = height * 0.304;
  let bmi = weight / height ** 2;
  let result = "";
  if (bmi <= 18.4) {
    result = "your thin";
  } else if (bmi <= 24.9) {
    result = "your normal";
  } else if (bmi <= 39.9) {
    result = "your overweight";
  } else {
    result = "your obese";
  }
  status.textContent = result;
}
function resetForm() {
  document.querySelector("#bmi1").reset();
  document.querySelector("#teXt").textContent = "";
}
