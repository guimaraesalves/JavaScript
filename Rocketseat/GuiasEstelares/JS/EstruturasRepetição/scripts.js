// Estrutura de repetição
// FOR  
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue; // ignora o 5
    }
    
    console.log(i)
}


console.log("------while-------")

//WHILE

let i = 100000000
while(i > 10 ) {
    console.log(i)

    i /= 100
}


console.log("------for-OF------")
// FOR...OF



let nome = 'Mateus'
let nomes = ['Mateus', 'Lucas', 'João', 'Marcus']


console.log("cadeia de caracter: string")
for(let char of nome) {
    console.log(char)
}

console.log("Passando pelo Array")
for(let nome of nomes) {
    console.log(nome)
}



console.log("------for-IN------")
// for...in
// loop para pegar itens da variável objeto

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) { // no objeto person pegue a propriedade
    console.log(property) // pegando uma propriedade
    console.log(person["name"]) // acessando a propriedade
    console.log(person.age) //outra forma de acessar a propriedade de person
    console.log(person[property]) //esse property vai ser convertido numa string - pegando a propriedade e o valor

}