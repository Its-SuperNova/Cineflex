"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SeatCountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSeats: (count: number) => void;
  movieTitle: string;
}

export default function SeatCountModal({
  isOpen,
  onClose,
  onSelectSeats,
  movieTitle,
}: SeatCountModalProps) {
  const [selectedCount, setSelectedCount] = useState(2);

  const seatCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSelectSeats = () => {
    onSelectSeats(selectedCount);
    onClose();
  };

  // Get the appropriate vehicle illustration based on seat count
  const getVehicleIllustration = (count: number) => {
    if (count >= 1 && count <= 5) {
      // For counts 1-5, use the specific vehicle SVGs
      return `/vehicles/${count}.svg`;
    } else if (count >= 6 && count <= 8) {
      // For counts 6-8, use vehicle 6
      return `/vehicles/6.svg`;
    } else if (count >= 9 && count <= 10) {
      // For counts 9-10, use vehicle 7
      return `/vehicles/7.svg`;
    }
    // Fallback
    return `/vehicles/7.svg`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mx-4 w-full max-w-md shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-zinc-800 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-400 hover:text-white" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            How Many Seats?
          </h2>
          <p className="text-gray-400 text-sm">{movieTitle}</p>
        </div>

        {/* Vehicle Illustration */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-24 flex items-center justify-center bg-zinc-800 rounded-lg">
            <img
              src={getVehicleIllustration(selectedCount) || "/placeholder.svg"}
              alt={`Vehicle for ${selectedCount} seat${
                selectedCount !== 1 ? "s" : ""
              }`}
              className="w-full h-full object-contain transition-all duration-300 ease-in-out p-2"
              key={selectedCount} // Force re-render for smooth transition
            />
          </div>
        </div>

        {/* Seat Count Selection */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {seatCounts.map((count) => (
            <button
              key={count}
              onClick={() => setSelectedCount(count)}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-200",
                selectedCount === count
                  ? "bg-[#FC174D] text-white shadow-lg scale-110"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white hover:scale-105"
              )}
            >
              {count}
            </button>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="text-center mb-6">
          <div className="text-sm font-medium text-gray-400 mb-1">GOLD</div>
          <div className="text-lg font-bold text-white">
            Rs. {selectedCount * 130}
            <span className="text-sm text-gray-400 font-normal ml-1">
              (Rs. 130 × {selectedCount})
            </span>
          </div>
          <div className="text-sm text-green-400 font-medium">Available</div>
        </div>

        {/* Select Seats Button */}
        <Button
          onClick={handleSelectSeats}
          className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:shadow-lg"
        >
          Select {selectedCount} Seat{selectedCount !== 1 ? "s" : ""}
        </Button>
      </div>
    </div>
  );
}
