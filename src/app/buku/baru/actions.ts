"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { KATEGORI } from "@/lib/kategori";

export type FormState = {
  errors: Partial<Record<"judul" | "penulis" | "kategori" | "tahun" | "stok", string>>;
  values: Record<string, string>;
};

export async function tambahBuku(_prev: FormState, formData: FormData): Promise<FormState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = {
    judul: get("judul"),
    penulis: get("penulis"),
    kategori: get("kategori"),
    tahun: get("tahun"),
    stok: get("stok"),
    deskripsi: get("deskripsi"),
  };
  const errors: FormState["errors"] = {};

  if (!values.judul) errors.judul = "Judul wajib diisi";
  if (!values.penulis) errors.penulis = "Penulis wajib diisi";
  if (!KATEGORI.includes(values.kategori)) errors.kategori = "Kategori wajib dipilih";

  let tahun: number | null = null;
  if (values.tahun) {
    tahun = Number(values.tahun);
    const max = new Date().getFullYear();
    if (!Number.isInteger(tahun) || tahun < 1000 || tahun > max) {
      errors.tahun = `Tahun harus antara 1000 dan ${max}`;
    }
  }

  const stok = Number(values.stok);
  if (!values.stok) errors.stok = "Jumlah stok wajib diisi";
  else if (!Number.isInteger(stok) || stok < 0) errors.stok = "Stok harus bilangan bulat ≥ 0";

  if (Object.keys(errors).length > 0) return { errors, values };

  const book = await prisma.book.create({
    data: {
      judul: values.judul,
      penulis: values.penulis,
      kategori: values.kategori,
      tahun,
      stokTotal: stok,
      stokTersedia: stok,
      deskripsi: values.deskripsi || null,
    },
  });

  revalidatePath("/buku");
  redirect(`/buku/${book.id}`);
}
