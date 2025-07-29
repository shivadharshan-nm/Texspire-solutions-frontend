import React from 'react';

const singleImage = '/assets/ChatGPT Image Jul 21, 2025, 12_38_39 PM (1).png';

const OtherServices = () => {
  return (
    <section
      className="bg-[#f7f7f8] py-8 px-4 sm:px-6 lg:px-8 flex justify-center"
      aria-labelledby="other-services-heading"
    >
      <div
        className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-10 p-6 sm:p-8 w-full max-w-[1152px] lg:h-[484px]"
      >
        {/* Static Image Card on the Left */}
        <div className="flex-shrink-0 w-full sm:w-[320px] h-[300px] sm:h-[420px]">
          <img
            src={singleImage}
            alt="B2B Solutions"
            className="rounded-lg shadow-md w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content on the Right */}
        <div className="flex-1 w-full">
          <h2
            id="other-services-heading"
            className="text-2xl md:text-4xl font-bold text-neutral-900 mb-8 text-center lg:text-center"
          >
            Scalable B2B Solutions for Modern Enterprises
          </h2>
          <p className="text-gray-600 mb-6">
            Empower your business with our flexible B2B integration and automation
            services. Whether you need custom APIs, streamlined processes, or
            seamless system connections — we provide it all.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Custom enterprise system integrations</li>
            <li>Secure API & data exchange</li>
            <li>Workflow automation & scalability</li>
            <li>End-to-end technical support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
