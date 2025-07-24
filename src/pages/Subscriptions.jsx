import { AiTwotoneCloseCircle, AiTwotoneCheckCircle} from "react-icons/ai";
import { motion } from "framer-motion";

const plans = [
  {
    id: "normal",
    title: "Normal Plan",
    subtitle: "(1 Month)",
    price: "₹1.30L",
    term: "Per Project",
    tag: "Starting at",
    description:
      "Perfect for companies with short-term or one-off project needs. This plan offers affordable access to high-quality design, development, and data science services. Ideal for quick projects, rapid execution, or short-term support.",
    features: [
      { label: "Affordable Monthly Pricing", included: false },
      { label: "Fully Customizable Solutions", included: false },
      { label: "Dedicated Team Support", included: true },
      { label: "Flexible Workflows", included: true },
      { label: "Goal-Oriented Delivery", included: true },
    ],
    buttonLabel: "Subscribe Now",
  },
  {
    id: "premium",
    title: "Premium Plan",
    subtitle: "(6 Months)",
    price: "₹1L",
    term: "Per Project",
    tag: "Starting at",
    description:
      "Designed for companies seeking a long-term partnership, this plan offers affordability, consistent quality, and scalable solutions. Ideal for businesses with ongoing projects looking for reliable results and dedicated support.",
    features: [
      { label: "Affordable Monthly Pricing", included: true },
      { label: "Fully Customizable Solutions", included: true },
      { label: "Dedicated Team Support", included: true },
      { label: "Flexible Workflows", included: true },
      { label: "Goal-Oriented Delivery", included: true },
    ],
    buttonLabel: "Subscribe Now",
  },
];

export default function Subscription() {
  const handleSubscribe = (planId) => {
    alert(`Subscribing to: ${planId}`);
  };

  return (
    <main className="bg-[#f7f7f8] min-h-screen flex justify-center py-24 px-4">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium bg-sky-700 text-white px-4 py-1 rounded-full mb-3">
            All-in-one plan
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Subscription Options Made Simple
          </h2>
          <p className="text-gray-500 mt-2">
            Enjoy the full experience with no hidden fees or surprises!
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between max-w-[380px] w-full"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">{plan.subtitle}</p>

                <span className="inline-block text-xs bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-full mb-2">
                  {plan.tag}
                </span>

                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {plan.price}
                  <span className="text-base font-medium text-gray-600 ml-2">
                    {plan.term}
                  </span>
                </div>

                <p className="text-sm text-gray-500 text-justify leading-relaxed mb-4">
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      {feature.included 
                      ? ( <AiTwotoneCheckCircle className=" mt-1" /> ) 
                      : (<AiTwotoneCloseCircle className=" mt-1" /> )}

                      <span
                        className={
                          feature.included
                            ? "text-gray-800"
                            : "text-gray-800"
                        }
                      >

                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSubscribe(plan.id)}
                className="bg-sky-700 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-xl w-full transition-colors"
              >
                {plan.buttonLabel}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
