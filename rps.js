choice = ['rock','paper','scissors'];

function CompChoice(){
    let Index = Math.floor(Math.random() * 3);
    return choice[Index];
}

let Player_Score =0;
let Comp_Score =0;

const output = document.querySelector(".output");
const selection = document.querySelector(".selection");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const button = document.querySelectorAll(".options");

button.forEach(options=>{
    options.addEventListener('click',(e)=>{
        playerSelection = e.currentTarget.value;
        computerSelection = CompChoice();
        playRound();
    });
});

function playRound(){
    if((playerSelection=='rock' && computerSelection =='paper')||(playerSelection=='paper' && computerSelection =='scissor')||(playerSelection=='scissor' && computerSelection =='rock')){
        Comp_Score++;
        result.textContent = "Computer won this Round";
    }
    else if((playerSelection=='rock'&& computerSelection=='scissor')||(playerSelection=='paper'&& computerSelection=='rock')||(playerSelection=='scissor'&& computerSelection=='paper')){
        Player_Score++;
        result.textContent = "You won this Round";
    }
    else{
        result.textContent = "It's a tie";
    }

    if(Player_Score==5 || Comp_Score ==5){
        GameOver();
    }
    score.textContent = `Player: ${Player_Score}  Computer: ${Comp_Score}`;
}

function GameOver() {
    if (Player_Score > Comp_Score) {
        output.textContent = 'Congrats! You Won';
    } else {
        output.textContent = "Sorry! You Lost";
    }
    const resetBtn = document.createElement("button");
    resetBtn.textContent = 'Restart';
    resetBtn.classList.add("options", "reset-button");
    output.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
    location.reload();
}