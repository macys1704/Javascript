import prompt from 'prompt-sync'
let ler = prompt();



console.log('Ola, qual o seu nome?');
let nomePessoa01 = ler()

console.log('Qual o nome da sua mãe?');
let nomePessoa02 = ler();


console.log('\nSeja bem vindo ' + nomePessoa01 + '!!' );
console.log('Sua mãe ' + nomePessoa02 + ' deve estar muito orgulhosa de você!' );