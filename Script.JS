/*function PlayGame()
{
        let choice = prompt("Rock, paper or scissor?");
        let computerChoice = GetComputerRandomChoice();
        let result = RockPaperScissorPlayRound(choice, computerChoice);

        if(result === "Win")
        {
            userWins++;
            console.log(`Round ${i} won. You chose: ${choice}. Computer chose: ${computerChoice}.`);
        }
        else if(result === "Lost")
        {
            computerWins++;
            console.log(`Round ${i} lost. You chose: ${choice}. Computer chose: ${computerChoice}.`);
        }
        else
        {
            console.log(`Round ${i} Tied. You chose: ${choice}. Computer chose: ${computerChoice}.`);
        }
} COMMIT THE CHANGES*/
let userScore = 0;
let computerScore = 0;

function RockPaperScissorPlayRound(choice){
    let computerChoice = GetComputerRandomChoice().toLowerCase();
    choice = choice.toLowerCase();

    if((choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock"))
    {
        userScore++;
        console.log(`Round won. You chose: ${choice}. Computer chose: ${computerChoice}.`);
        //return "Win";
    }
    else if((choice === "rock" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "rock") ||
    (choice === "paper" && computerChoice === "scissors"))
    {
        computerScore++;
        console.log(`Round lost. You chose: ${choice}. Computer chose: ${computerChoice}.`);
        //return "Lost";
    }
    else
    {
        console.log(`Round Tied. You chose: ${choice}. Computer chose: ${computerChoice}.`);
        //return "Tie";
    }

    UpdateScoreboard();

    DeclareWinner();
}

function GetComputerRandomChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    
    var randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}

function DeclareWinner(){
    if(userScore == 5)
    {
        alert(`The user wins!`);
        computerScore = 0;
        userScore = 0;
        UpdateScoreboard();
    }
    else if(computerScore == 5)
    {
        alert(`The computer wins!`);
        computerScore = 0;
        userScore = 0;
        UpdateScoreboard();
    }
}

function UpdateScoreboard(){
    var userScoreElement = document.getElementById("userScore");
    userScoreElement.textContent = `User score: ${userScore}.`;
    var computerScoreElement = document.getElementById("computerScore");
    computerScoreElement.textContent = `User score: ${computerScore}.`; 
}
