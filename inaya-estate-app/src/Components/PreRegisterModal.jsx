import React, { useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

Modal.setAppElement("#root");

const PreRegisterModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Your request has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        onRequestClose(); // Close modal
      } else {
        alert("Error sending request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="pre-register-modal"
      overlayClassName="pre-register-overlay"
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onRequestClose}>✖</button>

        <h2 className="modal-title">Pre-Register Now</h2>
        <p className="modal-subtitle">Please Fill the form to get in touch</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PhoneInput
            country={"ae"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%", height: "40px" }}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default PreRegisterModal;
