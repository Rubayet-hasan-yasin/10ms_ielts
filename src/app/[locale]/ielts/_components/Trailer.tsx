"use client"

import { MediaItem } from "@/interface/courseData";
import Image from "next/image";
import React, { useState } from "react";



interface TrailerProps {
  media: MediaItem[];
}

const Trailer = ({ media }: TrailerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(
    media.find((item) => item.name === "preview_gallery")
  );

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleThumbnailClick = (item: MediaItem) => {
    setSelectedMedia(item);
    setIsPlaying(false);
  };

  const renderMainMedia = () => {
    if (!selectedMedia) return null;

    if (selectedMedia.resource_type === "video") {
      return (
        <div className="relative aspect-video w-full mb-4">
          {!isPlaying ? (
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={handlePlayVideo}
            >
              <Image
                src={selectedMedia.thumbnail_url || ""}
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${selectedMedia.resource_value}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      );
    }

    return (
      <div className="relative aspect-video w-full mb-4">
        <Image
          src={selectedMedia.resource_value || ""}
          alt="Preview image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    );
  };

  const scrollThumbnails = (direction: "left" | "right") => {
    const container = document.getElementById("thumbnail-container");
    if (container) {
      const scrollAmount = 200; // Adjust this value as needed
      const scrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const renderThumbnails = () => {
    return (
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={() => scrollThumbnails("left")}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Thumbnails Container */}
        <div
          id="thumbnail-container"
          className="flex space-x-2 py-1 overflow-x-auto scrollbar-hide px-8"
        >
          {media.map((item, index) => (
            <div
              key={index}
              className={`relative w-24 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden 
                ${selectedMedia === item ? "ring-2 ring-green-500" : ""}`}
              onClick={() => handleThumbnailClick(item)}
            >
              <Image
                src={item.thumbnail_url || item.resource_value}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              {item.resource_type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollThumbnails("right")}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="">
      {renderMainMedia()}
      {renderThumbnails()}
      {/* Course Card Content */}
      <div className="space-y-4">{/* ...existing code... */}</div>
    </div>
  );
};

export default Trailer;
