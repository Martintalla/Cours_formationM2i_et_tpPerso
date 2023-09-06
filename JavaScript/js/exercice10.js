function tablemultiplication(){
    var nombreEntre = Number(document.getElementById("numToType").value);
    var tab=[];
    for(var i=1; i<=10; i++){
        tab[i]=nombreEntre*i;
    }
    console.log(tab)

}