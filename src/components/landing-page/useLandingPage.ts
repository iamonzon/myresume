import ualbertaLogo from '../../images/ualberta-logo.jpeg';
import unlpLogo from '../../images/unlp-logo.jpeg';
import datacampLogo from '../../images/datacamp-logo.jpeg';

export interface SkillItem {
  group?: string;
  skills?: string;
}

export interface SkillSubcategory {
  subtitle?: string;
  items: (string | SkillItem)[];
}

export interface SkillCategory {
  title: string;
  subcategories: SkillSubcategory[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technicalEnvironment: string;
  roles?: {
    initial?: string;
    advanced?: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  logo: string;
  altText: string;
}

export interface LandingPageData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
  };
  professionalSummary: string;
  technicalSkills: {
    mainCategories: SkillCategory[];
    // cloudInfrastructure: SkillCategory;
  };
  professionalExperience: Experience[];
  education: Education[];
}

export const useLandingPage = (): LandingPageData => {
  const personalInfo = {
    name: "Iván Agustín Monzón",
    title: "Full Stack Software Engineer",
    email: "ivan.agustin.monzon@gmail.com"
  };

  const professionalSummary = `Full Stack Software Engineer with 9+ years of experience architecting and building high-throughput distributed systems. 
Specialized in functional programming with Fullstack experience, delivering solutions that handle 60k+ QPS while 
maintaining system reliability. Proven track record of leading technical teams and architecting complex integrations across diverse technology stacks.`;

  const technicalSkills = {
    mainCategories: [
      {
        title: "Software Development",
        subcategories: [
          {
            subtitle: "Languages",
            items: [
              { group: "Frontend", skills: "JavaScript, Typescript" },
              { group: "Backend", skills: "Node.js(typescript, javascript), JVM(Scala 2 and 3, Java 8+), Python" },
              { group: "Databases", skills: "MySQL, MongoDB" },
              { group: "Message Brokers", skills: "Kafka, RabbitMQ" },
              { group: "Caching", skills: "Redis" },
              { group: "Actor Systems", skills: "Akka" },
              { group: "DevOps", skills: "Docker, Jenkins, GitHub, Graphana, Loki" },
              { group: "Cloud", skills: "AWS (DocumentDB, S3, EC2, ElastiCache, CloudWatch)" },
            ]
          },
          {
            subtitle: "Paradigms",
            items: [
              "Functional Programming",
              "Object-Oriented Programming",
              "Event-Driven Architecture"
            ]
          }
        ]
      },
      {
        title: "Web Technologies",
        subcategories: [
          {
            subtitle: "Frontend Frameworks",
            items: ["React", "Angular", "Vue.js"]
          },
          {
            subtitle: "Backend Frameworks",
            items: ["ExpressJS", "Play", "Spring", "Flask", "Dropwizard"]
          }
        ]
      },
    ],
  };

  const professionalExperience: Experience[] = [
    {
      title: "Senior Software Developer",
      company: "Improving",
      period: "February 2025 - September 2025",
      description: "Global professional services company building custom software engineering solutions",
      achievements: [
        "Implemented distributed bulk operations for users",
        "Implemented new features, reported improvements and bug fixes",
        "Collaborated with cross-functional teams to deliver high-quality software"
      ],
      technicalEnvironment: "Angular, AWS, Scala 2"
    },
    {
      title: "Founder",
      company: "Programate PY",
      period: "October 2024 - Present",
      description: "Building product for migration opportunities.",
      achievements: [
        "Architected MVP product for migration opportunities",
        "Researched competitors and market",
        "Developed product roadmap"
      ],
      technicalEnvironment: "ExpressJS, React native, Supabase, Vercel"
    },
    {
      title: "Software Engineer",
      company: "Agile Engine",
      period: "October 2023 - October 2024",
      description: "Global professional services company building custom software engineering solutions",
      achievements: [
        "Engineered and maintained a robust backend system for Sales Compensation Plans, ensuring accurate and timely compensation calculations through strategic system improvements",
        "Architected and implemented integration solutions across major CRM platforms (HubSpot, SalesForce, ConnectWise), creating a flexible data model that accommodates diverse business rules",
        "Spearheaded cross-functional integration initiatives, establishing technical standards and fostering collaboration between internal teams and external partners"
      ],
      technicalEnvironment: "Scala 2.11, Spring Framework, Jenkins, AWS (DocumentDB, S3, EC2, ElastiCache, CloudWatch), Microservices"
    },
    {
      title: "Software Engineer",
      company: "Etermax & X3M (Etermax's adtech division)",
      period: "March 2022 - September 2023",
      description: "Leading gaming company and its specialized AdTech division focusing on mobile gaming monetization",
      achievements: [
        "Architected and maintained high-throughput ad serving systems processing 60k QPS using Scala and Akka, implementing functional programming patterns for improved reliability",
        "Designed distributed caching architecture using Redis and Elasticsearch, achieving 40% reduction in response time while maintaining data consistency across microservices",
        "Developed scalable backend services incorporating concurrent data structures and explicit state management, significantly improving system debugging capabilities",
        "Implemented comprehensive monitoring solutions for both business and performance metrics, enabling data-driven optimization of ad operations",
        "Led performance optimization initiatives for advertising space allocation, directly contributing to platform revenue growth",
        "Collaborated with cross-functional teams to establish and maintain high-throughput microservices architecture"
      ],
      technicalEnvironment: "Scala (2.13), Akka, Typelevel, Java, Kotlin, Dropwizard, Redis, Elasticsearch, MariaDB, Cassandra, DynamoDB, AWS (S3, EC2, CloudWatch), Terraform",
      roles: {
        initial: "Focused on core ad serving infrastructure and caching strategies",
        advanced: "Led optimization initiatives and cross-team collaboration for enhanced monetization"
      }
    },
    {
      title: "Technical Lead - Software Engineer",
      company: "Redbee",
      period: "November 2020 - March 2022",
      description: "Digital innovation company specializing in engineering and design solutions",
      achievements: [
        "Led a 6-member development team in building and maintaining a digital payment platform processing 15k QPS",
        "Architected microservices-based solutions using Scala and React, ensuring scalability and maintainability",
        "Implemented event-driven architecture using Kafka, enabling real-time data processing and system integration",
        "Mentored junior developers and established coding standards, improving team productivity and code quality"
      ],
      technicalEnvironment: "ExpressJS, TypeScript, React, Scala 2.12, Redis, Kafka, Docker, CI/CD"
    },
    {
      title: "Full Stack Software Developer",
      company: "Flux IT",
      period: "June 2019 - November 2020",
      description: "Enterprise IT solutions provider specializing in cloud and security services",
      achievements: [
        "Developed and maintained multiple Spring-based enterprise applications including ERP, CRM and Project Management systems",
        "Implemented responsive front-end solutions using Angular and Vue.js, improving user experience and application performance",
        "Contributed to containerization initiatives using Docker and Rancher, streamlining deployment processes"
      ],
      technicalEnvironment: "JavaScript, AngularJS, Vue.js, Java 8, Groovy, Docker, Rancher"
    },
    {
      title: "Fullstack Software Developer",
      company: "Accenture",
      period: "January 2016 - May 2019",
      description: "Global professional services company leading in digital transformation",
      achievements: [
        "Received \"Great Employee of 2018\" award for developing an innovative VR office tour application",
        "Led development of an AI-powered WhatsApp chatbot for credit loans, winning internal hackathon",
        "Managed business intelligence solutions using Microstrategy for LATAM streaming services company",
        "Developed and maintained airline client platform, implementing robust CRM services with Java Spring"
      ],
      technicalEnvironment: "Java 8, Spring, JMS, Hibernate, jQuery, Microstrategy, Teradata, DataStage"
    }
  ];

  const education: Education[] = [
    {
      institution: "University of Alberta",
      degree: "Software Design and Architecture",
      date: "Jul 2020",
      logo: ualbertaLogo,
      altText: "University of Alberta"
    },
    {
      institution: "Universidad Nacional de La Plata",
      degree: "Bachelor of Applied Science - BASc, Mathematics",
      date: "May 2020",
      logo: unlpLogo,
      altText: "UNLP"
    },
    {
      institution: "DataCamp",
      degree: "Data Scientist with Python",
      date: "Jul 2019",
      logo: datacampLogo,
      altText: "DataCamp"
    },
    {
      institution: "Universidad Nacional de La Plata",
      degree: "Bachelor of Engineering - BE",
      date: "Feb 2013",
      logo: unlpLogo,
      altText: "UNLP"
    }
  ];

  return {
    personalInfo,
    professionalSummary,
    technicalSkills,
    professionalExperience,
    education
  };
};
