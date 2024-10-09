const nameEl = document.getElementById("name"); 
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age")
const buttonEl = document.getElementById("button")

const formEl = document.querySelector("form")
/* console.log(formEl); */

const cardEl = document.querySelector(".card-body")


const nameOutput = document.getElementById("name-output");
const ageOutput = document.getElementById("age-output");
const kmOutput = document.getElementById("km-output");
const priceOutput = document.getElementById("price-output");

function calculatePrice() {
    
let Km=Number(kmEl.value) ;


let age=Number(ageEl.value) ;



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

return tot.toFixed(2);
      
}   

buttonEl.addEventListener("click", calculatePrice);

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log(nameEl);
    console.log(kmEl);
    console.log(ageEl);
    

   const ticketEl =
                    nameOutput.innerHTML = `<strong>Nome passeggero:</strong> ${nameEl.value}`;
                    ageOutput.innerHTML = `<strong>Età:</strong> ${ageEl.value}`;
                    kmOutput.innerHTML = `<strong>Km da percorrere:</strong> ${kmEl.value}`;
                    priceOutput.innerHTML = `<strong>Prezzo del biglietto:</strong> €${calculatePrice()}`
                   
                

    cardEl.insertAdjacentHTML("beforeend", ticketEl)                
})