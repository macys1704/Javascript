import prompt from 'prompt-sync';
let ler = prompt();

let array = [];

console.log('Programa da array, quantos nome você quer informar?.');
let qtd = Number(ler());

for(let cont=0; cont <qtd;cont++){
    console.log('Informe um nome:')
    array[cont]=ler();
}


console.log(`
Você digitou os nomes:`);
for(let item of array){
    console.log(item);
}

console.log(`
os nomes que começam com L ou H são:`);
for(let item of array){
    if(item.charAt(0)== 'l' || item.charAt(0)== 'h'  ){
        console.log(item)
}
}