// **Data Produk**
let produklist = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 }, 
    { id: 4, nama: "Headphone", harga: 1500000 }, 
    { id: 5, nama: "Smartwatch", harga: 3000000 } 
];

const eventHandler = {
    hapus: function(id) {
        hapusProduk(id);
    },
    tambah: function(id, nama, harga) {
        tambahProduk(id, nama, harga);
    },
    tampil: function() {
        tampilkanProduk();
    }
};

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
function tambahProduk(id, nama, harga) {
    produklist = [...produklist,{ id, nama, harga }];
}

tampilkanProduk(); // Menampilkan semua produk
eventHandler.tambah(6, "Kamera", 5000000); // Menambahkan produk baru dengan eventHandler
tampilkanProduk(); // Menampilkan semua produk setelah penambahan
eventHandler.hapus(2); // Menghapus produk dengan ID 2 dengan eventHandler
tampilkanProduk(); // Menampilkan semua produk setelah penghapusan
tambahProduk(7, "Monitor", 4000000); // Menambahkan produk baru tanpa eventHandler
tampilkanProduk();
hapusProduk(5); // Menghapus produk dengan ID 5 tanpa eventHandler
tampilkanProduk();
