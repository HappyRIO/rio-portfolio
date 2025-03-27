import React from "react";
import { motion } from "framer-motion";
// import Button from "../shared/Button";
import SkillsGrid from "./SkillsGrid";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-6 dark:text-white">About Me</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      I'm a Full Stack Developer specializing in AI with rich experience. My
      expertise spans building intelligent applications, developing machine
      learning models, and integrating AI solutions into enterprise-level
      systems.
    </p>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
      I'm passionate about pushing the boundaries of AI technology, focusing on
      NLP, computer vision, and AI-driven automation. Currently, I'm working on
      scalable AI solutions and optimizing deep learning models for real-world
      applications.
    </p>
    {/* <Button variant="primary">Download CV</Button> */}
  </motion.div>
);

export default About;
