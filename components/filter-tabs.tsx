"use client"

interface FilterTabsProps {
  activeDeity: string
  setActiveDeity: (deity: string) => void
}

export default function FilterTabs({ activeDeity, setActiveDeity }: FilterTabsProps) {
  const deities = [
    { id: "all", name: "All Deities", emoji: "✨" },
    { id: "ram", name: "Ram", emoji: "🏹" },
    { id: "hanuman", name: "Hanuman", emoji: "💪" },
    { id: "shiva", name: "Shiva", emoji: "🔱" },
    { id: "lakshmi", name: "Lakshmi", emoji: "💰" },
    { id: "ganesh", name: "Ganesh", emoji: "🐘" },
    { id: "krishna", name: "Krishna", emoji: "🎵" },
  ]

  return (
    <div className="mb-10 overflow-x-auto">
      <div className="flex min-w-max space-x-3 pb-2">
        {deities.map((deity) => (
          <button
            key={deity.id}
            onClick={() => setActiveDeity(deity.id)}
            className={`flex items-center rounded-full px-6 py-3 text-sm font-medium transition-all ${
              activeDeity === deity.id
                ? "bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-saffron-50 hover:shadow-sm"
            }`}
          >
            <span className="mr-2">{deity.emoji}</span>
            {deity.name}
          </button>
        ))}
      </div>
    </div>
  )
}
