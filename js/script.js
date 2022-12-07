function maxDlzka(vstup){
    vstup.value=vstup.value.slice(0,3);
}


var vek = document.getElementById('vek');
var narodenie = document.getElementById('narod');

narodenie.onblur = function (){
    if(narodenie.value !== null && narodenie.value !== '') {
        document.getElementById("oznamNarodenie").innerHTML = ' ';
        document.getElementById("narod").style.backgroundColor = 'rgba(00,255,255,0%)';

    } else if(narodenie.value ===''){
        document.getElementById("oznamNarodenie").innerHTML = 'Toto pole je povinné!';
        document.getElementById("narod").style.backgroundColor = 'lightpink';
    }
    validateVek();
};

vek.onblur = function (){
    if(vek.value !== null && vek.value !== '') {
        document.getElementById("oznamVek").innerHTML = ' ';
        document.getElementById("vek").style.backgroundColor = 'rgba(00,255,255,0%)';

    } else if(vek.value ===''){
        document.getElementById("oznamVek").innerHTML = 'Toto pole je povinné!';
        document.getElementById("vek").style.backgroundColor = 'lightpink';
    }
    validateVek();
};


function validateVek() {
    var nar = narodenie.valueAsDate;
    var aktDatum = new Date();
    var vekZadany = parseInt(vek.value);


    var vekVypocet = aktDatum.getFullYear() - nar.getFullYear();
    var m = aktDatum.getMonth() - nar.getMonth();
    if (m < 0 || (m === 0 && aktDatum.getDate() < nar.getDate())) {
        vekVypocet--;
    }

    if(nar > aktDatum){
        narodenie.style.backgroundColor = 'lightpink';
        document.getElementById("oznamNarodenie").innerHTML = 'Ešte ste sa nenarodili!';
        return false;
    }

    if(vek.value === ''){
        vek.style.backgroundColor = 'lightpink';
        narodenie.style.backgroundColor = 'lightpink';
        document.getElementById("oznamVek").innerHTML = 'Toto pole je povinné!';
        if(narodenie.value === ''){
            document.getElementById("oznamNarodenie").innerHTML = 'Toto pole je povinné!';
            document.getElementById("narod").style.backgroundColor = 'lightpink';
        }
        return false;
    }

    if (vekZadany !== vekVypocet){
        vek.style.backgroundColor = 'lightpink';
        narodenie.style.backgroundColor = 'lightpink';
        document.getElementById("oznamVek").innerHTML = 'Vek sa nezhoduje s datumom narodenia!';
        return false;

    } else if(vek.value < 15){
        vek.style.backgroundColor = 'lightpink';
        narodenie.style.backgroundColor = 'lightpink';
        document.getElementById("oznamVek").innerHTML = 'Máte mene ako 15 rokov!';
        return false;
    } else{
        vek.style.backgroundColor = 'rgba(00,255,255,0%)';
        narodenie.style.backgroundColor = 'rgba(00,255,255,0%)';
        document.getElementById("oznamVek").innerHTML = ' ';
        return true;
    }
}


var sporty = document.getElementById('sporty');
var sportoviska = document.getElementById("sportoviska");
var vyberCasuCeny = document.getElementById("casCena");
var zoznamSportov=[];
var cenaCas=[];
zoznamSportov["Futbal"]=["Umelá tráva", "Živá tráva", "Hala"];
zoznamSportov["Lezenie"]=["Lezecká stena", "Lezecký trenažér"];
zoznamSportov["Plávanie"]=["Bazén", "Plavecký trenažér"];
cenaCas["0"]=["1hod. - 15€", "2hod. - 25€"];
cenaCas["1"]=["1hod. - 30€", "2hod. - 50€"];
cenaCas["2"]=["1hod. - 10€", "2hod. - 18€"];
cenaCas["3"] = ["1hod. - 8€", "2hod. - 15€"];
cenaCas["4"] = ["1hod. - 10€", "2hod. - 15€"];
cenaCas["5"] = ["1hod. - 10€", "2hod. - 18€"];
cenaCas["6"] = ["1hod. - 20€", "2hod. - 35€"];

