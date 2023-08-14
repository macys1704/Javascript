import prompt from 'prompt-sync';
let ler = prompt();

let array=[]

for(let cont=0;cont < 10;cont++){
    console.log('Digite um número:');
    array[cont]=Number(ler());
}

let soma = 0;

 for(let item of array){
    soma += item
 }

 console.log(soma)