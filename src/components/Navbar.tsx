"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-black text-white sticky top-0 z-100 shadow-sm ">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-14 py-3 flex justify-between items-center text-nowrap">
        <Link href="/" className="text-2xl ">
          Uber
        </Link>

        <div className="hidden lg:flex flex-1 justify-between px-6">
          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/ride"
              className="hover:bg-zinc-800 transition p-2 rounded-2xl duration-200"
            >
              Ride
            </Link>
            <Link
              href="/drive"
              className="hover:bg-zinc-800 transition p-2 rounded-2xl duration-200"
            >
              Drive
            </Link>
            <Link
              href="/login"
              className="hover:bg-zinc-800 transition p-2 rounded-2xl duration-200"
            >
              Business
            </Link>
            <Link
              href="/register"
              className="hover:bg-zinc-800 transition p-2 rounded-2xl duration-200"
            >
              Uber Eats
            </Link>
            <button>
              <Link
                href="/about"
                className="hover:bg-zinc-800 transition p-2 rounded-2xl duration-200"
              >
                About
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="relative w-full max-w-sm">
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Serch Uber.com"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 md:w-44 lg:w-54 bg-white text-sm text-gray-500 pl-10 pr-4 py-2 rounded-3xl border border-zinc-700 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-zinc-800 px-2 py-1 rounded-lg"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className="hidden lg:flex gap-4 text-sm font-medium items-center text-nowrap">
            <Link href="/help" className="p-1 hover:underline">
              Help
            </Link>
            <Link href="/register" className="p-1 hover:underline ">
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-white text-black rounded-2xl  p-2"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium bg-black">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-zinc-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 text-white pl-10 pr-4 py-2 rounded-xl border border-zinc-700 focus:outline-none"
            />
          </div>
          <Link href="/ride" className="hover:underline">
            Ride
          </Link>
          <Link href="/drive" className="hover:underline">
            Drive
          </Link>
          <Link href="/business" className="hover:underline">
            Business
          </Link>
          <Link href="/eats" className="hover:underline">
            Uber Eats
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <div className="flex gap-4">
            <Link href="/register" className="hover:underline">
              Sign Up
            </Link>
            <Link href="/login" className="hover:underline">
              Log in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
