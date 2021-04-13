/*var maVar ="ma valeur";
(function(){
    var maVar = "Valeur locale";
    console.log(maVar);
})();*/

/*function Calcul(num1,num2){
    if(num2!=0){
        return num1/num2;
    }else{
        console.log("Erreur: division par 0!");
    }
}

var numero1=3;
var numero2=5;
console.log(numero1 + "/" + numero2 + "=" + Calcul(numero1,numero2));*/

/*(function(){
    var soldes="Toyota";
    function carTypes(nom){
        return(nom==="Honda") ?
        nom: "Desolé, nous ne vendons pas de "+ nom;
    }
    var voiture{
        marque: "Toyota",
        getVoiture: carTypes("Hondaa")
    };
    console.log(voiture.marque);
    console.log(voiture.getVoiture); 
})*/

//EXO 1
/*function carre(b) { 

return b*b; 

} 

// Afficher la sortie 

console.log(carre(2)); 

console.log(carre(4)); 

//EXO 2 
function somme100(a,b){
    return (a+b)<100;
}
var a=50;
var b=2;
console.log("La somme de"+ a +" et " + b + "est-elle inferieure a 100 ?" + somme100(a,b));
var a=50;
var b=62;
console.log("La somme de"+ a +" et " + b + "est-elle inferieure a 100 ?" + somme100(a,b));*/

//EXO 3
/*function test(a,b){
    return a===b;
}
var a=51;
var b="51";
console.log("Test d'egalite de " + a + " et " + b + test(a,b));

var a=51;
var b=51;
console.log("Test d'egalite de " + a + " et " + b + test(a,b));

//EXO 4


function reverseTab(tab) { 

  let res = []; 

  for (let i = tab.length -1; i > -1; i--) { 

    res.push(tab[i]); 

  } 

   

  return res; 

} 

// Afficher la sortie 

console.log(reverseTab([1, 2, 3])); 

console.log(reverseTab([1, 1, 2, 2, 3]));

//EXO5

function last(tab){
    return tab[tab.length-1];
}

var tab=[1,5,9,877,"PSG"];
console.log("Dernier element de " + tab + "=" + last(tab));*/

//EXO RANDOM CLIENT
/*var Noms=[];
function tirage(){
    let index = Math.floor( Math.random(Noms) * (Noms.length) );
    let m=Noms[index];
    console.log("Client tiré au sort " + m);
    return m;
}

function add_nom(){
    var nom=prompt("Saisir un nom");
    Noms.push(nom);
}*/

//console.log(Math.floor(2.6));

//For in
var tab=["Paris","Nantes", "Lyon"];
for(let name of tab){
    console.log(name);
}







