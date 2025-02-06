import { motion } from 'framer-motion';

const Marketplace = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] rounded-3xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] to-transparent z-10" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475"
            alt="Fashion Collection"
            className="h-[300px] object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 p-10 flex flex-col justify-center">
          <span className="text-[#E5E5E5]/60 mb-2">#Big Fashion Sale</span>
          <h1 className="text-4xl font-bold text-white mb-2">Limited Time Offer!</h1>
          <h2 className="text-3xl font-bold text-[#FCA311] mb-4">Up to 50% OFF!</h2>
          <p className="text-[#E5E5E5]/80">Redefine Your Everyday Style</p>
        </div>
      </div>

      {/* Rest of the Marketplace code... */}
    </div>
  );
};

export default Marketplace;