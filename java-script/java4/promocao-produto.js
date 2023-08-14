import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa da Promoção! \n Me fale o valor do produto:');
let v = Number(ler());

console.log('me fale quantos % vai ser descontado:');
let p = Number(ler());

let r = (v * p) / 100;

let resultado = v - r;

console.log('O valor após o desconto será de R$' + resultado)