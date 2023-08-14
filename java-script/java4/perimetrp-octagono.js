import prompt  from "prompt-sync";
let ler = prompt();

console.log('me fale o tamanho de um dos lados do octagono para eu calcular o perimetro');
let l = Number(ler());
 
let r = l*8;



console.log('o perimetro desse octagono é ' + r);