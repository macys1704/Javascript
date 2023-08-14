import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa para remover os valores duplicados');
console.log('Quantos números seu array terá?');
let qtd = Number(ler());

let array = [];
for (let cont = 0; cont < qtd; cont++) {
    console.log('Digite o ' + (cont + 1) + ' valor:');
     array[cont] = Number(ler());  
}


let uniqueArray = [];

for (let cont = 0; cont < qtd; cont++) {
  if (uniqueArray.indexOf(array[cont]) == -1) {
    uniqueArray[uniqueArray.length] = array[cont];
  }
}

console.log(uniqueArray);