// Apri menu 
const hamMenu = document.getElementById('header-ham');
const firstChild = hamMenu.firstElementChild;
const secondChild = hamMenu.children[1];

const headerMenu = document.getElementById('header-menu');

function toggleMenu() {
    firstChild.classList.toggle('hidden');
    secondChild.classList.toggle('hidden');
    headerMenu.classList.toggle('-right-[1000px]');
    headerMenu.classList.toggle('hidden');
}

hamMenu.addEventListener('click', toggleMenu);


// Clicca link > chiudi finestra 
const navLinks = document.querySelectorAll('.header-menu-link');
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Galleria scorrimento automatico
function showImage(index) {
    const images = document.querySelectorAll('#prodotti-img img');
    const dots = document.querySelectorAll('#prodotti-sfere div');
    const prodottiP = document.querySelectorAll('#prodotti-p p');

    for (let i = 0; i < images.length; i++) {
        if (i === index) {
            images[i].classList.remove('hidden');

            dots[i].classList.add('bg-[#F9C901]');
            dots[i].classList.remove('bg-[#FFFBE9]');
            dots[i].classList.remove('border-[#F9C901]');

            prodottiP[i].classList.remove('hidden');

        } else {
            images[i].classList.add('hidden');

            dots[i].classList.remove('bg-[#F9C901]');
            dots[i].classList.add('bg-[#FFFBE9]');
            dots[i].classList.add('border-[#F9C901]');

            prodottiP[i].classList.add('hidden');
        }
    }
}

function startSlideshow() {
    let currentIndex = 0;
    const images = document.querySelectorAll('#prodotti-img img');
    const dots = document.querySelectorAll('#prodotti-sfere div');
    const prodottiP = document.querySelectorAll('#prodotti-p p');
    
    setInterval(() => {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
    }, 3500);
}

if (window.innerWidth < 1020){startSlideshow();}


