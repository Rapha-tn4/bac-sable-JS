



let paragrapheAmettreEnrouge = document.querySelector("p")

paragrapheAmettreEnrouge.classList.add("red")

paragrapheAmettreEnrouge.classList



let bouton = document.querySelector("button")

bouton.addEventListener("click", ajouterunP)



function ajouterunP() {

    document.querySelector("#grosseBoite").innerHTML += `<p>lorem yrdyurcyrc</p>`

}



function scenario(tableauEmojis) {

}




/*
let btnJouer = document.querySelector("#btnJouer")

btnJouer.addEventListener("click", function () {
    scenario(emojisArray)
})



function ajouterAuBody(trucAafficher) {
    document.querySelector("resultat").innerHTML = trucAafficher
}

*/



//exo 1

let h1 = document.querySelector("#titre")

h1.classList.add("bg-blue")




//exo 2

//role : cacher, afficher
//parametre : element
//return : rien

    
document.querySelector("#btn").addEventListener("click" , function(){
 document.querySelector("#pa").classList.toggle("none")   
})


    

//exo 3

let boites = document.querySelectorAll(".boite")

console.log(boites)


boites.forEach(boite=>{
    boite.addEventListener("click" , function(){

        console.log(boite)
        boite.classList.toggle("bg-blue")
    })
})



//exo 4

let compteur = 0

document.querySelector("#btn2").addEventListener("click" , function(){

compteur+=1;



})





//exo 5











