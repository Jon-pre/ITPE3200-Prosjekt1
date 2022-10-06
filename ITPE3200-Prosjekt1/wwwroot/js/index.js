$(function () {
    hentAlle();
});

function hentAlle() {
    $.get("Aksje/hentAlle", function (aksjer) {
        formaterAlle(aksjer);
    });
}


function formaterAlle(aksjer) {
    let ut = "<Table class='table table-dark'>" +
        "<tr><th>Navn</th><th>pris</th><th>prosent</th><th>Kjøp</th></tr>";

    for (let aksje in aksjer) {
        ut += "<tr>"+
            "<td>" + aksje.navn + "</td>" +
            "<td>" + aksje.pris + "</td>" +
            "<td>" + aksje.prosent + "</td>" +
            "<td> <a class='btn btn-primary' onclick='kjøpaksje(" + aksje.id + ")'</td>" +
            "<tr>"
           
    }
    ut += "</table"
       $("#aksjer").html(ut);
}
