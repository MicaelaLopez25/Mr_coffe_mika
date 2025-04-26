import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import React from 'react';
import '../styles/globals.css';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#a2845e] py-16 flex justify-center items-center">
        <h1 className="text-white text-6xl font-light italic">Mr coffe</h1>
      </header>

      {/* Main content */}
      <section className="flex flex-col">
        {/* Main image */}
        <div className="w-full h-[350px] relative">
          <Image
            src="/images/latte-art.png"
            alt="Barista pouring milk into coffee cup creating latte art"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Two column images */}
        <div className="grid grid-cols-2 gap-1">
          <div className="h-[320px] relative">
            <Image src="/images/coffee-shop.png" alt="Coffee shop interior" fill className="object-cover" />
          </div>
          <div className="h-[320px] relative">
            <Image src="/images/coffee-beans.png" alt="Coffee beans with scoop" fill className="object-cover" />
          </div>
        </div>

        {/* "The new" section */}
        <div className="bg-[#a2845e] py-6 flex justify-center items-center">
          <h2 className="text-white text-4xl font-light italic">The new</h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 gap-1 p-1">
          <div className="flex flex-col items-center">
            <div className="h-[150px] w-full relative">
              <Image src="/images/milkshake.png" alt="Strawberry milkshake" fill className="object-cover rounded-md" />
            </div>
            <p className="mt-2 text-[#1d1b20] text-lg font-medium">Milshake</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[150px] w-full relative">
              <Image
                src="/images/cake-pink.png"
                alt="Pink cake with strawberries"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-lg font-medium">Cake pink</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[150px] w-full relative">
              <Image
                src="/images/chocotorta.png"
                alt="Chocolate torta dessert"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-lg font-medium">Chocotorta</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[150px] w-full relative">
              <Image
                src="/images/affogato.png"
                alt="Affogato coffee dessert"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-[#1d1b20] text-lg font-medium">Affogato</p>
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
            <Star className="h-6 w-6" />
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
