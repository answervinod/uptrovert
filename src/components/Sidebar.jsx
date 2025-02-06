// Copy all the sidebar code from your current Profile.jsx
// and make it a separate component
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    // ... existing sidebar code ...
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
          isDark ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white transform transition-transform duration-200 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="text-sm font-medium">
        {isDark ? 'Dark' : 'Light'} Mode
      </span>
    </div>
    // ... rest of sidebar code ...
  );
};

export default Sidebar;