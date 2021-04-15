/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let  spending = {
    recipes: [2500.00, 3200, 250.46, 360.45],
    expenses: [3200.34, 1280.45, 576.87, 1450.00],
}
 

function sum(array){
    let total = 0
    for (let value of array){
        total += value
    }

    return total

}
    
function calculateBalance() {
    const calculaterecipes = sum(spending.recipes)
    const calculaexpenses = sum(spending.expenses)

    const balance = calculaterecipes - calculaexpenses

    const itsOk = balance >= 0
    
    let balanceText = "Negativo! Caloteiro."

    if(itsOk) {
        balanceText = "Positivo! Me empresta um qualquer aí?"
    }

    console.log(`Seu saldo está ${balanceText}: R$ ${balance.toFixed(2)}`)
}


    
calculateBalance()
    
    