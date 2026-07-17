// Virtuális pénztárca rendszer

let coins = Number(localStorage.getItem("casinoCoins")) || 1000;


// Egyenleg frissítése a képernyőn

function updateCoins() {

    const display = document.getElementById("coins");

    if(display){
        display.innerText = coins;
    }

    localStorage.setItem("casinoCoins", coins);

}



// Zseton levonása

function removeCoins(amount){

    if(coins >= amount){

        coins -= amount;

        updateCoins();

        return true;

    }

    alert("Nincs elég zseton!");

    return false;

}



// Zseton hozzáadása

function addCoins(amount){

    coins += amount;

    updateCoins();

}



// Aktuális egyenleg lekérése

function getCoins(){

    return coins;

}



// Indításkor frissítés

window.onload = function(){

    updateCoins();

};