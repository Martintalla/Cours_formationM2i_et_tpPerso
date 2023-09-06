class Voiture {

    constructor(couleur, puissance, vitesse) {
        this.couleur = couleur;
        this.puissance = puissance;
        this.vitesse = vitesse;
    }
    accelerer(){
        this.vitesse += 10
        return this.vitesse

    }

    freiner(){
        this.vitesse -= 30
        return this.vitesse
    }

    
}
let voiture =  new Voiture("gris", 121, 30);
console.log(voiture.accelerer());
console.log(voiture.freiner());