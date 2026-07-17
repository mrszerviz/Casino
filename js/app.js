// Casino Simulator vezérlő


// Játék megnyitása

function openGame(gameName){

    const games = document.querySelectorAll(".game");


    games.forEach(game => {

        game.classList.add("hidden");

    });


    const selected = document.getElementById(gameName);


    if(selected){

        selected.classList.remove("hidden");

    }

}



// Kezdő állapot

document.addEventListener("DOMContentLoaded",()=>{

    openGame("slot");

});

document.querySelectorAll("button")
.forEach(button=>{

    button.addEventListener(
        "click",
        ()=>{
            playSound("clickSound");
        }
    );

});