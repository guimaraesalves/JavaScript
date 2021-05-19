// Criando e adicionando elementos

//createElement
const div = document.createElement('div');
div.innerText = "Olá Mundo!"

// append / prepend
const body = document.querySelector('body')

body.append(div) // depois

body.prepend(div) //antes
