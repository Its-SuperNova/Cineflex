"use client";

import { useSearchParams, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Download,
  Share2,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Star,
} from "lucide-react";
import Link from "next/link";
import { getMovieById } from "@/data/movie";
import Image from "next/image";

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams();
  const params = useParams();

  // Get movie ID from route parameters
  const movieId = params.id as string;
  const movie = getMovieById(movieId);

  // Get booking details from URL parameters
  const theater = searchParams.get("theater") || "CineFlex Metropolis";
  const date = searchParams.get("date") || "Friday, March 15, 2024";
  const time = searchParams.get("time") || "7:30 PM";
  const seats = searchParams.get("seats")?.split(",") || ["E6", "E7"];
  const total = searchParams.get("total") || "31.48";

  // Generate booking reference
  const bookingRef = `CF${Date.now().toString().slice(-8)}`;

  return (
    <main className="flex-1 bg-black min-h-screen">
      <div className="container px-4 md:px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-gray-400">
              Your tickets have been successfully booked
            </p>
          </div>

          {/* Booking Reference */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-white mb-2">
                Booking Reference
              </h2>
              <div className="text-2xl font-bold text-[#FC174D] tracking-wider">
                {bookingRef}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Save this reference for your records
              </p>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-6">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-[#FC174D] to-[#d91341] p-4">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="font-bold text-lg">CineFlex</h3>
                  <p className="text-sm opacity-90">Digital Ticket</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">Booking ID</p>
                  <p className="font-semibold">{bookingRef}</p>
                </div>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="p-6">
              <div className="grid md:grid-cols-[120px_1fr] gap-6">
                {/* Movie Poster */}
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden bg-zinc-800">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Movie Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {movie.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="h-4 w-4 mr-1 fill-[#FC174D] text-[#FC174D]" />
                      <span>{movie.rating}/10</span>
                      <span className="mx-2">•</span>
                      <span>{movie.duration}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center text-gray-400 mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">Theater</span>
                      </div>
                      <p className="text-white font-medium">{theater}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Date</span>
                      </div>
                      <p className="text-white font-medium">{date}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-gray-400 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Time</span>
                      </div>
                      <p className="text-white font-medium">{time}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-gray-400 mb-1">
                        <Ticket className="h-4 w-4 mr-2" />
                        <span className="text-sm">Seats</span>
                      </div>
                      <p className="text-white font-medium">
                        {seats.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Paid</span>
                      <span className="text-xl font-bold text-white">
                        ${total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Footer with QR Code */}
            <div className="border-t border-zinc-800 p-4 bg-zinc-800/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Show this QR code at the theater
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Valid for entry 30 minutes before showtime
                  </p>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/qr.png"
                    alt="QR Code"
                    className="w-14 h-14"
                    width={56}
                    height={56}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
              <Download className="h-4 w-4 mr-2" />
              Download Ticket
            </Button>
            <Button
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Booking
            </Button>
          </div>

          {/* Important Information */}
          <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-400 mb-2">
              Important Information
            </h4>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>• Please arrive at least 15 minutes before showtime</li>
              <li>• Bring a valid ID for verification</li>
              <li>• Outside food and beverages are not permitted</li>
              <li>
                • Tickets are non-refundable but can be rescheduled up to 2
                hours before showtime
              </li>
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white"
            >
              <Link href="/">Back to Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-zinc-700 text-white hover:bg-zinc-800"
            >
              <Link href="/profile">View My Bookings</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
