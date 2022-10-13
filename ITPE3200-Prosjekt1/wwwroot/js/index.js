$(function () {
    hentAlle();
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
            "<td> <a class='btn btn-primary' href='kjop.html?id=" + aksje.id+"'> Klikk meg</a ></td > " +
            "<td> <a class='btn btn-danger' onclick='selgAksje("+ aksje.id + ")'>Klikk meg</a></td>" + 
            "</tr>"
           
    }
    ut += "</table"
       $("#aksjer").html(ut);
}
