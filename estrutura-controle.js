/*escreval("digite o nome do aluno: ")
   leia(nome)
   escreval("digite a nota01 do aluno: ")
   leia(nota01)
   escreval("digite a nota02 do aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2

   se media >= 5 entao
      escreval("aprovado", nome)
   senao
        escreval("reprovado", nome)
   fimse */

   var nome, nota01, nota02,
   nome=prompt("digite o nome do aluno: ")
   nota01=prompt("digite a nota01 do aluno: ")
   nota02=prompt("digite a nota02 do aluno: ")

   media=(nota01 +nota02) / 2

   if(media >=5)
    alert("Aprovado" + nome)
    else
    alert("reprovado" +nome)
