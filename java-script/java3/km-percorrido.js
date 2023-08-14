import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem-vindo ao programa para descobrir quantos km você percorreu \n Qual foi o valor da sua corrida? ')

let valor = Number(ler());

let km = (valor - 4.20) / 0.65;

console.log('Você percorreu em sua viagem ' + km +'km')