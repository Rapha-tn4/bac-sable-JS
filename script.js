console.log("salut") 


let age = 17; // une variable dont le contenu peut évoluer
const vitesseLumiere = 380000; // une variable qui n'évoluera jamais : une constante




let connecte = false;


console.log(connecte);



age +=3

console.log(age)

let i = 0;

i +=1

let prenom = "Raphaël "
let nom = "Royer"

let nomComplet =  nom + prenom;

console.log(nomComplet)



console.log( "salut"+ nomComplet + "c'est comment")


let phrase = "hjdvgqfvbufqv";

console.log(phrase.lenght) // connaitre la longeur de la phrase


//exo 6
let mot = "kawak"

console.log(mot.replaceAll("k","p")) // rempplacer une lettre dans un mot k par p

//exo 7


let mot2 = "pelican"

let dernier = mot2.length-1

console.log(mot2.length)
console.log(mot2.indexOf("p"))
console.log(mot2[dernier])






let = naissance = 2007
let = future = 2016

let = age = future-naissance;

console.log(age)


let francais = 17;
let maths = 8;
let geographie = 13;
let musique = 11

let = resultat = francais+maths+geographie+musique;

console.log(resultat/4)


//je crée ma fonction
function direbonjour(prenom){
    console.log(`bonjour ${prenom}`)
}

// je lance ma fonction
direbonjour("Raphaël");


// role : additionner deux chiffres
//parametre : deux chiffres
//return: le resultat

function additionner(a, b){
    return a+b;
}

console.log(additionner(5,2))




// role : faire une moyenne
//parametre : 4 chiffres
//return: le resultat des 4

function moyenne(a,b,c,d){
    return (a,b,c,d)/4;
    
}
//flemme

console.log(moyenne)


// role : décrementer
//parametre : rien
//return: rien

let stock = 6;
console.log(stock)

function decrement(){
    stock -1;
}

decrement();
console.log(stock)



// role : afficher en dernier
//parametre : le mot
//return: rien

function finmot(mot){
    let pos = mot.lenght-1 // position de la dernière lettre du mot
    
    console.log(mot.charAt(pos))
}




// role : remplacer le produit bubble tea
//parametre : les produits
//return: 

function nouvelleoffre(nouveauProduit, listeInitiale){
    console.log(listeInitiale.replace("bubble tea", nouveauProduit))

}

nouvelleoffre("matcha", "cafe,bubble tea, tisane")


// role : ajouter des balises pour html
//parametre : la balise a ajouter
//return: rien



function ajouterbalise(balise){

    document.querySelector("body").innerHTML+= balise
}


ajouterbalise("<h1>Wsh</h1>")

ajouterbalise("<p> débordeuh</p>")


// role : vérifier une adresse mail
//parametre : le mail
//return: vérification


let mail= "@gmail.com";

function verifemail(verification){
return verification.includes("@");
}
console.log(verifemail(mail));



// role : afficher l'addition deux valeurs
//parametre : les valeurs à ajouter
//return: le résultat


function ajouter(a, b){
    return a+b;
}

console.log(ajouter(5,2))





// role : poser une question
//parametre : 
//return: la réponse


function poserquestion(){
let reponse =prompt("ma question");
return reponse;
}

console.log(poserquestion());


//role : fonction qui convertir un montant en euros en dollars
//paramètre : montant (en paramètre) à convertir
//return: résultat de la conversion

function conversionDoll(e){
     return e * 1.17;
     
}
console.log(conversionDoll(15));


//role : retourner le 3ème élément
//paramètre : listes
//return: afficher l'élément en question

function afficherelements(liste){
    let elements = liste.split (",");
    return elements [2];

}
console.log (afficherelements("pomme, orange, banane"));

//role : demander un prix et un taux de change à l'utilisateur
// paramètre : un prix et un taux de change
// return : prix convertit


function convertisseur(){

    //demande le prix à convertir
    let prix = parseFloat(prompt("quel prix veux tu convertir ? "))
    

    // demande le taux
    let taux = parseFloat(prompt("a quel taux ?"))

    //convertit
    return prix * taux

    // retourne le resultat
}

let prixConvertit=convertisseur()


alert(`le prix est de ${prixConvertit} dollars`)



//role : calculer une moyenne a partir des notes donné par l'utilisateur
// paramètre : les moyennes
// return : les moyennes calculés

function calculmoyenne(){

    // demander note français et convertir en type number
let francais = parseFloat(prompt("note de francais ?"))

    // demander note maths et convertir en type number


    // demander note histoire et convertir en type number

    // demander note svt et convertir en type number

    // calculer moyenne
 let moyenne= (francais + maths + svt + histoire)/4

    // retourner moyenne
return ;


}

let moyenneg = calculmoyenne
 alert (`la moyenne est de ${moyenneg}`) 
 
 

    

2=== 1+1
2==="2"
2=="2"
"b">"a"
"b"+"a"
"a"+"b" ==="ab"
"mot".length===3
"Nicolas".charAt(3) ==="a"



