sporty.onchange = function() {
    var thisArr = zoznamSportov[sporty.value];
    sportoviska.options.length=0;
    thisArr.forEach(function(item){ sportoviska.options[sportoviska.options.length]= new Option(item); });
    var indexSportoviska;
    switch (sporty.value) {
        case "Futbal":
            indexSportoviska = 0;
            break;
        case "Lezenie":
            indexSportoviska = 3;
            break;
        case "Plávanie":
            indexSportoviska = 5;
            break;
    }
    var thisArr2 = cenaCas[indexSportoviska];
    vyberCasuCeny.options.length=0;
    thisArr2.forEach(function(item){ vyberCasuCeny.options[vyberCasuCeny.options.length]= new Option(item); });

};

sportoviska.onchange = function () {
    var indexCenyACasu;
    switch (sportoviska.value) {
        case "Umelá tráva":
            indexCenyACasu = 0;
            break;
        case "Živá tráva":
            indexCenyACasu = 1;
            break;
        case "Hala":
            indexCenyACasu = 2;
            break;
        case "Lezecká stena":
            indexCenyACasu = 3;
            break;
        case "Lezecký trenažér":
            indexCenyACasu = 4;
            break;
        case "Bazén":
            indexCenyACasu = 5;
            break;
        case "Plavecký trenažér":
            indexCenyACasu = 6;
            break;

    }
    var thisArr = cenaCas[indexCenyACasu];
    vyberCasuCeny.options.length=0;
    thisArr.forEach(function(item){ vyberCasuCeny.options[vyberCasuCeny.options.length]= new Option(item); });
};


var muz = document.getElementById('muz');
var zena = document.getElementById('zena');
var pohlavie = null;
muz.onchange = function() {
    pohlavie = "muž";
    document.getElementById("doplnujuceInfo").innerHTML = 'Vaša váha (kg):';
    document.getElementById("infoP").placeholder = '80';
    document.getElementById("infoP").value = '';
    document.getElementById("infoP").style.backgroundColor = 'rgba(00,255,255,0%)';
    document.getElementById("oznamInfo").style.display = 'block';
    document.getElementById("infoP").style.display = 'block';
    document.getElementById("infoP").innerHTML = '';
    document.getElementById("pocitanieInfo").style.display = 'block';
};
zena.onchange = function() {
    pohlavie = "žena";
    document.getElementById("doplnujuceInfo").innerHTML = 'Vaša výška (cm):';
    document.getElementById("infoP").placeholder = '170';
    document.getElementById("infoP").value = '';
    document.getElementById("infoP").style.backgroundColor = 'rgba(00,255,255,0%)';
    document.getElementById("oznamInfo").style.display = 'block';
    document.getElementById("infoP").style.display = 'block';
    document.getElementById("infoP").innerHTML = '';
    document.getElementById("pocitanieInfo").style.display = 'block';
};

var info = document.getElementById("infoP");
function validateInfo (){

    if(info.value !== null && info.value !== '') {
        document.getElementById("oznamInfo").style.display = 'block';
        document.getElementById("oznamInfo").innerHTML = ' ';
        document.getElementById("infoP").style.backgroundColor = 'rgba(00,255,255,0%)';
        return true;

    } else if(info.value === ''){
        if(pohlavie !== null) {
            document.getElementById("oznamInfo").style.display = 'block';
            document.getElementById("oznamInfo").innerHTML = 'Toto pole je povinné!';
            document.getElementById("infoP").style.backgroundColor = 'lightpink';
        }
        return false;
    }
}

var telC = document.getElementById("telcislo");
function validateTelC(){
    telC = document.getElementById("telcislo");
    if(telC.value !== '') {
        var kontrola = telC.value.search(/^\+421\d{9}$/);

        if (kontrola !== 0) {
            telC.style.backgroundColor = 'lightpink';
            document.getElementById("upozornenieTelC").innerHTML = 'Zadajte správny formát telefónneho čísla!';
            return false;
        } else {
            telC.style.backgroundColor ='rgba(00,255,255,0%)';
            document.getElementById("upozornenieTelC").innerHTML = ' ';
            return true;
        }
    }
    return true;
}


