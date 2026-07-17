// 📊 Profil és statisztika rendszer


let stats = JSON.parse(
    localStorage.getItem("casinoStats")
) || {

    name:"Játékos",

    games:0,

    wins:0,

    losses:0,

    totalWon:0,

    biggestWin:0

};



// Mentés

function saveStats(){

    localStorage.setItem(
        "casinoStats",
        JSON.stringify(stats)
    );

}



// Név módosítása

function changeName(){

    let name =
    prompt(
        "Add meg a játékosneved:",
        stats.name
    );


    if(name){

        stats.name=name;

        saveStats();

        updateProfile();

    }

}



// Játék indítása

function addGame(){

    stats.games++;

    saveStats();

}



// Nyert játék

function addWin(amount){


    stats.wins++;

    stats.totalWon += amount;


    if(amount > stats.biggestWin){

        stats.biggestWin = amount;

    }


    saveStats();

}



// Vesztett játék

function addLoss(){

    stats.losses++;

    saveStats();

}



// Profil frissítése

function updateProfile(){


    const profile =
    document.getElementById(
        "profile"
    );


    if(profile){

        profile.innerHTML = `

        <h2>👤 ${stats.name}</h2>

        🎮 Játékok: ${stats.games}<br>

        🏆 Nyerések: ${stats.wins}<br>

        ❌ Vereségek: ${stats.losses}<br>

        💰 Nyert zseton: ${stats.totalWon}<br>

        ⭐ Legnagyobb nyeremény: ${stats.biggestWin}

        <br><br>

        <button onclick="changeName()">
        Név módosítása
        </button>

        `;

    }

}



document.addEventListener(
"DOMContentLoaded",
()=>{

    updateProfile();

});