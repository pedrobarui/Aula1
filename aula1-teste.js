var nome = "pedro"

console.log("Olá ", nome)
/*
                // TIPOS DE DADOS
                
  String
  -> 'ASFSAFAS' "ASFSAFAS"
  Number
  Boolean
  Object
  NaN
  undefined -> indefinido
  null -> Ausencia de valor


                TRATAMENTO DE DADOS
    */
   // String 
   let textoCompleto = "Olá, tudo suave?"
   //
   console.log(textoCompleto.toUpperCase())
   console.log(textoCompleto.replace("tudo", "pedrin"))
   console.log(textoCompleto.replace("o", "312"))

   //NÃO existe replacell no node, tenho que utilizar replace com regex
   let numeroEmString = String(1.56)
   console.log(numeroEmString)
   console.log(typeof numeroEmString)

   // Number
   let stringEmnumero = Number("1.564474")
   console.log(stringEmnumero)
   console.log(typeof stringEmnumero)

   console.log(Number.parseInt("1.58"))
   let testandoParseFloat = Number.parseFloat(20)
   console.log(testandoParseFloat.toFixed(4)) // Adicionar casas decimais

   //ARRAYS
   let listaDeCarros = ["Gol", "Uno", "Corola", "Voyage", "civic"]
   console.log(listaDeCarros)

   listaDeCarros.push("Lancer") // Adiciona um membro a lista
   console.log(listaDeCarros)

   listaDeCarros.pop() //Remove o ultimo membro da lista
   console.log(listaDeCarros)

   //Object
    let pessoa = {
        nome: "Pedro Henrique",
        idade: 20,
        curso: "ADS",
        matricula: "23114290073",
        instituição:"Iesb",
        endereco: {
            cep: "72225273",
            cidade: "ceilandia",
            numero: 20
        }
    }

    console.log(pessoa)

    //console.log(pessoa)
    console.log(pessoa.nome) //puxa do objeto o que vc quer(EX:   PESSOA.idade)
    pessoa.nome = "Pedro joao"
    console.log(pessoa.nome.toUpperCase)

    //IF ELSE
    let idade = 20

    if(idade >=18){
        console.log("Maior de idade")
    }  else{
        console.log("Menor de idde")
    }
    // IF ELSE "E"
    let curso = "ads"
    idade = 20

    if(curso == "ads" && idade >= 18){
        console.log("Confirmado")
    } else {
        console.log("Negado")
    }
    // IF ELSE "OU"
    if(curso == "ads" || idade >= 18){
        console.log("Confirmado")
    } else {
        console.log("Negado")
    }
    
        //REPETIÇÃO
        //for(inicialização;condição;incremento){
        //      ação    
        //}
    for(let i =0; i ==10; i++){
        console.log("contador: ",i)
        if( i ==5){
            i=11
        }
        console.log("loop")
    }

    




