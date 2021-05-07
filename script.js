// Grab Elements
const radius = document.querySelector("#inputRadius");
const clearCanvas = document.querySelector("#clear");
const form = document.querySelector("form");
let result = document.querySelector("#result");

// Define and grab canvas
const myCanvas = document.querySelector("canvas");
let ctx = myCanvas.getContext("2d");

// Main function -
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   Checks input to determine if can start working or tell user to type input again
  if (radius.value <= 250 && radius.value > 0) {
    // Creates circle based on radius
    let r = radius.value;
    ctx.beginPath();
    ctx.arc(250, 250, r, 0, Math.PI * 2);
    ctx.stroke();

    // Calculates volume and show on screen
    result.style.display = "block";
    result.innerHTML =
      "The volume for radius " +
      r +
      " is: " +
      (4 * Math.PI * Math.pow(r, 3)) / 3;
  } else if (radius.value < 0) {
    alert("Please insert positive number as radius value");
  } else if (radius.value > 250) {
    alert(
      "Circle is bigger than canvas, please insert smaller radius number (~250)"
    );
  } else alert("Please insert Value");
  radius.value = "";
});

// Clear canvas function
clearCanvas.addEventListener("click", function () {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
});

// Bonus function - on page load draws circles from min to max radius value
// window.addEventListener("load", function () {
//   for (let i = 0; i <= 250; i++) {
//     window.setTimeout(function () {
//       drawCircle(i);
//     }, i * 5);
//   }
// });

// draw circles
function drawCircle(i) {
  ctx.beginPath();
  ctx.arc(250, 250, i, 0, Math.PI * 2);
  ctx.stroke();
}

//** By selecting const form = document.querySelector("form"); and using form.addEventListener("submit",function()) we can send the form even by pressing enter. */
