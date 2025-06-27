import { createContext, useContext, useState, useEffect } from 'react';

const TripContext = createContext();

export function TripProvider({ children }) {
  const [currentTrip, setCurrentTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load trip from localStorage on initial render
  useEffect(() => {
    const loadTrip = async () => {
      try {
        const savedTrip = localStorage.getItem('currentTrip');
        if (savedTrip) {
          setCurrentTrip(JSON.parse(savedTrip));
        }
      } catch (err) {
        console.error("Failed to load trip:", err);
        setError("Failed to load your trip data");
      } finally {
        setIsLoading(false);
      }
    };

    loadTrip();
  }, []);

  // Save trip to localStorage whenever it changes
  useEffect(() => {
    if (currentTrip) {
      localStorage.setItem('currentTrip', JSON.stringify(currentTrip));
    }
  }, [currentTrip]);

  const createNewTrip = async (tripData) => {
    setIsLoading(true);
    try {
      // In a real app, you would call your API here
      // const response = await api.post('/trips', tripData);
      const newTrip = {
        ...tripData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setCurrentTrip(newTrip);
      return newTrip;
    } catch (err) {
      console.error("Failed to create trip:", err);
      setError("Failed to create new trip");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateTrip = async (updates) => {
    if (!currentTrip) return;
    
    setIsLoading(true);
    try {
      // In a real app, you would call your API here
      // const response = await api.put(`/trips/${currentTrip.id}`, updates);
      const updatedTrip = { 
        ...currentTrip, 
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      setCurrentTrip(updatedTrip);
      return updatedTrip;
    } catch (err) {
      console.error("Failed to update trip:", err);
      setError("Failed to update trip");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTrip = async () => {
    if (!currentTrip) return;
    
    setIsLoading(true);
    try {
      // In a real app, you would call your API here
      // await api.delete(`/trips/${currentTrip.id}`);
      localStorage.removeItem('currentTrip');
      setCurrentTrip(null);
    } catch (err) {
      console.error("Failed to delete trip:", err);
      setError("Failed to delete trip");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    currentTrip,
    isLoading,
    error,
    createNewTrip,
    updateTrip,
    deleteTrip,
    // Helper methods
    getTripDay: (date) => {
      if (!currentTrip) return null;
      return currentTrip.itinerary.find(day => day.date === date);
    },
    getActivity: (dayIndex, activityIndex) => {
      if (!currentTrip || !currentTrip.itinerary[dayIndex]) return null;
      return currentTrip.itinerary[dayIndex].activities[activityIndex];
    }
  };

  return (
    <TripContext.Provider value={value}>
      {children}
    </TripContext.Provider>
  );
}

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
};