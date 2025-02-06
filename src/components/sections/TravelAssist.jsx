// Create new file for Travel Assist section
import { motion } from 'framer-motion';

const TravelAssist = ({ activeTab, setActiveTab }) => {
  const searchTabs = ['Hotel', 'Flight', 'Train', 'Travel', 'Car Rental'];

  const renderSearchForm = () => {
    switch (activeTab) {
      case 'Hotel':
        return (
          <div className="bg-[#14213D]/60 rounded-xl p-4">
            <label className="block text-sm text-[#E5E5E5]/60 mb-2">Location</label>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <input 
                type="text"
                placeholder="Find location"
                className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
              />
            </div>
          </div>
        );

      case 'Flight':
        return (
          <>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">From</label>
              <div className="flex items-center">
                <span className="mr-2">✈️</span>
                <input 
                  type="text"
                  placeholder="Departure city"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">To</label>
              <div className="flex items-center">
                <span className="mr-2">🛬</span>
                <input 
                  type="text"
                  placeholder="Arrival city"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Travel Date</label>
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <input 
                  type="text"
                  placeholder="Select date"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
          </>
        );

      case 'Train':
        return (
          <>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">From Station</label>
              <div className="flex items-center">
                <span className="mr-2">🚂</span>
                <input 
                  type="text"
                  placeholder="Departure station"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">To Station</label>
              <div className="flex items-center">
                <span className="mr-2">🚉</span>
                <input 
                  type="text"
                  placeholder="Arrival station"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Journey Date</label>
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <input 
                  type="text"
                  placeholder="Select date"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
          </>
        );

      case 'Travel':
        return (
          <>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Destination</label>
              <div className="flex items-center">
                <span className="mr-2">🌍</span>
                <input 
                  type="text"
                  placeholder="Where to?"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Travel Dates</label>
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <input 
                  type="text"
                  placeholder="Add dates"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Travelers</label>
              <div className="flex items-center">
                <span className="mr-2">👥</span>
                <input 
                  type="text"
                  placeholder="Number of travelers"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
          </>
        );

      case 'Car Rental':
        return (
          <>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Pickup Location</label>
              <div className="flex items-center">
                <span className="mr-2">🚗</span>
                <input 
                  type="text"
                  placeholder="Enter city or airport"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Rental Period</label>
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <input 
                  type="text"
                  placeholder="Select dates"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="bg-[#14213D]/60 rounded-xl p-4">
              <label className="block text-sm text-[#E5E5E5]/60 mb-2">Car Type</label>
              <div className="flex items-center">
                <span className="mr-2">🚘</span>
                <input 
                  type="text"
                  placeholder="Select car type"
                  className="bg-transparent text-white placeholder-[#E5E5E5]/40 focus:outline-none w-full"
                />
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] rounded-3xl overflow-hidden mb-8">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
          alt="Travel Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Discover Your Next<br />Great Adventure</h1>
          <p className="text-lg text-[#E5E5E5]/80 mb-8">
            Immerse yourself in the extraordinary with us takes you on a<br />journey to uncover the world's hidden gems.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-[#14213D]/40 backdrop-blur-xl rounded-3xl p-6 mb-12">
        <div className="flex flex-col space-y-6">
          <h2 className="text-xl text-white font-semibold">Explore your journey</h2>
          
          {/* Interactive Tabs */}
          <div className="flex space-x-4">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab ? 'bg-black text-white' : 'text-[#E5E5E5]/60 hover:bg-[#14213D]/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-3 gap-4">
            {renderSearchForm()}
          </div>

          {/* Filter Tags */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-[#E5E5E5]/60">Filter:</span>
            {['Hotels', 'Villas', 'Apartments', 'Resorts', 'Cottages'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-1.5 rounded-lg text-sm bg-[#14213D]/60 text-[#E5E5E5]/80 hover:bg-[#14213D]/80"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Button */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/80 transition-colors">
              Search →
            </button>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex justify-between items-center mb-12">
        {['HelloSign', 'DoorDash', 'Coinbase', 'Airtable', 'Pendo', 'Treehouse'].map((partner) => (
          <div key={partner} className="text-[#E5E5E5]/40 text-lg font-semibold">
            {partner}
          </div>
        ))}
      </div>

      {/* Exclusive Deals Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Exclusive deals just for you!</h2>
          <button className="text-[#E5E5E5]/60 hover:text-white">See All →</button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="relative h-[200px] rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              alt="Flight Deal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="text-xs text-white/80">Valid only on 2 Jan - 9 Jan 2024</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Exclusive Flight<br />Deals Just For You!</h3>
                <div className="text-4xl font-bold text-white">50%</div>
                <div className="text-xs text-white/80">*with Terms and Condition</div>
              </div>
            </div>
          </div>

          <div className="relative h-[200px] rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d"
              alt="Rental Deal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="text-xs text-white/80">Valid only on 12 Jan - 19 Jan 2024</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Exclusive Rental<br />Deals Just For You!</h3>
                <div className="text-4xl font-bold text-white">25%</div>
                <div className="text-xs text-white/80">*with Terms and Condition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Trending Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Top Trending Worldwide</h2>
            <p className="text-[#E5E5E5]/60">Discover the most trending destinations worldwide.</p>
          </div>
          <button className="text-[#E5E5E5]/60 hover:text-white">See All →</button>
        </div>

        <div className="flex space-x-4 mb-6">
          {['Indonesia', 'France', 'Malaysia', 'Australia'].map((location) => (
            <button
              key={location}
              className="px-4 py-2 rounded-lg text-sm bg-[#14213D]/40 text-[#E5E5E5]/80 hover:bg-[#14213D]/60"
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelAssist;