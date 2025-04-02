import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams(); // ✅ Get property ID from URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`/api/listings/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading property details...</p>;
  }

  if (!property) {
    return <p className="text-center">Property not found.</p>;
  }

  return (
    <div className="container mt-5 p-2">
      <h2 className="text-center mb-4">{property.name}</h2>

      <div className="row">
        {/* Property Images */}
        <div className="col-md-6">
          {property.imageUrls.length > 0 ? (
            <img
              src={property.imageUrls[0]}
              className="img-fluid rounded shadow"
              alt={property.name}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          ) : (
            <p>No image available</p>
          )}

          <div className="mt-3">
            {property.imageUrls.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Property ${index + 1}`}
                className="img-thumbnail m-1"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="col-md-6">
          <p><strong>Address:</strong> {property.address}</p>
          <p><strong>Type:</strong> {property.type === "rent" ? "For Rent" : "For Sale"}</p>
          <p><strong>Price:</strong> ${property.regularPrice}</p>
          {property.offer && <p><strong>Discount Price:</strong> ${property.discountPrice}</p>}
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p><strong>Furnished:</strong> {property.furnished ? "Yes" : "No"}</p>
          <p><strong>Parking:</strong> {property.parking ? "Yes" : "No"}</p>
          <p><strong>Description:</strong> {property.description}</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <a href="/" className="btn btn-info">Back to Listings</a>
      </div>
    </div>
  );
};

export default PropertyDetails;
