import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="text-center">
        {/* <div>
          <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">Brand</a>
        </div> */}
        {/* End Col */}

        <div className="mt-3">
          <p className="text-gray-500">Cám ơn các bạn đã ghé shop <a className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Teddie House</a></p>
          <p className="text-gray-500">© TeddieHouse. 2024. All rights reserved.</p>
        </div>

       
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </footer>
  );
};

export default Footer;