import React from 'react';
import { useLandingPage } from './useLandingPage';
import { layout, typography, components as componentUtils, cn, interactions } from '../../design-system';
import { SECTION_TITLES } from './constants';
import './LandingPage.scss';

const LandingPage = () => {
  const { personalInfo, professionalSummary, technicalSkills, professionalExperience, education } = useLandingPage();

  const TechnicalSkills = () => {
    return (
      <section className={componentUtils.card('lg')}>
        <h2 className={cn(typography.heading(2), componentUtils.divider('light', 'lg'))}>
          {SECTION_TITLES.TECHNICAL_SKILLS}
        </h2>
        
        {/* Main grid for first 4 categories */}
        <div className={cn(layout.grid(2, 'lg'), 'mb-8')}>
          {technicalSkills.mainCategories.map((category, idx) => (
            <div key={idx} className={componentUtils.skillItem()}>
              <h3 className={typography.heading(3)}>
                {category.title}
              </h3>
              
              {category.subcategories.map((subcat, subIdx) => (
                <div key={subIdx} className="ml-4">
                  {subcat.subtitle && (
                    <h4 className={cn(typography.heading(4, 'left', 'accent'), 'mb-2')}>
                      {subcat.subtitle}
                    </h4>
                  )}
                  
                  <ul className={componentUtils.list('disc', 'normal')}>
                    {subcat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={typography.text('base', 'normal', 'secondary')}>
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
        <div className={cn(componentUtils.skillItem(), 'mt-6')}>
          <h3 className={typography.heading(3)}>
            {technicalSkills.cloudInfrastructure.title}
          </h3>
          
          <div className={layout.grid(2)}>
            {technicalSkills.cloudInfrastructure.subcategories.map((subcat, subIdx) => (
              <div key={subIdx} className="ml-4">
                <h4 className={cn(typography.heading(4, 'left', 'accent'), 'mb-2')}>
                  {subcat.subtitle}
                </h4>
                <ul className={componentUtils.list('disc', 'normal')}>
                  {subcat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={typography.text('base', 'normal', 'secondary')}>
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
        </div>
      </section>
    );
  };


  return (
    <div className={cn(layout.container('md'), 'bg-white text-gray-800 font-sans print:bg-white')}>
      {/* Header Section */}
      <header className={cn(layout.section('md'), 'text-center')}>
        <h1 className={cn(typography.heading(1, 'center'), 'mb-2')}>{personalInfo.name}</h1>
        <p className={cn(typography.text('xl', 'normal', 'secondary'), 'mb-2')}>
          {personalInfo.title}
        </p>
        <p className={typography.text('lg', 'medium', 'secondary')}>
          <a href={`mailto:${personalInfo.email}`} className={cn(interactions.hover('text-gray-800'), interactions.transition('colors'))}>
            {personalInfo.email}
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section className={layout.section('md')}>
        <h2 className={cn(typography.heading(2), componentUtils.divider('medium', 'sm'))}>
          {SECTION_TITLES.PROFESSIONAL_SUMMARY}
        </h2>
        <p className={cn(typography.text('base', 'normal', 'primary'), 'leading-relaxed')}>
          {professionalSummary}
        </p>
      </section>

      {/* Technical Skills */}
      <TechnicalSkills />
      
      {/* Professional Experience */}
      <section className="page-break-before print:break-before-page">
        <h2 className={cn(typography.heading(2), componentUtils.divider('medium', 'sm'))}>
          {SECTION_TITLES.PROFESSIONAL_EXPERIENCE}
        </h2>
        
        {professionalExperience.map((exp, idx) => (
          <div key={idx} className={layout.section('md')}>
            <div className={cn(layout.flex('responsive', 'baseline', 'between'), 'mb-2')}>
              <h3 className={typography.heading(3)}>{exp.title}, {exp.company}</h3>
              <span className={typography.text('base', 'normal', 'secondary')}>{exp.period}</span>
            </div>
            <p className={cn(typography.text('base', 'normal', 'primary'), 'italic mb-3')}>
              {exp.description}
            </p>
            
            {exp.roles && (
              <p className={cn(typography.text('base', 'semibold', 'primary'), 'mb-2')}>Core Achievements:</p>
            )}
            
            <ul className={cn(componentUtils.list('disc', 'relaxed'), 'pl-5 mb-3')}>
              {exp.achievements.map((achievement, achievementIdx) => (
                <li key={achievementIdx}>{achievement}</li>
              ))}
            </ul>
            
            {exp.roles && (
              <div className={cn(typography.text('base', 'normal', 'primary'), 'space-y-1 mb-3 pl-5')}>
                {exp.roles.initial && (
                  <p><span className="font-semibold">Initial Role (Etermax):</span> {exp.roles.initial}</p>
                )}
                {exp.roles.advanced && (
                  <p><span className="font-semibold">Advanced Role (X3M):</span> {exp.roles.advanced}</p>
                )}
              </div>
            )}
            
            <p className={cn(typography.text('sm', 'normal', 'secondary'), 'pl-5')}>
              Technical Environment: {exp.technicalEnvironment}
            </p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className={layout.section('md')}>
        <h2 className={cn(typography.heading(2), componentUtils.divider('light', 'lg'))}>
          {SECTION_TITLES.EDUCATION_CERTIFICATIONS}
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className={cn(layout.flex('row', 'start'), 'space-x-4')}>
              <img 
                src={edu.logo} 
                alt={edu.altText}
                className="w-16 h-16 object-contain"
              />
              <div className={cn('flex-1', layout.flex('responsive', 'baseline', 'between'))}>
                <div>
                  <h3 className={typography.heading(3)}>{edu.institution}</h3>
                  <p className={typography.heading(4)}>{edu.degree}</p>
                </div>
                <span className={typography.text('base', 'normal', 'secondary')}>{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
