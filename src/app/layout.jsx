// app/layout.js
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "United Tea Traders",
  description: "Brewing 25 years of trust • Wholesale & Retail",
  icons: {
    icon: "/favicon.ico", // path inside public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
