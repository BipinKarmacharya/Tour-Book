// components/screens/Budget.jsx
import { ChevronRight, LineChart, ArrowRight } from 'lucide-react';
import { colors } from '../../constants/colors';
import { DollarSign } from '../../constants/icons';

export default function BudgetScreen({ setActiveScreen }) {
  const budget = {
    accommodation: 35,
    food: 25,
    transportation: 15,
    activities: 20,
    shopping: 5
  };

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('itinerary')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Budget Estimator</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Total Estimate</h2>
            <span className="text-2xl font-bold text-blue-600">$2,450</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
            <span>Per person:</span>
            <span>$1,225</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Daily average:</span>
            <span>$350</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-4">Budget Breakdown</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div className="bg-blue-100 p-1.5 rounded-md mr-2">
                  <DollarSign size={14} color={colors.darkBlue} />
                </div>
                <span>Accommodation</span>
              </div>
              <span className="font-medium">${budget.accommodation}0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${budget.accommodation}%` }}></div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div className="bg-green-100 p-1.5 rounded-md mr-2">
                  <DollarSign size={14} color={colors.forestGreen} />
                </div>
                <span>Food & Drinks</span>
              </div>
              <span className="font-medium">${budget.food}0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${budget.food}%` }}></div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-1.5 rounded-md mr-2">
                  <DollarSign size={14} color={colors.sandyBeige} />
                </div>
                <span>Transportation</span>
              </div>
              <span className="font-medium">${budget.transportation}0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${budget.transportation}%` }}></div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div className="bg-red-100 p-1.5 rounded-md mr-2">
                  <DollarSign size={14} color={colors.coral} />
                </div>
                <span>Activities & Tours</span>
              </div>
              <span className="font-medium">${budget.activities}0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: `${budget.activities}%` }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div className="bg-purple-100 p-1.5 rounded-md mr-2">
                  <DollarSign size={14} color="purple" />
                </div>
                <span>Shopping & Souvenirs</span>
              </div>
              <span className="font-medium">${budget.shopping}0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${budget.shopping}%` }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-4">Currency Info</h2>
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-gray-600 text-sm">Exchange Rate</p>
              <p className="font-medium">1 USD = 147.5 JPY</p>
            </div>
            <button className="bg-gray-100 p-2 rounded-lg">
              <LineChart size={18} color={colors.charcoal} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <input type="text" value="1" className="w-full p-3 border border-gray-300 rounded-lg text-right" />
              <p className="text-right text-sm text-gray-600 mt-1">USD</p>
            </div>
            <div className="px-4">
              <ArrowRight size={20} color={colors.charcoal} />
            </div>
            <div className="flex-1">
              <input type="text" value="147.5" className="w-full p-3 border border-gray-300 rounded-lg" />
              <p className="text-sm text-gray-600 mt-1">JPY</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setActiveScreen('weather')}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium mb-4"
        >
          Check Weather Forecast
        </button>
      </div>
    </div>
  );
}