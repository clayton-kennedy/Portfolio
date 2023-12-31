/* ======================= Menu hamb. ======================= */

const menuHamburguer = document.querySelector('#menu-hamb-icon');
const linksMenu = document.querySelector('.linksMenu');

menuHamburguer.addEventListener('click', () => {
    linksMenu.classList.toggle('hide');
    console.log('Clicado');
});
const menuItems = document.querySelectorAll('.nav-li');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        linksMenu.classList.add('hide');
    });
});

/* =======================Título digitando ======================= */

document.addEventListener("DOMContentLoaded", function() {
    const textBanner = document.querySelector('.textBanner3');
    const originalText = 'Web Developer';
    const interval = 100;
    let isTyping = true;
    let i = 0;

    function mostrarTexto() {
        if (isTyping) {
            if (i < originalText.length) {
                textBanner.textContent = originalText.substring(0, i + 1);
                i++;
            } else {
                isTyping = false;
            }
        } else {
            if (i > 0) {
                textBanner.textContent = originalText.substring(0, i - 1);
                i--;
            } else {
                isTyping = true;
            }
        }
        
        setTimeout(mostrarTexto, interval);
    }

    mostrarTexto();
});

/* ======================= Modal projetos ======================= */

const btnModalCardProject = document.querySelectorAll('.btnModalCardProject');
const modalCardProject = document.querySelectorAll('.modalCardProject');

btnModalCardProject.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modalCardProject[index].style.display = 'flex';
        btn.style.display = 'none';
    });
});

const btnCloseModal = document.querySelectorAll('.iconCloseModal');

btnCloseModal.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modalCardProject[index].style.display = 'none';
        btnModalCardProject[index].style.display = 'flex';
    });
});

