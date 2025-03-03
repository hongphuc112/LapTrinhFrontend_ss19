let month = +prompt("Nhập mộ tháng bất kì");

if (month < 1 || month > 12) {
    console.log("tháng không hợp lệ");
} else if (month === 2) {
    console.log("tháng 2 có 28 hoặc 29 ngày năm nhuận");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("tháng " + month + " có 30 ngày");
} else {
    console.log("tháng " + month + " có 31 ngày");
}