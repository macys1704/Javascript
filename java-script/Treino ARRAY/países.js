import  prompt  from "prompt-sync";
let ler = prompt();

let array=[];

for(let cont = 0; cont < 5;cont++){
    console.log('Digite o nome de um país');
    array[cont]=ler();
}

console.log(array.sort())