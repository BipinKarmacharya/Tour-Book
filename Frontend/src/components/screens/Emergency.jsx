// components/screens/Emergency.jsx
import { ChevronRight, Phone, Heart, AlertTriangle, Droplet } from 'lucide-react';
import { colors } from '../../constants/colors';

export default function EmergencyScreen({ setActiveScreen }) {
  const emergencyContacts = [
    {
      title: "Emergency Services",
      number: "110",
      description: "Police",
      icon: <Phone size={16} className="mr-2 text-red-500" />,
      color: "border-red-500"
    },
    // ... more contacts
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-red-500 to-red-700 pt-12 pb-6 px-4 text-white">
        <button 
          onClick={() => setActiveScreen('itinerary')} 
          className="mb-4 flex items-center text-white"
        >
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Emergency Info</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Emergency Contacts</h2>
            <AlertTriangle size={20} color="red" />
          </div>
          
          <div className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className={`border-l-2 ${contact.color} pl-4`}>
                <h3 className="font-medium">{contact.title}</h3>
                <div className="flex items-center mt-1">
                  {contact.icon}
                  <button className="text-red-500 font-medium">{contact.number}</button>
                </div>
                <p className="text-xs text-gray-600 mt-1">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-4">Medical Information</h2>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-red-100 p-1.5 rounded-md mr-2 mt-0.5">
                <Heart size={14} color="red" />
              </div>
              <div>
                <h3 className="font-medium">Kyoto University Hospital</h3>
                <p className="text-xs text-gray-600">54 Kawaharacho, Shogoin, Sakyo Ward</p>
                <p className="text-xs text-blue-500 mt-1">View on Map</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded mt-4">
            <p className="text-sm">
              <span className="font-medium">Tip:</span> Take photos of your prescriptions before traveling.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="font-semibold mb-4">Natural Disaster Info</h2>
          
          <div className="flex items-start mb-4">
            <div className="bg-orange-100 p-1.5 rounded-md mr-2 mt-0.5">
              <AlertTriangle size={14} color="orange" />
            </div>
            <div>
              <h3 className="font-medium">Earthquake Safety</h3>
              <p className="text-xs text-gray-600">
                If indoors, take cover under a sturdy table. If outdoors, move to an open area.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 p-1.5 rounded-md mr-2 mt-0.5">
              <Droplet size={14} color={colors.darkBlue} />
            </div>
            <div>
              <h3 className="font-medium">Typhoon & Flooding</h3>
              <p className="text-xs text-gray-600">
                Follow evacuation orders and avoid low-lying areas.
              </p>
            </div>
          </div>
          
          <button className="w-full border border-red-500 text-red-500 py-2 rounded-lg mt-4 text-sm">
            Download Emergency Guide
          </button>
        </div>
      </div>
    </div>
  );
}