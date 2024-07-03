let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".msg")
let msgCont = document.querySelector(".msgCont")

let count = 0;

let winningProbab = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true
        checkWinner()
    })
});

const drawGame = () => {
    console.log()
}

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const resetGame = () => {
    document.querySelector(".reset-btn").addEventListener("click", () => {
        location.reload()
    })
}
resetGame()

const showWinner = (winner) => {
    msg.classList.remove("hide")
    msg.innerText = `Congratulations, winner is  ${winner}`;
}

const checkWinner = () => {
    for (let patterns of winningProbab) {
        // console.log(patterns[0].innerText)
        // console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]])
        let firstVal = boxes[patterns[0]].innerText;
        let secondVal = boxes[patterns[1]].innerText;
        let thirdVal = boxes[patterns[2]].innerText;


        if (firstVal != "" && secondVal != "" && thirdVal != "") {
            if (firstVal === secondVal && secondVal === thirdVal) {
                console.log("Winner is", firstVal)
                disableBox()
                showWinner(firstVal)
            }
        }
    }
}

