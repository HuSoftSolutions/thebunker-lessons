"use client";

import Image from "next/image";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  fittingInterest: string;
  locationPreference: string;
  timePreference: string;
  notes: string;
}

type HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => void;

export default function ClubFitting() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    fittingInterest: "",
    locationPreference: "",
    timePreference: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.fittingInterest ||
      !formData.locationPreference ||
      !formData.timePreference
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      alert("Form submitted! We will get back to you soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        fittingInterest: "",
        locationPreference: "",
        timePreference: "",
        notes: "",
      });
      setIsLoading(false);
      setErrorMessage("");
    }, 1000);
  };

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://storage.googleapis.com/thebunker-assets/thebunker/pexels-thomasleeward-2828723.jpg"
          alt="Golf Club Fitting"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl sm:text-7xl">CLUB FITTING</h1>
          <p className="text-lg mt-2">
            Get a personalized fitting from our golf professionals
          </p>
        </div>
      </section>

      <section className="p-10 text-center bg-gray-50">
        <h1 className="text-3xl text-green-600">Fitting Fees</h1>
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 shadow-xl rounded-xl mb-6 hover-grow">
            <h3 className="text-xl font-semibold">
              Driver, Fairway Wood, or Hybrid Fitting
            </h3>
            <p>$75 – Takes about 1 hour</p>
          </div>
          <div className="bg-white p-6 shadow-xl rounded-xl mb-6 hover-grow">
            <h3 className="text-xl font-semibold">Iron Fitting</h3>
            <p>$75 – Takes about 1 hour</p>
          </div>
          <div className="bg-white p-6 shadow-xl rounded-xl mb-6 hover-grow">
            <h3 className="text-xl font-semibold">Full Bag Fitting</h3>
            <p>$125 – Takes 1.5-2 hours</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          The fitting fee will be waived if a purchase/order is made the same
          day as the fitting or will be applied to a purchase/order made within
          one week of the fitting.
        </p>
      </section>

      <section className="p-10 text-center bg-black bg-opacity-90">
        <h1 className="text-3xl text-green-600">
          Interested in a Club Fitting?
        </h1>
        <p className="mt-2 text-lg text-white">
          Fill out the form below and we’ll get in touch with you!
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
            name="fittingInterest"
            value={formData.fittingInterest}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">
              What are you interested in being fitted for?
            </option>
            <option value="Driver, Fairway Wood, or Hybrid">
              Driver, Fairway Wood, or Hybrid
            </option>
            <option value="Iron">Iron</option>
            <option value="Full Bag">Full Bag</option>
          </select>
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
    </div>
  );
}
