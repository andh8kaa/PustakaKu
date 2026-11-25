"use client";

import Link from "next/link";
import { useActionState } from "react";
import { tambahBuku, type FormState } from "./actions";

const initial: FormState = { errors: {}, values: {} };

export default function BookForm({ kategori }: { kategori: string[] }) {
  const [state, action, pending] = useActionState(tambahBuku, initial);
  const { errors, values } = state;

  return (
    <form action={action} className="form" noValidate>
      <h2>Tambah buku baru</h2>

      <label>Judul *
        <input name="judul" placeholder="Judul buku" defaultValue={values.judul} />
        {errors.judul && <span className="error">{errors.judul}</span>}
      </label>

      <label>Penulis *
        <input name="penulis" placeholder="Nama penulis" defaultValue={values.penulis} />
        {errors.penulis && <span className="error">{errors.penulis}</span>}
      </label>

      <label>Kategori *
        <select name="kategori" defaultValue={values.kategori ?? ""}>
          <option value="">Pilih kategori</option>
          {kategori.map((k) => <option key={k}>{k}</option>)}
        </select>
        {errors.kategori && <span className="error">{errors.kategori}</span>}
      </label>

      <div className="grid-2">
        <label>Tahun terbit
          <input name="tahun" type="number" placeholder="2005" defaultValue={values.tahun} />
          {errors.tahun && <span className="error">{errors.tahun}</span>}
        </label>
        <label>Jumlah stok *
          <input name="stok" type="number" min={0} placeholder="5" defaultValue={values.stok} />
          {errors.stok && <span className="error">{errors.stok}</span>}
        </label>
      </div>

      <label>Deskripsi
        <textarea name="deskripsi" rows={3} placeholder="Deskripsi buku" defaultValue={values.deskripsi} />
      </label>

      <div className="row-between">
        <Link href="/buku" className="btn">Batal</Link>
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Menyimpan…" : "Simpan"}
        </button>
      </div>
    </form>
  );
}