function pocitadlo(input) {
    if(input.id === "meno") {
        document.getElementById("pocitanieMeno").innerHTML = input.value.length;
        document.getElementById("pocitanieMeno").innerHTML += "/20";
    }
    if(input.id === "priezvisko") {
        document.getElementById("pocitaniePriezvisko").innerHTML = input.value.length;
        document.getElementById("pocitaniePriezvisko").innerHTML += "/20";
    }
    if(input.id === "infoP") {
        document.getElementById("pocitanieInfo").innerHTML = input.value.length;
        document.getElementById("pocitanieInfo").innerHTML += "/3";
    }
    if(input.id === "vek") {
        document.getElementById("pocitanieVek").innerHTML = input.value.length;
        document.getElementById("pocitanieVek").innerHTML += "/3";
    }
    if(input.id === "email") {
        document.getElementById("pocitanieEmail").innerHTML = input.value.length;
        document.getElementById("pocitanieEmail").innerHTML += "/50";
    }
    if(input.id === "telcislo") {
        document.getElementById("pocitanieTelC").innerHTML = input.value.length;
        document.getElementById("pocitanieTelC").innerHTML += "/13";
    }
    if(input.id === "ineText") {
        document.getElementById("pocitanieRegen").innerHTML = input.value.length;
        document.getElementById("pocitanieRegen").innerHTML += "/200";
    }
}

var meno = document.getElementById("meno");

function validateMeno(){
    if(meno.value !== null && meno.value !== '') {
        document.getElementById("oznamMeno").innerHTML = ' ';
        document.getElementById("meno").style.backgroundColor = 'rgba(00,255,255,0%)';
        return true;

    } else if(meno.value === ''){
        document.getElementById("oznamMeno").innerHTML = 'Toto pole je povinné!';
        document.getElementById("meno").style.backgroundColor = 'lightpink';
        return false;
    }
}

var priezvisko = document.getElementById("priezvisko");
function validatePriezvisko(){
    if(priezvisko.value !== null && priezvisko.value !== '') {
        document.getElementById("oznamPriezvisko").innerHTML = ' ';
        document.getElementById("priezvisko").style.backgroundColor = 'rgba(00,255,255,0%)';
        return true;

    } else if(priezvisko.value ===''){
        document.getElementById("oznamPriezvisko").innerHTML = 'Toto pole je povinné!';
        document.getElementById("priezvisko").style.backgroundColor = 'lightpink';
        return false;
    }
}


var email = document.getElementById("email");
function validateEmail(){

    if(email.value === ''){
        document.getElementById("oznamEmail").innerHTML = 'Toto pole je povinné!';
        document.getElementById("email").style.backgroundColor = 'lightpink';
        return false;
    }
    var kontrola = email.value.search(/[a-z0-9._%+-]{3,}@[a-z0-9.-]+[.]+[a-z]{2,4}$/);
    if (kontrola === 0) {
        document.getElementById("oznamEmail").innerHTML = ' ';
        document.getElementById("email").style.backgroundColor = 'rgba(00,255,255,0%)';
        return true;

    } else {
        document.getElementById("oznamEmail").innerHTML = 'Zadajte email v platnom formáte!';
        document.getElementById("email").style.backgroundColor = 'lightpink';
        return false;
    }
}

var ine = document.getElementById("ine");
var ineRegen = document.getElementById('ineText');
ine.onchange = function (){
    if (ine.checked){
        validateRegen();
    }
    else{
        ineRegen.style.display = 'none';
        ineRegen.value = '';
        document.getElementById("pocitanieRegen").style.display = 'none';
        document.getElementById("oznamRegen").style.display = 'none';
    }
};

function  validateRegen (){
    ineRegen.style.display = 'block';
    document.getElementById("pocitanieRegen").style.display = 'block';
    document.getElementById("oznamRegen").style.display = 'block';
    if(ineRegen.value !== null && ineRegen.value !== '') {
        document.getElementById("oznamRegen").innerHTML = '';
        document.getElementById("ineText").style.backgroundColor = 'white';

    } else if(ineRegen.value ===''){
        document.getElementById("oznamRegen").innerHTML = 'Toto pole je povinné!';
        document.getElementById("ineText").style.backgroundColor = 'lightpink';
        return false;
    }
}

