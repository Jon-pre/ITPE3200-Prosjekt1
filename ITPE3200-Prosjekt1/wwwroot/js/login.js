function loginn() {
        const bruker = {
            brukernavn: $("#brukernavn").val(),
            passord: $("#passord").val()
        }
        $.post("aksje/logInn", bruker, function (OK) {
            if (OK) {
                window.location.href = "index.html";
            } else {
                $("#feil").html("Feil i brukernavn eller passord");
            }
        }).fail(function () {
            $("#feil").html("Feil på serverside");
        });
}
