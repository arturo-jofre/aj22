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
