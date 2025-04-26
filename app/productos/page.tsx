import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import React from 'react';
import '../styles/globals.css'; 

export default function ProductosPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#a2845e] py-16 flex justify-center items-center">
        <h1 className="text-white text-6xl font-light italic">Productos</h1>
      </header>

      {/* Main content */}
      <section className="flex flex-col">
        {/* Dulce section */}
        <div className="py-3 text-center text-[#a2845e] border-b border-[#a2845e]/20">
          <h2 className="text-xl font-light italic">Dulce</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/chocotorta.png"
                alt="Chocolate torta dessert"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">chocotorta</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/tiramisu.png"
                alt="Tiramisu dessert"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Tiramisu</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/cheesecake.png"
                alt="Cheesecake dessert"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Cheesecake</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/lemon-pie.png"
                alt="Lemon pie dessert"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Lemon pie</p>
          </div>
        </div>

        {/* Salado section */}
        <div className="py-3 text-center text-[#a2845e] border-b border-[#a2845e]/20">
          <h2 className="text-xl font-light italic">Salado</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/medialunas.png"
                alt="Medialunas pastries"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Medialunas [x2]</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/tostadas.png"
                alt="Toast"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Tostadas</p>
          </div>
        </div>

        {/* Bebidas section */}
        <div className="py-3 text-center text-[#a2845e] border-b border-[#a2845e]/20">
          <h2 className="text-xl font-light italic">Bebidas</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/macchiato.png"
                alt="Macchiato coffee"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Macchiato</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/submarino.png"
                alt="Submarino hot chocolate"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Submarino</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/latte.png"
                alt="Latte coffee"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Latte</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src="/images/frappe.png"
                alt="Frappé coffee"
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-sm font-medium">Frappé</p>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <footer className="mt-auto border-t border-gray-200">
        <nav className="grid grid-cols-3 py-4">
          <Link href="/" className="flex flex-col items-center gap-1">
            <Star className="h-6 w-6" />
            <span className="text-[#1d1b20] font-medium">Menu</span>
          </Link>
          <Link href="/productos" className="flex flex-col items-center gap-1">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-[#1d1b20] font-medium">Productos</span>
          </Link>
          <Link href="/nosotros" className="flex flex-col items-center gap-1">
            <Star className="h-6 w-6" />
            <span className="text-[#1d1b20] font-medium">Nosotros</span>
          </Link>
        </nav>
      </footer>
    </main>
  )
}
