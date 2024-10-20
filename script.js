// script.js
const progetti = [
    {
        titolo: "CSS e PADDING",
        descrizione: "CSS e PADDING",
        immagine: "link-immagine-1.jpg",
        link: "css.html"
    },
    {
        titolo: "DIV ANNIDATI",
        descrizione: "Creazione di notizie con i DIV ANNIDATI",
        immagine: "link-immagine-2.jpg",
        link: "div.html"
    },
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
