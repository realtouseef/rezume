'use client';
import Template from './components/Template';
import Download from './components/Template/assets/download';

export default function Home() {
  return (
    <>
      <div className='mt-5'>
        <abbr title='Download PDF'>
          <button
            onClick={() => window.print()}
            className='print-button bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold rounded-full px-4 py-4 fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-xl'
          >
            <Download />
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
