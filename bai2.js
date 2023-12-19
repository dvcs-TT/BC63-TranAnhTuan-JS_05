function tinhPhiDien() {
  const donGia1 = 500; // <= 50kw
  const donGia2 = 650; // <= 100kw
  const donGia3 = 850; // <= 200kw
  const donGia4 = 1100; // <= 350kw
  const donGia5 = 1300; // > 350kw

  var hoTen = document.getElementById("inputName").value;
  var luongDien = Number(document.getElementById("inputKW").value);
  var phiDien = 0;

  if (0 < luongDien && luongDien <= 50) {
    phiDien = luongDien * donGia1;
  } else if (50 < luongDien && luongDien <= 100) {
    phiDien = 50 * donGia1 + (luongDien - 50) * donGia2;
  } else if (100 < luongDien && luongDien <= 200) {
    phiDien = 50 * donGia1 + 50 * donGia2 + (luongDien - 100) * donGia3;
  } else if (200 < luongDien && luongDien <= 350) {
    phiDien =
      50 * donGia1 + 50 * donGia2 + 100 * donGia3 + (luongDien - 200) * donGia4;
  } else if (luongDien > 350) {
    phiDien =
      50 * donGia1 +
      50 * donGia2 +
      100 * donGia3 +
      150 * donGia4 +
      (luongDien - 350) * donGia5;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }

  document.getElementById(
    "txtElecBill"
  ).innerHTML = `Họ tên: ${hoTen} - Phí điện: ${phiDien.toLocaleString(
    "vi-VN",
    { style: "currency", currency: "VND" }
  )}`;

  // Làm trống các ô nhập liệu
  document.getElementById("inputName").value = "";
  document.getElementById("inputKW").value = "";
}

document.getElementById("btnElecBill").onclick = tinhPhiDien;
