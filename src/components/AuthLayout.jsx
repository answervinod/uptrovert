import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, UserGroupIcon, UserIcon, CogIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const AuthLayout = () => {
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const [profile] = useState({
    name: 'Vinod Kumar',
    username: '@answervinod',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#14213D] to-[#FCA311]">
      {/* Left Sidebar Container */}
      <div className="fixed left-0 top-0 h-full w-20 p-4 flex items-center">
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className={`relative h-[90vh] ${isCollapsed ? 'w-16' : 'w-56'} bg-[#14213D]/90 backdrop-blur-xl rounded-2xl p-4 transition-all duration-300 shadow-2xl`}
        >
          <div className="flex flex-col h-full">
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center space-x-2 mb-8 mt-2"
            >
              <div className="w-8 h-8 bg-[#FCA311] rounded-lg flex items-center justify-center shrink-0">
                <span className="text-[#000000] text-sm font-bold">U</span>
              </div>
              {!isCollapsed && <h1 className="text-lg font-bold text-[#E5E5E5]">uptrovert</h1>}
            </motion.div>
            
            {/* Navigation Menu */}
            <nav className="space-y-1">
              {[
                { to: "/home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
                { to: "/communities", icon: <UserGroupIcon className="w-5 h-5" />, label: "Communities" },
                { to: "/profile", icon: <UserIcon className="w-5 h-5" />, label: "Profile" },
                { to: "/settings", icon: <CogIcon className="w-5 h-5" />, label: "Settings" }
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center px-3 py-2 text-[#E5E5E5]/70 rounded-lg hover:bg-[#FCA311]/10 transition-all group relative"
                >
                  <div className="w-5 h-5 group-hover:text-[#FCA311]">{item.icon}</div>
                  {!isCollapsed && (
                    <span className="ml-3 font-medium text-sm group-hover:text-[#FCA311]">{item.label}</span>
                  )}
                  {isCollapsed && (
                    <div className="absolute left-14 px-2 py-1 bg-[#14213D] text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              ))}
            </nav>

            {/* User Profile Section */}
            <div className="mt-auto pb-2 pt-4 border-t border-[#E5E5E5]/10">
              <div className="flex items-center px-3 py-2 rounded-lg hover:bg-[#FCA311]/10 transition-all cursor-pointer group relative">
                <div className="w-8 h-8 rounded-lg bg-[#FCA311]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#FCA311] text-sm font-medium">VK</span>
                </div>
                {!isCollapsed && (
                  <div className="ml-3 overflow-hidden">
                    <h3 className="text-[#E5E5E5] text-sm font-medium truncate group-hover:text-[#FCA311]">{profile.name}</h3>
                    <p className="text-[#E5E5E5]/50 text-xs truncate">{profile.username}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mt-2 flex items-center px-3 py-2 text-[#E5E5E5]/70 rounded-lg hover:bg-[#FCA311]/10 transition-all group relative"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 group-hover:text-[#FCA311]" />
              ) : (
                <MoonIcon className="w-5 h-5 group-hover:text-[#FCA311]" />
              )}
              {!isCollapsed && (
                <span className="ml-3 font-medium text-sm group-hover:text-[#FCA311]">
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
              )}
            </button>
          </div>

          {/* Collapse Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FCA311]/80 transition-colors shadow-lg"
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              className="text-[#000000] font-bold text-lg"
            >
              {isCollapsed ? '→' : '←'}
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className={`${isCollapsed ? 'ml-24' : 'ml-64'} p-8 transition-all duration-300`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;