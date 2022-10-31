$(function () {
    hentAlleKontoer();
    const loc = window.location.search.substring(1)
    const url = "aksje/hentKonto?" + loc;
    $.get(url, function (kontoer) {
        $("#id").val(kontoer.id)
        $("#navn").val(kontoer.navn)
        $("#land").val(kontoer.land)
        console.log($("#id").val(kontoer.id))
    })
});




function hentAlleKontoer() {
    $.get("aksje/hentAlleKontoer", function (kontoer) {
        formaterKontoer(kontoer);
    })
}



function formaterKontoer(kontoer) {
    ut2 = "<input type='hidden' id='id'/>"
    ut2 += "<table class='table table-dark'>" +
        "<tr>" +
        "<th>Navn</th><th>Land</th><th>KontoBalanse</th>" +
        "</tr>"

    for (let konto of kontoer) {
        ut2 += "<tr>" +
            "<td id='navnKonto'>" + konto.navn + "</td>" +
            "<td id='land'>" + konto.land + "</td>" +
            "<td id='kontobalanse'>" + konto.kontobalanse + "</td>" +
            "</tr>";
    }
    ut2 += "</table>";
    $("#konto").html(ut2)
}

function endreKonto() {
    const konto = {
        id: $("#id").val(),
        navn: $("#navn").val(),
        land: $("#land").val(),
    };
    console.log(konto);
    $.post("aksje/Endre", konto, function (OK) {
        if (OK) {
            console.log(OK);
            window.location.href = "konto.html";
        }
        else {
            alert("Feil i db D:");
        }
    });
}