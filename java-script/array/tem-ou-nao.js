import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

for(let cont = 0; cont < 5;cont++){
    console.log('Digite um numero');
    array[cont]=Number(ler());
}

if(array.includes(7) ){
    console.log('tem o n 7')
}
else{
    console.log('n tem o n 7')
}