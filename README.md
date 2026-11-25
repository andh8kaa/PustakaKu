# PustakaKu

Aplikasi web pencatatan buku perpustakaan SMA.
UAS Web Application Development, Prasetiya Mulya, Semester Ganjil 2026-1.

**Stack:** Next.js (App Router) · TypeScript · Prisma · SQLite

## Cara menjalankan

```bash
npm install
cp .env.example .env        # Windows: copy .env.example .env
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Buka http://localhost:3000.

## Rute

| Halaman      | Rute         |
| ------------ | ------------ |
| Landing page | `/`          |
| Daftar buku  | `/buku`      |
| Detail buku  | `/buku/[id]` |
| Form tambah  | `/buku/baru` |

## Fitur

- Navbar bersama di semua halaman
- Daftar buku, pencarian judul/penulis, filter kategori dan stok
- Stok berwarna merah saat kosong
- Detail buku dengan halaman not-found bila ID tidak ada
- Form tambah buku dengan validasi, tersimpan ke SQLite
- Responsif (375px sampai 1280px)

## Struktur

- `src/app` — rute App Router
- `src/components` — Navbar, StokBadge
- `src/lib/prisma.ts` — koneksi Prisma tunggal
- `prisma/schema.prisma` — skema database
- `prisma/seed.ts` — data contoh
