import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Map from "../Components/Map";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-1 flex-col gap-8 p-6 md:flex-row m-18">
        {/* Left column – map + contact details */}
        <section className="relative w-full ">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.526315974945!2d81.60801207446967!3d28.038950110789898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39985df9432d7d29%3A0x940334b3b6234527!2sMahendra%20Multiple%20Campus%2C%20Nepalgunj!5e0!3m2!1sen!2snp!4v1747285719929!5m2!1sen!2snp"
            className="lg:absolute inset-0 w-full h-full rounded-lg shadow-md border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Test Multiple Campus Map"
          ></iframe>

          {/* Address Overlay */}
          <address className="lg:absolute bottom-10 left-20 flex flex-col sm:hidden lg:flex lg:flex-col bg-white  text-black p-6 shadow-lg ">
            <div className=" flex">
             <div className="w-4/8 mr-3">
               <h4 className=" font-bold dark:text-sky-700">📍 ADDRESS</h4>
              <p className="text-sm">Nepalgunj, Banke</p>
             </div>
              <div className="w-4/8">
                <h4 className="text-lg font-bold dark:text-sky-700">
                  📧 EMAIL
                </h4>
                <a
                  href="mailto:mmcn2080@gmail.com"
                  className="dark:text-sky-800 hover:underline"
                >
                  tcampus2080@gmail.com
                </a>

                <h4 className="text-lg font-bold dark:text-sky-700">
                  📞 PHONE
                </h4>
                <p className="text-sm">091‑582362, 091‑554680, 091‑587362</p>
              </div>
            </div>
          </address>
        </section>

        {/* Feedback form */}
        <section className=" md:w-1/3 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
          <p className="text-gray-600 mb-6">
            We're always here to listen! Your feedback is valuable to us, and we
            welcome any suggestions or thoughts you have.
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition-colors"
            >
              Send Feedback
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
