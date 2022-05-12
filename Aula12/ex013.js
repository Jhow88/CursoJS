var agora = new Date()
var hora = agora.getHours()
console.log(`Hoje é ${agora} tenha um(a)`)//Se dentro do placeholder, colocar o var hora ao invés de agora somente mostra a hora.

if(hora < 13){
    console.log('Bom dia!')
}
else if(hora < 18){
    console.log('Boa Tarde !')
}
else{
    console.log('Boa noite')
}
