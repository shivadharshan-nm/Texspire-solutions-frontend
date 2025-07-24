// src/pages/Schedule.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    domain: [],
    projects: "",
    duration: "",
    budget: "",
    subscription: "",
    consultation: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updated = checked
        ? [...formData.domain, value]
        : formData.domain.filter((item) => item !== value);
      setFormData({ ...formData, domain: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) setShowModal(true);
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  const handleRedirect = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-white flex justify-center py-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900">Schedule a Meet</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="font-medium">Name*</label>
            <input
              required name="name" value={formData.name}
              onChange={handleChange} placeholder="Your name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Mail ID*</label>
            <input
              required type="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="your@email.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="font-medium">Designation*</label>
            <input
              required name="designation" value={formData.designation}
              onChange={handleChange} placeholder="e.g., Founder"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Domain */}
          <div>
            <label className="font-medium">Project Domain*</label>
            <div className="space-y-2 mt-2">
              {["Designing", "Data Science", "Full Stack"].map((item) => (
                <label key={item} className="block">
                  <input
                    type="checkbox" name="domain" value={item}
                    onChange={handleChange} checked={formData.domain.includes(item)}
                    className="mr-2"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <label className="font-medium">Number of Projects*</label>
            <input
              required name="projects" type="number" value={formData.projects}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="font-medium">Project Duration*</label>
            <input
              required name="duration" type="number" value={formData.duration}
              onChange={handleChange} placeholder="In weeks"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="font-medium">Budget Expectation*</label>
            <input
              required name="budget" type="rupees" value={formData.budget}
              onChange={handleChange} placeholder="e.g., 99,99,999.99"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Subscription */}
          <div>
            <label className="font-medium">Need Subscription?</label>
            <div className="space-x-4 mt-1">
              <label><input type="radio" name="subscription" value="Yes" onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="subscription" value="No" onChange={handleChange} /> No</label>
            </div>
          </div>

          {/* Consultation */}
          <div>
            <label className="font-medium">Need Consultation?</label>
            <div className="space-x-4 mt-1">
              <label><input type="radio" name="consultation" value="Yes" onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="consultation" value="No" onChange={handleChange} /> No</label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* ✅ Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl text-center shadow-md w-full max-w-md">
              <h3 className="text-xl font-semibold mb-2 text-green-600">✅ Submission Successful!</h3>
              <p className="text-sm text-gray-600 mb-4">Thank you for submitting your request.</p>
              <button
                onClick={handleRedirect}
                className="bg-sky-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
