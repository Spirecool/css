function menuToggle() {
    var nav = document.getElementById('nav');
    console.log(nav)
    var toggle = document.getElementById('toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');

}