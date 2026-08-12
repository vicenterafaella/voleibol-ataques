// Lógica do Mascote
const frases = [
    "Vôlei é vida! Vamos treinar?",
    "O saque da Rafaela é imbatível!",
    "Você sabia que o vôlei foi criado em 1895?",
    "Não morda a bola, brinque com ela!",
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

// Controle do jogador por teclado
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
    
    // Resetar variáveis
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
    
    // Movimentação da bola
    bolaX += velocidadeX;
    bolaY += velocidadeY;
    
    // Colisão com as paredes laterais
    if (bolaX <= 0 || bolaX >= 380) {
        velocidadeX = -velocidadeX;
    }
    
    // Colisão com o teto
    if (bolaY <= 0) {
        velocidadeY = -velocidadeY;
    }
    
    // Colisão com a raquete da Rafaela (jogador)
    if (bolaY >= 260 && bolaY <= 270) {
        if (bolaX + 20 >= jogadorPos && bolaX <= jogadorPos + 80) {
            velocidadeY = -velocidadeY;
            // Aumenta velocidade gradualmente para dar desafio
            velocidadeY -= 0.5; 
            pontos++;
            document.getElementById('placar').innerText = "Pontos: " + pontos;
        }
    }
    
    // Fim de jogo se a bola cair
    if (bolaY > 300) {
        clearInterval(intervaloJogo);
        jogoAtivo = false;
        alert("Fim de jogo! A bola caiu. Você fez " + pontos + " pontos!");
    }
    
    // Atualiza posições visuais
    bola.style.left = bolaX + 'px';
    bola.style.top = bolaY + 'px';
}
