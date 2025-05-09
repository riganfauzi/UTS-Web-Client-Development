// Area of Rectangle
export function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
    return panjang * lebar;
}

// Circumference and area of a circle
export function lingkaran(jariJari: number): { diameter: number, keliling: number, luas: number } {
    const diameter: number = 2 * jariJari;
    const keliling: number = 2 * Math.PI * jariJari;
    const luas: number = Math.PI * Math.pow(jariJari, 2);
    return {
        diameter,
        keliling: parseFloat(keliling.toFixed(4)),
        luas: parseFloat(luas.toFixed(3))
    };
}

// Triangle angle
export function sudutKetiga(sudutA: number, sudutB: number): number {
    return 180 - (sudutA + sudutB);
}

// Date difference
export function selisih(tanggal1: string, tanggal2: string): number {
    const t1: Date = new Date(tanggal1);
    const t2: Date = new Date(tanggal2);
    const selisihWaktu: number = Math.abs(t2.getTime() - t1.getTime());
    return selisihWaktu / (1000 * 60 * 60 * 24);
}

// Initials
export function inisial(nama: string): string {
    return nama.split(" ").map(kata => kata[0].toUpperCase()).join("");
}