import prompt from 'prompt-sync';
let ler = prompt();

let array=[];

for(let cont = 0 ; cont < 5; cont++){
    console.log('Digite um número');
    array[cont]=ler();
}


console.log('Os números na ordem crescente são: ' + array.sort())