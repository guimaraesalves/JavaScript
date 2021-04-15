// if ... else

let temperature = 36.4
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37



if(highTemperature ){
    console.log("Atenção! Febre alta!")

} else if(mediumTemperature) {
    console.log("Febre Moderada!")
} else {
    console.log("Temperatura Normal")
}


// switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':  
            result = number1 + number2          
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        default:
            console.log('Não implementado')
            break;
    }

    return result
}

console.log(calculate(234, '+' , 432))



// throw ( lançar ) interrompe a aplicação

function sayMyName(name= '') {
    if (name === '') {
        throw "O nome deve ser preenchido"
    }

    console.log('depois do erro')
}

 

// try...catch (pegar)
    // para não interromper a aplicação!!!

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após a função de erro')
