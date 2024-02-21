import Link from "next/link";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const socials = [
  {
    id: "1",
    icon: <BsYoutube />,
    link: "https://youtube.com/@earlyyearslearningtv",
    // color: "#ff0000",
  },
  {
    id: "2",
    icon: <BsInstagram />,
    link: "https://www.instagram.com/invites/contact/?i=18ohz3ai1hg7v&utm_content=eysjh69",
    // color: "#fff",
  },
  {
    id: "3",
    icon: <BsTwitterX />,
    link: "https://www.Twitter.com/@eylearning_ng",
    // color: "black",
  },
  {
    id: "4",
    icon: <BsLinkedin className="rounded-full" />,
    link: "https://www.linkedin.com/in/anuoluwapo-michael-ayeni",
    // color: "#0077b5",
  },
  {
    id: "5",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@earlyyearslearning_ng",
    // color: "white",
  },
  {
    id: "6",
    icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100090501690113&mibextid=LQQJ4d",
    // color: "#1877f2",
  },
];

const SocialMediaIcons: React.FC<{
  className?: string;
  linkClass?: string;
}> = ({ className, linkClass }) => {
  return (
    <ul className={className}>
      {socials.map((item) => (
        <Link
          target="_blank"
          href={item.link}
          key={item.id}
          className={"text-[#E5CBEB] text-2xl " + linkClass}
          // style={{
          //   boxShadow: "0px 0px 10px rgba(255,255,255,.6)",
          //   color: item.color,
          //   background:
          //     item.id == "2"
          //       ? "linear-gradient(to right, #8a3ab9, #fd7e14)"
          //       : item.id == "5"
          //       ? "black"
          //       : "",
          // }}
          // className={linkClass + " bg-white p-2 rounded-full "}
        >
          {item.icon}
        </Link>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
