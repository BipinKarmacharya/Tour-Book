import { useAuth } from "../../../context/AuthContext";
import GuestView from "./GuestView";
import LoggedInView from "./LoggedinView";
import { useEffect } from "react";

export default function Home({ setActiveScreen, renderBottomNav }) {
  const { isLoggedIn, user, login, logout } = useAuth();

  const handleDemoLogin = () => {
    login({
      name: "Alex",
      email: "alex@example.com",
      profilePic: "/api/placeholder/50/50",
    });
  };

  // This useEffect was causing the bottom nav to be hidden when Home mounts
  // We're keeping this code as is, since LoggedInView will now explicitly show the nav
  useEffect(() => {
    renderBottomNav(false); // hide bottom nav when Login mounts
    return () => renderBottomNav(true); // show it again when leaving Login
  }, [renderBottomNav]);
  
  return (
    <div className="flex flex-col h-screen bg-gray-50 pb-16">
      {isLoggedIn ? (
        <LoggedInView
          user={user}
          logout={logout}
          setActiveScreen={setActiveScreen}
          renderBottomNav={renderBottomNav} // Pass the renderBottomNav function to LoggedInView
        />
      ) : (
        <GuestView login={handleDemoLogin} setActiveScreen={setActiveScreen} />
      )}
    </div>
  );
}