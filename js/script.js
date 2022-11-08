
//Chiedere il nome

let userName = 

//Chiedere quanti chilometri si vuole percorrere

let route = parseInt (prompt ("Salve e benvenuto, quanti chilometri vuole percorrere con la nostra compagnia?") );

console.log ("Lei vuole percorrere", route,"chilometri" );

//Chiedere l'età

let userAge = parseInt(prompt("Quale è la sua età?"))

console.log ("Lei ha",userAge,"anni");
//impostare prezzo base e prezzo per chilometro
const kmPrice = 0.21

console.log(kmPrice,"€ è il prezzo a chilometro");

let ticketPrice = route * kmPrice;

console.log ("Il prezzo del suo biglietto è", ticketPrice,"€");

//impostare lo sconto se l'utente ha meno di 18 anni

if(userAge < 18){

let discount = ticketPrice * 20 / 100;

let salePrice =(ticketPrice - discount);

console.log(salePrice)

//output sconto 20%

document.getElementById("thank").innerHTML = `Grazie per avere scelto Trenitalia`;
document.getElementById("picture").innerHTML ;
document.getElementById("route").innerHTML = `Lei percorrerà ${route} chilometri`;
document.getElementById("age").innerHTML = `Lei ha ${userAge} Anni`;
document.getElementById("price").innerHTML = `il prezzo del suo biglietto è ${salePrice.toFixed(2)}€ con sconto al 20%`;



}

//impostare lo sconto se l'utente ha più di 65 anni

else if(userAge >=65){
    let oldDiscount = ticketPrice * 40 / 100;
    let agePrice = (ticketPrice - oldDiscount);

    console.log(agePrice)

//output sconto 40%

    document.getElementById("thank").innerHTML = `Grazie per avere scelto Trenitalia`;
    document.getElementById("picture").innerHTML  ;
    document.getElementById("route").innerHTML = `Lei percorrerà ${route} chilometri`;
    document.getElementById("age").innerHTML = `Lei ha ${userAge} Anni`;
    document.getElementById("price").innerHTML = `il prezzo del suo biglietto è ${agePrice.toFixed(2)}€ con sconto al 40%`;
    

}

//output normale

else{
    document.getElementById("thank").innerHTML = `Grazie per avere scelto Trenitalia`;
    document.getElementById("picture").innerHTML ;
    document.getElementById("route").innerHTML = `Lei percorrerà ${route} chilometri`;
    document.getElementById("age").innerHTML = `Lei ha ${userAge} Anni`;
    document.getElementById("price").innerHTML = `il prezzo del suo biglietto è ${ticketPrice.toFixed(2)}€`;
}





