// components/screens/Discovery.jsx
import { Search, Filter, Heart, ChevronRight } from 'lucide-react';
import { colors } from '../../constants/colors';
import { Star } from '../../constants/icons';

export default function DiscoveryScreen({ setActiveScreen }) {
  const destinations = [
    {
      name: "Bali, Indonesia",
      type: "Island Paradise",
      rating: 4.9,
      image: "/api/placeholder/200/120",
      tags: ["Beach", "Culture"]
    },
    {
      name: "Kyoto, Japan",
      type: "Cultural Experience",
      rating: 4.8,
      image: "/api/placeholder/200/120",
      tags: ["Historical", "Cultural"]
    },
    {
      name: "Swiss Alps",
      type: "Mountain Adventure",
      rating: 4.7,
      image: "/api/placeholder/200/120",
      tags: ["Adventure", "Nature"]
    }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 pt-12 pb-6 px-4 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-4">Discover Places</h1>
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Where would you like to go?" 
            className="w-full py-3 px-12 rounded-full shadow-md text-gray-700"
          />
          <Search size={20} className="absolute left-4 top-3.5 text-gray-500" />
          <Filter size={20} className="absolute right-4 top-3.5 text-gray-500" />
        </div>
      </div>
      
      <div className="px-4 py-4">
        <div className="flex space-x-3 overflow-x-auto pb-3 hide-scrollbar">
          <button className="flex-shrink-0 bg-green-500 text-white px-4 py-2 rounded-full text-sm">All</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Adventure</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Cultural</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Nature</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Beach</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">City</button>
        </div>
      </div>
      
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-1 gap-4">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              onClick={() => setActiveScreen('planner')}
            >
              <div className="relative h-48">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow">
                  <Heart size={18} color={colors.coral} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-lg">{dest.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm">{dest.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{dest.type}</p>
                <div className="flex space-x-2">
                  {dest.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Trending Experiences</h2>
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-4">
          <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32">
              <img src="/api/placeholder/150/100" alt="Experience" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium">Hot Air Balloon Ride</h3>
              <p className="text-gray-600 text-xs">Cappadocia, Turkey</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32">
              <img src="/api/placeholder/150/100" alt="Experience" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium">Northern Lights Tour</h3>
              <p className="text-gray-600 text-xs">Reykjavik, Iceland</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32">
              <img src="/api/placeholder/150/100" alt="Experience" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium">Desert Safari</h3>
              <p className="text-gray-600 text-xs">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}