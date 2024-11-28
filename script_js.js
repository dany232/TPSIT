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
