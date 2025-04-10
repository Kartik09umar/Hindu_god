import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Share2, Heart } from "lucide-react"
import { getImageById } from "@/lib/image-data"
import type { Metadata } from "next"

interface ImagePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ImagePageProps): Promise<Metadata> {
  const image = getImageById(params.id)

  return {
    title: `${image?.title || "Divine Image"} | Divine Darshan`,
    description: `High quality HD image of ${image?.title || "Hindu deity"} for devotional purposes. Download this beautiful image for free.`,
    openGraph: {
      images: [image?.src || ""],
    },
  }
}

export default function ImagePage({ params }: ImagePageProps) {
  const image = getImageById(params.id)

  if (!image) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-saffron-800">Image not found</h1>
        <Link href="/" className="mt-4 inline-block text-saffron-600 hover:text-saffron-800">
          Return to gallery
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-saffron-600 hover:text-saffron-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to gallery
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="relative">
            <div className="relative aspect-video overflow-hidden">
              <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" priority />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-3xl font-bold">{image.title}</h1>
              <div className="mt-2 flex items-center">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">{image.category}</span>
                <span className="ml-3 text-sm opacity-90">{image.deity}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <a
                  href={image.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-saffron-500 to-saffron-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download HD Image
                </a>
                <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </button>
              </div>

              <button className="inline-flex items-center rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
                <Heart className="mr-2 h-4 w-4" />
                Add to Favorites
              </button>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-800">About this Divine Image</h2>
              <p className="text-gray-600">{image.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-800">Details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-500">Deity</p>
                  <p className="text-gray-800">{image.deity}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-gray-800">{image.category}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-500">Resolution</p>
                  <p className="text-gray-800">{image.resolution}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-500">Format</p>
                  <p className="text-gray-800">JPG</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-800">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cream-100 px-3 py-1 text-sm text-saffron-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
