
import React from 'react';
import CourseHeader from './CourseHeader';
import InstructorCard from './InstructorCard';
import FeatureCard from './FeatureCard';
import EngagementCard from './EngagementCard';
import PointersSection from './PointersSection';
import AboutSection from './AboutSection';

interface SectionValue {
    // Common fields
    id?: string;

    // Instructor values
    description?: string;
    has_instructor_page?: boolean;
    image?: string;
    name?: string;
    short_description?: string;
    slug?: string;

    // Feature values
    icon?: string;
    subtitle?: string;
    title?: string;

    // Engagement values
    background?: {
        image: string;
        primary_color: string;
        secondary_color: string;
    };
    cta?: {
        clicked_url: string;
        color: string;
        text: string;
    };
    description_color?: string;
    thumbnail?: string;
    title_color?: string;
    top_left_icon_img?: string;
}

interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: SectionValue[];
}

interface Pointer {
    id: string;
    text: string;
    color?: string;
    icon?: string;
}

interface AboutValue {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

interface LeftContentSectionProps {
    data: {
        title: string;
        description: string;
        sections: Section[];

    };
}

const LeftContentSection: React.FC<LeftContentSectionProps> = ({ data }) => {
    console.log(data);

    // Find the instructors section
    const instructorsSection = data.sections?.find(section => section.type === 'instructors');

    // Find the features section
    const featuresSection = data.sections?.find(section => section.type === 'features');

    // Find the engagement section
    const engagementSection = data.sections?.find(section => section.type === 'group_join_engagement');

    const pointersSection = data.sections?.find(section => section.type === 'pointers');

    const aboutSection = data.sections?.find(section => section.type === 'about');

    return (
        <div className="w-full lg:w-2/3">
            {/* Course Content */}
            <div className="space-y-8">
                {/* Course Header */}
                <CourseHeader title={data.title} description={data.description} className='hidden lg:block' />



                {/* Features Section */}
                {featuresSection && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">{featuresSection.name}</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {featuresSection.values.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    feature={{
                                        icon: feature.icon ?? '',
                                        id: feature.id ?? index.toString(),
                                        subtitle: feature.subtitle ?? '',
                                        title: feature.title ?? ''
                                    }}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Engagement Section */}
                {engagementSection && engagementSection.values.length > 0 && (
                    <div className="space-y-6">
                        {engagementSection.name && (
                            <h2 className="text-2xl font-bold text-gray-800">{engagementSection.name}</h2>
                        )}
                        <div className="grid grid-cols-1 gap-6">
                            {engagementSection.values.map((engagement, index) => (
                                <EngagementCard
                                    key={index}
                                    engagement={{
                                        background: engagement.background ?? { image: '', primary_color: '', secondary_color: '' },
                                        cta: engagement.cta ?? { clicked_url: '', color: '', text: '' },
                                        description: engagement.description ?? '',
                                        description_color: engagement.description_color ?? '',
                                        id: engagement.id ?? index.toString(),
                                        thumbnail: engagement.thumbnail ?? '',
                                        title: engagement.title ?? '',
                                        title_color: engagement.title_color ?? '',
                                        top_left_icon_img: engagement.top_left_icon_img ?? ''
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}



                {/* Pointers Section */}
                {pointersSection && (
                    <PointersSection name={pointersSection.name} values={pointersSection.values as Pointer[]} />
                )}

                {aboutSection && <AboutSection name={aboutSection.name} values={aboutSection.values as AboutValue[]} />}

                {/* Instructors Section */}
                {instructorsSection && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">{instructorsSection.name}</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {instructorsSection.values.map((instructor, index) => (
                                <InstructorCard
                                    key={index}
                                    instructor={{
                                        description: instructor.description ?? '',
                                        has_instructor_page: instructor.has_instructor_page ?? false,
                                        image: instructor.image ?? '',
                                        name: instructor.name ?? '',
                                        short_description: instructor.short_description ?? '',
                                        slug: instructor.slug ?? ''
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeftContentSection;