import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Search = () => {
  return (
    <div className="rounded-full border-2 border-forth-color w-60 max-w-60 flex flex-row justify-between p-2 px-4 relative">
      <input type="text" placeholder="Search" className="outline-none gap-2" />
      <button className="px-4 absolute top-0 bottom-0 right-0 border-l-2 bg-third-color last:rounded-tr-full last:rounded-br-full">
        <div className="w-4 h-4">
          <MagnifyingGlassIcon />
        </div>
      </button>
    </div>
  );
};

export default Search;
