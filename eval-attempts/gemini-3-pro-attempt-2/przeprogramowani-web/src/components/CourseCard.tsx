import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CourseProps {
  title: string;
  description: string;
  link: string;
  color: string;
  features: string[];
}

export const CourseCard: React.FC<CourseProps> = ({ title, description, link, color, features }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${color} flex flex-col h-full`}
    >
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2 mb-6 text-sm text-gray-500">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className={`mr-2 ${color.replace('border-', 'text-')} font-bold`}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
        <a 
          href={link} 
          className={`group flex items-center font-semibold ${color.replace('border-', 'text-')} hover:opacity-80 transition-opacity`}
        >
          Zobacz szczegóły <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};
