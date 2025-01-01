let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let statusElement = document.getElementById('status');
let cells = document.querySelectorAll('.cell');
let winningCombination = [];

// Function to handle user clicks
function handleClick(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        let cell = cells[index];
        
        // Create SVG for X or O
        if (currentPlayer === 'X') {
            cell.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                  <line x1="0" y1="0" x2="50" y2="50" stroke="#ff5733" stroke-width="5"/>
                                  <line x1="50" y1="0" x2="0" y2="50" stroke="#ff5733" stroke-width="5"/>
                              </svg>`;
            cell.classList.add('x');
        } else {
            cell.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                  <circle cx="25" cy="25" r="20" stroke="#3498db" stroke-width="5" fill="none"/>
                              </svg>`;
            cell.classList.add('o');
        }
        
        checkWinner();
        togglePlayer();
    }
}


// Function to toggle between players
function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusElement.textContent = Player 
}

// Function to check if there is a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            winningCombination = combination;
            highlightWinningLine(combination);
            statusElement.textContent = Player 
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        statusElement.textContent = "It's a Draw!";
    }
}

// Function to highlight the winning line
function highlightWinningLine(combination) {
    combination.forEach(index => {
        cells[index].classList.add('winning-line');
    });
}

// Function to restart the game
function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    winningCombination = [];
    statusElement.textContent = Player
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winning-line');
    });
}

// Add event listeners to the cells
cells.forEach(cell => {
    cell.addEventListener('click', () => handleClick(cell.getAttribute('data-index')));
});