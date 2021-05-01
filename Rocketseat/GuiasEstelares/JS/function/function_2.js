console.log('Aula 2 sobre functions: Argumentos e parâmetros')

// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(num1, num2){
    console.log(num1 + num2)
}

sum(2, 3) //arguments 

const mult = function(number1, number2){
    let produto = number1 * number2
    return produto
}

let number1 = 12
let number2 = 21

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`o produto é ${mult(number1, number2)}`)
console.log(mult(number1, number2))
