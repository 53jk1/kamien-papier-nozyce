// Pełna logika gry w tej funkcji
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
    // Funkcja do
    const playGame = () => {
        const rockBtn = document.querySelector('.kamień');
        const paperBtn = document.querySelector('.papier');
        const scissorBtn = document.querySelector('.nożyce');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['kamień','papier','nożyce']
         
        // Funkcja umożliwiająca rozpoczęcie gry
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Pozostałe ruchy: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                // Funkcja umożliwiająca sprawdzenie, kto wygrał
                winner(this.innerText,computerChoice)
                 
                // Wywołanie funkcji gameOver po 10 ruchach
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    // Funkcja wyłaniania zwycięzcy
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Remis'
        }
        else if(player == 'kamień'){
            if(computer == 'papier'){
                result.textContent = 'Komputer Wygrał';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Gracz Wygrał'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'nożyce'){
            if(computer == 'kamień'){
                result.textContent = 'Komputer Wygrał!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Gracz Wygrał!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'papier'){
            if(computer == 'nożyce'){
                result.textContent = 'Komputer Wygrał!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Gracz Wygrał!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    // Funkcja uruchamiania po zakończeniu gry
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Koniec Gry!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Wygrałeś grę!'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Przegrałeś grę!';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Remis';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Wywołanie funkcji playGame wewnątrz gry
    playGame();
     
}
 
// Wywołanie funkcji gry
game();
