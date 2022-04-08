// Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
// Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen
// op het moment dat de buttons geklikt worden.
// Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op de bijbehorende knop klikt.
// Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd,
// dat de uitkomsten worden meegegeven aan jouw generateTV-functie
// zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

function sortPrice () {
    const sorted = inventory.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        else if (a.price > b.price) {
            return 1;
        }
        else return 0;
    })

    generateTv(sorted);
}

const buttonSortList= document.getElementById('sort-price');
buttonSortList.addEventListener('click', sortPrice);


function showAmbilight() {
    const ambiLight = inventory.filter((item) => {
        return item.options.ambiLight === true;
    });

    generateTv(ambiLight);
}

const buttonAmbilight= document.getElementById('ambilight');
buttonAmbilight.addEventListener('click', showAmbilight);

function showSoldOut() {
    const soldOut = inventory.filter((item) => {
        return item.originalStock - item.sold === 0;
    });

    generateTv(soldOut);
}

const buttonSoldOut = document.getElementById('sold-out');
buttonSoldOut.addEventListener('click', showSoldOut);
