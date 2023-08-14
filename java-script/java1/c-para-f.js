import prompt from 'prompt-sync';
let ler = prompt();

console.log('Qual a temperatura nesse momento?');
let t = Number(ler());

let tf = (9/5 * t + 32)

console.log(`${t}C representa ${tf}F`)