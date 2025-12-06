import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import Map from "./Map";

const Footer = () => {
  return (
    <div className="mt-auto mb-0">
      <div className="dark:bg-sky-700  text-white flex flex-col md:flex-row pt-7 pb-5 mt-2">
        <div className="links w-1/4 pl-2 ">
          <h2 className="font-bold text-xl mt-2">Information Officer</h2>
          <p className="mb-2">No updated data</p>
        </div>
        <div className="links w-1/4 pl-2 ">
          <h2 className="font-bold text-xl mt-2">Related Links</h2>
          <p className="mb-2">Tribhuwan University (TU)</p>
          <p>University Grants Commission (UGC)</p>

        </div>
        <div className="links w-1/4 pl-2 ">
          <h2 className="font-bold text-xl mt-2">Contact Us</h2>
         <div className="flex">
           <p className="mt-1 pr-1">
            <HiOutlineMail /></p>
          <p className="mb-2">kcdurga691@gmail.com</p>
         </div>
          <div className="flex">
            <p className="mt-1 pr-1"><FaPhone /></p>
          <p>091-534793,091-5888780</p>
          </div>
        </div>
        <div className="links w-1/4 pl-2 ">
          <h2 className="font-bold text-xl mt-2">Find Us</h2>
          <div className="flex">
            <p className="mr-5 mb-5">
              <Map />
            </p>
          </div>
        </div>
      </div>
      <div className="footer dark:bg-gray-700 flex flex-column justify-between py-2 px-6 text-white text-sm">
        <p>Copyright &copy;2025, Test Multiple Campus, ALL RIGHTS RESERVED.</p>
        <p>
          Developed &amp; Managed By{" "}
          <a
            href="https://www.linkedin.com/in/durga-khanal/"
            className="text-red-600 hover:underline"
          >
            @DurgaKc
          </a>
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;
