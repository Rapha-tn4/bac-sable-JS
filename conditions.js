

// strictement égal a 10
console.log(9 === 10)

// chaine de caractères differentes
console.log("Hello" !== "hello")


// si 8 est strictement superieur a 12
console.log(8 > 12)



// si b = b -> bien joue
// sinon -> dommage


let b = 8;
let c = 6;


if (b === c) {
    console.log("bien joue")

} else {
    console.log("dommage")
}


if (b === c) {
    console.log("cest pareil")
} else if (b > c) {
    console.log("b est superieur a c")
} else {
    console.log("b est inferieur a c")
}


let connect = true;

if (connect === true) {
    console.log("le ceme est co")
} else {
    console.log("le ceme est pas co")
}







if (nbr % 2 === 0) {
    console.log("nombre pair ! ")
} else {
    console.log("impair")
}




let meteo = "neige";





if ("meteo" === "pluie") {
    console.log("prends ton parapluie")
}
else if ("meteo" == "soleil") {
    console.log("prends une casquette")
} else if{
    console.log("prends tes bottes")
}



    if (age < 12) {
        console.log("enfant");
    }
    else if (age > 18) {
        console.log("adulte")
    }





let a =

if(a === b && b === c && a === c) {
    console.log("le triangle est equilaterales")
}
else if (a != b && b != c && a != c) {
    console.log("le triangle est quelcqonque")
}
else {
    console.log("le triangle est isocèle")
}






if (age >= 18 && membre fidelite || achat100) {
    console.log("Réduction accordée")
}
else {
    console.log("Réduction refusée")
}


function reduction(age, membre, achat) {
    // si la personne a plus de 18ans

    if (age > 18) {
        // si la personne ou a fait plus de de 100
        if (membre === true || achat > 100) {
            //  reduction accordee
            return "reduction accordee"
        } else { // sinon :
            // reduction refusee
            return "reduction refusee"

        }



    } else {
        // sinon :
        // reduction refusee
        return "reduction refusse : t'as pas 18 ans"
    }








function questionfeu(reponse){
    let reponse =prompt("quel est la couleur du feu");
    
    if(reponse === rouge){
        console.log("Je m'arrette")
    
    }else if(reponse === orange){
        console.log("Je freine !")
    
    }else if(reponse === vert){
        console.log("Je passe")
    
    }else (reponse === autre){
        console.log("Danger : feu défectueux !")
    }

   
}


let moyennesglo = (a,b,c,d);


// calcul moyenne globale

function calculcmoyenneglo(a,b,c,d){
    return (a+b+c+d)/4;
}
let moyg= calculcmoyenneglo(12,11,18,9)




// Commentaire

function commentaire(moyennesglo){
    if(moyennesglo >= 0 && moyennesglo <= 10 ){
        console.log( "Il faut travailler plus" )
    
    }else if(moyennesglo >=10 && moyennesglo <=13){
        console.log("Poursuivez vos efforts")
    
    }else if(moyennesglo >=13 && moyennesglo <=15){
        console.log("Bon travail")
    
    }else if(moyennesglo >=15 && moyennesglo <=17){
        console.log("Bravo ! ")
    }
    else if(moyennesglo >17){
        console.log("Félicitations !")
    }

}






// Bulletin 

// role : afficher le bulletin
//parametre : la moyenneglo et le commentaire
//return: l'affichage du bulletin



function bulletin(moyennesglo,commentaire){
    return (moyennesglo+" "+commentaire);

}

console.log(bulletin)
















