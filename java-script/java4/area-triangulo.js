import  prompt from "prompt-sync";
let ler = prompt();

console.log('programa para calcular a area de um triangulo \n Me fala o tamanho da base do triangulo em metros');
let b = Number(ler());

console.log('Me fale a altura desse triangulo em metros');
let h = Number(ler());

let r = ( b * h ) /2;
console.log('A área do triangulo é ' = r)