import prompt from 'prompt-sync';
let ler = prompt();

console.log(' Programa para calcular o valor de cada parcela \n Qual o valor do produto comprado?')
let valor = Number(ler());

console.log('Qual a quantidade de parcelas?')
let parcelas = Number(ler());

let vlpr = valor / parcelas;

console.log(`Sua compra de R$${valor} em ${parcelas}x de R$${vlpr} foi concluida`);