import type { Metadata } from "next";
import React from "react";

import "reveal.js/reveal.css";
import "reveal.js/plugin/highlight/monokai.css";
import "../styles/material.css";

export const metadata: Metadata = {
  title: "Platform101",
  description:
    "Introduction to Internet of Things Platforms — a presentation by Parham Alvani.",
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐼</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
