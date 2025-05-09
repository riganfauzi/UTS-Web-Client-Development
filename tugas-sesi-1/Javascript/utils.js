// Area of Rectangle
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

// Circumference and area of a circle
function hitungLingkaran(jariJari) {
    const diameter = 2 * jariJari;
    const keliling = 2 * Math.PI * jariJari;
    const luas = Math.PI * Math.pow(jariJari, 2);
    return {
        diameter,
        keliling: parseFloat(keliling.toFixed(4)),
        luas: parseFloat(luas.toFixed(3))
    };
}

// Triangle angle
function hitungSudutKetiga(sudutA, sudutB) {
    return 180 - (sudutA + sudutB);
}

// Date difference
function selisihHari(tanggal1, tanggal2) {
    const t1 = new Date(tanggal1);
    const t2 = new Date(tanggal2);
    const selisihWaktu = Math.abs(t2 - t1);
    return selisihWaktu / (1000 * 60 * 60 * 24);
}

// Initials
function ambilInisial(nama) {
    return nama.split(" ").map(kata => kata[0].toUpperCase()).join("");
}

export {
    luasPersegiPanjang,
    hitungLingkaran,
    hitungSudutKetiga,
    selisihHari,
    ambilInisial
};