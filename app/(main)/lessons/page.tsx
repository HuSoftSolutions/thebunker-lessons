"use client";

import Image from "next/image";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
  locationPreference: string;
  timePreference: string;
  notes: string;
}

type HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => void;

export default function Lessons() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    locationPreference: "",
    timePreference: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    // Strip all non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");
    
    // Apply formatting based on the length of the input
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Apply phone formatting if the input is the phone field
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.locationPreference ||
      !formData.timePreference
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email-lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      toast.success("Lesson Inquiry Submitted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        locationPreference: "",
        timePreference: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://storage.googleapis.com/thebunker-assets/thebunker/pexels-thomasleeward-2828723.jpg"
          alt="Golf Lessons at The Bunker"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl sm:text-7xl">GOLF LESSONS</h1>
          <p className="text-lg mt-2">
            Improve your game with our PGA professionals
          </p>
        </div>
      </section>

      <section className="p-10 text-center bg-gray-100">
        <h1 className="text-3xl text-green-600">Lesson Rates</h1>
        <div className="mt-6 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto ">
          <div className="bg-white p-6 shadow-xl rounded-xl hover-grow">
            <h3 className="text-xl font-semibold">Adult Individual</h3>
            <p>One Hour: $125</p>
            <p>Half Hour: $65</p>
          </div>
          <div className="bg-white p-6 shadow-xl rounded-xl hover-grow">
            <h3 className="text-xl font-semibold">Junior Individual</h3>
            <p>One Hour: $100</p>
            <p>Half Hour: $55</p>
          </div>
					<div className="bg-white p-6 shadow-xl rounded-xl hover-grow">
            <h3 className="text-xl font-semibold">9 Hole Playing Lesson</h3>
            <p>$200 inside at <span className="text-gray-600 font-bold">any Bunker location</span> or outdoors at <span className="text-gray-600 font-bold">Shaker Ridge Country Club</span> or <span className="text-gray-600 font-bold">Olde Kinderhook Golf Club</span></p>
            
          </div>
        </div>
      </section>

      <section className="p-10 text-center bg-gray-100">
        <div className="mt-6 grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300">
            <h1 className="text-3xl text-green-600 font-semibold">
              Coach Program
            </h1>

            <p className="mt-4 text-lg text-black font-bold">
              Our coaches will assess your game, define your goals, and build a
              step-by-step personalized plan for improvement. The program
              includes the following lessons:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-left">
              <li>
                <strong>Pre Lesson:</strong> Fill out and return the goal and
                self-assessment sheet to a Bunker Coach.
              </li>
              <li>
                <strong>Lesson 1:</strong> Assessment of long game, short game,
                and goals review. 1 hour.
              </li>
              <li>
                <strong>Lesson 2:</strong> On-course evaluation, strategies, and
                mental/physical assessments. 2 ½ hours.
              </li>
              <li>
                <strong>Lesson 3:</strong> Private lesson working on the
                personalized program. 1 hour.
              </li>
              <li>
                <strong>Lesson 4:</strong> Continuation of private lessons. 1
                hour.
              </li>
            </ul>
            <p className="mt-4 text-xl font-semibold text-green-600">
              Cost: $600 per student
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 text-center bg-gray-100">
        <div className="mt-6 grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300">
            <h1 className="text-3xl text-green-600 font-semibold">
              Coach Group Program
            </h1>
            <p className="mt-4 text-lg text-black font-bold">
              Coaches will work with students in a group setting to improve
              their games. Each group receives 12 hours of instruction, with 4-6
              golfers per group.
            </p>{" "}
            <ul className="list-disc pl-5 mt-4 space-y-2 text-left">
              <li>
                <strong>Session 1:</strong> On-course assessment of the students
                games. 2 ½ hours.
              </li>
              <li>
                <strong>Session 2:</strong> Group coaching on training
                protocols. 1 ½ hours.
              </li>
              <li>
                <strong>Session 3:</strong> On-course coaching: course strategy
                and mental/physical focus. 2 ½ hours.
              </li>
              <li>
                <strong>Session 4:</strong> Group coaching on training
                protocols. 1 ½ hours.
              </li>
              <li>
                <strong>Session 5:</strong> On-course coaching. Taking group
                coaching to the course. 2 ½ hours.
              </li>
              <li>
                <strong>Session 6:</strong> Final group coaching session on
                training protocols. 1 ½ hours.
              </li>
            </ul>
            <p className="mt-4 text-xl font-semibold text-green-600">
              Cost: $600 per student
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 text-center bg-white">
        <h1 className="text-3xl text-green-600">Technology We Use</h1>
        <p className="mt-4 text-lg text-black">
          Explore the cutting-edge tools we use to analyze and improve your
          game.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a
            href="https://trackman.com"
            target="_blank"
            className="text-green-600 underline font-aller hover:text-green-800"
          >
            Trackman
          </a>
          <a
            href="https://sportbox.ai"
            target="_blank"
            className="text-green-600 underline font-aller hover:text-green-800"
          >
            Sportbox AI
          </a>
          <a
            href="https://hackmotion.com"
            target="_blank"
            className="text-green-600 underline font-aller hover:text-green-800"
          >
            Hackmotion
          </a>
        </div>
      </section>

      <section className="p-10 text-center bg-black bg-opacity-90">
        <h1 className="text-3xl text-green-600">Interested in Lessons?</h1>
        <p className="mt-2 text-white">
          Fill out the form below and we will get in touch!
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-lg mx-auto bg-white p-6 shadow-xl rounded-xl"
        >
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4"
            maxLength={14} // Length of "(XXX) XXX-XXXX"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4"
          />
          <select
            name="locationPreference"
            value={formData.locationPreference}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">Select a Location</option>
            <option value="Guilderland, NY">Guilderland, NY</option>
            <option value="Clifton Park, NY">Clifton Park, NY</option>
            <option value="North Greenbush, NY">North Greenbush, NY</option>
            <option value="Latham, NY">Latham, NY</option>
            <option value="Saratoga, NY">Saratoga, NY</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="timePreference"
            value={formData.timePreference}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">Select a Time of Day</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}