"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CastMember {
  name: string
  role: string
  image: string
}

interface CastCrewProps {
  cast: CastMember[]
}

export default function CastCrew({ cast }: CastCrewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = 300

      if (direction === "left") {
        current.scrollLeft -= scrollAmount
      } else {
        current.scrollLeft += scrollAmount
      }

      // Check if we can scroll further
      setTimeout(() => {
        if (current) {
          setShowLeftArrow(current.scrollLeft > 0)
          setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 10)
        }
      }, 100)
    }
  }

  return (
    <div className="relative">
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 border-0 text-white hover:bg-black/70"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll Left</span>
        </Button>
      )}

      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 border-0 text-white hover:bg-black/70"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll Right</span>
        </Button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 py-2 px-1"
        onScroll={() => {
          if (scrollRef.current) {
            const { current } = scrollRef
            setShowLeftArrow(current.scrollLeft > 0)
            setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 10)
          }
        }}
      >
        {cast.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-[140px]">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-white text-sm line-clamp-1">{member.name}</h4>
                <p className="text-gray-400 text-xs line-clamp-1">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
