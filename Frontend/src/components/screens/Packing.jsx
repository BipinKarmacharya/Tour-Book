// components/screens/Packing.jsx
import { useState } from 'react';
import { ChevronRight, Camera, PlusCircle } from 'lucide-react';
import { colors } from '../../constants/colors';
import { Sun } from '../../constants/icons';

export default function PackingScreen({ setActiveScreen }) {
  const [categories, setCategories] = useState([
    {
      name: "Essentials",
      items: [
        { name: "Passport", checked: true },
        { name: "Travel Insurance", checked: true },
        { name: "Credit Cards", checked: false },
        { name: "Phone & Charger", checked: false },
        { name: "Medication", checked: false }
      ]
    },
    {
      name: "Clothing",
      items: [
        { name: "T-shirts", checked: false },
        { name: "Jackets", checked: false },
        { name: "Walking shoes", checked: false },
        { name: "Umbrella", checked: false },
        { name: "Hat", checked: false }
      ]
    },
    {
      name: "Tech & Gadgets",
      items: [
        { name: "Camera", checked: false },
        { name: "Power bank", checked: false },
        { name: "Travel adapter", checked: false },
        { name: "E-reader", checked: false }
      ]
    }
  ]);

  const toggleItem = (categoryIndex, itemIndex) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].items[itemIndex].checked = !newCategories[categoryIndex].items[itemIndex].checked;
    setCategories(newCategories);
  };

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-green-500 to-green-700 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('itinerary')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Packing List</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Sun size={18} color={colors.darkBlue} />
            </div>
            <div>
              <h3 className="font-medium">Weather Summary</h3>
              <p className="text-xs text-gray-600">Mostly mild with some rain expected</p>
            </div>
          </div>
          
          <div className="flex space-x-2 mb-2">
            <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs">Pleasant days</div>
            <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs">Cool evenings</div>
            <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs">Some rain</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Suggested Items</h2>
            <button className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
              <PlusCircle size={14} className="inline mr-1" /> Add Item
            </button>
          </div>
          
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">{category.name}</h3>
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="flex items-center p-3 border-b border-gray-100"
                  onClick={() => toggleItem(catIndex, itemIndex)}
                >
                  <div className={`w-5 h-5 rounded border ${item.checked ? 'bg-green-500 border-green-500' : 'border-gray-300'} mr-3 flex items-center justify-center`}>
                    {item.checked && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span className={item.checked ? "text-gray-400 line-through" : ""}>{item.name}</span>
                </div>
              ))}
            </div>
          ))}
          
          <div className="mt-4">
            <button 
              onClick={() => setActiveScreen('cultural')}
              className="w-full border border-blue-500 text-blue-500 py-3 rounded-xl font-medium"
            >
              Cultural Tips & Customs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}