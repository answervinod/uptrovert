import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import AuthLayout from './components/AuthLayout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  console.log('App rendering'); // Add this debug log
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;