"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";
import SeatSelection from "@/components/seat-selection";
import BookingSummary from "@/components/booking-summary";
import { cn } from "@/lib/utils";
import { getMovieById } from "@/data/movie";

// Mock data for theaters
const theaters = [
  {
    id: "theater-1",
    name: "CineFlex Metropolis",
    location: "Downtown, 123 Main St",
    distance: "2.5 miles away",
  },
  {
    id: "theater-2",
    name: "CineFlex IMAX Plaza",
    location: "Westside Mall, 456 Plaza Ave",
    distance: "4.1 miles away",
  },
  {
    id: "theater-3",
    name: "CineFlex Luxury Cinema",
    location: "Eastside, 789 Luxury Blvd",
    distance: "5.8 miles away",
  },
];

// Mock data for dates
const generateDates = () => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    dates.push({
      date: date,
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      dayNum: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    });
  }

  return dates;
};

// Mock data for showtimes
const showtimes = [
  { time: "10:30 AM", format: "2D" },
  { time: "1:15 PM", format: "2D" },
  { time: "4:00 PM", format: "3D" },
  { time: "7:30 PM", format: "IMAX" },
  { time: "10:45 PM", format: "2D" },
];

export default function BookingPage({ params }: { params: { id: string } }) {
  // Get the actual movie data using the ID from the URL
  const movie = getMovieById(params.id);
  const dates = generateDates();
  const searchParams = useSearchParams();
  const requestedSeats = searchParams.get("seats");

  const [selectedTheater, setSelectedTheater] = useState(theaters[0].id);
  const [selectedDate, setSelectedDate] = useState(
    dates[0].date.toDateString()
  );
  const [selectedShowtime, setSelectedShowtime] = useState(showtimes[3].time);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit-card");

  // Auto-select seats based on the requested count from the modal
  useEffect(() => {
    if (requestedSeats) {
      const seatCount = Number.parseInt(requestedSeats);
      if (seatCount > 0 && seatCount <= 10) {
        // Auto-select optimal seats (middle rows, center seats)
        const autoSeats: string[] = [];
        const preferredRows = ["E", "F", "G"]; // Middle rows
        const centerSeats = [6, 7, 8, 9]; // Center seats

        let seatsAdded = 0;
        for (const row of preferredRows) {
          for (const seatNum of centerSeats) {
            if (seatsAdded < seatCount) {
              autoSeats.push(`${row}${seatNum}`);
              seatsAdded++;
            }
          }
          if (seatsAdded >= seatCount) break;
        }

        setSelectedSeats(autoSeats);
      }
    }
  }, [requestedSeats]);

  const handleSeatSelection = (seatId: string) => {
    const maxSeats = requestedSeats ? Number.parseInt(requestedSeats) : 10;

    if (selectedSeats.includes(seatId)) {
      // Always allow deselecting a seat
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      // If we're at the limit, replace the first selected seat with the new one
      if (selectedSeats.length >= maxSeats) {
        // Remove the first seat and add the new one (FIFO - First In, First Out)
        const newSeats = [...selectedSeats.slice(1), seatId];
        setSelectedSeats(newSeats);
      } else {
        // Add seat normally if under the limit
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
  };

  const getFormattedDate = () => {
    const date = new Date(selectedDate);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const getSelectedTheaterName = () => {
    const theater = theaters.find((t) => t.id === selectedTheater);
    return theater ? theater.name : "";
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <main className="flex-1 bg-black overflow-x-hidden">
      {/* Booking Header */}
      <div className="m-2 rounded-lg bg-zinc-900 border-b border-zinc-800">
        <div className="container px-4 md:px-6 py-4 max-w-full overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-16 sm:w-16 sm:h-24 rounded overflow-hidden hidden sm:block flex-shrink-0">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">
                {movie.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mt-1">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="hidden sm:inline">{movie.releaseDate}</span>
                  <span className="sm:hidden">
                    {movie.releaseDate.split(",")[0]}
                  </span>
                </div>
                {requestedSeats && (
                  <div className="flex items-center text-[#FC174D]">
                    <span>{requestedSeats} seats</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Steps */}
          <div className="flex items-center mt-4 sm:mt-6">
            <div className="flex items-center">
              <div
                className={cn(
                  "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium",
                  step >= 1
                    ? "bg-[#FC174D] text-white"
                    : "bg-zinc-800 text-gray-400"
                )}
              >
                1
              </div>
              <span
                className={cn(
                  "ml-2 text-xs sm:text-sm font-medium hidden sm:inline",
                  step >= 1 ? "text-white" : "text-gray-400"
                )}
              >
                Select Seats
              </span>
            </div>

            <div className="w-8 sm:w-12 md:w-24 h-px bg-zinc-700 mx-2 sm:mx-4"></div>

            <div className="flex items-center">
              <div
                className={cn(
                  "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium",
                  step >= 2
                    ? "bg-[#FC174D] text-white"
                    : "bg-zinc-800 text-gray-400"
                )}
              >
                2
              </div>
              <span
                className={cn(
                  "ml-2 text-xs sm:text-sm font-medium hidden sm:inline",
                  step >= 2 ? "text-white" : "text-gray-400"
                )}
              >
                Payment
              </span>
            </div>

            <div className="w-8 sm:w-12 md:w-24 h-px bg-zinc-700 mx-2 sm:mx-4"></div>

            <div className="flex items-center">
              <div
                className={cn(
                  "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium",
                  step >= 3
                    ? "bg-[#FC174D] text-white"
                    : "bg-zinc-800 text-gray-400"
                )}
              >
                3
              </div>
              <span
                className={cn(
                  "ml-2 text-xs sm:text-sm font-medium hidden sm:inline",
                  step >= 3 ? "text-white" : "text-gray-400"
                )}
              >
                Confirmation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Content */}
      <div className="container px-4 md:px-6 py-6 sm:py-8 max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8 w-full min-w-0">
          {/* Main Booking Area */}
          <div className="min-w-0 w-full">
            {step === 1 && (
              <>
                {/* Theater Selection */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Select Theater
                  </h2>
                  <div className="grid gap-3">
                    {theaters.map((theater) => (
                      <div
                        key={theater.id}
                        className={cn(
                          "border rounded-lg p-3 sm:p-4 cursor-pointer transition-all",
                          selectedTheater === theater.id
                            ? "border-[#FC174D] bg-zinc-900"
                            : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                        )}
                        onClick={() => setSelectedTheater(theater.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-medium text-white text-sm sm:text-base break-words">
                              {theater.name}
                            </h3>
                            <div className="flex items-center text-xs sm:text-sm text-gray-400 mt-1">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                              <span className="break-words">
                                {theater.location}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-400 ml-2 flex-shrink-0">
                            {theater.distance}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Select Date
                  </h2>
                  <div className="overflow-x-auto pb-2 -mx-4 px-4">
                    <div className="flex gap-3 min-w-max">
                      {dates.map((date, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all",
                            selectedDate === date.date.toDateString()
                              ? "border-[#FC174D] bg-zinc-900"
                              : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                          )}
                          onClick={() =>
                            setSelectedDate(date.date.toDateString())
                          }
                        >
                          <span className="text-xs text-gray-400">
                            {date.day}
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-white mt-1">
                            {date.dayNum}
                          </span>
                          <span className="text-xs text-gray-400 mt-1">
                            {date.month}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Showtime Selection */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Select Showtime
                  </h2>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                    {showtimes.map((showtime, index) => (
                      <div
                        key={index}
                        className={cn(
                          "border rounded-lg px-3 py-3 sm:px-4 cursor-pointer transition-all",
                          selectedShowtime === showtime.time
                            ? "border-[#FC174D] bg-zinc-900"
                            : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                        )}
                        onClick={() => setSelectedShowtime(showtime.time)}
                      >
                        <div className="text-center">
                          <span className="font-medium text-white text-sm sm:text-base">
                            {showtime.time}
                          </span>
                          <div className="text-xs text-gray-400 mt-1">
                            {showtime.format}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seat Selection */}
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Select Seats
                    {requestedSeats && (
                      <span className="text-sm text-gray-400 ml-2">
                        ({selectedSeats.length} of {requestedSeats} selected)
                      </span>
                    )}
                    {!requestedSeats && selectedSeats.length > 0 && (
                      <span className="text-sm text-gray-400 ml-2">
                        ({selectedSeats.length} selected)
                      </span>
                    )}
                  </h2>
                  {requestedSeats && (
                    <div className="mb-4 p-3 bg-blue-900/30 border border-blue-700 rounded-lg">
                      <p className="text-blue-400 text-sm">
                        💡 <strong>Tip:</strong> Click on any available seat to
                        swap your selection. You can select exactly{" "}
                        {requestedSeats} seat
                        {Number.parseInt(requestedSeats) !== 1 ? "s" : ""}.
                        {selectedSeats.length >=
                          Number.parseInt(requestedSeats) && (
                          <span className="block mt-1 text-green-400">
                            ✓ Perfect! You have selected all {requestedSeats}{" "}
                            seats.
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  <SeatSelection
                    selectedSeats={selectedSeats}
                    onSeatSelect={handleSeatSelection}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Payment
                </h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6">
                  <div className="mb-6">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-4">
                      Booking Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm sm:text-base">
                          Movie:
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base break-words text-right">
                          {movie.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm sm:text-base">
                          Theater:
                        </span>
                        <span className="text-white text-sm sm:text-base break-words text-right">
                          {getSelectedTheaterName()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm sm:text-base">
                          Date:
                        </span>
                        <span className="text-white text-sm sm:text-base break-words text-right">
                          {getFormattedDate()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm sm:text-base">
                          Time:
                        </span>
                        <span className="text-white text-sm sm:text-base">
                          {selectedShowtime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm sm:text-base">
                          Seats:
                        </span>
                        <span className="text-white text-sm sm:text-base break-words text-right">
                          {selectedSeats.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-6 mb-6">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-4">
                      Payment Method
                    </h3>
                    <div className="space-y-4">
                      <div
                        className={cn(
                          "border rounded-lg p-3 sm:p-4 flex items-center cursor-pointer transition-all",
                          selectedPaymentMethod === "credit-card"
                            ? "border-[#FC174D] bg-zinc-800"
                            : "border-zinc-700 hover:border-zinc-600"
                        )}
                        onClick={() => setSelectedPaymentMethod("credit-card")}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#FC174D] flex items-center justify-center mr-3 flex-shrink-0">
                          <div
                            className={cn(
                              "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all",
                              selectedPaymentMethod === "credit-card"
                                ? "bg-[#FC174D]"
                                : "bg-transparent"
                            )}
                          ></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <div className="w-10 h-6 sm:w-12 sm:h-8 bg-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                              <img
                                src="/images/mastercard-logo.png"
                                alt="Mastercard"
                                className="h-4 sm:h-6 object-contain"
                              />
                            </div>
                            <span className="text-white text-sm sm:text-base">
                              Credit/Debit Card
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "border rounded-lg p-3 sm:p-4 flex items-center cursor-pointer transition-all",
                          selectedPaymentMethod === "paypal"
                            ? "border-[#FC174D] bg-zinc-800"
                            : "border-zinc-700 hover:border-zinc-600"
                        )}
                        onClick={() => setSelectedPaymentMethod("paypal")}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#FC174D] flex items-center justify-center mr-3 flex-shrink-0">
                          <div
                            className={cn(
                              "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all",
                              selectedPaymentMethod === "paypal"
                                ? "bg-[#FC174D]"
                                : "bg-transparent"
                            )}
                          ></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <div className="w-10 h-6 sm:w-12 sm:h-8 bg-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                              <img
                                src="/images/paypal-logo.png"
                                alt="PayPal"
                                className="h-3 sm:h-5 object-contain"
                              />
                            </div>
                            <span className="text-white text-sm sm:text-base">
                              PayPal
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "border rounded-lg p-3 sm:p-4 flex items-center cursor-pointer transition-all",
                          selectedPaymentMethod === "apple-pay"
                            ? "border-[#FC174D] bg-zinc-800"
                            : "border-zinc-700 hover:border-zinc-600"
                        )}
                        onClick={() => setSelectedPaymentMethod("apple-pay")}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#FC174D] flex items-center justify-center mr-3 flex-shrink-0">
                          <div
                            className={cn(
                              "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all",
                              selectedPaymentMethod === "apple-pay"
                                ? "bg-[#FC174D]"
                                : "bg-transparent"
                            )}
                          ></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <div className="w-10 h-6 sm:w-12 sm:h-8 bg-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                              <img
                                src="/images/apple-pay-logo.png"
                                alt="Apple Pay"
                                className="h-3 sm:h-5 object-contain"
                              />
                            </div>
                            <span className="text-white text-sm sm:text-base">
                              Apple Pay
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedPaymentMethod === "credit-card" && (
                    <div className="border-t border-zinc-800 pt-6">
                      <h3 className="text-base sm:text-lg font-medium text-white mb-4">
                        Card Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-400 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === "paypal" && (
                    <div className="border-t border-zinc-800 pt-6">
                      <div className="text-center py-6 sm:py-8">
                        <div className="w-12 h-8 sm:w-16 sm:h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                          <img
                            src="/images/paypal-logo.png"
                            alt="PayPal"
                            className="h-6 sm:h-8 object-contain"
                          />
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-white mb-2">
                          PayPal Payment
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          You will be redirected to PayPal to complete your
                          payment securely.
                        </p>
                        <div className="text-sm text-gray-400">
                          Total:{" "}
                          <span className="text-white font-medium">
                            $
                            {(
                              selectedSeats.length * 12.99 +
                              selectedSeats.length * 1.5
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === "apple-pay" && (
                    <div className="border-t border-zinc-800 pt-6">
                      <div className="text-center py-6 sm:py-8">
                        <div className="w-12 h-8 sm:w-16 sm:h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                          <img
                            src="/images/apple-pay-logo.png"
                            alt="Apple Pay"
                            className="h-6 sm:h-8 object-contain"
                          />
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-white mb-2">
                          Apple Pay
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          Use Touch ID or Face ID to pay with Apple Pay.
                        </p>
                        <div className="text-sm text-gray-400">
                          Total:{" "}
                          <span className="text-white font-medium">
                            $
                            {(
                              selectedSeats.length * 12.99 +
                              selectedSeats.length * 1.5
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="w-full lg:w-auto">
            <BookingSummary
              movie={movie}
              theater={getSelectedTheaterName()}
              date={getFormattedDate()}
              time={selectedShowtime}
              seats={selectedSeats}
              step={step}
              onContinue={handleContinue}
              onBack={handleBack}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
