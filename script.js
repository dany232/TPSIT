var orElement;
document.addEventListener("mouseover",function(e){
    console.log(e.target.id);
    var id = e.target.id;
    orElement = document.getElementById(id).innerHTML;
    switch(id) {
        case "1":
            document.getElementById("1").innerHTML = "Tim berners Lee";
            break;
        case "2":
            document.getElementById("2").innerHTML = "1990";
            break;
        case "3":
            document.getElementById("3").innerHTML = "gestire i contenuti e creare una struttura di base per poi migliorarla con css e js";
            break;
        case "4":
            document.getElementById("4").innerHTML = "Il Web è uno spazio elettronico e digitale di Internet destinato alla pubblicazione di contenuti multimediali";
            break;
        case "5":
            document.getElementById("5").innerHTML = "per risolvere il problema della condivisione e dell'accesso alle informazioni in modo semplice e globale.";
            break;
        case "6":
            document.getElementById("6").innerHTML = "Il browser è l'applicazione che mostra il sito web al visitatore";
            break;
    }
});

document.addEventListener("mouseout",function(e){
    var id = e.target.id;
    document.getElementById(id).innerHTML = orElement;
});

function Reveal(){
    const img = document.getElementById("img");
    img.style.opacity = 1;
    setTimeout(function() {
        img.style.opacity = 0;

    }, 5000);
}