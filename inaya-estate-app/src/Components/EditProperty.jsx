import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProperty = () => {
  const { id } = useParams(); // property ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    regularPrice: 0,
    discountPrice: 0,
    bathrooms: 1,
    furnished: false,
    parking: false,
    type: "sale", // default to sale
    offer: false,
    imageUrls: [],
    userRef: "",
  });

  const [loading, setLoading] = useState(true);

  // ✅ Fetch listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listings/${id}`);
        if (!res.ok) throw new Error("Failed to fetch listing");

        const data = await res.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListing();
  }, [id]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/listing/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update listing");

      alert("Listing updated successfully!");
      navigate("/"); // Go back to homepage or listings page
    } catch (error) {
      console.error(error);
      alert("Error updating listing");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Property</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {[
          { label: "Property Name", name: "name", type: "text" },
          { label: "Description", name: "description", type: "text" },
          { label: "Address", name: "address", type: "text" },
          { label: "Regular Price", name: "regularPrice", type: "number" },
          { label: "Discount Price", name: "discountPrice", type: "number" },
          { label: "Bathrooms", name: "bathrooms", type: "number" },
          { label: "Image URLs (comma separated)", name: "imageUrls", type: "text" },
          { label: "User Ref", name: "userRef", type: "text" },
        ].map(({ label, name, type }) => (
          <div className="col-md-6" key={name}>
            <label className="form-label">{label}</label>
            <input
              type={type}
              name={name}
              value={
                name === "imageUrls"
                  ? formData.imageUrls.join(", ")
                  : formData[name]
              }
              onChange={(e) => {
                const value = name === "imageUrls"
                  ? e.target.value.split(",").map((url) => url.trim())
                  : e.target.value;
                setFormData((prev) => ({ ...prev, [name]: value }));
              }}
              className="form-control"
              required
            />
          </div>
        ))}

        {/* Checkboxes and Radio buttons */}
        <div className="col-md-3">
          <label className="form-label">Furnished</label>
          <input
            type="checkbox"
            name="furnished"
            checked={formData.furnished}
            onChange={handleChange}
            className="form-check-input ms-2"
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Parking</label>
          <input
            type="checkbox"
            name="parking"
            checked={formData.parking}
            onChange={handleChange}
            className="form-check-input ms-2"
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Offer</label>
          <input
            type="checkbox"
            name="offer"
            checked={formData.offer}
            onChange={handleChange}
            className="form-check-input ms-2"
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-select"
          >
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-success px-4">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProperty;
