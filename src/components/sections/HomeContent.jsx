import { motion } from 'framer-motion';

const HomeContent = () => {
  return (
    <>
      {/* Banner and Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-16"
      >
        {/* Banner */}
        <div className="h-48 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Image */}
        <div className="absolute -bottom-12 left-8">
          <div className="w-24 h-24 rounded-2xl border-4 border-[#14213D] overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/answervinod"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#14213D]/20 backdrop-blur-xl rounded-2xl p-6 mb-8"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Vinod Kumar</h1>
            <p className="text-[#E5E5E5]/60">Travel enthusiast | Photography lover | Adventure seeker</p>
          </div>
          <button className="px-4 py-2 bg-[#FCA311] text-black rounded-xl font-medium hover:bg-[#FCA311]/90 transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="flex items-center space-x-6 text-[#E5E5E5]/60">
          <div>
            <span className="text-white font-semibold">2.5k</span> Following
          </div>
          <div>
            <span className="text-white font-semibold">1.2k</span> Followers
          </div>
          <div>
            <span className="text-white font-semibold">156</span> Posts
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Countries', value: '12', icon: '🌎' },
          { label: 'Cities', value: '48', icon: '🏙️' },
          { label: 'Photos', value: '2.4k', icon: '📸' },
          { label: 'Reviews', value: '182', icon: '⭐' }
        ].map((stat) => (
          <div key={stat.label} className="bg-[#14213D]/20 backdrop-blur-xl rounded-xl p-4">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-[#E5E5E5]/60">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              type: 'review',
              title: 'Reviewed Santorini Sunset Villa',
              time: '2 hours ago',
              rating: 5,
              content: 'Amazing experience! The view was breathtaking and the service was impeccable.'
            },
            {
              type: 'photo',
              title: 'Added 8 photos to Paris Gallery',
              time: '5 hours ago',
              images: Array(4).fill('https://source.unsplash.com/random/100x100?paris')
            },
            {
              type: 'achievement',
              title: 'Earned Explorer Badge',
              time: '1 day ago',
              badge: '🏅',
              description: 'Visited 10 different countries'
            }
          ].map((activity, index) => (
            <div key={index} className="bg-[#14213D]/20 backdrop-blur-xl rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-medium">{activity.title}</h3>
                <span className="text-sm text-[#E5E5E5]/40">{activity.time}</span>
              </div>
              
              {activity.type === 'review' && (
                <div>
                  <div className="flex items-center mb-2">
                    {Array(activity.rating).fill('⭐').map((star, i) => (
                      <span key={i} className="text-[#FCA311] text-sm">{star}</span>
                    ))}
                  </div>
                  <p className="text-[#E5E5E5]/60 text-sm">{activity.content}</p>
                </div>
              )}

              {activity.type === 'photo' && (
                <div className="grid grid-cols-4 gap-2">
                  {activity.images.map((img, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {activity.type === 'achievement' && (
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{activity.badge}</div>
                  <p className="text-[#E5E5E5]/60 text-sm">{activity.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Travel Plans */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Travel Plans</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              destination: 'Bali, Indonesia',
              date: 'Aug 15 - Aug 25',
              image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
              status: 'Upcoming'
            },
            {
              destination: 'Swiss Alps',
              date: 'Dec 10 - Dec 20',
              image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
              status: 'Planning'
            },
            {
              destination: 'Santorini, Greece',
              date: 'Next Summer',
              image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
              status: 'Wishlist'
            }
          ].map((plan) => (
            <div key={plan.destination} className="group relative rounded-xl overflow-hidden">
              <img src={plan.image} alt={plan.destination} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="text-xs text-[#FCA311] font-medium mb-1">{plan.status}</div>
                <h3 className="text-white font-medium mb-1">{plan.destination}</h3>
                <p className="text-[#E5E5E5]/60 text-sm">{plan.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeContent;