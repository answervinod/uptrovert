import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [headRotation, setHeadRotation] = useState(0);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Move panda head based on input length
    setHeadRotation(Math.sin(e.target.value.length * 0.5) * 15);
  };

  // In your handleLogin function
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'answervinod' && password === '1234') {
      navigate('/home');  // This should take you to the Home component
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#14213D] to-[#FCA311] p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FCA311] rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E5E5E5] rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md bg-[#14213D]/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1 a3 3 0 01-3 3H6 a3 3 0 01-3-3V7 a3 3 0 013-3h7 a3 3 0 013 3v1" />
            </svg>
          </motion.div>
        </div>

        <h1 className="text-2xl font-semibold text-white text-center mb-2">Sign in with email</h1>
        <p className="text-white/60 text-center mb-8">Welcome back! Please enter your details</p>

        {/* Car Headlights Animation */}
        <div className="relative w-48 h-24 mx-auto mb-8">
          <motion.div
            animate={{ rotate: headRotation }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full h-full flex justify-center gap-12"
          >
            {/* Left Headlight */}
            <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-full shadow-xl relative overflow-hidden border border-white/20">
              <motion.div
                className="absolute inset-2 bg-gradient-to-br from-purple-400/80 to-purple-600/80 rounded-full"
                animate={isHiding ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'top' }}
              >
                <motion.div
                  className="absolute inset-1 bg-white/90 rounded-full blur-[1px]"
                  animate={{
                    x: headRotation,
                    opacity: isHiding ? 0 : 1
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </motion.div>
            </div>

            {/* Right Headlight */}
            <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-full shadow-xl relative overflow-hidden border border-white/20">
              <motion.div
                className="absolute inset-2 bg-gradient-to-br from-purple-400/80 to-purple-600/80 rounded-full"
                animate={isHiding ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'top' }}
              >
                <motion.div
                  className="absolute inset-1 bg-white/90 rounded-full blur-[1px]"
                  animate={{
                    x: headRotation,
                    opacity: isHiding ? 0 : 1
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={handleUsernameChange}
              onFocus={() => setIsHiding(false)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsHiding(true)}
              onBlur={() => setIsHiding(false)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="text-right">
            // Replace this line:
            <a href="#" className="text-sm text-white/60 hover:text-white">Forgot password?</a>
            
            // With this:
            <button className="text-sm text-white/60 hover:text-white">Forgot password?</button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl bg-[#BE95C4] hover:bg-[#9F86C0] text-white font-semibold transition-colors"
            type="submit"
          >
            Get Started
          </motion.button>
        </form>

        <div className="mt-8">
          <p className="text-center text-white/60 mb-4">Or sign in with</p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mx-auto" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-colors"
            >
              <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mx-auto" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;