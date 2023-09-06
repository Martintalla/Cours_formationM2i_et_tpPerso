function Msg(name = "Martin ") {
    document.write("Hello! " + name);
}
//Msg("tout le monde");
document.write("<br>");
//Msg();
document.write("<br>");

let date = new Date();
/*let firstname = "MARTIN";
let message = "tu commences tes premiers pas avec JS";
let bonjour = `Bonjour ${firstname} ${message}`;
document.write(bonjour);
//document.write("<br>");*/

let mydate= " nous somme le :" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
function ladate() {
    document.write(mydate);
}
