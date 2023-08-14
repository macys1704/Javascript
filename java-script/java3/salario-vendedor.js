import prompt from 'prompt-sync';
let ler = prompt();

console.log('Qual o valor do salário fixo?');
let fixo = Number(ler());

console.log('quantos carros foram vendidos por esse funcionário?')
let cv = Number(ler());

console.log('qual o valor dos carros vendidos?');
let valorc = Number(ler());


let comissao = (valorc*cv) *0.05;


let vt = fixo  + comissao;

console.log(vt);