import React from 'react';
import Arrow from '../assets/arrow';

type OtherSectionProps = {
  others?: string[][];
  projectName?: string;
  description?: string[];
  startDate?: string;
  endDate?: string;
  onSite?: boolean;
  projectLink?: string;
};

const OtherSection: React.FC<OtherSectionProps> = ({
  others,
  projectName,
  description,
  startDate,
  endDate,
  onSite,
  projectLink,
}) => {
  return (
    <>
      {others ? (
        <ul className='list-disc pl-4 py-3 space-y-1'>
          {others.map((other) => (
            <li key={1 + 1}>{other.join(' | ')}</li>
          ))}
        </ul>
      ) : (
        <div className='my-4'>
          <div className='grid grid-cols-3'>
            <a
              href={projectLink}
              target='_blank'
              className={`w-max flex items-center gap-x-2 ${
                projectLink && 'underline'
              }`}
            >
              <strong>{projectName}</strong> {projectLink && <Arrow />}
            </a>
            <h6 className='italic text-center'>
              {onSite ? 'On-site' : 'Remote'}
            </h6>
            <h6 className='font-semibold text-end'>{`${startDate} - ${endDate}`}</h6>
          </div>
          <ul className='list-disc pl-4'>
            {description?.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default OtherSection;
