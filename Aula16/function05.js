function fatorial (n) {
    if (n == 1) {
        return 1
    }else{
        return n * fatorial (n-1)  
    }
    
}
console.log(fatorial(5))

/* Se o fatorial de n for igual a 1 retorna  como resultado 1. Pq o fatorial de 1 é 1 mesmo 
   Se não retorna 5 vezes o fatorial dele menos um 
   
   5! = 5x4x3x2x1 ---- 5x4 =20 x3 =60 x2 =120 x1 =120 o menos um no caso seria 120 x 1 =120
   
   */
