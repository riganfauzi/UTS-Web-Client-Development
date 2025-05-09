import {
    luasPersegiPanjang,
    hitungLingkaran,
    hitungSudutKetiga,
    selisihHari,
    ambilInisial
} from './utils.js';

console.log("Luas:", luasPersegiPanjang(5, 3));

const lingkaran = hitungLingkaran(5);
console.log(`Diameter: ${lingkaran.diameter}, Keliling: ${lingkaran.keliling}, Luas: ${lingkaran.luas}`);

console.log("Sudut ketiga:", hitungSudutKetiga(80, 65));
console.log("Selisih hari:", selisihHari("2024-03-19", "2024-03-21"));
console.log("Inisial:", ambilInisial("John Doe"));