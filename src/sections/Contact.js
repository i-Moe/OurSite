import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full md:w-2/3 px-4 mb-8">
            <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg h-32"
                  id="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to me via email or phone. I look forward to hearing from you!
              </p>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <strong>Email:</strong> youremail@example.com
                </li>
                <li className="mb-2">
                  <strong>Phone:</strong> +123 456 7890
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> Your Address, City, Country
                </li>
                <li>
                  <strong>Social Media:</strong> Links to your social media profiles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
