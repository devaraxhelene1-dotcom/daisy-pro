import type { Metadata } from "next"
import { Poppins, Oswald } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Daisy Pro",
  description: "Gestion des ateliers créatifs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} ${oswald.variable} min-h-screen`} style={{ backgroundColor: "#FCF8E8" }}>
        <header className="max-w-md mx-auto px-4 pt-6 flex justify-between items-center">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Daisy Pro</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: "var(--primary)" }}>
            HV
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
