import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  const skills = [
    // Full Stack Development
    "React",
    "Node.js",
    "TypeScript",
    "MySQL",
    "FastAPI",
    "Web3.js",
    "Solana",

    // AI & Machine Learning
    "Python",
    "TensorFlow",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "LLMs",
    "Reinforcement Learning",
    "AI Chatbots",
    "AI Agents",
    "LangChain",
    "Vector Databases",

    // Crypto & Trading
    "Crypto Trading Bots",
    "Copy Trading Bots",
    "Sniper Trading Bots",
    "Backtesting Strategies",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
    >
      <h3 className="text-2xl font-bold mb-6 dark:text-white">
        Skills & Technologies
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;
