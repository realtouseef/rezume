import React from 'react';
import Download from './assets/download';

const DownloadBtn = () => {
  return (
    <abbr title='Download PDF'>
      <button
        onClick={() => window.print()}
        className='print-button bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-normal rounded-full px-4 py-2 fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-xl'
      >
        download
      </button>
    </abbr>
  );
};

export default DownloadBtn;
