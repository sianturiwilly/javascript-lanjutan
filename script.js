// Cara untuk membuat Object pada JavaScript
// 1. Object Literal
// Masalah: Tidak efektif untuk objek yang banyak.
// let mahasiswa1 = {
//     nama: 'Willi',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Darwis',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan.`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain.`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur.`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let willi = Mahasiswa('Willi', 10);
let darwis = Mahasiswa('Darwis', 20);

// 3. Constructor Function
// Keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`); 
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain.`)
//     }
// }

// let willi = new Mahasiswa('Willi', 10);

// 4. Object.create