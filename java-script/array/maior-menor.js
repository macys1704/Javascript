import prompt from 'prompt-sync';
let ler = prompt();

let a = [];

console.log("Informe a quantidade de notas:");
let qtd = Number(ler());

for(let cont = 0; cont < qtd; cont++){
    console.log("Informe a nota:");
    a[cont] = Number(ler());
}

let soma = 0;

for(let cont=0; cont < qtd; cont++){
    soma = soma + a[cont];
}

let media = soma / qtd;

console.log(media);

let maior=a[0];
let menor=a[0];


for(let cont =1; cont < a.length;cont++){
    if (a[cont] > maior  ){
        maior=a[cont]
    }
    if (a[cont] < menor  ){
        menor=a[cont]
    }
}
  

  

  console.log("Maior valor: " + maior);
  console.log("Menor valor: " + menor);