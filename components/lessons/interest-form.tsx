import { useState } from "react";

export default function LessonInterestForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locationPreference, setLocationPreference] = useState("");
  const [timePreference, setTimePreference] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formIsInvalid = () => {
    return !name || !phone || !email || !locationPreference || !timePreference;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formIsInvalid()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    try {
      setIsLoading(true);
      setErrorMessage("");
      const payload = {
        emailTo: ["sean@getinthebunker.golf"],
        template: "lesson_template",
        name,
        phone,
        email,
        locationPreference,
        timePreference,
        notes,
      };
      console.log("Submitting form: ", payload);
      setName("");
      setPhone("");
      setEmail("");
      setLocationPreference("");
      setTimePreference("");
      setNotes("");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while submitting the form. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      {errorMessage && <div className="text-red-500 mb-3">{errorMessage}</div>}
      <div className="mb-4">
        <label className="block text-sm font-medium">Name:</label>
        <input type="text" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Phone Number:</label>
        <input type="tel" className="w-full p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Email Address:</label>
        <input type="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Location Preference:</label>
        <select className="w-full p-2 border rounded" value={locationPreference} onChange={(e) => setLocationPreference(e.target.value)} required>
          <option value="">Select a Location</option>
          <option value="Guilderland, NY">Guilderland, NY</option>
          <option value="Clifton Park, NY">Clifton Park, NY</option>
          <option value="North Greenbush, NY">North Greenbush, NY</option>
          <option value="Latham, NY">Latham, NY</option>
					<option value="Saratoga, NY">Saratoga, NY</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Time of Day Preference:</label>
        <select className="w-full p-2 border rounded" value={timePreference} onChange={(e) => setTimePreference(e.target.value)} required>
          <option value="">Select a Time of Day</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Notes:</label>
        <textarea className="w-full p-2 border rounded" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
