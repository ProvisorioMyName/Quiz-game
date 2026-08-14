const bSobre = document.querySelector("#bsobre");
const sobreEstilo = document.querySelector(".estiloSobre");
const menu = document.querySelector(".estiloMenu");

bSobre.addEventListener("click", () => {
  sobreEstilo.classList.remove("desativado");
  menu.classList.add("desativado");
});

const voltar = document.getElementById("voltar");

voltar.addEventListener("click", () => {
  sobreEstilo.classList.add("desativado");
  menu.classList.remove("desativado");
});

const start = document.querySelector("#bcomecar");
const quiz = document.querySelector("#Quiz");
const footer = document.querySelector('#footer')

start.addEventListener("click", () => {
  menu.classList.add("desativado");
  quiz.classList.remove("desativado");
  footer.classList.add('desativado')
});

// Perguntas

const enunciados = [
  {
    pergunta: "Quem construiu a arca de 'Moisés'?",
    opcoes: ["Davi", "Moisés", "Noé", "Salomão"],
    resposta: "Noé",
  },
  {
    pergunta: "O que indica BPM em uma música",
    opcoes: [
      "Batimentos do pulmão por minuto",
      "Batimentos por minutos",
      "O volume",
      "A quantidade de instrumentos",
    ],
    resposta: "Batimentos por minutos",
  },
  {
    pergunta: "Quem traiu Jesus?",
    opcoes: ["Judas Iscariotes", "Judas Tadeu", "Judas", "Quem é Judas?"],
    resposta: "Judas Iscaríotes",
  },
  {
    pergunta: "Qual livro conta a história de uma rainha que salvou seu povo?",
    opcoes: ["Rute", "Ester", "Juízes", "Neemias"],
    resposta: "Ester",
  },
  {
    pergunta: 'Qual música não faz parte do álbum "Meia Noite" (FHOP)?',
    opcoes: [
      "Quebra o silêncio",
      "Dono da minha afeição",
      "Meia noite",
      "Em memória de Cristo",
    ],
    resposta: "Em memória de Cristo",
  },
  {
    pergunta:
      "Em Halloween, qual é a relação entre Michael Myers e Laurie Strode?",
    opcoes: [
      "São irmãos",
      "São pai e filha",
      "São primos",
      "Não possuem relação familiar",
    ],
    resposta: "São irmãos",
  },
  {
    pergunta: "Qual é o nome do assassino da franquia Sexta-Feira 13?",
    opcoes: [
      "Michael Myers",
      "Jason Voorhees",
      "Leatherface",
      "Freddy Krueger",
    ],
    resposta: "Jason Voorhees",
  },
  {
    pergunta: "Qual destas é uma nota musical?",
    opcoes: ["Violeta", "Sol", "Lua", "Azul"],
    resposta: "Sol",
  },
  {
    pergunta: "Qual apóstolo era conhecido anteriormente como Saulo?",
    opcoes: ["Pedro", "Paulo", "Barnabé", "Tomé"],
    resposta: "Paulo",
  },
  {
    pergunta: "Qual a função mais comum do baixo em uma banda?",
    opcoes: [
      "Fazer solos",
      "Sustentar a base harmônica e rítmica",
      "Tocar notas agudas",
      "Brigar com o guitarrista",
    ],
    resposta: "Sustentar a base harmônica e rítmica",
  },
  {
    pergunta: "Em qual filme aparece a boneca Annabelle?",
    opcoes: ["Annabelle", "O exorcista", "Invocação do Mal", "Pânico"],
    resposta: "Invocação do Mal",
  },
  {
    pergunta:
      "Em qual cidade se passa principalmente Miraculous: As Aventuras de Ladybug?",
    opcoes: ["Londres", "Paris", "Tóquio", "Nova York"],
    resposta: "Paris",
  },
  {
    pergunta: "Quais são os nomes das três Meninas Superpoderosas?",
    opcoes: [
      "Florzinha, Lindinha e Docinho",
      "Florzinha, Estrelinha e Docinho",
      "Lindinha, Docinho e Margarida",
      "Ervinha da Ninha, Feinha e Azedinha",
    ],
    resposta: "Florzinha, Lindinha e Docinho",
  },
  {
    pergunta: "Complete: 'Salvar pessoas, caçar coisas. ________ família'",
    opcoes: ["O negócio da", "A tradição da", "A missão da", "O legado da"],
    resposta: "O negócio da",
  },
  {
    pergunta:
      "Qual é o nome do animatrônico que possui aparência de uma raposa em FNAF?",
    opcoes: ["Bonnie", "Foxy", "Chica", "Freddy"],
    resposta: "Foxy",
  },
];

const botoes = document.querySelectorAll(".Pbutton");
const fim = document.querySelector("#fim");

let perguntaAtual = Math.floor(Math.random() * enunciados.length);
let acertos = 0;

function mostrarTextos() {
  const pergunta = document.querySelector("#pergunta");

  pergunta.innerHTML = enunciados[perguntaAtual].pergunta;

  for (let i = 0; i < enunciados[perguntaAtual].opcoes.length; i++) {
    botoes[i].innerHTML = enunciados[perguntaAtual].opcoes[i];
  }
}

const pontosFinal = document.querySelector("#pontuacao");
const textoFinal = document.querySelector("#textoOfensivo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    if (
      enunciados[perguntaAtual].opcoes[i] == enunciados[perguntaAtual].resposta
    ) {
      perguntaAtual++;
      acertos++;
    } else {
      perguntaAtual++;
    }
    if (perguntaAtual >= enunciados.length) {
      quiz.classList.add("desativado");
      fim.classList.remove("desativado");
    } else {
      mostrarTextos();
    }
    pontosFinal.innerHTML = `${acertos} / ${enunciados.length}`;

    if (acertos < 5) {
      textoFinal.innerHTML =
        "Vamos deixar de ser burro e se informar um pouco mais!";
    } else if (acertos <= 7) {
      textoFinal.innerHTML = "Tá bom dms eu esperava muito menos de você";
    } else if (acertos <= 9) {
      textoFinal.innerHTML =
        "Eu não acredito que você sabe tudo isso de questão!";
    } else {
      textoFinal.innerHTML = "Meus parabens, até merece um prêmio";
    }
  });
}
const Bvoltar = document.querySelector('#Bvoltar')

Bvoltar.addEventListener('click', () =>{
  fim.classList.add('desativado')
  menu.classList.remove('desativado')
  
  acertos = 0
  perguntaAtual = 0
})

mostrarTextos();
