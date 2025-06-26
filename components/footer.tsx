import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 border-t border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CineFlex</h3>
            <p className="text-gray-400 mb-4">
              The ultimate movie booking experience. Watch the latest movies in theaters near you.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#FC174D]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FC174D]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FC174D]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FC174D]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#FC174D]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-[#FC174D]">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/theaters" className="text-gray-400 hover:text-[#FC174D]">
                  Theaters
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-400 hover:text-[#FC174D]">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-gray-400 hover:text-[#FC174D]">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FC174D]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#FC174D]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#FC174D]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#FC174D]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-[#FC174D]">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Download Our App</h4>
            <p className="text-gray-400 mb-4">Get the best movie booking experience on your mobile device.</p>
            <div className="space-y-2">
              <Link href="#" className="block">
                <img src="/app-store-badge.png" alt="App Store" className="h-10" />
              </Link>
              <Link href="#" className="block">
                <img src="/google-play-badge.png" alt="Google Play" className="h-10" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CineFlex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
