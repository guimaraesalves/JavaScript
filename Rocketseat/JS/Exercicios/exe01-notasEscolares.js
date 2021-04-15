/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima       - A
* entre 80  - 90        - B
* entre 70  - 79        - C
* entre 60  - 69        - D
* menor que - 60        - F

*/


function getNote(note) {



    let noteA = note >= 90 && note <=100
    let noteB = note >= 80 && note < 90
    let noteC = note >= 70 && note < 80
    let noteD = note >= 60 && note < 70
    let noteF = note < 60 && note >= 0


    console.log(` Sua Nota: ${note} pontos.`)




    if (noteA) {

        console.log("Nota A! Aí sim hein Animal!")
        
    } else if (noteB) {

        console.log(" Nota B - Boa Quadrupede!")
        
    } else if (noteC) {

        console.log("Nota C -Tá melhorando Asninho")
        
    } else if (noteD) {

        console.log("Nota D - Burro")
        
    } else if (noteF) {

        console.log("Nota F - Jumento")

    } else {

        console.log("Nota inválida!")
    }

}

getNote(100)