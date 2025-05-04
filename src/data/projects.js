import helplarebuild from "../assets/images/helplarebuild-2.png";
import jobzmall from "../assets/images/jobzmall.jpg";
import pitchpulse from "../assets/images/pitchpulse.png";
import solana from "../assets/images/solana.jfif";

export const projectsData = [
  {
    "title": "PitchPulse AI Sales Assistant",
    "description": "PitchPulse is an AI-powered sales enablement platform designed to help high-ticket closers improve performance during and after sales calls. It offers real-time transcription, intelligent in-call coaching, and personalized pitch assistance through a Chrome extension and Zoom integration. After each meeting, PitchPulse automatically generates a detailed performance report, highlighting key moments, scoring core sales signals, and offering actionable improvement tips based on proven sales frameworks. This enables reps to continuously refine their approach and close more deals.",
    "tech": [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "AssemblyAI API",
      "OpenAI GPT-4",
      "Recall.ai",
      "Chrome Extension",
      "WebSocket"
    ],
    "image": pitchpulse,
    "featured": true,
    "features": [
      "Real-time transcription and speech analysis",
      "Live coaching based on custom sales frameworks",
      "Chrome Extension with in-call assistance overlay",
      "Zoom integration via Recall.ai for meeting capture",
      "Sales signal scoring and actionable insights",
      "Post-call reports with improvement recommendations"
    ],
    "demoLink": "https://pitchpulse.co/",
    "githubLink": ""
  },  
  {
    title: "AI-Powered Customer Support Chatbot with NLP & Web Scraping",
    description:
      "A cutting-edge AI chatbot leveraging OpenAI for natural language processing, a vector database for efficient retrieval, and FastAPI for seamless backend interactions. Built with Python and React, it integrates BeautifulSoup for web scraping and deploys on AWS for scalability and reliability.",
    tech: [
      "OpenAI API",
      "Vector Database",
      "FastAPI",
      "Python",
      "React",
      "BeautifulSoup",
      "AWS",
    ],
    image: helplarebuild,
    featured: true,
    features: [
      "Automated Web Scraping: Extracts website content for chatbot training.",
      "Advanced NLP with OpenAI: Delivers accurate and context-aware responses.",
      "FastAPI-Powered Backend: Ensures high-performance API interactions.",
      "Intuitive React Frontend: Provides a seamless user experience.",
      "Secure Data Storage with MySQL: Efficiently manages chatbot interactions and logs.",
      "Scalable AWS Deployment: Ensures reliability and performance under high demand.",
    ],
    demoLink: "https://www.helplarebuild.com/",
    githubLink: "https://github.com/HappyRIO/HelpLaRebuild-fe",
  },
  {
    title: "AI Chatbot for WordPress with NLP & Dynamic Interaction",
    description:
      "An AI-powered chatbot for WordPress websites, utilizing OpenAI for natural language processing and Langchain for enhanced conversational flow. Built with Python and FastAPI, it integrates a vector database for efficient data retrieval, MySQL for storage, and React for a responsive frontend.",
    tech: [
      "OpenAI API", "Langchain", "Vector Database",
      "FastAPI",
      "Python",
      "React",
      "MySQL",
    ],
    image: "https://cryptnox.com/bv-wp-content/uploads/2025/01/Crypto-wallets-made-user-friendly.png",
    featured: true,
    features: [
      "Advanced NLP with OpenAI: Delivers accurate and context-aware responses.",
      "Efficient Data Retrieval with Vector Database: Enhances chatbot performance.",
      "Dynamic Interaction with Langchain: Provides a seamless conversational experience.",
      "Responsive Frontend with React: Ensures a user-friendly interface.",
      "Secure Data Storage with MySQL: Efficiently manages chatbot interactions and logs.",
    ],
    demoLink: "",
    githubLink: "",
  },
  {
    title: "Solana Copy Trading Bot",
    description:
      "Solana copy trading bot using machine learning for price prediction and automated trading",
    tech: ["Solana API", "Telegram API", "Python", "MongoDB", "gRPC"],
    image: solana,
    featured: true,
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
    demoLink: "",
    githubLink: "",
  },
  {
    title: "Responsive Website Clone with React & MUI",
    description:
      "A fully responsive website clone built with React for dynamic UI, MUI for component libraries, and TailwindCSS for modern, utility-first styling.",
    tech: ["React", "MUI", "TailwindCSS"],
    image: jobzmall,
    featured: true,
    features: [
      "Fully responsive layout optimized for all screen sizes using TailwindCSS utility classes",
      "Dynamic and interactive UI components powered by React and Material UI (MUI)",
      "Clean, modular architecture enabling easy scalability and maintainability of the codebase"
    ],
    demoLink: "https://jobzmall-com.vercel.app/home",
    githubLink: "https://github.com/HappyRIO/jobzmall.com",
  },
  {
    title: "NWS Telegram Mini App",
    description:
      "A Telegram mini app for the Nodewaves token airdrop, built with Next.js and Node.js for fast performance, integrated with Telegram for user interaction, MySQL for data management, and deployed on AWS for scalability and reliability.",
    tech: ["Next", "Node.js", "Telegram", "MySQL", "AWS"],
    image: "https://nodewaves.com/blogs/uploads/post_image/24110350363857.webp",
    featured: true,
    features: [
      "Seamless Telegram integration enabling users to join the airdrop directly via chat interface",
      "Secure user verification and wallet submission with real-time validation",
      "Efficient backend built with Node.js and MySQL to handle user data and referral tracking at scale",
    ],
    demoLink: "https://t.me/nws_tTe_bot",
    githubLink: "https://github.com/HappyRIO/NWS-telegram-mini-app-fe",
  },
  {
    title: "TIGA Spin Mini App",
    description:
      "TIGA Spin is a simple, exciting game where players spin the reels to earn Kudos — your key to unlocking rewards. The more Kudos you collect, the bigger your percentage of the $1 million USD prize pool. More Kudos = More money!",
    tech: ["React", "Node.js", "Docker", "Redis", "PostgreSQL", "Telegram"],
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*gmhCq95DDfUmzEuA",
    featured: true,
    features: [
      "Interactive Telegram-based spin game with real-time feedback and animations",
      "Kudos reward system integrated with scalable backend using Redis and PostgreSQL",
      "Dockerized architecture for efficient deployment and seamless performance under load",
    ],
    demoLink: "https://t.me/TIGA_SPIN_BOT",
    githubLink: "https://github.com/HappyRIO/tiga_app",
  },
  {
    title: "Sport Betting Prediction Platform",
    description:
      "​Tipster Total is a leading sports prediction platform dedicated to connecting sports enthusiasts with the most talented and accurate analysts. Its mission is to provide users with precise forecasts and detailed analyses to make informed decisions and maximize their betting profits.​",
    tech: ["Next", "TailwindCSS", "Node.js", "MySQL", "OpenAI API"],
    image:
      "https://tipstertotal.com/soccer-player-keeping-ball-2022-03-04-01-46-42-utc-min.jpg",
    featured: true,
    features: [
      "Real-time sports predictions powered by expert analysis and AI",
      "Custom-built dashboard for tracking performance and bet history",
      "AI-enhanced match previews with probability estimates and betting tips",
      "Responsive design for seamless mobile and desktop access",
      "Secure user authentication and subscription system",
      "Admin panel for managing tipsters, matches, and analytics"
    ],  
    demoLink: "https://tipstertotal.com",
    githubLink: "",
  },
];
