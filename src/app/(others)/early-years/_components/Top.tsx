import {
  Collab,
  LearnWithAMALogo,
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
        src={LearnWithAMALogo}
        alt="AMA Early Years Logo"
        width={100}
        height={50}
        className="block mb-5"
      />
      <p>
        AMA offers a wide range of services for early years educators, schools
        and parents who require trainings, consultations and support with
        providing high quality learning and development for early learners in
        Early Childhood Education and Elocution.
      </p>
      <p>
        We also offer professional development courses, trainings, consultation,
        mentorship and support with the development and implementation of the
        Early Years curriculum and Elocution and Diction Services to Schools. We
        provide guidance and support for schools, teachers, parents and
        families, promoting their engagement in their learners’/children's early
        learning, speaking and pronunciation.
      </p>
      <p>
        Our YouTube channel - Early Years Learning TV also offers engaging
        lessons for young children in the different areas of learning and
        development as well as an Early Childhood Show, Webinar replays and
        phonics tips for educators and parents.
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
            To empower parents and practitioners with the relevant skills,
            resources, and communication tools needed to ensure the holistic
            development of early learners, fostering excellence in both learning
            and speech.
          </p>
          <h3 className="text-4xl mt-8 md:mt-16">Mission</h3>
          <p>
            To educate and equip parents and practitioners with the knowledge,
            skills, and best practices in early childhood education, including
            elocution and communication, empowering them to support young
            learners in reaching their fullest potential.
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
