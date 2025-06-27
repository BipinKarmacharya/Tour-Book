// components/screens/Posts.jsx
import { useState } from 'react';
import { ChevronRight, Camera, Heart, Grid, List } from 'lucide-react';
import { colors } from '../../constants/colors';

export default function ProfileScreen({ setActiveScreen }) {
  const [view, setView] = useState('grid');
  
  const posts = [
    { 
      id: 1, 
      location: 'Fushimi Inari Shrine', 
      image: '/api/placeholder/200/200', 
      likes: 124, 
      date: 'May 15, 2025' 
    },
    // ... more posts
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 pt-12 pb-6 px-4 text-white">
        <button 
          onClick={() => setActiveScreen('homepage')} 
          className="mb-4 flex items-center text-white"
        >
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
              onClick={() => setView('grid')}
              className={`p-2 rounded-md ${view === 'grid' ? 'bg-gray-200' : 'bg-white'}`}
            >
              <Grid size={18} color={colors.charcoal} />
            </button>
            <button 
              onClick={() => setView('list')}
              className={`p-2 rounded-md ${view === 'list' ? 'bg-gray-200' : 'bg-white'}`}
            >
              <List size={18} color={colors.charcoal} />
            </button>
          </div>
        </div>
        
        {view === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.location} 
                  className="w-full h-40 object-cover" 
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm">{post.location}</h3>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" fill={colors.coral} color={colors.coral} />
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
                <img 
                  src={post.image} 
                  alt={post.location} 
                  className="w-20 h-20 rounded-lg object-cover" 
                />
                <div className="ml-3 flex-1">
                  <h3 className="font-medium">{post.location}</h3>
                  <p className="text-xs text-gray-600 mb-2">{post.date}</p>
                  <div className="flex items-center text-gray-600">
                    <Heart size={14} className="mr-1" fill={colors.coral} color={colors.coral} />
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
            className="w-full border border-purple-500 text-purple-500 py-3 rounded-xl font-medium"
          >
            Share Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}