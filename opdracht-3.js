// Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
// Pseudo-code:
// Maak met de map methode een nieuwe array met alle tv-merken, en sla deze op in de nieuwe variabele brandList
// Plaats de nieuwe array op de pagina met innerHTML

const brandList = inventory.map((item) => {
    return item.brand;
});

const brandListLive = document.getElementById("brand-list");

brandListLive.innerHTML = `<h2> ${brandList} </h2>`;


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

function showBrandList (input) {
    const brandList = input.map((item) => {
        return item.brand;
    });

    const displayList = document.getElementById(`brand-list2`);
    displayList.innerHTML = brandList.join(`<li>`);
}

showBrandList(inventory);