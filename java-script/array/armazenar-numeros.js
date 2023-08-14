import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

console.log(`Programa da array
quantos números você quer armazenar?`);
let qtd = Number(ler());

for(let cont=0;qtd > cont;qtd--){
    console.log('Informe um Número:')
    array[qtd]=ler();
}


console.log(`
Você digitou os números:`);
for(let item of array){
    console.log(item);
}