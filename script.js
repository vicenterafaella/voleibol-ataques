let scoreA = 0;
let scoreB = 0;

const scoreElementA = document.getElementById("scoreA");
const scoreElementB = document.getElementById("scoreB");

function addPoint(team) {

    if (team === "A") {
        scoreA++;
        scoreElementA.textContent = scoreA;
    }

    if (team === "B") {
        scoreB++;
        scoreElementB.textContent = scoreB;
    }

    checkWinner();
}

function removePoint(team) {

    if (team === "A" && scoreA > 0) {
        scoreA--;
        scoreElementA.textContent = scoreA;
    }

    if (team === "B" && scoreB > 0) {
        scoreB--;
        scoreElementB.textContent = scoreB;
    }
}

function resetScore() {
    scoreA = 0;
    scoreB = 0;

    scoreElementA.textContent = scoreA;
    scoreElementB.textContent = scoreB;
}

function checkWinner() {

    if (scoreA >= 25 && scoreA - scoreB >= 2) {
        alert("🏆 BRASIL venceu o set!");
        resetScore();
    }

    if (scoreB >= 25 && scoreB - scoreA >= 2) {
        alert("🏆 ADVERSÁRIO venceu o set!");
        resetScore();
    }
}
