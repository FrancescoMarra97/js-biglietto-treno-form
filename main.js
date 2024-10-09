const nameEl = document.getElementById("name"); 
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age")
const buttonEl = document.getElementById("button")

const formEl = document.querySelector("form")
/* console.log(formEl); */

const cardEl = document.querySelector(".card-body")

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
    

   const ticketEl =` <div> ${nameEl.value} </div>
                    <div> ${kmEl.value} </div>
                    <div> ${ageEl.value} </div>
                   
                    `

    cardEl.insertAdjacentHTML("beforeend", ticketEl)                
})