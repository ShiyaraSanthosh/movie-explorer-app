import Card from '@/components/card';
import React from 'react';

const HomePage = () => {
    return (
               <div className="bg-gradient-to-r from-yellow-400 to-orange-500">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-[10%] py-4 bg-black bg-opacity-20 shadow-md">
        <div className="flex space-x-6 font-semibold text-white text-lg">
          <a href="#">kids</a>
          <a href="#">Drama</a>
          <a href="#">Comedy</a>
          <a href="#">Horror</a>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-10 py-2 rounded-lg border border-white focus:outline-none text-white"
          />
        </div>
      </nav>
      <Card />
    </div>
     
    );
}

export default HomePage;
