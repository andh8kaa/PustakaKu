import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <section className="hero">
        <h1>Selamat datang di PustakaKu</h1>
        <p>
          Aplikasi web sederhana untuk menggantikan pencatatan buku perpustakaan
          SMA yang masih manual. Kelola koleksi, cari buku, dan pantau stok
          dalam satu tempat.
        </p>
        <Link href="/buku" className="btn btn-primary">Lihat Daftar Buku →</Link>
      </section>

      <section className="features">
        <div className="card">
          <h3>📖 Daftar Buku</h3>
          <p>Lihat seluruh koleksi perpustakaan lengkap dengan penulis, kategori, dan stok.</p>
        </div>
        <div className="card">
          <h3>🔍 Pencarian Cepat</h3>
          <p>Cari buku berdasarkan judul atau penulis, dan saring menurut kategori atau ketersediaan.</p>
        </div>
        <div className="card">
          <h3>➕ Tambah Buku</h3>
          <p>Petugas dapat menambahkan buku baru melalui formulir yang tervalidasi.</p>
        </div>
      </section>
    </>
  );
}
