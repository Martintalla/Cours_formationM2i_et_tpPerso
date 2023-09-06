function salutation() {
    var nomSaisi = document.getElementById("nameToType").value;
    var AgeSaisi = document.getElementById("ageToType").value;
    var EmailSaisi = document.getElementById("emailToType").value;
    let message = "Bonjour " + nomSaisi + " tu as " + AgeSaisi + " ans" + " et ton email est " + EmailSaisi;
    let error ="Veuillez remplir tous les champs!"
    if (nomSaisi && AgeSaisi && EmailSaisi) {
        document.getElementById("resp1").innerHTML = message;
    }else{
        document.getElementById("resp1").innerHTML = error;

    }
}