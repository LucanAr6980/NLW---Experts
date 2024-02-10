const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Verifica a igualdade de valores e tipos",
        "Atribui um valor a uma variável",
        "Realiza uma comparação aproximada de valores"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objeto para representar documentos HTML",
        "Um método para declaração de variáveis"
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "variable",
        "var"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar apenas números",
        "Um formato de dados para intercâmbio de informações",
        "Um método para criar funções em JavaScript"
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "# Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar objetos no DOM",
        "Mover a declaração de uma variável para o topo do escopo",
        "Ignorar erros de sintaxe"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.out()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Uma variável que pode ser modificada fora do escopo",
        "Uma função que não aceita argumentos",
        "Uma função que tem acesso ao seu próprio escopo, além do escopo onde foi criada"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o operador ternário em JavaScript?",
      respostas: [
        "Um operador que realiza operações ternárias",
        "Um operador que compara três valores",
        "Um operador condicional que retorna um valor com base em uma condição"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Arredondar um número para a casa decimal mais próxima",
        "Retornar a parte decimal de um número"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }