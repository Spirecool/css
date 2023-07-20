const galleryItems = document.querySelectorAll('.gallery li');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImageIndex = 0;

// Foction ouvrant la Lightbox
function openLightbox(imgSrc, index) {
  currentImageIndex = index;
  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';
  // Ajout d'un event listener au clic sur l'image de la Lightbox pour aller à l'image suivante
  lightboxImg.addEventListener('click', showNextImageOnClick);
}

// Fonction fermant la Lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Event Listener de clic à chaque image de la galerie
galleryItems.forEach((item, index) => {
  const imgSrc = item.querySelector('img').src;
  item.addEventListener('click', () => openLightbox(imgSrc, index));
});

// Fermeture de la Lightbox en cliquant sur le bouton close
closeBtn.addEventListener('click', closeLightbox);

// Fermeture de la Lightbox en cliquant en dehors de l'image
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Fonction pour montrer l'image précédente
function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  const imgSrc = galleryItems[currentImageIndex].querySelector('img').src;
  lightboxImg.src = imgSrc;
}

// Fonction pour montrer l'image suivante
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  const imgSrc = galleryItems[currentImageIndex].querySelector('img').src;
  lightboxImg.src = imgSrc;
}

// Event Listener de clic sur les boutons previous et next
prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);


// FOnction pour montrer l'image suivante en cliquant sur l'image de la Lightbox
function showNextImageOnClick() {
    showNextImage();
  }
  