import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="px-4 py-20 md:px-12 bg-[#f7f7f8]">
    <div
      className="mx-auto bg-white rounded-3xl shadow-sm"
      style={{
        width: "100%",
        maxWidth: "1152px",
        height: "auto",
        padding: "63px 24px 50px",
        boxSizing: "border-box",
      }}
    >
      {/* Section badge */}
      <motion.div
        className="mb-6 text-sm font-medium text-white bg-sky-700 px-4 py-1 rounded-full w-fit mx-auto"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Who we are
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Crafting Unique
      </motion.h2>

      {/* Main paragraph */}
      <motion.p
        className="text-gray-800 leading-relaxed mx-auto mb-6"
        style={{
          fontSize: "18px",
          width: "100%",
          maxWidth: "640px",
          height: "auto", // Use auto for responsive height
          lineHeight: "1.75rem", // 28px
          textAlign: "justify",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        We are a dedicated team of creative and technical professionals committed
        to delivering outstanding <strong>Design, Development, and Data Science</strong> solutions. Driven by a passion for innovation and a keen eye for detail, we specialize in building experiences that align with our clients’ visions and business goals. Our collaborative approach ensures that every project we undertake is uniquely tailored—whether it's crafting a brand identity, designing user-centric interfaces, developing robust digital platforms, or unlocking insights through data-driven strategies.
      </motion.p>

      {/* Sub paragraph */}
      <motion.p
        className="text-gray-500 leading-relaxed mx-auto"
        style={{
          fontSize: "18px",
          width: "100%",
          maxWidth: "640px",
          height: "auto",
          lineHeight: "1.75rem", // 28px
          textAlign: "justify",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        From concept to launch, we work hand-in-hand with our clients to understand their needs and exceed expectations. With a strong foundation in innovation and a relentless commitment to quality, we create intelligent, scalable, and engaging solutions that empower businesses to thrive in the digital age.
      </motion.p>
    </div>
  </section>
);

export default About;
