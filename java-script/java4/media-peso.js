
import prompt from "prompt-sync";
let ler = prompt();

console.log('programa da media! \n me diga qual foi sua primeira nota:');
let n1 = Number(ler());

console.log('me diga o primeiro peso:');
let p1 = Number(ler());
let np1 = n1 * p1; 


console.log('me fale sua segunda nota:');
let n2 = Number(ler());

console.log('me diga o segundo peso:');
let p2 = Number(ler());
let np2 = n2 * p2; 

console.log('me fale sua terceira nota:');
let n3 = Number(ler());

console.log('me diga o terceiro peso:');
let p3 = Number(ler());
let np3 = n3 * p3; 

console.log('me fale sua quarta nota:');
let n4 = Number(ler());

console.log('me diga o quarto peso:');
let p4 = Number(ler());
let np4 = n4 * p4; 

console.log('me fale sua quinta nota:');
let n5 = Number(ler());

console.log('me diga o quinto peso:');
let p5 = Number(ler());
let np5 = n5 * p5; 


let r = (np1 + np2 + np3 + np4 + np5) / (p1 + p2 + p3 + p4 + p5);
console.log('sua media é ' + r);