import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="bg-white rounded-[2rem] shadow-sm border border-gray-200 mx-auto mt-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14"
      style={{
        maxWidth: "1152px",
        width: "100%",
        paddingTop: "40px",
        paddingBottom: "55px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ backgroundColor: "white" }}
        className="text-center"
      >
        {/* Badge */}
        <div className="mb-4 inline-flex items-center justify-center px-4 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
          <span className="mr-2">500+</span> Real-time Projects Completed
          <span className="ml-2 inline-flex -space-x-2 overflow-hidden">
            <img
              src="https://framerusercontent.com/images/Mb4prylaxDajURFOhVxEDmKPI.png?scale-down-to=512"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              alt="avatar1"
            />
            <img
              src="https://framerusercontent.com/images/9xw5hPNiCbd1wD50zh0sdg4ddc.jpg?scale-down-to=512"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              alt="avatar2"
            />
            <img
              src="https://framerusercontent.com/images/Pdvqn3uQo5NYDpUSNna1htYH4.png?scale-down-to=1024"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              alt="avatar3"
            />
          </span>
        </div>

        {/* Title */}
        <div
          className="mx-auto mb-6 font-bold text-[10vw] sm:text-[6vw] md:text-[60px]"
          style={{
            maxWidth: "688px",
            padding: "3px",
            fontWeight: "600",
            lineHeight: "1.2",
            background:
              "linear-gradient(1deg, rgb(58, 26, 186) 0%, rgb(255, 126, 56) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <span>Design with Vision,</span>
          <span>Analyze with Precision,</span>
          <span>Develop with Passion.</span>
        </div>

        {/* Subtext */}
        <p
          className="text-gray-600 mx-auto mb-10 text-base sm:text-lg"
          style={{
            maxWidth: "520px",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Empower your digital journey with Techspire Solutions — delivering
          cutting-edge UI, web development, AI products, and B2B services
          tailored for forward-thinking businesses.
          <br />
          <span className="font-semibold">
            Design the Future. Code with Purpose. Inspire Innovation.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="#services"
            className="px-6 py-3 bg-white border shadow rounded-lg text-sm font-medium hover:bg-gray-50"
          >
            Our Services
          </a>
          <a
            href="/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            Schedule a meet
          </a>
        </div>

        {/* Star Ratings Row */}
        <div className="mt-16 w-full flex justify-center">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl gap-8 sm:gap-0 px-4">
            {/* Left Rating */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="text-sm text-gray-500 mb-2">Startups Love Us</h4>
              <div className="flex items-center gap-1 text-yellow-500 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-xs text-gray-400 mt-1">4.7/5 from 60+ startups</p>
            </div>

            {/* Center Rating */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-sm text-gray-500 mb-2">
                Trusted by Our Clients
              </h4>
              <div className="flex items-center gap-1 text-yellow-500 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                4.8/5 average rating based on 120+ reviews
              </p>
            </div>

            {/* Right Rating */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              <h4 className="text-sm text-gray-500 mb-2">
                Enterprise Approved
              </h4>
              <div className="flex items-center gap-1 text-yellow-500 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                4.9/5 from enterprise teams
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
