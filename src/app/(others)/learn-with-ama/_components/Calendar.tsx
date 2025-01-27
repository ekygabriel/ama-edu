import { CalendarBG } from "@/assets";
import Image from "next/image";
import TrainingSchedule from "./TrainingSchedule";

const Calendar = () => {
  return (
    <div className="relative">
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
      </div>
    </div>
  );
};

export default Calendar;
