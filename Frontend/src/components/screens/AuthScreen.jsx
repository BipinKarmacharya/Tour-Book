export default function AuthScreen({ setActiveScreen }) {
  const { login } = useAuth();

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Welcome to TourBook</h2>
      <AuthForm onSuccess={() => setActiveScreen('home')} />
      <div className="mt-4 text-center">
        <button 
          onClick={() => setActiveScreen('home')}
          className="text-blue-600"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}