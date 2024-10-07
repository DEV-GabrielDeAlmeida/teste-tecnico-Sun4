var telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {

    var restringirCampo = telefone.value.replace(/\D/g, "").substring(0, 11);

    var arrayNumeros = restringirCampo.split("");

    var novoTelefone = "";

    if (arrayNumeros.length > 0) {
        novoTelefone += `(${arrayNumeros.slice(0, 2).join("")})`;
    }

    if (arrayNumeros.length > 2) {
        novoTelefone += ` ${arrayNumeros.slice(2, 7).join("")}`;
    }

    if (arrayNumeros.length > 7) {
        novoTelefone += `-${arrayNumeros.slice(7, 11).join("")}`;
    }

    telefone.value = novoTelefone;
})