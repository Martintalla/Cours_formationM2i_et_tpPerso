function tableau() {
    var table = [
        {ine :1230, nom :"ALLON", prenom:"LEVY", specialite:"Techniques Informatiques et Numériques", moyenne:13, mention:"Bien"},
        {ine :1231,nom:"BACARD", prenom:"HUGO",specialite:"Conception & Développement Informatique", moyenne :12,  mention:"A Bien"},
        {ine : 1232, nom:"BAKER", prenom:"MATTHEW", specialite:"Informatique Pour les Sciences", moyenne :14, mention :"Bien"},
        {ine :1233, nom:"BALWE", prenom:"CHETAN", specialite:"Bioinformatique",  moyenne:18,  mention:"Excellent"},
        {ine :1234, nom:"BELAIR", prenom:"LUC",specialite:"Informatique de Gestion",moyenne:13, mention:"A Bien"}];
    
    for (var m in table[1]){
        document.write(table[1][m]+" | ");
    }
    document.write("<hr>");
    for(var l in table){
        for(var c in table[l]){
            document.write(table[l][c]+" | ");
        }
        document.write("<br/>");

    }
}