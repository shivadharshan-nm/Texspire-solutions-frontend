import BenefitCard from "../components/BenefitCard";
import { motion } from "framer-motion";
import { PiHandPeaceDuotone, PiArrowSquareInDuotone, PiCursorDuotone, PiSpeedometerDuotone, PiPaletteDuotone, PiCheckSquareDuotone, PiLifebuoyDuotone, PiHeartStraightDuotone} from "react-icons/pi";

const benefits = [
  {
     icon: <PiHandPeaceDuotone />,
      title: "Affordability",
       desc: "Access high-quality design, development, and data science services at a fraction of traditional costs." 
    },

  { icon: <PiArrowSquareInDuotone />, 
    title: "Scalable Solutions",
     desc: "Whether you're a startup or an enterprise, we build flexible and scalable digital solutions that grow with your business." 
    },

  { icon: <PiCursorDuotone />,
     title: "Tailored Experiences",
      desc: "Every project is custom-built to align with your unique brand identity, business goals, and user needs." 
    },

  { icon: <PiSpeedometerDuotone />,
     title: "Fast Turnaround",
      desc: "Get professional results with efficient timelines without compromising on quality." 
    },

  { icon: <PiPaletteDuotone />,
     title: "Innovation–First Mindset",
      desc: "We stay ahead of trends, using the latest tools and technologies to deliver modern, future-ready solutions." 
    },

  { icon: <PiCheckSquareDuotone />,
     title: "Collaborative Process",
      desc: "We work closely with you at every stage to ensure transparency, alignment, and shared success."
     },

  { icon: <PiLifebuoyDuotone />,
     title: "Post-Launch Support",
      desc: "Our commitment doesn’t end at delivery. We offer continued maintenance, updates, and optimization support." 
    },

  { icon: <PiHeartStraightDuotone />,
     title: "User-Centric Approach",
      desc: "We prioritize user needs to create intuitive interfaces, seamless experiences, and data-driven decisions that truly resonate." 
    }
];

const Benefits = () => (
  <section id="benefits" className="bg-[#f7f7f8] min-h-screen py-24 px-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <motion.div
        className="mb-4 text-sm font-medium text-white bg-sky-700 px-4 py-1 rounded-full w-fit mx-auto"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Benefits
      </motion.div>

      <motion.h2
        className="text-2xl md:text-4xl font-bold text-neutral-900 mb-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Here are a few things we do that <br className="hidden md:block" />
        others really just don’t.
      </motion.h2>

      {/* 🔐 Lock the grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-6">
        {benefits.map((b, i) => (
          <BenefitCard key={i} {...b} index={i} delay={i * 0.07} />
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
