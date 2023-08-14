import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para verificar se a pessoa é de libra ou não \n Qual mes você nasceu?`);
let mes = ler();


console.log('Qual o dia que você nasceu?')
let dia = Number(ler());

let signo = mes == 'setembro' && dia >=23 || mes == 'outubro' && dia <=22;

console.log(`Essa pessoa é libriana?
${signo}`)