import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

console.log(`Programa da array
quantos números você quer armazenar?`);
let qtd = Number(ler());

for(let cont=0; cont <qtd;cont++){
    console.log('Informe um Número:')
    array[cont]=ler();
}


console.log(`
Você digitou os números:`);
for(let item of array){
    console.log(item);
}

console.log(`
os números pares são:`);
for(let item of array){
    if(item % 2 == 0){
    console.log(item);
}
}