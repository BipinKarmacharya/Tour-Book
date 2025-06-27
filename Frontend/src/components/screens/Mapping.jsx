// components/screens/Mapping.jsx
import { ChevronRight, Search, MapPin } from 'lucide-react';
import { colors } from '../../constants/colors';
import { Map, Wifi } from '../../constants/icons';

export default function MappingScreen({ setActiveScreen }) {
  const itineraryPlaces = [
    { name: "Fushimi Inari Shrine", time: "Day 1 • 9:00 AM" },
    { name: "Nishiki Market", time: "Day 1 • 12:00 PM" },
    { name: "Kiyomizu-dera Temple", time: "Day 1 • 3:00 PM" }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 pt-12 pb-6 px-4 text-white">
        <button 
          onClick={() => setActiveScreen('itinerary')} 
          className="mb-4 flex items-center text-white"
        >
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Trip Map</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="relative h-96 bg-gray-200">
        <img src="/api/placeholder/400/320" alt="Map of Kyoto" className="w-full h-full object-cover" />
        
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="bg-white p-2 rounded-md shadow">
            <Search size={20} color={colors.charcoal} />
          </button>
          <button className="bg-white p-2 rounded-md shadow">
            <Map size={20} color={colors.charcoal} />
          </button>
          <button className="bg-white p-2 rounded-md shadow">
            <MapPin size={20} color={colors.charcoal} />
          </button>
        </div>
      </div>
      
      <div className="px-4 py-4">
        <h2 className="font-semibold mb-3">Places in Your Itinerary</h2>
        
        <div className="space-y-3">
          {itineraryPlaces.map((place, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-3 flex items-center">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                <span>{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{place.name}</h3>
                <p className="text-xs text-gray-600">{place.time}</p>
              </div>
              <button className="p-2">
                <MapPin size={18} color={colors.coral} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <h2 className="font-semibold mb-3">Transit Options</h2>
          
          <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
            {['Walking', 'Bus', 'Subway', 'Taxi'].map((option, index) => (
              <button 
                key={index}
                className={`flex-shrink-0 ${index === 0 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'} px-4 py-2 rounded-full text-sm`}
              >
                {option}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 mt-3">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-1.5 rounded-md mr-2">
                <Wifi size={16} color={colors.darkBlue} />
              </div>
              <span className="font-medium">Offline Maps Available</span>
            </div>
            <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg">
              Download Kyoto Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}