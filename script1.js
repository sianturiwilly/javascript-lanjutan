// 2.1 Execution Context, Hoisting & Scope

// var nama = 'Willi';
// console.log(nama);

// Creation phase pada Global Context.
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// Execution phase
// console.log(sayHello());

// var nama = 'Willi';
// var umur = 29;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Willi Sianturi';
// var username = '@willyprajudi19';

// function cetakURL(username) {
//     var instagramURL = 'https://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//     console.log('Ini a.');

//     function b() {
//         console.log('Ini b.');

//         function c() {
//             console.log('Ini c.');
//         }

//         c();
//     }

//     b();
// }

// a();

// var nama = 'Willi Sianturi';
// var username = '@willyprajudi19';

// function cetakURL() {
//     var instagramURL = 'https://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@goalcomindonesia', '@ayu_tanjungg'));

function satu() {
    var nama = 'Willi';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Sri';
satu();
dua('Darwis');
console.log(nama);