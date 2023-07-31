//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
// Inisialisasi variabel untuk menghitung jumlah karakter 'x' dan 'o'
let countX = 0;
let countO = 0;

// Iterasi melalui setiap karakter dalam string
for (let i = 0; i < str.length; i++) {
    // Jika karakter adalah 'x', tambahkan ke countX
    if (str[i] === 'x') {
    countX++;
    }
    // Jika karakter adalah 'o', tambahkan ke countO
    else if (str[i] === 'o') {
    countO++;
    }
}

// Kembalikan hasil perbandingan antara countX dan countO
return countX === countO;
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true