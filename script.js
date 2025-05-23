var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

var links = document.querySelectorAll(".navlinks li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings: ["Frontend Developer", "Web Developer", "Java Developer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

