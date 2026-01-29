// change navbar color when scrolling
window.addEventListener("scroll", function () {

    var navBar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }

});
