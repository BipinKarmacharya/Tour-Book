// components/screens/Share.jsx
import { ChevronRight, Image, MapPin } from 'lucide-react';
import { colors } from '../../constants/colors';
import { User } from '../../constants/icons';

export default function ShareScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 pt-12 pb-6 px-4 text-white">
        <button 
          onClick={() => setActiveScreen('posts')} 
          className="mb-4 flex items-center text-white"
        >
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Share Your Journey</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="mb-4">
            <h2 className="font-semibold mb-3">Create a Trip Report</h2>
            <p className="text-gray-600 text-sm">Share your experience and inspire others</p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex space-x-2 mb-3">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <User size={20} color={colors.darkBlue} />
              </div>
              <div className="flex-1">
                <p className="font-medium">Your Trip to Kyoto</p>
                <p className="text-xs text-gray-600">May 15 - 22, 2025</p>
              </div>
            </div>
            
            <textarea 
              placeholder="Write about your experience..."
              className="w-full border border-gray-200 rounded-lg p-3 text-sm min-h-[100px]"
            ></textarea>
            
            <div className="mt-3 flex space-x-2">
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm flex items-center justify-center">
                <Image size={16} className="mr-1" />
                Add Photos
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm flex items-center justify-center">
                <MapPin size={16} className="mr-1" />
                Add Places
              </button>
            </div>
          </div>
          
          <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-medium">
            Share Report
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-4">Social Sharing</h2>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { name: 'Facebook', color: 'bg-blue-600' },
              { name: 'Instagram', color: 'bg-pink-600' },
              { name: 'Twitter', color: 'bg-blue-400' }
            ].map((platform, index) => (
              <button 
                key={index}
                className={`${platform.color} text-white p-3 rounded-lg flex flex-col items-center justify-center`}
              >
                <div className="bg-white p-1 rounded-full mb-1">
                  <div className={`h-6 w-6 rounded-full ${platform.color}`}></div>
                </div>
                <span className="text-xs">{platform.name}</span>
              </button>
            ))}
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3">
            <p className="text-sm mb-2">Share Travel Link</p>
            <div className="flex">
              <input 
                type="text" 
                value="tripwave.example/kyoto-2025" 
                readOnly
                className="flex-1 bg-gray-50 border border-gray-200 rounded-l-lg px-3 py-2 text-sm"
              />
              <button className="bg-indigo-500 text-white px-3 py-2 rounded-r-lg text-sm">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}