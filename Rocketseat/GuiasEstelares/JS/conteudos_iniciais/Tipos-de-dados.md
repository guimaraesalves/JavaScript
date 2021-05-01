# Tipos de dados

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * Agrupamentos de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário.


## Como Vai ser a dinâmica do aprendizado?

* Conceitos e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem

    * Você sabia que é possível aprender 80% de uma nova lingua nova, com cerca de 20% do vocabulário? (até mesmo)

## Strings

* Cadeia de caracteres
```js
"" // aspas duplas
'' // aspas simples
`` // template literals ou template strings --> permitem mult-linhas --> permitem colocar expressões dentro da strigns (interpolação)

console.log('Mateus')
```

## Number
* Números
```js
/*
33 --> inteiros
12.5 --> reais -float
NaN --> Not a Number
Infinity --> infinito
*/

console.log(12.5 === Infinity) //false não é infinito.
```

## Boolean
* Booleanos

```js
/*
    * somente 2 valores

    true // verdadeiro
    false // falso
*/

console.log(false)
```

## Underfined / Null
* Indefinidos e Nulos
```js
/* 
* underfined

* nulo
* objeto que não possui nada dentro
* diferente de indefinido

*/
```

## Object
* Objetos
```js
/*
* Object
    * Objeto
    * Propriedades/atributos
    * Funcionalidades / Métodos

{ propriedade: "valor" }

*/
console.log ({
    name: "Mateus",
    idade: 46,
    andar: function(){
        console.log('andar')
    }
})
```

## Array
* Vetores
```js
/*
 * Array
    * Uma lista
    * Agrupamento de dado

    ["Mateus", 46]

*/

console.log([
    "Leite",
    "Ovos",
    "Pimenta",
])
```
# ECMAScript

## Conforme o ECMAScript temos 9 tipos de dados:

* Data types
    * Primitive /  Primitive value
    * Structural
    * Structural Primitive

### Primitivos

* String
* Number
* Boolean
* Underfined
* Symbol
* BigInt

### Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

## Primitivos Estrutural / Structural Root Primitive

* null


ps: MDN web dics moz://a - Standard built-in objects
    


