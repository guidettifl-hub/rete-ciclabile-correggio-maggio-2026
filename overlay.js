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
        <div class="titolo-riga2">Aggiornamento: aprile 2026</div>
    `);

    add("box-info", `
        Clicca su un tratto o su un punto della rete per aprire la relativa scheda PDF
    `);

    add("firma-fissa", `
        © Ing. Flavio Guidetti
    `);

});