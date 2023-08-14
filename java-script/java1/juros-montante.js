import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa para calcular o juros simples e o montante \n Qual o valor da capital?')
let valorc = Number(ler());

console.log('Qual o valor do tempo?');
let valort = Number(ler());

let juros= valorc * valort;
let montante= valorc + juros;

console.log(` O Montante pago pelo empréstimo de R$${valorc} é R$${montante}`)