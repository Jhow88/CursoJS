function contar() {
  var inicio = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[Erro] Digite um valor!')
    
  }else{
     res.innerHTML = 'Contando:<br>'

     var i = Number(inicio.value)
     var f = Number(fim.value)
     var p = Number(passo.value)
     if(p <= 0){
       window.alert('Número Inválido! Considerando passo 1 !')
       p = 1 
     }

     if (i < f) {
       for (let index = i ; index <= f ; index += p) {
       
        res.innerHTML += ` ${(index)} \u{1F449} `
      }      
      }else{ 
        for (let index = i; index >= f ; index-= p){ 
          
        res.innerHTML += `${(index)} \u{1f449} `
      }   
    }
    res.innerHTML +=`\u{1F3c1}`   
  }
   
}
  