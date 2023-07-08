import React from 'react';
import Arrow from '../assets/arrow';

interface OverviewSectionProps {
  degree?: string;
  university?: string;
  position?: string;
  company?: string;
  companyLink?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  degree,
  university,
  position,
  company,
  companyLink,
  startDate,
  endDate,
  description,
}) => {
  return (
    <>
      <div className='py-1'>
        <div className='grid grid-cols-3 place-content-between'>
          <h6 className='font-semibold'>{position ?? degree}</h6>
          {company ? (
            <a
              className='text-center flex items-center justify-center underline font-semibold hover:text-blue-500'
              href={companyLink}
              target='_blank'
            >
              <span>{company}</span> <Arrow />
            </a>
          ) : (
            <h6 className='font-semibold text-center'>{university}</h6>
          )}

          <h6 className='font-semibold text-end'>{`${startDate} - ${endDate}`}</h6>
        </div>
        <ul className='list-disc pl-4 py-2 space-y-1'>
          {description.map((desc) => (
            <li key={1}>{desc}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OverviewSection;
