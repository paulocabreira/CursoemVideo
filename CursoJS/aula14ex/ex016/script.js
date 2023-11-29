function contar() {

    let txtInicio = document.getElementById('inpInicio').value
    let txtFim = document.getElementById('inpFim').value
    let txtPasso = document.getElementById('inpPasso').value
    let res = document.getElementById('res')

    let nInicio = Number(txtInicio)
    let nFim = Number(txtFim)
    let nPasso = Number(txtPasso)

    let emojiPasso = '&#128073;'
    let emojiFinal = '&#127937;'

    if (txtInicio.length <= 0 || txtFim.length <= 0 || txtPasso.length <= 0) {
        //window.alert('Impossível contar. Informe todos os valores!');
        res.innerHTML = 'Impossível contar!'
    } 
    else {

        if (nPasso <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            nPasso = 1
        }

        res.innerHTML = 'Contando: <br>'

        /* Contagem progressiva*/ 
        if (nInicio < nFim) {
            for (let i = nInicio; i <= nFim; i += nPasso) {
                res.innerHTML += `${i}${emojiPasso}`
            }
        } 
        /* Contagem regressiva */
        else {
            for (let i = nInicio; i >= nFim; i -= nPasso) {
                res.innerHTML += `${i}${emojiPasso}`
            }
        }

        res.innerHTML += `${emojiFinal}`
    }
}
