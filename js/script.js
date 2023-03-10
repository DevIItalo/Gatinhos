// Botoes
const btnProximo = document.querySelector("#proximo");
const btnVolta = document.querySelector("#volta");

// Um array com o caminho para cada foto
let fotos = ["img/foto1.jpg","img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg", "img/foto6.jpg", "img/foto7.jpg", "img/foto8.jpg"];

// Define onde a foto vai começa
let fotoAtual = 0;

// Obtém a imagem da página
let img = document.querySelector("#imagem");

btnProximo.addEventListener("click", ()=> {
    // Incrementa o índice da foto atual
    fotoAtual++;
     // Vai verifica se o índice ultrapassou o número de fotos disponíveis
     if (fotoAtual >= fotos.length){
        fotoAtual = 0;
     }
     img.src = fotos[fotoAtual];
});

btnVolta.addEventListener("click", ()=> {
    // Incrementa o índice da foto atual
    fotoAtual--;
     // Vai verifica se o índice ultrapassou o número de fotos disponíveis
     if (fotoAtual <= 0){
        fotoAtual = fotos.length - 1;
     }
     img.src = fotos[fotoAtual];
});


// Levara para a descrição do site


const btnSobre = document.querySelector("#btnSobre");
const sobre = document.querySelector("#footerSobre");

btnSobre.addEventListener("click", ()=> {
    
    sobre.scrollIntoView({behavior: "smooth"});
});