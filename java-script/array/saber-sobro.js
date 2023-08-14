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
    let x=item *2;
    console.log('o dobro de ' + item + ' é ' + x );
}