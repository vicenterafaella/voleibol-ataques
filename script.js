// Variáveis do Placar
let pontosBrasil = 0;
let pontosAdversario = 0;

// Variáveis do Cronômetro
let tempoSegundos = 0;
let intervaloCronometro = null;

// Função para alterar a pontuação
function mudarPonto(time, valor) {
    if (time === 'brasil') {
        pontosBrasil = Math.max(0, pontosBrasil + valor); // Impede pontos negativos
        document.getElementById('score-brasil').innerText = pontosBrasil;
    } else if (time === 'adversario') {
        pontosAdversario = Math.max(0, pontosAdversario + valor); // Impede pontos negativos
        document.getElementById('score-adversario').innerText = pontosAdversario;
    }
}

// Função para formatar o tempo (00:00)
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const restanteSegundos = segundos % 60;
    
    const minsFormatados = minutos < 10 ? '0' + minutos : minutos;
    const segsFormatados = restanteSegundos < 10 ? '0' + restanteSegundos : restanteSegundos;
    
    return `${minsFormatados}:${segsFormatados}`;
}

// Controladores do Cronômetro
function iniciarCronometro() {
    if (intervaloCronometro !== null) return; // Evita duplicar múltiplos intervalos

    document.getElementById('btn-iniciar').disabled = true;
    document.getElementById('btn-pausar').disabled = false;

    intervaloCronometro = setInterval(() => {
        tempoSegundos++;
        document.getElementById('timer').innerText = formatarTempo(tempoSegundos);
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
    
    document.getElementById('btn-iniciar').disabled = false;
    document.getElementById('btn-pausar').disabled = true;
}

function zerarCronometro() {
    pausarCronometro();
    tempoSegundos = 0;
    document.getElementById('timer').innerText = "00:00";
    
    document.getElementById('btn-iniciar').disabled = false;
    document.getElementById('btn-pausar').disabled = true;
}

// Função para reiniciar tudo do zero
function reiniciarPlacar() {
    zerarCronometro();
    pontosBrasil = 0;
    pontosAdversario = 0;
    document.getElementById('score-brasil').innerText = 0;
    document.getElementById('score-adversario').innerText = 0;
}

