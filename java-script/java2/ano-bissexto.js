import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para ver se o ano é bissexto
Qual ano você quer descobrir se é bissexto ou não:`)

let ano = Number(ler());
let bissexto = ano%400==0 || ano%4==0 && ano%100!=0;

console.log(`Esse ano é bissexto?
${bissexto}`);