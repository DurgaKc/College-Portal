// src/pages/Gallery.jsx
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import images from '../Gallery.json';
// import Api from "../Api";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("image"); // "image" | "video"

  const tabs = [
    { id: "image", label: "Image Gallery" },
    { id: "video", label: "Video Gallery" },
  ];
  
  const videos = [
    { title:"video", URL:"https://www.youtube.com/embed/GQm8a75W2q0?si=gFEDROpbAqLdR7uF"}
  ]
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
        <h1 className="text-center font-bold text-2xl mt-1">Our Gallery</h1>
      {/* ── Tab bar ───────────────────────────────────────────────────── */}
      <div className="mt-4 flex">
        <div className="w-full inline-flex rounded-lg dark:bg-sky-700 p-1 mx-4">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`rounded-md px-6 py-1 text-md font-medium duration-400
                ${
                  activeTab === id
                    ? "bg-white text-black shadow-sm "         /* selected */
                    : "bg-transparent text-white"     /* idle      */
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab panels ────────────────────────────────────────────────── */}
      <main className="mx-auto w-full flex-1 p-6">
        {activeTab === "image" && (
          <div className="animate-fade flex flex-col md:flex-row">
            {/* replace with your image-gallery component */}
            {images.map(({ id, title, img }) => (
              <div
                key={id}
                className="m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-48 w-full rounded-lg object-cover"
                />
                <p className="mt-2 text-center">{title}</p>
              </div>
            ))}
          </div>
        )}
           
        {activeTab === "video" && (
          <div className="animate-fade">
            {/* replace with your video-gallery component */}
            {
              videos.map((i, index)=>(
            <div className="w-1/2 md:w-2/4 lg:w-1/4 m-2" key={index}>
            <img className="h-50 w-full " src={i.URL} alt={i.title} />
           <p className="text-center">{i.title}</p>
           </div>
              ))
            }
          </div>
        )}
      </main>
{/* <Api/> */}
      <Footer />
    </div>
  );
}
