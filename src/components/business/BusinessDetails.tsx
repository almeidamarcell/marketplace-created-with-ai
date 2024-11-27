import React from 'react';

interface SectionProps {
  title: string;
  items: string[];
}

const Section = ({ title, items }: SectionProps) => (
  <div>
    <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">{title}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-gray-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function BusinessDetails() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Business Details</h2>
      
      <div className="space-y-8">
        {/* Competitors */}
        <Section 
          title="Competitors" 
          items={['EduNext', 'Racoon Gang', 'Instruqt', 'Cloudshare', 'Edly']} 
        />

        {/* Growth Opportunities */}
        <Section 
          title="Growth Opportunities" 
          items={[
            'Improve conversion rates',
            'Hire a sales team',
            'Expand to new markets',
            'Increase content marketing',
            'New product features'
          ]} 
        />

        {/* Key Assets */}
        <Section 
          title="Key Assets" 
          items={[
            'Customers',
            'Domain',
            'Brand',
            'Social media accounts',
            'Patents',
            'Codebase'
          ]} 
        />
      </div>
    </div>
  );
}