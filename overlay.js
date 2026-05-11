document.addEventListener("DOMContentLoaded", function () {

    function add(id, html) {
        if (!document.getElementById(id)) {
            let el = document.createElement("div");
            el.id = id;
            el.innerHTML = html;
            document.body.appendChild(el);
        }
    }

    add("titolo-webmap", `
    <div class="titolo-riga1">
        <a href="schede/GitHub.pdf" target="_blank">
            Rete ciclabile di Correggio (Reggio Emilia)
        </a>
    </div>

    <div class="titolo-riga2">
        Aggiornamento: maggio 2026
    </div>
`);

add("box-info", `
    <div class="box-link">
        <a href="schede/GitHub.pdf" target="_blank">
            CLICCA QUI
        </a>
    </div>

    <div class="box-testo">
        per aprire la LEGENDA della mappa oppure su una ICONA della mappa per aprire una scheda descrittiva
    </div>
`);

    add("firma-fissa", `
        © Ing. Flavio Guidetti
    `);

});