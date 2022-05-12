function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if( hora > 0 && hora < 13){
        img.scr = 'manha(1).jpg'
        document.body.style.background = '#c67876'
        msg.innerHTML += `<p>Bom Dia !</p>` 
    }
    else if (hora < 18 ){
        img.src = 'tarde(1).jpg'
        document.body.style.background = 'orange'
        msg.innerHTML += `<p>Boa Tarde !</p>` 
    }else{
        img.src = "noite(1).jpg"
        document.body.style.background = '#16222e'
        msg.innerHTML += `<p>Boa Noite !</p>` 
    }
    
}