"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Film, MapPin, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Film, label: "Movies", href: "/movies" },
    { icon: MapPin, label: "Theaters", href: "/theaters" },
    { icon: User, label: "Profile", href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t md:hidden">
      <div className="grid h-full grid-cols-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn("flex flex-col items-center justify-center", isActive ? "text-[#FC174D]" : "text-gray-400")}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
