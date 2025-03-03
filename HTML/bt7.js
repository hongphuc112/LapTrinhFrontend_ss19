let num1 = +prompt("Mời bạn nhập số thứ nhất");
let num2 = +prompt("Mời bạn nhập số thứ hai");
let num3 = +prompt("Mời bạn nhập số thứ ba");
let maxNum;
if(num1 >= num2 && num1 >= num3){
    maxNum=num1;
}else if(num2>=num1 && num2>=num3){
    maxNum=num2;
}else{
    maxNum=num3;
}
document.write(`Số lớn nhất trong 3 số là: ${maxNum}`);