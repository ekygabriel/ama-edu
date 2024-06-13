"use client";

import Image from "next/image";
import TypeWriter from "./TypeWriter";
import Button from "@/components/form/Button";
import { AnuHome, BG_Colors } from "@/assets";
import BubblesComponent from "./BubblesBG";

const Homepage = () => {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center">
      <Image
        src={BG_Colors}
        width={1000}
        height={1000}
        className="w-[500px]"
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
        alt=""
      />
      <BubblesComponent />

      <div className="flex items-center min-w-[300px] md:min-w-[800px] max-w-7xl justify-between gap-10 flex-col md:flex-row py-20 sm:py-0">
        <Image
          src={AnuHome}
          alt="Anuoluwapo Michael-Ayeni"
          width={250}
          height={250}
          sizes="500vw"
          style={{ width: "350px" }}
          className="flex-[1] shrink-0 md:self-start"
        />
        <div className="flex flex-col gap-10 flex-[3] md:max-w-[500px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p>Hi! Welcome to my space. I am</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl -mb-6 flex flex-col text-black">
                <span>Anuoluwapo</span>
                <span className="whitespace-nowrap">Michael-Ayeni</span>
              </h2>
            </div>
            <TypeWriter />
            <div className="flex flex-col items-center md:flex-row gap-10 md:gap-3 relative z-10">
              <Button text="More About Me" href="/about-me" />
              <Button text="View My Services" href="/services" />
            </div>
            <div className="hidden md:flex w-max relative z-10">
              <Button
                text="Sign up for Mentorship"
                href="/services/mentorship"
              />
            </div>
            <div className="flex md:hidden justify-center z-10">
              <Button text="Mentorship Signup" href="/services/mentorship" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  <div className="flex items-center min-w-[300px] md:min-w-[800px] max-w-7xl justify-between gap-10 flex-col md:flex-row border-4">
//    <figure className="relative block w-[200px] !h-[200px] md:w-[500px] md:h-[350px] flex-[1] shrink-0 md:self-start border-4">
//      <Image
//        src={AnuHome}
//        alt="Anuoluwapo Michael-Ayeni"
//        // width={250}
//        // height={250}
//        fill
//        sizes="500vw"
//        // style={{ width: "250px" }}
//        style={{ objectFit: "contain" }}
//        className="static"
//        // className="flex-[1] shrink-0 md:self-start"
//      />
//    </figure>
//    <div className="flex flex-col gap-10 flex-[3] md:max-w-[500px] border-4 ml-2cdsf0">
//      <div className="flex flex-col gap-10">
//        <div className="flex flex-col gap-2 text-center md:text-left">
//          <p>Hi! Welcome to my space. I am</p>
//          <h2 className="text-4xl sm:text-5xl md:text-6xl -mb-6 flex flex-col text-black">
//            <span>Anuoluwapo</span>
//            <span className="whitespace-nowrap">Michael-Ayeni</span>
//          </h2>
//        </div>
//        <TypeWriter />
//        <div className="flex flex-col items-center md:flex-row gap-10 md:gap-3 relative z-10">
//          <Button text="More About Me" href="/about-me" />
//          <Button text="View My Portfolio" href="/early-years" />
//        </div>
//        <div className="hidden md:flex w-max relative z-10">
//          <Button
//            text="Join My Mentorship Community"
//            href="/services/mentorship"
//          />
//        </div>
//        <div className="flex md:hidden justify-center z-10">
//          <Button text="Mentorship Community" href="/services/mentorship" />
//        </div>
//      </div>
//    </div>
//  </div>;

export default Homepage;
