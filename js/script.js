cards = ['box-1', 'box-2', 'box-3', 'box-4', 'box-5', 'box-6', 'box-7', 'box-8', 'box-9']
points =  0;
let randomNum = Math.floor(Math.random() * cards.length); 
function rotateSquare(element) 
{
element.style.transform = "rotate(45deg)";
 }


 

function scaleSquare(element) 
{
element.style.transform = "scale(1.2)";
 }

function reverseString(str) {
    return str.split('').reverse().join('');
}

function transformBox(element) {
    element.classList.toggle('transformed');
}

function animateBoxes() {
    const boxes = document.querySelectorAll('.box');
    let index = 0;
    setInterval(() => {
        boxes.forEach(box => box.classList.remove('transformed'));
        boxes[index].classList.add('transformed');
        index = (index + 1) % boxes.length;
    }, 1000);
}

function changeColor(element){
    element.style.backgroundColor = "red";
}

function showAlert(){
    alert("Hai cliccato il quadrato!");
}


function logMessage(){
    console.log("Messaggio");
}

function randomBackground(){
    R = Math.floor(Math.random() * 255)
    G = Math.floor(Math.random() * 255)
    B = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${R},${G},${B})`
}

function toggleVisibility(element){
    element.style.visibility = "hidden";

}

function changeText(element) {
    element.innerHTML = "Cliccato!";
}

function resetAll(){
    location.reload();
}

function randomColor(element){
    R = Math.floor(Math.random() * 255)
    G = Math.floor(Math.random() * 255)
    B = Math.floor(Math.random() * 255)
    element.style.backgroundColor = `rgb(${R},${G},${B})`
}

function Temporizzatore(elements){
    let previousElement = null;
    ID = setInterval(function(){
        if (previousElement) {
            previousElement.style.backgroundColor = "white";
        }
        let randomIndex = Math.floor(Math.random() * elements.length);
        let element = elements[randomIndex];
        randomColor(element);
        previousElement = element;
    },1000);
    setTimeout(() => {
        if (previousElement) {
            previousElement.style.backgroundColor = "white";
        }
        clearInterval(ID);
    },10000)
}

function startGame() {
    setInterval(() => {
        let randomNum = Math.floor(Math.random() * cards.length);
        console.log(cards[randomNum]);
        document.getElementById(cards[randomNum]).classList.add('active');
        setTimeout(() => {
            document.getElementById(cards[randomNum]).classList.remove('active');
        }, 500);
    }, 1000);
}

function checkSequence(element) {
    if (element.classList.contains("active")) {
        points += 1;
    } else {
        points -= 0.25;
    }
    document.getElementById("points").textContent = `Points: ${points}`;
} 





boxes = document.querySelectorAll(".box");
document.addEventListener("DOMContentLoaded",Temporizzatore(boxes));
