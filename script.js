const perguntas = [
    {
        pergunta: "A inteligência artificial pode substituir totalmente os humanos?",
        alternativas: [
            { texto: "Sim, em todas as áreas", correta: false },
            { texto: "Não, pois existem limites humanos e éticos", correta: true },
            { texto: "Depende apenas da tecnologia", correta: false }
        ]
    },
    {
        pergunta: "Qual é um risco da IA?",
        alternativas: [
            { texto: "Automatizar tarefas simples", correta: false },
            { texto: "Gerar desemprego em alguns setores", correta: true },
            { texto: "Ajudar nos estudos", correta: false }
        ]
    },
    {
        pergunta: "Um benefício da IA é:",
        alternativas: [
            { texto: "Agilizar diagnósticos médicos", correta: true },
            { texto: "Eliminar a criatividade humana", correta: false },
            { texto: "Reduzir o pensamento crítico", correta: false }
        ]
    }
];

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

let indiceAtual = 0;
let acertos = 0;

function mostraPergunta() {
    if (indiceAtual >= perguntas.length) {
        mostraResultado();
        return;
    }

    caixaPerguntas.textContent = perguntas[indiceAtual].pergunta;
    caixaAlternativas.innerHTML = "";

    perguntas[indiceAtual].alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.onclick = () => verificaResposta(alternativa.correta);
        caixaAlternativas.appendChild(botao);
    });
}

function verificaResposta(correta) {
    if (correta) acertos++;
    indiceAtual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Missão concluída!";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

mostraPergunta();
