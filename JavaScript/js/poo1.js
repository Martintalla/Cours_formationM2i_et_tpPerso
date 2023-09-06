class Personne {
    name;
    email;
    age;

    constructor(name, email, age){
        this.name =name;
        this.email =email;
        this.age =age
    }

    getInfo() {
        return "Je m'appelle "+this.name + " mon email c'est " + this.email+" et j'ai "+this.age+" ans";
    }
}
let personne = new Personne( "Glutron","thibaut@inetum.fr",15);
console.log(personne.getInfo());