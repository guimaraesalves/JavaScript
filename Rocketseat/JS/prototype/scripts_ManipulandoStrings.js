


// Manipulando Strings

// Transformar um número quebrado com 2 casas decimais e trocar o ponto por virgula
let n = 345.33356789
console.log(n.toFixed(2).replace(".", ","))

// Transforme letras minúsculas. Faça ao contrário também
let word1 = "Programar é muito bacana!"
console.log(word1.toLowerCase().toUpperCase())


// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver o amor"
console.log(phrase.includes("amor"))


// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ 


let phrase1 = "Eu quero aprender a programar direito"
let myArray = phrase1.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())



// Manipulando Arrays

// Criar Array com construtor
let myArray1 = new Array('a', 'b', 'c')
console.log(myArray1)


// Contar elementos de um array

console.log([
    "a",
    {type: "array"},
    function() {return "Alô, Mundo!"},
].length)


// Transformar uma cadeia de caracteres em elementos de um array

let word2 = "manipulação!"
console.log(Array.from(word2))


// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("python")
techs.push("Flask")
// adicionar no começo
techs.unshift("nodejs")
techs.unshift("Django")
// remover do fim
techs.pop()
// remover do começo
techs.shift()

console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)
console.log(techs)





