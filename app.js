console.log("Welcome to Tic Tac Toe");
// let music = new Audio("Game Music.mp3");
let audioTurn = new Audio("Change Turn.wav");
let gameover = new Audio("GameOver.wav");
let turn = "X";
let isGameOver = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//Function to check the winner
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('textBox');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let textInBox = element.querySelector('.textBox');
    element.addEventListener("click", (e)=>{
        if(textInBox.innerText === '')
        textInBox.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();  
        if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
}) 


//Reset Button
reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.textBox');
    Array.from(boxText).forEach(element =>{
        element.innerText = ''
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw"
})

