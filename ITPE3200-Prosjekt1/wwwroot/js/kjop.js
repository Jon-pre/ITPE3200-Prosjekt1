$(function () {
    hentAlleKontoer()
    const id = window.location.search.substring(1);
    const url = "aksje/hent?" + id;

    $.get(url, function (aksjer) {
        $("#id").val(aksjer.id);
        $("#navn").text(aksjer.navn);
        $("#pris").text(aksjer.pris);
        $("#prosent").text(aksjer.prosent);
    });
});


function hentAlleKontoer() {
    $.get("aksje/hentAlleKontoer", function (kontoer) {
        formaterKontoer(kontoer);
    })
}



function formaterKontoer(kontoer) {
    ut = "<table class='table table-dark'>" +
        "<tr>" +
        "<th>navn</th><th>land</th><th>KontoBalanse</th>" +
        "</tr>"

    for (let konto of kontoer) {
        ut += "<tr>";
        ut += "<td>" + konto.navn + "</td>" +
              "<td>" + konto.land + "</td>" +
              "<td>" + konto.kontobalanse + "</td>" +
              "</tr>"
    }
    ut += "</table>"
    $("#konto").html(ut)
}

function kjopAksje() {
    const id = window.location.search.substring(1);
    const url = "aksje/hent?" + id;

}