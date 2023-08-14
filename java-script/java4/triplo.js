import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me fala um número para eu dizer o triplo dele:')

let n1 = Number(ler());
let t = n1 * 3;

console.log('O triplo de ' + n1 + ' é igual a ' + t);