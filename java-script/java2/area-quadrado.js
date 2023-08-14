import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para calcaular a área de dois quadrados e comparar se possuem a mesma área \n Qual o tamanho de um dos lados do primeiro quadrado?`);
let area1 = Number(ler());

console.log(`Qual o tamanho de um dos lados do segundo quadrado?`);
let area2 = Number(ler());

let comp = area1 == area2;

console.log(`Esses quadrados possuem a mesma área?
${comp}`);