import React from 'react';
import Arrow from '../assets/arrow';

interface HeaderProps {
  name: string;
  linkedinUrl: string;
  phoneNumber: number;
  websiteUrl: string;
  email: string;
  githubUrl: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  linkedinUrl,
  phoneNumber,
  websiteUrl,
  email,
  githubUrl,
}) => {
  return (
    <section className='my-5'>
      <h4 className='text-center uppercase text-xl mb-3 font-bold'>{name}</h4>
      <div className='flex items-center justify-center space-x-2'>
        <a
          href={linkedinUrl}
          target='_blank'
          className='text-blue-500 flex items-center justify-center underline'
        >
          <span>LinkedIn</span> <Arrow />
        </a>
        <span>|</span>
        <p>+{phoneNumber}</p>
        <span>|</span>
        <a
          href={websiteUrl}
          target='_blank'
          className='text-blue-500 flex items-center justify-center underline'
        >
          <span>website</span> <Arrow />
        </a>
        <span>|</span>
        <a href={`mailto:${email}`} className='underline text-blue-500'>
          {email}
        </a>
        <span>|</span>
        <a
          href={githubUrl}
          target='_blank'
          className='text-blue-500 flex items-center justify-center underline'
        >
          <span>GitHub</span> <Arrow />
        </a>
      </div>
    </section>
  );
};

export default Header;
