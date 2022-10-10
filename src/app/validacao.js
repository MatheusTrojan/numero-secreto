function validaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor inválido</div>"
        return
    }

    if (numeroMaiorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="container__titulo">Você acertou!!</h2>
            <h3 class="container__subtitulo">O número secreto era ${numeroSecreto}!</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
