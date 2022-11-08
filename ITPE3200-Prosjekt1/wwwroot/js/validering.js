function validerInputAntall(antall) {
    const regexp = /^[0-9]{1,}$/;
    const ok = regexp.test(antall);
    if (!ok) {
        $("#feilAntall").html("må bestå av tall");
        return false;
    } else {
        $("#feilAntall").html("");
        return true;
    }
}

function validerNavn(navn) {
    const regexp = /^[a-zA-ZøøæåØÆÅ\. \-]{2,20}$/;
    const ok = regexp.test(navn);
    if (!ok) {
        $("#feilnavn").html("Må bestå av 2-20 karakterer");
        return false;
    } else {
        $("#feilnavn").html("")
        return true;
    }
}
function validerEtternavn(etternavn) {
    const regexp = /^[a-zA-ZøøæåØÆÅ\. \-]{2,50}$/;
    const ok = regexp.test(etternavn);
    if (!ok) {
        $("#feiletternavn").html("Må bestå av 2-50 karakterer");
        return false;
    } else {
        $("#feiletternavn").html("");
        return false;
    }
}
function validerLand(land) {
    const regexp = /^[a-zA-ZøøæåØÆÅ\. \-]{2,50}$/;
    const ok = regexp.test(land);
    if (!ok) {
        $("#feilland").html("Må bestå av 2-50 karakterer");
        return false;
    } else {
        $("#feilland").html("");
        return false;
    }
}