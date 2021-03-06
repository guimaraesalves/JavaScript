/*
    prototype

    * prototype-based language
    * prototype chain
    * __proto__
    
*/

// tipo biblioteca em python

//__proto__ é as propriedades que já existem no javascript

/*

Type conversion (typecasting) vs Type coersion

* Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) //transformou o int 5 em str

console.log(Number('9') + 5) //typecasting str "9" para número


// Manipulando Strings e Números

// Transformar String em Número e Número em string
let string = '123'
console.log(Number(string))
let number = 321
console.log(String(typeof number))



// Contar quantos caracteres tem uma palavra e quantos digitos tem um número
let word = "paralelepipido"
console.log(word.length)
let num = 1234
console.log(String(num).length)


// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar o ponto por virgula
let n = 345.33356789
console.log(n.toFixed(2).replace(".", ","))

// Transforme letras minúsculas. Faça ao contrário também
let word1 = "Programar é muito bacana!"
console.log(word1.toLowerCase().toUpperCase())

