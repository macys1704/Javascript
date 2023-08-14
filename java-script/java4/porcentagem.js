import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa da Porcentagem! \n Me fale a porcentagem que voce quer ver do valor:');
let p = Number(ler());

console.log('me fale o valor que voce quer tirar a porcentagem:');
let v = Number(ler());

let r = (p * v) / 100;
console.log(p + '% de ' + v + ' é ' + r)