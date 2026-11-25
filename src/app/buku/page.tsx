import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { KATEGORI } from "@/lib/kategori";
import StokBadge from "@/components/StokBadge";

export const metadata: Metadata = { title: "Daftar Buku" };
export const dynamic = "force-dynamic";

export default async function DaftarBukuPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kategori?: string; stok?: string }>;
}) {
  const { q = "", kategori = "", stok = "" } = await searchParams;
  const keyword = q.trim();

  const books = await prisma.book.findMany({
    where: {
      ...(keyword && {
        OR: [
          { judul: { contains: keyword } },
          { penulis: { contains: keyword } },
        ],
      }),
      ...(kategori && { kategori }),
      ...(stok === "tersedia" && { stokTersedia: { gt: 0 } }),
      ...(stok === "habis" && { stokTersedia: 0 }),
    },
    orderBy: { id: "asc" },
  });

  return (
    <>
      <div className="row-between">
        <h1>Daftar buku</h1>
        <Link href="/buku/baru" className="btn btn-primary">+ Tambah buku</Link>
      </div>

      <form method="get" className="search-bar">
        <input type="text" name="q" defaultValue={q} placeholder="Cari judul atau penulis" />
        <select name="kategori" defaultValue={kategori} aria-label="Kategori">
          <option value="">Semua kategori</option>
          {KATEGORI.map((k) => <option key={k}>{k}</option>)}
        </select>
        <select name="stok" defaultValue={stok} aria-label="Stok">
          <option value="">Semua stok</option>
          <option value="tersedia">Tersedia</option>
          <option value="habis">Habis</option>
        </select>
        <button type="submit" className="btn btn-primary">Cari</button>
      </form>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>No</th><th>Judul</th><th>Penulis</th><th>Kategori</th><th>Stok</th><th>Aksi</th></tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr><td colSpan={6} className="muted center-text">Tidak ada buku yang cocok.</td></tr>
            ) : (
              books.map((b, i) => (
                <tr key={b.id}>
                  <td>{i + 1}</td>
                  <td>{b.judul}</td>
                  <td>{b.penulis}</td>
                  <td>{b.kategori}</td>
                  <td><StokBadge tersedia={b.stokTersedia} total={b.stokTotal} /></td>
                  <td><Link href={`/buku/${b.id}`} className="btn btn-sm">Detail</Link></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
