function serie5etoile() {
    var star = "*"
    for (var i = 0; i < 5; i++) {
        document.write(star);
    }
    document.write("<br/>");
    document.write("<br/>");
}

function serie5etoile4lignes() {
    var star = "*"
    var j = 0
    while (j < 4) {
        for (var i = 0; i < 10; i++) {
            document.write(star );
            console.log(star);
        }
        document.write("<br/>")
        document.write("<br/>")
        console.log("<br/>")
        j++;
    }
}
