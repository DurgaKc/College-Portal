import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { BsMegaphone } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Footer from "../Components/Footer";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";
import images from '../Gallery.json';

const Home = () => {
  const team = [
    {
      name: "Lorem Ipsum",
      position: "Chairman",
      img: "/campus.jpeg",
    },
    {
      name: "Lorem Ipsum",
      position: "Campus chief",
      img: "/campus.jpeg",
    },
  ];
  const swiper = [
    {
      name: "Campus Building",
      img: "/chairman.jpg",
    },
    {
      name: "",
      img: "/campus.jpeg",
    },
  ];
  const program = [
    {
      title: "B.Ed",
    },
    {
      title: "BBS",
    },
    {
      title: "M.Ed",
    },
    {
      title: "MBS",
    },
    {
      title: "B.A",
    },
    {
      title: "M.A",
    },
  ];
  // report
  const [activeTab, setActiveTab] = useState("audit");

  const tabs = [
    { id: "audit", label: "Audit" },
    { id: "budget", label: "Budget" },
  ];

  const audit = [{ title: "weekly" }, { title: "monthly" }];
  const budget = [{ title: "yearly" }, { title: "quarterly" }];

  return (
    <div>
      <Navbar />
      {/* Scrolling News Section */}
      <div className="flex items-center bg-white border border-orange-500">
        <span className="bg-orange-500 text-white pl-4 pr-2 py-0.5 text-sm font-semibold flex items-center">
          Highlights
        </span>
        <span className="bg-orange-500 text-white pl-1.5 pr-1 py-1 text-sm font-semibold flex items-center">
          <BsMegaphone />
        </span>
        <marquee className="text-red-600 text-sm px-4">
          Bachelor First Year Exam Routine- 2076 | Admission Notice for
          Bachelor’s Programs
        </marquee>
      </div>
      <div className="m-4 flex flex-col sm:flex-row gap-4">
        {/* Report Box */}
        <div className="report w-full sm:w-1/5 border-x-2 border-b-2 dark:border-sky-700 rounded-lg order-2 md:order-1">
          <h2 className="dark:bg-sky-700 text-white pl-2 pt-2  text-sm pb-1.5 rounded-t-lg">
            Application under Implementation
          </h2>
          <h1 className="m-4 p-3 font-bold text-xl text-white bg-orange-500">
            SITE
          </h1>
        </div>

        {/* Swiper Section */}
        <div className="w-full  sm:w-3/5 h-96 sm:h-98 mb-5 sm:mb-4 order-1  md:order-2">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper rounded-lg overflow-hidden w-full h-[63.5vh]"
          >
            {swiper.map((s, idx) => (
              <SwiperSlide key={idx} className="align-center text-2xl bg-white">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />{" "}
                <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">{s.name}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Team Box */}
        <div className="mt-4 sm:mt-0 college-team w-full sm:w-1/5 border-2 dark:border-sky-700 dark:bg-sky-700 rounded-lg order-2 md:order-3">
          {team.map((t, id) => (
            <div key={id} className="flex flex-col items-center text-white">
              <div className="flex justify-center items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mt-1"
                />
              </div>
              <div className="text-center">
                <p className="text-sm">{t.name}</p>
                <h3 className="font-bold">{t.position}</h3>
                <p className="border border-white text-xs rounded-lg p-1 m-3 hover:border-black cursor-pointer transition">
                  View Message
                </p>
              </div>
            </div>
          ))}
          <p className="pl-3 flex text-sm mb-3 text-white justify-center items-center ">
            College Management Team
            <HiOutlineArrowNarrowRight className="text-lg mt-1 ml-2" />
          </p>
        </div>
      </div>

<div className="flex sm:flex-wrap md:flex-nowrap">
        <div className="about w-2/6 flex ml-5 rounded border-0 shadow-md">
          <img src="/campus.jpeg" className="h-40 w-50 p-2" />
          <div>
            <h2 className="text-center text-xl font-bold dark:text-sky-700">
              About Us
            </h2>
            <p>Information not available</p>
          </div>
        </div>
        <div className="about w-2/6  ml-5 rounded rounded-b-xl border-0 shadow-md">
          <h2 className="text-center text-xl font-bold dark:text-sky-700">
            Message
          </h2>
          <p className="p-3 line-clamp-3">
            Lorem ipsum dolor sit, consectetur adipisicing elit. Reiciendis quod
            cum eum quia earum neque, quos fuga provident nesciunt magni totam
            reprehenderit harum. Ratione dignissimos nulla vel fugiat
            perferendis nam!
          </p>
          <div className="text-red-500 pl-5 pb-2 bg-gray-300 rounded-b-xl">
            <h2>***** *****</h2>
            <p>Chairman</p>
          </div>
        </div>
        <div className="about w-2/6 ml-5 rounded rounded-b-xl border-0 shadow-md mr-4">
          <h2 className="text-center text-xl font-bold dark:text-sky-700">
            Message
          </h2>
          <p className="p-3 line-clamp-3">
            Lorem ipsum dolor sit, consectetur adipisicing elit. Reiciendis quod
            cum eum quia earum neque, quos fuga provident nesciunt magni totam
            reprehenderit harum. Ratione dignissimos nulla vel fugiat
            perferendis nam!
          </p>
          <div className="text-red-500 pl-5 pb-2 bg-gray-300 rounded-b-xl ">
            <h2>***** Acharya</h2>
            <p>Campus chief</p>
          </div>
        </div>
      </div>

      {/* notices, programs,news */}
      <div className="flex  mt-8 mb-6">
        <div className="notices h-full w-1/4 border-b-4-2 ml-5 rounded-l-xl  ">
          <h2 className="text-center text-white font-bold text-xl  rounded-tl-xl  dark:bg-sky-700 py-1">
            LATEST NOTICES
          </h2>
          <div className="dark:border-sky-700 border-l-2 border-b-2 border-r-2 rounded-bl-xl">
            <div>
              <div className="flex mx-2">
                <ol>
                  <li>Admission notice for Bachelor's level-2079</li>
                </ol>
                <p className="bg-yellow-400 m-2 p-1 pb-0.5 rounded-xl text-xs">
                  download
                </p>
              </div>
              <div className="flex mx-2">
                <ol>
                  <li>Admission notice for Bachelor's level-2079</li>
                </ol>
                <p className="bg-yellow-400 m-2 p-1 pb-0.5 rounded-xl text-xs">
                  download
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* programs */}

        <div className="notices w-2/4 border-b-4-2 ml-3 dark:border-sky-700 border-2 ">
          <h2 className="text-center text-white font-bold text-xl dark:bg-sky-700 py-1">
            OFFERED PROGRAMS
          </h2>
          <div className="flex flex-wrap gap-6 justify-center m-5">
            {program.map((p, idx) => (
              <div
                key={idx}
                className="hover:-translate-y-1 transition-transform duration-200 ease-in-out py-6 dark:bg-sky-700 bg-[#006BAC] rounded-3xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 text-white hover:bg-orange-500 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-orange-500 flex items-center justify-center rounded-full mb-3">
                  <FaBookOpenReader size={24} />
                </div>
                <p className="text-lg font-medium">{p.title}</p>
              </div>
            ))}
            <Link to="/program">
              <p className="pl-98  flex justify-end text-sm dark:text-sky-700 hover:underline cursor-pointer">
                View all Programs
                <HiOutlineArrowNarrowRight className="text-lg ml-2 mt-[2px]" />
              </p>
            </Link>
          </div>
        </div>
        {/* news */}
        <div className="notices h-full w-1/4 border-b-4-2 mx-2 ">
          <h2 className="text-center text-white font-bold text-xl  rounded-tr-xl  dark:bg-sky-700 py-1">
            LATEST NEWS AND EVENTS
          </h2>
          <div className="dark:border-sky-700 border-2 rounded-br-xl">
            <div>
              <div className="flex flex-col mx-2">
                <p>News</p>
                <p>News</p>
                <p>News</p>
                <p>News</p>
                <p>News</p>
                <Link to="/news">
                  <p className="pl-9 pb-2  flex justify-end text-sm dark:text-sky-700 hover:underline cursor-pointer">
                    View all Notices and Events
                    <HiOutlineArrowNarrowRight className="text-lg ml-2 mt-[2px]" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* Reports */}
      <div className="p-4 ">
        {/* Page Heading */}
        <h1 className="font-bold text-2xl mt-1">Reports</h1>

        {/* Tabs */}
        <div className="mt-4 flex w-full">
          <div className="w-full inline-flex rounded-lg dark:bg-sky-700 p-1">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`rounded-md px-6 py-1 text-md font-medium transition duration-300 ${
                  activeTab === id
                    ? "bg-white text-black shadow"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <main className="w-full p-6">
          {activeTab === "audit" && (
            <div className="animate-fade flex flex-wrap justify-center gap-4">
              {audit.map((a, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-sky-800 rounded-xl shadow p-4 w-full sm:w-1/2 lg:w-1/4 text-center"
                >
                  <p className="font-semibold text-black dark:text-white">
                    {a.title}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "budget" && (
            <div className="animate-fade text-center text-white flex flex-wrap justify-center gap-3">
              {budget.map((b, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-sky-800 rounded-xl shadow p-4 w-full sm:w-1/2 lg:w-1/4 text-center"
                >
                  <p className="font-semibold text-black dark:text-white">
                    {b.title}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
        <div className="flex justify-center mt-4">
          <Link to="/report">
            <p className="flex items-center text-sm dark:text-sky-700 hover:underline cursor-pointer border-2 px-4 py-1 rounded">
              All Reports
              <HiOutlineArrowNarrowRight className="text-lg ml-2 mt-[2px]" />
            </p>
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-wrap mt-5">
        <div className="image w-2/4">
          <h2 className="dark:bg-sky-700 text-white ml-4 pl-3 w-30">
            Image Gallery
          </h2>
          <div className="flex flex-wrap">
            {images.map(({index, title, img}) => (
            <div key={index} >
              <img src={img} alt={title} className="w-40 h-40 m-4" />
              <p className=" m-5">{title}</p>
            </div>
          ))}
          </div>
        </div>
        <div className="video w-2/4">
          <h2 className="dark:bg-sky-700 text-white ml-4 pl-3 w-30">
            Video Gallery
          </h2>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-5">
        <Link to="/gallery">
          <p className="flex items-center text-sm dark:text-sky-700 hover:underline cursor-pointer border-2 px-4 py-1 rounded">
            All Gallery
            <HiOutlineArrowNarrowRight className="text-lg ml-2 mt-[2px]" />
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
