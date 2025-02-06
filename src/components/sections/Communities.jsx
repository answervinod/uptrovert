// Create new file for Communities section
import { motion } from 'framer-motion';

const Communities = () => {
  const newsItems = [
    {
      title: 'Santorini Travel Guide',
      subtitle: 'Best hidden gems and local...',
      author: 'Maria Costa',
      time: '10 min read',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff'
    },
    {
      title: 'Japan Cherry Blossom',
      subtitle: 'Ultimate spring travel guide...',
      author: 'Yuki Tanaka',
      time: '8 min read',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e'
    },
    {
      title: 'Dubai Desert Safari',
      subtitle: 'Ultimate guide to desert...',
      author: 'Ahmed Hassan',
      time: '7 min read',
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3'
    }
  ];

  const communities = [
    {
      title: 'Backpackers Unite',
      game: 'Budget Travel',
      members: '15.2k members',
      likes: '2.3k+',
      icon: '🎒'
    },
    {
      title: 'Food Explorers',
      game: 'Culinary Travel',
      members: '18.7k members',
      likes: '3.1k+',
      icon: '🍜'
    },
    {
      title: 'Solo Travelers',
      game: 'Adventure Travel',
      members: '12.4k members',
      likes: '1.8k+',
      icon: '✈️'
    },
    {
      title: 'Photography Tours',
      game: 'Travel Photography',
      members: '25.3k members',
      likes: '4.2k+',
      icon: '📸'
    }
  ];

  const trendingCommunities = [
    {
      name: 'Adventure Seekers',
      tier: 'Elite Explorer',
      members: '25.3k members',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60'
    },
    {
      name: 'Culture Nomads',
      tier: 'Expert Wanderer',
      members: '18.4k members',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9'
    },
    {
      name: 'Globe Trotters',
      tier: 'Master Traveler',
      members: '31.9k members',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828'
    }
  ];

  const upcomingEvents = [
    {
      name: 'Northern Lights Adventure',
      location: 'Iceland',
      date: '15 MAY',
      people: '8 spots left',
      icon: '🌌'
    },
    {
      name: 'Safari Experience',
      location: 'Kenya',
      date: '02 JUN',
      people: '4 spots left',
      icon: '🦁'
    },
    {
      name: 'Ancient Temples Tour',
      location: 'Cambodia',
      date: '20 JUN',
      people: '6 spots left',
      icon: '🏛️'
    }
  ];

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1 pr-8">
        {/* Hero Banner */}
        <div className="relative h-[380px] rounded-3xl overflow-hidden mb-6 group">
          <img 
            src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
            alt="Northern Lights Expedition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h1 className="text-3xl font-bold text-white mb-1">Northern Lights Expedition:</h1>
            <h2 className="text-xl font-bold text-white mb-3">A Journey to the Arctic Circle</h2>
            <p className="text-[#E5E5E5]/80 mb-3 text-sm">Experience the mesmerizing aurora borealis in Iceland's pristine wilderness</p>
            <div className="flex items-center text-xs text-[#E5E5E5]/60">
              <span>Emma Nordic</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
          <button className="absolute bottom-6 right-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white">→</span>
          </button>
        </div>

        {/* News Cards */}
        <div className="space-y-2 mb-8">
          {newsItems.map((news) => (
            <div key={news.title} className="bg-[#14213D]/40 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-3 hover:bg-[#14213D]/60 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white text-sm font-medium">{news.title}</h3>
                <p className="text-[#E5E5E5]/60 text-xs mb-1">{news.subtitle}</p>
                <div className="flex items-center text-xs text-[#E5E5E5]/40">
                  <span>{news.author}</span>
                  <span className="mx-2">•</span>
                  <span>{news.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Communities */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Explore Communities</h2>
            <button className="w-7 h-7 rounded-full bg-[#14213D]/60 flex items-center justify-center text-[#E5E5E5]/60">
              →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {communities.map((community) => (
              <div key={community.title} className="bg-[#14213D]/40 backdrop-blur-sm rounded-xl p-3 flex flex-col">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-[#14213D]/60 flex items-center justify-center text-xl">
                    {community.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white text-sm font-medium truncate">{community.title}</h3>
                    <div className="flex items-center text-xs text-[#E5E5E5]/40">
                      <span className="truncate">{community.game}</span>
                      <span className="mx-2">•</span>
                      <span className="shrink-0">{community.members}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E5E5E5]/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-lg overflow-hidden border-2 border-[#14213D]">
                        <img 
                          src={`https://source.unsplash.com/random/100x100?travel,people&${i}`}
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[#E5E5E5]/40 text-sm">{community.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 shrink-0">
        {/* Trending Communities */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Trending Communities</h2>
            <div className="flex items-center space-x-2">
              <span className="text-[#E5E5E5]/60 text-sm">154</span>
              <button className="w-6 h-6 rounded-full bg-[#14213D]/60 flex items-center justify-center text-[#E5E5E5]/60">
                →
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {trendingCommunities.map((clan) => (
              <div key={clan.name} className="bg-[#14213D]/40 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between group hover:bg-[#14213D]/60 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <img src={clan.image} alt={clan.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">{clan.name}</h3>
                    <div className="flex items-center text-xs text-[#E5E5E5]/40">
                      <span>{clan.tier}</span>
                      <span className="mx-2">•</span>
                      <span>{clan.members}</span>
                    </div>
                  </div>
                </div>
                <button className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  JOIN
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Upcoming Events</h2>
            <div className="flex items-center space-x-2">
              <span className="text-[#E5E5E5]/60 text-sm">230</span>
              <button className="w-6 h-6 rounded-full bg-[#14213D]/60 flex items-center justify-center text-[#E5E5E5]/60">
                →
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {upcomingEvents.map((event) => (
              <div key={event.name} className="bg-[#14213D]/40 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between group hover:bg-[#14213D]/60 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="text-center w-12 h-12 rounded-lg bg-[#14213D]/60 flex items-center justify-center text-2xl">
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">{event.name}</h3>
                    <div className="flex items-center text-xs text-[#E5E5E5]/40">
                      <span>{event.location}</span>
                      <span className="mx-2">•</span>
                      <span>{event.date}</span>
                    </div>
                    <p className="text-xs text-[#E5E5E5]/40 mt-1">{event.people}</p>
                  </div>
                </div>
                <button className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  JOIN
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;