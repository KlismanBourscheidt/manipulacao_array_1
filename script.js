//manipulacao de array trabalhando com a inversão de array

const prompt = require("prompt-sync")()

lista = []

for(let i = 1; i <= 5; i++){
    let num = Number(prompt('Digite um numero para acrescentar na Array: '))
    lista.push(num)
    console.log(lista)
}
lista.reverse()
console.log(lista)