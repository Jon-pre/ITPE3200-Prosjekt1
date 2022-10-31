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
        "<th>id</th><th>navn</th><th>land</th><th>KontoBalanse</th>" +
        "</tr>"

    for (let konto of kontoer) {
        ut += "<tr>" +
            "<td id='id2'>" + konto.id + "</td>" +
            "<td id='navnKonto'>" + konto.navn + "</td>" +
            "<td id='land'>" + konto.land + "</td>" +
            "<td id='kontobalanse'>" + konto.kontobalanse + "</td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#konto").html(ut)
}


function selgAksje() {
    let antall = $("#antall").val();
    let pris = parseInt($("#pris").text());
    let sum = antall * pris;
    console.log($("#kontobalanse").text());
    let kontosum = parseInt($("#kontobalanse").text());
    let kontobalanse = kontosum + sum;
    console.log(kontobalanse);
    if (kontobalanse > 1000000) {
        alert("U though D:<");
    } else {

        kontobalanse = kontobalanse.toString();
        let id = $("#id2").text();
        console.log(id);
        const konto = {
            id: $("#id2").text(),
            navn: $("#navnKonto").text(),
            land: $("#land").text(),
            kontobalanse: kontobalanse
        };
        console.log(konto);


        $.post("aksje/kjop", konto, ok => {
            if (ok) {
                window.location.href = "index.html";
            } else {
                alert("Feil i db D:");
            }
        });
    }
    $("#kontobalanse").html(kontobalanse)
}





