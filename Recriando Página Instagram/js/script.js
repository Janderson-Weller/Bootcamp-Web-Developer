let alterar = document.getElementById('container-iphone-2');

imagens = ['./img/instagram2.png', './img/instagram3.png', './img/instagram4.png'];

let numImagem = 0;
 
function slide() {

    alterar.style.backgroundImage = "url('"+imagens[numImagem]+"')";
    alterar.style.transitionDuration = "2.5s ";
    numImagem++;

    if(numImagem >= imagens.length) {
        numImagem = 0;
    }
    setTimeout(slide,3000);
}

slide();

