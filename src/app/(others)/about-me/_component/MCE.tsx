import { MCE } from "@/assets";
import Button from "@/components/form/Button";
import Image from "next/image";

const MCEComponent = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 flex flex-col gap-10 justify-center items-center">
      <Image
        src={MCE}
        alt="Anuoluwapo's Microsoft Certificate"
        width={300}
        height={300}
        style={{ width: "100%", maxWidth: "300px" }}
        sizes="500vw"
      />
      {/* <div className="flex gap-10 items-center flex-col sm:flex-row sm:gap-5">
        <Button text="View Certifications" href="#" />
        <Button text="View Resume" href="#" />
      </div> */}
    </div>
  );
};

export default MCEComponent;
