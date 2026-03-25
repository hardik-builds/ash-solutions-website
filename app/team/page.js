
import TeamClient from './team-client';

export const metadata = {
  title: 'Our Team - ASH Solutions | Young, Agile & Innovative',
  description: 'Meet the dynamic and young team behind ASH Solutions. With 10+ academic projects, we bring fresh perspectives and agile solutions to every challenge.',
  keywords: ['ASH Solutions team', 'young developers', 'agile team', 'academic projects', 'student developers'],
  openGraph: {
    title: 'Our Team - ASH Solutions',
    description: 'A young, agile team delivering innovative solutions with a strong academic foundation.',
    type: 'website',
  },
};

// Updated team data for a small, agile, and young team
const teamData = {
  // A single array for all team members
  teamMembers: [
    {
      id: 1,
      name: "Hardik Singh",
      role: "Founder & Full stack Dev",
      image: "/images/hardik-singh.jpeg",
      bio: "Bridging ideas and execution. Passionate about clean code and leading our agile sprints.",
      expertise: ["React", "Node.js", "Agile", "Team Leadership"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 2,
      name: "Anshu Rajkagoria",
      role: "Cybersecurity Engineer",
      image: "/images/Anshu-Rajkagoria.jpeg",
      bio: "Protecting systems and data with precision—every layer secured with purpose.",
      expertise: ["Figma", "User Research", "Prototyping", "Adobe XD"],
      social: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
    {
      id: 3,
      name: "Kuldeep garg",
      role: "Cybersecurity analyst",
      image: "/images/Kuldeep.jpeg",
      bio: "Defending digital assets through vigilant analysis—every threat identified, every risk minimized.",
      expertise: ["Python", "Django", "PostgreSQL", "AWS"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 4,
      name: "Sharan Arundhudhiyar",
      role: "APP developer",
      image: "/images/sharan.jpeg",
      bio: "Designing seamless mobile experiences—every tap intuitive, every feature purposeful.",
      expertise: ["JavaScript", "Vue.js", "CSS3", "Webpack"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 5,
      name: "Nirmal Arundhudhiyar ",
      role: "APP developer",
      image: "/images/Nirmal.jpeg",
      bio: "Building powerful apps that solve real problems—clean code, smooth performance, meaningful impact..",
      expertise: ["Python", "SQL", "Tableau", "Machine Learning"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 6,
      name: "Sachin Sannaki",
      role: "CFO - Chief Financial Officer",
      image: "/images/sachin.jpeg",
      bio: "Driving financial strategy with clarity and control—every decision backed by insight, every rupee optimized for growth.",
      expertise: ["React Native", "Flutter", "Swift", "Kotlin"],
      social: { linkedin: "#", github: "#" }
    },
    // {
    //   id: 7,
    //   name: "Shubham Verma",
    //   role: "CXM - Customer Experience Manager",
    //   image: "/team/quinn.jpg",
    //   bio: "Delivering exceptional customer experiences—every interaction valued, every issue resolved with care.",
    //   expertise: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    //   social: { linkedin: "#", github: "#" }
    // },
    // {
    //   id: 8,
    //   name: "Avery Singh",
    //   role: "Content & QA Strategist",
    //   image: "/team/avery.jpg",
    //   bio: "Ensuring our content is clear and our code is bug-free. The final check for quality.",
    //   expertise: ["Technical Writing", "Selenium", "Jest", "SEO"],
    //   social: { linkedin: "#", twitter: "#" }
    // }
  ],
  // New section to highlight the team's unique strengths
  ourEdge: [
    { 
      title: "Agile & Adaptive", 
      description: "We thrive in fast-paced environments, using agile methodologies to iterate quickly and adapt to new challenges seamlessly.", 
      icon: "🚀" 
    },
    { 
      title: "Fresh Perspectives", 
      description: "As a young team, we bring creativity, new ideas, and a deep understanding of modern technology trends to every project.", 
      icon: "💡" 
    },
    { 
      title: "Academic Rigor", 
      description: "Our foundation is built on 10+ academic projects, giving us a strong theoretical base and a disciplined approach to problem-solving.", 
      icon: "🎓" 
    },
    { 
      title: "Collaborative Spirit", 
      description: "We're a tight-knit group that believes in the power of collaboration. Every voice is heard, and every contribution matters.", 
      icon: "🤝" 
    }
  ]
};

export default function TeamPage() {
  return <TeamClient teamData={teamData} />;
}