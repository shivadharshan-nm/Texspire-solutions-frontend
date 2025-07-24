import React from 'react';

const singleImage = '/images/ai1.jpg';

const AiProducts = () => {
  return (
    <section
      className="bg-[#f7f7f8] py-8 px-4 sm:px-6 lg:px-8 flex justify-center"
      aria-labelledby="ai-products-heading"
    >
      <div className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row-reverse items-center gap-10 p-6 sm:p-8 w-full max-w-[1152px] lg:h-[484px]">
        {/* Static Image on the Right */}
        <div className="flex-shrink-0 w-full sm:w-[320px] h-[300px] sm:h-[420px]">
          <img
            src={singleImage}
            alt="AI Product"
            className="rounded-lg shadow-md w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content on the Left */}
        <div className="flex-1 w-full">
          <h2
            id="ai-products-heading"
            className="text-2xl md:text-4xl font-bold text-neutral-900 mb-8 text-center lg:text-center"
          >
            AI-Powered Products for Smarter Business
          </h2>
          <p className="text-gray-600 mb-6">
            Transform your operations with our cutting-edge AI solutions. From predictive analytics to intelligent automation, our AI products help businesses unlock new efficiencies and insights.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>AI chatbots & virtual assistants</li>
            <li>Predictive analytics platforms</li>
            <li>Machine learning model deployment</li>
            <li>Natural language processing solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiProducts;
