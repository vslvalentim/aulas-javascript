function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

function obterDataFormatada() {
    const data = new Date();

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

export { formatarMoeda, validarEmail, obterDataFormatada };