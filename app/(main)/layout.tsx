"use client";
import "@/app/globals.css";
import MobileNavbar from "@/components/mobile-sidebar";
import Sidebar from "../../components/sidebar"; // Import your Sidebar component


import { LayoutProps } from "@/interfaces";

export default function Layout({ children }: LayoutProps) {
  return (
    // <html lang="en">
      <div className="flex min-h-screen overscroll-none flex-col sm:flex-row">
        {/* Sidebar is only shown for non-auth routes */}
        {/* {!isAuthRoute && <Sidebar />} */}
        <Sidebar />
        <MobileNavbar />
        <div className="flex-1 overflow-y-auto ml-0 sm:ml-64 sm:mt-0">
          {children}
					<div className="bg-green-900 text-white text-center h-20 flex items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} The Bunker Lessons. All Rights Reserved.
        </p>
      </div>
        </div>
				
      </div>


    // </html>
  );
}
