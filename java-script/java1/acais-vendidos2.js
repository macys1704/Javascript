import prompt from 'prompt-sync';
let ler = prompt();

console.log(' Programa para calcular o valor total de todos os açaís vendidos \n Quantos açaís pequenos foram vendidos?')
let acaip= Number(ler());
let vp = acaip * 13.50;

console.log('Quantos açaís médios foram vendidos?')
let acaim= Number(ler());
let vm = acaim * 15;


console.log('Quantos açaís grandes foram vendidos?')
let acaig= Number(ler());
let vg = acaig * 17.50;

let vt = vp + vm + vg;

console.log(`O valor total da compra é de R$${vt}`);