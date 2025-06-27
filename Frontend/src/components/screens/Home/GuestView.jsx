import { useState } from "react";
import { Calendar, CloudSunRain, MapPin, TicketsPlane, Mail, Lock, User, Facebook, Github } from "lucide-react";
import FeatureCard from "../../common/FeatureCard";

export default function GuestView({ login, setActiveScreen }) {
  const [activePanel, setActivePanel] = useState("main"); // main, signin, signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Demo login logic
    login({
      name: "Demo User",
      email,
      profilePic: "/api/placeholder/50/50",
    });
    setActiveScreen("homepage");
  };

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Demo signup logic
    login({
      name,
      email,
      profilePic: "/api/placeholder/50/50",
    });
    setActiveScreen("homepage");
  };

  const handleSocialLogin = (provider) => {
    // In a real app, you would implement OAuth flow here
    console.log(`Logging in with ${provider}`);
    
    // Mock successful login for demo purposes
    login({
      name: `${provider} User`,
      email: "user@example.com",
      profilePic: "/api/placeholder/50/50",
    });
    setActiveScreen("homepage");
  };

  // Render different panels based on state
  const renderActionPanel = () => {
    if (activePanel === "signin") {
      return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Sign In to TourBook</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email address"
                />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Sign In
            </button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign in with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                  </g>
                </svg>
              </button>
              
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </button>
              
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <Github className="h-5 w-5 text-gray-800" />
              </button>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => setActivePanel("signup")}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign Up
                </button>
              </p>
            </div>
            
            <button
              onClick={() => setActivePanel("main")}
              className="w-full text-gray-600 py-2 rounded-lg font-medium"
            >
              Back
            </button>
          </div>
        </div>
      );
    } else if (activePanel === "signup") {
      return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Sign Up for TourBook</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full name"
                />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email address"
                />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>
            
            <button
              onClick={handleSignUp}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Create Account
            </button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                  </g>
                </svg>
              </button>
              
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </button>
              
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <Github className="h-5 w-5 text-gray-800" />
              </button>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setActivePanel("signin")}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign In
                </button>
              </p>
            </div>
            
            <button
              onClick={() => setActivePanel("main")}
              className="w-full text-gray-600 py-2 rounded-lg font-medium"
            >
              Back
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">
            Get Started with TourBook
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => setActivePanel("signin")}
              className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center font-medium hover:bg-gray-50"
            >
              Sign In
            </button>
            <button
              onClick={() => setActivePanel("signup")}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Sign Up
            </button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Quick access with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                  </g>
                </svg>
              </button>
              
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </button>
              
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              >
                <Github className="h-5 w-5 text-gray-800" />
              </button>
            </div>
            
            <button
              onClick={() => setActiveScreen("discovery")}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200"
            >
              Continue as Guest
            </button>
            
            {/* Demo button for easy testing */}
            {/* <button
              onClick={() => login({
                name: "Demo User",
                email: "demo@example.com",
                profilePic: "/api/placeholder/50/50",
              })}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
            >
              Demo Login (Simulate User)
            </button> */}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-3/5 bg-gradient-to-b from-blue-400 to-blue-600 relative overflow-hidden rounded-b-3xl">
        <img
          src="/api/placeholder/400/320"
          alt="Travel scenes"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-md">TourBook</h1>
          <p className="text-center text-lg mb-8 drop-shadow-md">
            Your Smart Travel Companion
          </p>
        </div>
      </div>

      <div className="px-6 -mt-8 z-10">
        {renderActionPanel()}
      </div>

      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold mb-3">Why TourBook?</h3>
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard
            icon={<MapPin size={20} className="text-green-600" />}
            title="Smart Planning"
            description="AI-powered trip organization"
            bgColor="bg-green-50"
          />

          <FeatureCard
            icon={<Calendar size={20} className="text-blue-600" />}
            title="Itinerary Builder"
            description="Visual timeline planning"
            bgColor="bg-blue-50"
          />
          <FeatureCard
            icon={<CloudSunRain size={20} className="text-yellow-600" />}
            title="Weather Alerts"
            description="Real-time updates"
            bgColor="bg-yellow-50"
          />
          <FeatureCard
            icon={<TicketsPlane size={20} className="text-orange-600" />}
            title="Trip Memories"
            description="Share with friends"
            bgColor="bg-red-50"
          />
        </div>
      </div>
    </div>
  );
}