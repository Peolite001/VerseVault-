
import { FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="">
      <section className=" min-h-[40vh] flex items-center justify-center">
        <div className="text-center max-w-3xl px-5">
          <h1 className="text-xl md:text-3xl font-bold uppercase mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Have questions, feedback, or just want to say hello? We’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-purple-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-800">support@versevault.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-purple-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-800">Abuja, Nigeria</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-5">
              <a href="#" aria-label="Twitter">
                <FaXTwitter className="text-purple-500 text-2xl" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-purple-500 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-20 px-5 flex justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-white/5 border border-gray-700 focus:border-purple-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-white/5 border border-gray-700 focus:border-purple-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded-lg bg-white/5 border border-gray-700 focus:border-purple-500 outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-lg font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
