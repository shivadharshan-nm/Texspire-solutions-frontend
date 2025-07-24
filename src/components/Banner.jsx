import React from "react";

const stats = [
  { value: "100+", label: "Clients Worldwide" },
  { value: "300+", label: "Projects Delivered" },
  { value: "99%", label: "Customer Satisfaction" },
];

const Banner = () => {
  return (
    <section className="w-full bg-white py-10 md:py-12 px-4 rounded-[80px] mx-auto shadow-sm max-w-7xl my-8">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-center items-center text-center md:space-x-16">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl md:text-4xl font-semibold text-neutral-900">
              {item.value}
            </h3>
            <p className="text-[15px] md:text-base text-gray-500 font-medium mt-0.5">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
