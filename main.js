function calculatePrice() {
    
let numKm = Number(prompt("Inserire il numero di km da percorrere"));
console.log(numKm);

let age = Number(prompt("Inserisci la tua età"));
console.log(age);


//prezzo per km
let Price_km=0.21;

//prezzo totale senza sconti

let tot = Price_km * numKm;

//se minorenne -20%
if (age < 18){
   tot = tot - (tot*0.20);
}
//se over 65 - 40%
else if (age >= 65){
   tot = tot - (tot*0.40);
} 
    
console.log(tot.toFixed(2));   
}   