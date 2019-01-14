var qtnMin = document.querySelector("#qtnMin");
var qtnPlus = document.querySelector("#qtnPlus");
var qtn = document.querySelector("#qtn");

qtnMin.addEventListener("click", function(){
    if (parseInt(qtn.innerHTML) - 1 < 1){
        alert('Cannot have zero number of items.');
    }
    else{
        qtn.innerHTML = parseInt(qtn.innerHTML) - 1;
        console.log("clicked");
    }
}, false);
qtnPlus.addEventListener("click", function(){
    if (parseInt(qtn.innerHTML) + 1 > 99){
        alert('Maximum items cannot excede 99.');
    }
    else{
        qtn.innerHTML = parseInt(qtn.innerHTML) + 1;
        console.log("clickedsecond");
    }
}, false);

