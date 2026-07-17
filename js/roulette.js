const rouletteColors = [
    "piros",
    "fekete",
    "zöld"
];


function randomRouletteColor(){

    return rouletteColors[
        Math.floor(
            Math.random()*rouletteColors.length
        )
    ];

}



function spinWheel(){

    const wheel =
    document.getElementById("wheel");


    let rotation =
    1440 + Math.floor(Math.random()*720);


    wheel.style.transform =
    `rotate(${rotation}deg)`;

}



function playRoulette(choice){


    const bet = 50;


    if(!removeCoins(bet)){
        return;
    }



    spinWheel();



    setTimeout(()=>{


        const resultColor =
        randomRouletteColor();



        const result =
        document.getElementById(
            "roulette-result"
        );



        if(choice===resultColor){


            if(resultColor==="zöld"){

                addCoins(1000);

                result.innerHTML =
                "🎉 ZÖLD JACKPOT +1000";

            }
            else{

                addCoins(100);

                result.innerHTML =
                "🎉 Nyertél +100";

            }


        }
        else{


            result.innerHTML =
            "❌ Vesztettél. A kerék: "
            + resultColor;


        }



    },3000);


}