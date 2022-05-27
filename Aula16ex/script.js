let num = document.getElementById('fnum')
let lista = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
if (Number(n) >= 1 && Number(n) <= 100) {
    return true
}else{
    return false
}
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}
    

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''//para quando for incluído mais valores após clicar finalizar, limpar novamente.   
    }else{
        window.alert('[Erro] Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()  
}

    function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!')    
        }else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0        

    for(let pos in valores){
        soma += valores[pos]
    if (valores[pos] > maior)    
        maior = valores[pos]
    if (valores[pos] < menor)
        menor = valores[pos]    
    }
    media = soma / tot

        res.innerHTML = ''
        res.innerHTML +=  `Ao todo temos ${tot} números cadastrados<br> `
        res.innerHTML += `O maior valor informado foi ${maior} <br>`
        res.innerHTML += `O menor valor informado foi ${menor}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
        res.innerHTML += `A média dos valores digitados é ${media}<br>`
    }
    
}
