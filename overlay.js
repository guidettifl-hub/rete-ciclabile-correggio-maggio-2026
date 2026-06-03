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
        <a href="schede/GitHub.pdf" target="_blank"
           style="font-size:20px; font-weight:bold;">
            CLIC QUI
        </a>
    </div>

    <div class="box-testo"
     style="color:white; text-align:center; font-size:15px; line-height:1.25;">
    per aprire la LEGENDA<br>
    CLIC su una ICONA per aprire la scheda descrittiva<br>
    CLIC su una STRADA per aprire Street View
</div>
`);
    add("firma-fissa", `
        © Struttura GIS e WebMap sviluppate da Ing. Flavio Guidetti anno 2026
    `);

});
