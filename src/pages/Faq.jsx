import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What services does Texspire offer?",
    answer:
      "We provide end-to-end solutions including UI/UX design, web and mobile development, and data science & analytics services tailored to meet your business needs.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across various industries such as e-commerce, healthcare, education, fintech, SaaS, logistics, and startups, delivering customized digital solutions.",
  },
  {
    question: "Can I hire Texspire for a one-time project?",
    answer:
      "Yes, we offer short-term project-based engagements as well as monthly subscription plans for ongoing support.",
  },
  {
    question: "Do you provide custom solutions?",
    answer:
      "Absolutely. Every project is unique—we tailor our design, development, and data strategies based on your specific goals and requirements.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity. A typical design and development project takes 2 to 8 weeks, while short-term tasks can be completed within a few days to a week.",
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="bg-[#f7f7f8] px-6 lg:px-12 py-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Still have questions?
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
          Find quick answers to commonly asked questions about Designor. Have a
          question not listed?
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-base font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span className="ml-4">
                  {openIndexes.includes(i) ? (
                    <FiChevronUp className="text-xl" />
                  ) : (
                    <FiChevronDown className="text-xl" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndexes.includes(i) && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
