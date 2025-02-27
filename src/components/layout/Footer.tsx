import Link from "next/link";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import { Logo_White } from "@/assets";
import Image from "next/image";
import SocialMediaIcons from "../SocialMediaIcons";
import NewsletterForm from "../NewsLetter";
import FooterLogo from "./FooterLogo";

const socials = [
  {
    id: "1",
    icon: <BsYoutube />,
    link: "https://youtube.com/@earlyyearslearningtv",
  },
  {
    id: "2",
    icon: <BsInstagram />,
    link: "https://www.instagram.com/invites/contact/?i=18ohz3ai1hg7v&utm_content=eysjh69",
  },
  {
    id: "3",
    icon: <BsTwitterX />,
    link: "https://www.Twitter.com/@eylearning_ng",
  },
  {
    id: "4",
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/anuoluwapo-michael-ayeni",
  },
  {
    id: "5",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@earlyyearslearning_ng",
  },
  {
    id: "6",
    icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100090501690113&mibextid=LQQJ4d",
  },
];

const Footer = () => {
  return (
    <div className="font-kumbh">
      <div className="bg-purple-light flex flex-col py-20 items-center gap-2 px-4">
        <p className="text-center max-w-[600px] mx-auto text-purple-dark ">
          Subscribe to my newsletter for tips, experiences, latest updates and
          trends in early childhood education.
        </p>
        <NewsletterForm />
      </div>
      <footer
        className="flex flex-col gap-14 items-center justify-center p-10  w-full text-white bg-purple-light-2"
        style={{ flex: "3" }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 max-w-[300px] lg:max-w-6xl w-full px-4">
          <div
            style={{ flex: "3" }}
            className="border-b lg:border-b-0 pb-10 lg:pb-0 lg:border-r lg:max-w-max lg:pr-10"
          >
            <FooterLogo />
            <small className="block text-sm max-w-[250px] mt-6 font-light">
              Early Childhood Educator, Educational Consultant, Elocutionist,
              Teacher Trainer and Phonics/Diction Expert.
            </small>
          </div>
          <div style={{ flex: "2" }} className="lg:pl-10">
            <h5 className="text-xl">
              <Link className="hover:underline" href="/services">
                Services
              </Link>
            </h5>
            <div className="flex flex-col gap-1  mt-4">
              <Link
                className="hover:underline text-sm font-light"
                href="/services/training-and-consultation"
              >
                Training and Consultation
              </Link>

              <Link
                className="hover:underline text-sm font-light"
                href="/services/mentorship"
              >
                Mentorship for Teachers
              </Link>
              <Link
                className="hover:underline text-sm font-light"
                href="https://youtube.com/@earlyyearslearningtv"
                target="_blank"
              >
                Videos on YouTube
              </Link>
            </div>
          </div>
          <div style={{ flex: "2" }}>
            <h5 className="text-xl">
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </h5>
            <div className="flex flex-col gap-1 mt-4">
              <Link
                className="hover:underline text-sm font-light"
                href="tel:+2347066631594"
                target="_blank"
              >
                Call me on: +2347066631594
              </Link>
              <div className="text-sm font-light">Follow me on:</div>
              <SocialMediaIcons
                className="flex gap-4 mt-2"
                linkClass="text-2xl text-pink-light mx-auto"
              />
            </div>
          </div>
          <div style={{ flex: "2" }}>
            <h5 className="text-xl">
              <Link href="/early-years" className="hover:underline">
                Learn
              </Link>
            </h5>
            <div className="flex flex-col gap-1 mt-4">
              <Link
                className="text-sm font-light hover:underline"
                href="/learn-with-ama#calendar"
              >
                Training Schedule
              </Link>
              <Link
                className="hover:underline text-sm font-light"
                href="/learn-with-ama/courses"
              >
                Take a Video Course
              </Link>
              <Link
                className="text-sm font-light hover:underline"
                href="/learn-with-ama#programmes"
              >
                Programmes
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm font-light border-t lg:border-t-0 pt-10 lg:pt-0 max-w-[300px] lg:max-w-none">
          AanuOluwapo Michael-Ayeni © {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
        <small className="-mt-10">
          <Link
            href="https://michaelayeni.com"
            target="_blank"
            className="text-black"
          >
            Powered by: The Coding Pastor
          </Link>
        </small>
      </footer>
    </div>
  );
};

export default Footer;
