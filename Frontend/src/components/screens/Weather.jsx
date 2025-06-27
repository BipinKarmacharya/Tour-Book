// components/screens/Weather.jsx
import { useState } from 'react';
import { ChevronRight, ArrowRight, Umbrella } from 'lucide-react';
import { colors } from '../../constants/colors';
import { Sun, Cloud, CloudRain, Wind } from '../../constants/icons';

export default function WeatherScreen({ setActiveScreen }) {
  const [selectedDay, setSelectedDay] = useState(0);
  
  const forecast = [
    { day: 'May 15', icon: <Sun size={24} />, temp: '24°C', condition: 'Sunny', wind: '8 km/h', humidity: '65%', uv: 'High' },
    { day: 'May 16', icon: <Cloud size={24} />, temp: '22°C', condition: 'Partly Cloudy', wind: '10 km/h', humidity: '70%', uv: 'Moderate' },
    { day: 'May 17', icon: <CloudRain size={24} />, temp: '19°C', condition: 'Light Rain', wind: '12 km/h', humidity: '85%', uv: 'Low' },
    { day: 'May 18', icon: <Sun size={24} />, temp: '23°C', condition: 'Sunny', wind: '7 km/h', humidity: '60%', uv: 'High' },
    { day: 'May 19', icon: <Sun size={24} />, temp: '25°C', condition: 'Sunny', wind: '5 km/h', humidity: '55%', uv: 'Very High' },
    { day: 'May 20', icon: <Cloud size={24} />, temp: '21°C', condition: 'Cloudy', wind: '9 km/h', humidity: '75%', uv: 'Moderate' },
    { day: 'May 21', icon: <CloudRain size={24} />, temp: '18°C', condition: 'Showers', wind: '15 km/h', humidity: '90%', uv: 'Low' }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 pt-12 pb-6 px-4 text-white">
        <button 
          onClick={() => setActiveScreen('budget')} 
          className="mb-4 flex items-center text-white"
        >
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Weather Forecast</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 text-yellow-500">
              {forecast[selectedDay].icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{forecast[selectedDay].temp}</h2>
              <p className="text-gray-600">{forecast[selectedDay].condition}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <p className="text-gray-600 text-sm">Wind</p>
              <div className="flex items-center justify-center">
                <Wind size={14} className="mr-1" />
                <p>{forecast[selectedDay].wind}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Humidity</p>
              <p>{forecast[selectedDay].humidity}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">UV Index</p>
              <p>{forecast[selectedDay].uv}</p>
            </div>
          </div>
        </div>
        
        <h2 className="font-semibold mb-3">7-Day Forecast</h2>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          {forecast.map((day, index) => (
            <div 
              key={index} 
              className={`p-4 flex items-center justify-between ${index !== forecast.length - 1 ? 'border-b border-gray-100' : ''} ${selectedDay === index ? 'bg-blue-50' : ''}`}
              onClick={() => setSelectedDay(index)}
            >
              <p className="font-medium">{day.day}</p>
              <div className="text-blue-500">
                {day.icon}
              </div>
              <div className="text-right">
                <p className="font-medium">{day.temp}</p>
                <p className="text-xs text-gray-600">{day.condition}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-4">Weather Alerts</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded mb-3">
            <div className="flex items-start">
              <Umbrella size={18} className="text-yellow-500 mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium">Rain Expected</h3>
                <p className="text-sm">Pack an umbrella for May 17 and 21</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
            <div className="flex items-start">
              <Sun size={18} className="text-blue-500 mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium">UV Protection Advised</h3>
                <p className="text-sm">High UV index on sunny days. Bring sun protection.</p>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setActiveScreen('itinerary')}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium"
        >
          Back to Itinerary <ArrowRight size={18} className="ml-2 inline" />
        </button>
      </div>
    </div>
  );
}