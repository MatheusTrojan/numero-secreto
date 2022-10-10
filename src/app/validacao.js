function validaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2 class="container__titulo">Game Over!!!</h2>
                <h3 class="container__subtitulo">Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if (numeroMaiorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="container__titulo">Você acertou!!</h2>
            <h3 class="container__subtitulo">O número secreto era ${numeroSecreto}!</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
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

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})