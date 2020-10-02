// Iniciar la puntuacion de la computadora y del jugador a 0
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    // Computadora elige randome entre piedra papel o tijera
    let randome = Math.floor(Math.random() * 3);
    // Crear una variable para la eleccion (piedra, papel o tijera)
    let election = null;
    // Comprobar que numero toco y asignar
    if (randome == 0) {
        election = "piedra";
    } else if (randome == 1) {
        election = "papel";
    } else {
        election = "tijera";
    }
    // Devolver la eleccion de la computadora
    return election;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return message("Empate");
    }
    if (playerSelection == "piedra") {
        if (computerSelection == "papel") {
            computerScore++;
            return message(
                `Perdiste! ${playerSelection} pierde contra ${computerSelection}`
            );
        } else {
            playerScore++;
            return message(
                `Ganaste! ${playerSelection} le gana a ${computerSelection}`
            );
        }
    } else if (playerSelection == "papel") {
        if (computerSelection == "piedra") {
            playerScore++;
            return message(
                `Ganaste! ${playerSelection} le gana a ${computerSelection}`
            );
        } else {
            computerScore++;
            return message(
                `Perdiste! ${playerSelection} pierde contra ${computerSelection}`
            );
        }
    } else if (playerSelection == "tijera") {
        if (computerSelection == "piedra") {
            computerScore++;
            return message(
                `Perdiste! ${playerSelection} pierde contra ${computerSelection}`
            );
        } else {
            playerScore++;
            return message(
                `Ganaste! ${playerSelection} le gana a ${computerSelection}`
            );
        }
    }
}
function message(m) {
    const results = document.querySelector(".result");
    results.textContent = m;
}
function game() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const playerSelection = button.value;
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            const score = document.querySelector(".score")
            score.textContent = `${playerScore} - ${computerScore}`
            if (playerScore === 5) {
                return message("Ganaste la partida");
            }
            if (computerScore === 5) {
                return message("Perdiste la partida");
            }
        });
    });
}
game();

