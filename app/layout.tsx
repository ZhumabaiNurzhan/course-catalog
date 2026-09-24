import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies Lab 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-50">
      <body className={`${inter.className} text-slate-900 min-h-screen flex flex-col`}>
        {/* Навигация с эффектом стекла (glassmorphism) */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight text-indigo-600">
              TechUni.
            </div>
            <div className="flex gap-8 font-medium text-slate-600">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/courses" className="hover:text-indigo-600 transition-colors">Courses</Link>
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
            </div>
          </div>
        </nav>
        
        <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}