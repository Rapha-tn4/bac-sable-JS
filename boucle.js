





for (let i = 100; i > 0; i = i - 2) {
    console.log(i)
}




//role : afficher la table de multi d'un nombre passé
//parametre : nombre 






function tablemulti(nombre) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`)
    }
}






function punition() {

    // creer une boucle 

    for (let i = 1; i <= 50; i++) {

        // ecrit la phrase
        console.log("i will")

    }

}



function epelle(mot) {

    //phrase
    console.log(`le mot ${mot} contient ${mot.lenght} lettres`)
    //creer une boucle

    for (let i = 0; i < mot.lenght; i++) {
        console.log(mot.charAt(i))
    }

}


//creer un tableau panier de 6 fruits

let fruits2 = ["pomme", "ananas", "orange", "pasteque", "mangue", "peche"]

console.log(fruits2[0])
console.log(fruits2[fruits2.length - 1])
console.log(`le premier fruit du tableau est le ${fruits2[0]} et le dernier est ${[fruits2.length - 1]} `)





//tableau de notes 

const notes = [12, 9, 15, 17, 10];



//role : calculer la moyenne a partir d un tableau
// para : le tableau
// return : la moyenne


//creer une fonction
function calculmoyenne(notes) {

    let somme = 0;

    // recup les notes 
    notes.forEach(note => {

        //quand il en a une il l'additionne dans une variable

        somme = somme + notes;

    });


    //on divise la somme obtenu par le nbr de valeur

    let moyenne = somme / notes.lenght;

    //retourner le résultat

    return moyenne;


}






//role : afficher le resultat retourne par la fonction
// para : du resultat
// return : rien car elle affiche


function affichemoyenne(moyenne) {
    console.log(`la moyenne est : ${moyenne}`)
}


let moyenneEleve = calculmoyenne(notes)
affichemoyenne(moyenneEleve)








//tableau fruits
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes", "pommes", "poires", "cerises"];

var pommes = 0;
var cerises = 0;
var bananes = 0;
var poires = 0;







//compoter les nbr de chaque fruits
//parame : tableau de fruits
//return : le nbr total de chaque fruits


function comptefruits(tableauFruit) {

    let compteurPommes = 0;
    let compteurCerises = 0;
    let compteurPoires = 0;
    let compteurBananes = 0;

    tableauFruit.forEach(fruits => {

        if (fruits === "pommes") {
            compteurPommes++
        } else if (fruits === "cerises") {
            compteurCerises++
        } else if (fruits === "poires") {
            compteurPoires++
        } else if (fruits === "bananes") {
            compteurBananes++
        }




    })

    return `

il y a ${compteurBananes} Bananes;
il y a ${compteurPoires} Poires;
il y a ${compteurPommes} Pommes;
il y a ${compteurCerises} Cerises;
`

}



//afficher la phrase


function afficherpage(aAfficher) {
    document.querySelector("body").innerHTML += `<p>${aAfficher}</p>`
}



//Jackpot


let emoji = ["🥲", "😊", "🤬", "🤮"];

let triste = 1
let joyeux = 2
let enerver = 3
let degout = 4


//role tirer des emoji
//emoji
//les 3 emojis selectionnes

function emojiAlea() {
    //creer le tableau d'emoji

    let nbrAlea = Math.floor(Math.random() * 4)



    return emoji[nbrAlea]



}


//role :comparer les emoji
//para :Chiffre aleatoite
//return : le resultat
//function convers(nbrAlea){


// si le nbr alea ... est 4 fois le meme alors Jackopt

//if(nbrAlea === [0]  )




//}



let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]



function ficheeleve(tableaupromo11)

tableaupromo11.forEach(etudiant => {

    return `l'age de l'eleve est : ${eleve.age}
        son prénom est ${eleve.prenom}
        et il habite a ${eleve.ville}`
})



function ajouterAuBody(trucAafficher) {
    document.querySelector("body").innerHTML += trucAafficher

}

ajouterAuBody(`
    
    <div>
    <h2>${eleve.prenom}>/h2>
    <p>${eleve.age} ans </p>
    <p>${eleve.ville} ans </p>
    <p> Job : ${eleve.job} ans</p>
</div>

    
    
    
    
    `

)










