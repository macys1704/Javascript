import prompt from 'prompt-sync';
let ler = prompt();

let array=[]

for(let cont=0;cont < 7;cont++){
    console.log('Digite o nome da fruta');
    array[cont]=ler();
}

console.log(array[0])
console.log(array[array.length - 1])
