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
        ut += "<td id='navn'>" + konto.navn + "</td>" +
              "<td id='land'>" + konto.land + "</td>" +
              "<td id='kontobalanse'>" + konto.kontobalanse+"</td>" +
              "</tr>"
    }
    ut += "</table>"
    $("#konto").html(ut)
}

function kjopAksje() {
    let antall = $("#antall").val();
    let pris = parseInt($("#pris").text());
    let sum = antall * pris;
    console.log($("#kontobalanse").text());
    let kontosum = parseInt($("#kontobalanse").text());
    let kontobalanse = kontosum - sum;
    console.log(kontobalanse)
    kontobalanse = kontobalanse.toString();
    console.log(kontobalanse)
    
    const konto = {
        navn: $("#navn").text(),
        land: $("#land").text(),
        kontobalanse: kontobalanse
    };
    console.log(konto);
        
    $.post("aksje/kjop", konto, ok => {
        if (ok) {
            alert("Suksess!");
        } else {
            alert("Feil i db D:");
        }
    });
    
}

