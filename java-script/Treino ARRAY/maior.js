import prompt from 'prompt-sync';
let ler = prompt();

let array=[];

for(let cont = 0; cont < 5;cont++){
    console.log('digite um numero:');
    array[cont]=Number(ler());
}

let maior=array[0];

for(let cont=1; cont < 5; cont++){
    if( array[cont] > maior){
       maior =array[cont]
    }
}

console.log(maior)