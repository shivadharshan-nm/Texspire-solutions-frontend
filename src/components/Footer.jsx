import { FiCalendar, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f8] px-4 flex flex-col">
      {/* 🟦 CTA container (bigger & rounded) */}
      <div className="bg-white rounded-[2.25rem] max-w-7xl w-full mx-auto px-6 lg:px-12 py-24 text-center shadow-sm border border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-medium text-gray-700 mb-4 inline-block bg-gray-100 px-4 py-1 rounded-full">
            Your project, elevated instantly
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Ready when you are
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We already think it's a match. Go ahead and schedule our first
            date. We want to chat about your idea and learn your middle name.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/schedule" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium shadow transition"
            >
              <FiCalendar className="text-lg" />
              Schedule a meet
            </a>
            <a
              href="mailto:hr@texspiresolutions.com"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-500 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              <FiMail className="text-lg" />
              Send an email
            </a>
          </div>
        </motion.div>
      </div>

      <div className="bg-[#0f0f16] text-white mt-5 px-6 lg:px-12 py-6 rounded-[1.25rem] max-w-7xl w-full mx-auto text-sm flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-center sm:text-left">
          © 2025 Texspire Solutions Private Limited. All rights reserved.
        </span>
        <div className="flex gap-6 text-gray-300">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Linkedin
          </a>
          
          <a
            href="mailto:hr@texspiresolutions.com"
            className="hover:text-white transition"
          >
            hr@texspiresolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
