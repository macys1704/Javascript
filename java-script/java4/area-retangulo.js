import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa para calcular a area de um de retangulo \n Me fala o tamanho da base em metros:');
let b = Number(ler());

console.log('Me fala a altura desse retangulo em metros:');
let h = Number(ler());

let r = b * h;

console.log('A area desse retangulo é ' + r);