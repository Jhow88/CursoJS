function tabuada() {

    var vnum = document.getElementById('txtn')
    var res = document.getElementById ('res')
    var tab = document.getElementById('seltab')
    
    if (vnum.value == 0 ){
    window.alert('[ERRO] Digita um valor!')
 }else{
     
    var n = Number(vnum.value)
    tab.innerHTML = '' //Irá limpar o campo do resultado da tabuada anterior
  
    // var index = 0
     // while (index <= 10) { //O mesmo resultado do FOR abaixo
          //index++
      //}
  for (let index = 0; index <= 10; index++ ) {
      var item = document.createElement('option')
      item.text = ` ${(n)} x ${(index)} = ${(n*index)} `
          tab.appendChild(item)
                         
  }
    
 }
 
}
