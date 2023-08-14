import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa para Verificar se um array contém um determinado valor no array:');
console.log('Quantos valores o array terá?');
let qtd = Number(ler());

let array = [];
for (let cont = 0; cont < qtd; cont++) {
    console.log('Digite o ' + (cont + 1) + ' valor:');
    array[cont] = Number(ler());
}

console.log('Qual valor voce quer saber se tem no array?');
let n = Number(ler());

if(array.includes(n)){
    console.log('Esse numero está presente nessa array.');
}
else{
    console.log('Não tem esse número nessa array.');
}