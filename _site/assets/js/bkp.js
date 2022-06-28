// MENU ----------------------

// for IE10, .getElementsByClassName()[0];
var toggle = document.querySelector(".toggle");
var nav = document.querySelector(".nav-menu");
var navitem = document.querySelector(".nav-menu");

// Listen for click event on toggle var
toggle.addEventListener(
  "click",
  function () {
    nav.classList.toggle("active");
  },
  false
);

navitem.addEventListener(
  "click",
  function () {
    nav.classList.remove("active");
  },
  false
);

// DARKMODE -----------------

var btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btnSwitch.classList.toggle("active");

  // LocalStorage
  if (document.body.classList.contains("light")) {
    localStorage.setItem("light-mode", "true");
  } else localStorage.setItem("light-mode", "false");
});
if (localStorage.getItem("light-mode") === "true") {
  document.body.classList.add("light");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("light");
  btnSwitch.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // run whatever we need
});

// Transition

// function init(){
// 	feather.replace()
//   if (document.querySelector('#holo')) {
//     // something like new Carousel('#carousel')
// }
// 	// Add more here as the project grows...
// }
// function unload(){
// 	feather.unload();
// }

// swup = new Swup();
// swup.on("contentReplaced", init);
// swup.on("willReplaceContent", unload);
// init();

// HOLO

// onmousemove="handleMouseMove(event)"

// document.getElementById("test").addEventListener("mousemove", function(event) {
//   handleMouseMove(event);
// });

let test = document.getElementById("test");

document.getElementById("test").addEventListener("mousemove", function (event) {
  handleMouseMove(event);
});

let holographicElement = document.getElementById("holo");


window.addEventListener("deviceorientation", handleDeviceOrientation, true);

function updateHolographicBackground(value) {
  const percentage = value * 200;
  holographicElement.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
  const x = event.clientX;
  const width = document.documentElement.clientWidth;
  const value = x / width;
  updateHolographicBackground(value);
}

function handleDeviceOrientation(event) {
  const z = Math.abs(event.gamma); // rotation degrees from 0 to 360
  const value = z / 90;
  updateHolographicBackground(value);
}

function init() {
  if (document.querySelector('#hoz-scroller')) { //This checks if this element is on the the page (in the html)
        new scrollers(); // If it is then it creates a new instance of the 'scrollers' function
    }
  feather.replace();


  // Add more here as the project grows...
}
function unload() {
  feather.replace();


}



swup = new Swup();
swup.on("contentReplaced", init);
swup.on("willReplaceContent", unload);
init();
