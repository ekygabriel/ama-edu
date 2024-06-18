import Button from "@/components/form/Button";
import Image from "next/image";

import { data } from "./data";
import "./UpcomingEvents.scss";

const UpcomingEvents = () => {
  return (
    <div id="#events">
      <h2 className="text-6xl py-32 text-center bg-purple-dark text-white">
        Programmes
      </h2>
      <ul className="max-w-[700px] mx-auto px-4 -mt-24 relative z-10 flex flex-col items-center pb-20">
        {data.map((item) => (
          <li
            key={item.title}
            className="flex flex-col sm:flex-row mb-10 rounded-2xl overflow-hidden  max-w-[350px] sm:max-w-none Hover"
            style={{ boxShadow: "0px 4px 28.9px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={150}
              height={60}
              className=""
            />
            <div className="py-2 relative bg-white">
              <h5 className="text-xl font-semibold mb-3 px-4">{item.title}</h5>
              <div className="text-sm px-4">
                {item.info.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="flex justify-between sm:absolute sm:bottom-6 w-full px-4 mt-10 pb-5 sm:mt-0 sm:pb-0">
                <Button
                  text={item.buttonText}
                  href={item.buttonLink}
                  target="_blank"
                />
                <small className="font-bold">{item.tag}</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
