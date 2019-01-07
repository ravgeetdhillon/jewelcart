var flag = 0;
function dropDownMenuControl() {
	var dropDown = document.querySelector(".dropdown");
	if (flag == 0){
		dropDown.style.display = "flex";
		dropDown.classList.remove("bounceOutUp");
		dropDown.classList.add("bounceInDown");
		flag = 1;
	}
	else{
		dropDown.classList.remove("bounceInDown");
		dropDown.classList.add("bounceOutUp");
		setTimeout(
			function(){
			dropDown.style.display = "none";
		}, 1000);
		flag = 0;
	}
}

// navbar size
function changeNavColor() {
	var logo = document.querySelector(".nav-bar img");
	var dropDown = document.querySelector(".dropdown");
	if (window.scrollY > 200) {
		var w = 10*3.404 + "%";
		logo.style.width = w;
		var h = 10*1 + "%";
		logo.style.height = h;
		dropDown.style.paddingTop = "44px";
	}
	else {
		logo.style.width = 18*3.404 + "%";
		logo.style.height = 18*1 + "%";
		dropDown.style.paddingTop = "64px";
	}
}

window.addEventListener("scroll", changeNavColor, false);

//go to top button
var goTopBtn = document.getElementById("goTopBtn");
function gotoTopShoworHide(){
	var goTopBtn = document.getElementById("goTopBtn");
	if (window.scrollY < 500){
		goTopBtn.style.display = "none";
	}
	else{
		goTopBtn.style.display = "flex";
	}
}
function gotoTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
window.addEventListener("scroll", gotoTopShoworHide, false);