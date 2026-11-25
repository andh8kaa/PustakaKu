import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center">
      <h1>404</h1>
      <p className="muted">Halaman yang kamu cari tidak ditemukan.</p>
      <Link href="/" className="btn">Kembali ke beranda</Link>
    </div>
  );
}
