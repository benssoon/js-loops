// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen... Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================
for(i=0; i<5; i++) {
    console.log('*'.repeat(i+1))
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
for (i=0; i<5; i++) {
    console.log("loop...");
}
console.log("klaar");


// ==========================================
// Opdracht 3. Maak een for-loop die automatisch factuurnummers genereert in het formaat INV-0001, INV-0002, enzovoorts. Zorg ervoor dat je begint bij nummer 1 en dat de nummers oplopen. Er zijn in totaal 8 factuurnummers nodig.

// Verwachte uitkomst:
// 'INV-0001'
// 'INV-0002'
// 'INV-0003'
// 'INV-0004'
// 'INV-0005'
// 'INV-0006'
// 'INV-0007'
// 'INV-0008'

// ==========================================
function addLeadingZeros(numToConvert, totNumDigits) {
    numZeros = totNumDigits - numToConvert.toString().length;
    zeros = '0'.repeat(numZeros);
    return `${zeros}${numToConvert}`;
}
// I used prompt, so this must be run in the browser to work properly.
// Couldn't figure out how to get a working user input in just the terminal.
let getNumInvoices = prompt("How many invoices do you need? For default of 8, just press Enter.")
if (getNumInvoices === "") {
    getNumInvoices = 8;
}
for(i=1; i<=getNumInvoices; i++) {
    console.log(`INV-${addLeadingZeros(i, 4)}`);
}

// ==========================================
// Opdracht 4. Schrijf een for-loop die van 9 tot en met 18 loopt en de uren logt.
// - Bij 10:00 en 14:00 moet de tekst "Koffiepauze!" toegevoegd worden
// - Bij 12:00 moet de tekst "Lunchpauze!" toegevoegd worden
// - Bij 17:00 moet de tekst "Bijna klaar..." toegevoegd worden

// Verwachte uitkomsten:
// 9:00
// 10:00
// 11:00
// 12:00 Lunchpauze!
// 13:00
// 14:00
// 15:00
// 16:00
// 17:00 Bijna klaar...
// 18:00
// ==========================================
for (i=9; i<=18; i++) {
    const message = {
        12: " Lunchpauze!",
        17: " Bijna klaar..."
    };
    console.log(`${addLeadingZeros(i, 2)}:00 ${message[i] || ''}`);
}
// ==========================================
// Opdracht 5. Maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
let tick = '';
let getNumber = prompt("Enter a number, or for default of 9, just press Enter.");
if(getNumber === '') {
    getNumber = 9;
}
for (i=0; i<=getNumber; i++) {
    if(i % 3 === 0 && i > 0 && i % 9 !== 0) {
        tick = '>'.concat(tick);
    }
    //console.log(`i: ${i}, i%3: ${i%3}, i%3===0: ${i%3===0}, tick: ${tick}`)
    if(tick.length === 1) {
        tick = tick.concat(' ');
    }
    console.log(`${tick}${i}`);
}

// ==========================================
// Opdracht 6 (BONUS). Schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz". Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz".

fizz = 'Fizz';
buzz = 'Buzz';
getNumber = prompt("Enter a number, or for default of 100, just press Enter.");
if(getNumber === '') {
    getNumber = 100;
}
for (i=0; i<=getNumber; i++) {
    if(i % 3 === 0 && i > 0) {
        console.log(fizz);
    } else if(i % 5 === 0 && i > 0) {
        console.log(buzz);
    } else {
        console.log(i);
    }
}


// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================



