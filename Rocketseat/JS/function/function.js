console.log('Aula sobre function scope')

// function scope
let subject = 'create video'

function createThink(subject) { //se retirar o parâmetro a variável subject assume o valor study
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)



