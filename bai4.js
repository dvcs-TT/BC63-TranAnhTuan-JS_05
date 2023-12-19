// Đơn giá
const phiXlhdGD = 4.5;
const phiXlhdDN = 15;

const phiDvcbGD = 20.5;
const phiDvcbDN = 75; // DN: phí-DV-cơ-bản / 1 tập-hợp kết-nối (<= 10 kết-nối)
const phiDvcbDNthem = 5; // DN: phí-DV-cơ-bản / 1 kết-nối | > 10 kết-nối

const phiKenhccGD = 7.5; // GĐ: phí / 1 kênh-cao-cấp
const phiKenhccDN = 50; // DN: phí / 1 kênh-cao-cấp

// Thêm ô nhập liệu số-lượng kết-nối
function themLuongKN() {
  if (document.getElementById("selCustomer").value == "company") {
    document.getElementById("inputConnect").style.display = "block";
  } else {
    document.getElementById("inputConnect").style.display = "none";
  }
}

document.getElementById("selCustomer").onchange = themLuongKN;

// Tính phí cáp
function tinhPhiCap() {
  var loaiKH = document.getElementById("selCustomer").value;
  var maKH = document.getElementById("inputID").value;
  var luongKenh = document.getElementById("inputChanel").value;
  var luongKetNoi = document.getElementById("inputConnect").value;
  var phiCap = 0;

  if (loaiKH == "user") {
    phiCap = phiXlhdGD + phiDvcbGD + phiKenhccGD * luongKenh;
  } else if (loaiKH == "company" && luongKetNoi <= 10) {
    phiCap = phiXlhdDN + phiDvcbDN + phiKenhccDN * luongKenh;
  } else if (loaiKH == "company" && luongKetNoi > 10) {
    phiCap =
      phiXlhdDN +
      phiDvcbDN +
      phiDvcbDNthem * (luongKetNoi - 10) +
      phiKenhccDN * luongKenh;
  }

  document.getElementById(
    "txtNet"
  ).innerHTML = `Mã KH: ${maKH} - Phí cáp: ${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(phiCap)}`;

  // Làm trống các ô nhập liệu
  document.getElementById("selCustomer").selectedIndex = 0;
  document.getElementById("inputID").value = "";
  document.getElementById("inputChanel").value = "";
  document.getElementById("inputConnect").value = "";
}

document.getElementById("btnNet").onclick = tinhPhiCap;
