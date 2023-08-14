import prompt from 'prompt-sync';
let ler = prompt();

console.log('Qual o número total de eleitores desse município?')
let eleitores = Number(ler());

console.log('Qual foi o número de votos brancos?')
let vb = Number(ler());
let pvb = (vb / eleitores) * 100;

console.log('Qual foi o número de votos nulos?')
let vn = Number(ler());
let pvn = (vn / eleitores) * 100;

console.log('Qual foi o número de votos válidos?')
let vv = Number(ler());
let pvv = (vv / eleitores) * 100;

console.log(`Brancos: ${pvb}%
Nulos: ${pvn}%
Válidos: ${pvv}%`)