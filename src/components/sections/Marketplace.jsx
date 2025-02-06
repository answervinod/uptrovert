// Create new file for Marketplace section
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('popular');

 // Update categories for merchandise
  const categories = [
    'All', 'Travel Wear', 'Backpacks', 'Accessories', 'Adventure Gear', 'Tech Gadgets', 'Travel Essentials'
  ];

  // Update listings for merchandise products
  const listings = [
    // Backpacks (10 items)
    {
      id: 'bp1',
      title: 'Adventure Series Backpack',
      category: 'Backpacks',
      description: 'Weatherproof 40L backpack with laptop compartment',
      price: 129.99,
      rating: 4.9,
      reviews: 328,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      tags: ['Waterproof', 'Anti-theft', 'USB Charging'],
      colors: ['Black', 'Navy', 'Forest Green'],
      sizes: ['Standard'],
      featured: true,
      stock: 45
    },
    {
      id: 'bp2',
      title: 'Urban Explorer Pack',
      category: 'Backpacks',
      description: 'Stylish city backpack with hidden compartments',
      price: 89.99,
      rating: 4.7,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1581605405669-123e1d22e596',
      tags: ['City Travel', 'Hidden Pockets', 'Lightweight'],
      colors: ['Grey', 'Black', 'Brown'],
      sizes: ['Standard'],
      stock: 60
    },
    {
      id: 'bp3',
      title: 'Hiking Pro Backpack',
      category: 'Backpacks',
      description: '55L professional hiking backpack with rain cover',
      price: 179.99,
      rating: 4.8,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1510375966634-c8abbf1f73ce',
      tags: ['Hiking', 'Rain Cover', 'Ergonomic'],
      colors: ['Red', 'Blue', 'Black'],
      sizes: ['Standard'],
      stock: 35
    },
    {
      id: 'bp4',
      title: 'Compact Daypack',
      category: 'Backpacks',
      description: 'Lightweight 20L packable daypack for short trips',
      price: 49.99,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1575844611398-f0c55fd0d9e1',
      tags: ['Packable', 'Lightweight', 'Water Resistant'],
      colors: ['Yellow', 'Black', 'Blue'],
      sizes: ['Standard'],
      stock: 120
    },
    {
      id: 'bp5',
      title: 'Camera Adventure Pack',
      category: 'Backpacks',
      description: 'Professional camera backpack with customizable dividers',
      price: 159.99,
      rating: 4.9,
      reviews: 276,
      image: 'https://images.unsplash.com/photo-1520869578617-557561d7b114',
      tags: ['Camera Gear', 'Padded', 'Customizable'],
      colors: ['Black', 'Grey'],
      sizes: ['Standard'],
      stock: 40
    },
    {
      id: 'bp6',
      title: 'Minimalist Travel Pack',
      category: 'Backpacks',
      description: '30L carry-on compliant travel backpack',
      price: 139.99,
      rating: 4.7,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3',
      tags: ['Carry-on', 'Minimalist', 'Business Travel'],
      colors: ['Black', 'Navy', 'Grey'],
      sizes: ['Standard'],
      stock: 85
    },
    {
      id: 'bp7',
      title: 'Adventure Sport Backpack',
      category: 'Backpacks',
      description: 'Lightweight sports backpack with hydration system',
      price: 99.99,
      rating: 4.6,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1532697057284-bbe526e18cdb',
      tags: ['Hydration', 'Breathable', 'Reflective'],
      colors: ['Blue', 'Red', 'Black'],
      sizes: ['Standard'],
      stock: 65
    },
    {
      id: 'bp8',
      title: 'Tech Commuter Pack',
      category: 'Backpacks',
      description: 'Smart backpack with built-in USB ports and RFID protection',
      price: 149.99,
      rating: 4.8,
      reviews: 435,
      image: 'https://images.unsplash.com/photo-1585916420730-d7f95e942d43',
      tags: ['Tech-Smart', 'RFID', 'USB Charging'],
      colors: ['Black', 'Grey'],
      sizes: ['Standard'],
      stock: 55
    },
    {
      id: 'bp9',
      title: 'Weekend Traveler Pack',
      category: 'Backpacks',
      description: '45L expandable weekend travel backpack',
      price: 169.99,
      rating: 4.7,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f',
      tags: ['Expandable', 'Weekend Trip', 'Laptop Sleeve'],
      colors: ['Green', 'Black', 'Blue'],
      sizes: ['Standard'],
      stock: 70
    },
    {
      id: 'bp10',
      title: 'Alpine Explorer Pack',
      category: 'Backpacks',
      description: '65L professional mountaineering backpack',
      price: 199.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7',
      tags: ['Mountaineering', 'Heavy-Duty', 'Ice Axe Loops'],
      colors: ['Orange', 'Black', 'Blue'],
      sizes: ['Standard'],
      stock: 30
    },
    // ... Continue with other categories
];

  // Update hero section content
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-[2rem] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=2000"
          alt="Travel Gear Banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-12">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white leading-tight mb-6">
              Gear Up for Your Next Adventure
            </h1>
            <p className="text-xl text-[#E5E5E5]/90 mb-8">
              Premium travel essentials curated for modern explorers
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#FCA311] text-black rounded-xl font-medium hover:bg-[#FCA311]/90 transition-colors">
                Shop Now
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-medium hover:bg-white/20 transition-colors">
                View Collections
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-4 z-30 bg-[#14213D]/60 backdrop-blur-xl rounded-2xl p-6 mb-12">
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-white/60 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search for gear..."
                className="w-full bg-white/10 text-white placeholder-white/60 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FCA311]/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/10 text-white rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#FCA311]/50"
          >
            <option value="popular">Popular</option>
            <option value="recent">Recent</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20">
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-[#FCA311] text-black shadow-lg shadow-[#FCA311]/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {listings
          .filter(item => activeCategory === 'All' || item.category === activeCategory)
          .map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
      </div>
    </div>
  );
};

const ProductCard = ({ listing }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group"
  >
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
      <img 
        src={listing.image}
        alt={listing.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
        ♡
      </button>
      <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full py-3 bg-[#FCA311] text-black rounded-lg font-medium hover:bg-[#FCA311]/90">
          Add to Cart
        </button>
      </div>
    </div>
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#FCA311]">{listing.category}</span>
        <div className="flex items-center gap-1">
          <span className="text-[#FCA311]">★</span>
          <span className="text-white">{listing.rating}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{listing.title}</h3>
      <p className="text-[#E5E5E5]/60 text-sm mb-3">{listing.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {listing.colors?.map((color) => (
            <button
              key={color}
              className="w-6 h-6 rounded-full border-2 border-white/20"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
        <span className="text-2xl font-bold text-white">${listing.price}</span>
      </div>
    </div>
  </motion.div>
);

export default Marketplace;