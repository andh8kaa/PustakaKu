import type { Metadata } from "next";
import { KATEGORI } from "@/lib/kategori";
import BookForm from "./BookForm";

export const metadata: Metadata = { title: "Tambah Buku" };

export default function TambahBukuPage() {
  return <BookForm kategori={KATEGORI} />;
}
