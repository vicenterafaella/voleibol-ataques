// =======================
// PLACAR
// =======================


let scoreA = 0;
let scoreB = 0;


const scoreElementA =
document.getElementById("scoreA");


const scoreElementB =
document.getElementById("scoreB");



function addPoint(team){


    if(team === "A"){

        scoreA++;

    }


    if(team === "B"){

        scoreB++;

    }


    updateScore();


}




function removePoint(team){


    if(team === "A" && scoreA > 0){

        scoreA--;

    }



    if(team === "B" && scoreB > 0){

        scoreB--;

    }



    updateScore();


}




function updateScore(){


    scoreElementA.innerHTML = scoreA;


    scoreElementB.innerHTML = scoreB;


}




function resetScore(){


    scoreA = 0;

    scoreB = 0;


    updateScore();


}



// =======================
// CRONÔMETRO
// =======================


let seconds = 0;

let timer;



function startTimer(){


    if(timer) return;



    timer = setInterval(function(){


        seconds++;


        updateTimer();


    },1000);


}




function pauseTimer(){


    clearInterval(timer);


    timer = null;


}




function resetTimer(){


    clearInterval(timer);


    timer = null;


    seconds = 0;


    updateTimer();


}




function updateTimer(){


    let min =
    Math.floor(seconds / 60);


    let sec =
    seconds % 60;



    document.getElementById("timer")
    .innerHTML =

    String(min).padStart(2,"0")
    + ":" +

    String(sec).padStart(2,"0");


}
