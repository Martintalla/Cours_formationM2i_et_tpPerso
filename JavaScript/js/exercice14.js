function conversion() {
    var amount = document.getElementById("sommeToType").value;
    //var amount=parseFloat(form.elements["amount"].value);
    var form = document.getElementById("conv");
    var currency=form.elements["currency"].value;
   

    zonemsg = document.getElementById("resp3")
    
    // document.getElementById("resp3").innerHTML = "Veuillez remplir tous les champs!"


     if (currency) {
          if (currency == "dollar") {
              zonemsg.innerHTML = amount + " euro(s) = " + (Math.round(amount * 1.1).toFixed(2)) + " dollar(s).";
          } else {
              zonemsg.innerHTML = amount + " dollar(s) = " + (Math.round(amount * 0.9).toFixed(2)) + " euro(s).";
              
          }
      } else {
          zonemsg.innerHTML=("Veuillez remplir tous les champs!");
          
      }
}

