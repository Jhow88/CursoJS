            //1 2 3 4 5 6
let valores = [8,1,7,4,2,9]//tem 5 elementos que são as posições e 6 valores que são os números
           //  0 1 2 3 4 5
for (pos = 0; pos < valores.length; pos++)// Posição começa do zero, se a posição do elemento da variável (valores) não for a última (menor ) posição(valores.length) incrementa um console.log com as informações abaixo.
                            //(let = para)       (pos)   (variavel valores no caso) (console.log(valores[pos])
for (let pos in valores)//Lê se assim: para cada posição dentro de valores, mostre o valor do elemento da posição   
// É uma forma encurtada de escrever o mesmo FOR acima

console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

