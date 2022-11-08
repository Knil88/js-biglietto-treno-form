//Generatore Biglietto Treno
let btn = document.getElementById("generate");

btn.addEventListener("click",

function (){
    let name = document.getElementById ("inputname").value;
    let distance = document.getElementById ("inputdistance").value;
    let age = document.getElementById ("inputage").value;
    const kmPrice = 0.21 ;
    console.log(kmPrice);
    let price = kmPrice * distance;
    console.log(price);


}

)
