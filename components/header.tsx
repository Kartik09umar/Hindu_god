import Link from "next/link"

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-saffron-700 via-saffron-600 to-saffron-500 py-16 text-white shadow-lg">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl"></div>
        <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-orange-300 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-24 w-24 rounded-full bg-red-300 blur-3xl"></div>
      </div>

      {/* Om symbol */}
      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 transform text-6xl opacity-20 md:block">ॐ</div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto mb-4 flex max-w-xs items-center justify-center">
          <div className="h-px flex-1 bg-orange-300 opacity-50"></div>
          <span className="mx-4 text-2xl">✨</span>
          <div className="h-px flex-1 bg-orange-300 opacity-50"></div>
        </div>

        <Link href="/">
          <h1 className="bg-gradient-to-r from-yellow-100 to-orange-100 bg-clip-text text-4xl font-bold text-transparent drop-shadow-sm md:text-5xl lg:text-6xl">
            Divine Darshan
          </h1>
          <p className="mt-2 text-xl font-light tracking-wide">HD Photos of Hindu Gods </p>
          <p className="mt-1 text-sm font-light opacity-90">Search and Explore Divine Moments</p>
        </Link>

        <div className="mx-auto mt-4 flex max-w-xs items-center justify-center">
          <div className="h-px flex-1 bg-orange-300 opacity-50"></div>
          <span className="mx-4 text-2xl">✨</span>
          <div className="h-px flex-1 bg-orange-300 opacity-50"></div>
        </div>
      </div>
    </header>
  )
}
