console.log('Aula sobre function callback')
// uma função dentro de outra. criar uma função fora e passar como valor para dentro da primeira function


// callback function

function sayMyName (name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')

}


sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)


