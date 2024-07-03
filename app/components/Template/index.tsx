'use client';
import React from 'react';
import OverviewSection from './OverviewSection';
import Heading from './Heading';
import Header from './Header';

import { data } from './data';
import OtherSection from './OtherSection';

const Template = () => {
  const {
    name,
    phoneNumber,
    email,
    linkedinUrl,
    githubUrl,
    websiteUrl,
    skills,
    experience,
    education,
    projects,
  } = data;

  return (
    <>
      <style>{`
     @media print {

       #print {
         display: none;
        }
      }
      `}</style>

      <main className='max-w-3xl mx-auto my-4 space-y-2' id='cv'>
        <Header
          name={name}
          phoneNumber={phoneNumber}
          email={email}
          linkedinUrl={linkedinUrl}
          githubUrl={githubUrl}
          websiteUrl={websiteUrl}
        />

        {/* SKILLS  */}
        <Heading title='Skills' />
        <OtherSection others={skills} />

        {/* PROJECTS  */}

        <Heading title='Projects' />
        {projects.map((project) => (
          <OtherSection
            key={project?.projectName}
            projectName={project?.projectName}
            projectLink={project?.projectLink}
            description={project?.description}
            startDate={project?.startDate}
            endDate={project?.endDate}
            onSite={project?.onSite}
          />
        ))}

        {/* EXPERIENCE  */}

        <Heading title='Experience' />
        {experience.map((exp) => (
          <OverviewSection
            key={exp.companyName}
            position={exp?.position}
            company={exp?.companyName}
            companyLink={exp?.companyLink}
            startDate={exp?.startDate}
            endDate={exp?.endDate}
            description={exp?.description}
          />
        ))}
      </main>
    </>
  );
};

export default Template;
