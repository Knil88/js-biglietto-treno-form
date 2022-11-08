//Generatore Biglietto Treno
let btn = document.getElementById("generate");
let btnReset = document.getElementById("reset")
let cpCode = Math.floor(Math.random() * 10000) + 1;
let numticket = Math.floor(Math.random()* 100) + 1;
// creazione bottone genera con variabili prezzo numero carrozza e codice cp

btn.addEventListener("click",
// al click si avvia la funzione
function(event) {

    // impostiamo il value al campo input

    event.preventDefault()
    let name = document.getElementById ("inputname").value;
    let distance = document.getElementById ("inputdistance").value;
    let age = document.getElementById ("inputage").value;
    // dichiariamo il prezzo * km
    const kmPrice = 0.21 ;
    console.log(kmPrice);
    let price = (kmPrice * distance);
    console.log(price,"€");

    // output Nome Passegero
    document.getElementById("ticketname").innerHTML = `${name}`;

    // output cpcode
    document.getElementById("ticketcode").innerHTML = `CP ${cpCode}`

    //output numero carrozza
    document.getElementById("ticketcarrage").innerHTML = `${numticket}`

    //diamo una condizione se l'età è inferiore ai 18 anni

    if(age == "minorenne"){
        let discount = price * 20 / 100;
       
        let salePrice =(price - discount).toFixed(2);
       
       document.getElementById("ticketprice","€").innerHTML = `${salePrice}€`;
       document.getElementById("ticketoffer").innerHTML = `Sconto under 18`;
       

        console.log(salePrice,"€");
         }

          //diamo una condizione se l'età è superiore ai 65 anni

         else if(age == "over65"){
            let overDiscount = price * 40 / 100;
            let overPrice = (price - overDiscount).toFixed(2);

            console.log(overPrice,"€");
            
            
            document.getElementById("ticketprice").innerHTML = `${overPrice}€`;
            document.getElementById("ticketoffer").innerHTML = `Sconto over 65`;
            
         }

          //diamo una condizione se l'età non rientra in quelle elencate prima

         else if(age == "maggiorenne"){
            
           
           document.getElementById("ticketprice","€").innerHTML = `${price}€`;
           document.getElementById("ticketoffer").innerHTML = `Prezzo Base`;
          
            console.log(price,"€");
             }
             let myTicket = document.querySelector(".containerticket");
             myTicket.style.display="block";
}
)

// Impostiamo il button che dia un reset al form

btnReset.addEventListener("click",
function (event){
    event.preventDefault()
    document.getElementById("myform").reset();
}
)
