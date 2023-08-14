import prompt from 'prompt-sync';
let ler = prompt();


console.log('Olá, informe um número para eu calcular o dobro!');
let numero = Number(ler());

let dobro = numero * 2;


console.log('o dobro de ' + numero + ' é ' + dobro);

console.log('me fale dois números para eu somar, qual o primeiro? ');

let conta = Number(ler());


console.log('E qual o segundo?');

let conta2 = Number(ler());

let result = conta +  conta2;

console.log(result);
