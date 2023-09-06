function avg() {
    var students = [
        { ine: 1231, name: "Damienn", avg: 18 },
        { ine: 1232, name: "Aurélie", avg: 16 },
        { ine: 1233, name: "Barbara", avg: 19 }
    ];

    var ineSaisi = document.getElementById("ine").value;
    var zonemsg =document.getElementById("resp");
    var msg ="L'étudiant n'existe pas!";

    for(k in students){
        if(ineSaisi == students[k]["ine"]){
          msg= students[k]["name"] +" a eu "+students[k]["avg"] +"/20.";
            break;

        }
    }
    zonemsg.innerHTML=msg;

}