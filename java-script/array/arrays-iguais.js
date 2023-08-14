import prompt from 'prompt-sync';
let ler = prompt();

let array = [];
let array2=[]

for(let cont = 0; cont < 5;cont++){
    console.log('Digite um numero');
    array[cont]=Number(ler());
}
console.log('-----------------')
for(let cont = 0; cont < 5;cont++){
    console.log('Digite um numero');
    array2[cont]=Number(ler());
}


if(JSON.stringify(array) === JSON.stringify(array2) ){
    console.log(' sao iguais')
}
else{
    console.log('n sao iguais')
}