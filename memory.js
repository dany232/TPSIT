const start = document.getElementById('start');
cards = ['box-1', 'box-2', 'box-3', 'box-4', 'box-5', 'box-6', 'box-7', 'box-8', 'box-9']
let tempSequence = [];
let userSequence = [];
let index = 2;
let delay = 1500;
function startMemory(){
    for(i = 0;i < index;i++){
        let randomNum = Math.floor(Math.random() * cards.length);
        console.log(cards[randomNum]);
        setTimeout( () => {
            document.getElementById(cards[randomNum]).classList.add('active');
        }, i * delay);
        setTimeout(() => {
            document.getElementById(cards[randomNum]).classList.remove('active');
        }, (i + 1) * delay);
        tempSequence.push(cards[randomNum]);
    }
}

function changeClass(newClass,id){
    document.getElementById(id).classList.add(newClass);

}

function checkSequence(){
    for(i = 0;i < index;i++){
        if(tempSequence[i] !== userSequence[i]){
            alert('You lose');
            return;
        }
    }
    if(index === 9){
        alert('You win the game');
        return;
    }
    alert('You win this round');
    index++;
    userSequence = [];
    tempSequence = [];
    startMemory();


}


function addSequence(element){
    userSequence.push(element.id);
    if(userSequence.length === index){
        checkSequence();
    }
}

