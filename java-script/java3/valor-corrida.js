import prompt  from 'prompt-sync';
let ler = prompt();

console.log('Seja bem-vindo ao programa para calcular o valor da sua corrida \n Quantos quilômetro você percorreu?')

let km = Number(ler());

let valor = (km * 0.65) + 4.20;

console.log(' o valor da sua corrida é de R$' + valor)