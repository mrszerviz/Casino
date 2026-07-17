// 🎰 Slot játék


const slotSymbols = [
    "🍒",
    "🍋",
    "⭐",
    "💎",
    "7️⃣"
];



// Véletlen szimbólum

function randomSymbol(){

    return slotSymbols[
        Math.floor(Math.random() * slotSymbols.length)
    ];

}



// Slot indítása

function playSlot(){
    playSound("spinSound");


    const bet = 50;


    if(!removeCoins(bet)){
        return;
    }



    const first = randomSymbol();
    const second = randomSymbol();
    const third = randomSymbol();



    document.getElementById("slot-display").innerHTML =
        `${first} ${second} ${third}`;



    const message =
        document.getElementById("slot-message");



    // Jackpot

    if(first === second && second === third){
        playSound("winSound");

        addCoins(500);


        message.innerHTML =
        "🎉 JACKPOT! +500 zseton";


    }


    // Két egyforma

    else if(
        first === second ||
        second === third ||
        first === third
    ){


        addCoins(100);


        message.innerHTML =
        "✨ Találat! +100 zseton";


    }


    else{
        playSound("loseSound");

        message.innerHTML =
        "😔 Nem nyert";


    }


}