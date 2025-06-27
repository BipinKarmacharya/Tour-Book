import { Calendar, MapPin, DollarSign, Sun, CloudRain, List, Map } from 'lucide-react';
import { useTrip } from '../../context/TripContext';
import { colors } from '../../constants/colors';

export default function CurrentTripScreen({ setActiveScreen }) {
  const { currentTrip } = useTrip();
  
  const stats = [
    { icon: <Calendar size={20} />, 
      value: `${currentTrip.dates.start} to ${currentTrip.dates.end}`, 
      label: 'Trip Dates' },
    { icon: <MapPin size={20} />, 
      value: currentTrip.destination, 
      label: 'Destination' },
    { icon: <DollarSign size={20} />, 
      value: `$${currentTrip.budget.total}`, 
      label: 'Total Budget' }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 pt-12 pb-6 px-4 text-white">
        <h1 className="text-2xl font-bold mb-2">Current Trip Plan</h1>
        <p className="text-sm">{currentTrip.destination}</p>
      </div>

      {/* Quick Stats */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-2 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-blue-500 mb-1">
                {stat.icon}
              </div>
              <p className="font-medium">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trip Sections */}
      <div className="px-4 space-y-4">
        <SectionCard 
          icon={<List size={20} color={colors.darkBlue} />}
          title="Itinerary"
          value={`${currentTrip.itinerary.length} days planned`}
          onClick={() => setActiveScreen('itinerary')}
        />
        
        <SectionCard 
          icon={<DollarSign size={20} color={colors.forestGreen} />}
          title="Budget"
          value={`$${currentTrip.budget.total} total`}
          onClick={() => setActiveScreen('budget')}
        />
        
        <SectionCard 
          icon={<Sun size={20} color={colors.sandyBeige} />}
          title="Weather"
          value={`${currentTrip.weather[0].condition} on arrival`}
          onClick={() => setActiveScreen('weather')}
        />
        
        <SectionCard 
          icon={<Map size={20} color={colors.coral} />}
          title="Map View"
          value={`${currentTrip.itinerary.reduce((acc, day) => acc + day.activities.length, 0)} locations`}
          onClick={() => setActiveScreen('mapping')}
        />
      </div>

      {/* Recent Activity */}
      <div className="px-4 mt-6">
        <h3 className="font-semibold mb-3">Recent Updates</h3>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-start mb-3">
            <div className="bg-blue-100 p-1.5 rounded-md mr-2">
              <CloudRain size={16} color={colors.darkBlue} />
            </div>
            <div>
              <p className="font-medium">Weather Alert</p>
              <p className="text-sm text-gray-600">
                Rain expected on {currentTrip.itinerary[2].date}
              </p>
            </div>
          </div>
          {/* More updates... */}
        </div>
      </div>
    </div>
  );
}

function SectionCard({ icon, title, value, onClick }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between active:bg-gray-50"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600">{value}</p>
        </div>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </div>
  );
}