import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("bachelor");

  const tabs = [
    { id: "bachelor", label: "Bachelor" },
    { id: "master", label: "Master" },
  ];
  const bachelor = [{ title: "BBA" }, { title: "B.Ed" }];
  const master = [{ title: "M.Ed" }, { title: "MBS" }];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <h1 className="text-center font-bold text-2xl mt-1">Our Programs</h1>
      <div className="flex mt-4">
        <div className="w-full rounded-lg dark:bg-sky-700 p-1 mx-4">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`rounded-md px-6 py-1 text-md font-medium
               ${
                 activeTab === id
                   ? "bg-white text-black shadow-sm"
                   : "bg-transparent text-white"
               }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <main className="mx-auto w-full flex-1 p-6">
        {activeTab === "bachelor" && (
          <div className="animate-fade flex flex-col md:flex-row">
            {bachelor.map((b, index) => (
              <div key={index} className="w-1/2 md:w-2/4 lg:w-1/4 m-2">
                <p className="text-center">{b.title}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "master" && (
          <div className="animate-fade flex flex-col md:flex-row">
            {master.map((m, index) => (
              <div key={index} className="w-1/2 md:w-2/4 lg:w-1/4 m-2">
                <p className="text-center">{m.title}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
