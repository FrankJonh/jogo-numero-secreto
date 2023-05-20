function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute; // transforma string em numero e verifica se foi digitado numero válido. Se foi digitado, pega

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }
    if (numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre
        ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O número secreto é: ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
    
    else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor 
        <i class="fa-solid fa-down-long"></i></div>`
    }
    else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor 
        <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido (numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {

    return numero > maiorValor || numero < menorValor; // verifica se numero for maior ou menor que o valor informado. Se for
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload() // recarrega a página
    }
})