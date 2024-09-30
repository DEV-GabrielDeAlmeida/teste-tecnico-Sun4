// Tratar e converter datas para o formato americano AAAA-MM-DD.
// *
// Saída esperada: 2022-11-30

function q3TratarDatas(data) {
  const meses = {
    jan: 1,
    fev: 2,
    mar: 3,
    abr: 4,
    mai: 5,
    jun: 6,
    jul: 7,
    ago: 8,
    set: 9,
    out: 10,
    nov: 11,
    dez: 12,
    janeiro: 1,
    fevereiro: 2,
    março: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12,
  };

  if (typeof data === "string" && data.includes("/")) {
    let [dia, mes, ano] = data.split("/").map(Number);
    return `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(
      2,
      "0"
    )}`;
  }

  if (typeof data === "string") {
    let partes = data.toLowerCase().replace(/de\s+/g, "").trim().split(/\s+/);
    let dia = Number(partes[0]);
    let mes = meses[partes[1]]; 
    let ano = Number(partes[2]);
    
    if (!mes) {
      throw new Error("Mês inválido");
    }

    return `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(
      2,
      "0"
    )}`;
  }

  let ano = data.getFullYear();
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let dia = String(data.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

const datasParaTratar = [
  "30/11/2022",
  "01 dez 2022",
  "25/11/2022",
  "31 de dezembro de 2022"
];

datasParaTratar.forEach((data) => {
  console.log(q3TratarDatas(data));
});
