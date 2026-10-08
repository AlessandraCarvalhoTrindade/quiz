const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
    correta: 2
  },
  {
    pergunta: "Quantos planetas existem no Sistema Solar?",
    opcoes: ["7", "8", "9", "10"],
    correta: 1
  },
  {
    pergunta: "Qual linguagem é usada para estilizar páginas web?",
    opcoes: ["HTML", "Python", "CSS", "Java"],
    correta: 2
  },
  {
    pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
    opcoes: ["1965", "1969", "1972", "1959"],
    correta: 1
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correta: 3
  }
];

let indiceAtual = 0;
let pontos = 0;

const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaFinal = document.getElementById("tela-final");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const contadorEl = document.getElementById("contador");
const pontuacaoEl = document.getElementById("pontuacao");
const resultadoFinal = document.getElementById("resultado-final");

function iniciarQuiz() {
  indiceAtual = 0;
  pontos = 0;
  telaInicial.classList.add("escondido");
  telaFinal.classList.add("escondido");
  telaQuiz.classList.remove("escondido");
  mostrarPergunta();
}

function mostrarPergunta() {
  const atual = perguntas[indiceAtual];
  perguntaEl.innerText = atual.pergunta;
  contadorEl.innerText = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
  pontuacaoEl.innerText = `Pontos: ${pontos}`;

  opcoesEl.innerHTML = "";
  atual.opcoes.forEach((opcao, index) => {
    const div = document.createElement("div");
    div.className = "opcao";
    div.innerText = opcao;
    div.onclick = () => selecionarOpcao(index);
    opcoesEl.appendChild(div);
  });
}

function selecionarOpcao(index) {
  const atual = perguntas[indiceAtual];
  const opcoes = document.querySelectorAll(".opcao");

  opcoes.forEach(op => op.style.pointerEvents = "none");

  if (index === atual.correta) {
    opcoes[index].classList.add("correta");
    pontos++;
  } else {
    opcoes[index].classList.add("errada");
    opcoes[atual.correta].classList.add("correta");
  }

  pontuacaoEl.innerText = `Pontos: ${pontos}`;

  setTimeout(() => {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      finalizarQuiz();
    }
  }, 1200);
}

function finalizarQuiz() {
  telaQuiz.classList.add("escondido");
  telaFinal.classList.remove("escondido");
  resultadoFinal.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;
}

function reiniciar() {
  iniciarQuiz();
}
