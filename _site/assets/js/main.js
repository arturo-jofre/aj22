// MENU ----------------------

// for IE10, .getElementsByClassName()[0];
var toggle = document.querySelector(".toggle");
var nav = document.querySelector(".nav-menu");
var navitem = document.querySelector(".nav-menu");

// Listen for click event on toggle var


navitem.addEventListener(
  "click",
  function () {
    nav.classList.remove("active");
  },
  false
);
toggle.addEventListener(
  "click",
  function () {
    nav.classList.toggle("active");
  },
  false
);

// FOOTER COPYRIGHT
document.getElementById("copy").innerHTML = `${new Date().getFullYear()}`;





document.addEventListener("DOMContentLoaded", () => {
  // run whatever we need


  // DARKMODE -----------------

var btnSwitch = document.querySelector("#switch");
localStorage.setItem("light-mode", "false");


btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btnSwitch.classList.toggle("active");

  // LocalStorage
  if (document.body.classList.contains("light")) {
    localStorage.setItem("light-mode", "true");
  } 
  else localStorage.setItem("light-mode", "false");
});
if (localStorage.getItem("light-mode") === "true") {
  document.body.classList.add("light");
  btnSwitch.classList.add("active");
} 
else {
  document.body.classList.remove("light");
  btnSwitch.classList.remove("active");
}


var animatio = bodymovin.loadAnimation({
  container: document.getElementById('darkanim'),
  renderer:'svg',
  loop:false,
  autoplay:false,
  path:'/assets/img/lottie/sun-moon-2.json',
  
});
animatio.setSpeed(8);
animatio.play();
// var dark = 0;

btnSwitch.addEventListener('click',function(){
    if(localStorage.getItem("light-mode") === "false"){
        animatio.play();
        animatio.setDirection(1);
        document.getElementById('test').style.animation = "back .75s 1 forwards";
    }
    else{
        animatio.play();
        animatio.setDirection(-1);
        document.getElementById('test').style.animation = "back .75s 1 forwards reverse";
  
    }
  })


});

function init() {
  if (document.querySelector('#holo')) { //This checks if this element is on the the page (in the html)
        new holo(); // If it is then it creates a new instance of the 'scrollers' function
    }

  feather.replace();

  // LottieInteractivity.create({
  //   Setspeed: 2,
	// 	player:'#sun-moon',
	// 	mode:"cursor",
	// 	actions: [
	// 		{
	// 			type: "toggle",
	// 		}
	// 	]
	// });

  // Add more here as the project grows...
}
function unload() {
  feather.replace();
}

var holoStart = new holo();

function holo(){
  
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
}

swup = new Swup();
swup.on("contentReplaced", init);
swup.on("willReplaceContent", unload);
init();
