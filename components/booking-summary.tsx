"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface BookingSummaryProps {
  movie: {
    id: string;
    title: string;
    image: string;
  };
  theater: string;
  date: string;
  time: string;
  seats: string[];
  step: number;
  onContinue: () => void;
  onBack: () => void;
}

export default function BookingSummary({
  movie,
  theater,
  date,
  time,
  seats,
  step,
  onContinue,
  onBack,
}: BookingSummaryProps) {
  const router = useRouter();

  // Calculate ticket prices
  const regularPrice = 12.99;
  const vipPrice = 18.99;

  // Count VIP seats (rows J and K)
  const vipSeats = seats.filter(
    (seat) => seat.startsWith("J") || seat.startsWith("K")
  );
  const regularSeats = seats.filter(
    (seat) => !seat.startsWith("J") && !seat.startsWith("K")
  );

  const subtotal =
    vipSeats.length * vipPrice + regularSeats.length * regularPrice;
  const bookingFee = seats.length * 1.5;
  const total = subtotal + bookingFee;

  const handleConfirmPayment = () => {
    // Create URL parameters for the confirmation page
    const params = new URLSearchParams({
      movie: movie.id,
      theater: theater,
      date: date,
      time: time,
      seats: seats.join(","),
      total: total.toFixed(2),
    });

    // Navigate to confirmation page with booking details
    router.push(`/booking/${movie.id}/confirmation?${params.toString()}`);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-semibold text-white mb-4">Booking Summary</h2>

      <div className="flex gap-4 mb-6">
        <div className="w-20 h-28 rounded overflow-hidden">
          <img
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-medium text-white">{movie.title}</h3>
          <div className="text-sm text-gray-400 mt-1">{theater}</div>
          <div className="text-sm text-gray-400">{date}</div>
          <div className="text-sm text-gray-400">{time}</div>
        </div>
      </div>

      {seats.length > 0 && (
        <>
          <div className="border-t border-zinc-800 pt-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Seats</span>
              <span className="text-white">{seats.join(", ")}</span>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-4 mb-4">
            <div className="space-y-2">
              {regularSeats.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Regular Seats ({regularSeats.length})
                  </span>
                  <span className="text-white">
                    ${(regularSeats.length * regularPrice).toFixed(2)}
                  </span>
                </div>
              )}

              {vipSeats.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    VIP Seats ({vipSeats.length})
                  </span>
                  <span className="text-white">
                    ${(vipSeats.length * vipPrice).toFixed(2)}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-gray-400">Booking Fee</span>
                <span className="text-white">${bookingFee.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-4 mb-6">
            <div className="flex justify-between">
              <span className="font-medium text-white">Total</span>
              <span className="font-medium text-white">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}

      {step === 1 && (
        <Button
          className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white"
          disabled={seats.length === 0}
          onClick={onContinue}
        >
          Continue to Payment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <Button
            className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="w-full border-zinc-700 text-white hover:bg-zinc-800"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Seats
          </Button>
        </div>
      )}

      {seats.length === 0 && step === 1 && (
        <div className="text-center text-sm text-gray-400 mt-2">
          Please select at least one seat to continue
        </div>
      )}
    </div>
  );
}
