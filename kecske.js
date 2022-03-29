window.addEventListener("load", init);


function init () {
    keszito();
    csonakKep();
    document.getElementById("kecske").addEventListener("click",kepmentes);
    document.getElementById("csonak").addEventListener("click",kepmentes);
    document.getElementById("farkas").addEventListener("click",kepmentes);
   
}

function ID (elem) {
    return document.getElementById(elem);
}

function keszito () {
    ID("keszito").innerHTML="Ódor Norbert";
    ID("keszito").style.textAlign="center";
    ID("keszito").style.fontSize="20px";
}

function csonakKep () {
    ID("csonak").innerHTML='<img src="kepek/csonak.png" alt="csonak">';
    ID("csonak").style.width="120px";
    //ID("csonak").style.backgroundColor="blue";
    //ID("csonak").style.float="center";
}

function kepmentes(){
    let lista = []
    lista.push();
    //ID(katt).innerHTML="<p>"+szimbolum+"</p>";
}
