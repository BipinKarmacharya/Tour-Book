function App() {
    const [activeScreen, setActiveScreen] = useState('home');
    const colors = {
      darkBlue: '#1E40AF',
      forestGreen: '#15803D',
      sandyBeige: '#B45309',
      coral: '#DC2626',
      charcoal: '#374151'
    };
  
    return (
      <div className="bg-gray-100 min-h-screen relative">
        {/* Main Content Area */}
        {activeScreen === 'home' && <HomeScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'itinerary' && <ItineraryScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'details' && <DetailsScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'budget' && <BudgetScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'packing' && <PackingScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'cultural' && <CulturalCalendarScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'mapping' && <MappingScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'weather' && <WeatherScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'posts' && <PostsScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'share' && <ShareScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'feedback' && <FeedbackScreen setActiveScreen={setActiveScreen} />}
        {activeScreen === 'emergency' && <EmergencyScreen setActiveScreen={setActiveScreen} />}
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-between items-center">
          <button 
            className={`flex flex-col items-center ${activeScreen === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveScreen('home')}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeScreen === 'itinerary' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveScreen('itinerary')}
          >
            <CalendarCheck size={20} />
            <span className="text-xs mt-1">Itinerary</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeScreen === 'mapping' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveScreen('mapping')}
          >
            <Map size={20} />
            <span className="text-xs mt-1">Map</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeScreen === 'posts' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveScreen('posts')}
          >
            <Camera size={20} />
            <span className="text-xs mt-1">Photos</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeScreen === 'emergency' ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setActiveScreen('emergency')}
          >
            <AlertCircle size={20} />
            <span className="text-xs mt-1">SOS</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default App;