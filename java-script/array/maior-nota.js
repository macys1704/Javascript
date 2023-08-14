import prompt from 'prompt-sync';
let ler = prompt();

let array = [];
let soma=0

console.log(`Programa da array
quantas notas você quer guardar?`);
let qtd = Number(ler());

for(let cont=0; cont <qtd;cont++){
    console.log('Informe uma nota:')
    array[cont]=Number(ler());
}

console.log('As notas digitadas foram:')
for(let item of array){
   console.log(item);
}

let maior=array[0];

for(let cont =1; cont < qtd;cont++){
    if (array[cont] > maior  ){
        maior=array[cont]
    }

}
  
console.log("Maior nota: " + maior)