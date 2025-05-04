import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, logo, index }) => (
  <motion.div
    key={skill}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="flex items-center gap-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm dark:text-gray-200"
  >
    {logo && (
      <img
        src={logo}
        alt={`${skill} logo`}
        className="w-6 h-6 object-contain"
      />
    )}
    <span>{skill}</span>
  </motion.div>
);

export default SkillCard;