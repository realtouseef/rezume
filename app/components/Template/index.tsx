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

        {/* EXPERIENCE  */}

        <Heading title='Experience' />
        <OverviewSection
          position={experience?.first?.position}
          company={experience?.first?.companyName}
          companyLink={experience?.first?.companyLink}
          startDate={experience?.first?.startDate}
          endDate={experience?.first?.endDate}
          description={experience?.first?.description}
        />
        <OverviewSection
          position={experience?.second?.position}
          company={experience?.second?.companyName}
          companyLink={experience?.second?.companyLink}
          startDate={experience?.second?.startDate}
          endDate={experience?.second?.endDate}
          description={experience?.second?.description}
        />

        {/* PROJECTS  */}

        <Heading title='Projects' />
        <OtherSection
          projectName={projects?.first?.projectName}
          description={projects?.first?.description}
          startDate={projects?.first?.startDate}
          endDate={projects?.first?.endDate}
          onSite={projects?.first?.onSite}
        />
        <OtherSection
          projectName={projects?.second?.projectName}
          description={projects?.second?.description}
          startDate={projects?.second?.startDate}
          endDate={projects?.second?.endDate}
          onSite={projects?.second?.onSite}
        />

        {/* EDUCATION  */}

        {/* <Heading title='Education' />
        <OverviewSection
          degree={education?.first?.degree}
          university={education?.first?.university}
          startDate={education?.first?.startDate}
          endDate={education?.first?.endDate}
          description={education?.first?.description}
        />
        <OverviewSection
          degree={education?.second?.degree}
          university={education?.second?.university}
          startDate={education?.second?.startDate}
          endDate={education?.second?.endDate}
          description={education?.second?.description}
        /> */}
      </main>
      {/* 
      <button onClick={() => window.print()} id='print'>
        Print
      </button> */}
    </>
  );
};

export default Template;
