import { useState, useEffect } from 'react';
import { ChevronRight, Heart, MessageCircle, Share2, Sparkles, TrendingUp, Users } from 'lucide-react';
import CurrentTripCard from '../../common/CurrentTripCard';
import DestinationCard from '../../common/DestinationCard';
import TipCard from '../../common/TipCard';

// Sample trip data for demonstration
const sampleTrips = [
  {
    id: '1',
    destination: 'Paris, France',
    startDate: '2025-05-20',
    endDate: '2025-05-27',
    coverImage: '/api/placeholder/400/200',
    todaysPlan: [
      { time: '09:00', activity: 'Breakfast at Café de Flore' },
      { time: '11:00', activity: 'Visit the Louvre Museum' },
      { time: '14:00', activity: 'Lunch at Le Comptoir' },
      { time: '16:00', activity: 'Seine River Cruise' }
    ]
  }
];

const suggestedDestinations = [
  { id: '1', name: 'Kyoto, Japan', image: '/api/placeholder/150/150', season: 'Spring' },
  { id: '2', name: 'Santorini, Greece', image: '/api/placeholder/150/150', season: 'Summer' },
  { id: '3', name: 'Barcelona, Spain', image: '/api/placeholder/150/150', season: 'Year-round' }
];

// Travel tip cards
const travelTips = [
  { id: '1', title: 'Pack light, travel far', content: 'Essential packing tips for minimalists' },
  { id: '2', title: 'Solo travel safety', content: 'Stay safe while exploring alone' }
];

// Sample community posts
const communityPosts = [
  {
    id: '1',
    user: {
      name: 'Elena Kim',
      profilePic: '/api/placeholder/40/40'
    },
    location: 'Bali, Indonesia',
    caption: 'Found this hidden waterfall after a 2-hour hike. Absolutely worth it!',
    image: '/api/placeholder/400/300',
    likes: 124,
    comments: 18,
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    user: {
      name: 'Marco Silva',
      profilePic: '/api/placeholder/40/40'
    },
    location: 'Cusco, Peru',
    caption: 'Sunrise at Machu Picchu. Get there early to avoid the crowds!',
    image: '/api/placeholder/400/300',
    likes: 267,
    comments: 31,
    timestamp: '1 day ago'
  }
];

const CommunityPostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  
  return (
    <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      <div className="p-3 flex items-center">
        <img 
          src={post.user.profilePic} 
          alt={post.user.name} 
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-2">
          <p className="font-medium text-sm">{post.user.name}</p>
          <p className="text-xs text-gray-500">{post.location}</p>
        </div>
      </div>
      
      <img 
        src={post.image} 
        alt="Travel photo" 
        className="w-full h-64 object-cover" 
      />
      
      <div className="p-3">
        <div className="flex space-x-4 mb-2">
          <button 
            onClick={handleLike}
            className={`flex items-center ${liked ? 'text-red-500' : 'text-gray-600'}`}
          >
            <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
            <span className="ml-1 text-xs">{likeCount}</span>
          </button>
          <button className="flex items-center text-gray-600">
            <MessageCircle size={18} />
            <span className="ml-1 text-xs">{post.comments}</span>
          </button>
          <button className="flex items-center text-gray-600">
            <Share2 size={18} />
          </button>
        </div>
        <p className="text-sm">{post.caption}</p>
        <p className="text-xs text-gray-500 mt-1">{post.timestamp}</p>
      </div>
    </div>
  );
};

export default function LoggedInView({ user, logout, setActiveScreen, renderBottomNav }) {
  const [activeTab, setActiveTab] = useState('forYou');
  const [showWelcome, setShowWelcome] = useState(true);
  
  // Show bottom nav when LoggedInView is displayed
  useEffect(() => {
    renderBottomNav(true);
  }, [renderBottomNav]);
  
  // Hide welcome message after 5 seconds
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);
  
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">TourBook</h1>
            <p className="text-blue-100">Smart Tourism Planner</p>
          </div>
          <div className="flex items-center">
            <img 
              src={user.profilePic} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer" 
              onClick={() => setActiveScreen('profile')} 
            />
            <button 
              onClick={logout} 
              className="ml-3 text-sm bg-blue-700 px-3 py-1 rounded-full" 
            >
              Logout
            </button>
          </div>
        </div>
        {showWelcome && (
          <div className="mt-4 transition-opacity duration-300">
            <h2 className="text-xl font-semibold">Welcome back, {user.name}!</h2>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <CurrentTripCard 
          trip={sampleTrips[0]} 
          onPress={() => setActiveScreen('itinerary')} 
        />
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Suggested Destinations</h3>
            <button 
              onClick={() => setActiveScreen('discovery')} 
              className="text-blue-600 text-sm font-medium flex items-center" 
            >
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {suggestedDestinations.map(destination => (
              <DestinationCard 
                key={destination.id} 
                destination={destination} 
                onPress={() => setActiveScreen('destinationDetail')} 
              />
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Travel Community</h3>
          <div className="flex border-b mb-4">
            <button 
              className={`flex-1 py-2 text-center text-sm font-medium ${activeTab === 'forYou' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('forYou')}
            >
              <div className="flex items-center justify-center">
                <Sparkles size={16} className="mr-1" />
                <span>For You</span>
              </div>
            </button>
            <button 
              className={`flex-1 py-2 text-center text-sm font-medium ${activeTab === 'trending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('trending')}
            >
              <div className="flex items-center justify-center">
                <TrendingUp size={16} className="mr-1" />
                <span>Trending</span>
              </div>
            </button>
            <button 
              className={`flex-1 py-2 text-center text-sm font-medium ${activeTab === 'following' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('following')}
            >
              <div className="flex items-center justify-center">
                <Users size={16} className="mr-1" />
                <span>Following</span>
              </div>
            </button>
          </div>
          
          {communityPosts.map(post => (
            <CommunityPostCard key={post.id} post={post} />
          ))}
          
          <button className="w-full py-3 text-blue-600 text-sm font-medium flex justify-center items-center">
            See More Posts <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Travel Tips</h3>
            <button className="text-blue-600 text-sm font-medium flex items-center">
              More <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {travelTips.map(tip => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom navigation is handled by parent component */}
    </div>
  );
}