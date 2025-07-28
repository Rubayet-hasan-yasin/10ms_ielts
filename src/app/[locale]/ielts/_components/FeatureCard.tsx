"use client"

import Image from 'next/image';
import React from 'react';

interface FeatureProps {
  feature: {
    icon: string;
    id: string;
    subtitle: string;
    title: string;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureProps> = ({ feature, index }) => {
  // Clean up the icon URL (remove extra spaces and quotes)
  const iconUrl = feature.icon.trim().replace(/["']/g, '');
  
  // Different gradient colors based on index
  const gradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-teal-400',
    'from-orange-500 to-yellow-400',
    'from-green-500 to-emerald-400'
  ];
  
  const gradient = gradients[index % gradients.length];

  return (
    <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02]">
      <div className={`bg-gradient-to-r ${gradient} p-1`}>
        <div className="bg-white rounded-lg p-6">
          <div className="flex flex-col items-center md:items-start md:flex-row">
            <div className="w-16 h-16 flex-shrink-0 mb-4 md:mb-0 flex items-center justify-center">
              <Image
              width={48}
              height={48} 
                src={iconUrl} 
                alt={feature.title} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;