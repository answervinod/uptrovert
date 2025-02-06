import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import AuthLayout from './components/AuthLayout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;