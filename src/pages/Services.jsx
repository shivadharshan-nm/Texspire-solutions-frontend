import { motion } from "framer-motion";
import { PiCheckCircleDuotone } from "react-icons/pi";

const services = [
  {
    title: "Design",
    items: ["Website Design", "Mobile App Design", "Graphic Design", "Logo Design"],
  },
  {
    title: "Development",
    items: ["Front End Development", "Back End Development", "API Integration", "Web Development"],
  },
  {
    title: "Data Science",
    items: ["Data Visualization", "Data Analytics", "Computer Vision", "Advanced Analytics & Insights"],
  },
];

const Services = () => (
  <section id="services" className="bg-[#f7f7f8] py-8 px-4">
    <div className="max-w-6xl mx-auto">
      {/* Badge */}
      <motion.div
        className="mb-4 text-sm font-medium text-white bg-sky-700 px-4 py-1 rounded-full w-fit mx-auto"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-neutral-900 mb-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Tailored solutions crafted to elevate your vision.
      </motion.h2>

      {/* Service Cards */}
      <div className="flex flex-wrap gap-6 justify-start">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white group rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 transition-all duration-300 hover:bg-sky-700 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] max-w-[400px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-white mb-4 text-left">
              {service.title}
            </h3>
            <ul className="space-y-3 text-left">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-800 group-hover:text-white text-sm"
                >
                  <span className="w-5 h-5 flex items-center justify-center group-hover:border-white">
                    <PiCheckCircleDuotone className="w-5 h-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
