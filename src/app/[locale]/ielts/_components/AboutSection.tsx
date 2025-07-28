import React from 'react';

interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface AboutSectionProps {
  name: string;
  values: AboutValue[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ name, values }) => {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{name}</h2>
      {values.map((item) => (
        <div key={item.id} className="mb-6">
          <div
            className="text-xl font-semibold mb-2"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <div
            className="text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutSection;