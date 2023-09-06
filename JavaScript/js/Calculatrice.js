class Calculatrice{
    constructor(nbr1,nbr2){
        this.nbr1 = nbr1;
        this.nbr2 = nbr2;
    }

    addition(){
        return this.nbr1+this.nbr2;
    }
    soustraction(){
        return this.nbr1-this.nbr2;
    }
    muliplication(){
        return this.nbr1*this.nbr2;
    }
    division(){
        if (this.nbr2 !=0){
           let quotient = this.nbr1/this.nbr2;
            return quotient;
        }else{
            return "impossible de diviser par 0"
        }      
    }

}
let caluclatrice = new Calculatrice(5,0);
console.log(caluclatrice.division());