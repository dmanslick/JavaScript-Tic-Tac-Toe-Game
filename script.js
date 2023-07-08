const tileOne = document.getElementById('tile-one')
const tileTwo = document.getElementById('tile-two') 
const tileThree = document.getElementById('tile-three')
const tileFour = document.getElementById('tile-four')
const tileFive = document.getElementById('tile-five')
const tileSix = document.getElementById('tile-six')
const tileSeven = document.getElementById('tile-seven')
const tileEight = document.getElementById('tile-eight')
const tileNine = document.getElementById('tile-nine')
const tiles = [tileOne, tileTwo, tileThree, tileFour, tileFive, tileSix, tileSeven, tileEight, tileNine]
const winComboOne = [tileOne, tileTwo, tileThree]
const winComboTwo = [tileFour, tileFive, tileSix]
const winComboThree = [tileSeven, tileEight, tileNine]
const winComboFour = [tileOne, tileFour, tileSeven]
const winComboFive = [tileTwo, tileFive, tileEight]
const winComboSix = [tileThree, tileSix, tileNine]
const winComboSeven = [tileOne, tileFive, tileNine]
const winComboEight = [tileThree, tileFive, tileSeven]
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const resultDiv = document.getElementById('result-div')
let gameOver = false

function computer(i) {
    let computerChoice = tiles[Math.floor(Math.random()*8)]
    if (computerChoice === tiles[i]) {
        console.log('same')
        computer(i)
    } else if (computerChoice.innerText === 'X') {
        console.log('occupied by player')
        computer(i)
    } else if (computerChoice.innerText === 'O') {
        console.log('occupied by computer')
        computer(i)
    } else {
        computerChoice.innerText = 'O'
    }
}

function playerWins() {
    result.innerText = 'You Win!'
    resultDiv.style.backgroundColor = 'green'
    playerScore.innerText++
    console.log('player wins')
    resetGame()
}

function computerWins() {
    result.innerText = 'Computer Wins!'
    resultDiv.style.backgroundColor = 'red'
    computerScore.innerText++
    console.log('computer wins')
    resetGame()
}

function tie() {
    result.innerText = 'Draw!'
    resultDiv.style.backgroundColor = '#cc9900'
    console.log('draw')
    resetGame()
}

function winCheck(winComboTiles) {
    if (winComboTiles[0].innerText === 'X' && winComboTiles[1].innerText === 'X' && winComboTiles[2].innerText === 'X') {
        playerWins()
    } else if (winComboTiles[0].innerText === 'O' && winComboTiles[1].innerText === 'O' && winComboTiles[2].innerText === 'O') {
        computerWins()
    } else if (winComboTiles[0].innerText != 'X' && winComboTiles[1].innerText != 'X' && winComboTiles[2].innerText != 'X' && winComboTiles[0].innerText != '' && winComboTiles[1].innerText != '' && winComboTiles[2].innerText != '') {
        tie()
    } else if (winComboTiles[0].innerText != 'O' && winComboTiles[1].innerText != 'O' && winComboTiles[2].innerText != 'O' && winComboTiles[0].innerText != '' && winComboTiles[1].innerText != '' && winComboTiles[2].innerText != '') {
        tie()
    }
}

function resetGame() {
    tileOne.innerText = ''
    tileTwo.innerText = ''
    tileThree.innerText = ''
    tileFour.innerText = ''
    tileFive.innerText = ''
    tileSix.innerText = ''
    tileSeven.innerText = ''
    tileEight.innerText = ''
    tileNine.innerText = ''
}

function winChecker() {
    winCheck(winComboOne)
    winCheck(winComboTwo)
    winCheck(winComboThree)
    winCheck(winComboFour)
    winCheck(winComboFive)
    winCheck(winComboSix)
    winCheck(winComboSeven)
    winCheck(winComboEight)
}

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', ()=> {
        if (tiles[i].innerText === 'O' || tiles[i].innerText === 'X') {
            return
        } else {
            tiles[i].innerText = 'X'
            computer(i)
        }
    })
}    

window.setInterval(()=> {
    if (tileOne.innerText != '' && tileTwo.innerText != '' && tileThree.innerText != '' && tileFour.innerText != '' && tileFive.innerText != '' && tileSix.innerText != '' && tileSeven.innerText != '' && tileEight.innerText != '' && tileNine.innerText != '') {
        winChecker()
    }
    winChecker()
}, 50)