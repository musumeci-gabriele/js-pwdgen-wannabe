// AVVERTIMENTO PER L'UTENTE
alert("Questo sito ti rubera' tutti i tuoi dati. Grazie di aver preso visione, ora procedi.");

// INSERIMENTO NOME UTENTE
var nome = prompt("Inserisci il tuo nome :");
console.log(nome);

// INSERIMENTO COGNOME
var cognome = prompt("Inserisci il tuo cognome :");
console.log(cognome);

// INSERIMENTO COLORE PREFERITO
var colore = prompt("Inserisci il tuo colore preferito :");
console.log(colore);

// INSERIMENTO ANNO DI NASCITA
var anno = parseInt(prompt("Inserisci l'anno di nascita :"));
var annoCorrente = 2020;
var eta = annoCorrente - anno;
console.log(anno);

// GENERAZIONE PW SOLA
var passwordGen = nome + cognome + colore + eta;
document.getElementById("password").innerHTML = passwordGen;
