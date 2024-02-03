function PlayGame()
{
    let userWins = 0;
    let computerWins = 0;

    for(let i = 1; i <= 5; i++)
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
    }

    if(userWins > computerWins)
    {
        alert(`You have won the Game!`);
        computerWins = 0;
        userWins = 0;
    }
    else if(computerWins > userWins)
    {
        alert(`You have lost the Game!`);
        computerWins = 0;
        userWins = 0;
    }
    else
    {
        alert(`You have Tied the Game!`);
        computerWins = 0;
        userWins = 0;
    }
}

function RockPaperScissorPlayRound(choice, computerChoice){
    computerChoice = computerChoice.toLowerCase();
    choice = choice.toLowerCase();

    if((choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock"))
    {
        return "Win";
    }
    else if((choice === "rock" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "rock") ||
    (choice === "paper" && computerChoice === "scissors"))
    {
        return "Lost";
    }
    else
    {
        return "Tie";
    }
}

function GetComputerRandomChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    
    var randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}