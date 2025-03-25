import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Menampilkan data awal
    index();

    // Menambahkan dua data baru
    store(
        { nama: 'Putri Maharani', umur: 22, alamat: 'Jl. Siliwangi No. 14, Bogor', email: 'putri@example.com' },
        { nama: 'Fajar Nugroho', umur: 29, alamat: 'Jl. Veteran No. 11, Palembang', email: 'fajar@example.com' }
    );

    // Menampilkan data setelah penambahan
    index();

    // Menghapus data terakhir
    destroy();

    // Menampilkan data setelah penghapusan
    index();
};

main();
