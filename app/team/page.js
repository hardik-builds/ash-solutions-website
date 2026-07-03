import TeamClient from './team-client';

export const metadata = {
  title: 'Our Team - ASH Solutions | Enterprise Engineers & Solutions Architects',
  description: 'Meet the team behind ASH Solutions. We design, build, and deploy production-ready automation systems and custom software for modern enterprises.',
  keywords: ['ASH Solutions team', 'software engineers', 'cybersecurity experts', 'full-stack developers', 'solutions architects'],
  openGraph: {
    title: 'Our Team - ASH Solutions',
    description: 'A professional engineering team delivering secure, scalable, and automated digital solutions.',
    type: 'website',
  },
};

// Updated team data for a professional, enterprise-focused team
const teamData = {
  teamMembers: [
    {
      id: 1,
      name: "Hardik Singh",
      role: "Founder & Full-Stack Architect",
      image: "/images/hardik-singh.jpeg",
      bio: "Bridging business objectives and software execution. Passionate about scalable architectures and leading our engineering sprints.",
      expertise: ["React/Next.js", "Node.js", "Cloud Architecture", "System Design"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 2,
      name: "Anshu Rajkagoria",
      role: "CEO & Cybersecurity Expert",
      image: "/images/Anshu-Rajkagoria.jpeg",
      bio: "Protecting client systems and databases with enterprise-grade threat modeling and precision engineering.",
      expertise: ["Penetration Testing", "Threat Modeling", "Network Security", "Compliance Frameworks"],
      social: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
    {
      id: 3,
      name: "Kuldeep garg",
      role: "Cybersecurity Analyst",
      image: "/images/Kuldeep.jpeg",
      bio: "Defending digital assets through vigilant auditing and proactive threat detection.",
      expertise: ["SIEM Systems", "Incident Response", "Vulnerability Scanning", "Network Auditing"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 4,
      name: "Sharan Arundhudhiyar",
      role: "Mobile App Developer",
      image: "/images/sharan.jpeg",
      bio: "Designing high-performance mobile experiences with clean architecture and native platform integration.",
      expertise: ["React Native", "Flutter", "iOS/Android Dev", "Mobile UI Patterns"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 5,
      name: "Nirmal Arundhudhiyar",
      role: "Mobile App Developer",
      image: "/images/Nirmal.jpeg",
      bio: "Building robust apps with optimized data syncing, offline capability, and smooth interaction mechanics.",
      expertise: ["React Native", "API Integration", "Mobile Architecture", "Swift/Kotlin"],
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 6,
      name: "Sachin Sannaki",
      role: "CFO - Chief Financial Officer",
      image: "/images/sachin.jpeg",
      bio: "Driving financial planning and operational efficiency to power sustainable corporate scaling.",
      expertise: ["Financial Modeling", "Strategic Planning", "Operations Management", "Risk Assessment"],
      social: { linkedin: "#", github: "#" }
    }
  ],
  ourEdge: [
    { 
      title: "Agile & Adaptive", 
      description: "We thrive in fast-paced environments, using modern agile methodologies to deliver incremental value and adapt to changing requirements.", 
      icon: "🚀" 
    },
    { 
      title: "Modern Architectures", 
      description: "We leverage cutting-edge technologies, modern frameworks, and cloud-native patterns to build robust software systems.", 
      icon: "⚙️" 
    },
    { 
      title: "Enterprise Standards", 
      description: "Our systems align with strict criteria for high-grade security, comprehensive logging, performance benchmarks, and operational efficiency.", 
      icon: "🛡️" 
    },
    { 
      title: "Collaborative Synergy", 
      description: "We align engineering, security, operations, and leadership to deliver cohesive systems that solve complex business challenges.", 
      icon: "🤝" 
    }
  ]
};

export default function TeamPage() {
  return <TeamClient teamData={teamData} />;
}