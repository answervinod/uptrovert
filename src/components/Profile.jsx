import { motion } from 'framer-motion';
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  console.log('Profile component mounting'); // Debug log
  
  const [profile] = useState({
    name: 'Vinod Kumar',
    username: '@answervinod',
    bio: 'Travel enthusiast | Photography lover | Adventure seeker',
    bannerImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    profileImage: 'https://avatars.githubusercontent.com/u/answervinod'
  });

  return (
    <div className="w-full min-h-screen">
      <div className="relative mb-16">
        <div className="h-48 rounded-2xl overflow-hidden">
          <img 
            src={profile.bannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute -bottom-12 left-8">
          <div className="w-24 h-24 rounded-2xl border-4 border-[#14213D] overflow-hidden">
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#14213D]/20 backdrop-blur-xl rounded-2xl p-6 mb-8 mt-20">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
            <p className="text-[#E5E5E5]/60">{profile.username}</p>
          </div>
        </div>
        <p className="text-[#E5E5E5]/80 mt-4">{profile.bio}</p>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
            {/* Your profile content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;