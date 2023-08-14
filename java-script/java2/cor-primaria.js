import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para ver se a cor é primária ou não \n Qual é a cor?`)
let cor = ler();

let primaria = cor == 'azul' || cor == 'vermelho' || cor == 'amarelo';

console.log(`Essa cor é primária?
${primaria}`)