console.log('Aula sobre function constructor')

/*
    Function() construtor

    * expressão new
    * criar um novo objeto
    *  this keyword

*/
// O JS possui várias functions constructors

let nome = new String("Duda") // função construtora string
let data = new Date("2021-04-13") // função construtora data

console.log(nome)
console.log(data)

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mateus = new Person("Mateus")
const joao = new Person("Joao")
console.log(mateus.walk())
console.log(joao.walk())




