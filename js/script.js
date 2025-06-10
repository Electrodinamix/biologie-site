console.log("Scriptul a fost încărcat corect!");

window.addEventListener("DOMContentLoaded", function () {
    alert("Bun venit pe site-ul de biologie!");
});
// Schimbă automat imaginea la 3 secunde
let img = document.getElementById("img1");
let images = ["images/poza1.jpg", "images/poza2.jpg", "images/poza3.jpg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
}, 1000);

// Functie pentru a modifica dimensiunea imaginilor
function resizeImages(width, height) {
    // Selectează toate imaginile din pagină
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = height + 'px';
    });
}

// Exemplu: modifică dimensiunea la 300px lățime și 200px înălțime
// Apelează funcția după ce pagina s-a încărcat complet
window.addEventListener('load', () => {
    resizeImages(300, 200);
});

