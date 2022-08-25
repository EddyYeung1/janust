import ContactUs from "components/ContactUs";
import React from "react";

export default function ServicesOfferedSection() {
  return (
    <section className="pb-16 relative block bg-gray-900 pt-4" id="services">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 "
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="flex justify-center">
        <h2 className="text-4xl font-semibold text-white">Services Offered</h2>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i class="fas fa-calendar"></i>
                </div>
                <h6 className="text-xl font-semibold">CPM Scheduling</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Janust consultants have experience with the scheduling
                  specifications of all the state DOTs and Transit agencies in
                  the North East.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i class="fas fa-project-diagram"></i>
                </div>
                <h6 className="text-xl font-semibold">Document Control</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  We use a computerized database system to control and monitor
                  all documents generated during the course of each project to
                  provide accurate performance metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                  <i class="fas fa-file-invoice-dollar"></i>
                </div>
                <h6 className="text-xl font-semibold">Cost Estimating</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  We provide Estimating Services to Architects and Engineers on
                  the fast track within limited budgets, specializing in design
                  and construction projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </section>
  );
}
