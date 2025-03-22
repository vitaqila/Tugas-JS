// **Data Produk**
let produklist = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 1500000 },
    { id: 5, nama: "Smartwatch", harga: 3000000 }
];

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...ids) {
    produklist = produklist.filter(product => !ids.includes(product.id));
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    produklist.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
    });
}

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(...produk) {
    produklist = [...produklist, ...produk];
}

// **Event Handler**
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk({ id, nama, harga }),
    hapus: (id) => hapusProduk(id)
};

// Menampilkan Produk Awal
tampilkanProduk();

// Contoh Penambahan Produk
eventHandler.tambah(6, "Monitor", 4000000);
tampilkanProduk();

// Contoh Menghapus Produk
eventHandler.hapus(2);
tampilkanProduk();
