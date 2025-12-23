import type { Experience } from "@/app/types/experience";

export const experience: Experience[] = [
  {
    id: "sjsu-research-2025",
    company: "SJSU Aerospace",
    companyShort: "SJSU ",
    role: "Software Engineer / Research ",
    period: "June 2025 – Present",
    location: "San Jose, CA",
    link: "https://www.sjsu.edu",
    highlights: [
      "Advancing space imaging research through a nanosatellite mission by developing an onboard Jetson TX2 stack that autonomously captures and processes high-resolution lunar imagery during targeted phases.",
      "Designing an autonomous multi-UAV network that safely collects volcanic monitoring data in hazardous zones, enabling real-time situational awareness.",
      "Developed and tested a Zigbee-mesh communication system and real-time UAV navigation software to deliver fault-tolerant, low-power telemetry from 10+ sensor nodes to a central ground station.",
    ],
    tech: ["Jetson TX2", "C++", "Python", "Autonomy", "UAVs", "Zigbee"],
  },
  {
    id: "siemens-2024",
    company: "Siemens",
    companyShort: "Siemens",
    role: "Software Engineer Intern",
    period: "June 2024 – Aug 2024",
    location: "Fremont, CA",
    link: "https://www.siemens.com",
    tech: ["Python", "Bash", "Java", "Docker", "Distributed Systems"],
    highlights: [
      "Developed Python and Bash automation in Unix/Linux to streamline data extraction and analysis via the Jira REST API, reducing manual reporting time and improving accuracy.",
      "Designed interactive analytics dashboards with Apache Superset and Docker to visualize engineering performance metrics across teams in real time.",
      "Delivered insights that helped managers identify bottlenecks, cutting ticket cycle times by up to 20% and improving team efficiency.",
    ],
  },
  {
    id: "circuit-launch-2021",
    company: "Circuit Launch",
    companyShort: "Circuit Launch",
    role: "Automation Engineer Intern",
    period: "June 2021 – Aug 2021",
    location: "Oakland, CA",
    link: "https://www.circuitlaunch.com",
    tech: ["Python", "C/C++", "Machine Learning"],
    highlights: [
      "Built a Raspberry Pi–based autonomous vehicle prototype with real-time sensor fusion and control algorithms to explore low-cost navigation systems.",
      "Optimized path planning and motion control through testing and data-driven tuning, achieving 95% navigation accuracy across varied conditions.",
    ],
  },
];
