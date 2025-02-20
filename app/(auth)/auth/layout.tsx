"use client";
import "../../globals.css";
// app/layout.js

import { LayoutProps } from "@/interfaces";

export default function Layout({ children }: LayoutProps) {
  return (
		<html lang="en">
			<head>

			</head>
			<body>
    <div className="flex min-h-screen">
      <div className="flex-1 p-4">{children}</div>
    </div>
		</body>
		</html>
  );
}


