$(function () {
    hentAlleKontoer()
    const id = window.location.search.substring(1);
    const url = "aksje/hent?" + id;

    $.get(url, function (aksjer) {
        let aksjeid = $("#id").val(aksjer.id);
        
        let aksjenavn = $("#navn").text(aksjer.navn);
        
        let aksjepris = $("#pris").text(aksjer.pris);
       
        let aksjeprosent = $("#prosent").text(aksjer.prosent);
        /*
        askjeid = JSON.stringify(aksjeid);
        aksjenavn = aksjenavn.toString();
        aksjepris = aksjepris.toString();
        aksjeprosent = aksjeprosent.toString();
        console.log(askjeid);
        askjeid = JSON.parse(JSON.parse(aksjeid));
        console.log(aksjeid);
        
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("idaksje", aksjeid);
            localStorage.setItem("navnaksje", aksjenavn);
            localStorage.setItem("prisaksje", aksjepris);
            localStorage.setItem("prosentaksje", aksjeprosent);

            document.getElementById("id").innerHTML = localStorage.getItem("idaksje");
            document.getElementById("navn").innerHTML = localStorage.getItem("navnaksje");
            document.getElementById("pris").innerHTML = localStorage.getItem("prisaksje");
            document.getElementById("prosent").innerHTML = localStorage.getItem("prosentaksje");
        } else {
            console.log("Her gikk noe galt");
        }
        */
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
        ut += "<tr>"+
              "<td id='id2'>"+konto.id+"</td>"+
              "<td id='navnKonto'>" + konto.navn + "</td>" +
              "<td id='land'>" + konto.land + "</td>" +
              "<td id='kontobalanse'>" + konto.kontobalanse + "</td>" +
              "</tr>";
    }
    ut += "</table>";
    $("#konto").html(ut)
}

function kjopAksje() {
    let antall = $("#antall").val();
    let pris = parseInt($("#pris").text());
    let sum = antall * pris;
    console.log($("#kontobalanse").text());
    let kontosum = parseInt($("#kontobalanse").text());
    let kontobalanse = kontosum - sum;
    console.log(kontobalanse);
    if (kontobalanse < 0) {
        alert("Ikke nok penger");
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
               console.log("hei");
            } else {
                alert("Feil i db D:");
            }
        });
    }
    $("#kontobalanse").html(kontobalanse);
}

