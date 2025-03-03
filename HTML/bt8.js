let month = +prompt("Mời bạn nhập tháng");
switch(month){
    case 1: case 2: case 3:
        document.write("Mùa xuân");
        break;
    case 4: case 5: case 6:
        document.write("Mùa hè");
        break;
    case 7: case 8: case 9:
        document.write("Mùa thu");
        break;
    case 10: case 11: case 12:
        document.write("Mùa đông");
        break;
    default:
        document.write("Tháng không tồn tại");
}