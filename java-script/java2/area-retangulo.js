import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Programa para calcular a área de dois retângulos e comparar se eles possuem a mesma área \n Qual o tamanho da base do primeiro retângulo em cm?`);
let br1 = Number(ler());

console.log(`Qual o tamanho da altura do primeiro retângulo em cm?`);
let ar1 = Number(ler());

let arear1 = br1 * ar1;

console.log(`Qual o tamanho da base do segundo retângulo em cm?`);
let br2 = Number(ler());

console.log(`Qual o tamanho da base do segundo retângulo em cm?`);
let ar2 = Number(ler());

let arear2 = br2 * ar2;

let comp = arear1 == arear2;

console.log(`Esses retângulos possuem a mesma área?
${comp}`);