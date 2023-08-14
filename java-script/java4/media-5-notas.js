import prompt from "prompt-sync";
let ler = prompt();

console.log('programa da media! \n me diga qual foi sua primeira nota:');
let n1 = Number(ler());

console.log('me fale sua segunda nota:');
let n2 = Number(ler());

console.log('me fale sua terceira nota:');
let n3 = Number(ler());

console.log('me fale sua quarta nota:');
let n4 = Number(ler());

console.log('me fale sua quinta nota:');
let n5 = Number(ler());


let r = (n1 + n2 + n3 + n4 + n5) /5;
console.log('sua media é ' + r);
