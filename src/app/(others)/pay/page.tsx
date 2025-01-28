"use client";

import Image from "next/image";
import { notFound, useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/form/Button";
import courses from "@/data/courses";

const ConstructionPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams().get("course");
  // const courseTitle =
  const course = courses.find((course) => course.slug === searchParams);

  if (!course) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-10 px-4 ">
      <div className="shadow-xl mb-5 max-w-[500px] mx-auto rounded-2xl relative overflow-hidden">
        <div className="mx-auto flex items-center justify-center mb-5">
          <Image
            src={course.img.src}
            alt={course.title}
            sizes="400vw"
            width={500}
            height={500}
          />
        </div>
        <div className="p-5">
          <div>
            <p>
              Thank you for choosing to learn with AMA! We are excited to have
              you take this step towards your professional growth. To gain
              access to the video course, please follow these steps:
            </p>
            <b className="uppercase">1. Make your payment:</b> <br />
            <span>Use the details below to complete your payment:</span> <br />
            <span>
              Account Name: <b>Latifat Adeola</b>
            </span>{" "}
            <br />
            <span>
              Account Number: <b>2030230248</b>
            </span>{" "}
            <br />
            <span>
              Account Bank: <b>Kuda Microfinance Bank</b>
            </span>{" "}
            <br />
            <span>
              Course: <b>{course?.title}</b>
            </span>
            <br />
            <span>
              Amount: <b>₦ {course?.price}</b>
            </span>
          </div>
          {/* ========================================== */}
          <div className="mt-5">
            <b className="uppercase">2.Upload Your Payment Receipt:</b> <br />
            <span>
              After making the payment, kindly upload a clear image of your
              receipt using the form below. This helps us verify your
              transaction quickly and book a slot for your one-to-one session.
            </span>{" "}
            <br />
            <div className="my-5">
              <Button
                text="Upload Receipt"
                href="https://forms.gle/e8XZz6X15o553DEG6"
                target="_blank"
              />
            </div>
          </div>
          <div className="mt-10">
            <b className="uppercase">3. Receive Your Course Link:</b> <br />
            <span>
              Once we confirm your payment, you’ll receive an email with the
              link to access our video course. If you have any questions or
              encounter any issues, feel free to contact us via email{" "}
              <a
                href="mailto:amaeduservices@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                amaeduservices@gmail.com
              </a>
              . We are here to support you every step of the way.
            </span>{" "}
            <br />
          </div>
        </div>
      </div>

      <Button text="BACK" onClick={() => router.back()} />
    </div>
  );
};

export default ConstructionPage;
