import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para verificar se vamos ao parque \n Qual a temperatura`);

let temp = Number(ler());

let temp2 = temp >= 23   &&  temp <= 30;

console.log(` Vamos ao parque hoje?
${temp2}`)