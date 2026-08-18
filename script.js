const bSobre = document.querySelector("#bsobre");
const sobreEstilo = document.querySelector(".estiloSobre");
const menu = document.querySelector(".estiloMenu");

//Botão de sobre
bSobre.addEventListener("click", () => {
  sobreEstilo.classList.remove("desativado");
  menu.classList.add("desativado");
});

//Botão da seta de voltar
const voltar = document.getElementById("voltar");
voltar.addEventListener("click", () => {
  sobreEstilo.classList.add("desativado");
  menu.classList.remove("desativado");
  footer.classList.remove("desativado");
});

//Botão de começar o quiz
const start = document.querySelector("#bcomecar");
const quiz = document.querySelector("#Quiz");
const footer = document.querySelector("#footer");
start.addEventListener("click", () => {
  menu.classList.add("desativado");
  quiz.classList.remove("desativado");
  footer.classList.add("desativado");
  acertos = 0;
  quantidadePergunta = 0;
  questaoUsada = [];
  respostas = [];
  numQuestao.innerHTML = "1";

  mostrarTextos();
});

//
// PERGUNTAS
//

const enunciados = [
  {
    pergunta: "Quem construiu a arca de 'Moisés'?",
    opcoes: ["Davi", "Moisés", "Noé", "Salomão"],
    respostaCerta: "Noé",
  },
  {
    pergunta: "O que indica BPM em uma música?",
    opcoes: [
      "Batimentos do pulmão por minuto",
      "Batimentos por minuto",
      "O volume",
      "A quantidade de instrumentos",
    ],
    respostaCerta: "Batimentos por minuto",
  },
  {
    pergunta: "Quem traiu Jesus?",
    opcoes: ["Judas Iscariotes", "Judas Tadeu", "Judas", "Quem é Judas?"],
    respostaCerta: "Judas Iscariotes",
  },
  {
    pergunta: "Qual livro conta a história de uma rainha que salvou seu povo?",
    opcoes: ["Rute", "Ester", "Juízes", "Neemias"],
    respostaCerta: "Ester",
  },
  {
    pergunta: "Qual dessas expressões ficou famosa em O Rei Leão?",
    opcoes: [
      "Hakuna Matata",
      "Hakuna Marata",
      "Hakuna Makata",
      "Hakuna Manata",
    ],
    respostaCerta: "Hakuna Matata",
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
    respostaCerta: "São irmãos",
  },
  {
    pergunta: "Qual é o nome do assassino da franquia Sexta-Feira 13?",
    opcoes: [
      "Michael Myers",
      "Jason Voorhees",
      "Leatherface",
      "Freddy Krueger",
    ],
    respostaCerta: "Jason Voorhees",
  },
  {
    pergunta: "Qual destas é uma nota musical?",
    opcoes: ["Violeta", "Sol", "Lua", "Azul"],
    respostaCerta: "Sol",
  },
  {
    pergunta: "Qual apóstolo era conhecido anteriormente como Saulo?",
    opcoes: ["Pedro", "Paulo", "Barnabé", "Tomé"],
    respostaCerta: "Paulo",
  },
  {
    pergunta: "Qual a função mais comum do baixo em uma banda?",
    opcoes: [
      "Fazer solos",
      "Sustentar a base harmônica e rítmica",
      "Tocar notas agudas",
      "Brigar com o guitarrista",
    ],
    respostaCerta: "Sustentar a base harmônica e rítmica",
  },
  {
    pergunta: "Em qual filme teve o primeiro aparecimento da boneca Annabelle?",
    opcoes: ["Annabelle", "O Exorcista", "Invocação do Mal", "Pânico"],
    respostaCerta: "Invocação do Mal",
  },
  {
    pergunta:
      "Em qual cidade se passa principalmente Miraculous: As Aventuras de Ladybug?",
    opcoes: ["Londres", "Paris", "Tóquio", "Nova York"],
    respostaCerta: "Paris",
  },
  {
    pergunta: "Quais são os nomes das três Meninas Superpoderosas?",
    opcoes: [
      "Florzinha, Lindinha e Docinho",
      "Florzinha, Estrelinha e Docinho",
      "Lindinha, Docinho e Margarida",
      "Ervinha da Ninha, Feinha e Azedinha",
    ],
    respostaCerta: "Florzinha, Lindinha e Docinho",
  },
  {
    pergunta: "Quantos livros tem a Bíblia protestante?",
    opcoes: ["66", "67", "65", "68"],
    respostaCerta: "66",
  },
  {
    pergunta:
      "Qual é o nome do animatrônico que possui aparência de uma raposa em FNAF?",
    opcoes: ["Bonnie", "Foxy", "Chica", "Freddy"],
    respostaCerta: "Foxy",
  },
];

//
// PARTE DO QUIZ
//

const botoes = document.querySelectorAll(".Pbutton");
const fim = document.querySelector("#fim");

let perguntaAtual;
let acertos = 0;
let questaoUsada = [];
let opcoesAtuais = [];

