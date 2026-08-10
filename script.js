// ==========================
// PLACAR
// ==========================

let scoreA = 0;
let scoreB = 0;


// Elementos do HTML
const scoreElementA = document.getElementById("scoreA");
const scoreElementB = document.getElementById("scoreB");


// ==========================
// ADICIONAR PONTO
// ==========================

function addPoint(team) {

    if (team === "A") {
        scoreA++;
    }

    if (team === "B") {
        scoreB++;
    }

    updateScore();

    checkWinner();
}


// ==========================
// REMOVER PONTO
// ==========================

function removePoint(team) {

    if (team === "A" && scoreA > 0) {
        scoreA--;
    }

    if (team === "B" && scoreB > 0) {
        scoreB--;
    }

    updateScore();
}


// ==========================
// ATUALIZAR PLACAR
// ==========================

function updateScore() {

    scoreElementA.textContent = scoreA;
    scoreElementB.textContent = scoreB;

}


// ==========================
// REINICIAR
// ==========================

function resetScore() {

    scoreA = 0;
    scoreB = 0;

    updateScore();

}


// ==========================
// VERIFICAR VENCEDOR
// ==========================

function checkWinner() {

    // Brasil venceu
    if (
        scoreA >= 25 &&
        scoreA - scoreB >= 2
    ) {

        setTimeout(() => {

            alert("🏆 BRASIL VENCEU O SET!");

            resetScore();

        }, 100);

    }


    // Adversário venceu
    if (
        scoreB >= 25 &&
        scoreB - scoreA >= 2
    ) {

        setTimeout(() => {

            alert("🏆 ADVERSÁRIO VENCEU O SET!");

            resetScore();

        }, 100);

    }

}
