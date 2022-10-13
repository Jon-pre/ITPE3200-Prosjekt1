$(function () {

    const id = window.location.search.substring(1);
    const url = "aksje/hent?" + id;

    $.get(url, function (aksjer) {
        $("#id").val(aksjer.id);
        $("#navn").text(aksjer.navn);
        $("#pris").text(aksjer.pris);
        $("#prosent").text(aksjer.prosent);
    });
});