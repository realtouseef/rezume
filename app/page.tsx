'use client';
import Template from './components/Template';
import DownloadBtn from './components/Template/download.button';

export default function Home() {
  return (
    <>
      <div className='mt-5'>
        <DownloadBtn />
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
