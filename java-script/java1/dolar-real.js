import prompt from 'prompt-sync';
let ler = prompt();

console.log('Esse programa converte dollar em real \n Quantos dólares você quer converter?')
let dollar = Number(ler());
let real = dollar * 5.15;

console.log(`$${dollar} convertendo pra real fica R$${real}`);