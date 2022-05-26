function soma(n1, n2=0) {
    return n1 + n2   
}
console.log(soma(5, 2))//Aqui mandei mostrar a de 5 e 2 ambos recebendo n1 e n2

let num = soma(9 , 3) //Aqui criei a variável num e receber o return da ação do function soma

console.log(num)// Aqui a variavel num ta mostrando o resultado da função soma

console.log(soma(6))//Aqui mandei mostrar somente o valor 6 que recebeu o parâmetro no n1 e no n2 acrescentado =0 para poder somar com o n1 quando não for digitado valor para n2