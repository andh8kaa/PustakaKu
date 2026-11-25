import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  { judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Novel", tahun: 2005, stokTotal: 5, stokTersedia: 3, deskripsi: "Kisah sepuluh anak Belitung yang berjuang bersekolah di tengah keterbatasan." },
  { judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", kategori: "Novel", tahun: 1980, stokTotal: 2, stokTersedia: 0, deskripsi: "Roman sejarah tentang Minke di masa kolonial Hindia Belanda." },
  { judul: "Fisika Dasar", penulis: "David Halliday", kategori: "Sains", tahun: 2010, stokTotal: 2, stokTersedia: 2, deskripsi: "Buku teks pengantar mekanika, gelombang, dan termodinamika." },
  { judul: "Sejarah Indonesia Modern", penulis: "M.C. Ricklefs", kategori: "Sejarah", tahun: 2008, stokTotal: 4, stokTersedia: 1, deskripsi: "Ulasan sejarah Indonesia sejak 1200 hingga masa kini." },
  { judul: "Matematika Kelas XI", penulis: "Kemendikbud", kategori: "Pelajaran", tahun: 2017, stokTotal: 30, stokTersedia: 18, deskripsi: "Buku pegangan siswa untuk mata pelajaran Matematika kelas XI." },
  { judul: "Filosofi Teras", penulis: "Henry Manampiring", kategori: "Pengembangan Diri", tahun: 2018, stokTotal: 3, stokTersedia: 0, deskripsi: "Pengantar filsafat Stoa untuk kehidupan sehari-hari." },
  { judul: "Cerita Rakyat Nusantara", penulis: "Tim Penyusun", kategori: "Anak", tahun: 2015, stokTotal: 6, stokTersedia: 6, deskripsi: "Kumpulan dongeng dari berbagai daerah di Indonesia." },
  { judul: "Atomic Habits", penulis: "James Clear", kategori: "Pengembangan Diri", tahun: 2019, stokTotal: 4, stokTersedia: 2, deskripsi: "Cara membangun kebiasaan baik lewat perubahan kecil." },
];

async function main() {
  const count = await prisma.book.count();
  if (count > 0) {
    console.log("Data sudah ada, seed dilewati.");
    return;
  }
  await prisma.book.createMany({ data });
  console.log(`Seed selesai: ${data.length} buku.`);
}

main().finally(() => prisma.$disconnect());