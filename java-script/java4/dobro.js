import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me fala um número para eu dizer o dobro dele:')

let n1 = Number(ler());
let dobro = n1 * 2;

console.log('O dobro de ' + n1 + ' é igual a ' + dobro);