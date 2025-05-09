import {
    hitungLuasPersegiPanjang,
    lingkaran,
    sudutKetiga,
    selisih,
    inisial
} from './utils';

console.log("Luas:", hitungLuasPersegiPanjang(5, 3)); // 15

const hasilLingkaran = lingkaran(5);
console.log(`Diameter: ${hasilLingkaran.diameter}, Keliling: ${hasilLingkaran.keliling}, Luas: ${hasilLingkaran.luas}`);

console.log("Sudut ketiga:", sudutKetiga(80, 65)); // 35
console.log("Selisih hari:", selisih("2024-03-19", "2024-03-21")); // 2
console.log("Inisial:", inisial("John Doe")); // JD