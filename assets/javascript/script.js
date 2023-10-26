
// const cardProject = document.querySelector('#cardProject');
// const bgImgProject = document.querySelector('.bgImgProject');
// const btnVisualizar = document.querySelector('#btnVisualizar');
// const btnRepositorio = document.querySelector('#btnRepositorio');

// bgImgProject.addEventListener('mouseover', () => {
//      cardProject1.style.backgroundColor = '#0000006b';
//      cardProject1.style.backgroundSize ='120%';
//      cardProject1.style.transition = '0.6s';
//      cardProject1.style.filter = 'none';
//      btnVisualizar.style.display = 'flex';
//      btnRepositorio.style.display = 'flex';
// });

// cardProject.addEventListener('mouseout', () => {
//      cardProject1.style.backgroundSize ='10%';
//      cardProject1.style.transition = '0.3s';
//      cardProject1.style.filter = 'grayscale(100%)';
//      btnVisualizar.style.display = 'none';
//      btnRepositorio.style.display = 'none';
// });

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





