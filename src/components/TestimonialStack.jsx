import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaLightbulb,
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    title: "Idea",
    icon: <FaLightbulb/>,
    bg: "bg-orange-100",
    rotate: "rotate-0",
    text: "We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.",
  },
  {
    title: "Research",
    icon: <FaSearch/>,
    bg: "bg-green-100",
    rotate: "-rotate-6",
    italic: true,
    text: "We will share a detailed questionnaire to analyze your business in-depth. After that, we will be able to create a tailor-made design to reach your business goals.",
  },
  {
    title: "Design",
    icon: <FaPencilRuler/>,
    bg: "bg-sky-100",
    rotate: "rotate-3",
    text: "We will design a mockup or prototype of your website and present it to you. Once with the initial mockup, we will start the revision process to perfect it.",
  },
  {
    title: "Development",
    icon: <FaCode />,
    bg: "bg-indigo-100",
    rotate: "rotate-0",
    text: "We develop websites using the best practices and standards. So you have a perfectly responsive, SEO-friendly, and highly conversion-oriented website.",
  },
  {
    title: "Launch",
    icon: <FaRocket/>,
    bg: "bg-pink-100",
    rotate: "-rotate-2",
    text: "When the project is completed, we will schedule a 2hr session to train your team on using, editing, and taking advantage of your new website.",
  },
  {
    title: "Support",
    icon: <FaHeadset/>,
    bg: "bg-rose-100",
    rotate: "rotate-1",
    text: "We keep a close relationship and communication with your team so we can help you with future design or development needs in the long term.",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="mb-10">
        <span className="mb-4 text-sm font-medium text-white bg-sky-700 px-4 py-1 rounded-full w-fit mx-auto">
          Navigating Success Together
        </span>
        <h2 className="text-3 font-semibold mt-6">We lead you through every step</h2>
        <p className="text-gray-600 mt-3 text-base max-w-xl mx-auto">
          From creative design to technical solutions, our services define industry excellence
        </p>
      </div>

      <div className="relative flex flex-col items-center" style={{ height: `${steps.length * 300}px` }}>
        {steps.map((step, idx) => {
          // Calculate scroll progress for each card
          const cardStart = idx * 0.15; // Each card starts at different scroll points
          const cardEnd = cardStart + 0.1; // Short animation duration
          
          const y = useTransform(
            scrollYProgress,
            [cardStart, cardEnd],
            [200, 0] // Card slides up from below
          );
          
          const opacity = useTransform(
            scrollYProgress,
            [cardStart, cardEnd],
            [0, 1]
          );

          const scale = useTransform(
            scrollYProgress,
            [cardStart, cardEnd],
            [0.9, 1]
          );

          return (
            <motion.div
              key={idx}
              style={{
                y,
                opacity,
                scale,
                position: "sticky",
                top: "50vh", // All cards stick at the same position (center of viewport)
                zIndex: idx + 1, // Higher index = higher z-index for proper stacking
                transform: `translateY(-50%)`, // Center the card vertically
              }}
              className={`w-[560px] h-[172px] p-8 text-base shadow-lg text-left ${step.bg} ${step.rotate}`}
            >
              <div className="font-semibold text-lg flex items-center gap-3">
                <span className="text-xl">{step.icon}</span>
                {step.title}
              </div>
              <p className={`mt-3 text-gray-700 leading-snug ${step.italic ? "italic" : ""}`}>
                {step.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
