let valores = []
let htmRes = window.document.getElementById('resultado')

function adicionar () {

    let inpnum = window.document.getElementById('inpNumero')
    let numero = Number(inpnum.value)
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

    inpnum.value = ''
    inpnum.focus()

}

function finalizar () {

    let arrSoma = 0
    let arrMedia = 0
    let maior = valores[0]
    let menor = valores[0]

    if (valores.length <= 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

        for (let i in valores) {
            arrSoma += valores[i]

            if (valores[i] > maior)
                maior = valores[i]

            if (valores[i] < menor)
                menor = valores[i]            
        }
    
        arrMedia = arrSoma / valores.length
    
        htmRes.innerHTML  = `<p>Ao todo, temos <strong>${valores.length}</strong> números cadastrados.</p>`
        htmRes.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        htmRes.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`    
        htmRes.innerHTML += `<p>Somando todos os valores, temos <strong>${arrSoma}</strong>.</p>`
        htmRes.innerHTML += `<p>A média dos valores digitados é <strong>${arrMedia.toFixed(2).replace('.',',')}</strong>.</p>`
    }
}