    // Name: Fares Bahamdan 
    // ID: 201943050

let turn = "X";
let gameEnded = false;
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked);
});

function cellClicked(event) {
    const cell = event.target;
    if (!cell.classList.contains('selected') && !gameEnded) {
        addLetter(cell);
        checkWin();
        checkDraw();
    }
}

document.addEventListener("keydown", (event) => {
    event.preventDefault()
    if (event.code !== "Space"){
        moveSelected(event.code);
    }else{
        cell = document.querySelector(".selectedKey")
        addLetter(cell)
        checkWin();
        checkDraw();
    }
    
})

//kb functions
    function moveSelected(code) {
        current = document.querySelector(".selectedKey")
        next = null

        switch (code) {
            case "ArrowRight": next = current.nextElementSibling
                        break;
            case "ArrowLeft": next = current.previousElementSibling
                        break;
            case "ArrowDown": next = current.nextElementSibling.nextElementSibling.nextElementSibling
                        break;
            case "ArrowUp": next = current.previousElementSibling.previousElementSibling.previousElementSibling
                        break;
            }

            //replace class
            if (next != null) {
                current.classList.remove("selectedKey")
                next.classList.add("selectedKey")
            }

    }

// Add letter
function addLetter(cell) {
    cell.innerText = turn;
    cell.classList.add('selected');

    // Change turn
    turn = turn === "X" ? "O" : "X";

    // Change title
    const turnLetter = document.querySelector("#turn span");
    turnLetter.innerText = turn;
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            gameEnded = true;
            highlightWinningCombo(combo);
            document.getElementById('theWinner').innerText = `${cells[a].innerText} wins!`

        }
    }
}

function highlightWinningCombo(combo) {
    combo.forEach(index => {
        cells[index].classList.add('winning-cell');
    });
}

function checkDraw() {
    const isDraw = [...cells].every(cell => cell.innerText);
    if (isDraw && !gameEnded) {
        gameEnded = true;
        document.getElementById('theWinner').innerText = "It's a draw!"

    }
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', cleanCells);

function cleanCells() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('selected', 'winning-cell');
    });
    document.getElementById('theWinner').innerText = ""
    turn = "X";
    gameEnded = false;
    const turnLetter = document.querySelector("#turn span");
    turnLetter.innerText = turn;
}