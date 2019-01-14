// dropdown menu show or hide
function dropDownMenuControl() {
	var dropDown = document.querySelector(".dropdown");
	if (dropDown.style.display == "none"){
		dropDown.style.display = "flex";
		dropDown.classList.remove("bounceOutUp");
		dropDown.classList.add("bounceInDown");
	}
	else if (dropDown.style.display == "flex"){
		dropDown.classList.remove("bounceInDown");
		dropDown.classList.add("bounceOutUp");
		setTimeout(function(){
			dropDown.style.display = "none";
		}, 800);
	}
}

// navbar size
function changeNavSize() {
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

//go to top button
var goTopBtn = document.getElementById("goTopBtn");
function gotoTopShoworHide(){
	var goTopBtn = document.getElementById("goTopBtn");
	if (window.pageYOffset < 500){
		goTopBtn.classList.add("fadeOut");
		setTimeout(function(){
			goTopBtn.style.display = "none";
		}, 100);
		goTopBtn.classList.remove("fadeIn");
	}
	else{
		goTopBtn.style.display = "flex";
		goTopBtn.classList.add("fadeIn");
		goTopBtn.classList.remove("fadeOut");
	}
}
function gotoTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// hide menu on click on body area other than the menu
document.addEventListener("mouseup", function(e){
    var container = document.querySelector(".dropdown");
    if (!container.contains(e.target)){
        container.style.display = "none";
    }
}.bind(this));

// show or hide cart list
function showHideCartList(){
    var cartlist = document.querySelector(".cart-list");
    if (cartlist.style.display == ""){
        cartlist.style.display = "flex";
    }
    else if (cartlist.style.display == "flex"){
		cartlist.style.display = "";
    }
}

window.addEventListener("scroll", changeNavSize, false);
window.addEventListener("scroll", gotoTopShoworHide, false);

// current year
var date = new Date();
var year = date.getFullYear();
var copyright = document.querySelector("#copyright");
copyright.innerHTML = "&copy; " + year + " Ravi Jewellers";