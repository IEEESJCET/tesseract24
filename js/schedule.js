const schedule1 = [
  {
    time: "09 - 10 AM",
    program: "Registration",
    description:
      "Registration starts at 09:00 to 10:00 AM at the front of Einstein Hall",
  },
  {
    time: "10 - 11 AM",
    program: "Inaugural Ceremony",
    description: "Join us for the Inaugural Ceremony from 10:00 to 11:00 AM",
  },
  {
    time: "11 - 11:15 AM",
    program: "Tea Break",
    description: "Enjoy a short tea break from 11:00 to 11:15 AM",
  },
  {
    time: "11:15 - 12 PM",
    program: "YP Track",
    description:
      "YP Track session on 'From Campus to Career' from 11:15 AM to 12:00 PM",
    details: "Topic: Navigating the Student to Professional Transition",
  },
  {
    time: "12 - 12:30 PM",
    program: "Sponsors Track",
    description: "Sponsors Track session from 12:00 to 12:30 PM",
  },
  {
    time: "12:30 - 01:30 PM",
    program: "Lunch Break",
    description: "Lunch Break from 12:30 to 01:30 PM",
  },
  {
    time: "01:30 - 02:30 PM",
    program: "Ice Breaking Session",
    description:
      "Participate in the Ice Breaking Session from 01:30 to 02:30 PM",
  },
  {
    time: "02:30 - 03:30 PM",
    program: "WICE Track",
    description: "WICE Track panel discussion from 02:30 to 03:30 PM",
    details: "Topic: The Future of Tech; Trends and Opportunities for Women",
  },
  {
    time: "03:30 - 04:30 PM",
    program: "Mentalism Session",
    description: "Mentalism Session from 03:30 to 04:30 PM",
  },
  {
    time: "04:30 - 04:45 PM",
    program: "Refreshments Break",
    description: "Enjoy a quick refreshments break from 04:30 to 04:45 PM",
  },
  {
    time: "04:45 - 06:15 PM",
    program: "Treasure Hunt",
    description: "Join the Treasure Hunt activity from 04:45 to 06:15 PM",
  },
  {
    time: "06:15 - 07:30 PM",
    program: "Cultural Night",
    description: "Cultural Night event from 06:15 to 07:30 PM",
  },
  {
    time: "07:30 - 08:30 PM",
    program: "Dinner",
    description: "Dinner time from 07:30 to 08:30 PM",
  },
  {
    time: "08:45 - 09 PM",
    program: "Day 01 Wrap",
    description: "Day 01 Wrap-up from 08:45 to 09:00 PM",
  },
];

const schedule2 = [
  {
    time: "07:30 - 09 AM",
    program: "Breakfast",
    description: "Enjoy a delicious breakfast from 07:30 to 09:00 AM",
  },
  {
    time: "09 - 11:30 AM",
    program: "Workshop Session 1 || SBC Presentation",
    description:
      "Participate in Workshop Session 1 or attend the SBC Presentation from 09:00 to 11:30 AM",
  },
  {
    time: "11:30 - 11:45 AM",
    program: "Refreshments Break",
    description: "Take a short refreshments break from 11:30 to 11:45 AM",
  },
  {
    time: "11:45 AM - 01 PM",
    program: "Workshop Session 2 || SBC Presentation",
    description:
      "Participate in Workshop Session 2 or attend the SBC Presentation from 11:45 AM to 01:00 PM",
  },
  {
    time: "01 - 02 PM",
    program: "Lunch Break",
    description: "Lunch break from 01:00 to 02:00 PM",
  },
  {
    time: "02 - 03 PM",
    program: "Workshop Session 3 || SBC Training",
    description:
      "Participate in Workshop Session 3 or attend the SBC Training from 02:00 to 03:00 PM",
  },
  {
    time: "03 - 04 PM",
    program: "Closing Ceremony",
    description: "Join the Closing Ceremony from 03:00 to 04:00 PM",
  },
  {
    time: "04 - 04:15 PM",
    program: "Photo Session",
    description: "Participate in a photo session from 04:00 to 04:15 PM",
  },
  {
    time: "04:15 PM",
    program: "Event Wrap",
    description: "Conclude the event at 04:15 PM",
  },
];

const day_program = document.querySelector(".day_programm1");
const day_program2 = document.querySelector(".day_programm2");

schedule1.map((program) => {
  const program_div = document.createElement("div");
  program_div.classList.add("programm"); // Add the 'programm' class
  const time = document.createElement("p");
  time.classList.add("time");
  time.innerText = program.time;
  const details = document.createElement("div");
  details.classList.add("details");
  const head = document.createElement("p");
  head.classList.add("head");
  head.innerText = program.program;
  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.innerText = program.description;
  details.appendChild(head);
  details.appendChild(desc);
  program_div.appendChild(time);
  program_div.appendChild(details);
  day_program.appendChild(program_div);
});
schedule2.map((program) => {
  const program_div = document.createElement("div");
  program_div.classList.add("programm"); // Add the 'programm' class
  const time = document.createElement("p");
  time.classList.add("time");
  time.innerText = program.time;
  const details = document.createElement("div");
  details.classList.add("details");
  const head = document.createElement("p");
  head.classList.add("head");
  head.innerText = program.program;
  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.innerText = program.description;
  details.appendChild(head);
  details.appendChild(desc);
  program_div.appendChild(time);
  program_div.appendChild(details);
  day_program2.appendChild(program_div);
});

const dayElement = document.getElementsByClassName("day1")[0];
const dayElement2 = document.getElementsByClassName("day2")[0];

dayElement.addEventListener("click", () => {
  dayElement.classList.toggle("active");
  dayElement2.classList.remove("active");
});
dayElement2.addEventListener("click", () => {
  dayElement2.classList.toggle("active");
  dayElement.classList.remove("active");
});
