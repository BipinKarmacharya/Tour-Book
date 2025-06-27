export default function TipCard({ tip }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-medium">{tip.title}</h4>
      <p className="text-sm text-gray-600">{tip.content}</p>
    </div>
  );
}