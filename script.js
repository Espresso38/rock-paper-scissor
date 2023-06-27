//1. Make 3 button options to choose between
//2. Making programm for computer that will allow
//    to choose 3 different options
    let computerChoice
    let choiceNumber
    function getComputerChoice() {
        choiceNumber = Math.floor(Math.round((Math.random() * 2 + 1)));
        console.log(choiceNumber);
    if (choiceNumber == 1) {
        computerChoice = 1;
        return computerChoice
    }
    else if (choiceNumber == 2) {
        computerChoice = 2;
        return computerChoice
    }
    else {
        computerChoice = 3;
        return computerChoice
    }
    }
    getComputerChoice()
    

//3. Making programm that is based on option that I clicked 
    let playerChoice = prompt("Please enter your option between rock, paper or scissor", "Rock");
    let playerOption = playerChoice.toLowerCase();
    console.log(playerOption)
function playerOptionTransition() {
    if (playerOption == "rock") {
        let playerOption = 1;
        console.log(playerOption);
    }
    else if (playerOption == "paper") {
        let playerOption = 2;
        console.log(playerOption);
    }
    else if (playerOption == "scissors") {
        let playerOption = 3;
        console.log(playerOption);
    }
}
playerOptionTransition()


/*    const btnRock = document.getElementById('rock');
    const btnPaper = document.getElementById('paper');
    const btnScissor = document.getElementById('scissor');
    btnPaper.addEventListener('click', function paperSelected() {
        selectedButtonName = btnPaper.textContent;
        console.log(selectedButtonName);
    });*/
//4. Compare options between computer and player
//5. Making score count for both players
function playRound() {
    if (playerOption == computerChoice) {
        window.alert("It's a tie. Both of you have choosen same options");
    }
    else if (playerOption == 1, computerChoice == 2) {
        window.alert("You Lose! Paper beats rock");
    }
    else if (playerOption == 1, computerChoice == 3) {
        window.alert("You win! Rock beats scissors");
    }
    else if (playerOption == 2, computerChoice == 3) {
        window.alert("You lose! Scissors beats paper");
    }
    else if (playerOption == 2, computerChoice == 1) {
        window.alert("You win! Paper beats rock");
    }
    else if (playerOption == 3, computerChoice == 1) {
        window.alert("You lose! Rock beats scissors");
    }
    else if (playerOption == 3, computerChoice == 2) {
        window.alert("You win! Scissors beats paper");
    }
}
playRound()
//6. Creating loop that will end whenever one of the players
//    scores 5 points
//7. Making end screen
//8. Replay button 