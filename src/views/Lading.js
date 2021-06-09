import React from "react";
import Navbar from "components/Navbar.js";
import hero from "../images/hero.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCarousel from "../components/CustomCarousel";
import ContactUs from "../components/ContactUs";

//to DO

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "90vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${hero})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-4xl">
                    Your project starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    With over 30 years of project management experience, our
                    consultants have the tools and knowledge to meet your
                    project goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
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
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-48 bg-gray-300 -mt-1 pt-12" id="about-us">
          <div className="flex flex-wrap items-center mt-0">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                About Us
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                We are a project management consulting firm with a track record
                of providing a large range of project management and controls
                services. Our staff comprises of experienced engineers,
                architects, and specialist inspectors. We have expertise in all
                aspects of project management, including Scheduling, Estimating
                and Cost Control.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Janust Solutions consultants have worked with top 10 ENR firms
                such as Bechtel, AECOM, Fluor Daniel, and Raytheon on a variety
                of projects. Janust Solutions has provided services to a broad
                range of public and private clients for education, commercial,
                historic preservation, industrial and transportation projects.
              </p>
            </div>
            <CustomCarousel></CustomCarousel>
          </div>
        </section>

        <section
          className="pb-16 relative block bg-gray-900 pt-4"
          id="services"
        >
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
            <h2 className="text-4xl font-semibold text-white">
              Services Offered
            </h2>
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
                      specifications of all the state DOTs and Transit agencies
                      in the North East.
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
                      We use a computerized database system to control and
                      monitor all documents generated during the course of each
                      project to provide accurate performance metrics.
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
                      We provide Estimating Services to Architects and Engineers
                      on the fast track within limited budgets, specializing in
                      design and construction projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-wrap">
                {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-500">
                        <i class="fas fa-chart-line"></i>
                      </div>
                      <h6 className="text-xl font-semibold">
                        Project Management
                      </h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Our people are the key to Janust’s success. Our Project
                        Managers work closely together with the owner, the
                        designer, and the contractor to ensure that a high
                        quality product is delivered on time and within budget.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                        <i class="fas fa-laptop"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Technology</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Our consultants have expertise in a variety of areas
                        from custom Application Development to Lightning
                        Component Development and Lightning Design System.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <ContactUs />
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
