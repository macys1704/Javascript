import prompt from 'prompt-sync';
let ler = prompt();

console.log(' Programa para calcular o valor total de todos os açaís vendidos \n Quantos açaís foram vendidos?')
let acai = Number(ler());
let vt = acai * 13.50;

console.log(`Na compra de ${acai} o valor será de R$${vt}`);