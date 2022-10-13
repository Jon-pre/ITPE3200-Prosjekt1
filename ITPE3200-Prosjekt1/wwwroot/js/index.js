$(function () {
    hentAlle();
    hentAlleKontoer();
});

function hentAlle() {
    $.get("aksje/hentAlle", function (aksjer) {
        formaterAlle(aksjer);
    });
}


function formaterAlle(aksjer) {
    let ut = "<table class='table table-dark'>" +
        "<tr><th>Navn</th><th>pris</th><th>prosent</th><th>Kjøp</th><th>Selg</th></tr>";

    for (let aksje of aksjer) {
        ut += "<tr>"+
            "<td>" + aksje.navn + "</td>" +
            "<td>" + aksje.pris + "</td>" +
            "<td>" + aksje.prosent + "</td>" +
            "<td> <a class='btn btn-primary' href='kjop.html?id=" + aksje.id+"'>Kjøp</a ></td > " +
            "<td> <a class='btn btn-danger' onclick='selgAksje("+ aksje.id + ")'>Selg</a></td>" + 
            "</tr>"
           
    }
    ut += "</table"
       $("#aksjer").html(ut);
}

function hentAlleKontoer() {
    $.get("aksje/hentAlleKontoer", function (kontoer) {
        formaterKontoer(kontoer);
    })
}



function formaterKontoer(kontoer) {
    ut2 = "<table class='table table-dark'>" +
        "<tr><th>navn</th><th>land</th><th>KontoBalanse</th></tr>";

    for (let konto of kontoer) {
        ut2 +="<tr>"+
            "<td>" + konto.navn + "</td>" +
            "<td>" + konto.land + "</td>" +
            "<td>" + konto.kontobalanse + "</td>" +
            "</tr>";
    }
    ut2 += "</table>"

    $("#konto").html(ut2);
}