//Função para mostrar o texto e as opções
function mostrarTextos() {
  const pergunta = document.querySelector("#pergunta");

  //Gera o índice da pergunta aleatória
  let perguntaAleatoria = Math.floor(Math.random() * enunciados.length);

  //Verifica se o índice gerado já está na lista de questões usadas
  //Se estiver, gera outro índice
  while (questaoUsada.includes(perguntaAleatoria)) {
    perguntaAleatoria = Math.floor(Math.random() * enunciados.length);
  }

  //Adiciona o índice da pergunta na lista de questões usadas
  questaoUsada.push(perguntaAleatoria);

  //Pergunta atual recebe o valor do índice
  perguntaAtual = perguntaAleatoria;

  //Coloca a pergunta na tela
  pergunta.innerHTML = enunciados[perguntaAleatoria].pergunta;

  //Cria a lista para as respostas usadas e limpa a lista de opções
  let respostaUsada = [];
  opcoesAtuais = [];

  //Repete a ação de sortear um índice para cada botão
  for (let i = 0; i < enunciados[perguntaAtual].opcoes.length; i++) {
    let questaoAleatoria = Math.floor(
      Math.random() * enunciados[perguntaAtual].opcoes.length,
    );

    //Verifica se o índice gerado já está na lista de respostas usadas
    //Se estiver, gera outro índice
    while (respostaUsada.includes(questaoAleatoria)) {
      questaoAleatoria = Math.floor(
        Math.random() * enunciados[perguntaAtual].opcoes.length,
      );
    }

    //Adiciona o índice na lista de respostas usadas
    respostaUsada.push(questaoAleatoria);

    //Adiciona na lista de opções a opção sorteada
    opcoesAtuais.push(enunciados[perguntaAtual].opcoes[questaoAleatoria]);

    //Exibe os textos nos botões
    botoes[i].innerHTML = opcoesAtuais[i];
  }
}

//
// PONTUAÇÃO E CONTADOR
//

const pontosFinal = document.querySelector("#pontuacao");
const textoFinal = document.querySelector("#textoOfensivo");

const numQuestao = document.querySelector("#numeroQuestao");
let contador = 1;

const total = document.querySelector("#total");

let respostas = [];

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    if (opcoesAtuais[i] === enunciados[perguntaAtual].respostaCerta) {
      acertos++;
    }

    quantidadePergunta++;

    respostas.push({
      numero: contador,
      questao: perguntaAtual,
      escolha: opcoesAtuais[i],
    });

    if (quantidadePergunta >= enunciados.length) {
      quiz.classList.add("desativado");
      fim.classList.remove("desativado");
    } else {
      mostrarTextos();
    }

    contador++;
    numQuestao.innerHTML = `${contador}`;

    pontosFinal.innerHTML = `${acertos}`;
    total.innerHTML = `${enunciados.length}`;

    if (acertos < 5) {
      textoFinal.innerHTML =
        "Vamos deixar de ser sem cultura e se informar um pouco mais!";
    } else if (acertos <= 9) {
      textoFinal.innerHTML = "Tá bom, até eu esperava muito menos de você.";
    } else if (acertos <= 14) {
      textoFinal.innerHTML =
        "Eu não acredito que você sabe tudo isso de questão!";
    } else {
      textoFinal.innerHTML = "Meus parabéns, até merece um prêmio.";
    }
  });
}

//
// TELA FIM
//

const Bvoltar = document.querySelector("#Bvoltar");

Bvoltar.addEventListener("click", () => {
  fim.classList.add("desativado");
  menu.classList.remove("desativado");
  footer.classList.remove("desativado");

  contador = 1;
});

//
// TELA DE RESPOSTAS
//

const Bresposta = document.getElementById("Bresp");
const BVoltarResp = document.getElementById("BRespvoltar");
const TelaResposta = document.querySelector("#resposta");

BVoltarResp.addEventListener("click", () => {
  TelaResposta.classList.add("desativado");
  menu.classList.remove("desativado");
  footer.classList.remove("desativado");

  contador = 1;
});

Bresposta.addEventListener("click", () => {
  fim.classList.add("desativado");
  TelaResposta.classList.remove("desativado");

  const containerQuestao = document.querySelector(".cont-resp");
  const boxquestao = document.querySelector(".quadro-resp");
  const copias = containerQuestao.querySelectorAll(".copias");

  for (let i = 0; i < copias.length; i++) {
    copias[i].remove();
  }

  for (let i = 0; i < respostas.length; i++) {
    const copiaBoxQuestao = boxquestao.cloneNode(true);

    copiaBoxQuestao.classList.add("copias");
    copiaBoxQuestao.classList.remove("desativado");

    const ResNumero = copiaBoxQuestao.querySelector(".resp-numero");
    const ResQuestao = copiaBoxQuestao.querySelector(".resp-questao");
    const respCerta = copiaBoxQuestao.querySelector(".resp-certa");
    const respEscolhida = copiaBoxQuestao.querySelector(".resp-escolhida");

    ResNumero.innerHTML = `${respostas[i].numero}`;
    ResQuestao.innerHTML = `${enunciados[respostas[i].questao].pergunta}`;

    respEscolhida.innerHTML = respostas[i].escolha

    respCerta.innerHTML = `${enunciados[respostas[i].questao].respostaCerta}`;
    respCerta.style.color = "green";

    containerQuestao.appendChild(copiaBoxQuestao);
  }

  boxquestao.classList.add("desativado");
});
