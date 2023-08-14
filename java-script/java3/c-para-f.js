import prompt from 'prompt-sync';
let ler = prompt();

console.log('Qual a primeira temperatura ?');
let t1 = Number(ler());
let tf1 = (9/5 * t1 + 32)

console.log('Qual a segunda temperatura ?');
let t2 = Number(ler());
let tf2 = (9/5 * t2 + 32)

console.log('Qual a terceira temperatura ?');
let t3 = Number(ler());
let tf3 = (9/5 * t3 + 32)

console.log('Qual a quarta temperatura ?');
let t4 = Number(ler());
let tf4 = (9/5 * t4 + 32)

console.log('Qual a quinta temperatura ?');
let t5 = Number(ler());
let tf5 = (9/5 * t5 + 32)

console.log('Qual a sexta temperatura ?');
let t6 = Number(ler());
let tf6 = (9/5 * t6 + 32)

console.log('Qual a sétima temperatura ?');
let t7 = Number(ler());
let tf7 = (9/5 * t7 + 32)

console.log('Qual a oitava temperatura ?');
let t8 = Number(ler());
let tf8 = (9/5 * t8 + 32)

console.log('Qual a nona temperatura ?');
let t9 = Number(ler());
let tf9 = (9/5 * t9 + 32)

console.log('Qual a décima temperatura ?');
let t10 = Number(ler());
let tf10 = (9/5 * t10 + 32)



console.log(`CELSIUS para FARENHEIT
Temperatura1: ${tf1}
Temperatura2: ${tf2}
Temperatura3: ${tf3}
Temperatura4: ${tf4}
Temperatura5: ${tf5}
Temperatura6: ${tf6}
Temperatura7: ${tf7}
Temperatura8: ${tf8}
Temperatura9: ${tf9}
Temperatura10: ${tf10}
`)