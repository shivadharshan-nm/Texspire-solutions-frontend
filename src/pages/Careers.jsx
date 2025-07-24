import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import Navbar from "../components/Navbar";

const jobs = [
  {
    title: "Full-stack Developer",
    type: "Full-time",
    location: "Chennai",
    work: "Remote",
    desc: "We are looking for skilled full-stack developers to join our team and work on exciting projects.",
    more:(
  <>
    <p className="mb-3">
     We are looking for a skilled and versatile Full Stack Developer to join our dynamic team. In this role, you will be responsible for building scalable web applications from front-end interfaces to back-end logic. You’ll work on creating responsive user experiences and robust server-side solutions that ensure high performance and efficiency across platforms.
    </p>

    <h4 className="font-semibold mt-4 mb-2">Key Responsibilities:</h4>
    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
      <li>Design, develop, test, and deploy full-stack web applications using modern technologies.</li>
      <li>Collaborate with UI/UX designers to transform wireframes and mockups into interactive digital experiences.</li>
      <li>Build RESTful APIs and integrate front-end interfaces with back-end services and databases.</li>
      <li>Optimize applications for speed, scalability, and responsiveness across different devices and browsers.</li>
      <li>Troubleshoot, debug, and enhance existing code and applications.</li>
      <li>Work closely with DevOps or backend teams for deployment, CI/CD, and hosting environments.</li>
    </ul>

    <h4 className="font-semibold mt-4 mb-2">Required Skills & Experience:</h4>
    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
      <li>Minimum 6 months of experience in Full Stack Development or a related field (internship or project-based experience accepted).</li>
      <li>Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.</li>
      <li>Strong knowledge of back-end technologies such as Node.js, Express, Java, Python (Django/Flask), or PHP.</li>
      <li>Experience with databases (SQL – MySQL/PostgreSQL, or NoSQL – MongoDB).</li>
      <li>Familiarity with version control systems like Git and platforms like GitHub/GitLab.</li>
      <li>Understanding of RESTful API integration and basic authentication techniques (JWT, OAuth).</li>
      <li>Exposure to deployment platforms (e.g., Heroku, Netlify, Vercel) and basic DevOps concepts is a plus.</li>
    </ul>

    <h4 className="font-semibold mt-4 mb-2">Educational Qualification:</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
     <li>Bachelor’s degree in Computer Science, Information Technology, Engineering, or a related field.</li>
     <li>Certification in Full Stack Web Development (e.g., Udemy, Coursera, edX, Google) is a plus.</li>
    </ul>
  </>
),
  },
  
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Chennai",
    work: "Remote",
    desc: "A creative designer who can craft intuitive experiences across desktop and mobile using Figma and prototyping tools.",
    more: (
  <>
    <p className="mb-3">
      We are looking for a creative and detail-oriented UI/UX Designer to join our growing team. You will be responsible for turning ideas into intuitive, user-friendly, and visually appealing digital experiences across web and mobile platforms. From wireframes to final designs, your work will directly impact how users interact with our products.
    </p>

    <h4 className="font-semibold mt-4 mb-2">Key Responsibilities:</h4>
    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
      <li>Collaborate with cross-functional teams to understand product goals, user needs, and technical constraints.</li>
      <li>Conduct user research, competitor analysis, and usability testing to guide design decisions.</li>
      <li>Create wireframes, user flows, mockups, and interactive prototypes using tools like Figma, Adobe XD, or Sketch.</li>
      <li>Design intuitive and aesthetically pleasing user interfaces that enhance the user experience.</li>
      <li>Work closely with developers to ensure pixel-perfect implementation of designs.</li>
      <li>Iterate designs based on feedback from users, stakeholders, and team members.</li>
      <li>Maintain consistency of branding, visual language, and design systems across all platforms.</li>
    </ul>

    <h4 className="font-semibold mt-4 mb-2">Required Skills & Experience:</h4>
    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
      <li>Minimum 6 months of experience in UI/UX design or a related role.</li>
      <li>Strong portfolio showcasing UI/UX design skills for web and/or mobile applications.</li>
      <li>Proficiency in design tools such as Figma, Adobe XD, Sketch, or similar.</li>
      <li>Solid understanding of user-centered design principles and best practices.</li>
      <li>Basic knowledge of HTML/CSS is a plus.</li>
    </ul>

    <h4 className="font-semibold mt-4 mb-2">Educational Qualification:</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Bachelor's degree in Design, Computer Science, Engineering, or a related field.</li>
      <li>Certification in UI/UX Design (e.g., Google, Coursera, HCI) is a plus.</li>
    </ul>
  </>
),
  },

  {
    title: "Data Scientist",
    type: "Full-time",
    location: "Chennai",
    work: "Remote",
    desc: "A skilled problem-solver to analyze business data, build models, and uncover actionable insights using Python & ML.",
    more:(
  <>
    <p className="mb-3">
      We are seeking a passionate and analytical Data Scientist to join our growing team. In this role, you will leverage data to drive impactful decisions, build predictive models, and uncover insights that help shape the direction of our products and business strategies. You’ll work closely with cross-functional teams to transform data into actionable intelligence.
    </p>

    <h4 className="font-semibold mt-4 mb-2">Key Responsibilities:</h4>
    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
      <li>Collect, clean, and preprocess large datasets from various sources for analysis.</li>
      <li>Conduct exploratory data analysis (EDA) to identify trends, patterns, and anomalies.</li>
      <li>Build, validate, and deploy machine learning models and statistical algorithms.</li>
      <li>Visualize findings through dashboards and reports using tools like Power BI, Tableau, or Matplotlib.</li>
      <li>Collaborate with product managers, engineers, and stakeholders to define data needs and translate them into actionable solutions.</li>
      <li>Present analytical findings and insights to both technical and non-technical audiences.</li>
      <li>Monitor and improve model performance over time.</li>
      <li>Stay up to date with industry trends, new tools, and emerging techniques in data science.</li>
    </ul>

    <h4 className="font-semibold mt-4 mb-2">Required Skills & Experience:</h4>
    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
      <li>Minimum 6 months of hands-on experience in Data Science, Machine Learning, or a related field (internship or project-based experience acceptable).</li>
      <li>Strong knowledge of Python or R for data analysis and machine learning.</li>
      <li>Proficiency with data handling tools like Pandas, NumPy, and SQL.</li>
      <li>Experience with machine learning libraries such as Scikit-learn, TensorFlow, or PyTorch.</li>
      <li>Familiarity with data visualization tools like Power BI, Tableau, Seaborn, or Matplotlib.</li>
      <li>Understanding of statistical techniques, hypothesis testing, and A/B testing.</li>
      <li>Knowledge of version control tools (e.g., Git) is a plus.</li>
    </ul>

    <h4 className="font-semibold mt-4 mb-2">Educational Qualification:</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Bachelor’s degree in Computer Science, Information Technology, Artificial Intelligence & Data Science or a related field.</li>
      <li>Certification in Data Science or Machine Learning (e.g., Google, IBM, Coursera, Udemy) is a plus.</li>
    </ul>
  </>
),
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null); // for Know More modal
  const [applyJob, setApplyJob] = useState(null); // for Apply Now modal

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    resume: null,
  });

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send formData to backend here

    // Reset form
    setFormData({ name: "", email: "", contact: "", resume: null });
    setApplyJob(null);
  };

  return (
    
    <main className="bg-[#f7f7f8] min-h-screen px-6 lg:px-12 py-24 flex flex-col items-center">
      
      <motion.div
        className="w-full max-w-[1240px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        
        <div className="text-center mb-14">
          <span className="inline-block bg-sky-700 text-white text-sm font-medium px-4 py-1 rounded-full mb-3">
            Join our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Careers at Texspire Solutions
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            We’re always looking for talented, driven people to join our
            growing team. Check out our open roles and apply today.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{job.desc}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  {job.location}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  {job.work}
                </span>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setApplyJob(job)}
                  className="inline-block text-sm font-medium bg-sky-700 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="inline-block text-sm font-medium text-sky-700 border border-sky-700 px-6 py-2 rounded-lg transition hover:bg-sky-50"
                >
                  Know More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Know More Modal */}
     <AnimatePresence>
  {selectedJob && (
    <motion.div
      key="knowMore"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 backdrop-blur-sm bg-white/10 z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-6 rounded-xl w-full max-w-2xl mx-4 md:mx-0"
      >
        {/* Close "X" Button */}
        <button
          onClick={() => setSelectedJob(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
          aria-label="Close"
        >
          <TfiClose />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {selectedJob.title}
        </h2>

        <div className="text-gray-700 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
          {selectedJob.more}
        </div>

        {/* Button Section with spacing */}
        <div className="mt-3">
          <button
            onClick={() => setApplyJob(selectedJob)}
            className="bg-sky-700 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Apply Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Apply Now Modal */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            key="applyNow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm bg-white/10 z-50 flex items-center justify-center" >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl max-w-lg w-full" >

              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Apply for {applyJob.title}
              </h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="tel"
                  name="contact"
                  required
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded"
                />
                <div className="flex justify-end gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setApplyJob(null)}
                    className="text-gray-600 hover:text-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-sky-700 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
