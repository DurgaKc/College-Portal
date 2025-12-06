import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Introduction = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="m-6 w-3/4">
          <h1 className=" text-3xl text-black mb-5">Welcome to ........ Multiple Campus</h1>
          <p>
            ...... Multiple Campus, Nepalgunj is a constituent campus of
            Tribhuvan University (TU). It was established in 2020 B.S. It’s the
            oldest campus in this region. Since its establishment, the campus
            has played the vital role in the production of highly qualified
            manpower. It is the educational hub in the entire state no. 5 since
            long. Various academic programs are being run in this campus at
            present:
          </p>
        </div>
        <div className=" w-1/4 m-6">
          <img src="/TUlogo.png" />
        </div>
      </div>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Introduction;
