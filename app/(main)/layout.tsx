"use client";
import "../globals.css";

import MobileNavbar from "@/components/mobile-sidebar";
import Sidebar from "../../components/sidebar"; // Import your Sidebar component

import { LayoutProps } from "@/interfaces";

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* You can include additional <head> content here if needed */}
      </head>
      <body className="flex min-h-screen overscroll-none flex-col sm:flex-row">
        {/* Sidebar is only shown for non-auth routes */}
        {/* {!isAuthRoute && <Sidebar />} */}
        <Sidebar />
        <MobileNavbar />
        <div className="flex-1 overflow-y-auto ml-0 sm:ml-64 sm:mt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
