import React from 'react';

interface Pointer {
  id: string;
  text: string;
  color?: string;
  icon?: string;
}

interface PointersSectionProps {
  name: string;
  values: Pointer[];
}

const PointersSection: React.FC<PointersSectionProps> = ({ name, values }) => {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <ul className="list-disc list-inside space-y-2">
        {values.map((pointer) => (
          <li key={pointer.id} className="flex items-center space-x-3">
            {/* Optional icon placeholder, can be replaced with actual icons if needed */}
            <span className="inline-block w-5 h-5 bg-white rounded-full flex-shrink-0"></span>
            <span>{pointer.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointersSection;