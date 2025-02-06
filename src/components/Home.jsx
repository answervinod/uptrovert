import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  HomeIcon, 
  UserGroupIcon, 
  UserIcon, 
  CogIcon, 
  SunIcon, 
  MoonIcon,
  ShoppingBagIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

// Import section components
import Communities from './sections/Communities';
import HomeContent from './sections/HomeContent';
import Marketplace from './sections/Marketplace';
import Profile from './sections/Profile';
import TravelAssist from './sections/TravelAssist';

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Hotel');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-56";

  const menuItems = [
    { id: 'home', icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
    { id: 'communities', icon: <UserGroupIcon className="w-5 h-5" />, label: "Communities" },
    { id: 'profile', icon: <UserIcon className="w-5 h-5" />, label: "Profile" },
    { id: 'marketplace', icon: <ShoppingBagIcon className="w-5 h-5" />, label: "Marketplace" },
    { id: 'travelassist', icon: <GlobeAltIcon className="w-5 h-5" />, label: "Travel Assist" },
    { id: 'settings', icon: <CogIcon className="w-5 h-5" />, label: "Settings" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#14213D] to-[#D46007]">
      {/* Left Sidebar Container */}
      <div className="fixed left-0 top-0 h-full w-20 p-4 flex items-center">
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className={`relative h-[90vh] ${sidebarWidth} bg-[#14213D]/40 backdrop-blur-2xl rounded-2xl p-4 transition-all duration-300 shadow-2xl border border-white/5`}
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
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMenu(item.id)}
                  className={`flex items-center px-3 py-2 text-[#E5E5E5]/70 rounded-lg hover:bg-[#FCA311]/10 transition-all group relative cursor-pointer ${
                    selectedMenu === item.id ? 'bg-[#FCA311]/10 text-[#FCA311]' : ''
                  }`}
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
                </div>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className="mt-auto">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center px-3 py-2 text-[#E5E5E5]/70 rounded-lg hover:bg-[#FCA311]/10 transition-all group"
              >
                <div className="w-5 h-5 group-hover:text-[#FCA311]">
                  {isDark ? <MoonIcon /> : <SunIcon />}
                </div>
                {!isCollapsed && (
                  <span className="ml-3 font-medium text-sm group-hover:text-[#FCA311]">
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                  </span>
                )}
              </button>
            </div>
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
        {selectedMenu === 'communities' && <Communities />}
        {selectedMenu === 'marketplace' && <Marketplace />}
        {selectedMenu === 'travelassist' && <TravelAssist activeTab={activeTab} setActiveTab={setActiveTab} />}
        {selectedMenu === 'profile' && <Profile />}
        {selectedMenu === 'home' && <HomeContent />}
      </div>
    </div>
  );
};

export default Home;