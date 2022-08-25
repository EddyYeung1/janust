import CustomCarousel from "components/CustomCarousel";
import React from "react";

export default function AboutUsSection() {
  return (
    <section className="pb-48 bg-gray-300 -mt-1 pt-12" id="about-us">
      <div className="flex flex-wrap items-center mt-0">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            About Us
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            We are a project management consulting firm with a track record of
            providing a large range of project management and controls services.
            Our staff comprises of experienced engineers, architects, and
            specialist inspectors. We have expertise in all aspects of project
            management, including Scheduling, Estimating and Cost Control.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            Janust Solutions consultants have worked with top 10 ENR firms such
            as Bechtel, AECOM, Fluor Daniel, and Raytheon on a variety of
            projects. Janust Solutions has provided services to a broad range of
            public and private clients for education, commercial, historic
            preservation, industrial and transportation projects.
          </p>
        </div>
        <CustomCarousel />
      </div>
    </section>
  );
}
