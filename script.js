// function init() {
//     // let nama = 'Willi';
//     return function(nama) {
//         console.log(nama);
//     }
    
// }
// let panggilNama = init();
// panggilNama('Willi');
// panggilNama('Sianturi');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan.`)
//     }
// }

// let selamatPagi =  ucapkanSalam('Pagi');
// let selamatSiang =  ucapkanSalam('Siang');
// let selamatMalam =  ucapkanSalam('Malam');

// console.dir(selamatMalam('Willi'));

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());