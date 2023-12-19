function baoKetQua() {
  var diemChuan = Number(document.getElementById("inputScore0").value);
  var diemMon1 = Number(document.getElementById("inputScore1").value);
  var diemMon2 = Number(document.getElementById("inputScore2").value);
  var diemMon3 = Number(document.getElementById("inputScore3").value);
  var diemKV = Number(document.getElementById("selLocation").value);
  var diemDT = Number(document.getElementById("selUser").value);
  // tổng điểm ưu tiên
  var diemUT = diemKV + diemDT;
  console.log("Điểm ưu tiên: ", diemUT);
  // điểm thi 3 môn
  var diemThi = diemMon1 + diemMon2 + diemMon3 + diemUT;
  var ketQua = "";
  // kết quả
  if (diemThi >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    ketQua = `ĐẬU`;
  } else if (
    diemThi >= diemChuan &&
    (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0)
  ) {
    ketQua = `RỚT (CÓ MÔN BỊ ĐIỂM LIỆT)`;
  } else if (diemThi < diemChuan) {
    ketQua = `RỚT (KHÔNG ĐẠT ĐIỂM CHUẨN)`;
  }

  // kết quả đầy đủ
  var kqDayDu = `Tổng điểm: ${diemThi} - ${ketQua}`;

  // hiển thị kết quả đầy đủ
  document.getElementById("txtResult").innerHTML = kqDayDu;

  // Làm trống các ô nhập liệu
  document.getElementById("inputScore0").value = "";
  document.getElementById("inputScore1").value = "";
  document.getElementById("inputScore2").value = "";
  document.getElementById("inputScore3").value = "";
  document.getElementById("selLocation").selectedIndex = 0;
  document.getElementById("selUser").selectedIndex = 0;
}

// Cho hiển thị kết quả
document.getElementById("btnResult").onclick = baoKetQua;