function validateDatumObjednavky(){
    var datum = document.getElementById("datum").valueAsDate;
    var aktDatum = new Date();

    if(datum === ''){
        document.getElementById("upozornenieDatum").style.display = 'block';
        document.getElementById("upozornenieDatum").innerHTML = 'Toto pole je povinné!';
        document.getElementById("datum").style.backgroundColor = 'lightpink';
        return false;
    }

    if(datum < aktDatum){

        document.getElementById("upozornenieDatum").style.display = 'block';
        document.getElementById("upozornenieDatum").innerHTML = 'Objednať je možné najskôr na zajtra!';
        document.getElementById("datum").style.backgroundColor = 'lightpink';
        return false;
    } else{
        document.getElementById("upozornenieDatum").innerHTML = '';
        document.getElementById("upozornenieDatum").style.display = 'none';
        document.getElementById("datum").style.backgroundColor = 'rgba(00,255,255,0%)';
        return true;
    }
}

function validateCasObjednavky(){
    var cas = document.getElementById("cas").valueAsDate;
    if(cas === null){
        document.getElementById("upozornenieCas").style.display = 'block';
        document.getElementById("upozornenieCas").innerHTML = 'Toto pole je povinné!';
        document.getElementById("cas").style.backgroundColor = 'lightpink';
        return false;
    }
    cas.setHours(cas.getHours() - 1);
    if((cas.getHours() < 8) || (cas.getHours() >= 20)){
        document.getElementById("upozornenieCas").style.display = 'block';
        document.getElementById("upozornenieCas").innerHTML = 'Zvolený čas je mimo otváracích hodín';
        document.getElementById("cas").style.backgroundColor = 'lightpink';
        return false;
    } else{
        document.getElementById("upozornenieCas").innerHTML = ' ';
        document.getElementById("upozornenieCas").style.display = 'none';
        document.getElementById("cas").style.backgroundColor = 'rgba(00,255,255,0%)';
        return true;
    }
}



var odoslatBut = document.getElementById("odoslat");

function validateForm(){
    var validny = 0;
    if(validateMeno()){
        validny++;
    }
    if(validatePriezvisko()){
        validny++;
    }
    if(validateVek()){
        validny++;
    }
    if(pohlavie !== null){
        validny++;
        document.getElementById("oznamPohlavie").innerHTML = '';
    } else{
        document.getElementById("oznamPohlavie").innerHTML = 'Toto pole je povinné!';
    }
    if(validateInfo()){
        validny++;
    }
    if(validateEmail()){
        validny++;
    }
    if(!validateTelC()){
        return 0;
    }
    if(validateDatumObjednavky()){
        validny++;
    }
    if(validateCasObjednavky()){
        validny++;
    }
    return validny === 8;

}

var skryteButton = document.getElementById("odkrytSkryte");
var txt = document.getElementById("skryte");
skryteButton.addEventListener("click",function (){

    if(txt.style.display !== "none"){
        txt.style.display = "none";
    } else{
        txt.style.display = "block";
    }
});

