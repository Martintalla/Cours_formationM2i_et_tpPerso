function CalcSwitch() {
    var valeur1Saisi = document.getElementById("num1ToType").value;
    var valeur2Saisi = document.getElementById("num2ToType").value;
    var opChoisie = document.getElementById("op").value;
    var zonemsg = document.getElementById("resp2")


    if (valeur1Saisi && valeur2Saisi && opChoisie) {
        switch (opChoisie) {

            case "+":
                //var addition = valeur1Saisi+ " "+op+" "+" "+valeur2Saisi +" = "+(parseFloat(valeur1Saisi)+parseFloat(valeur2Saisi));
                var addition = (parseFloat(valeur1Saisi) + parseFloat(valeur2Saisi));
                zonemsg.innerHTML = valeur1Saisi + " " + opChoisie + " " + " " + valeur2Saisi + " = " + addition;
                break;
            case "-":
                var soustraction = (parseFloat(valeur1Saisi) - parseFloat(valeur2Saisi));
                zonemsg.innerHTML = valeur1Saisi + " " + opChoisie + " " + " " + valeur2Saisi + " = " + soustraction;
                break;
            case "x":
                var multiplication = (parseFloat(valeur1Saisi) * parseFloat(valeur2Saisi));
                zonemsg.innerHTML = valeur1Saisi + " " + opChoisie + " " + " " + valeur2Saisi + " = " + multiplication;
                break;
            case "/":
                var division = (parseFloat(valeur1Saisi) / parseFloat(valeur2Saisi));
                zonemsg.innerHTML = valeur1Saisi + " " + opChoisie + " " + " " + valeur2Saisi + " = " + division;
                break;

        }
        }else{
            zonemsg.innerHTML="veuillez saisir au moins deux valeurs"

    }
}