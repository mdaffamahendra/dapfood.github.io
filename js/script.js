const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

const btnThumbnail = document.querySelector(".thumbnail-button");
btnThumbnail.addEventListener("click", function () {
  window.location.href = "#menu";
});

let price = 0;
const total = document.querySelector(".price-total");
const foodnameInfo = document.querySelector(".foodnameInfo");
const priceInfo = document.querySelector(".priceInfo");
const pembayaran = document.querySelector('.pembayaran');
const tittlePesan = document.querySelector(".tittle-pesan");
const details = document.querySelectorAll(".detail");
details.forEach(function (product) {
  const foodname = product.querySelector(".food-name");
  const priceDescription = product.querySelector(".price");
  const btnOrder = product.querySelector(".order");

  btnOrder.addEventListener("click", function () {
    pembayaran.style.display = 'block';
    tittlePesan.style.display = 'block';
    const priceValue = priceDescription.textContent;
    const foodnameValue = foodname.textContent;
    total.value = `RP${btnOrder.value}`;
    price = btnOrder.value;

    foodnameInfo.value = foodnameValue;
    priceInfo.value = priceValue;
    window.location.href = "#pesan";
  });
});

const btnPayment = document.querySelectorAll(".btnPayment");
const choicePayment = document.querySelector(".choice-payment");
btnPayment.forEach((btn) => {
  btn.addEventListener("click", function () {
    choicePayment.value = btn.value;
  });
});

const codeVoucher = "DAPFOODGOKIL";
const voucher = document.getElementById("voucher");
const btnVoucher = document.querySelector(".claim-voucher");
const resultVoucher = document.querySelector(".result-voucher");
btnVoucher.addEventListener("click", function () {
  if (voucher.value == codeVoucher) {
    resultVoucher.textContent =
      "Selamat, Anda Mendapatkan Potongan Harga sebesar 10%";
    const discount = price * 0.1;
    const endPrice = `RP${price - discount}`;
    total.value = endPrice;
  } else {
    resultVoucher.textContent =
      "Maaf, Voucher Yang Anda Masukkan Salah Atau Tidak Sesuai";
  }
});

const btnBuy = document.querySelector(".buy");
const resultContainer = document.querySelector(".result");
btnBuy.addEventListener("click", function () {
  pembayaran.style.display = "none";
  tittlePesan.style.display = "none";
  resultContainer.style.display = "block";
  window.location.href = '#pesan';
});

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function () {
  location.reload();
  window.location.href = "#beranda";
});
