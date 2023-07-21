// On récupère les boutons de filtres et des images 

const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableCards = document.querySelectorAll('.filterable-cards .card');


// Fonction exécutée quand un bouton sera cliqué

const filterCards = event => {
    // console.log(e.target) -> affiche la catégorie cliquée
    // Supprime la classe "active" de l'élément qui avait cette classe précédemment. L'idée est d'appliquer la classe "active" au bouton cliqué pour indiquer visuellement quel bouton est sélectionné.
    document.querySelector('.active').classList.remove('active');
    // Ajoute la classe "active" à l'élément (bouton) qui a été cliqué. Ainsi, ce bouton devient visuellement identifié comme "actif".
    event.target.classList.add('active'); // ajoute la classe "acive" au bouton cliqué

    // on itère sur chaque carte (élément avec la classe "card") que nous voulons filtrer.
    filterableCards.forEach(card => {
        // Pour chaque carte, cette ligne ajoute la classe "hide" pour les masquer initialement
        card.classList.add('hide');
        // C'est ici que se fait le filtrage. Il vérifie si le nom de la catégorie associé à la carte (card.dataset.name) correspond au nom de la catégorie associé au bouton cliqué (e.target.dataset.name). Si cela correspond ou si le bouton "all" (tous) est sélectionné, la classe "hide" est retirée de la carte, la rendant visible. Sinon, la carte reste masquée.
        if(card.dataset.name == event.target.dataset.name || event.target.dataset.name == 'all') {
            card.classList.remove('hide');
        }
    })
}

// On ajoute un gestionnaire d'événements click à chaque bouton pour déclencher la fonction de filtrage filterCards lorsque l'un des boutons est cliqué.
filterButtons.forEach(button => button.addEventListener('click', filterCards))