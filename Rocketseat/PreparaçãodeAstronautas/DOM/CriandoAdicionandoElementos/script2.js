// Adicionando elementos
//const div = document.createElement('div');
//div.innerText = "Hello, World!!"

const div = document.createElement('div');
div.innerText = "Olá Mundo!"

// insertBefore
//const body = document.querySelector('body')
//const script = body.querySelector('script')
//body.insertBefore(div, script)

//Para inserir depois
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)
