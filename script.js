//1. Make 3 button options to choose between
//2. Making programm for computer that will allow
//    to choose 3 different options
    let computerChoice
    let choiceNumber
    function getComputerChoice(choiceNumber) {
        choiceNumber = Math.floor(Math.round((Math.random() * 2 + 1)));
        console.log(choiceNumber);
    if (choiceNumber == 1) {
        computerChoice = "Rock";
    }
    else if (choiceNumber == 2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissor";
    }
    console.log(computerChoice)
    }
    getComputerChoice()
    

//3. Making programm that is based on option that I clicked 
//4. Compare options between computer and player
//5. Making score count for both players
//6. Creating loop that will end whenever one of the players
//    scores 5 points
//7. Making end screen
//8. Replay button 