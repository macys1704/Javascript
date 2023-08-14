import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para calcular as notas finais e ver se o aluno foi aprovado ou não \n Qual foi a primeira nota?`);
let nota1 = Number(ler());

console.log(` Qual foi a segunda nota?`);
let nota2 = Number(ler());

console.log(`Qual foi a terceira nota?`);
let nota3 = Number(ler());

console.log(`Qual foi a quarta nota?`);
let nota4 = Number(ler());

console.log(`Qual foi a quinta nota?`);
let nota5 = Number(ler());

let media = (nota1 + nota2 + nota3 + nota4 + nota5) /5;

let aprovado = media >=6 ;

console.log(`O/A aluno(a) foi aprovado(a)?
${aprovado}`)