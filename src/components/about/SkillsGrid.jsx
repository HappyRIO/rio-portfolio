import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  const skills = [
    // 🖥️ Full Stack Web Development
    { skill: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { skill: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { skill: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { skill: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { skill: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { skill: "TailwindCSS", logo: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg" },
    { skill: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, // No official logo, fallback to Python
    { skill: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { skill: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { skill: "REST APIs", logo: "https://img.icons8.com/ios-filled/50/api-settings.png" },
    { skill: "WebSockets", logo: "https://img.icons8.com/ios/50/web.png" },

    // 🤖 AI & Machine Learning
    { skill: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { skill: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { skill: "PyTorch", logo: "https://pytorch.org/assets/images/pytorch-logo.png" },
    { skill: "Machine Learning", logo: "https://img.icons8.com/external-flat-juicy-fish/60/000000/external-artificial-intelligence-machine-learning-flat-flat-juicy-fish.png" },
    { skill: "Deep Learning", logo: "https://img.icons8.com/office/40/brain.png" },
    { skill: "Natural Language Processing (NLP)", logo: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-nlp-artificial-intelligence-flaticons-flat-flat-icons.png" },
    { skill: "Large Language Models (LLMs)", logo: "https://img.icons8.com/dusk/64/chatgpt.png" },
    { skill: "Reinforcement Learning", logo: "https://img.icons8.com/ios-filled/50/artificial-intelligence.png" },
    { skill: "LangChain", logo: "https://images.seeklogo.com/logo-png/61/1/langchain-icon-logo-png_seeklogo-611655.png" },
    { skill: "Vector Databases (e.g., Faiss, Pinecone)", logo: "https://images.seeklogo.com/logo-png/48/1/pinecone-icon-logo-png_seeklogo-482365.png" },
    { skill: "AI Chatbot Development", logo: "https://img.icons8.com/color/48/bot.png" },
    { skill: "AI Agent Development", logo: "https://img.icons8.com/color/48/bot.png" },

    // 📈 Crypto & Algorithmic Trading
    { skill: "Crypto Trading Bots", logo: "https://img.icons8.com/color/48/cryptocurrency.png" },
    { skill: "Copy Trading Systems", logo: "https://img.icons8.com/fluency/48/graph.png" },
    { skill: "Sniper Bots", logo: "https://img.icons8.com/ios-filled/50/target.png" },
    { skill: "Web3.js", logo: "data:image/png;base64,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" },
    { skill: "Solana", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalXJfIJf5zRcYDya9rocJiJiKohhf_-YEI9jnGsaAmUlu7KeuBCKG9iw&s" },
    { skill: "Smart Contract Interaction", logo: "https://img.icons8.com/color/48/contract.png" },

    // 🛠️ Tools & Platforms
    { skill: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { skill: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { skill: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
    { skill: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { skill: "OpenAI API", logo: "https://img.icons8.com/dusk/64/chatgpt.png" },
    { skill: "AssemblyAI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClhNND7o1XiTPfR_f6R4GE7_lnz8yua9J0FSe4J2AEGaZsaFxPiUxSnc&s" },
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((item, index) => (
          <SkillCard
            key={item.skill}
            skill={item.skill}
            logo={item.logo}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;
