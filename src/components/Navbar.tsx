import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="brand">📚 PustakaKu</Link>
        <nav className="nav-links">
          <Link href="/">Beranda</Link>
          <Link href="/buku">Daftar Buku</Link>
          <Link href="/buku/baru">Tambah Buku</Link>
        </nav>
      </div>
    </header>
  );
}
