// components/screens/Itinerary.jsx
import { Edit, ChevronRight, Sun, BookOpen, ArrowRight } from 'lucide-react';
import { colors } from '../../constants/colors';
import { MapPin } from '../../constants/icons';

export default function ItineraryScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 pt-12 pb-6 px-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Itinerary</h1>
          <button className="bg-white bg-opacity-20 p-2 rounded-lg">
            <Edit size={18} color="white" />
          </button>
        </div>
        <p className="mb-1">Kyoto, Japan</p>
        <p className="text-sm text-white text-opacity-80">May 15 - May 22, 2025 • 7 Days</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex space-x-4">
          <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg font-medium">Day View</button>
          <button className="flex-1 py-2 text-gray-600 rounded-lg font-medium" onClick={() => setActiveScreen('mapping')}>Map View</button>
        </div>
      </div>
      
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Day 1 - May 15</h2>
          <button className="text-blue-500 text-sm">View All</button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <div className="border-l-4 border-blue-500 pl-4 py-4 flex">
            <div className="mr-4 flex flex-col items-center">
              <span className="text-sm font-medium">9:00</span>
              <div className="h-full border-r border-dashed border-gray-300 mx-auto my-1"></div>
              <span className="text-sm font-medium">11:00</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Fushimi Inari Shrine</h3>
              <p className="text-gray-600 text-sm mb-2">Famous for thousands of vermilion torii gates</p>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={14} className="mr-1" /> 20 min from hotel
              </div>
            </div>
            <img src="/api/placeholder/70/70" alt="Fushimi Inari" className="h-16 w-16 rounded-lg object-cover" />
          </div>
          
          <div className="border-l-4  pl-4 py-4 flex border-t border-gray-100">
            <div className="mr-4 flex flex-col items-center">
              <span className="text-sm font-medium">12:00</span>
              <div className="h-full border-r border-dashed border-gray-300 mx-auto my-1"></div>
              <span className="text-sm font-medium">14:00</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Lunch at Nishiki Market</h3>
              <p className="text-gray-600 text-sm mb-2">Known as "Kyoto's Kitchen" with food stalls</p>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={14} className="mr-1" /> 3.5 km away
              </div>
            </div>
            <img src="/api/placeholder/70/70" alt="Nishiki Market" className="h-16 w-16 rounded-lg object-cover" />
          </div>
          
          <div className="border-l-4 pl-4 py-4 flex border-t border-gray-100">
            <div className="mr-4 flex flex-col items-center">
              <span className="text-sm font-medium">15:00</span>
              <div className="h-full border-r border-dashed border-gray-300 mx-auto my-1"></div>
              <span className="text-sm font-medium">17:30</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Kiyomizu-dera Temple</h3>
              <p className="text-gray-600 text-sm mb-2">UNESCO heritage site with panoramic views</p>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={14} className="mr-1" /> 4 km away
              </div>
            </div>
            <img src="/api/placeholder/70/70" alt="Kiyomizu-dera" className="h-16 w-16 rounded-lg object-cover" />
          </div>
        </div>
        
        <div className="flex justify-between mb-3">
          <h2 className="font-semibold">Day 2 - May 16</h2>
          <button className="text-blue-500 text-sm">View All</button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                <Sun size={18} color={colors.sandyBeige} />
              </div>
              <div>
                <h3 className="font-medium">Arashiyama Bamboo Grove</h3>
                <p className="text-xs text-gray-600">Morning visit recommended</p>
              </div>
            </div>
            <ChevronRight size={18} color={colors.charcoal} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <BookOpen size={18} color={colors.darkBlue} />
              </div>
              <div>
                <h3 className="font-medium">Monkey Park Iwatayama</h3>
                <p className="text-xs text-gray-600">Wildlife experience</p>
              </div>
            </div>
            <ChevronRight size={18} color={colors.charcoal} />
          </div>
        </div>
        
        <button 
          onClick={() => setActiveScreen('budget')}
          className="w-full border border-blue-500 text-blue-500 py-3 rounded-xl font-medium mb-4"
        >
          View Budget Estimate
        </button>
        
        <button
          onClick={() => setActiveScreen('packing')}
          className="w-full border border-green-500 text-green-500 py-3 rounded-xl font-medium"
        >
          Packing Suggestions
        </button>
      </div>
    </div>
  );
}