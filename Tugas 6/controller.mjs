import users from "./data.mjs";

// Fungsi untuk menampilkan data
const index = () => {
    console.log("Data Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

// Fungsi untuk menambahkan data
const store = (newUser1, newUser2) => {
    users.push(newUser1, newUser2);
    console.log("\nData berhasil ditambahkan!");
};

// Fungsi untuk menghapus data terakhir
const destroy = () => {
    if (users.length > 0) {
        users.pop();
        console.log("\nData terakhir berhasil dihapus!");
    } else {
        console.log("\nTidak ada data yang bisa dihapus!");
    }
};

export { index, store, destroy };
