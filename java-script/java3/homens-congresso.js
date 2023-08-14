import prompt from 'prompt-sync';
let ler = prompt();

console.log('calcule quantos homens tinham no congresso');

let homens =Number(ler());

let medicos = 0.52*homens


console.log('Desses médicos, '+ medicos +' são homens');