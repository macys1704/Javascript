import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa para Contar quantas vezes um determinado valor aparece em um array:');
console.log('Quantos números seu array terá?');
let qtd = Number(ler());

let array = [];
for (let cont = 0; cont < qtd; cont++) {
    console.log('Digite o ' + (cont + 1) + ' valor:');
     array[cont] = Number(ler());  
}

console.log('Qual valor voce quer saber quantas vezes ele aparece no array?');
let n = Number(ler());

let contt = 0;
for (let cont = 0; cont < qtd; cont++) {
    if(array[cont] == n){
        contt = contt + 1;
    }
}

console.log('Esse número aparece ' + contt + ' vezes');