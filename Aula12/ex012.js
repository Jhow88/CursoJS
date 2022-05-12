var idade = 16
console.log(`Você tem ${idade} anos`)
if ( idade < 16){// se idade tiver dentro desse if aparece o console.log nao vota!
    console.log(`Não vota!`)
}
else if ( idade < 18 || idade > 65){//se idade estiver dentro de 16 e 17 ou mais que 65 aparecera voto opcional, pq ja foi analisado no if acima a variavael idade
    console.log(`Voto opcional!`)
}

else{ //Se não foi o if nem o else if, será o console.log do else
    console.log(` Voto Obrigatório!`)
}