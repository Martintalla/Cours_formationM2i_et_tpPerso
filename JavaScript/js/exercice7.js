function random(){
    /*Effectuer un tirage au sort,de 0 à 10.
    Affichez le nombre d’essais réalisés avant de trouverle bon nombre.
Réaliser ce script avec l’instruction while.*/
var randomNumberToFind = Math.round(Math.random()*10);
var randomNumberInitial = Math.round(Math.random()*10);
var i =1;

while( randomNumberInitial != 5){
    
    randomNumberInitial = Math.round(Math.random()*10);

    i++
}
document.write("Le nombre recherche est : "+randomNumberToFind +"<br/>");
document.write("Le nombre d'essaie est : " +i+"<br/>");
}