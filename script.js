const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors')
const USERSCORE = document.getElementById('userScore')
const COMPUTERSCORE = document.getElementById('computerScore')
const BUTTONS = document.querySelectorAll('button');
const REFRESHBTN = document.querySelector('.refreshBtn')
let result = document.querySelector('.showResult > p')
let computerScore = 0;
let playerScore = 0;




function playerChoice() {
    ROCK.addEventListener('click', function() {
        playRound("rock");
        
    })
    
    PAPER.addEventListener('click', function() {
        playRound("paper")
    })
    
    SCISSORS.addEventListener('click', function() {
        playRound("scissors");
    })
}

    playerChoice();


function getComputerChoice() {
 const randomPick = Math.floor(Math.random()* 3);  // We can add the let variable here or outside if we want to use this same code for the person it would be better to use it outside the function
   if (randomPick === 0) {
        return "rock";
      }      else if (randomPick === 1) {
        return  "paper";
     } else {
        return "scissors";
     }
};

 function win(userChoice,computerSelection) {
    playerScore++;
    USERSCORE.innerHTML = playerScore;
    result.innerHTML = `You win this match`
    // result.innerHTML = `${userChoice} destroys ${computerSelection}`; 
    // need to fix this no idea why return undefined

    

 }
 function lose(userChoice,computerSelection) {
    computerScore++;
    COMPUTERSCORE.innerHTML = computerScore;
    result.innerHTML = `Computer wins this match`
    // result.innerHTML = `${computerSelection} destroy ${userChoice}` Need to fix this no idea why return undefined

}
function draw() {
    result.innerHTML = `Its a tie`
}   

    function playRound(userChoice) {
        let computerSelection = getComputerChoice()
    
    
    // playing around with switch 
    switch (userChoice + computerSelection) {
        
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
            
    }

     maxFive();

   
    


    

    

    

  // old if choices
//  if (userChoice == computerSelection) {
    //     return "Tie"
        
    //  }
    
    //   else if (userChoice === "Paper" && computerSelection === "Rock" || userChoice === "Scissors" && computerSelection === "Paper" || userChoice === "Rock" && computerSelection === "Scissors") {
    //       return "Player wins"
    //   }

    //  else if (userChoice === "Paper" && computerSelection === "Scissors" || userChoice === "Rock" && computerSelection === "Paper" || userChoice === "Scissors" && computerSelection === "Rock"); {
    //       return "Computer wins"
    //    } 
       
};

function disableButtons() {
    BUTTONS.forEach(BUTTONS => {
        BUTTONS.disabled = true
    })
    const REFRESH = document.createElement('button');
    REFRESH.innerText = 'Play Again!';
    REFRESHBTN.appendChild(REFRESH);

    REFRESH.addEventListener('click', () => {
        refreshPage();
    })
    
}

function refreshPage() {
    window.location.reload();
}

function maxFive() {
    if (playerScore === 5) {
    result.innerHTML = `Your score = ${playerScore}, you won this round!`
        disableButtons()
    } else if (computerScore === 5) {
        result.innerHTML = `Computer won this round ):`
        disableButtons()
    }
    
}
//  
      // old score
//    function totalScore(computerScore, playerScore) {
//       if (computerScore === 5) {
//            return "Computer Wins this round!"
//       } else if (computerScore === playerScore) {
//           return "Its a tie!"
//        }
//       else {
//            return "You win!"
//       }

//    }

 

// old rounds five

//  function roundsFive() {
    //    for (let i = 0; i < 5; i++) {
        // playRound()
//         console.log(playRound());
//            if (playRound() === "Tie") {
//             computerScore++
//             playerScore++
          
//            }
//            else if (playRound() === "Computer wins") {
//            computerScore++
//            }
//              else if (playRound() === "Player wins") {
//             playerScore++
//            }
        
        // }
// }

 







