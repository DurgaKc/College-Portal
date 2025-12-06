import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { href: "/program", label: "Programs" },
    { href: "/report", label: "Reports" },
    { href: "/news", label: "News and Events" },
    { href: "/downloads", label: "Downloads" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const aboutRef = useRef(null);
  const aboutBtnRef = useRef(null);
  const contentsRef = useRef(null);
  const contentsBtnRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (openDropdown === "about" &&
          aboutRef.current &&
          !aboutRef.current.contains(event.target) &&
          !aboutBtnRef.current.contains(event.target)) ||
        (openDropdown === "contents" &&
          contentsRef.current &&
          !contentsRef.current.contains(event.target) &&
          !contentsBtnRef.current.contains(event.target))
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <div className=" navbar">
      {/* Header Part */}
      <div className="nav flex flex-col md:flex-row items-center text-center w-full pt-3 pb-1">
        <div className="logo w-40 ml-18">
          <img src="/TUlogo.png" className="h-32" alt="TU Logo" />
        </div>
        <div className="campus-address mx-auto dark:text-sky-700 text-center">
          <p className="lg:text-xs">
            त्रिभुवन विश्वविद्यालयबाट सम्बन्धन प्राप्त
          </p>
          <p className="lg:text-xs">Affiliated to Tribhuwan University</p>
          <h2 className="font-bold text-lg">.... बहुमुखी क्याम्पस</h2>
          <h2 className="font-bold text-lg">Test Multiple Campus</h2>
          <p className="lg:text-xs">नेपालगञ्ज, बाँके</p>
          <p className="lg:text-xs">Nepalgunj, Banke</p>
        </div>
        <div className="flag h-24 mr-18 hidden md:block">
          <img src="/nepal.gif" className="h-28" alt="Nepal Flag" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="text-sm md:block lg:text nav-links dark:bg-sky-700 text-white">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-5 py-2"
        >
          {isMenuOpen ? (
            <RxCross1 className="size-6" />
          ) : (
            <AiOutlineMenu className="size-6" />
          )}
        </button>
        <ul className="py-2.5 hidden md:flex items-center ">
          {/* mobile menu */}

          <li>
            <Link
              to="/"
              className="mr-8 hover:text-orange-500 ml-20 cursor-pointer"
            >
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative ">
            <button
              type="button"
              className="inline-flex items-center hover:text-orange-500 snap-center"
              onClick={() =>
                setOpenDropdown(openDropdown === "about" ? null : "about")
              }
              ref={aboutBtnRef}
            >
              About Us <RiArrowDropDownLine className="text-2xl mr-8" />
            </button>
            {openDropdown === "about" && (
              <div
                className="absolute z-10 mt-2 w-48 dark:bg-sky-700 font-normal text-white"
                ref={aboutRef}
              >
                <Link
                  to="/intro"
                  className="block pl-4 pb-0.5 text-base hover:text-orange-500 "
                >
                  Introduction
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-0.5 text-base hover:text-orange-500 "
                >
                  Our Team
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-0.5 text-base hover:text-orange-500 "
                >
                  FAQ
                </Link>
              </div>
            )}
          </li>

          {/* Contents Dropdown */}
          <li className="relative">
            <button
              type="button"
              className="inline-flex items-center hover:text-orange-500 "
              onClick={() =>
                setOpenDropdown(openDropdown === "contents" ? null : "contents")
              }
              ref={contentsBtnRef}
            >
              Contents <RiArrowDropDownLine className="text-2xl mr-8 " />
            </button>
            {openDropdown === "contents" && (
              <div
                className="absolute z-10 mt-2 w-48 dark:bg-sky-700 font-normal text-white"
                to={contentsRef}
              >
                <Link
                  to="/publication"
                  className="block pl-4 pb-0.5 text-base hover:text-orange-500"
                >
                  Publication
                </Link>

                <Link
                  to="/notice"
                  className="block px-4 py-0.5 text-base hover:text-orange-500"
                >
                  Notices
                </Link>
              </div>
            )}
          </li>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className=" mr-8 hover:text-orange-500">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center hover:text-black cursor-pointer">
            <IoPerson className="mt-1 mr-1" />
            <Link to="/login" className="mr-8">
              Login
            </Link>
          </li>
        </ul>
        {/* ***************************************
        for responsive
         *******************************************/}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-sky-700 dark:text-white w-full px-5 py-2">
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="hover:text-orange-500 cursor-pointer ">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "about" ? null : "about")
                  }
                  className="flex items-center justify-between w-full hover:text-orange-500 "
                >
                  About Us <RiArrowDropDownLine className="text-2xl mr-96 " />
                </button>
                {openDropdown === "about" && (
                  <div className="pl-4">
                    <Link to="/intro" className="block text-sm py-1">
                      Introduction
                    </Link>
                    <Link to="/team" className="block text-sm py-1">
                      Our Team
                    </Link>
                    <Link to="/faq" className="block text-sm py-1">
                      FAQ
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "contents" ? null : "contents"
                    )
                  }
                  className="flex items-center justify-between w-full hover:text-orange-500"
                >
                  Contents <RiArrowDropDownLine className="text-2xl mr-96 " />
                </button>
                {openDropdown === "contents" && (
                  <div className="pl-4">
                    <Link to="/publication" className="block text-sm py-1">
                      Publication
                    </Link>

                    <Link to="/notice" className="block text-sm py-1">
                      Notices
                    </Link>
                  </div>
                )}
              </li>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-orange-500">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-1 rounded-3xl hover:text- cursor-pointer">
                <IoPerson /> <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Horizontal Scrollbar UI Divider */}
      <div className="w-full overflow-x-auto scrollbar bg-gray-100 hidden md:block lg:hidden">
        <div className="w-[600px] h-1 rounded-full bg-gray-300 mx-auto mt-1">
          <div className="h-1.5 w-1/4 rounded-full bg-gray-500"></div>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
