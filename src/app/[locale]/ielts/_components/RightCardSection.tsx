import { MediaItem } from '@/interface/courseData';
import React from 'react';

interface RightCardSectionProps {
    media: MediaItem[];
}

const RightCardSection = ({ media } : RightCardSectionProps) => {
    return (
        <div className="lg:sticky lg:top-8 transition-all duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-md p-6 h-[80vh] overflow-y-auto">
                {/* Course Card Content */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Course Price</h2>
                    <div className="text-3xl font-bold">$99.99</div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Enroll Now
                    </button>
                    {/* Course Features */}
                    <div className="space-y-2 pt-4">
                        <h3 className="font-semibold">This course includes:</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2">✓</span>
                                10 hours of video
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✓</span>
                                Lifetime access
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✓</span>
                                Certificate of completion
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightCardSection;