import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger icon from react-icons

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="relative flex sm:hidden w-screen z-50 bg-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between h-20 text-white px-4 w-full z-20">
        <Link href="/" className="block">
          <Image
            src="/Bunker_Trademarked_Mobile.png"
            alt="The Bunker"
            layout="responsive"
            width={300}
            height={300}
            className="mx-auto max-w-[170px]"
            priority
          />
        </Link>
        <div className="lg:hidden">
          {/* Show hamburger icon when menu is closed */}
          {!isOpen ? (
            <button onClick={toggleMenu} aria-label="Open Menu">
              <FiMenu className="text-white text-2xl" />
            </button>
          ) : (
            // Show close icon when menu is open
            <button onClick={toggleMenu} aria-label="Close Menu">
              <FiX className="text-white text-2xl" />
            </button>
          )}
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 transform bg-black bg-opacity-90 transition-transform duration-300 ease-out z-10 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-start pt-20 h-full text-white">
          <Link href="/lessons" className="py-6 text-xl" onClick={closeMenu}>
            Lessons
          </Link>
          <Link href="/junior-golf" className="py-6 text-xl" onClick={closeMenu}>
            Junior Golf
          </Link>
          <Link href="/club-fitting" className="py-6 text-xl" onClick={closeMenu}>
            Club Fitting
          </Link>
          <Link href="/videos" className="py-6 text-xl" onClick={closeMenu}>
            Videos
          </Link>
          <Link href="/calendar" className="py-6 text-xl" onClick={closeMenu}>
            Calendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
