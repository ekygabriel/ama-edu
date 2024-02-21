import { Metadata } from "next";

import { CPD, Course1, Course2, Course3 } from "@/assets";
import HeroBanner from "@/components/HeroBanner";
import BreadCrumbs from "../_components/BreadCrumbs";
import Image from "next/image";
import Button from "@/components/form/Button";

const courses = [
  {
    img: Course1,
    title: "Teach Your Child to Read From Age 3",
    info: "This course is for parents who want to learn to support their children in developing reading skills/reading fluently.",
    details: [
      "Phonics video course.",
      "30 days reading activity calendar.",
      "Phonics digital resources.",
      "2 one on one consultations.",
    ],
    price: 12.0,
  },
  {
    img: Course2,
    title: "Teach Reading like a Pro!",
    info: "This course is for teachers who want to learn to teach children to read fluently using a blend of the Jolly Phonics and Letters and sounds program.",
    details: [
      "Phonics video course.",
      "Resources.",
      "Phonics digital resources.",
      "One on one consultations.",
    ],
    price: 12.0,
  },
];

export const metadata: Metadata = {
  title: "Continuous Professional Development",
  description: "Courses authored by Anuoluwapo Michael-Ayeni",
};

const CoursesPage = () => {
  return (
    <div className="OthersLayout">
      <HeroBanner
        imageUrl={CPD}
        title="Continuous Professional Development (CPD)"
      />
      <BreadCrumbs />
      <ul className="pt-14 pb-40 flex gap-8 flex-wrap max-w-4xl justify-center mx-auto px-4">
        {courses.map((course) => (
          <li
            key={course.title}
            className="w-[350px] shadow-lg rounded-2xl overflow-hidden relative pb-20 h-maxfd"
          >
            <Image
              src={course.img}
              alt={`${course.title}'s image`}
              width={300}
              height={300}
              style={{ width: "100%" }}
            />

            <h4 className="text-xl p-3">{course.title}</h4>
            <div className="font-kumbh text-sm px-3 pb-4">
              <p className="!leading-[18px]">
                <b>Course Information: </b>
                {course.info}
              </p>
              <p className="!leading-[18px]">
                In this course, you will have access to:{" "}
              </p>
              <ul className="!leading-[18px]">
                {course.details.map((item, index) => (
                  <li
                    key={index}
                    className="before:content-['']  before:w-1 before:h-1 before:bg-black before:block before:rounded-full flex items-center before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full justify-between absolute bottom-8 px-3 border-t pt-6">
              <Button text="Take Course" href="/construction" />
              <b>$ 12.00</b>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
