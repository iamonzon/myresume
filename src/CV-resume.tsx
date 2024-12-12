import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Iván Agustín Monzón</h1>
        <p className="text-gray-600">
          Full Stack Software Engineer
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-sm leading-relaxed">
          Full Stack Software Engineer with 8 years of experience architecting and building high-throughput distributed systems. 
          Specialized in functional programming with Scala and JVM ecosystems, delivering solutions that handle 60k+ QPS while 
          maintaining system reliability. Proven track record of leading technical teams and architecting complex integrations 
          across diverse technology stacks. Passionate about polyglot development with a demonstrated ability to master new 
          programming languages and paradigms.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
          TECHNICAL SKILLS
        </h2>
        <div className="text-sm space-y-4">
          <div>
            <p className="font-semibold mb-1">Core Expertise:</p>
            <p>Distributed Systems Design, High-throughput Processing, Enterprise Integration Patterns</p>
          </div>
          
          <div className="space-y-2">
            <p className="font-semibold">Programming:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Functional Programming: Scala (2.11-2.13) with strong experience in TypeLevel ecosystem</li>
              <li>Object-Oriented: Java (8+), Groovy</li>
              <li>Frontend: JavaScript/TypeScript, React, Angular, Vue.js</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Frameworks & Architecture:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Backend: Spring Framework, Akka, Dropwizard</li>
              <li>Message Processing: Kafka, Redis, JMS</li>
              <li>Database Systems: Cassandra, DynamoDB, MariaDB, DocumentDB</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Infrastructure & DevOps:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cloud Platforms: AWS (DocumentDB, S3, EC2, ElastiCache, CloudWatch)</li>
              <li>CI/CD & Infrastructure: Docker, Jenkins, Terraform, Rancher, Github</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Methodologies:</p>
            <p>Event-Driven Architecture, Microservices Design, Functional Programming Patterns, Agile Development</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
          PROFESSIONAL EXPERIENCE
        </h2>
        
        {/* Agile Engine */}
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-bold">Software Engineer, Agile Engine</h3>
            <span className="text-sm text-gray-600">October 2023 - October 2024</span>
          </div>
          <p className="text-sm italic mb-2">
            Global professional services company building custom software engineering solutions
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-2">
            <li>Engineered and maintained a robust backend system for Sales Compensation Plans, ensuring accurate and timely compensation calculations through strategic system improvements</li>
            <li>Architected and implemented integration solutions across major CRM platforms (HubSpot, SalesForce, ConnectWise), creating a flexible data model that accommodates diverse business rules</li>
            <li>Spearheaded cross-functional integration initiatives, establishing technical standards and fostering collaboration between internal teams and external partners</li>
          </ul>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: Scala 2.11, Spring Framework, Jenkins, AWS (DocumentDB, S3, EC2, ElastiCache, CloudWatch), Microservices
          </p>
        </div>

        {/* Etermax & X3M */}
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-bold">Software Engineer, Etermax & X3M (Etermax's AdTech Division)</h3>
            <span className="text-sm text-gray-600">March 2022 - September 2023</span>
          </div>
          <p className="text-sm italic mb-2">
            Leading gaming company and its specialized AdTech division focusing on mobile gaming monetization
          </p>
          <p className="text-sm font-semibold mb-2">Core Achievements:</p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-2">
            <li>Architected and maintained high-throughput ad serving systems processing 60k QPS using Scala and Akka, implementing functional programming patterns for improved reliability</li>
            <li>Designed distributed caching architecture using Redis and Elasticsearch, achieving 40% reduction in response time while maintaining data consistency across microservices</li>
            <li>Developed scalable backend services incorporating concurrent data structures and explicit state management, significantly improving system debugging capabilities</li>
            <li>Implemented comprehensive monitoring solutions for both business and performance metrics, enabling data-driven optimization of ad operations</li>
            <li>Led performance optimization initiatives for advertising space allocation, directly contributing to platform revenue growth</li>
            <li>Collaborated with cross-functional teams to establish and maintain high-throughput microservices architecture</li>
          </ul>
          <div className="text-sm space-y-1 mb-2 pl-5">
            <p><span className="font-semibold">Initial Role (Etermax):</span> Focused on core ad serving infrastructure and caching strategies</p>
            <p><span className="font-semibold">Advanced Role (X3M):</span> Led optimization initiatives and cross-team collaboration for enhanced monetization</p>
          </div>
          <p className="text-sm text-gray-600 pl-5">
            Technical Environment: Scala (2.13), Akka, Typelevel, Java, Kotlin, Dropwizard, Redis, Elasticsearch, MariaDB, Cassandra, DynamoDB, AWS (S3, EC2, CloudWatch), Terraform
          </p>
        </div>

        {/* Continue with other experiences... */}
        {/* For brevity, I'll show you how to add the rest after we verify this structure works for you */}
      </section>
    </div>
  );
};

export default CV;