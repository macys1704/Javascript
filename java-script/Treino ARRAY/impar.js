import prompt from 'prompt-sync';
let ler = prompt();

let array=[];

for(let cont = 0; cont < 5; cont++){
    console.log('Digite um número:');
    array[cont]=Number(ler());
}


for(let item of array){
    if(item % 2 ==0){
        item=0
        console.log(item)
    }
    else{
        console.log(item + ' é impar')
    }
}