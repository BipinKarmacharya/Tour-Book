
export default function FeatureCard({ icon, title, description, bgColor }) {
  return (
    <div className={`${bgColor} p-4 rounded-xl shadow-sm flex items-start`}>
      <div className="p-2 rounded-lg mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}