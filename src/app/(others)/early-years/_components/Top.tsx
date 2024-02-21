import {
  Collab,
  EarlyYearsLogo,
  Egg_BG,
  Excellence,
  Integrity,
  Vision,
} from "@/assets";
import Image from "next/image";

import "@/app/(others)/EggRotate.scss";

const Top = () => {
  return (
    <div className="text-justify">
      <Image
        src={EarlyYearsLogo}
        alt="AMA Early Years Logo"
        width={200}
        height={80}
        className="block mb-5"
      />
      <p>
        Early Years Learning is an educational consult that offers a wide range
        of services for early years educators, schools and parents who require
        trainings, consultations and support with providing high quality
        learning and development for early learners.
      </p>
      <p>
        We also offer professional development courses, trainings, consultation,
        mentorship and support with the development and implementation of the
        EYFS curriculum. We provide guidance and support for schools, teachers,
        parents and families, promoting their engagement in their learners’/
        children&apos;s early learning.
      </p>
      <p>
        Our YouTube channel - Early years Learning TV also offers engaging
        lessons for young children in the different areas of learning and
        development in line with the EYFS learning goals as well as webinars and
        tips for educators and parents.
      </p>
      <p>
        We are passionate about Early Years Literacy and also provide necessary
        support and intervention for children and teachers of children
        struggling with reading and spelling as well as developing reading and
        spelling skills in young learners from age 3.
      </p>
      <div className="flex flex-col items-center md:flex-row gap-10 mt-20">
        <div className="md:flex-[2] shrink-0">
          <h3 className="text-4xl">Vision</h3>
          <p className="md:max-w-[500px]">
            To empower parents, practitioners and teachers of children in the
            early years with the relevant skills and resources needed to ensure
            the total development of early learners.
          </p>
          <h3 className="text-4xl mt-8 md:mt-16">Mission</h3>
          <p>
            To educate all stake holders in the early years education sector on
            EYFS learning and development, thereby equipping them to support
            learners appropriately to attain their best.
          </p>
        </div>
        <Image
          src={Vision}
          alt=""
          width={300}
          height={300}
          className="md:flex-1 -order-1 md:order-1 h-96 -mb-20 md:mb-0 md:h-auto shrink-0 max-w-[300px]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex md:flex-row flex-col gap-3 mt-20 mb-40 max-w-4xl mx-auto justify-between">
        <div className="relative flex items-center justify-center flex-[2]">
          <Image
            src={Egg_BG}
            alt=""
            width={200}
            height={200}
            style={{ width: "300px" }}
            className="absolute EggBG -z-10 opacity-50"
          />
          <h2 className="z-10 relative">
            Our Core <br /> Values
          </h2>
        </div>
        <div className="flex flex-[3] flex-col sm:flex-row gap-10 md:mx-auto pt-20 md:pt-0 justify-between">
          <div className="flex flex-col gap-6 items-center md:ml-auto">
            <Image
              src={Integrity}
              alt=""
              width={70}
              height={70}
              style={{ maxWidth: "150px" }}
            />
            <p className="font-semibold">Integrity</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Image
              src={Collab}
              alt=""
              width={70}
              height={70}
              style={{ maxWidth: "150px" }}
            />
            <p className="font-semibold">Collaboration</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Image
              src={Excellence}
              alt=""
              width={70}
              height={70}
              style={{ maxWidth: "150px" }}
            />
            <p className="font-semibold">Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
