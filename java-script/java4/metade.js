
import prompt  from "prompt-sync";
let ler = prompt();

console.log('Me fale um número para eu te dar a metade dele:');
let n1 = Number(ler());

let r = n1 /2;
console.log('A metade de ' + n1 + ' é igual a ' + r);