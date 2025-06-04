import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Engineer Challenge",
  description: "A modern web application for the AI Engineer Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-800">AI Engineer</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500">
                    Home
                  </Link>
                  <Link href="/about" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/dashboard" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
