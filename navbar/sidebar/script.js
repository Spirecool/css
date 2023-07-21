
function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    /* Au clic sur le bouton, cela passe injecte la classe ".active", qui augmente la largeur de la sidebar à 240px */
    navigation.classList.toggle('active');
    
    toggle.classList.toggle('active');

}