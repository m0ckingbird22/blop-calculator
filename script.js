const hasil = document.getElementById("hasil");
const tombolAngka = document.getElementById("angka");
const tombolOperator = document.getElementById("operator");
let angkaPertama = "";
let angkaKedua = "";
let operator = "";

document.querySelectorAll(".angka").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    if (operator === "") {
      angkaPertama += tombol.value;
      hasil.textContent = angkaPertama;
    } else {
      angkaKedua += tombol.value;
      hasil.textContent = angkaKedua;
    }
  });
});

document.querySelectorAll(".operator").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    if (tombol.value === "=") {
      const a = parseFloat(angkaPertama);
      const b = parseFloat(angkaKedua);
      let jumlah = 0;
      if (operator === "+") jumlah = a + b;
      if (operator === "-") jumlah = a - b;
      if (operator === "*") jumlah = a * b;
      if (operator === "/") jumlah = a / b;
      hasil.textContent = jumlah;
      angkaPertama = String(jumlah);
      angkaKedua = "";
      operator = "";
    } else if (tombol.value === "c") {
      angkaPertama = "";
      angkaKedua = "";
      operator = "";
      hasil.textContent = 0;
    } else {
      operator = tombol.value;
    }
  });
});
