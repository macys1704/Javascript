import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para verificar se o número é par \n Qual número você deseja verificar?`);
let n = Number(ler());

let par = n%2==0;

console.log(`Esse número é par?
${par}`)