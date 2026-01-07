import type { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    id: "hotel-reservation-platform",
    subtitle: "Featured Project",
    title: "Hotel Reservation Platform",
    description:
      "Hotel reservation platform integrating a modern guest booking experience with an admin dashboard for real-time hotel management.",
    tech: ["React", "Spring Boot", "PostgreSQL", "HTML/CSS","EJS"],
    image: "/images/projects/Project.png",
    github: "https://github.com/gdjonret/Hotel-Website.git",
     external: "https://www.hotel-leprocess.com/",
    showDetailsButton: true,
    techStack: {
      backend: [
        "Spring Boot",
        "Spring Security (JWT)",
        "Spring Data JPA",
        "Flyway",
        "PostgreSQL",
      ],
      frontend: [
        "React (Public site + Admin dashboard)",
        "HTML",
        "CSS",
        "EJS templates",
      ],
      architecture: ["REST"],
    },
  },
  {
    id: "admin-platform",
    title: "Admin Platform",
    description:
      "Reservation platform with separate public/admin portals, role-based access, and operational workflows for reception and management.",
    tech: ["React", "Spring Boot", "Flyway", "PostgreSQL"],
    image: "/images/projects/Project4.png",
    github: "https://github.com/gdjonret/Admin-Patform-Hotel.git",
    // external: "https://your-demo-link.com",
    showDetailsButton: true,
  },
  {
    id: "braids-booking-platform",
    title: "Braids Booking Platform",
    description:
      "Static booking and marketing platform for a braiding studio, integrating a dynamic service catalog, image galleries, and SMTP-backed contact workflows within a modern Next.js web experience.",
    tech: ["NextJS", "TypeScript", "React", "Tailwind CSS"],
    image: "/images/projects/Project6.png",
    github: "https://github.com/gdjonret/Braids-website.git",
    //external: "https://your-demo-link.com",
  },
  {
    id: "faculty-profile-website",
    title: "Faculty Profile Website",
    description:
      "Static faculty profile site featuring bio, research themes, and quick access to publications, teaching, and people pages in a streamlined experience.",
    tech: ["Javascript", "Html", "CSS"],
    image: "/images/projects/Project5.png",
    github: "https://github.com/yawoezunkpe-byte/Faculty-Website.git",
    external: "https://ezunkpeyawo.com/pages/index.html",
  },
  {
    id: "infrastructure-platform",
    title: "Infrastructure Platform",
    description:
      "Web platform for infrastructure development, presenting educational, residential, and water-system projects through a modern portfolio, service catalog, and fast client quotation flow.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/Project8.png",
    github: "https://github.com/gdjonret/Infrastructure-Website.git",
   // external: "https://your-demo-link.com",
  },
];
