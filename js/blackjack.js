// ♠ Blackjack - valódi kártyapakli


const suits = [
    "♠",
    "♥",
    "♦",
    "♣"
];


const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
];



// Pakli létrehozása

function createDeck(){

    let deck = [];

    for(let suit of suits){

        for(let value of values){

            deck.push({
                suit:suit,
                value:value
            });

        }

    }

    return deck;

}



// Lap értéke

function cardValue(card){

    if(
        card.value === "J" ||
        card.value === "Q" ||
        card.value === "K"
    ){
        return 10;
    }


    if(card.value === "A"){
        return 11;
    }


    return Number(card.value);

}



// Pontszám számítás

function calculateScore(hand){

    let score = 0;
    let aces = 0;


    hand.forEach(card=>{

        score += cardValue(card);

        if(card.value==="A"){
            aces++;
        }

    });


    while(score > 21 && aces > 0){

        score -= 10;

        aces--;

    }


    return score;

}



// Lap húzás

function draw(deck){

    return deck.splice(
        Math.floor(Math.random()*deck.length),
        1
    )[0];

}



// Játék

function playBlackjack(){


    const bet = 100;


    if(!removeCoins(bet)){
        return;
    }


    let deck = createDeck();


    let player = [
        draw(deck),
        draw(deck)
    ];


    let dealer = [
        draw(deck),
        draw(deck)
    ];



    let playerScore =
    calculateScore(player);


    let dealerScore =
    calculateScore(dealer);



    const playerCards =
    player.map(
        c=>c.value+c.suit
    ).join(" ");


    const dealerCards =
    dealer.map(
        c=>c.value+c.suit
    ).join(" ");



    const result =
    document.getElementById(
        "blackjack-result"
    );



    if(playerScore === 21){


        addCoins(300);


        result.innerHTML =
        `
        🎉 BLACKJACK!<br>
        Te: ${playerCards}
        (${playerScore})<br>
        Osztó: ${dealerCards}
        (${dealerScore})<br>
        +300 zseton
        `;

    }


    else if(
        playerScore > dealerScore &&
        playerScore <= 21
    ){


        addCoins(200);


        result.innerHTML =
        `
        ✅ Nyertél!<br>
        Te: ${playerCards}
        (${playerScore})<br>
        Osztó: ${dealerCards}
        (${dealerScore})<br>
        +200 zseton
        `;

    }


    else{


        result.innerHTML =
        `
        ❌ Vesztettél<br>
        Te: ${playerCards}
        (${playerScore})<br>
        Osztó: ${dealerCards}
        (${dealerScore})
        `;

    }

}