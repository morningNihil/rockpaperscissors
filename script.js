
 function getComputerChoice() {
 const randomPick = Math.floor(Math.random()* 3);  // We can add the let variable here or outside if we want to use this same code for the person it would be better to use it outside the function
   if (randomPick === 0) {
         return "Rock";
     }
     else if (randomPick === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
    

    
    
 };
console.log(getComputerChoice());





function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = "Rock"
    
    if (playerSelection == computerSelection) {
        return "Tie"
        
     }
    
      else if (playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Rock" && computerSelection === "Scissors") {
         return "Player wins"
     }

     else if (playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock"); {
         return "Computer wins"
      } 
 };

 console.log(playRound());

 var computerScore = 0;
 var playerScore = 0;

   function totalScore(computerScore, playerScore) {
      if (computerScore === 5) {
           return "Computer Wins this round!"
      } else if (computerScore === playerScore) {
          return "Its a tie!"
       }
      else {
           return "You win!"
      }

   }

 

 function game() {
       for (let i = 0; i < 5; i++) {
        playRound()
        console.log(playRound());
           if (playRound() === "Tie") {
            computerScore++
            playerScore++
          
           }
           else if (playRound() === "Computer wins") {
           computerScore++
           }
             else if (playRound() === "Player wins") {
            playerScore++
           }
        
       }
   }


console.log(game(playRound()))// 
console.log(totalScore(computerScore, playerScore));







