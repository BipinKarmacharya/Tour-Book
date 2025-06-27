// Sample suggested destinations


export default function DestinationCard({ destination, onPress }) {
  return (
    <div 
      className="w-36 flex-shrink-0 bg-white rounded-lg shadow-sm overflow-hidden"
      onClick={onPress}
    >
      <img src={destination.image} alt={destination.name} className="w-full h-24 object-cover" />
      <div className="p-2">
        <h4 className="font-medium text-sm">{destination.name}</h4>
        <p className="text-xs text-gray-500">Best in: {destination.season}</p>
      </div>
    </div>
  );
}