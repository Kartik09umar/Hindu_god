export interface ImageType {
  id: string
  title: string
  src: string
  deity: string
  category: string
  description: string
  tags: string[]
  resolution: string
}

const images: ImageType[] = [
  {
    id: "1",
    title: "Ram Darbar",
    src: "https://i.pinimg.com/736x/19/b0/09/19b009c68eb4d29372764abe28dc64f3.jpg",
    deity: "Ram",
    category: "Devotional",
    description:
      "Lord Ram with Sita, Laxman and Hanuman in a divine setting, representing the ideal family and devotion. This artistic rendition captures the essence of dharma and righteousness.",
    tags: ["Ram", "Sita", "Laxman", "Hanuman", "Darbar"],
    resolution: "11x11",
  },
  {
    id: "2",
    title: "Hanuman Blessing",
    src: "https://i.pinimg.com/736x/db/24/0d/db240db7758a29d2eabdddf6ec30945f.jpg",
    deity: "Hanuman",
    category: "Devotional",
    description:
      "Lord Hanuman in a blessing pose, symbolizing strength, devotion and courage. This Ghibli-inspired artwork portrays the divine monkey god with a serene expression.",
    tags: ["Hanuman", "Blessing", "Devotion", "Strength"],
    resolution: "400x519",
  },
  {
    id: "3",
    title: "Shiva Meditation",
    src: "https://i.pinimg.com/736x/e3/2c/08/e32c08bc4c847d4b70781ac963180f8e.jpg",
    deity: "Shiva",
    category: "Spiritual",
    description:
      "Lord Shiva in deep meditation, representing peace, tranquility and the ultimate consciousness. The artistic style blends traditional iconography with modern aesthetics.",
    tags: ["Shiva", "Meditation", "Peace", "Spiritual"],
    resolution: "400x580",
  },
  {
    id: "4",
    title: "Lakshmi Wealth",
    src: "https://i.pinimg.com/736x/08/03/03/08030392c2606a6b979db1bca79fb4e9.jpg",
    deity: "Lakshmi",
    category: "Prosperity",
    description:
      "Goddess Lakshmi seated on a lotus, showering wealth and prosperity upon her devotees. This artistic interpretation uses soft colors and flowing lines reminiscent of Ghibli animations.",
    tags: ["Lakshmi", "Wealth", "Prosperity", "Goddess"],
    resolution: "400x529",
  },
  {
    id: "5",
    title: "Ganesh Auspicious",
    src: "https://i.pinimg.com/736x/99/ec/35/99ec35cf1a0ddaef5a23db8a2c2429de.jpg",
    deity: "Ganesh",
    category: "Auspicious",
    description:
      "Lord Ganesh, the remover of obstacles and the god of new beginnings, in a blessing pose. The artwork combines traditional symbolism with a modern, approachable style.",
    tags: ["Ganesh", "Auspicious", "Beginnings", "Obstacles"],
    resolution: "1920x1080",
  },
  {
    id: "6",
    title: "Krishna Flute",
    src: "https://i.pinimg.com/736x/69/79/ef/6979ef547a7b5132af067316921ea775.jpg",
    deity: "Krishna",
    category: "Devotional",
    description:
      "Lord Krishna playing his divine flute, enchanting all beings with his melodious music. This artistic rendition captures the playful and divine nature of Krishna in a Ghibli-inspired style.",
    tags: ["Krishna", "Flute", "Music", "Divine"],
    resolution: "1920x1080",
  },
  {
    id: "7",
    title: "Ram with Bow",
    src: "https://i.pinimg.com/736x/ed/38/1d/ed381d1cf44be27fe4710b1daed0a15a.jpg",
    deity: "Ram",
    category: "Warrior",
    description:
      "Lord Ram holding his divine bow, symbolizing righteousness and protection of dharma. The artwork portrays Ram's strength and determination with a modern artistic flair.",
    tags: ["Ram", "Bow", "Warrior", "Righteousness"],
    resolution: "1920x1080",
  },
  {
    id: "8",
    title: "Hanuman Carrying Mountain",
    src: "https://i.pinimg.com/736x/7b/1e/63/7b1e63859650186bcdd6be4e42e33515.jpg",
    deity: "Hanuman",
    category: "Historical",
    description:
      "Lord Hanuman carrying the Sanjeevani mountain to save Laxman, depicting his immense strength and devotion. This dynamic artwork captures the movement and determination in Hanuman's heroic act.",
    tags: ["Hanuman", "Mountain", "Strength", "Devotion"],
    resolution: "1920x1080",
  },
  {
    id: "9",
    title: "Shiva Tandav",
    src: "https://i.pinimg.com/736x/23/c5/c8/23c5c85ae5d5b62bae1d6828acc05a8b.jpg",
    deity: "Shiva",
    category: "Cosmic",
    description:
      "Lord Shiva performing the cosmic dance of Tandav, representing the cycle of creation and destruction. The artistic style blends motion and energy with divine serenity.",
    tags: ["Shiva", "Tandav", "Dance", "Cosmic"],
    resolution: "1920x1080",
  },
  {
    id: "10",
    title: "Lakshmi on Lotus",
    src: "https://i.pinimg.com/736x/d5/76/e3/d576e319440a4f3d47bca06506933dda.jpg",
    deity: "Lakshmi",
    category: "Prosperity",
    description:
      "Goddess Lakshmi seated on a lotus flower, symbolizing purity, prosperity and spiritual enlightenment. The artwork uses soft colors and flowing lines to create a sense of divine grace.",
    tags: ["Lakshmi", "Lotus", "Prosperity", "Purity"],
    resolution: "1920x1080",
  },
  {
    id: "11",
    title: "Ganesh with Modak",
    src: "https://i.pinimg.com/736x/14/ce/25/14ce257f048f2c94a40d8af8b1190cd4.jpg",
    deity: "Ganesh",
    category: "Festive",
    description:
      "Lord Ganesh holding his favorite sweet, modak, symbolizing the sweetness of the spiritual path. This charming artwork portrays Ganesh with a joyful expression in a Ghibli-inspired style.",
    tags: ["Ganesh", "Modak", "Sweet", "Festive"],
    resolution: "1920x1080",
  },
  {
    id: "12",
    title: "Krishna with Radha",
    src: "https://i.pinimg.com/736x/03/61/17/03611758474a078fd43e297c2d03dbeb.jpg",
    deity: "Krishna",
    category: "Divine Love",
    description:
      "Lord Krishna with Radha, depicting the divine love and eternal bond between the soul and the divine. The artwork captures the tender relationship with flowing lines and soft colors.",
    tags: ["Krishna", "Radha", "Love", "Divine"],
    resolution: "1920x1080",
  },
]

export function getAllImages(): ImageType[] {
  return images
}

export function getImageById(id: string): ImageType | undefined {
  return images.find((image) => image.id === id)
}

export function searchImages(query: string): ImageType[] {
  const lowercaseQuery = query.toLowerCase()
  return images.filter(
    (image) =>
      image.title.toLowerCase().includes(lowercaseQuery) ||
      image.deity.toLowerCase().includes(lowercaseQuery) ||
      image.category.toLowerCase().includes(lowercaseQuery) ||
      image.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
