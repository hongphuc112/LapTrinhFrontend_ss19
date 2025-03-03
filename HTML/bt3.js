let character = prompt("Nhập vào một chữ cái");
let length = character.length;
if (length !== 1) {
    console.log("Không phải chữ cái");
} else {
    if ( isNaN(character - 2) ) {
        console.log(`Ký tự ${character} là chữ cái`);
    } else {
        console.log("Không phải chữ cái");
    }
}