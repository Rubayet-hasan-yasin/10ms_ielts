import React from 'react';
import axios from 'axios';

// Define types for the API response
interface CourseMedia {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface CourseChecklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  media: CourseMedia[];
  checklist: CourseChecklist[];
  // Add other fields as needed
}

interface ApiResponse {
  code: number;
  data: CourseData;
}

// This function fetches course data from the API
async function getCourseData(): Promise<ApiResponse> {
  try {
    const response = await axios.get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course');
    return response.data;
  } catch (error) {
    console.error('Error fetching course data:', error);
    throw new Error('Failed to fetch course data');
  }
}

// Next.js Server Component with data fetching
export default async function CourseDetailsPage({ params }: { params: { locale: string } }) {
  // Fetch data on the server
  const courseData = await getCourseData();
  
  // Extract relevant data
  const { title, description, media, checklist } = courseData.data;
  
  // Find thumbnail image
  const thumbnailImage = media.find(item => item.name === 'thumbnail')?.resource_value || '';
  
  // Extract course features from checklist
  const courseFeatures = checklist
    .filter(item => !item.list_page_visibility)
    .map(item => item.text);

  // Get videos from media
  const videos = media.filter(item => item.resource_type === 'video');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content Section */}
        <div className="w-full lg:w-2/3">
          {/* Course Content */}
          <div className="space-y-8">
            {/* Course Header */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Course Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {videos.slice(0, 6).map((video, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Video {index + 1}</h3>
                    {video.thumbnail_url && (
                      <img 
                        src={video.thumbnail_url} 
                        alt={`Video ${index + 1} thumbnail`} 
                        className="w-full h-auto rounded mb-2"
                      />
                    )}
                    <p className="text-gray-600">YouTube ID: {video.resource_value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Course Details</h2>
              <div className="space-y-4">
                {checklist
                  .filter(item => item.list_page_visibility)
                  .map((item, index) => (
                    <div key={index} className="flex items-center">
                      <img src={item.icon} alt="icon" className="w-6 h-6 mr-3" />
                      <p>{item.text}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sticky Section */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-8 transition-all duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-md p-6 max-h-[80vh] overflow-y-auto">
              {/* Course Card Content */}
              <div className="space-y-4">
                {thumbnailImage && (
                  <img 
                    src={thumbnailImage} 
                    alt={title} 
                    className="w-full h-auto rounded-lg mb-4"
                  />
                )}
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
                {/* Course Features */}
                <div className="space-y-2 pt-4">
                  <h3 className="font-semibold">This course includes:</h3>
                  <ul className="space-y-2">
                    {courseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}