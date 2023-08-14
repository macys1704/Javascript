import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

console.log('Programa da array, onde você irá informar 5 nomes.');

for(let cont=0; cont <5;cont++){
    console.log('Informe um nome:')
    array[cont]=ler();
}


console.log(`
Você digitou os nomes:`);
for(let item of array){
    console.log(item);
}