import React, { useEffect } from 'react';
import ualbertaLogo from '../images/ualberta-logo.jpeg';
import unlpLogo from '../images/unlp-logo.jpeg';
import datacampLogo from '../images/datacamp-logo.jpeg';

const CV = () => {

  const TechnicalSkills = () => {
    const skillCategories = [
      {
        title: "Software Development",
        subcategories: [
          {
            subtitle: "Languages",
            items: [
              { group: "JVM", skills: "Scala (2.11-2.13, 3), Java (8+), Groovy" },
              { group: "Web", skills: "JavaScript, TypeScript" }
            ]
          },
          {
            subtitle: "Paradigms",
            items: [
              "Functional Programming (TypeLevel ecosystem)",
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
            items: ["Spring", "Play", "Dropwizard"]
          }
        ]
      },
      {
        title: "Distributed Systems",
        subcategories: [
          {
            subtitle: "Message Brokers",
            items: ["Kafka", "Redis", "JMS"]
          },
          {
            subtitle: "Actor Systems",
            items: ["Akka"]
          }
        ]
      },
      {
        title: "Data Storage",
        subcategories: [
          {
            subtitle: "Relational",
            items: ["PostgreSQL", "MariaDB"]
          },
          {
            subtitle: "NoSQL",
            items: ["DynamoDB", "MongoDB", "DocumentDB"]
          }
        ]
      }
    ];

    // Separate Cloud & Infrastructure section
    const cloudInfrastructure = {
      title: "Cloud & Infrastructure",
      subcategories: [
        {
          subtitle: "AWS Services",
          items: ["DocumentDB", "S3", "EC2", "ElastiCache", "CloudWatch"]
        },
        {
          subtitle: "DevOps Tools",
          items: ["Docker", "Jenkins", "Terraform", "Rancher", "GitHub"]
        }
      ]
    };

    return (
      <section className="mb-8 p-6 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">
          TECHNICAL SKILLS
        </h2>
        
        {/* Main grid for first 4 categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800">
                {category.title}
              </h3>
              
              {category.subcategories.map((subcat, subIdx) => (
                <div key={subIdx} className="ml-4">
                  {subcat.subtitle && (
                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      {subcat.subtitle}
                    </h4>
                  )}
                  
                  <ul className="list-disc ml-4 space-y-1">
                    {subcat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-600">
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          <span>
                            <span className="font-medium">{item.group}:</span> {item.skills}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Full-width Cloud & Infrastructure section */}
        <div className="mt-6 space-y-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors">
          <h3 className="text-xl font-semibold text-gray-800">
            {cloudInfrastructure.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cloudInfrastructure.subcategories.map((subcat, subIdx) => (
              <div key={subIdx} className="ml-4">
                <h4 className="text-lg font-medium text-gray-700 mb-2">
                  {subcat.subtitle}
                </h4>
                <ul className="list-disc ml-4 space-y-1">
                  {subcat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page {
          margin: 2cm;
          size: A4;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          color-adjust: exact;
          background-color: white !important;
        }
        section {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        .page-break-before {
          page-break-before: always;
          break-before: always;
        }
        @-moz-document url-prefix() {
          body {
            size: A4;
          }
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 font-sans print:bg-white">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Iván Agustín Monzón</h1>
        <p className="text-xl text-gray-600 mb-2">
          Full Stack Software Engineer
        </p>
        <p className="text-lg text-gray-600">
          <a href="mailto:ivan.agustin.monzon@gmail.com" className="hover:text-gray-800 transition-colors">
            ivan.agustin.monzon@gmail.com
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-base leading-relaxed">
          Full Stack Software Engineer with 8 years of experience architecting and building high-throughput distributed systems. 
          Specialized in functional programming with Scala and JVM ecosystems, delivering solutions that handle 60k+ QPS while 
          maintaining system reliability. Proven track record of leading technical teams and architecting complex integrations 
          across diverse technology stacks.
        </p>
      </section>

      {/* Technical Skills */}
      <TechnicalSkills />
      
      {/* Professional Experience */}
      <section className="page-break-before">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">
          PROFESSIONAL EXPERIENCE
        </h2>
        {/* Programate */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold">Founder, Programate PY</h3>
            <span className="text-gray-600">October 2024 - Present</span>
          </div>
          <p className="text-base italic mb-3">
            Building product for migration opportunities.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Architected MVP product for migration opportunities</li>
            <li>Researched competitors and market</li>
            <li>Developed product roadmap</li>
          </ul>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: AWS, Scala 3, React native
          </p>
        </div>

        
        {/* Agile Engine */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold">Software Engineer, Agile Engine</h3>
            <span className="text-gray-600">October 2023 - October 2024</span>
          </div>
          <p className="text-base italic mb-3">
            Global professional services company building custom software engineering solutions
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Engineered and maintained a robust backend system for Sales Compensation Plans, ensuring accurate and timely compensation calculations through strategic system improvements</li>
            <li>Architected and implemented integration solutions across major CRM platforms (HubSpot, SalesForce, ConnectWise), creating a flexible data model that accommodates diverse business rules</li>
            <li>Spearheaded cross-functional integration initiatives, establishing technical standards and fostering collaboration between internal teams and external partners</li>
          </ul>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: Scala 2.11, Spring Framework, Jenkins, AWS (DocumentDB, S3, EC2, ElastiCache, CloudWatch), Microservices
          </p>
        </div>

        {/* Etermax & X3M */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold">Software Engineer, Etermax & X3M (Etermax's adtech division)</h3>
            <span className="text-gray-600">March 2022 - September 2023</span>
          </div>
          <p className="text-base italic mb-3">
            Leading gaming company and its specialized AdTech division focusing on mobile gaming monetization
          </p>
          <p className="text-base font-semibold mb-2">Core Achievements:</p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Architected and maintained high-throughput ad serving systems processing 60k QPS using Scala and Akka, implementing functional programming patterns for improved reliability</li>
            <li>Designed distributed caching architecture using Redis and Elasticsearch, achieving 40% reduction in response time while maintaining data consistency across microservices</li>
            <li>Developed scalable backend services incorporating concurrent data structures and explicit state management, significantly improving system debugging capabilities</li>
            <li>Implemented comprehensive monitoring solutions for both business and performance metrics, enabling data-driven optimization of ad operations</li>
            <li>Led performance optimization initiatives for advertising space allocation, directly contributing to platform revenue growth</li>
            <li>Collaborated with cross-functional teams to establish and maintain high-throughput microservices architecture</li>
          </ul>
          <div className="text-base space-y-1 mb-3 pl-5">
            <p><span className="font-semibold">Initial Role (Etermax):</span> Focused on core ad serving infrastructure and caching strategies</p>
            <p><span className="font-semibold">Advanced Role (X3M):</span> Led optimization initiatives and cross-team collaboration for enhanced monetization</p>
          </div>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: Scala (2.13), Akka, Typelevel, Java, Kotlin, Dropwizard, Redis, Elasticsearch, MariaDB, Cassandra, DynamoDB, AWS (S3, EC2, CloudWatch), Terraform
          </p>
        </div>

        {/* Redbee */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold">Technical Lead - Software Engineer, Redbee</h3>
            <span className="text-gray-600">November 2020 - March 2022</span>
          </div>
          <p className="text-base italic mb-3">
            Digital innovation company specializing in engineering and design solutions
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Led a 6-member development team in building and maintaining a digital payment platform processing 15k QPS</li>
            <li>Architected microservices-based solutions using Scala and React, ensuring scalability and maintainability</li>
            <li>Implemented event-driven architecture using Kafka, enabling real-time data processing and system integration</li>
            <li>Mentored junior developers and established coding standards, improving team productivity and code quality</li>
          </ul>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: JavaScript, TypeScript, React, Scala 2.12, Redis, Kafka, Docker, CI/CD
          </p>
        </div>

        {/* Flux IT */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold">Full Stack Software Developer, Flux IT</h3>
            <span className="text-gray-600">June 2019 - November 2020</span>
          </div>
          <p className="text-base italic mb-3">
            Enterprise IT solutions provider specializing in cloud and security services
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Developed and maintained multiple Spring-based enterprise applications including ERP, CRM and Project Management systems</li>
            <li>Implemented responsive front-end solutions using Angular and Vue.js, improving user experience and application performance</li>
            <li>Contributed to containerization initiatives using Docker and Rancher, streamlining deployment processes</li>
          </ul>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: JavaScript, AngularJS, Vue.js, Java 8, Groovy, Docker, Rancher
          </p>
        </div>

        {/* Accenture */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold">Fullstack Software Developer, Accenture</h3>
            <span className="text-gray-600">January 2016 - May 2019</span>
          </div>
          <p className="text-base italic mb-3">
            Global professional services company leading in digital transformation
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Received "Great Employee of 2018" award for developing an innovative VR office tour application</li>
            <li>Led development of an AI-powered WhatsApp chatbot for credit loans, winning internal hackathon</li>
            <li>Managed business intelligence solutions using Microstrategy for LATAM streaming services company</li>
            <li>Developed and maintained airline client platform, implementing robust CRM services with Java Spring</li>
          </ul>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: Java 8, Spring, JMS, Hibernate, jQuery, Microstrategy, Teradata, DataStage
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">
          EDUCATION & CERTIFICATIONS
        </h2>
        
        <div className="space-y-6">
          {/* University of Alberta */}
          <div className="flex items-start space-x-4">
            <img 
              src={ualbertaLogo} 
              alt="University of Alberta"
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-baseline">
              <div>
                <h3 className="text-xl font-bold">University of Alberta</h3>
                <p className="text-lg">Software Design and Architecture</p>
              </div>
              <span className="text-gray-600">Jul 2020</span>
            </div>
          </div>

          {/* UNLP - BASc */}
          <div className="flex items-start space-x-4">
            <img 
              src={unlpLogo} 
              alt="UNLP"
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-baseline">
              <div>
                <h3 className="text-xl font-bold">Universidad Nacional de La Plata</h3>
                <p className="text-lg">Bachelor of Applied Science - BASc, Mathematics</p>
              </div>
              <span className="text-gray-600">May 2020</span>
            </div>
          </div>

          {/* DataCamp */}
          <div className="flex items-start space-x-4">
            <img 
              src={datacampLogo} 
              alt="DataCamp"
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-baseline">
              <div>
                <h3 className="text-xl font-bold">DataCamp</h3>
                <p className="text-lg">Data Scientist with Python</p>
              </div>
              <span className="text-gray-600">Jul 2019</span>
            </div>
          </div>

          {/* UNLP - BE */}
          <div className="flex items-start space-x-4">
            <img 
              src={unlpLogo} 
              alt="UNLP"
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-baseline">
              <div>
                <h3 className="text-xl font-bold">Universidad Nacional de La Plata</h3>
                <p className="text-lg">Bachelor of Engineering - BE</p>
              </div>
              <span className="text-gray-600">Feb 2013</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV; 
