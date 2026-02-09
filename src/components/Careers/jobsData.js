// jobsData.js
// Example / sample data. Replace with API-driven data as needed.

const jobs = [
  {
    id: "jr-react-dev",
    title: "Junior React Developer",
    dept: "Web",
    type: "Full-time",
    location: "Remote",
    experience: "0-1 years",
    salary: "₹3-5 LPA",
    postedAt: "2025-11-01",
    description:
      "Build responsive UI components using React.js and TailwindCSS. Work closely with backend team on integration.",
    skills: ["React.js", "TailwindCSS", "HTML", "CSS", "Git"],
    responsibilities: [
      "Develop UI components",
      "Collaborate with backend",
      "Write unit tests",
    ],
    perks: ["Flexible hours", "Health insurance", "Learning stipend"],
    remote: true,
    internship: false
  },

  {
    id: "spring-boot-intern",
    title: "Java Spring Boot Intern",
    dept: "IT",
    type: "Internship",
    location: "Nagpur (On-site)",
    experience: "Fresher",
    salary: "Stipend ₹8,000/month",
    postedAt: "2025-10-20",
    description:
      "Hands-on internship working with Java Spring Boot, PostgreSQL and microservices.",
    skills: ["Java", "Spring Boot", "SQL", "Git"],
    responsibilities: [
      "Assist in backend development",
      "Write API endpoints",
      "Unit testing & documentation",
    ],
    perks: ["Mentorship", "Certificate", "PPO on performance"],
    remote: false,
    internship: true
  },

  {
    id: "digital-marketer",
    title: "Digital Marketing Executive",
    dept: "Marketing",
    type: "Full-time",
    location: "Hybrid (Nagpur)",
    experience: "1-3 years",
    salary: "₹4-6 LPA",
    postedAt: "2025-11-05",
    description:
      "Plan & execute paid campaigns, social media, and content marketing to drive leads.",
    skills: ["Meta Ads", "Google Ads", "SEO", "Analytics"],
    responsibilities: ["Campaign setup", "Optimization", "Reporting"],
    perks: ["Work from home", "Performance bonuses"],
    remote: false,
    internship: false
  }
];

export default jobs;
