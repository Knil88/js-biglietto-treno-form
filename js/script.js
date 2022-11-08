//Generatore Biglietto Treno
let btn = document.getElementById("generate");
let btnReset = document.getElementById("reset")
let cpCode = Math.floor(Math.random() * 10000) + 1;
let numticket = Math.floor(Math.random()* 100) + 1;
// creazione bottone genera con variabili prezzo numero carrozza e codice cp

btn.addEventListener("click",
function(event) {
    event.preventDefault()
    let name = document.getElementById ("inputname").value;
    let distance = document.getElementById ("inputdistance").value;
    let age = document.getElementById ("inputage").value;
    const kmPrice = 0.21 ;
    console.log(kmPrice);
    let price = (kmPrice * distance);
    console.log(price,"€");
    if(age == "minorenne"){
        let discount = price * 20 / 100;
       
        let salePrice =(price - discount).toFixed(2);
        document.getElementById("ticketname").innerHTML = `${name}`;
       document.getElementById("ticketprice","€").innerHTML = `${salePrice}€`;
       document.getElementById("ticketoffer").innerHTML = `Sconto under 18`;
       document.getElementById("ticketcode").innerHTML = `CP ${cpCode}`
       document.getElementById("ticketcarrage").innerHTML = `${numticket}`

        console.log(salePrice,"€");
         }
         else if(age == "over65"){
            let overDiscount = price * 40 / 100;
            let overPrice = (price - overDiscount).toFixed(2);

            console.log(overPrice,"€");
            
            document.getElementById("ticketname").innerHTML = `${name}`;
            document.getElementById("ticketprice").innerHTML = `${overPrice}€`;
            document.getElementById("ticketoffer").innerHTML = `Sconto over 65`;
            document.getElementById("ticketcode").innerHTML = `CP ${cpCode}`;
            document.getElementById("ticketcarrage").innerHTML = `${numticket}`
         }
         else if(age == "maggiorenne"){
            
            document.getElementById("ticketname").innerHTML = `${name}`;
           document.getElementById("ticketprice","€").innerHTML = `${price}€`;
           document.getElementById("ticketoffer").innerHTML = `Prezzo Base`;
           document.getElementById("ticketcode").innerHTML = `CP ${cpCode}`;
           document.getElementById("ticketcarrage").innerHTML = `${numticket}`
            console.log(price,"€");
             }
             let myTicket = document.querySelector(".containerticket");
             myTicket.style.display="block";
}
)

btnReset.addEventListener("click",
function (event){
    event.preventDefault()
    document.getElementById("myform").reset();
}
)
