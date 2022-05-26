let num = document.getElementById('fnum')
    let res = document.getElementById('res')
    let form = document.getElementById ('flist')
    let valores = []

function adicionar() {
    
    if (num.value.length  == 0 || num.value > 100 ) {
        window.alert('[Erro]')
        
    }else{

        let n = Number(num.value)
        var item = document.createElement('option')
        form.appendChild(item)
        item.text = `${n}`
        }
        

   }
   res.innerHTML =  `Ao todo temos ${n.lenght} números cadastrados <br>`
   /*
    function isNum(params) {
        
    }
    function inList(params) {
        if (n, l) {
            
        }
        
    }


       
/*
        var item = document.createElement('option')
        tab.appendChild(item)
        item.text = `${(n[item])}` res.innerHTML =  `Ao todo temos ${n.lenght} números cadastrados <br>`
res.innerHTML += `O maior valor informado foi x <br>`
res.innerHTML += `O menor valor informado foi x <br>`
res.innerHTML += `Somando todos os valores, temos x <br>`
res.innerHTML += `Somando todos os valores, temos x`*/