import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import styles from "./Footer.module.css";
import React from "react";


function Footer() {
  return (
    <footer className="w-full box-border bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100 text-purple-700 pl-4 pr-8 font-sans border-t-2  [border-image: linear-gradient(to right, #b99ee8, #a2d5b7);] ">
      <div className="flex justify-between flex-wrap max-w-300 mx-auto gap-12">

        <div className="flex-[1_1_200px] mb-4 mt-4">
          <h2 className="text-2xl font-bold">BioComputaionalLab</h2>
          <p className="my-2 mx-0 leading-6 text-[rgb(38,31,31)] text-base">
            “BioComputationalLab is dedicated to advancing computational biology through innovative research, collaboration, and development of cutting-edge bioinformatics tools. We strive to bridge biology and computation to tackle complex biomedical challenges.”</p> 
          <div className="flex gap-3 mt-2">
            <a className="text-gray-800 text-base transition-colors duration-300 ease-in-out hover:text-purple-600" href="#"><FaFacebookF /></a>
            <a className="text-gray-800 text-base transition-colors duration-300 ease-in-out hover:text-purple-600" href="#"><FaTwitter /></a>
            <a className="text-gray-800 text-base transition-colors duration-300 ease-in-out hover:text-purple-600" href="#"><FaLinkedinIn /></a>
            <a className="text-gray-800 text-base transition-colors duration-300 ease-in-out hover:text-purple-600" href="#"><FaYoutube /></a> 
          </div>
        </div>

        <div className="flex-[1_1_200px] mb-4">
          <h3 className="text-base mb-2 text-green-600 font-semibold mt-4">Quick Links</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/">Home</a></li>
            <li className="mb-2"><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/research">Research</a></li>
            <li className="mb-2"><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/event">Event</a></li>
            <li className="mb-2"><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/project">Project</a></li>
            <li className="mb-2"><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="flex-[1_1_200px] mb-4">
          <h3 className="text-base mb-2 text-green-600 font-semibold mt-4">Resources</h3>
          <ul className="list-none p-0 m-0">
            <li><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/tools">Bioinformatics Tools</a></li>
            <li><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/datasets">Datasets</a></li>
            <li><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/workshops">Workshops</a></li>
            <li><a className="text-gray-700 no-underline transition-[color 0.3s ease] text-base hover:text-purple-600" href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center py-2 border-t-1 border-black text-sm text-gray-600 mt-4 ">
        <p>© {new Date().getFullYear()} BioComputationalLab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;