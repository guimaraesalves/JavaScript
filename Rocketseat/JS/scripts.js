// 1. Declare uma variável de nome weight
    let weight;

// 2. Que tipo de dado é a variável acima?
    console.log(typeof weight)

/*

    3. Declare um variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

    */

        let name = 'mateus'
        let age = 46
        let stars = 5.0
        let inSubscribed = true

        

    /*
     4. A variável student abaixo é de que tipo de dados?

     4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

     4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */

    let student = {
        name: "Mateus",
        age: 46,
        stars: 5.0,
        isSubscribed: true,
        weight: 90
    };

    console.log(typeof student)
    console.log(student)
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

    console.log("------------------------")

    /*
        5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio 
                
        6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
    */

        let students = [student]
        //console.log(students)

    /*
        7. Coloque no console o valor da posição zero do Array acima
    */
        //console.log(students[0])

    /* 
        8. Crie um novo student e coloque na posição 1 do Array students
    */

        let student2 = {
            name: "Eduarda",
            age: "47",
            stars: 4.7,
            isSubscribed: false,
            weight: 65
        };

        students[1] = student2
        console.log(students)

    /*
        9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou. R= undefined
    */
        console.log(typeof a)
        var a = 1
    
