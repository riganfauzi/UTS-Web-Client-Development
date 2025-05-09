# Tugas 2 Web Client Development

## 📌 Deskripsi Tugas

---

### 1️⃣ Konversi Fahrenheit ke Celsius

Fungsi: konversiFahrenheitKeCelsius(f: number): string

**Deskripsi**
Program ini menerima suhu dalam Fahrenheit dan mengonversinya ke Celsius menggunakan rumus:
\[ C = (F - 32) \times \frac{5}{9} \]

**Kode:**

```javascript
function fahrenheitKeCelsius(f) {
  return (((f - 32) * 5) / 9).toFixed(2);
}
console.log(fahrenheitKeCelsius(100)); // Output: 37.78
```

```typescript
function fahrenheitToCelsius(f: number): string {
  return (((f - 32) * 5) / 9).toFixed(2);
}
console.log(fahrenheitToCelsius(100)); // Output: 37.78
```

**Penjelasan:**

- `fahrenheitToCelsius(fahrenheit)` menerima nilai suhu dalam Fahrenheit.
- `fahrenheit - 32`: Mengurangi suhu dengan 32.
- `* 5/9`: Mengalikan hasilnya dengan 5/9 untuk mengonversinya ke Celsius.
- `console.log(fahrenheitToCelsius(100))`: Mencetak hasil konversi dari 100°F ke Celsius.

---

### 2️⃣ Konversi Centimeter ke Kilometer

**Deskripsi:**
Mengonversi panjang dari centimeter ke kilometer dengan rumus:
\[ km = cm / 100000 \]

**Kode:**

```javascript
function konversiCmKeKm(cm) {
  return cm / 100000 + " km";
}
console.log(konversiCmKeKm(100000)); // Output: 1 km
```

```typescript
function konversiCentimeterKeKilometer(cm: number): string {
  return `${cm / 100000} km`;
}
console.log(konversiCentimeterKeKilometer(100000)); // Output: 1 km
```

**Penjelasan:**

- `cmToKm(cm)` menerima nilai panjang dalam centimeter.
- `cm / 100000`: Mengonversi nilai cm ke km dengan membaginya dengan 100000.
- `console.log(cmToKm(100000))`: Mencetak hasil konversi dari 100000 cm ke km.

---

### 3️⃣ Menentukan Bilangan Ganjil atau Genap

**Deskripsi:**
Fungsi ini menerima bilangan bulat \( n \) dan mengembalikan `true` jika ganjil dan `false` jika genap.

**Kode:**

```javascript
function isEven(n) {
  return n % 2 !== 0;
}
console.log(isEven(1000)); // Output: true
console.log(isEven(1001)); // Output: false
```

```typescript
function genap(n: number): boolean {
  return n % 2 !== 0;
}
console.log(genap(1000)); // Output: true
console.log(genap(1001)); // Output: false
```

**Penjelasan:**

- `isOdd(n)` menerima nilai bilangan bulat.
- `n % 2 !== 0`: Mengecek apakah bilangan memiliki sisa bagi 2.
- Jika sisa bagi 2 adalah 0, bilangan genap (`false`).
- Jika tidak, bilangan ganjil (`true`).

---

### 4️⃣ Menghapus Kata dari String

**Deskripsi:**
Menghapus kemunculan pertama dari kata tertentu dalam sebuah string.

**Kode:**

```javascript
function removeFirstOccurrence(str, search) {
  return str.replace(search, "");
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```

```typescript
function hapusFirstOccurrence(str: string, search: string): string {
  return str.replace(search, "");
}
console.log(hapusFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```

**Penjelasan:**

- `removeFirstOccurrence(str, search)` menerima string utama dan kata yang ingin dihapus.
- `str.replace(search, "")`: Menghapus kemunculan pertama dari kata yang dicari.
- `console.log(removeFirstOccurrence("Hello world", "ell"))`: Mencetak hasil setelah kata "ell" dihapus dari "Hello world".

---

### 5️⃣ Mengecek Palindrom

**Deskripsi:**
Memeriksa apakah string adalah palindrom (dibaca sama dari depan dan belakang).

**Kode:**

```javascript
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

```typescript
function palindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(palindrome("madam")); // Output: true
console.log(palindrome("hello")); // Output: false
```

**Penjelasan:**

- `isPalindrome(str)` menerima string yang akan diperiksa.
- `str.split('')`: Mengubah string menjadi array karakter.
- `.reverse()`: Membalikkan urutan karakter dalam array.
- `.join('')`: Mengubah array kembali menjadi string.
- `str === reversed`: Membandingkan string asli dengan yang sudah dibalik.
- `console.log(isPalindrome("madam"))`: Mencetak `true` jika "madam" adalah palindrom.

---

## Kesimpulan

Tugas-tugas ini membantu saya lebih memahami dasar pemogramman, seperti operasi matematika, manipulasi string dan juga penggunaanya fungsi dalam javascript maupun typescript.
