(function() {
  // Parameter holen
  const params = window.parameters || {};
  const list = (params.listItems || "").split(",");
  const defaultVal = params.defaultValue || "";
  const title = params.title || "Techniker auswählen";

  // Label setzen
  document.getElementById("titleLabel").innerText = title;

  // Dropdown befüllen
  const select = document.getElementById("dropdown");
  list.forEach(name => {
    const option = document.createElement("option");
    option.value = name.trim();
    option.text = name.trim();
    if (name.trim() === defaultVal) option.selected = true;
    select.appendChild(option);
  });

  // Auswahl an Jotform zurückgeben
  select.addEventListener("change", () => {
    if (window.JFCustomWidget) {
      window.JFCustomWidget.sendData(select.value);
    }
  });

  // Initial senden
  window.JFCustomWidget && window.JFCustomWidget.ready();
})();
