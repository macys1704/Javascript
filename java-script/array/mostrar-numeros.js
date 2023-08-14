import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

console.log('Programa da array, onde você irá informar 5 números.');

for(let cont=0; cont <5;cont++){
    console.log('Informe um número:')
    array[cont]=ler();
}


console.log('Você digitou os números:')
for(let item of array){
    console.log(item);
}