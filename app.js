// document.querySelector(".hesapla").addEventListener("click", () => {
//   document.querySelector(".tablolar").style.visibility = "visible";
// });

//***0******************** KREDİ HESAPLAMA ***************************/

const kredi_türü = document.querySelector(".kredi_türü");
const vade = document.getElementById("vade");
const tutar = document.getElementById("tutar");
console.log(tutar.value);

const hesaplaBtn = document.querySelector(".hesapla");
let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (kredi_türü.value === "Konut Kredisi") {
    oran = 1.5;
  } else if (kredi_türü.value === "Ihtiyac Kredisi") {
    oran = 1.75;
  } else if (kredi_türü.value === "Arac Kredisi") {
    oran = 2;
  }

  const faiz = oran / 100;
  taksit =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);

  if (
    kredi_türü.value === "Seciniz" ||
    vade.value === "" ||
    vade.value == 0 ||
    tutar.value === "" ||
    vade.value == 0
  ) {
    alert("Lütfen kredi türünü, tutarı ve vadeyi doğru giriniz!!!");
  } else {
    sonuclariGoster();
  }
});

const sonuclariGoster = () => {
  const sonuclar = document.querySelector(".sonuclar");
  sonuclar.innerHTML = `
  <h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${tutar.value} ₺</td>
      <th>Kredi Tipi</th>
      <td>${kredi_türü.value}</td>
    </tr>
    <tr>
      <th>Vade</th>
      <td>${vade.value}</td>
      <th>Faiz Orani</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${(taksit * vade.value).toFixed(2)} ₺</td>
      <th>Taksit Tutari</th>
      <td>${taksit.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>

  `;
};
