
// MENU ----------------------

// for IE10, .getElementsByClassName()[0];
var toggle = document.querySelector(".toggle");
var nav = document.querySelector(".nav-menu");
var navitem = document.querySelector(".nav-menu");

// Listen for click event on toggle var
toggle.addEventListener('click', function() {
  nav.classList.toggle("active");
}, false);

navitem.addEventListener('click', function() {
	nav.classList.remove("active");
  }, false);

// DARKMODE -----------------

var btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',() => {
	document.body.classList.toggle('light');
	btnSwitch.classList.toggle('active')

	// LocalStorage 
	if(document.body.classList.contains('light')) {
		localStorage.setItem('light-mode', 'true')
	}
	else(
		localStorage.setItem('light-mode', 'false')
	)
});
if(localStorage.getItem('light-mode') === 'true' ) {
	document.body.classList.add('light');
	btnSwitch.classList.add('active')
} else {
	document.body.classList.remove('light');
	btnSwitch.classList.remove('active')
}

