import Link from "next/link"
import { Instagram, Mail, Info } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-saffron-800 via-saffron-700 to-saffron-800 py-16 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl"></div>
        <div className="absolute right-1/4 top-20 h-32 w-32 rounded-full bg-orange-300 blur-3xl"></div>
      </div>

      {/* Om symbol */}
      <div className="absolute left-10 top-1/2 hidden -translate-y-1/2 transform text-6xl opacity-10 md:block">ॐ</div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <h3 className="mb-4 text-2xl font-semibold">Divine Darshan ram</h3>
          <p className="text-sm opacity-90">
            Explore and download high-quality images of Hindu deities for your devotional needs.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href="https://instagram.com" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="/about" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Info className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="mb-4 font-serif italic text-lg">"May the divine bless your path"</p>
          <p className="text-xs opacity-80">© 2025 Divine Darshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
