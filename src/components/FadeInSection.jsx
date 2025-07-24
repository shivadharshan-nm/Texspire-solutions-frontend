import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-10% 0px -10% 0px", // triggers before fully enters/leaves
    amount: 0.2, // 20% visibility threshold
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
