/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary

*/

let n1 = 111
let n2 = 222
let n3 = 333

console.log(n1 + n2) // binary
console.log(--n3) // unary ex typeoff é um operador unário

// Ternário
    // um único exemplo
    console.log(false ? 'Alô' : 'Mundo')


    console.log('--------------------------------------')
/*
    new

    * left-hand-side expression
    * criar um novo objeto

*/

let name = new String("Penha")
name.surName = "Rainha"
let age = new Number(23)
console.log(name, age)
let day = new Date('2021-04-14')
console.log(day.__proto__)

console.log('--------------------------------------')

// UNÁRIO
/*
    Operadores unários
    typeof
    delete
*/
console.log(typeof "Penha")

const person = {
    name: 'Nossa',
    name2: 'Senhora',
    name3: 'da',
    name4: 'Penha',
    age: 10000000000000
}

delete person.age
console.log(person)

console.log('--------------------------------------')

// OPERADORES ARITMÉTICOS

// multiplicação
console.log(12 * 3)
// divisão
console.log( 10 / 2)
// soma
console.log(234 + 432)
// subtração
console.log(765 - 567)

// resto da divisão (remainder)

console.log(123 % 5)

console.log('--------------------------------------')


// incremento
let increment = 0

console.log(increment ++) // + no final
console.log(++ increment) // no ínicio


// decremento 
let decrement = 6
decrement--
console.log(decrement)

// exponencial
console.log(3 ** 3)

console.log('--------------------------------------')


// Grouping operator ( precedencia )

    let total = (2 + 3) * 5
    console.log(total)


    console.log('--------------------------------------')

// Operadores de comparação

let one = 1
let two = 2

// ==       igual
console.log( one == "1") // vai dar true por causa do js


// !=       diferente
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false


// ===      estritamente igual
console.log(one === "1") // false
console.log(one === 1) // true


// !==      estritamente diferente
console.log(one !== "1") // true


// >        Maior
console.log(one > two) // false


// >=       Maior igual
console.log(one >= 1) // true


// <    Menor
console.log(one < two) // true

// <=       Menor igual  
console.log(one <= 0) // false


console.log('--------------------------------------')

// OPERAÇÃO DE ATRIBUIÇÃO(Assignment)

let x

console.log(x)

//assignment
// x = 1


// addition assignment
// x += 2


// subtraction assignment
// x -= 1


// multiplication assignment
// x *= 2 --> x = x * 2


// division assignment
// x /= 2

// remainder, exponetiation
// x %= 2
x **= 2
console.log(Number(x))


console.log('--------------------------------------')


// OPERADORES LÓGICOS (LOGICAL OPERATORS)

// - 2 valores booleanos, quando verificados
// resultará em verdadeiro ou falso


let pao = true
let queijo = true

// AND &&
 // true && true == True

// OR ||
 // false || false == False

// NOT !
console.log(!pao ) 


console.log('--------------------------------------')


// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes


// Condição então valor 1 se não valor 2
// condition? value1 : value2

// Exemplos
// Café da manhã top
let cafe = true
let leite = false

const niceBreakfast = pao && leite ? 'Café show' : 'Café ruim'

console.log(niceBreakfast)



// Maior de 18
let age1 = 18
const canDrive = age1 >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


console.log('--------------------------------------')


// Operador de String (String operator)


// comparison (comparação)
// console.log( 'a' == 'a')


// concatenation (concatenação)
// Retorna a união de duas Strings
let alpha = 'alpha'
alpha += 'Bet'

console.log( alpha  + 345)




console.log('--------------------------------------')
console.log('---------falsy-----------------')


/* FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

*/

console.log(true ? 'verdadeiro' : 'falso') //truthy

console.log(false ? 'verdadeiro' : 'falso')
console.log(0 ? 'verdadeiro' : 'falso')
console.log(-0 ? 'verdadeiro' : 'falso')
console.log("" ? 'verdadeiro' : 'falso')
console.log(null ? 'verdadeiro' : 'falso')
console.log(NaN ? 'verdadeiro' : 'falso')
console.log(undefined ? 'verdadeiro' : 'falso')

console.log('--------truthy----------------')
/* 
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log(true ? 'verdadeiro' : 'falso')


console.log('---------PRECEDÊNCIA DOS OPERADORES----------------')

/* Operator precedence - Precedência de operadores

* grouping                      ()
* negação e incremento          ! ++ --
* multiplicação e divisão       *  /
* adição e subtração            + -
* relacional                    < <= > >=c
* igualdade                     == != === !==
* AND                           &&
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *=
*/

console.log(true == 1)
console.log(false == 0)
console.log(3 > 2 > 1) // false [(3 > 2) = true (true == 1 > 1) = false
console.log(3 > 2 && 2 >1) // true && false == false




