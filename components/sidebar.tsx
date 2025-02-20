"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const routes = [
  { id: 1, title: "Lessons", to: "/lessons" },
  { id: 2, title: "Junior Golf", to: "/junior-golf" },
  { id: 3, title: "Club Fitting", to: "/club-fitting" },
  { id: 4, title: "Videos", to: "/videos" },
  { id: 5, title: "Calendar", to: "/calendar" },
  { id: 6, title: "Main Site", to: "https://getinthebunker.golf", external: true },
];


export default function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-0 hidden sm:flex h-screen w-64 bg-black text-white font-bold text-xl flex-col z-50">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="block">
          <img
            src="/Bunker_Trademarked_Desktop.png"
            alt="The Bunker"
            className="w-5/6 mx-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-3 px-12">
        {/* Locations Dropdown */}
        {/* <div className="cursor-pointer">
          <div
            className="flex items-center justify-between py-2 hover:text-primary"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>LOCATIONS</span>
            <MdKeyboardArrowDown
              className={`w-6 h-6 transition-transform ${
                showDropdown ? "rotate-180 text-red-500" : "text-white"
              }`}
            />
          </div>
          {showDropdown && (
            <div className="ml-4 space-y-2 transition-all">
              {locations.map((loc) => (
                <Link key={loc.id} href={loc.to} className="block text-lg hover:text-primary">
                  {loc.title}
                </Link>
              ))}
            </div>
          )}
        </div> */}

        {/* Other Links */}
        {routes.map((route) =>
          route.external ? (
            <a key={route.id} href={route.to} target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-primary">
              {route.title}
            </a>
          ) : (
            <Link key={route.id} href={route.to} className="block py-2 hover:text-primary">
              {route.title}
            </Link>
          )
        )}
      </nav>

      {/* Social Icons */}
      <div className="p-6 flex space-x-4 mt-auto">
        <a href="https://www.facebook.com/getinthebunkerNY" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-8 h-8 hover:text-blue-600" />
        </a>
        <a href="https://www.instagram.com/getinthebunker/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-8 h-8 hover:text-red-600" />
        </a>
      </div>
    </aside>
  );
}
