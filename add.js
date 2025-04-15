let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }

        box.classList.add("disabled");
        box.style.pointerEvents = "none"; // 

 
        turnO = !turnO;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            highlightWinner(pattern); 
            disableAllBoxes(); 
            break; 
        }
    }
};

const highlightWinner = (pattern) => {
    pattern.forEach(index => {
        boxes[index].style.backgroundColor = "lightgreen";
    });
};


const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
};

// Reset button functionality
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; 
        box.style.backgroundColor = ""; 
    });
    turnO = true;
});
