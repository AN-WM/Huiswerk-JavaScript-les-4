// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//Pseudo-code:
// Ik wil van de bestaande objecten uit een array alleen het itemtype in een nieuwe array plaatsen, en de nieuwe array tonen.
// 1. Open de array inventory met de map methode
// 2. Return alleen het type-onderdeel van elk object
// 3. Log het geheel in de console

const tvTypeList = inventory.map((item) => {
    return item.type;
});

console.log(tvTypeList);


// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
//Pseudo-code:
// Ik wil de bestaande objecten uit een array filteren op hun voorraadstatus, en de nieuwe array tonen.
// 1. Open de array inventory met de filter methode
// 2. Return alleen de items waarbij de originele voorraad - het aantal verkochte items = 0 (dan zijn ze uitverkocht).
// 3. Log het geheel in de console

const soldOut = inventory.filter((item) => {
    return item.originalStock - item.sold === 0;
});

console.log(soldOut);


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
//Pseudo-code:
// Ik wil de bestaande objecten uit een array filteren op de aanwezigheid van de eigenschap "Ambilight", en de nieuwe array tonen.
// 1. Open de array inventory met de filter methode
// 2. Return alleen de items waarbij de optie Ambilight true is (dan is deze functie aanwezig).
// 3. Log het geheel in de console

const ambiLight = inventory.filter((item) => {
    return item.options.ambiLight === true;
});

console.log(ambiLight);


// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
//Pseudo-code:
// Ik wil de bestaande array sorteren op basis van de prijs, van laag tot hoog.
// 1. Open de array inventory met de sort methode
// 2. Check per item of de prijs-eigenschap groter of kleiner is dan de voorliggende prijseigenschap.
// 3. Wanneer de prijs lager is moet deze voor het vergelijk-object geplaatst worden
// 4. Wanneer de prijs hoger is moet deze na het vergelijk-object geplaatst worden
// 5. Wanneer de prijs gelijk is mag hij blijven staan waar hij staat
// 6. De nieuwe waarde wordt opgeslagen in de bestaande array
// 7. Log het geheel in de console

inventory.sort((a, b) => {
  if (a.price < b.price) {
      return -1;
  }
  else if (a.price > b.price) {
      return 1;
  }
  else return 0;
})

console.log(inventory);