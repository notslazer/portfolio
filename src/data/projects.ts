export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: "Full Stack Website" | "Open Source" | "Data Science" | "Machine Learning";
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "2026 FIFA World Cup Predictor",
    description: "A machine learning project using historical match data, FIFA rankings, and squad market values to predict the winner and simulate the knockout stages of the 2026 FIFA World Cup.",
    image: "/images/fifa-world-cup-predictor.jpg",
    tags: ["Machine Learning", "Python", "Data Science"],
    githubUrl: "https://github.com/notslazer/fifa-world-cup-2026-predictor",
    demoUrl: "",
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "Disaster Warning Dashboard",
    description: "The Disaster Warning Dashboard is a comprehensive web application designed to provide real-time disaster monitoring and response information for India. It aggregates meteorological data, threat assessments, and emergency response details to help users stay informed about potential natural disasters such as floods, cyclones, and earthquakes.",
    image: "/images/disaster-warning-dashboard.jpg",
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
    githubUrl: "https://github.com/notslazer/disaster-warning-dashboard",
    demoUrl: "https://disaster-warning-dashboard.vercel.app/",
    category: "Full Stack Website"
  },
  {
    id: 3,
    title: "CommitPulse",
    description: "A high-performance Next.js API that transforms raw GitHub contribution data into premium, 3D isometric monoliths. Featuring real-time GraphQL syncing, custom SVG filters, and deep theme customization",
    image: "/images/commitpulse.jpg",
    tags: ["Next.js", "GitHub", "Typescript", "GraphQL", "API Development"],
    githubUrl: "https://github.com/JhaSourav07/commitpulse",
    demoUrl: "https://commitpulse.vercel.app/",
    category: "Open Source"
},
{
    id: 4,
    title: "Customer Retention & Churn Analysis",
    description: "An advanced data analytics project that leverages historical customer data to predict churn and identify retention strategies. Utilizing machine learning algorithms, the project provides actionable insights for businesses to enhance customer loyalty and reduce attrition rates.",
    image: "/images/customer-retention.png",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "Machine Learning"],
    githubUrl: "https://github.com/notslazer/customer-retention-analytics",
    demoUrl: "",
    category: "Data Science"
},
{
    id: 5,
    title: "Marketing Funnel & Conversion Performance Analysis",
    description: "A comprehensive data analytics project that examines the effectiveness of marketing funnels and conversion rates across various channels. By analyzing user behavior and engagement metrics, the project identifies key areas for optimization to enhance overall marketing performance.",
    image:  "/images/marketing-funnel-analytics.jpg",
    tags: ["Python", "Tableau", "Data Visualization", "Analytics"],
    githubUrl: "https://github.com/notslazer/marketing-funnel-analytics",
    demoUrl: "",
    category: "Data Science"
}
];