odoslatBut.addEventListener("click",function (){

    if(validateForm()) {

        var closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerHTML = "&times;";

        var modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContent.appendChild(closeBtn);

        var meno = document.getElementById("meno").value + " " + document.getElementById("priezvisko").value;
        var menoPar = document.createElement("p");
        menoPar.innerHTML = "Meno Priezvisko: " + meno;
        modalContent.appendChild(menoPar);

        var pohlaviePar = document.createElement("p");
        pohlaviePar.innerHTML = "Pohlavie: " + pohlavie;
        modalContent.appendChild(pohlaviePar);

        var infoPohlavie = document.getElementById("infoP").value;
        var infoPohlaviePar = document.createElement("p");
        infoPohlaviePar.innerHTML = "Doplnujuce info: " + infoPohlavie;
        if (pohlavie === "muž") {
            infoPohlaviePar.innerHTML += " kg";
        } else if (pohlavie === "žena") {
            infoPohlaviePar.innerHTML += " cm";
        }
        modalContent.appendChild(infoPohlaviePar);

        var narodenie = new Date(document.getElementById("narod").value);
        var narodeniePar = document.createElement("p");
        narodeniePar.innerHTML = "Narodenie: " + narodenie.getDate();
        narodeniePar.innerHTML += "." + (narodenie.getMonth() + 1);
        narodeniePar.innerHTML += "." + narodenie.getFullYear();
        modalContent.appendChild(narodeniePar);

        var vek = document.getElementById("vek").value;
        var vekPar = document.createElement("p");
        vekPar.innerHTML = "Vek: " + vek;
        modalContent.appendChild(vekPar);

        var email = document.getElementById("email").value;
        var emailPar = document.createElement("p");
        emailPar.innerHTML = "E-mail: " + email;
        modalContent.appendChild(emailPar);

        var telC = document.getElementById("telcislo").value;
        var telCPar = document.createElement("p");
        telCPar.innerHTML = "Tel. číslo: " + telC;
        modalContent.appendChild(telCPar);

        var sporty = document.getElementById("sporty").value;
        var sportoviska = document.getElementById("sportoviska").value;
        var casACena = document.getElementById("casCena").value;
        var sportyPar = document.createElement("p");
        var sportoviskaPar = document.createElement("p");
        var casACenaPar = document.createElement("p");
        sportyPar.innerHTML = "Šport: " + sporty;
        sportoviskaPar.innerHTML = "Športovisko: " + sportoviska;
        casACenaPar.innerHTML = "Cena a čas: " + casACena;
        modalContent.appendChild(sportyPar);
        modalContent.appendChild(sportoviskaPar);
        modalContent.appendChild(casACenaPar);

        var datum = new Date(document.getElementById("datum").value);
        var datumPar = document.createElement("p");
        datumPar.innerHTML = "Dátum rezervácie: " + datum.getDate();
        datumPar.innerHTML += "." + (datum.getMonth() + 1);
        datumPar.innerHTML += "." + datum.getFullYear();
        modalContent.appendChild(datumPar);

        var cas = document.getElementById("cas").value;
        var casPar = document.createElement("p");
        casPar.innerHTML = "Čas rezervácie: " + cas;
        modalContent.appendChild(casPar);

        var hodnota = 0;
        var regeneraciaPar = document.createElement("p");
        regeneraciaPar.innerHTML = "Regenerácia: ";

        var regen1 = document.getElementById("masaz");
        var regen2 = document.getElementById("virivka");
        var regen3 = document.getElementById("ine");

        if(regen1.checked){
            hodnota += parseInt(regen1.value.split(' ')[1]);
            regeneraciaPar.innerHTML += (regen1.name + ", ");
        }
        if(regen2.checked){
            hodnota += parseInt(regen2.value.split(' ')[1]);
            regeneraciaPar.innerHTML += (regen2.name + ", ");
        }
        if(regen3.checked){
            hodnota += parseInt(regen1.value.split(' ')[1]);
        }


        if(document.getElementById("ine").checked){
            regeneraciaPar.innerHTML += (document.getElementById("ineText").value);
        }

        modalContent.appendChild(regeneraciaPar);

        var cenaZaSport = casACena.split(' ');
        var aktCenaP = document.createElement("p");
        hodnota += parseInt(cenaZaSport[2]);
        aktCenaP.innerHTML = "Celková cena: " + hodnota + " €";
        document.getElementById("celkovaCena").value = hodnota + " €";
        modalContent.appendChild(aktCenaP);


        var defOdosli = document.createElement("button");
        defOdosli.type = "submit";
        defOdosli.innerHTML = "Odošli";

        modalContent.appendChild(defOdosli);

        var oknoNad = document.getElementById("oknoNad");
        oknoNad.innerHTML = "";
        oknoNad.appendChild(modalContent);
        oknoNad.style.display = 'block';

        closeBtn.addEventListener("click", function () {
            oknoNad.style.display = 'none';
        });
        defOdosli.addEventListener("click",function (){
            document.getElementById("myForm").submit();
        });
    }
});


