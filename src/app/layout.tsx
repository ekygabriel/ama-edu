import type { Metadata } from "next";
import { redhat, kumbh } from "./font";

import "./globals.css";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: {
    template: "%s - Anuoluwapo Michael-Ayeni",
    default: "Anuoluwapo Michael-Ayeni",
  },
  description:
    "This is the website of Anuoluwapo Michael-Ayeni, Early Childhood Educator, Educational Consultant, School Leader and Phonics/ Diction Expert.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  metadataBase: new URL("https://anuoluwapomichaelayeni.com"),
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
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grow OthersLayout">{children}</div>
          <div id="modal"></div>
          <div id="backdrop"></div>
        </Suspense>
      </body>
    </html>
  );
}
