import Image from "next/image"
import Link from "next/link"
import type { ImageType } from "@/lib/image-data"

interface ImageGalleryProps {
  images: ImageType[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="my-12 text-center">
        <p className="text-lg text-gray-600">No images found. Please try a different search.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <Link
          href={`/images/${image.id}`}
          key={image.id}
          className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>

          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800">{image.title}</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="rounded-full bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-800">
                {image.category}
              </span>
              <span className="text-sm text-gray-500">{image.deity}</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-full bg-gradient-to-t from-saffron-600 to-saffron-500 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm">Click to view and download</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
