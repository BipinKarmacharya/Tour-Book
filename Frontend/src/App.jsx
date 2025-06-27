import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import Homepage from "./components/screens/Home/Homepage";
import Discovery from "./components/screens/Discovery";
import Planner from "./components/screens/Planner";
import Itinerary from "./components/screens/Itinerary";
import Budget from "./components/screens/Budget";
import Packing from "./components/screens/Packing";
import Cultural from "./components/screens/Cultural";
import Mapping from "./components/screens/Mapping";
import Weather from "./components/screens/Weather";
import Profile from "./components/screens/Profile";
import Share from "./components/screens/Share";
import BottomNav from "./components/navigation/BottomNav";

const screens = {
  homepage: Homepage,
  discovery: Discovery,
  planner: Planner,
  itinerary: Itinerary,
  budget: Budget,
  packing: Packing,
  cultural: Cultural,
  mapping: Mapping,
  weather: Weather,
  profile: Profile,
  share: Share,
};

export default function TourBookApp() {
  const [activeScreen, setActiveScreen] = useState('homepage');
  const [showBottomNav, setShowBottomNav] = useState(true);
  const { isLoggedIn } = useAuth();

  const ScreenComponent = screens[activeScreen] || Homepage;

  return (
    <div className="bg-gray-50 min-h-screen pb-16 relative">
      <ScreenComponent
        setActiveScreen={setActiveScreen}
        renderBottomNav={setShowBottomNav} // This is passed to all screens including Home
      />
      {isLoggedIn && showBottomNav && (
        <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      )}
    </div>
  );
}