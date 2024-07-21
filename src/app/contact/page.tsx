"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Meteors } from "@/components/ui/meteors";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Replace with your EmailJS service_id, template_id, and user_id
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_EMAIL_TEMPLATE_ID ?? "",
        {
          from_name: email,
          to_name: "Yaseen Ali",
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Error sending message.");
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full w-full max-w-screen overflow-hidden rounded-2xl flex flex-col justify-start items-start">
        <div className="flex flex-col items-center text-center w-full mt-32">
          <h1 className="font-bold text-white mb-4 relative  uppercase tracking-wide text-5xl">
            Contact Us
          </h1>
          <p className="font-normal text-base text-slate-500 mb-6 relative">
            We&rsquo;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 rounded-lg border border-cyan-600 hover:bg-cyan-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
