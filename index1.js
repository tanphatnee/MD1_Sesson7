let studentCount = 0;
console.log("studentCount: " + studentCount);

let msg = "stn";
msg = "Coding is hard but super cool and fun";
console.log(msg);

studentCount = 30;
console.log("studentCount: " + studentCount);

let msg1 = msg.toUpperCase();
let msg2 = msg.toLowerCase();
console.log(msg1);
console.log(msg2);

let student = Number(window.prompt("Nhập số muốn cộng thêm: "));
studentCount += student;
window.alert(studentCount);

let adu = "tao yêu mày";
window.alert(adu);

let fname = window.prompt("Nhập tên của bạn");
window.alert(fname);

let firstName = window.prompt("Nhập Họ của bạn");
let lastName = window.prompt("Nhập Tên của bạn");
window.alert(firstName + lastName);

let canh = window.prompt("Nhập độ dài cạnh hình vuông");
s = canh * canh;
window.alert("Diện tích hình vuông là: " + s);

let banKinh = window.prompt("Nhập bán kính hình tròn");
sHinhTron = banKinh * banKinh * Math.PI;
window.alert("Diện tích hình tròn là : " + sHinhTron)

let celsius = window.prompt("Nhập giá trị độ Celsius: ");
let fahrenheit = (celsius * 1.8) + 32;
window.alert(fahrenheit);

alert("The quick ___ fox jumps over the ___ dog")
let abc = prompt("Nhập chữ TA ")
let cef = prompt("Nhập chữ còn lại")
let ghi = `The quick ${'abc'}  fox jumps over the ${cef} dog`


