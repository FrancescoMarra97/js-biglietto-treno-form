const nameEl = document.getElementById("name"); 
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age")
const buttonEl = document.getElementById("button")

const formEl = document.querySelector("form")
/* console.log(formEl); */

const cardEl = document.querySelector("card-body")
function calculatePrice() {
    
let Km=Number(kmEl.value) ;
console.log(Km);

let age=Number(ageEl.value) ;
console.log(age);


//prezzo per km
let Price_km=0.21;

//prezzo totale senza sconti

let tot = Price_km * Km;


//se minorenne -20%
if (age < 18){
   tot = tot - (tot*0.20);
}
//se over 65 - 40%
else if (age >= 65){
   tot = tot - (tot*0.40);
} 
console.log(tot.toFixed(2)); 
return tot;
      
}   

buttonEl.addEventListener("click", calculatePrice)
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log(nameEl.value);
    console.log(kmEl.value);
    console.log(ageEl.value);
    

    const ticketEl=` <div> nome e cognome</div>
                    <div>km da percorrere</div>
                    <div>la tua età</div>
                    <div>il totale del biglietto</div>
                    `
    

})