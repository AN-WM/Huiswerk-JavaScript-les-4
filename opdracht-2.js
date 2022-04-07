// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Pseudo code
// 1. Maak met een map-methode een array (soldList) met alle sold-bedragen uit de inventory.
// 2. Maak een nieuwe functie (totalSales) aan, met één verwachte input, en een variabele voor de uitkomst
// 3. Loop de nieuwe array stap voor stap door d.m.v. een for-loop in totalSales.
// 4. Tel telkens de waarde uit soldList op bij de uitkomst, bij iedere waarde van de array.
// 5. Wanneer de volledige array doorlopen is, return de uitkomst.
// 6. Roep totalSales aan met soldList als argument, en log de uitkomst in de console.

const soldList = inventory.map((item) => {
    return item.sold;
});

function totalSales(input) {
    let uitkomst = 0;
    for (let x = 0; x <= (input.length - 1); x++) {
        uitkomst += input[x];
    }
    return uitkomst;
}

console.log(totalSales(soldList));

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const soldViewer = document.getElementById("sold-items");
soldViewer.innerHTML = `<h2> ${totalSales(soldList)} </h2>`;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Pseudo-code:
// Doe hetzelfde als bij 2a, maar dan met inventory.originalStock

const stockList = inventory.map((item) => {
    return item.originalStock;
});

function totalStock(input) {
    let uitkomst = 0;
    for (let x = 0; x <= (input.length - 1); x++) {
        uitkomst += input[x];
    }
    return uitkomst;
}

console.log(totalStock(stockList));

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const stockViewer = document.getElementById("stock-items");
stockViewer.innerHTML = `<h2> ${totalSales(stockList)} </h2>`;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

//Pseudo-code:
//Maak drie nieuwe variabelen aan: itemsSold, originalStock, currentStock.
// itemsSold wordt gevuld met 2a
// originalStock wordt gevuld met 2c
// currentStock = originalStock - itemsSold
// geef het resultaat weer via innerHTML

const itemsSold = totalSales(soldList);
const originalStock = totalStock(stockList);
const currentStock = originalStock - itemsSold;

const stockNow = document.getElementById("current-stock");
stockNow.innerHTML = `<h2> ${currentStock} </h2>`;