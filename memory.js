const start = document.getElementById('start');
cards = ['box-1', 'box-2', 'box-3', 'box-4', 'box-5', 'box-6', 'box-7', 'box-8', 'box-9']
let tempSequence = [];
let userSequence = [];
let index = 2;
let delay = 1500;
let isDisplayingSequence = false;

function startMemory(){
    isDisplayingSequence = true;
    tempSequence = [];
    for(let i = 0; i < index; i++){
        let randomNum = Math.floor(Math.random() * cards.length);
        console.log(cards[randomNum]);
        setTimeout(() => {
            document.getElementById(cards[randomNum]).classList.add('active');
        }, i * delay);
        setTimeout(() => {
            document.getElementById(cards[randomNum]).classList.remove('active');
            if (i === index - 1) {
                isDisplayingSequence = false;
            }
        }, (i + 1) * delay);
        tempSequence.push(cards[randomNum]);
    }
}

function changeClass(newClass,id){
    document.getElementById(id).classList.add(newClass);
}

function checkSequence(){
    for(let i = 0; i < index; i++){
        if(tempSequence[i] !== userSequence[i]){
            alert('You lose');
            location.reload();
            return;
        }
    }
    if(index === 9){
        alert('You win the game');
        win();
        return;
    }
    alert('You win this round');
    index++;
    userSequence = [];
    startMemory();
}

function addSequence(element){
    if (isDisplayingSequence) return;
    userSequence.push(element.id);
    if(userSequence.length === index){
        checkSequence();
    }
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function(event) {
        if (isDisplayingSequence) {
            event.preventDefault();
            alert('Wait until the sequence is displayed');
        } else {
            addSequence(event.target);
        }
    });
});


function win(){
    tsParticles.load("tsparticles", {
     particles: {
         number: {
             value: 100
         },
         color: {
             value: ["#FFD700", "#FF4500", "#00FFFF"]
         },
         shape: {
             type: "circle"
         },
         opacity: {
             value: 0.8
         },
         size: {
             value: 4,
             random: true
         },
         move: {
             enable: true,
             speed: 2,
             direction: "bottom",
             random: false,
             straight: false
         }
     },
     interactivity: {
         events: {
             onClick: { enable: true, mode: "push" },
             onHover: { enable: true, mode: "repulse" }
         }
     },
     background: {
         color: "black"
     }
  });
  
  // GSAP animation for "YOU WON!"
  gsap.to("#you-won", {
     opacity: 1,
     scale: 1,
     duration: 1.5,
     ease: "bounce.out",
     onComplete: () => {
         gsap.to("#you-won", {
             scale: 1.2,
             yoyo: true,
             repeat: -1,
             duration: 0.8,
             ease: "sine.inOut"
         });
     }
  });
    }