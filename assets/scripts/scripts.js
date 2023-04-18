const turn = document.querySelector(".turn");
const circle = document.querySelector(".circle");
const slider = document.querySelector(".range");

turn.addEventListener("click", () => {
  turn.classList.toggle("turn-click");
});

function rangeSlider(value) {
  document.getElementById("rangeValue").innerHTML =
    "$" + parseFloat(value).toFixed(2);
}

slider.addEventListener("mousemove", function () {
  var x = slider.value;
  var color =
    "linear-gradient(90deg, rgba(164, 243, 235, 1)" +
    x +
    "%, rgba(236, 240, 251, 1)" +
    x +
    "%";
  slider.style.background = color;
});
