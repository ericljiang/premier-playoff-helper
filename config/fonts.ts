import { Fira_Code as FontMono, Tomorrow } from "next/font/google"

export const fontSans = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
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
