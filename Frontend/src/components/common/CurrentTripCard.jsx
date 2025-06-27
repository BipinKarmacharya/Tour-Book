import { ChevronRight } from "lucide-react";

export default function CurrentTripCard({ trip, onPress, setActiveScreen }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      onClick={onPress}
    >
      <img
        src={trip.coverImage}
        alt={trip.destination}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{trip.destination}</h3>
        <p className="text-gray-600 text-sm">
          {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
        </p>

        <div className="mt-3">
          <h4 className="font-medium text-sm">Today's Plan</h4>
          <div className="mt-2 space-y-2">
            {trip.todaysPlan.slice(0, 2).map((item, index) => (
              <div key={index} className="flex">
                <span className="text-sm font-medium w-12">{item.time}</span>
                <span className="text-sm text-gray-600">{item.activity}</span>
              </div>
            ))}
            {trip.todaysPlan.length > 2 && (
              <p className="text-sm text-blue-600 font-medium">
                +{trip.todaysPlan.length - 2} more activities
              </p>
            )}
          </div>
        </div>

        <button
          className="mt-3 w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium text-sm flex items-center justify-center"
        >
          View Full Trip <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
