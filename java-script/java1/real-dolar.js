import prompt from 'prompt-sync';
let ler = prompt();

console.log('Esse programa converte real em dollar \n Quantos reais você quer converter?')
let real = Number(ler());
let dollar = real / 5.15;

console.log(`R$${real} convertendo pra dollar fica $${dollar}`);