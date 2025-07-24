import { useRef } from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, role, message, avatar }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="w-[360px] h-[212px] px-6 py-4 rounded-xl bg-white shadow-md flex-shrink-0 flex flex-col justify-between"
  >
    <p className="font-size: var(--text-base) text-gray-700 leading-relaxed">{message}</p>
    <div className="flex items-center gap-3 mt-4">
      <img src={avatar} alt={name} className="w-9 h-9 rounded-full bg-indigo-300" />
      <div>
        <p className="text-sm font-semibold text-neutral-800">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

const TickerRow = ({ items, reverse }) => {
  const ref = useRef(null);

  return (
    <div
      className="overflow-hidden w-full py-2"
      onMouseEnter={() => ref.current && (ref.current.style.animationPlayState = "paused")}
      onMouseLeave={() => ref.current && (ref.current.style.animationPlayState = "running")}
    >
      <div
        ref={ref}
        className={`flex gap-10 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{
          animationDuration: "30s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsTickerSection = () => {
  const testimonialsRow1 = [
    { name: "Swetha R",   role: "Founder",          message: "From concept to launch, Texspire made our platform come alive. Their understanding of user experience and front-end development is top-notch!",                avatar: "./src/assets/gupa_indian_IT_working_women_65f26ec5-cf87-43e1-bf1d-774b19c71891.png" },
    { name: "Deepika",    role: "Product Manager",  message: "We were on a tight deadline and Texspire delivered beyond expectations. Quick, affordable, and spot-on with their execution.",                                 avatar: "./src/assets/gupa_indian_IT_working_women_669d9d07-1eba-48a3-a9ee-396d098b020d.png" },
    { name: "Sneha S",    role: "Marketing Head",   message: "Texspire’s data team helped us turn raw data into real insights. Their dashboards transformed our decision-making process completely.",                        avatar: "./src/assets/gupa_indian_IT_working_women,_lively_looking_hr_f6610bac-67d7-45a6-b700-ba43262fdffb.png" },
    { name: "Raj Kumar",  role: "Freelancer",       message: "Texspire helped us rebrand with a modern and intuitive UI that our customers love. Their design team truly understands user behavior.",                        avatar: "./src/assets/ad_working_south_indian_men_in_an_IT_sector,_facing_camera_7735bd45-7a15-4933-a52c-4846b68df961.png" },
    { name: "Mohan N",    role: "Manager",          message: "Texspire delivered exactly what we needed—clean design, functional code, and on-time delivery. Their team was professional, responsive, and highly creative.", avatar: "./src/assets/ad_working_south_indian_men_in_an_IT_sector,_not_in_front_of_screen_2b04702c-4829-4db7-a3e2-ab7249e8c3fc.png" },
  ];

  const testimonialsRow2 = [
    { name: "Sekar R",   role: "Founder",           message: "They helped us build a high-performance web app from scratch. Thanks to Texspire, our user engagement and conversion rates have doubled.",    avatar: "./src/assets/48264c15-acd5-457d-9acc-7d0aab2ec3b1.jpeg" },
    { name: "Sruthi S",  role: "Managing Director", message: "What sets Texspire apart is their combination of technical strength and design aesthetics. Every deliverable was polished and precise.",      avatar: "./src/assets/ad_working_indian_women_in_an_IT_sector_CEO,HR_53bf29b8-e96f-4f83-871d-9a8742b2d778.png" },
    { name: "Sandy S",   role: "Co Founder",        message: "As a growing business, we needed cost-effective solutions with real impact. Texspire gave us exactly that—quality without compromise.",       avatar: "./src/assets/b2d9504d-1ed0-4d01-96d9-57df60eef990.jpeg" },
    { name: "Siddharth", role: "Marketing Head",    message: "Working with Texspire was one of our best vendor decisions. Their proactive approach and attention to detail made all the difference.",       avatar: "./src/assets/ad_working_south_indian_men_in_an_IT_sector,_facing_camera_0a38206d-0370-4de8-91de-c601bd94f6ba.png" },
    { name: "Meera",     role: "Freelancer",        message: "I approached Texspire for a one-month project, and they treated it with the same dedication as a long-term contract. Impressive work ethic!", avatar: "./src/assets/ad_working_indian_women_in_an_IT_sector_CEO,HR_70a5c84c-9f88-404b-a8b5-3daf03a84afe.png" },
  ];

  return (
    <section className="bg-[#f9f9fa] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <span className="text-xs font-medium bg-sky-700 text-white px-4 py-1 rounded-full mb-3 inline-block">
          Testimonials
        </span>
        <h2 className="text-3xl font-semibold text-neutral-900">Worldwide customers</h2>
        <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
          Designor empowers global teams with seamless integration and time-saving capabilities.
        </p>
      </div>

      <div className="space-y-6">
        <TickerRow items={testimonialsRow1} reverse={false} />
        <TickerRow items={testimonialsRow2} reverse={true} />
      </div>
    </section>
  );
};

export default TestimonialsTickerSection;
