import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, UserGroupIcon, UserIcon, CogIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Layout = () => {
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-56";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#14213D] to-[#FCA311]">
      {/* Left Sidebar Container */}
      <div className="fixed left-0 top-0 h-full w-20 p-4 flex items-center">
        {/* Copy the entire sidebar code from your current Profile.jsx */}
        {/* ... Sidebar code ... */}
      </div>

      {/* Main Content Area */}
      <div className={`${isCollapsed ? 'ml-24' : 'ml-64'} p-8 transition-all duration-300`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;