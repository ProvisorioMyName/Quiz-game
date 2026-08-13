const bSobre = document.querySelector("#bsobre");
const sobreEstilo = document.querySelector(".estiloSobre");
const Menu = document.querySelector(".estiloMenu");

bSobre.addEventListener("click", () => {
  sobreEstilo.classList.remove("desativado");
  Menu.classList.add("desativado");
});

const voltar = document.getElementById("voltar");

voltar.addEventListener("click", () => {
  sobreEstilo.classList.add("desativado");
  Menu.classList.remove("desativado");
});

const start = document.querySelector("#bcomecar");
const quiz = document.querySelector("#Quiz");

start.addEventListener("click", () => {
  Menu.classList.add("desativado");
  quiz.classList.remove("desativado");
});

// Perguntas

const enunciados = [
  {
    pergunta: "Quantas perguntas você acha que esse quiz vai ter?",
    opcoes: ["10", "15", "20", "Não sei e só vou saber quando eu terminar"],
    resposta: "Não sei e só vou saber quando eu terminar",
  },
  {
    pergunta: "Deus de paz esmagará Satanás _____",
    opcoes: [
      "Sob os nossos pés",
      "Pisa nele, pisa nele",
      "Será o dia do senhor",
      "Santo e ungido de Deus",
    ],
    resposta: "Sob os nossos pés",
  },
  {
    pergunta: "Quém é o cara que ataca pessoas nos sonhos?",
    opcoes: ["Freddy Bear", "Frederico", "Art", "Freddy Krugger"],
    resposta: "Freddy Krugger",
  },
  {
    pergunta: "Qual é a única resposta correta desta pergunta?",
    opcoes: ["A", "B", "C", "Todas estão erradas"],
    resposta: "Todas estão erradas",
  },
  {
    pergunta: 'Qual música que não faz parte do album "Meia Noite(FHOP)"',
    opcoes: [
      "Quebra o silêncio",
      "Dono da minha afeição",
      "Meia noite",
      "Em memória de Cristo",
    ],
    resposta: "Em memória de Cristo",
  },
];

const botoes = document.querySelectorAll(".Pbutton");
const fim = document.querySelector("#fim");

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;

function mostrarTextos() {
  const pergunta = document.querySelector("#pergunta");

  pergunta.innerHTML = enunciados[perguntaAtual].pergunta;

  for (let i = 0; i < enunciados[perguntaAtual].opcoes.length; i++) {
    botoes[i].innerHTML = enunciados[perguntaAtual].opcoes[i];
  }
}

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    if (
      enunciados[perguntaAtual].opcoes[i] == enunciados[perguntaAtual].resposta
    ) {
      perguntaAtual++;
      acertos++;
    } else {
      erros++;
    }
    if(perguntaAtual >= enunciados.length){
      quiz.classList.add('desativado')
      fim.classList.remove('desativado')
    } else{
      mostrarTextos()
    }
  });
}

mostrarTextos();