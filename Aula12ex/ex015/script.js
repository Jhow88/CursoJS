function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if(fsex[0].checked){
        genero = 'homem'
        if(idade >= 0 && idade <= 10){
            img.setAttribute('src' , 'bebê_masculino.jpg')
        }else if(idade < 21){
            img.setAttribute('src' , 'adolescente_masculino.jpg')
        }else if(idade < 50){
            img.setAttribute('src' , 'adulto_masculino.jpg')
        }else{
            img.setAttribute('src' , 'idoso.jpg')
        }
    }
    else if(fsex[1].checked){
        genero = 'mulher'

        if(idade >= 0 && idade <= 10){
            img.setAttribute('src' , 'bebê_feminino.jpg')
        }else if(idade < 21){
            img.setAttribute('src' , 'adolescente_feminino.jpg')
        }else if(idade < 50){
            img.setAttribute('src' , 'adulto_feminino.jpg')
        }else{
            img.setAttribute('src' , 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
    res.appendChild(img)
    }
}
