function gerarTabuada() {
    let txtNumero = window.document.getElementById('inpNumero').value
    let nNumero = Number(txtNumero)
    let selTabuada = window.document.getElementById('selTabuada')
    let selTabuadaQtdOpcoes = 0
    
    if (txtNumero.length <= 0) {
        alert('Por favor, digite um número!')
    }
    else {

        /* Limpamos o select */
        /*selTabuadaQtdOpcoes = selTabuada.options.length - 1
        for (let i = selTabuadaQtdOpcoes; i >= 0; i--) {
            selTabuada.remove(i);
        }*/
        selTabuada.innerHTML = ''

        /* Populamos novamente */
        for (let i = 1; i <= 10; i++) {
            let opcao = document.createElement('option')
            opcao.value = `val${i}`
            opcao.text = `${nNumero} x ${i} = ${nNumero * i}`
            selTabuada.appendChild(opcao)  
        }
    }
}
