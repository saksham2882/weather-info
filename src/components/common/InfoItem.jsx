
const InfoItem = ({ icon, label, value, unit }) => (
  <div className="flex items-center space-x-3 text-sm">
    <div className="text-blue-50">{icon}</div>

    <span className="font-medium text-gray-100">{label}:</span>

    <span className="font-bold text-white">
      {value} {unit}
    </span>
  </div>
);

export default InfoItem;