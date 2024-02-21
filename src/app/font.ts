import { Kumbh_Sans, Red_Hat_Display } from "next/font/google";

const kumbhfont = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  variable: "--font-kumbh",
});

const redhatfont = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600", "900"],
  variable: "--font-redhat",
});

export const redhat = redhatfont.variable;
export const kumbh = kumbhfont.variable;
