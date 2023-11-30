let valores = []
let htmRes = window.document.getElementById('resultado')

function adicionar () {

    let numero = Number(window.document.getElementById('inpNumero').value)
    let htmSel = window.document.getElementById('selValores')
    let selOpt = document.createElement('option', 1)

    if (valores.indexOf(numero) != -1 || numero <= 0 || numero > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } 
    else {
        selOpt.value = `${numero}`
        selOpt.text = `Valor ${selOpt.value} adicionado.`
        htmSel.appendChild(selOpt)
        valores.push(numero)
        htmRes.innerHTML = ''
    }
}

function finalizar () {

    let arrSoma = 0
    let arrMedia = 0

    for (let i in valores) {
        arrSoma += valores[i]
    }

    arrMedia = arrSoma / valores.length

    valores.sort()

    htmRes.innerHTML  = `<p>Ao todo, temos <strong>${valores.length}</strong> números cadastrados.</p>`
    htmRes.innerHTML += `<p>O maior valor informado foi <strong>${valores[valores.length - 1]}</strong>.</p>`
    htmRes.innerHTML += `<p>O menor valor informado foi <strong>${valores[0]}</strong>.</p>`    
    htmRes.innerHTML += `<p>Somando todos os valores, temos <strong>${arrSoma}</strong>.</p>`
    htmRes.innerHTML += `<p>A média dos valores digitados é <strong>${arrMedia.toFixed(2).replace('.',',')}</strong>.</p>`

}