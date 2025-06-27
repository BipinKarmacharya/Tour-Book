// components/screens/Cultural.jsx
import { ChevronRight, User, BookOpen, Map, DollarSign } from 'lucide-react';
import { colors } from '../../constants/colors';

export default function CulturalCalendarScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('packing')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Cultural Calendar</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-md p-5 mb-4">
          <h2 className="font-semibold mb-3">Local Events During Your Stay</h2>
          
          <div className="border-l-2 border-purple-500 pl-4 py-3 mb-4">
            <h3 className="font-medium">Aoi Matsuri (Hollyhock Festival)</h3>
            <p className="text-gray-600 text-sm mb-1">May 15, 2025</p>
            <p className="text-sm">One of Kyoto's three major festivals featuring a procession from the Imperial Palace to Shimogamo Shrine.</p>
          </div>
          
          <div className="border-l-2 border-purple-500 pl-4 py-3">
            <h3 className="font-medium">Monthly Toji Temple Market</h3>
            <p className="text-gray-600 text-sm mb-1">May 21, 2025</p>
            <p className="text-sm">Popular flea market with antiques, crafts, food, and more at the UNESCO World Heritage site.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
          <h2 className="font-semibold mb-3">Cultural Tips</h2>
          
          <div className="mb-4">
            <div className="flex items-start mb-2">
              <div className="bg-purple-100 p-1.5 rounded-md mr-2 mt-0.5">
                <User size={14} color="purple" />
              </div>
              <div>
                <h3 className="font-medium">Etiquette</h3>
                <p className="text-sm text-gray-600">Remove shoes before entering homes, temples, and some restaurants. Bow when greeting people.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-start mb-2">
              <div className="bg-green-100 p-1.5 rounded-md mr-2 mt-0.5">
                <BookOpen size={14} color={colors.forestGreen} />
              </div>
              <div>
                <h3 className="font-medium">Table Manners</h3>
                <p className="text-sm text-gray-600">Say "itadakimasu" before eating. Never stick chopsticks upright in rice.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-start mb-2">
              <div className="bg-yellow-100 p-1.5 rounded-md mr-2 mt-0.5">
                <DollarSign size={14} color={colors.sandyBeige} />
              </div>
              <div>
                <h3 className="font-medium">Tipping</h3>
                <p className="text-sm text-gray-600">Tipping is not customary in Japan and may even be considered rude.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start mb-2">
              <div className="bg-blue-100 p-1.5 rounded-md mr-2 mt-0.5">
                <Map size={14} color={colors.darkBlue} />
              </div>
              <div>
                <h3 className="font-medium">Public Behavior</h3>
                <p className="text-sm text-gray-600">Keep voices low in public. Avoid eating while walking in public areas.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-3">Language Basics</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 text-sm">Hello</p>
                <p className="font-medium">Konnichiwa</p>
              </div>
              <button className="p-1.5 rounded-md bg-gray-100">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 text-sm">Thank you</p>
                <p className="font-medium">Arigatou gozaimasu</p>
              </div>
              <button className="p-1.5 rounded-md bg-gray-100">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 text-sm">Excuse me</p>
                <p className="font-medium">Sumimasen</p>
              </div>
              <button className="p-1.5 rounded-md bg-gray-100">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 text-sm">Where is...?</p>
                <p className="font-medium">... wa doko desu ka?</p>
              </div>
              <button className="p-1.5 rounded-md bg-gray-100">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}