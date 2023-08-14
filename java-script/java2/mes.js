import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para verificar a partir do nome do mes ver se é o primeiro ou segundo semestre \n Qual é o mes? `);
let mes = ler();

let semestre = mes == 'janeiro' || mes == 'fevereiro' || mes == 'março' || mes == 'abril' || mes == 'maio' || mes == 'junho';

console.log(`Esse mes pertence ao primeiro semestre?
${semestre}`);