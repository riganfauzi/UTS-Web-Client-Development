# 🧪 Tugas 5 - Aplikasi Katalog Pokémon (React)

## 📋 Deskripsi Proyek

Ini adalah proyek React untuk **Tugas 5** dalam mata kuliah **Web Client Development** di **Cakrawala University**.  
Proyek ini berupa aplikasi **katalog Pokémon** yang menampilkan daftar Pokémon dan detailnya. Aplikasi dibangun dengan pendekatan **komponen reusable**, menggunakan **React Hooks** untuk pengelolaan state dan navigasi.

---

## 🖼️ Tampilan Aplikasi

| List View                                            | Detail View                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| ![List View Screenshot](./screenshots/list-view.png) | ![Detail View Screenshot](./screenshots/detail-view.png) |

> _(Silakan tambahkan tangkapan layar ke dalam folder `screenshots/` dan ubah nama file sesuai kebutuhan.)_

---

## 📦 Fitur Utama

- 🧭 Navbar dengan fitur pencarian Pokémon
- 🔍 Filter & sort berdasarkan **nama**, **tipe**, **HP**, **attack**, dan **defense**
- 🧱 Tampilan bisa diubah antara **Grid** dan **List**
- 📄 Halaman **Detail Pokémon** menampilkan informasi lengkap, termasuk **progress bar** untuk HP
- 📂 Menggunakan **dummy data lokal** untuk demonstrasi
- 🪝 Mengimplementasikan **React Hooks**: `useState`, `useLocation`, `useNavigate`

---

## 🧩 Struktur Komponen Utama

- `Navbar`: Navigasi utama dan fitur pencarian
- `Filter`: Pengaturan tampilan (list/grid) dan urutan data
- `ListPokemon`: Menampilkan daftar Pokémon sesuai pencarian dan pengurutan
- `PokemonDetail`: Menampilkan detail lengkap Pokémon yang dipilih

---

## 🔍 Cuplikan Kode

### Halaman Daftar Pokémon (`Pokemon.jsx`)

````jsx
const Pokemon = () => {
    const [view, setView] = useState("grid");
    const [sortBy, setSortBy] = useState("");
    const [navFor] = useState("home");
    const [keyword, setKeyword] = useState("");

    return (
        <div className="bg-[#252A3E] h-full w-screen flex flex-col justify-start">
            <Navbar navFor={navFor} setKeyword={setKeyword} />
            <Filter view={view} setView={setView} sortBy={sortBy} setSortBy={setSortBy} />
            <ListPokemon view={view} sortBy={sortBy} keyword={keyword} />
        </div>
    );
};

### Halaman Detail Pokémon (PokemonDetail.jsx)

```jsx
const { state } = useLocation();
const pokemon = state?.pokemon;

if (!pokemon) {
    return <div className="text-center mt-10 text-red-500">Data tidak tersedia.</div>;
}

return (
    <div>
        <Navbar navFor="detail" />
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <p>HP: {pokemon.health} / {pokemon.maxHealth}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
    </div>
);
````
