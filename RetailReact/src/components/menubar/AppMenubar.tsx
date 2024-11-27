import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.png'; // Your logo
const AppMenubar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);



  return (
    <div className={`bg-sky-100/80 backdrop-blur-lg shadow-lg dark:bg-gray-900 text-black dark:text-white p-4 fixed w-full top-0 left-0 z-10`}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left Section: Name and Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-2xl font-bold text-gray-500">Fusion Center</span>
        </div>

        {/* Middle Section: Search Box */}
        <div className="flex w-1/3 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          />
        </div>

      </div>
    </div>
  );
};

export default AppMenubar;
