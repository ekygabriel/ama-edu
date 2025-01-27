"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Logo_White } from "@/assets";

const FooterLogo = () => {
  const router = useRouter();
  return (
    <Image
      src={Logo_White}
      alt="AMA Logo"
      width={200}
      height={120}
      onDoubleClick={() => router.push("/login")}
    />
  );
};

export default FooterLogo;
