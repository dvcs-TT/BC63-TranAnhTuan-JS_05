const thueSuat1 = 0.05; // TN chịu thuế <= 60 tr đ
const thueSuat2 = 0.1; // TN chịu thuế <= 120 tr đ
const thueSuat3 = 0.15; // TN chịu thuế <= 210 tr đ
const thueSuat4 = 0.2; // TN chịu thuế <= 384 tr đ
const thueSuat5 = 0.25; // TN chịu thuế <= 624 tr đ
const thueSuat6 = 0.3; // TN chịu thuế <= 960 tr đ
const thueSuat7 = 0.35; // TN chịu thuế >  960 tr đ

// Trường hợp tính thuế TNCN kiểu bình thường
function tinhThueTNCN() {
  var hoTenEle = document.getElementById("inputName2");
  var tongTnNamEle = document.getElementById("inputSalary");
  var luongNguoiPTEle = document.getElementById("inputUser");

  var hoTen = hoTenEle.value;
  var tongTnNam = Number(tongTnNamEle.value);
  var luongNguoiPT = Number(luongNguoiPTEle.value);
  var tnChiuThue = tongTnNam - 4e6 - luongNguoiPT * 16e5;
  var thueTNCN = 0;

  if (0 < tnChiuThue && tnChiuThue <= 60e6) {
    thueTNCN = tnChiuThue * thueSuat1;
  } else if (60e6 < tnChiuThue && tnChiuThue <= 120e6) {
    thueTNCN = tnChiuThue * thueSuat2;
  } else if (120e6 < tnChiuThue && tnChiuThue <= 210e6) {
    thueTNCN = tnChiuThue * thueSuat3;
  } else if (210e6 < tnChiuThue && tnChiuThue <= 384e6) {
    thueTNCN = tnChiuThue * thueSuat4;
  } else if (384e6 < tnChiuThue && tnChiuThue <= 624e6) {
    thueTNCN = tnChiuThue * thueSuat5;
  } else if (624e6 < tnChiuThue && tnChiuThue <= 960e6) {
    thueTNCN = tnChiuThue * thueSuat6;
  } else if (tnChiuThue > 960e6) {
    thueTNCN = tnChiuThue * thueSuat7;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
  }

  document.getElementById(
    "txtTax"
  ).innerHTML = `Thuế TNCN: ${thueTNCN.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;

  // Làm trống các ô nhập liệu
  hoTenEle.value = "";
  tongTnNamEle.value = "";
  luongNguoiPTEle.value = "";
}

document.getElementById("btnTax").onclick = tinhThueTNCN;

// Trường hợp tính thuế TNCN kiểu lũy tiến
// function tinhThueTN() {
//   var hoTenEle = document.getElementById("inputName2");
//   var tongTnNamEle = document.getElementById("inputSalary");
//   var luongNguoiPTEle = document.getElementById("inputUser");

//   var hoTen = hoTenEle.value;
//   var tongTnNam = Number(tongTnNamEle.value);
//   var luongNguoiPT = Number(luongNguoiPTEle.value);
//   var tnChiuThue = tongTnNam - 4e6 - luongNguoiPT * 16e5;
//   var thueTNCN = 0;

//   if (0 < tnChiuThue && tnChiuThue <= 60e6) {
//     thueTNCN = tnChiuThue * thueSuat1;
//   } else if (60e6 < tnChiuThue && tnChiuThue <= 120e6) {
//     thueTNCN = 60e6 * thueSuat1 + (tnChiuThue - 60e6) * thueSuat2;
//   } else if (120e6 < tnChiuThue && tnChiuThue <= 210e6) {
//     thueTNCN =
//       60e6 * thueSuat1 + 60e6 * thueSuat2 + (tnChiuThue - 120e6) * thueSuat3;
//   } else if (210e6 < tnChiuThue && tnChiuThue <= 384e6) {
//     thueTNCN =
//       60e6 * thueSuat1 +
//       60e6 * thueSuat2 +
//       90e6 * thueSuat3 +
//       (tnChiuThue - 210e6) * thueSuat4;
//   } else if (384e6 < tnChiuThue && tnChiuThue <= 624e6) {
//     thueTNCN =
//       60e6 * thueSuat1 +
//       60e6 * thueSuat2 +
//       90e6 * thueSuat3 +
//       174e6 * thueSuat4 +
//       (tnChiuThue - 384e6) * thueSuat5;
//   } else if (624e6 < tnChiuThue && tnChiuThue <= 960e6) {
//     thueTNCN =
//       60e6 * thueSuat1 +
//       60e6 * thueSuat2 +
//       90e6 * thueSuat3 +
//       174e6 * thueSuat4 +
//       240e6 * thueSuat5 +
//       (tnChiuThue - 624e6) * thueSuat6;
//   } else if (tnChiuThue > 960e6) {
//     thueTNCN =
//       60e6 * thueSuat1 +
//       60e6 * thueSuat2 +
//       90e6 * thueSuat3 +
//       174e6 * thueSuat4 +
//       240e6 * thueSuat5 +
//       336e6 * thueSuat6 +
//       (tnChiuThue - 960e6) * thueSuat7;
//   } else {
//     alert("Số tiền thu nhập không hợp lệ");
//   }

//   document.getElementById(
//     "txtTax"
//   ).innerHTML = `Thuế TNCN: ${thueTNCN.toLocaleString("vi-VN", {
//     style: "currency",
//     currency: "VND",
//   })}`;

//   // Làm rỗng các ô nhập liệu
//   hoTenEle.value = "";
//   tongTnNamEle.value = "";
//   luongNguoiPTEle.value = "";
// }
