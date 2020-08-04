// Inserisci i kilometri
var km = prompt("Inserisci i kilometri");
// Inserisci l'età
var eta = prompt("Inserisci l'età");
// Calcolo del prezzo in base ai km
var prezzo = 0.21 * km;
console.log(prezzo);
// Calcolo sconto
if (eta <= 18) {
  var sconto = ((prezzo * 20) / 100);
} else if (eta >= 65) {
  var sconto = ((prezzo * 40) / 100);
} else {
  var sconto = 0;
}
console.log(sconto);
// prezzo con sconto appliacto
var prezzoScontato = (prezzo - sconto);
console.log(prezzo - sconto);

document.getElementById('ticket-s').innerHTML = "Prezzo con sconto applicato :" + " " + prezzoScontato + "€";
document.getElementById('ticket').innerHTML = "Prezzo :" + " " + prezzo + "€";
