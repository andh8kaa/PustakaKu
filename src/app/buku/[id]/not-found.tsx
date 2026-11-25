import Link from "next/link";

export default function BukuNotFound() {
  return (
    <div className="center">
      <h1>Buku tidak ditemukan</h1>
      <p className="muted">Buku dengan ID tersebut tidak ada di database.</p>
      <Link href="/buku" className="btn">Kembali ke daftar</Link>
    </div>
  );
}
