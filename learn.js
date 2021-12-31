//membuat variabel
let myNumber= 16;
let myString= "Hello"
let myBoolean= true
const phi= 3.14
//menampilkan informasi ke console
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);
//menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah :"+ myNumber);
window.alert('Angka favorit saya adalah :' +myNumber);
window.alert(`Angka favorit saya adalah : ${myNumber}`);
//membuat operasi sederhana dengan operator aritmatika
    let x= 8
    let y= 4
    console.log(x, y);
    console.log('x + y =', x + y);
    console.log('x - y =', x - y);
    console.log('x * y =', x * y);
    console.log('x / y =', x / y);
    console.log('x % y =', x % y);
    console.log('x++ =', x++);
    console.log('++x =', ++x);
    console.log('x-- =', x--);
    console.log('--x =', --x);
     //membuat operasi sederhana dengan operator perbandingan
     let a= 8
     let b= 4
     console.log(a, b);
     console.log('a > b =', a > b);
     console.log('a < b =', a < b);
     console.log('a >= b =', a >= b);
     console.log('a <= b =', a <= b);
     console.log('a == b =', a == b);
     console.log('a != b =', a != b);
     console.log('a === b =', a === b);
     console.log('a !== b =', a !== b);
     //membuat operasi sederhana dengan operator logika
     console.log('true && true =', true && true);
     console.log('true && false =', true && false);
     console.log('false && true =', false && true);
     console.log('false && false =', false && false);
     console.log('true || true =', true || true);
     console.log('true || false =', true || false);
     console.log('false || true =', false || true);
     console.log('false || false =', false || false);
     console.log('!true =', !true);
     console.log('!false =', !false);
     //meghitung fungsi luas persegi, luas segitiga, dan volume balok
     function luas_persegi(s){ //menggunakan 1 parameter
         let luas = s*s; //rumus luas persegi
         return luas; //mengembalikan nilai ke yang memanggil 
     }
     luas_persegi(10);

     function luas_segitiga(a, t){ //menggunakan 2 parameter
         let luas = 0.5*a*t; //rumus luas segitiga
         return luas; //mengembalikan nilai ke yang memanggil
     }
     luas_segitiga(10, 5);

     function volume_balok(p, l, t){ //menggunakan 3 parameter
         let volume = p*l*t; //rumus volume balok
         return volume; //mengembalikan nilai ke yang memanggil
     }
     volume_balok(10, 5, 2);