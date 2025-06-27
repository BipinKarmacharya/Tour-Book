// components/screens/Planner.jsx
import { ArrowRight, Calendar, ChevronRight, Compass } from 'lucide-react';
import { colors } from '../../constants/colors';

export default function TripPlannerScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-white pt-12 pb-4 px-4 shadow-sm">
        <button onClick={() => setActiveScreen('discovery')} className="mb-4 flex items-center text-gray-600">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Plan Your Trip</h1>
        <p className="text-gray-600 mb-4">Kyoto, Japan</p>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
          <h3 className="font-semibold mb-4">When are you traveling?</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Start Date</p>
              <div className="border border-gray-300 rounded-lg p-3 flex items-center">
                <Calendar size={16} className="text-gray-500 mr-2" />
                <span>May 15, 2025</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">End Date</p>
              <div className="border border-gray-300 rounded-lg p-3 flex items-center">
                <Calendar size={16} className="text-gray-500 mr-2" />
                <span>May 22, 2025</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 mb-2">
            <p className="text-sm text-gray-600 mb-2">Duration</p>
            <p className="font-medium">7 Days, 6 Nights</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
          <h3 className="font-semibold mb-4">Who's joining?</h3>
          <div className="flex space-x-2 mb-4">
            <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm flex items-center">
              Adults <span className="ml-2 bg-white rounded-full h-5 w-5 flex items-center justify-center text-xs">2</span>
            </div>
            <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm flex items-center">
              Children <span className="ml-2 bg-white rounded-full h-5 w-5 flex items-center justify-center text-xs">0</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
          <h3 className="font-semibold mb-4">Transportation Preferences</h3>
          <div className="grid grid-cols-4 gap-3">
            <button className="flex flex-col items-center p-2 bg-blue-50 rounded-lg border-2 border-blue-500">
              <div className="bg-blue-100 rounded-full p-2 mb-1">
                <Compass size={16} color={colors.darkBlue} />
              </div>
              <span className="text-xs">Walking</span>
            </button>
            <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg border border-gray-300">
              <div className="bg-gray-100 rounded-full p-2 mb-1">
                <Compass size={16} />
              </div>
              <span className="text-xs">Driving</span>
            </button>
            <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg border border-gray-300">
              <div className="bg-gray-100 rounded-full p-2 mb-1">
                <Compass size={16} />
              </div>
              <span className="text-xs">Transit</span>
            </button>
            <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg border border-gray-300">
              <div className="bg-gray-100 rounded-full p-2 mb-1">
                <Compass size={16} />
              </div>
              <span className="text-xs">Bike</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h3 className="font-semibold mb-4">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-sm">Historical Sites</span>
            <span className="bg-green-50 border border-green-200 text-green-600 px-3 py-1 rounded-full text-sm">Gardens</span>
            <span className="bg-yellow-50 border border-yellow-200 text-yellow-600 px-3 py-1 rounded-full text-sm">Local Food</span>
            <span className="bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">+ Add More</span>
          </div>
        </div>
        
        <button 
          onClick={() => setActiveScreen('itinerary')}
          className="w-full bg-green-500 text-white py-4 rounded-xl font-medium flex items-center justify-center"
        >
          Create Itinerary <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
}