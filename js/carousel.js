var carPics = ["","c1","c2","c3","c4"];
function changePic(id, btn){
    j = id;
    var carousel = document.querySelector(".carousel");
    carousel.style.backgroundImage = "linear-gradient(-45deg,rgba(249, 249, 134, 0.1),rgba(0, 0, 0, 0.9)), url('images/"+carPics[id]+".jpg')";
    carousel.classList.remove("fadeIn");
    carousel.classList.add("fadeIn");
    var switches = document.querySelectorAll(".switches .switch");
    var i, s = switches.length;
    for (i = 0; i < s; i++){
        switches[i].classList.remove("active");
    }
    btn.classList.add("active");
}

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

let j = 1;
var timer = setInterval(function(){
    var carousel = document.querySelector(".carousel");
    carousel.style.backgroundImage = "linear-gradient(-45deg,rgba(249, 249, 134, 0.1),rgba(0, 0, 0, 0.9)), url('images/"+carPics[j]+".jpg')";
    var switches = document.querySelectorAll(".switches .switch");
    var i, s = switches.length;
    for (i = 0; i < s; i++){
        switches[i].classList.remove("active");
    }
    switches[j-1].classList.add("active");
    j++;
    if (j > 4){
        j = 1;
    }
}, 5000);