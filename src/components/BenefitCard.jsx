import { motion } from "framer-motion";

const BenefitCard = ({ icon, title, desc, index, delay }) => {
  const gridMap = {
    0: "lg:col-start-1 lg:row-start-1",
    1: "lg:col-start-2 lg:row-start-1",
    2: "lg:col-start-3 lg:row-start-1",
    3: "lg:col-span-2 lg:col-start-4 lg:row-start-1",
    4: "lg:col-span-2 lg:col-start-1 lg:row-start-2",
    5: "lg:col-start-3 lg:row-start-2",
    6: "lg:col-start-4 lg:row-start-2",
    7: "lg:col-start-5 lg:row-start-2",
  };

  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 min-h-[240px] flex flex-col justify-between ${gridMap[index]}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Top: Icon */}
      <div className="text-3xl ">{icon}</div>

      {/* Bottom: Title + Description */} 
      <div className="mt-6">
        <h3 className="text-md font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
