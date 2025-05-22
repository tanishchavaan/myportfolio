import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "frontend",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting form with data:", formData);  // Add this
  setStatus("Sending...");

  try {
    await axios.post("http://localhost:5000/api/contact", formData);
    setStatus(`Thanks for reaching out, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: "", email: "", service: "frontend", message: "" });
  } catch (error) {
    console.error("Error sending message:", error);  // And this
    setStatus("Oops! Something went wrong. Please try again later.");
  }
};


  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="ml">Machine Learning</option>
          <option value="dsa">Problem Solving</option>
          <option value="other">Others</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
