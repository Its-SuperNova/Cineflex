"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Search, LogIn, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "Theaters", href: "/theaters" },
    { name: "Offers", href: "/offers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full  bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#FC174D]">CineFlex</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#FC174D]",
                pathname === link.href ? "text-[#FC174D]" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative">
            {isSearchOpen ? (
              <div className="relative animate-fadeIn">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for movies..."
                  className="pl-10 bg-gray-800 border-zinc-700 text-white placeholder:text-gray-400  h-9 w-[250px]"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={toggleSearch}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#FC174D] hover:bg-transparent"
                onClick={toggleSearch}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex text-white hover:text-[#FC174D] hover:bg-transparent"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>

          <Button className="hidden md:flex bg-[#FC174D] hover:bg-[#d91341] text-white">
            <Link href="/auth/login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </Button>

          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-[#FC174D] hover:bg-transparent"
            onClick={toggleSearch}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black/80 backdrop-blur-sm">
          <div className="container py-3 px-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for movies..."
                className="pl-10 bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400 focus-visible:ring-[#FC174D] h-9 w-full"
                autoFocus
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={toggleSearch}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
