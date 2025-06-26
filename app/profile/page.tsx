"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Ticket,
  CreditCard,
  Bell,
  LogOut,
  Edit,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import Link from "next/link";

// Mock data for bookings
const bookings = [
  {
    id: "booking-1",
    movie: "Dune: Part Two",
    image: "/dune-part-two-poster.png",
    date: "March 15, 2024",
    time: "7:30 PM",
    theater: "CineFlex Metropolis",
    seats: ["J5", "J6"],
    status: "upcoming",
  },
  {
    id: "booking-2",
    movie: "Oppenheimer",
    image:
      "/placeholder.svg?height=400&width=300&query=oppenheimer movie poster",
    date: "March 10, 2024",
    time: "8:00 PM",
    theater: "CineFlex IMAX Plaza",
    seats: ["D12", "D13", "D14"],
    status: "past",
  },
  {
    id: "booking-3",
    movie: "The Batman",
    image:
      "/placeholder.svg?height=400&width=300&query=the batman movie poster",
    date: "February 28, 2024",
    time: "9:15 PM",
    theater: "CineFlex Luxury Cinema",
    seats: ["G7", "G8"],
    status: "past",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <main className="flex-1 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-zinc-800 mx-auto mb-4 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96&query=person avatar"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-[#FC174D] rounded-full p-1">
                  <Edit className="h-4 w-4 text-white" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-white">John Doe</h2>
              <p className="text-gray-400 text-sm">john.doe@example.com</p>
              <Button
                variant="outline"
                className="mt-4 w-full border-zinc-700 text-white hover:bg-zinc-800"
              >
                Edit Profile
              </Button>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <div className="space-y-1 p-1">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-colors ${
                    activeTab === "bookings"
                      ? "bg-[#FC174D] text-white"
                      : "text-gray-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("bookings")}
                >
                  <Ticket className="h-5 w-5" />
                  <span>My Bookings</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-colors ${
                    activeTab === "profile"
                      ? "bg-[#FC174D] text-white"
                      : "text-gray-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="h-5 w-5" />
                  <span>Personal Info</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-colors ${
                    activeTab === "payment"
                      ? "bg-[#FC174D] text-white"
                      : "text-gray-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Methods</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-colors ${
                    activeTab === "notifications"
                      ? "bg-[#FC174D] text-white"
                      : "text-gray-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </button>
              </div>

              <div className="border-t border-zinc-800 p-4">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-md text-gray-400 hover:bg-zinc-800 hover:text-white transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            {activeTab === "bookings" && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-6">
                  My Bookings
                </h1>

                <Tabs defaultValue="upcoming">
                  <TabsList className="bg-zinc-900 border border-zinc-800">
                    <TabsTrigger
                      value="upcoming"
                      className="data-[state=active]:bg-[#FC174D] data-[state=active]:text-white"
                    >
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger
                      value="past"
                      className="data-[state=active]:bg-[#FC174D] data-[state=active]:text-white"
                    >
                      Past
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="upcoming" className="mt-6">
                    <div className="space-y-4">
                      {bookings
                        .filter((booking) => booking.status === "upcoming")
                        .map((booking) => (
                          <div
                            key={booking.id}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
                          >
                            <div className="grid sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr]">
                              <div className="aspect-[2/3] bg-zinc-800">
                                <img
                                  src={booking.image || "/placeholder.svg"}
                                  alt={booking.movie}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="p-4 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                  <h3 className="text-xl font-bold text-white">
                                    {booking.movie}
                                  </h3>
                                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                                    Confirmed
                                  </div>
                                </div>

                                <div className="grid gap-2 mb-6">
                                  <div className="flex items-center text-gray-400">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>{booking.date}</span>
                                  </div>
                                  <div className="flex items-center text-gray-400">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>{booking.time}</span>
                                  </div>
                                  <div className="flex items-center text-gray-400">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>{booking.theater}</span>
                                  </div>
                                  <div className="flex items-center text-gray-400">
                                    <Ticket className="h-4 w-4 mr-2" />
                                    <span>
                                      Seats: {booking.seats.join(", ")}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                  <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                                    View Ticket
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="border-zinc-700 text-white hover:bg-zinc-800"
                                  >
                                    Cancel Booking
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      {bookings.filter(
                        (booking) => booking.status === "upcoming"
                      ).length === 0 && (
                        <div className="text-center py-12">
                          <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                            <Ticket className="h-8 w-8 text-gray-400" />
                          </div>
                          <h3 className="text-xl font-medium text-white mb-2">
                            No Upcoming Bookings
                          </h3>
                          <p className="text-gray-400 mb-6">
                            You don't have any upcoming movie bookings.
                          </p>
                          <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                            <Link href="/movies">Browse Movies</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="past" className="mt-6">
                    <div className="space-y-4">
                      {bookings
                        .filter((booking) => booking.status === "past")
                        .map((booking) => (
                          <div
                            key={booking.id}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
                          >
                            <div className="grid sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr]">
                              <div className="aspect-[2/3] bg-zinc-800">
                                <img
                                  src={booking.image || "/placeholder.svg"}
                                  alt={booking.movie}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="p-4 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                  <h3 className="text-xl font-bold text-white">
                                    {booking.movie}
                                  </h3>
                                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-gray-400">
                                    Completed
                                  </div>
                                </div>

                                <div className="grid gap-2 mb-6">
                                  <div className="flex items-center text-gray-400">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>{booking.date}</span>
                                  </div>
                                  <div className="flex items-center text-gray-400">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>{booking.time}</span>
                                  </div>
                                  <div className="flex items-center text-gray-400">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>{booking.theater}</span>
                                  </div>
                                  <div className="flex items-center text-gray-400">
                                    <Ticket className="h-4 w-4 mr-2" />
                                    <span>
                                      Seats: {booking.seats.join(", ")}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                  <Button
                                    variant="outline"
                                    className="border-zinc-700 text-white hover:bg-zinc-800"
                                  >
                                    Book Again
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="border-zinc-700 text-white hover:bg-zinc-800"
                                  >
                                    Write a Review
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-6">
                  Personal Information
                </h1>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        defaultValue="1990-01-01"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                      />
                    </div>

                    <div className="border-t border-zinc-800 pt-6">
                      <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-6">
                  Payment Methods
                </h1>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-white">
                      Saved Cards
                    </h2>
                    <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                      Add New Card
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-8 bg-zinc-800 rounded mr-4 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=32&width=48&query=visa card logo"
                            alt="Visa"
                            className="h-6"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Visa ending in 4242
                          </div>
                          <div className="text-sm text-gray-400">
                            Expires 12/25
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-zinc-700 text-white hover:bg-zinc-800"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-zinc-700 text-white hover:bg-zinc-800"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>

                    <div className="border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-8 bg-zinc-800 rounded mr-4 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=32&width=48&query=mastercard logo"
                            alt="Mastercard"
                            className="h-6"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Mastercard ending in 8888
                          </div>
                          <div className="text-sm text-gray-400">
                            Expires 09/26
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-zinc-700 text-white hover:bg-zinc-800"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-zinc-700 text-white hover:bg-zinc-800"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <h2 className="text-lg font-medium text-white mb-4">
                    Billing Address
                  </h2>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        defaultValue="123 Main St"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        defaultValue="Apt 4B"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          defaultValue="New York"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          defaultValue="NY"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          defaultValue="10001"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="border-t border-zinc-800 pt-6">
                      <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-6">
                  Notification Settings
                </h1>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <div>
                        <h3 className="font-medium text-white">
                          Email Notifications
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive emails about your bookings and account
                        </p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700">
                        <span className="absolute inset-0 rounded-full bg-[#FC174D]"></span>
                        <span className="absolute inset-y-0 right-1 flex h-full items-center justify-center">
                          <span className="h-4 w-4 rounded-full bg-white"></span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <div>
                        <h3 className="font-medium text-white">
                          SMS Notifications
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive text messages about your bookings
                        </p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700">
                        <span className="absolute inset-0 rounded-full bg-zinc-700"></span>
                        <span className="absolute inset-y-0 left-1 flex h-full items-center justify-center">
                          <span className="h-4 w-4 rounded-full bg-white"></span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <div>
                        <h3 className="font-medium text-white">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive push notifications on your device
                        </p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700">
                        <span className="absolute inset-0 rounded-full bg-[#FC174D]"></span>
                        <span className="absolute inset-y-0 right-1 flex h-full items-center justify-center">
                          <span className="h-4 w-4 rounded-full bg-white"></span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <div>
                        <h3 className="font-medium text-white">
                          Marketing Emails
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive emails about promotions and new releases
                        </p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700">
                        <span className="absolute inset-0 rounded-full bg-zinc-700"></span>
                        <span className="absolute inset-y-0 left-1 flex h-full items-center justify-center">
                          <span className="h-4 w-4 rounded-full bg-white"></span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Newsletter</h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive our weekly newsletter
                        </p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700">
                        <span className="absolute inset-0 rounded-full bg-[#FC174D]"></span>
                        <span className="absolute inset-y-0 right-1 flex h-full items-center justify-center">
                          <span className="h-4 w-4 rounded-full bg-white"></span>
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-zinc-800 pt-6">
                      <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
