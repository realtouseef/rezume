'use client';
import Template from './components/Template';

export default function Home() {
  return (
    <>
      <div className='mt-5'>
        <abbr title='Download PDF'>
          <button
            onClick={() => window.print()}
            className='print-button bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold rounded-full px-4 py-4 fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-xl'
          >
            <DownloadSVG />
          </button>
        </abbr>
      </div>
      <Template />

      <style media='print'>
        {`
          .print-button {
            display: none;
          }
        `}
      </style>
    </>
  );
}

const DownloadSVG = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
      />
    </svg>
  );
};
