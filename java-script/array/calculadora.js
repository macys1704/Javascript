import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

console.log(`Programa da array
qual número você quer saber a calculadora?`);
let n = Number(ler());

for(let cont=0; cont <= 10;cont++){
    let x = n * cont;
    array[cont]=x;
}


console.log(`
A tabuada de ${n} é:`);
for(let item of array){
    console.log(item);
}