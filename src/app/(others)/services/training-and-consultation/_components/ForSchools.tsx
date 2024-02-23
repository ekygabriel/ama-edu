import { Egg1, Egg2, Egg_BG } from "@/assets";
import Image from "next/image";

import "@/app/(others)/EggRotate.scss";
import Button from "@/components/form/Button";

const ForSchools = () => {
  const lists = [
    "Understanding the EYFS Statutory Framework",
    "Setting up the Early Years Environment (Continuous Provision)",
    "Lesson Planning and Engagement in the 7 Areas of EYFS",
    "Early Years Phonics/Effective strategies for Teaching Reading (Jolly Phonics/ Letters and Sounds)",
    "Observation and Assessment Tools in the Early Years",
    "Learning Through Play Working with Parents as Partners",
    "Behavior Management in the Early Years",
    "Nelson Handwriting",
    "Differentiation in Practice",
    "Special Educational Needs",
    "Diction and Phonetics for Teachers",
    "Child Protection and Safeguarding",
  ];

  const list2 = [
    "School Improvement Plan for School Leaders.",
    "Curriculum Planning and Implementation.",
    "School Policy Development.",
    "Mentorship for Teachers, Teaching Assistants, Childminders etc.",
    "Parents Seminar and Trainings.",
    "Staff recruitment and onboarding.",
    "Lesson Observation and teacher support.",
  ];

  return (
    <div className="py-20 px-4 max-w-5xl text-center mx-auto overflow-x-hidden">
      <h2 className="mb-10 text-4xl">For Schools</h2>
      <p className="mb-20">
        We offer quality Teacher Training and Consultation Services for schools{" "}
        <br />
        (Early Years and Key Stage 1), Child care Centers, Creche/Daycare,
        Nursery Setting etc. Both in-house and virtual options are available.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-20 md:items-start py-10">
        <div
          className="flex items-center justify-center relative"
          style={{ flex: "2" }}
        >
          <span className="absolute animate-bounce w-16 h-16 rounded-full bg-purple-light block z-40 -top-6 right-0"></span>
          <Image
            src={Egg_BG}
            alt=""
            width={300}
            height={300}
            style={{ width: "300px", maxWidth: "300px" }}
            className="absolute EggBG"
          />
          <Image
            src={Egg1}
            alt=""
            width={300}
            height={300}
            style={{ width: "300px", maxWidth: "300px", zIndex: "1" }}
          />
        </div>
        <div className="text-left" style={{ flex: "3" }}>
          <h4>
            Our Training Courses Include <br /> (but not limited to):
          </h4>
          <ul className="font-kumbh text-sm leading-4 mb-16">
            {lists.map((item, index) => (
              <li
                key={index}
                className="before:content-['']  before:w-1 before:h-1 before:bg-black before:absolute before:top-2 before:rounded-full relative mb-2"
              >
                <span className="inline-block ml-3">{item}.</span>
              </li>
            ))}
          </ul>
          <Button
            text="Book a Training Session"
            href="https://forms.gle/TNz6sfwFA1FQ2oAB9"
            target="_blank"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-20 md:items-start pt-20">
        <div
          className="flex items-center justify-center relative md:order-1"
          style={{ flex: "2" }}
        >
          <span className="absolute animate-bounce w-16 h-16 rounded-full bg-purple-light-2 block z-40 -bottom-12 right-0"></span>
          <Image
            src={Egg_BG}
            alt=""
            width={300}
            height={300}
            style={{ width: "300px", maxWidth: "300px" }}
            className="absolute EggBG"
          />
          <Image
            src={Egg2}
            alt=""
            width={300}
            height={300}
            style={{ width: "300px", maxWidth: "300px", zIndex: "1" }}
          />
        </div>
        <div className="text-left" style={{ flex: "3" }}>
          <h4>
            Consultation Services for schools <br /> (but not limited to):
          </h4>
          <ul className="font-kumbh text-sm leading-4 mb-16">
            {list2.map((item, index) => (
              <li
                key={index}
                className="before:content-['']  before:w-1 before:h-1 before:bg-black before:absolute before:top-2 before:rounded-full relative mb-2"
              >
                <span className="inline-block ml-3">{item}.</span>
              </li>
            ))}
          </ul>
          <p className="mb-10">
            Click on the button below to request for my brand portfolio for
            schools.
          </p>
          <Button
            text="Brand Portfolio"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdv4wnWirrPM80YAFZ9EGrfOUEP99LPHX_RmjkAtgQjcrIBLg/viewform"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default ForSchools;
