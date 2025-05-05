import { useState } from 'react';
import { Search, Calendar, Map, User, ChevronRight, Camera, Film, MapPin, Clock, Sun, Cloud, CloudRain, Wind, DollarSign, Umbrella, ShoppingBag, Heart, Share, Menu, Bell, LogOut, PlusCircle, Star, Edit, Filter, ArrowRight, Home, Compass, LineChart, BookOpen, Wifi, Grid, List } from 'lucide-react';

// Color palette inspired by nature
const colors = {
  skyBlue: "#68BBE3",
  forestGreen: "#55A630",
  sandyBeige: "#E9C46A",
  coral: "#F4A261",
  offWhite: "#F8F9FA",
  darkBlue: "#0077B6",
  charcoal: "#2B2D42",
  lightGrey: "#E5E5E5"
};

export default function TourBookApp() {
  const [activeScreen, setActiveScreen] = useState('homepage');
  
  const renderScreen = () => {
    switch(activeScreen) {
      case 'homepage':
        return <Homepage setActiveScreen={setActiveScreen} />;
      case 'discovery':
        return <DiscoveryScreen setActiveScreen={setActiveScreen} />;
      case 'planner':
        return <TripPlannerScreen setActiveScreen={setActiveScreen} />;
      case 'itinerary':
        return <ItineraryScreen setActiveScreen={setActiveScreen} />;
      case 'budget':
        return <BudgetScreen setActiveScreen={setActiveScreen} />;
      case 'packing':
        return <PackingScreen setActiveScreen={setActiveScreen} />;
      case 'cultural':
        return <CulturalCalendarScreen setActiveScreen={setActiveScreen} />;
      case 'mapping':
        return <MappingScreen setActiveScreen={setActiveScreen} />;
      case 'weather':
        return <WeatherScreen setActiveScreen={setActiveScreen} />;
      case 'posts':
        return <PostsScreen setActiveScreen={setActiveScreen} />;
      case 'ai-summary':
        return <AISummaryScreen setActiveScreen={setActiveScreen} />;
      default:
        return <Homepage setActiveScreen={setActiveScreen} />;
    }
  };

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-between items-center px-4 py-2 rounded-t-2xl border-t border-gray-100">
      <button className="flex flex-col items-center text-xs" onClick={() => setActiveScreen('homepage')}>
        <Home size={20} color={activeScreen === 'homepage' ? colors.forestGreen : colors.charcoal} />
        <span className={activeScreen === 'homepage' ? "text-green-600" : ""}>Home</span>
      </button>
      <button className="flex flex-col items-center text-xs" onClick={() => setActiveScreen('discovery')}>
        <Compass size={20} color={activeScreen === 'discovery' ? colors.forestGreen : colors.charcoal} />
        <span className={activeScreen === 'discovery' ? "text-green-600" : ""}>Explore</span>
      </button>
      <button className="flex flex-col items-center text-xs bg-green-500 text-white rounded-full p-3 -mt-6">
        <PlusCircle size={24} color="white" />
      </button>
      <button className="flex flex-col items-center text-xs" onClick={() => setActiveScreen('planner')}>
        <Calendar size={20} color={activeScreen === 'planner' ? colors.forestGreen : colors.charcoal} />
        <span className={activeScreen === 'planner' ? "text-green-600" : ""}>Plan</span>
      </button>
      <button className="flex flex-col items-center text-xs" onClick={() => setActiveScreen('posts')}>
        <User size={20} color={activeScreen === 'posts' ? colors.forestGreen : colors.charcoal} />
        <span className={activeScreen === 'posts' ? "text-green-600" : ""}>Profile</span>
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-16 relative">
      {renderScreen()}
      {activeScreen !== 'homepage' && <BottomNav />}
    </div>
  );
}

