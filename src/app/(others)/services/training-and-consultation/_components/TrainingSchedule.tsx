import Card from "../../_components/Card";

import classes from "./TrainingSchedule.module.scss";

const schedule = [
  {
    title: "The EYFS Teacher Bootcamp",
    date: "17th February - 23rd March, 2024",
    audience: "Teachers, School leaders, Childminders, Administrators etc.",
    mode: "Fully Virtual. Live Classes on Saturdays.",
    duration: "6 Weeks",
  },
  {
    title: "Supporting Learning at Home",
    date: "Saturday 22nd June, 2024",
    audience: "Parents, Tutors, Caregivers etc.",
    mode: "Fully Virtual.",
    duration: "2 Hours",
  },
  {
    title: "Early Years Teachers’ Connect",
    date: "Saturday 17th August, 2024",
    audience: "Teachers, Early Years Leads, Childminders etc",
    mode: "Physical",
    duration: "1 Day",
  },
  {
    title: "Diction and Phonetics for Educators.",
    date: "14th - 16th November, 2024",
    audience: "Teachers, School Leaders, Childminders etc.",
    mode: "Fully Virtual",
    duration: "3 Days",
  },
];
const TrainingSchedule = () => {
  return (
    <div className={classes.Container}>
      <h3 className="text-3xl md:text-5xl text-center mb-20">
        2024 Training Schedule
      </h3>
      <div className="flex gap-16 lg:gap-6 flex-col lg:flex-row px-0 md:px-6 max-w-[1200px] mx-auto relative z-10">
        <div className="flex !flex-wrap gap-16 md:gap-4 flex-col md:flex-row mx-auto">
          {schedule.map((item) => (
            <div
              key={item.title}
              className="flex-1 shrink-0 min-w-[300px] max-w-[500px]"
            >
              <Card className="w-full mb-[15px]">
                <h5 className="font-bold text-lg">{item.title}</h5>
              </Card>
              <div className="flex flex-wrap gap-[10px] justify-between">
                <Card className="flex flex-col justify-center w-[48%] min-h-40 ">
                  <h5 className="text-[#B76E79] text-lg font-bold">Date:</h5>
                  <p>{item.date}</p>
                </Card>
                <Card className="flex flex-col justify-center w-[48%] min-h-40 ">
                  <h5 className="text-[#B76E79] text-lg font-bold">
                    Who is this for?
                  </h5>
                  <p>{item.audience}</p>
                </Card>
                <Card className="flex flex-col justify-center w-[48%] min-h-40 ">
                  <h5 className="text-[#B76E79] text-lg font-bold">Mode:</h5>
                  <p>{item.mode}</p>
                </Card>
                <Card className="flex flex-col justify-center w-[48%] min-h-40 ">
                  <h5 className="text-[#B76E79] text-lg font-bold">
                    Duration:
                  </h5>
                  <p>{item.duration}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingSchedule;
