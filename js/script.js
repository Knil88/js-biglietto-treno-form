//Generatore Biglietto Treno
let btn = document.getElementById("generate");
let btnReset = document.getElementById("reset")

btn.addEventListener("click",

function (event)
{
    event.preventDefault()
    let name = document.getElementById ("inputname").value;
    let distance = document.getElementById ("inputdistance").value;
    let age = document.getElementById ("inputage").value;
    const kmPrice = 0.21 ;
    console.log(kmPrice);
    let price = kmPrice * distance;
    console.log(price,"€");
    if(age == "minorenne"){
        let discount = price * 20 / 100;

        let salePrice =(price - discount).toFixed(2);

        salePrice = document.getElementById("ticketprice");

        console.log(salePrice,"€");
         }
         else if(age == "over65"){
            let overDiscount = price * 40 / 100;
            let overPrice = (price - overDiscount).toFixed(2);

            console.log(overPrice,"€").toFixed(2);

            overPrice = document.getElementById("ticketprice");
         }
         else(age == maggiorenne){
            price = price;

            price = document.getElementById("ticketprice");
         }
        
         

         

        


}

)
