class Joueur {
    constructor(nom, position, buts_marques) {
        this.nom = nom;
        this.position = position;
        this.buts_marques = buts_marques;
    }

    comparaison(joueur2){
        if (joueur2.buts_marques>this.buts_marques){
            return joueur2.nom+" est meilleur que "+this.nom;
        }else if (joueur2.buts_marques<this.buts_marques){
            return this.nom+" est meilleur que "+joueur2.nom;
        }else{
            return this.nom+" a le même nombre de buts que "+joueur2.nom;
        }
    }
}

let joueur1 = new Joueur("Messi", "attaquant", 50);
let joueur2 = new Joueur("Ronaldo", "attaquant", 50);
console.log(joueur1.comparaison(joueur2));



