import prompt from 'prompt-sync';
let ler = prompt();

console.log('olá seja bem-vindo ao programa dos Médicos!');

let medi= Number(ler());

let mulher = 0.48*medi

let pediatras =0.09*mulher

console.log(' dentre as medicas, '+ pediatras + ' são pediatras');