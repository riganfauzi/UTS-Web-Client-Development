# Utility Functions in TypeScript

Kumpulan fungsi sederhana yang ditulis dalam TypeScript untuk melakukan berbagai operasi matematika dan manipulasi string.

## Daftar Fungsi

### 1. `ambilInisial(nama: string): string`

Mengambil inisial dari setiap kata dalam sebuah nama dan mengubahnya menjadi huruf kapital.

- **Parameter**:
  - `nama`: Nama lengkap dalam bentuk string (contoh: `"John Doe"`).
- **Return**: Inisial dalam huruf besar (contoh: `"JD"`).

---

### 2. `hitungLingkaran(jariJari: number): void`

Menghitung dan menampilkan diameter, keliling, dan luas dari sebuah lingkaran berdasarkan jari-jarinya.

- **Parameter**:
  - `jariJari`: Jari-jari lingkaran.
- **Output** (via `console.log`):
  - Diameter, keliling (4 desimal), dan luas (3 desimal).

---

### 3. `luasPersegiPanjang(panjang: number, lebar: number): number`

Menghitung luas dari sebuah persegi panjang.

- **Parameter**:
  - `panjang`: Panjang persegi panjang.
  - `lebar`: Lebar persegi panjang.
- **Return**: Luas persegi panjang.

---

### 4. `selisihHari(tanggal1: string, tanggal2: string): number`

Menghitung selisih hari antara dua tanggal dalam format ISO (`YYYY-MM-DD`).

- **Parameter**:
  - `tanggal1`: Tanggal pertama.
  - `tanggal2`: Tanggal kedua.
- **Return**: Selisih hari dalam bentuk angka.

---

### 5. `hitungSudutKetiga(sudutA: number, sudutB: number): number`

Menentukan besar sudut ketiga dari sebuah segitiga, berdasarkan dua sudut lainnya.

- **Parameter**:
  - `sudutA`: Sudut pertama.
  - `sudutB`: Sudut kedua.
- **Return**: Nilai sudut ketiga.

---
