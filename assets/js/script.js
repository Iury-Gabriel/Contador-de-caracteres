let texto = document.querySelector('.textarea');
let caracteres = document.querySelector('.caracter');
let palavras = document.querySelector('.palavras');

texto.addEventListener('input', function(){
    let qtdCaracteres = texto.value.length;
    let qtdPalavras = texto.value.trim().split(/\s+/);
    caracteres.innerHTML = qtdCaracteres;

    if (qtdPalavras.length > 0 && qtdPalavras[0] === '') {
        qtdPalavras.shift();
    }

    palavras.innerHTML = qtdPalavras.length;

    if(texto.value.trim() == ''){
        caracteres.innerHTML = '0';
        palavras.innerHTML = '0';
    }
});