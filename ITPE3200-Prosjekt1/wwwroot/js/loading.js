const timeout;

function lastehjul() {
    timeout = setTimeout(showPage, 30);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
}