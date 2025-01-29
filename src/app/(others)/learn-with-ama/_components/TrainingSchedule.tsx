import Card from "../../services/_components/Card";

import classes from "./TrainingSchedule.module.scss";

const schedule = [
  {
    title: "Diction and Phonetics for Educators.",
    date: "16th - 17th April",
    audience: "Teachers, School Leaders, Childminders etc.",
    mode: "Fully Virtual",
    duration: "2 Days",
  },
  {
    title: "Early Years Teachers’ Connect",
    date: "Saturday, 23rd August",
    audience: "Teachers, Early Years Leads, Childminders etc",
    mode: "Physical",
    duration: "1 Day",
  },
  {
    title:
      "Advanced Mentorship for Early Years Practitioners (Group Mentorship)",
    date: "25th Jan - 8th March, 26th Apr - 7th Jun, 25th Oct - 6th Dec",
    audience:
      "New intending or current early years practitioners and child minders.",
    mode: "Fully Virtual. Live Classes on Saturdays.",
    duration: "8 weeks",
  },
  {
    title: "Advanced Mentorship for Early Years Leads (Group Mentorship)",
    date: "26th July - 6th Sept",
    audience: "Leaders, administrators, consultants etc.",
    mode: "Fully Virtual. Live Classes on Saturdays.",
    duration: "8 weeks",
  },
];
const TrainingSchedule = () => {
  return (
    <div className={classes.Container}>
      <h3 className="text-3xl md:text-5xl text-center mb-20">
        {new Date().getFullYear()} Training Schedule
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
