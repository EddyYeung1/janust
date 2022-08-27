import React from "react";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="pb-2 bg-gray-300 -mt-1 pt-12" id="projects">
      <h1 className="text-center">Key Projects</h1>
      <div className="projects-container">
        <ul className="list-disc">
          <li>
            <strong>WMATA Yellow Line Tunnel and Bridge Rehabilitation</strong>
            <br />
            Keiwit Construction
          </li>
          <li>
            <strong>
              WMATA Fiber Optic Infrastructure & Metro Box Enclosure
              Installation
            </strong>
            <br />
            Clark Construction & Aldridge Electric
          </li>
          <li>
            <strong>
              Baltimore & Potomac (B&P) Tunnel Replacement Project
            </strong>
            <br />
            HNTB
          </li>
          <li>
            <strong>The Susquehanna River Rail Bridge Project</strong>
            <br />
            HNTB
          </li>
          <li>
            <strong>Amazon Warehouse</strong>
            <br />
            Allan Myers
          </li>
        </ul>
        <ul className="list-disc">
          <li>
            <strong>Boiler Replacement & Climate Control</strong>
            <br />
            SCA Project
          </li>
          <li>
            <strong>SUNY Plattsburgh Hood & Moffit Hall Improvements</strong>
            <br />
            Murnane Building Contractors
          </li>
          <li>
            <strong>MD75 Bridge Replacement oner I-70</strong>
            <br />
            Greenbridge Construction Inc.
          </li>
          <li>
            <strong>SR 72 Roadway Improvement (McCoy Rd - SR 71)</strong>
            <br />
            Greggo & Ferrara
          </li>
        </ul>
      </div>
      <hr></hr>
    </section>
  );
}
