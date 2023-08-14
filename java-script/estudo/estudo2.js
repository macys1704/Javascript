import prompt from 'prompt-sync';
let ler = prompt();



 console.log('Digite um numero');
 let n = Number(ler());
var total = n ;
var resultado = total % 2 == 0 ? 'Par' : 'Impar';
console.log(total + ' é ' + resultado);
