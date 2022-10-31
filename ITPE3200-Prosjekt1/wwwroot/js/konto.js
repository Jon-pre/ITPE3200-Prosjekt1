$(function(){
    hentAlleKontoer();
});




function hentAlleKontoer() {
    $.get("aksje/hentAlleKontoer", function (kontoer) {
        formaterKontoer(kontoer);
    })
}



function formaterKontoer(kontoer) {
    ut2 = "<table class='table table-dark'>" +
        "<tr>" +
        "<th>Navn</th><th>Land</th><th>KontoBalanse</th>" +
        "</tr>"

    for (let konto of kontoer) {
        ut2 += "<tr>" +
            "<td id='navnKonto'>" + konto.navn + "</td>" +
            "<td id='land'>" + konto.land + "</td>" +
            "<td id='kontobalanse'>" + konto.kontobalanse + "</td>" +
            "<td> <a class='btn btn-info' href='endre.html?id="+konto.id+"'>endre</a></td>"
            "</tr>";
    }
    ut2 += "</table>";
    $("#konto").html(ut2)
}