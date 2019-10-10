var count = 0;
var rockCount =0, paperCount=0, scissorsCount =0;
var computerOutput = "rock";
var winCount =0, tieCount =0, loseCount =0;
var rockWin =0; paperWin = 0; scissorsWin =0;
var rockWinCount=0; paperWinCount =0; scissorsWinCount =0;
var playerChoice = document.getElementsByName('move');
var playersChoice = '';
var overallCount =0;
var gameCount = 0;

function showGame(){
    document.getElementById("name").required = true;
    var name = document.getElementById("name").value;
    document.getElementById("entry").style.display = 'none';
    document.getElementById("welcome").innerHTML = name + ", Welcome to Rock, Paper, Scissors!"; 
    document.getElementById("game").style.display = 'block';
}



function computerDraw(){
    var x = 5;
    count++;
    overallCount++;

    var play = Math.floor(Math.random() * 3);

    if(play == 0){
        computerOutput = "rock";
    }
    else if (play == 1){
        computerOutput = "paper";
    }
    else if (play == 2){
        computerOutput = "scissors";
    }

    document.getElementById("computersPlay").innerHTML = computerOutput;

}
/*this is my play() function*/
function playGame(){
    for(i = 0; i < playerChoice.length; i++) { 
        if(playerChoice[i].checked) 
            playersChoice = playerChoice[i].value;
    }

    if(playersChoice == "rock")
            rockCount++;
    if(playersChoice == "paper")
            paperCount++;
    if(playersChoice == "scissors")
            scissorsCount++;

    compare(playersChoice, computerOutput);
    updateStats();
}


/*below is my compare(yourInput, computerGen) function*/
function compare(playersChoice, computerOutput){
    if(computerOutput == playersChoice){
        document.getElementById("gameResult").innerHTML = "tie";
        document.getElementById("gameResult").style.color = "rgb(244, 250, 137)";
        tieCount++;
    }

    else if(computerOutput == "rock" && playersChoice == "paper"){
        document.getElementById("gameResult").innerHTML = "win";
        document.getElementById("gameResult").style.color = "rgb(135, 245, 135)";
        winCount++;
        paperWinCount++;
    }

    else if(computerOutput == "rock" && playersChoice == "scissors"){
        document.getElementById("gameResult").innerHTML = "lose";
        document.getElementById("gameResult").style.color = "rgb(245, 137, 135)";
        loseCount++;
    }

    else if(computerOutput == "paper" && playersChoice == "rock"){
        document.getElementById("gameResult").innerHTML = "lose";
        document.getElementById("gameResult").style.color = "rgb(245, 137, 135)";
        loseCount++;
    }

    else if(computerOutput == "paper" && playersChoice == "scissors"){
        document.getElementById("gameResult").innerHTML = "win";
        document.getElementById("gameResult").style.color = "rgb(135, 245, 135)";
        winCount++;
        scissorsWinCount++;
    }
    
    else if(computerOutput == "scissors" && playersChoice == "rock"){
        document.getElementById("gameResult").innerHTML = "win";
        document.getElementById("gameResult").style.color = "rgb(135, 245, 135)";
        winCount++;
        rockWinCount++;
    }

    else {
        document.getElementById("gameResult").innerHTML = "lose";
        document.getElementById("gameResult").style.color = "rgb(245, 137, 135)";
        loseCount++;
    }
}


function updateStats(){

    document.getElementById("overallCount").innerHTML = "Overall play count: " + overallCount;
    document.getElementById("gameCount").innerHTML = "Total full games played: " + gameCount;

    document.getElementById("rockTP").innerHTML = rockCount;
    document.getElementById("paperTP").innerHTML = paperCount;
    document.getElementById("scissTP").innerHTML = scissorsCount;

    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("tieCount").innerHTML = tieCount;
    document.getElementById("loseCount").innerHTML = loseCount;

    rockWin = (rockWinCount/rockCount)*100;
    paperWin = (paperWinCount/paperCount)*100;
    scissorsWin = (scissorsWinCount/scissorsCount)*100;

    document.getElementById("rockWP").innerHTML = rockWin.toFixed(1) + "%";
    document.getElementById("paperWP").innerHTML = paperWin.toFixed(1) +"%";
    document.getElementById("scissWP").innerHTML = scissorsWin.toFixed(1) + "%";

    document.getElementById("playerScore").innerHTML = winCount;
    document.getElementById("computerScore").innerHTML = loseCount;


    if(21-count != 1)
    document.getElementById("computerCompetition").innerHTML = (21-count) + " rounds left";
    else
    document.getElementById("computerCompetition").innerHTML = (21-count) + " round left";


    if(winCount < loseCount && count == 21){
        gameOver();
        gameCount++;
    }
    else if (winCount > loseCount && count == 21){
        youWon();
        gameCount++;
    }
    else if (winCount == loseCount && count == 21){
        tieGame();
        gameCount++;
    }
}

function youWon(){
    console.log("player beat computer");
    winDisplayOn();
}

function gameOver(){
    console.log("computer beat player");
    loseDisplayOn();
}

function tieGame(){
    console.log("'twas a tie");
    tieDisplayOn();
}

function winDisplayOn() {
    document.getElementById("winOverlay").style.display = "block";
  }

function loseDisplayOn() {
    document.getElementById("loseOverlay").style.display = "block";
  }

function tieDisplayOn() {
    document.getElementById("tieOverlay").style.display = "block";
}
  
  function resultsDisplayOff() {
    document.getElementById("winOverlay").style.display = "none";
    document.getElementById("loseOverlay").style.display = "none";
    document.getElementById("tieOverlay").style.display = "none";
    resetGame();
  }

function resetGame(){
    count = 0;
rockCount =0;
 paperCount=0;
  scissorsCount =0;
winCount =0;
 tieCount =0;
  loseCount =0;
rockWin =0; 
paperWin = 0; 
scissorsWin =0;
 rockWinCount=0; 
 paperWinCount =0; 
 scissorsWinCount =0;
 document.getElementById("gameResult").innerHTML = "Game Results!";
 document.getElementById("gameResult").style.color = "rgb(236, 235, 235)";
 updateStats();
}

function goHome(){
    window.history.back();
}