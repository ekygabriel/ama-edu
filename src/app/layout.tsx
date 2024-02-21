import type { Metadata } from "next";
import { redhat, kumbh } from "./font";

import "./globals.css";
// import AppHeader from "@/components/layout/nav";
// import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - Anuoluwapo Michael-Ayeni",
    default: "Anuoluwapo Michael-Ayeni",
  },
  description:
    "This is the website of Anuoluwapo Michael-Ayeni, Early Childhood Educator, Educational Consultant, School Leader and Phonics/ Diction Expert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kumbh} ${redhat} flex flex-col min-h-[100vh] overflow-x-hidden `}
      >
        <div className="grow OthersLayout">{children}</div>
        <div id="modal"></div>
        <div id="backdrop"></div>
      </body>
    </html>
  );
}
