var j;
var currCar = "", preCar = "";
autoChange(1);

function autoChange(current){
    if (current === undefined){
    }
    else{
        j = current;
    }
    for (i = 1; i < 5; i++){
        currCar = document.getElementById("car-" + i);
        currCar.classList.remove("slideInRight");
        currCar.style.zIndex = "-3";
    }
    if (j - 1 == 0){
        preCar = document.getElementById("car-" + 4);    
    }
    else{
        preCar = document.getElementById("car-" + (j-1));    
    }
    preCar.style.zIndex = "-2";
    
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
    var timer = setTimeout(autoChange, 5000);
}

function changePic(id, btn){
    setTimeout(autoChange, 5000, id);
}