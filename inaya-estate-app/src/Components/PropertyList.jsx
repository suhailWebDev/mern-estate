import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreRegisterModal from "./PreRegisterModal";
import { useSelector } from "react-redux";

const PropertyList = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
   const { currentUser } = useSelector(state => state.user);

  useEffect(() => {
    fetchListings();
  }, []);

  // ✅ Fetch Listings
  const fetchListings = async () => {
    try {
      const response = await fetch("/api/listings");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Delete Listing
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) {
      return;
    }

    try {
      const response = await fetch(`/api/listing/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting listing: ${response.statusText}`);
      }

      // ✅ Remove listing from UI after successful deletion
      setListings(listings.filter((listing) => listing._id !== id));
      alert("Listing deleted successfully!");
    } catch (error) {
      console.error("Error deleting listing:", error);
      alert("Failed to delete listing.");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: listings.length > 3, // Only loop if more than 3 items
    speed: 800,
    slidesToShow: Math.min(3, listings.length), // Show max 3, or less if there are fewer listings
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(2, listings.length), slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-center mb-4 text-uppercase" style={{ color: "#01579B", fontWeight: "bold" }}>
        Featured Projects
      </h2>

      {loading ? (
        <p className="text-center">Loading properties...</p>
      ) : listings.length === 0 ? (
        <p className="text-center">No listings available.</p>
      ) : (
        <Slider {...sliderSettings} className="px-3">
          {listings.map((listing) => (
            <div key={listing._id} className="px-2">
              <div
                className="card property-card shadow-lg"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={listing.imageUrls?.[0] || "default-image.jpg"}
                  className="card-img-top"
                  alt={listing.name}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div
                  className="card-body text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <h5 className="card-title fw-bold text-primary">{listing.name}</h5>
                  <p className="card-text text-muted">{listing.address}</p>
                  <p className="card-text">
                    <strong className="text-danger">Price: ${listing.regularPrice}</strong>
                    {listing.offer && (
                      <span className="text-success fw-bold"> {" "} (Discount: ${listing.discountPrice})</span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong className={listing.type === "rent" ? "text-danger" : "text-success"}>
                      {listing.type === "rent" ? "For Rent" : "For Sale"}
                    </strong>
                  </p>
                  
                  {/* ✅ Buttons */}
                  <div className="d-flex justify-content-center flex-wrap gap-2">
                    <Link
                      to={`/property/${listing._id}`}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#1E88E5",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      View Details
                    </Link>
                    <button 
                      className="btn btn-warning"
                      onClick={() => setModalOpen(true)}
                      style={{ fontSize: "14px" }}
                    >
                      Pre-Register
                    </button>
                    {currentUser ? (
                      <>
                    <Link 
                      to={`/edit-property/${listing._id}`} 
                      className="btn btn-info"
                      style={{ fontSize: "14px" }}
                    >
                      Edit
                    </Link>
                    <button 
                      className="btn btn-danger"
                      onClick={() => handleDelete(listing._id)}
                      style={{ fontSize: "14px" }}
                    >
                      Delete
                    </button>
                    </>):null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}

      <PreRegisterModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
    </div>
  );
};

export default PropertyList;
