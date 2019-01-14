//shop filter bar
function filterBarShoworHide(){
	var filterbar = document.querySelector(".filter-bar");
	if (window.pageYOffset < 50){ //change to 200
		filterbar.style.bottom = "-75px";
	}
	else{
		filterbar.style.bottom = "0";
	}
}
window.addEventListener("scroll", filterBarShoworHide, false);

// show filters on click
function showHideFilters(){
    var filterlist = document.querySelector(".shop-holder .filter-side");
    if (filterlist.style.display == ""){
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        filterlist.classList.remove("bounceOutDown");
        filterlist.classList.add("bounceInUp");
        filterlist.style.display = "flex";
        console.log("clicked");
    }
    else if (filterlist.style.display == "flex"){
        document.getElementsByTagName("html")[0].style.overflowY = "";
        filterlist.classList.remove("bounceInUp");
        filterlist.classList.add("bounceOutDown");
        setTimeout(function(){
            filterlist.style.display = "";
        }, 500);
    }
}

function clearAllFilters(){
    var filterlist = document.querySelector(".shop-holder .filter-side");
    filterlist.style.display = "none";
}