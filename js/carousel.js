function changePic(id, btn){
    var currCar = "";
    for (i = 1; i < 5; i++){
        currCar = document.getElementById("car-" + i);
        currCar.classList.remove("slideInRight");
        currCar.style.zIndex = "-2";
    }
    currCar = document.getElementById("car-" + id);
    currCar.style.zIndex = "-1";
    currCar.style.display = "block";
    currCar.classList.add("slideInRight");
    var switches = document.querySelectorAll(".switches .switch");
    var i, s = switches.length;
    for (i = 0; i < s; i++){
        switches[i].classList.remove("active");
    }
    btn.classList.add("active");
}

var j = 1;
var currCar = "";
setInterval(function(){
    for (i = 1; i < 5; i++){
        currCar = document.getElementById("car-" + i);
        currCar.classList.remove("slideInRight");
        currCar.style.zIndex = "-2";
    }
    currCar = document.getElementById("car-" + j);
    currCar.style.zIndex = "-1";
    currCar.style.display = "block";
    currCar.classList.add("slideInRight");
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
}, 4000);