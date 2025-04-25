import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function NosotrosPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#a2845e] py-16 flex justify-center items-center">
        <h1 className="text-white text-6xl font-light italic">Nosotros</h1>
      </header>

      {/* Main content */}
      <section className="flex flex-col p-6">
        <h2 className="text-[#a2845e] text-3xl font-light italic mb-6">Nuestra historia</h2>

        <div className="flex flex-col items-center">
          <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden mb-6">
            <Image
              src="/images/founders.png"
              alt="Founders of Mr Coffe"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          <p className="text-center text-[#1d1b20] leading-relaxed">
            Todo empezó por nosotras dos con el sueño de abrir una cafetería y después de tantos sacrificios pudimos
            abrir mr coffe, le agradecemos muchos a todas las personas que nos apoyaron y creyeron en nosotras haesta el
            final.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mt-auto">
        <div className="bg-[#a2845e] py-6">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" aria-label="WhatsApp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>
          <h2 className="text-white text-2xl font-light italic text-center">Redes sociales</h2>
        </div>
      </section>

      {/* Bottom navigation */}
      <footer className="border-t border-gray-200">
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
            <Star className="h-6 w-6 fill-current" />
            <span className="text-[#1d1b20] font-medium">Nosotros</span>
          </Link>
        </nav>
      </footer>
    </main>
  )
}
