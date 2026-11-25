import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "PustakaKu", template: "%s | PustakaKu" },
  description: "Aplikasi pencatatan buku perpustakaan SMA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">© 2026 PustakaKu — Perpustakaan SMA</footer>
      </body>
    </html>
  );
}
