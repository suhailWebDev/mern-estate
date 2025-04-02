import React, { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    regularPrice: 0,
    discountPrice: 0,
    bathrooms: 1,
    furnished: false,
    parking: false,
    type: "rent",
    offer: false,
    images: [],
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 6) {
      alert("You can upload a maximum of 6 images.");
      return;
    }

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const handleDeleteImage = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleImageUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select images first!");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("images", file));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Image upload failed");

      const result = await response.json();
      setFormData((prev) => ({ ...prev, images: result.imageUrls }));
      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Image upload failed");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length === 0) {
      alert("Please upload images before submitting.");
      return;
    }

    const requestData = {
      ...formData,
      imageUrls: formData.images,
      userRef: "USER_ID_HERE",
    };

    try {
      const response = await fetch("/api/listing/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to create listing");
      }

      alert("Listing created successfully!");
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Failed to create listing");
    }
  };

  return (
    <div className="container mt-5 p-2">
      <h2 className="text-center mb-4">Create a Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Description" name="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="me-2">Type:</label>
              <input type="radio" name="type" value="sell" checked={formData.type === "sell"} onChange={handleChange} /> Sell
              <input type="radio" name="type" value="rent" checked={formData.type === "rent"} onChange={handleChange} className="ms-3" /> Rent
            </div>

            <div className="mb-3">
              <input type="checkbox" name="parking" checked={formData.parking} onChange={handleChange} /> Parking Spot
              <input type="checkbox" name="furnished" checked={formData.furnished} onChange={handleChange} className="ms-3" /> Furnished
            </div>

            <div className="mb-3">
              <input type="checkbox" name="offer" checked={formData.offer} onChange={handleChange} /> Offer Available
            </div>

            <div className="mb-3">
              <label>Regular Price ($/Month):</label>
              <input type="number" className="form-control" name="regularPrice" value={formData.regularPrice} onChange={handleChange} min="0" />
            </div>

            {formData.offer && (
              <div className="mb-3">
                <label>Discounted Price ($/Month):</label>
                <input type="number" className="form-control" name="discountPrice" value={formData.discountPrice} onChange={handleChange} min="0" />
              </div>
            )}
          </div>

          <div className="col-md-6">
            <label>Images: The first image will be the cover (max 6)</label>
            <div className="input-group mb-3">
              <input type="file" multiple className="form-control" accept="image/*" onChange={handleFileChange} />
              <button type="button" onClick={handleImageUpload} className="btn btn-outline-primary">
                Upload
              </button>
            </div>

            <div className="row mt-3">
              {imagePreviews.map((imgSrc, index) => (
                <div key={index} className="col-4 mb-3 position-relative">
                  <img src={imgSrc} alt={`Preview ${index + 1}`} className="img-fluid rounded shadow" style={{ height: "100px", objectFit: "cover" }} />
                  <button type="button" className="btn btn-sm btn-danger position-absolute top-0 end-0" onClick={() => handleDeleteImage(index)}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button type="submit" className="btn btn-dark w-100">
              CREATE LISTING
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
