// script.js
const progetti = [
    {
        titolo: "JS 1",
        descrizione: "JS 1",
        immagine: "link-immagine-1.jpg",
        link: "js1.html"
    },
    {
        titolo: "JS 2",
        descrizione: "JS 2",
        immagine: "link-immagine-2.jpg",
        link: "js2.html"
    },
    {
        titolo: "JS 3",
        descrizione: "JS 3",
        immagine: "link-immagine-3.jpg",
        link: "js3.html"
    },
    {
        titolo: "JS 4",
        descrizione: "JS 4",
        immagine: "link-immagine-4.jpg",
        link: "js4.html"
    },   
    {
        titolo: "JS 5",
        descrizione: "JS 5",
        immagine: "link-immagine-4.jpg",
        link: "js5.html"
    },
    {
        titolo: "JS 5 ",
        descrizione: "JS 5 Set Interval",
        immagine: "link-immagine-4.jpg",
        link: "js5_2.html"
    },
    {
        titolo: "Morra BOT",
        descrizione: "Gioco della morra cinese ",
        immagine : "",
        link: "morra_bot.html"
    },
    {
        titolo: "Algoritmo Numeri Primi",
        descrizione: "Array 1",
        immagine : "",
        link:"array1.html"
    },
    {
        titolo: "Matrice Responsiva 10x10",
        descrizione : "Array 2",
        immagine: "",
        link: "array2.html"
    },
    {
        titolo: "Matrice Numeri primi  50x50",
        descrizione : "Array 3",
        immagine: "",
        link: "array3.html"
    },
    {
        titolo: "Analisi Numerica",
        descrizione: "analisi Numerica",
        immagine: "",
        link: "analisi_numerica.html"
    }
];

const sezioneProgetti = document.getElementById("progetti");

progetti.forEach(progetto => {
    const progettoDiv = document.createElement("div");
    progettoDiv.classList.add("progetto");

    progettoDiv.innerHTML = `
        <h3>${progetto.titolo}</h3>
        <p>${progetto.descrizione}</p>
        <a href="${progetto.link}" target="_blank">Guarda il progetto</a>
    `;

    sezioneProgetti.appendChild(progettoDiv);
});
