let listaNumerosSorteados = []
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa  = 1 ;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
}

function mensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   // console.log(numeroSecreto);
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
let mensagemTentativas = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`
        if(chute == numeroSecreto) {
            exibirTextoNaTela('h1' , 'Acertou!');
            exibirTextoNaTela('p' , mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else { if
            (chute > numeroSecreto) {
                exibirTextoNaTela('p' , `O número secreto é menor que ${chute}`);
            } 
         else {
            (chute < numeroSecreto) 
                exibirTextoNaTela('p' , `O número secreto é maior que ${chute}`);
            } tentativa++;
             limparCampo();
            }
            
        }

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 10) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        //console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativa = 1;
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}











