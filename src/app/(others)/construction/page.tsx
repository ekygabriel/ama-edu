"use client";
import Image from "next/image";

import { Building } from "@/assets";
import Button from "@/components/form/Button";

import classes from "./ConstructionPage.module.scss";
import { useRouter } from "next/navigation";

const ConstructionPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-10 ">
      <div className="relative w-80 h-80">
        <Image src={Building} alt="Under Construction" fill />
      </div>
      <p className="">Page Under Construction</p>
      <Button text="BACK" onClick={() => router.back()} />
    </div>
  );
  return (
    <div className={classes.Container}>
      <div>
        <Image src={Building} alt="Under Construction" fill />
      </div>
      <p className="">Page Under Construction</p>
      <Button text="BACK" href="/archive" />
      {/* <div className="border-4 flex justify-center">
      </div> */}
    </div>
  );
};

export default ConstructionPage;
