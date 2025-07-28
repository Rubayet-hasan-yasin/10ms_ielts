"use client"

import Image from 'next/image';
import React from 'react';

interface EngagementCardProps {
  engagement: {
    background: {
      image: string;
      primary_color: string;
      secondary_color: string;
    };
    cta: {
      clicked_url: string;
      color: string;
      text: string;
    };
    description: string;
    description_color: string;
    id: string;
    thumbnail: string;
    title: string;
    title_color: string;
    top_left_icon_img: string;
  };
}

const EngagementCard: React.FC<EngagementCardProps> = ({ engagement }) => {
  // Clean up URLs (remove extra spaces and quotes)
  // const backgroundImage = engagement.background.image;
  const thumbnailImage = engagement.thumbnail;
  const iconImage = engagement.top_left_icon_img;
  const pdfUrl = engagement.cta.clicked_url;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02]">
      <div className="relative">
        {/* Background Image */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-slate-800">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/80 mix-blend-multiply"
              style={{
                backgroundImage: `url(${thumbnailImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Top Section with Icon and Title */}
            <div className="flex items-start">
              <Image
                height={100}
                width={100}
                src={iconImage}
                alt="Icon"
                className="w-12 h-12 object-contain mr-4"
              />
              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: engagement.title_color }}
                >
                  {engagement.title}
                </h3>
                <p
                  className="text-base"
                  style={{ color: engagement.description_color }}
                >
                  {engagement.description}
                </p>
              </div>
            </div>

            {/* Bottom Section with Thumbnail as Background and CTA */}
            <div className="flex items-end justify-between mt-4">

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {engagement.cta.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementCard;