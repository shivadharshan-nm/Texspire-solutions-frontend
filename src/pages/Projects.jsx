import { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const projects = [
  '/assets/image.png',
  '/assets/image (1).png',
  '/assets/image (2).png',
];

const Projects = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate images to create seamless effect
  const doubledProjects = [...projects, ...projects];

  // Auto scrolling
  useAnimationFrame(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track || isHovered) return;

    container.scrollLeft += 0.6;

    // When first set fully scrolled, reset seamlessly
    if (container.scrollLeft >= track.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  });

  return (
    <section
      id="projects"
      className="bg-[#f7f7f8] dark:bg-black py-20 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="mb-6 text-sm font-medium text-white bg-sky-700 px-4 py-1 rounded-full w-fit mx-auto">
          Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
          Showcasing our most remarkable creations
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2 max-w-xl mx-auto">
          A showcase of projects that embody creativity, innovation, and precision.
        </p>
      </div>

      <div className="mt-12 px-4">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap overflow-x-hidden scroll-smooth no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={trackRef} className="flex gap-6">
            {doubledProjects.map((src, i) => (
              <motion.div
                key={i}
                className="w-[320px] h-[420px] shrink-0 bg-gray-900 rounded-xl overflow-hidden shadow-xl relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <img
                  src={src}
                  alt={`Project preview ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
