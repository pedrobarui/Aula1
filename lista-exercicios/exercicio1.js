/*Faça um Programa que receba quatro notas de um aluno,
 calcule e imprima a média aritmética das notas e a mensagem de aprovado para
  média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
  */

  const prompt = require('prompt-sync')();

  const nomeAluno = prompt("Digite o nome do aluno: ")
  const notaA1 = Number(prompt("digite a nota 1: "))
  const notaA2 = Number(prompt("digite a nota 2: "))
  const notaA3 = Number(prompt("digite a nota 3: "))
  const notaA4 = Number(prompt("digite a nota 4: "))

  const media = (notaA1 + notaA2 + notaA3 + notaA4) / 4
    
    console.log("Média alcançada: " + media)

    if(media >=7){
        console.log("O aluno " + nomeAluno + "Foi aprovado!") 
    } else {
        console.log("O aluno " + nomeAluno + "Foi reprovado!") 
    }