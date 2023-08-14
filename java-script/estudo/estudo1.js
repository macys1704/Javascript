import prompt from 'prompt-sync';
let ler = prompt();



 console.log('Digite o 1º numero:');
 let n1 = Number(ler());

 console.log('Digite o 2º numero:');
 let n2 = Number(ler());

 console.log('Digite o 3º numero:');
 let n3 = Number(ler());

var total = (n1 + n2 + n3) / 3;
var resultado = total >= 6 ? 'Aprovado' : 'Não Aprovado';
console.log(resultado);
