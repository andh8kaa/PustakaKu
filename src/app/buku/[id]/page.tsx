import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import StokBadge from "@/components/StokBadge";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

async function ambilBuku(raw: string) {
  if (!/^\d+$/.test(raw)) return null;
  return prisma.book.findUnique({ where: { id: Number(raw) } });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = await ambilBuku((await params).id);
  return { title: book ? book.judul : "Buku tidak ditemukan" };
}

export default async function DetailBukuPage({ params }: Props) {
  const book = await ambilBuku((await params).id);
  if (!book) notFound();

  return (
    <>
      <Link href="/buku" className="back">‹ Kembali ke daftar</Link>
      <div className="detail">
        <div className="cover">Sampul</div>
        <div>
          <h1>{book.judul}</h1>
          <p>Penulis: {book.penulis}</p>
          <p>Kategori: {book.kategori}{book.tahun ? ` · Tahun: ${book.tahun}` : ""}</p>
          <p>Stok: <StokBadge tersedia={book.stokTersedia} total={book.stokTotal} long /></p>
          <p className="desc">{book.deskripsi || "Belum ada deskripsi untuk buku ini."}</p>
        </div>
      </div>
    </>
  );
}
