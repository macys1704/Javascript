import prompt from "prompt-sync";
let ler = prompt();

console.log('me fale um numero');
let n1 = Number(ler());

console.log('me fale outro numero para eu dividi-lo');
let n2 = Number(ler());

let q = n1 / n2;

let resto = n1 % n2;

console.log('o resultado da divisão é ' + q)
console.log('o resto da divisão é ' + resto)