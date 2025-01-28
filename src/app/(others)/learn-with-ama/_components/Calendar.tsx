import { CalendarBG } from "@/assets";
import Image from "next/image";
import TrainingSchedule from "./TrainingSchedule";
import Button from "@/components/form/Button";

const Calendar = () => {
  return (
    <div className="relative mb-20" id="calendar">
      <Image
        src={CalendarBG}
        alt=""
        width={1000}
        height={800}
        className="absolute"
        style={{ width: "100%" }}
      />
      <div className="max-w-4xl mx-auto">
        <TrainingSchedule />

        <div className="sm:py-10 flex flex-col gap-5 text-center text-lg px-4">
          <p>
            For more details about any of the scheduled trainings or payment
            information, send us a message today.
          </p>
          <Button
            href="https://wa.me/07066631594"
            text="Send a Message"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
