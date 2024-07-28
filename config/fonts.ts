import { Fira_Code as FontMono, Inter as FontSans, Tomorrow } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontDisplay = Tomorrow({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display"
});
