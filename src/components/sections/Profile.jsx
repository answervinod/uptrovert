// Create new file for Profile section
import { motion } from 'framer-motion';
import { PaintBrushIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // Update the userProfile state to include new fields
  const [userProfile, setUserProfile] = useState({
    firstName: 'Vinod',
    lastName: 'Kumar',
    username: '@vinodkumar',
    bio: 'Luxury travel enthusiast | Photography lover | Adventure seeker',
    avatar: 'https://avatars.githubusercontent.com/u/answervinod',
    banner: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    interests: ['Travel', 'Photography', 'Adventure', 'Luxury Hotels']
  });

  const profileStats = [
    { label: 'Travel Points', value: '2,450', icon: '✈️' },
    { label: 'Reviews', value: '182', icon: '⭐' },
    { label: 'Followers', value: '1.2k', icon: '👥' },
    { label: 'Following', value: '891', icon: '🤝' }
  ];

  const recentActivities = [
    {
      type: 'booking',
      title: 'Booked Luxury Villa',
      location: 'Bali, Indonesia',
      date: 'Aug 15 - Aug 25, 2024',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4'
    },
    {
      type: 'review',
      title: 'Reviewed Swiss Hotel',
      rating: 5,
      comment: 'Exceptional service and stunning views!',
      date: '2 days ago'
    },
    {
      type: 'achievement',
      title: 'Earned Gold Status',
      description: 'Completed 10 luxury stays',
      icon: '🏆'
    }
  ];

  const preferences = [
    { category: 'Accommodation', tags: ['Luxury Hotels', 'Private Villas', 'Boutique Resorts'] },
    { category: 'Activities', tags: ['Adventure', 'Cultural Tours', 'Food Tasting'] },
    { category: 'Transportation', tags: ['Business Class', 'Private Transfer', 'Luxury Car Rental'] }
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{userProfile.name}</h1>
              <p className="text-[#E5E5E5]/60 mb-4">{userProfile.bio}</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsEditModalOpen(true)}
                  className="px-6 py-2 bg-[#FCA311] text-black rounded-xl font-medium hover:bg-[#FCA311]/90"
                >
                  Edit Profile
                </button>
                <button className="px-6 py-2 bg-[#14213D]/40 text-white rounded-xl font-medium hover:bg-[#14213D]/60">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {profileStats.map((stat) => (
            <div key={stat.label} className="bg-[#14213D]/40 rounded-xl p-4">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#E5E5E5]/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Recent Activity */}
          <div className="col-span-2 space-y-6">
            <div className="bg-[#14213D]/40 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="border-b border-[#E5E5E5]/10 last:border-0 pb-4 last:pb-0">
                    {activity.type === 'booking' && (
                      <div className="flex space-x-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden">
                          <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{activity.title}</h3>
                          <p className="text-[#E5E5E5]/60 text-sm">{activity.location}</p>
                          <p className="text-[#E5E5E5]/40 text-sm">{activity.date}</p>
                        </div>
                      </div>
                    )}

                    {activity.type === 'review' && (
                      <div>
                        <h3 className="text-white font-medium mb-2">{activity.title}</h3>
                        <div className="flex items-center mb-2">
                          {Array(activity.rating).fill('⭐').map((star, i) => (
                            <span key={i} className="text-[#FCA311]">{star}</span>
                          ))}
                        </div>
                        <p className="text-[#E5E5E5]/60 text-sm mb-1">{activity.comment}</p>
                        <p className="text-[#E5E5E5]/40 text-sm">{activity.date}</p>
                      </div>
                    )}

                    {activity.type === 'achievement' && (
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{activity.icon}</div>
                        <div>
                          <h3 className="text-white font-medium">{activity.title}</h3>
                          <p className="text-[#E5E5E5]/60 text-sm">{activity.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Preferences */}
          <div className="space-y-6">
            <div className="bg-[#14213D]/40 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Travel Preferences</h2>
              <div className="space-y-4">
                {preferences.map((pref) => (
                  <div key={pref.category} className="space-y-2">
                    <h3 className="text-[#E5E5E5]/60 text-sm">{pref.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {pref.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#14213D]/60 text-[#E5E5E5]/80 rounded-lg text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings Section */}
            <div className="bg-[#14213D]/40 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Settings</h2>
              <div className="space-y-3">
                {[
                  'Account Settings',
                  'Privacy',
                  'Notifications',
                  'Payment Methods',
                  'Language',
                  'Help & Support'
                ].map((setting) => (
                  <button
                    key={setting}
                    className="w-full text-left px-4 py-2 text-[#E5E5E5]/80 hover:bg-[#14213D]/60 rounded-lg transition-colors"
                  >
                    {setting}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#14213D] rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-[#E5E5E5]/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Banner Upload */}
              <div>
                <label className="block text-sm text-[#E5E5E5]/60 mb-2">Banner Image</label>
                <div className="relative h-32 rounded-xl overflow-hidden group">
                  <img
                    src={userProfile.banner}
                    alt="Banner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-[#FCA311] rounded-lg p-2">
                      <PaintBrushIcon className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Avatar Upload */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={userProfile.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-[#FCA311] rounded-lg flex items-center justify-center">
                    <PaintBrushIcon className="w-4 h-4 text-black" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">Profile Photo</h3>
                  <p className="text-[#E5E5E5]/60 text-sm">
                    Upload a new photo or change your current one
                  </p>
                </div>
              </div>

              {/* Name Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#E5E5E5]/60 mb-2">
                    First Name <span className="text-[#FCA311]">*</span>
                  </label>
                  <input
                    type="text"
                    value={userProfile.firstName}
                    onChange={(e) => setUserProfile({ ...userProfile, firstName: e.target.value })}
                    required
                    className="w-full bg-[#14213D]/40 border border-[#E5E5E5]/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FCA311]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#E5E5E5]/60 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={userProfile.lastName}
                    onChange={(e) => setUserProfile({ ...userProfile, lastName: e.target.value })}
                    className="w-full bg-[#14213D]/40 border border-[#E5E5E5]/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FCA311]"
                  />
                </div>
              </div>

              {/* Username Input */}
              <div>
                <label className="block text-sm text-[#E5E5E5]/60 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={userProfile.username}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value.startsWith('@')) return;
                    if (value.length > 17) return; // 16 chars + @
                    setUserProfile({ ...userProfile, username: value });
                  }}
                  maxLength={17}
                  className="w-full bg-[#14213D]/40 border border-[#E5E5E5]/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FCA311]"
                />
                <p className="text-xs text-[#E5E5E5]/40 mt-1">
                  {16 - (userProfile.username.length - 1)} characters remaining
                </p>
              </div>

              {/* Bio Input */}
              <div>
                <label className="block text-sm text-[#E5E5E5]/60 mb-2">
                  Bio
                </label>
                <textarea
                  value={userProfile.bio}
                  onChange={(e) => {
                    if (e.target.value.length <= 200) {
                      setUserProfile({ ...userProfile, bio: e.target.value });
                    }
                  }}
                  rows={3}
                  maxLength={200}
                  className="w-full bg-[#14213D]/40 border border-[#E5E5E5]/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FCA311]"
                />
                <p className="text-xs text-[#E5E5E5]/40 mt-1">
                  {200 - userProfile.bio.length} characters remaining
                </p>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm text-[#E5E5E5]/60 mb-2">
                  Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {userProfile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-[#14213D]/60 text-[#E5E5E5]/80 rounded-lg text-sm flex items-center"
                    >
                      {interest}
                      <button
                        onClick={() => {
                          setUserProfile({
                            ...userProfile,
                            interests: userProfile.interests.filter(i => i !== interest)
                          });
                        }}
                        className="ml-2 text-[#E5E5E5]/40 hover:text-[#E5E5E5]"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-6 py-3 bg-[#14213D]/40 text-white rounded-xl font-medium hover:bg-[#14213D]/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Here you would typically save to a backend
                    setIsEditModalOpen(false);
                  }}
                  className="flex-1 px-6 py-3 bg-[#FCA311] text-black rounded-xl font-medium hover:bg-[#FCA311]/90"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Profile;