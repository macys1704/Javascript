import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa para somar todos os números pares de um array:');
console.log('Quantos valores o seu array terá?');
let qtd = Number(ler());

let array = [];
for (let cont = 0; cont < qtd; cont++) {
    console.log('Digite o ' + (cont + 1) + ' valor:');
    array[cont] = Number(ler());
}

let soma = 0;
for(let item of array){
    if(item % 2 == 0){
        soma += item
    }
}

console.log(soma);