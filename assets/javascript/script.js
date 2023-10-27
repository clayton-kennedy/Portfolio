
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

const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const mensagem = document.querySelector('#mensagem');
const buttonEnviar = document.querySelector('#buttonEnviar');
