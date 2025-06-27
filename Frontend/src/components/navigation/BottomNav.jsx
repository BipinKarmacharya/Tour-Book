import { Home, Compass, PlusCircle, Calendar, User } from "lucide-react";

export default function BottomNav({ activeScreen, setActiveScreen }) {
  // Normalize screen names for comparison
  const currentScreen = activeScreen.toLowerCase();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-between items-center px-4 py-2 rounded-t-2xl border-t border-gray-100 z-50 h-16">
      <button
        className="flex flex-col items-center text-xs p-2"
        onClick={() => setActiveScreen("home")}
      >
        <Home
          size={20}
          className={currentScreen === "homepage" ? "text-green-600" : "text-gray-600"}
        />
        <span className={currentScreen === "homepage" ? "text-green-600" : "text-gray-600"}>
          Home
        </span>
      </button>

      <button
        className="flex flex-col items-center text-xs p-2"
        onClick={() => setActiveScreen("discovery")}
      >
        <Compass
          size={20}
          className={currentScreen === "discovery" ? "text-green-600" : "text-gray-600"}
        />
        <span className={currentScreen === "discovery" ? "text-green-600" : "text-gray-600"}>
          Explore
        </span>
      </button>

      <button
        className="flex flex-col items-center text-xs p-2 -mt-6"
        onClick={() => setActiveScreen("share")}
      >
        <div className="bg-green-500 text-white rounded-full p-2">
          <PlusCircle size={24} />
        </div>
      </button>

      <button
        className="flex flex-col items-center text-xs p-2"
        onClick={() => setActiveScreen("planner")}
      >
        <Calendar
          size={20}
          className={currentScreen === "planner" ? "text-green-600" : "text-gray-600"}
        />
        <span className={currentScreen === "planner" ? "text-green-600" : "text-gray-600"}>
          Plan
        </span>
      </button>

      <button
        className="flex flex-col items-center text-xs p-2"
        onClick={() => setActiveScreen("profile")}
      >
        <User
          size={20}
          className={currentScreen === "profile" ? "text-green-600" : "text-gray-600"}
        />
        <span className={currentScreen === "profile" ? "text-green-600" : "text-gray-600"}>
          Me
        </span>
      </button>
    </div>
  );
}