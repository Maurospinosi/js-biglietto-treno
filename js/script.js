// Inserisci i kilometri
var km = prompt("Inserisci i kilometri");
// Inserisci l'età
var eta = prompt("Inserisci l'età");
// Calcolo del prezzo in base ai km
var prezzo = 0.21 * km;
console.log(prezzo);

if (eta <= 18) {
  var sconto = ((prezzo * 20) / 100);
} else if (eta >= 65) {
  var sconto = ((prezzo * 40) / 100);
}
console.log(sconto);
document.getElementById('ticket').innerHTML = "Prezzo con sconto applicato :" + " " + (prezzo - sconto);
