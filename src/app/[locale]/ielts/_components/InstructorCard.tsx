"use client"

import React from 'react';
import DOMPurify from 'dompurify';
import Image from 'next/image';

interface InstructorProps {
  instructor: {
    description: string;
    has_instructor_page: boolean;
    image: string;
    name: string;
    short_description: string;
    slug: string;
  };
}

const InstructorCard: React.FC<InstructorProps> = ({ instructor }) => {
  const sanitizedDescription = DOMPurify.sanitize(instructor.description);
  
  // Clean up the image URL (remove extra spaces and quotes)
  const imageUrl = instructor.image.trim().replace(/["']/g, '');

  return (
    <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02]">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 p-1">
        <div className="bg-white rounded-t-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-6">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mb-4 md:mb-0">
              <Image
              width={160}
              height={160} 
                src={imageUrl} 
                alt={instructor.name} 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">{instructor.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{instructor.short_description}</p>
              <div 
                className="prose prose-sm max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Colorful footer with gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <span className="font-medium">IELTS Expert</span>
          {instructor.has_instructor_page && (
            <button className="px-4 py-2 bg-white text-blue-600 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
              View Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;