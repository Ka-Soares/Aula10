/* switch */

/* let opcao = 1; */
/* let opcao = parseInt(prompt("Digite uma opção"))

switch(opcao){
    case 1:
        document.write("Primeira opcao")
        break;
    case 2:
        document.write("Segunda opcao")
        break;
    case 3:
        document.write("Terceira opcao")
        break;
    default: 
        document.write("Nehuma das opcoes validas")
} */

// INCREMENTO E DECREMENTO

let valor = 7
console.log(valor)
valor = valor+1
console.log(valor);

let valor1 = 10
console.log(valor1)
valor1 *=3;
console.log(valor1)

// FOR (LAÇO DE REPETIÇÃO)

for (let i=0; i<10; i++){
    console.log("Agora i vale: " + i)
}

// FOR COM ARRAY

let carros=["fusca", "belina", "marea turbo", "kombi", "gurgel", "monza"]

for(let i=0; i <carros.length; i++){
    console.log(carros[i])
}

// for com of

for (let carro of carros){
    console.log(carro)
}