import prompt from 'prompt-sync'
let ler = prompt();

console.log(' Programa da média');

console.log('\nInforme a primeira nota:');
let nota1 = Number(ler());

console.log('\nInforma a segunda nota:');
let nota2 = Number(ler());

console.log('\nInforme a terceira nota:');
let nota3 = Number(ler());

let media = (nota1 + nota2 + nota3) /3;

console.log(` A média de ${nota1}, ${nota2} e ${nota3} é ${media}`  );


