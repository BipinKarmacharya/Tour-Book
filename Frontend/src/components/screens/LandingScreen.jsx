export default function LandingScreen({ setActiveScreen }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-2/5 bg-gradient-to-b from-blue-400 to-blue-600 relative">
        {/* Hero content */}
        <button 
          onClick={() => setActiveScreen('auth')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 py-3 px-8 rounded-full font-semibold"
        >
          Get Started
        </button>
      </div>
      <FeatureHighlights />
    </div>
  );
}