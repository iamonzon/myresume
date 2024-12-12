import React, { useEffect } from 'react';

const CV = () => {
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
          across diverse technology stacks. Passionate about polyglot development with a demonstrated ability to master new 
          programming languages and paradigms.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-4 text-base">
          <div>
            <h3 className="font-semibold mb-2">Core Expertise:</h3>
            <p>Distributed Systems Design, High-throughput Processing, Enterprise Integration Patterns</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Programming:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Functional Programming: Scala (2.11-2.13) with strong experience in TypeLevel ecosystem</li>
              <li>Object-Oriented: Java (8+), Groovy</li>
              <li>Frontend: JavaScript/TypeScript, React, Angular, Vue.js</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Frameworks & Architecture:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Backend: Spring Framework, Akka, Dropwizard</li>
              <li>Message Processing: Kafka, Redis, JMS</li>
              <li>Database Systems: Cassandra, DynamoDB, MariaDB, DocumentDB</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Infrastructure & DevOps:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cloud Platforms: AWS (DocumentDB, S3, EC2, ElastiCache, CloudWatch)</li>
              <li>CI/CD & Infrastructure: Docker, Jenkins, Terraform, Rancher, Github</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Methodologies:</h3>
            <p>Event-Driven Architecture, Microservices Design, Functional Programming Patterns, Agile Development</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="page-break-before">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">
          PROFESSIONAL EXPERIENCE
        </h2>
        
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
            <h3 className="text-xl font-bold">Software Engineer, Etermax & X3M (Etermax's AdTech Division)</h3>
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
    </div>
  );
};

export default CV; 