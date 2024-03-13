/*console.log("teste")
const readLine = require('node:readLine').createInterface({
    input: Process.stdin,
    output: process.stoudout,
});

readLine.question('Qual o seu nome?', name => {
    console.log("Olá " + name + "!Tudo bem com você? ")
    readLine.close();
})
*/
const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome?')
console.log(nome)


rafael