import React from "react";

const Map = () => {
  return (
    <div>
      <address className="address">
        {/* <p> Mahendra multiple Campus</p>
        <p>Nepalgunj-10, Banke</p> */}
      </address>
      <div>
        <div className="flex justify-center items-center w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.526315974945!2d81.60801207446967!3d28.038950110789898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39985df9432d7d29%3A0x940334b3b6234527!2sMahendra%20Multiple%20Campus%2C%20Nepalgunj!5e0!3m2!1sen!2snp!4v1747285719929!5m2!1sen!2snp"
        className="w-full rounded-lg shadow-lg border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
    </div>
  );
};

export default Map;
