// Dados das Regras Interativas
const textosRegras = {
    jogadores: "Cada equipe conta com 6 jogadores em quadra e até 6 substitutos. Cada jogador possui uma posição específica que determina suas funções de ataque ou defesa.",
    toques: "A equipe pode dar no máximo 3 toques na bola antes de mandá-la para a quadra adversária. O mesmo jogador não pode dar dois toques seguidos (exceto se o primeiro for um toque de bloqueio).",
    pontos: "Os jogos são disputados em sets de 25 pontos (com exceção do 5º set, que vai até 15). Para vencer o set, a equipe precisa abrir 2 pontos de vantagem (ex: 26 a 24). Ganha a partida quem vencer 3 sets primeiro.",
    rotacao: "Sempre que uma equipe recupera o direito de sacar (ganha o ponto no saque do adversário), os jogadores devem rodar uma posição no sentido horário. Isso garante que todos passem pelo saque e pela rede."
};

function mostrarRegra(tipo) {
    const painel = document.getElementById('painel-regra');
    painel.innerHTML = textosRegras[tipo];
}

// Mudar Cor da Quadra
function mudarCorQuadra(novaCor) {
    document.getElementById('quadra').style.backgroundColor = novaCor;
}

// Lógica do Mascote que Anda
let mascoteX = 0;
let direcaoMascote = 1; // 1 = Direita, -1 = Esquerda
const velocidadeMascote = 1.5;

function animarMascote() {
    const container = document.getElementById('mascote-andante');
    const mascoteEmoji = document.getElementById('mascote');
    const larguraTela = window.innerWidth;

    mascoteX += velocidadeMascote * direcaoMascote;

    // Inverte a direção ao bater nas bordas da janela
    if (mascoteX >= larguraTela - 70) {
        direcaoMascote = -1;
        mascoteEmoji.style.transform = "scaleX(-1)"; // Faz o emoji olhar para a esquerda
    } else if (mascoteX <= 0) {
        direcaoMascote = 1;
        mascoteEmoji.style.transform = "scaleX(1)"; // Faz o emoji olhar para a direita
    }

    container.style.left = mascoteX + 'px';
    requestAnimationFrame(animarMascote);
}

// Inicializa o movimento automático do mascote
animarMascote();

// Frases do Mascote
const frases = [
    "Vôlei é vida! Vamos treinar?",
    "O saque da Rafaela é imbatível!",
    "Você sabia que o vôlei foi criado em 1895?",
    "Adorei essa cor de quadra!",
    "Bloqueio perfeito! Boa jogada!"
];

function falarMascote() {
    const balao = document.getElementById('balao-fala');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    balao.innerText = fraseAleatoria;
    balao.classList.remove('escondido');
    
    setTimeout(() => {
        balao.classList.add('escondido');
    }, 3000);
}

// Lógica do Jogo de Vôlei
let jogadorPos = 160;
let bolaX = 190;
let bolaY = 0;
let velocidadeX = 2;
let velocidadeY = 3;
let pontos = 0;
let jogoAtivo = false;
let intervaloJogo;

document.addEventListener('keydown', (e) => {
    const jogador = document.getElementById('jogador');
    if (e.key === 'ArrowLeft' && jogadorPos > 0) {
        jogadorPos -= 20;
    } else if (e.key === 'ArrowRight' && jogadorPos < 320) {
        jogadorPos += 20;
    }
    jogador.style.left = jogadorPos + 'px';
});

function iniciarJogo() {
    if (jogoAtivo) return;
    
    pontos = 0;
    bolaX = 190;
    bolaY = 0;
    velocidadeY = 3;
    velocidadeX = (Math.random() > 0.5 ? 2 : -2);
    jogoAtivo = true;
    document.getElementById('placar').innerText = "Pontos: " + pontos;
    
    clearInterval(intervaloJogo);
    intervaloJogo = setInterval(atualizarJogo, 20);
}

function atualizarJogo() {
    const bola = document.getElementById('bola');
    
    bolaX += velocidadeX;
    bolaY += velocidadY;
    
    if (bolaX <= 0 || bolaX >= 380) {
        velocidadeX = -velocidadeX;
    }
    
    if (bolaY <= 0) {
        velocidadeY = -velocidadeY;
    }
    
    if (bolaY >= 260 && bolaY <= 270) {
        if (bolaX + 20 >= jogadorPos && bolaX <= jogadorPos + 80) {
            velocidadeY = -velocidadeY;
            velocidadeY -= 0.4; 
            pontos++;
            document.getElementById('placar').innerText = "Pontos: " + pontos;
        }
    }
    
    if (bolaY > 300) {
        clearInterval(intervaloJogo);
        jogoAtivo = false;
        alert("Fim de jogo! A bola caiu. Você fez " + pontos + " pontos!");
    }
    
    bola.style.left = bolaX + 'px';
    bola.style.top = bolaY + 'px';
}
