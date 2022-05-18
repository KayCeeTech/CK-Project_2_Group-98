var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItems");
var hamburger = document.querySelector(".hamburger");
var closeIcon = document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");
function togger(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
    else{
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hanburger.addEventListener("click", "toggleMenu");
menuItems.forEach(
    function(menuItem){
menuItems.addEventListener("click", "toggleMenu");
    }
)