// 1. HOMEPAGE
function Homepage({ setActiveScreen }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-3/5 bg-gradient-to-b from-blue-400 to-blue-600 relative overflow-hidden rounded-b-3xl">
        <img src="/api/placeholder/400/320" alt="placeholder" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-md">TourBook</h1>
          <p className="text-center text-lg mb-8 drop-shadow-md">Your Smart Travel Companion</p>
          <button 
            onClick={() => setActiveScreen('discovery')}
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold shadow-lg flex items-center"
          >
            Get Started <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="px-6 -mt-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Sign in to TourBook</h2>
          <div className="space-y-4">
            <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center">
              <img src="/api/placeholder/20/20" alt="Google logo" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center">
              <img src="/api/placeholder/20/20" alt="Apple logo" className="w-5 h-5 mr-2" />
              Continue with Apple
            </button>
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
              Sign up with Email
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold mb-3">Why TourBook?</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-start">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <Map size={20} color={colors.forestGreen} />
            </div>
            <div>
              <h4 className="font-medium">Smart Planning</h4>
              <p className="text-xs text-gray-600">AI-powered trip organization</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <DollarSign size={20} color={colors.darkBlue} />
            </div>
            <div>
              <h4 className="font-medium">Budget Friendly</h4>
              <p className="text-xs text-gray-600">Track all your expenses</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-start">
            <div className="bg-yellow-100 p-2 rounded-lg mr-3">
              <Sun size={20} color={colors.sandyBeige} />
            </div>
            <div>
              <h4 className="font-medium">Weather Alerts</h4>
              <p className="text-xs text-gray-600">Real-time updates</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-start">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <Camera size={20} color={colors.coral} />
            </div>
            <div>
              <h4 className="font-medium">Trip Memories</h4>
              <p className="text-xs text-gray-600">Share with friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. DESTINATION SEARCH & DISCOVERY
function DiscoveryScreen({ setActiveScreen }) {
  const destinations = [
    {
      name: "Bali, Indonesia",
      type: "Island Paradise",
      rating: 4.9,
      image: "/api/placeholder/200/120",
      tags: ["Beach", "Culture"]
    },
    {
      name: "Kyoto, Japan",
      type: "Cultural Experience",
      rating: 4.8,
      image: "/api/placeholder/200/120",
      tags: ["Historical", "Cultural"]
    },
    {
      name: "Swiss Alps",
      type: "Mountain Adventure",
      rating: 4.7,
      image: "/api/placeholder/200/120",
      tags: ["Adventure", "Nature"]
    }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 pt-12 pb-6 px-4 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-4">Discover Places</h1>
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Where would you like to go?" 
            className="w-full py-3 px-12 rounded-full shadow-md text-gray-700"
          />
          <Search size={20} className="absolute left-4 top-3.5 text-gray-500" />
          <Filter size={20} className="absolute right-4 top-3.5 text-gray-500" />
        </div>
      </div>
      
      <div className="px-4 py-4">
        <div className="flex space-x-3 overflow-x-auto pb-3 hide-scrollbar">
          <button className="flex-shrink-0 bg-green-500 text-white px-4 py-2 rounded-full text-sm">All</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Adventure</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Cultural</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Nature</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Beach</button>
          <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">City</button>
        </div>
      </div>
      
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-1 gap-4">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              onClick={() => setActiveScreen('planner')}
            >
              <div className="relative h-48">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow">
                  <Heart size={18} color={colors.coral} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-lg">{dest.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm">{dest.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{dest.type}</p>
                <div className="flex space-x-2">
                  {dest.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Trending Experiences</h2>
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-4">
          <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32">
              <img src="/api/placeholder/150/100" alt="Experience" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium">Hot Air Balloon Ride</h3>
              <p className="text-gray-600 text-xs">Cappadocia, Turkey</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32">
              <img src="/api/placeholder/150/100" alt="Experience" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium">Northern Lights Tour</h3>
              <p className="text-gray-600 text-xs">Reykjavik, Iceland</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32">
              <img src="/api/placeholder/150/100" alt="Experience" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium">Desert Safari</h3>
              <p className="text-gray-600 text-xs">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. TRIP PLANNER INTERFACE
function TripPlannerScreen({ setActiveScreen }) {
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

// 4. OPTIMIZED ITINERARY SCREEN
function ItineraryScreen({ setActiveScreen }) {
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

// 5. BUDGET ESTIMATOR
function BudgetScreen({ setActiveScreen }) {
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

// 6. PACKING LIST SUGGESTIONS
function PackingScreen({ setActiveScreen }) {
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

// 7. CULTURAL CALENDAR
function CulturalCalendarScreen({ setActiveScreen }) {
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

// 8. INTERACTIVE MAPPING SCREEN
function MappingScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('itinerary')} className="mb-4 flex items-center text-white">
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
          <div className="bg-white rounded-xl shadow-sm p-3 flex items-center">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
              <span>1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Fushimi Inari Shrine</h3>
              <p className="text-xs text-gray-600">Day 1 • 9:00 AM</p>
            </div>
            <button className="p-2">
              <MapPin size={18} color={colors.coral} />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-3 flex items-center">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
              <span>2</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Nishiki Market</h3>
              <p className="text-xs text-gray-600">Day 1 • 12:00 PM</p>
            </div>
            <button className="p-2">
              <MapPin size={18} color={colors.coral} />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-3 flex items-center">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
              <span>3</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Kiyomizu-dera Temple</h3>
              <p className="text-xs text-gray-600">Day 1 • 3:00 PM</p>
            </div>
            <button className="p-2">
              <MapPin size={18} color={colors.coral} />
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <h2 className="font-semibold mb-3">Transit Options</h2>
          
          <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
            <button className="flex-shrink-0 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">Walking</button>
            <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Bus</button>
            <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Subway</button>
            <button className="flex-shrink-0 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Taxi</button>
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

// 9. WEATHER FORECAST & ALERTS
function WeatherScreen({ setActiveScreen }) {
  const forecast = [
    { day: 'May 15', icon: <Sun size={24} />, temp: '24°C', condition: 'Sunny' },
    { day: 'May 16', icon: <Cloud size={24} />, temp: '22°C', condition: 'Partly Cloudy' },
    { day: 'May 17', icon: <CloudRain size={24} />, temp: '19°C', condition: 'Light Rain' },
    { day: 'May 18', icon: <Sun size={24} />, temp: '23°C', condition: 'Sunny' },
    { day: 'May 19', icon: <Sun size={24} />, temp: '25°C', condition: 'Sunny' },
    { day: 'May 20', icon: <Cloud size={24} />, temp: '21°C', condition: 'Cloudy' },
    { day: 'May 21', icon: <CloudRain size={24} />, temp: '18°C', condition: 'Showers' }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('budget')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Weather Forecast</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 text-yellow-500">
              <Sun size={40} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">24°C</h2>
              <p className="text-gray-600">Sunny with clear skies</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <p className="text-gray-600 text-sm">Wind</p>
              <div className="flex items-center justify-center">
                <Wind size={14} className="mr-1" />
                <p>8 km/h</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Humidity</p>
              <p>65%</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">UV Index</p>
              <p>High</p>
            </div>
          </div>
        </div>
        
        <h2 className="font-semibold mb-3">7-Day Forecast</h2>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {forecast.map((day, index) => (
            <div key={index} className={`p-4 flex items-center justify-between ${index !== forecast.length - 1 ? 'border-b border-gray-100' : ''}`}>
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
        
        <div className="bg-white rounded-xl shadow-sm p-5 mt-6 mb-6">
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
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium mb-4"
        >
          Back to Itinerary
        </button>
      </div>
    </div>
  );
}

// 10. POSTS, MEMORIES & SHARING
// Completing the PostsScreen component
function PostsScreen({ setActiveScreen }) {
  const [view, setView] = useState('grid');
  
  const posts = [
    { 
      id: 1, 
      location: 'Fushimi Inari Shrine', 
      image: '/api/placeholder/200/200', 
      likes: 124, 
      date: 'May 15, 2025' 
    },
    { 
      id: 2, 
      location: 'Nishiki Market', 
      image: '/api/placeholder/200/200', 
      likes: 87, 
      date: 'May 15, 2025' 
    },
    { 
      id: 3, 
      location: 'Kiyomizu-dera Temple', 
      image: '/api/placeholder/200/200', 
      likes: 156, 
      date: 'May 15, 2025' 
    },
    { 
      id: 4, 
      location: 'Arashiyama Bamboo Grove', 
      image: '/api/placeholder/200/200', 
      likes: 201, 
      date: 'May 16, 2025' 
    }
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('itinerary')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Travel Memories</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Your Trip Photos</h2>
          <div className="flex space-x-2">
            <button 
              className={`p-2 rounded-md ${view === 'grid' ? 'bg-gray-200' : 'bg-white'}`}
              onClick={() => setView('grid')}
            >
              <Grid size={18} color={colors.charcoal} />
            </button>
            <button 
              className={`p-2 rounded-md ${view === 'list' ? 'bg-gray-200' : 'bg-white'}`}
              onClick={() => setView('list')}
            >
              <List size={18} color={colors.charcoal} />
            </button>
          </div>
        </div>
        
        {view === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={post.image} alt={post.location} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h3 className="font-medium text-sm">{post.location}</h3>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm p-3 flex">
                <img src={post.image} alt={post.location} className="w-20 h-20 rounded-lg object-cover" />
                <div className="ml-3 flex-1">
                  <h3 className="font-medium">{post.location}</h3>
                  <p className="text-xs text-gray-600 mb-2">{post.date}</p>
                  <div className="flex items-center text-gray-600">
                    <Heart size={14} className="mr-1" />
                    <span className="text-xs">{post.likes} likes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6">
          <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-medium mb-4 flex items-center justify-center">
            <Camera size={18} className="mr-2" />
            Add New Photo
          </button>
          
          <button 
            onClick={() => setActiveScreen('share')}
            className="w-full border border-purple-500 text-purple-500 py-3 rounded-xl font-medium mb-4"
          >
            Share Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

// 11. SHARE JOURNEY SCREEN
function ShareScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('posts')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Share Your Journey</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="mb-4">
            <h2 className="font-semibold mb-3">Create a Trip Report</h2>
            <p className="text-gray-600 text-sm">Share your experience and inspire others to visit Kyoto</p>
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
          <h2 className="font-semibold mb-4">Share on Social Media</h2>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button className="bg-blue-600 text-white p-3 rounded-lg flex flex-col items-center justify-center">
              <div className="bg-white p-1 rounded-full mb-1">
                <div className="h-6 w-6 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-xs">Facebook</span>
            </button>
            
            <button className="bg-pink-600 text-white p-3 rounded-lg flex flex-col items-center justify-center">
              <div className="bg-white p-1 rounded-full mb-1">
                <div className="h-6 w-6 rounded-full bg-pink-600"></div>
              </div>
              <span className="text-xs">Instagram</span>
            </button>
            
            <button className="bg-blue-400 text-white p-3 rounded-lg flex flex-col items-center justify-center">
              <div className="bg-white p-1 rounded-full mb-1">
                <div className="h-6 w-6 rounded-full bg-blue-400"></div>
              </div>
              <span className="text-xs">Twitter</span>
            </button>
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
        
        <button 
          onClick={() => setActiveScreen('feedback')}
          className="w-full border border-indigo-500 text-indigo-500 py-3 rounded-xl font-medium mb-4"
        >
          Give Feedback
        </button>
      </div>
    </div>
  );
}

// 12. FEEDBACK SCREEN
function FeedbackScreen({ setActiveScreen }) {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('share')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Trip Feedback</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <h2 className="font-semibold mb-4 text-center">How was your trip?</h2>
          
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map(star => (
              <button 
                key={star}
                onClick={() => setRating(star)}
                className="text-2xl"
              >
                <Star 
                  size={32} 
                  fill={rating >= star ? 'gold' : 'none'} 
                  color={rating >= star ? 'gold' : 'gray'} 
                />
              </button>
            ))}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">What did you enjoy most?</label>
            <select className="w-full border border-gray-200 rounded-lg p-3 bg-white">
              <option>Select an option</option>
              <option>Attractions & Sightseeing</option>
              <option>Food & Dining</option>
              <option>Cultural Experiences</option>
              <option>Accommodations</option>
              <option>Transportation</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Share more about your experience</label>
            <textarea 
              className="w-full border border-gray-200 rounded-lg p-3 min-h-[100px]"
              placeholder="Tell us what you loved and what could be improved..."
            ></textarea>
          </div>
          
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
            Submit Feedback
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-3">Rate Individual Places</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-lg mr-3"></div>
                <span>Fushimi Inari Shrine</span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star}
                    size={16} 
                    fill={star <= 4 ? 'gold' : 'none'} 
                    color={star <= 4 ? 'gold' : 'gray'} 
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-lg mr-3"></div>
                <span>Nishiki Market</span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star}
                    size={16} 
                    fill={star <= 5 ? 'gold' : 'none'} 
                    color={star <= 5 ? 'gold' : 'gray'} 
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-lg mr-3"></div>
                <span>Kiyomizu-dera Temple</span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star}
                    size={16} 
                    fill={star <= 4 ? 'gold' : 'none'} 
                    color={star <= 4 ? 'gold' : 'gray'} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setActiveScreen('home')}
          className="w-full bg-indigo-500 text-white py-3 rounded-xl font-medium"
        >
          Finish & Go to Home
        </button>
      </div>
    </div>
  );
}

// 13. EMERGENCY INFO SCREEN
function EmergencyScreen({ setActiveScreen }) {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-red-500 to-red-700 pt-12 pb-6 px-4 text-white">
        <button onClick={() => setActiveScreen('itinerary')} className="mb-4 flex items-center text-white">
          <ChevronRight size={20} className="rotate-180" /> Back
        </button>
        <h1 className="text-2xl font-bold mb-2">Emergency Info</h1>
        <p className="text-sm">Kyoto, Japan • May 15 - 22, 2025</p>
      </div>
      
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Emergency Contacts</h2>
            <AlertCircle size={20} color="red" />
          </div>
          
          <div className="space-y-4">
            <div className="border-l-2 border-red-500 pl-4">
              <h3 className="font-medium">Emergency Services</h3>
              <div className="flex items-center mt-1">
                <Phone size={16} className="mr-2 text-red-500" />
                <button className="text-red-500 font-medium">110</button>
              </div>
              <p className="text-xs text-gray-600 mt-1">Police</p>
            </div>
            
            <div className="border-l-2 border-red-500 pl-4">
              <h3 className="font-medium">Ambulance & Fire</h3>
              <div className="flex items-center mt-1">
                <Phone size={16} className="mr-2 text-red-500" />
                <button className="text-red-500 font-medium">119</button>
              </div>
              <p className="text-xs text-gray-600 mt-1">Medical emergencies</p>
            </div>
            
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-medium">Tourist Information</h3>
              <div className="flex items-center mt-1">
                <Phone size={16} className="mr-2 text-blue-500" />
                <button className="text-blue-500 font-medium">+81-75-752-0227</button>
              </div>
              <p className="text-xs text-gray-600 mt-1">Kyoto Tourist Information Center</p>
            </div>
            
            <div className="border-l-2 border-green-500 pl-4">
              <h3 className="font-medium">Embassy/Consulate</h3>
              <div className="flex items-center mt-1">
                <Phone size={16} className="mr-2 text-green-500" />
                <button className="text-green-500 font-medium">+81-3-3224-5000</button>
              </div>
              <p className="text-xs text-gray-600 mt-1">U.S. Embassy Tokyo (example)</p>
            </div>
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
            
            <div className="flex items-start">
              <div className="bg-red-100 p-1.5 rounded-md mr-2 mt-0.5">
                <Pill size={14} color="red" />
              </div>
              <div>
                <h3 className="font-medium">International Pharmacy</h3>
                <p className="text-xs text-gray-600">English-speaking staff available</p>
                <p className="text-xs text-blue-500 mt-1">View on Map</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded mt-4">
            <p className="text-sm"><span className="font-medium">Tip:</span> Take photos of your prescriptions and medical insurance card before traveling.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold mb-4">Natural Disaster Info</h2>
          
          <div className="flex items-start mb-4">
            <div className="bg-orange-100 p-1.5 rounded-md mr-2 mt-0.5">
              <AlertTriangle size={14} color="orange" />
            </div>
            <div>
              <h3 className="font-medium">Earthquake Safety</h3>
              <p className="text-xs text-gray-600">If indoors, take cover under a sturdy table. If outdoors, move to an open area.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 p-1.5 rounded-md mr-2 mt-0.5">
              <Droplet size={14} color={colors.darkBlue} />
            </div>
            <div>
              <h3 className="font-medium">Typhoon & Flooding</h3>
              <p className="text-xs text-gray-600">Follow evacuation orders and avoid low-lying areas.</p>
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