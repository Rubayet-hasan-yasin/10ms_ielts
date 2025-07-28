"use client"

import React from 'react';
import DOMPurify from 'dompurify';

interface CourseHeaderProps {
    title: string;
    description: string;
    className?: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title, description, className='' }) => {
    const htmlDescription = DOMPurify.sanitize(description);
    return (
        <div className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-6 shadow-md ${className }`}>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: htmlDescription }}
            />
        </div>
    );
};

export default CourseHeader;