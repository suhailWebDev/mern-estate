import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreRegisterModal from "./PreRegisterModal";

const PropertyList = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
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
    fetchListings();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
        minHeight: "100vh",
        padding: "30px",
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
        <Slider {...sliderSettings}>
          {listings.map((listing) => (
            <div key={listing._id} className="px-3">
              <div
                className="card property-card shadow-lg"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src={listing.imageUrls?.[0] || "default-image.jpg"}
                  className="card-img-top"
                  alt={listing.name}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  className="card-body text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <h5 className="card-title" style={{ fontWeight: "bold", color: "#1E88E5" }}>
                    {listing.name}
                  </h5>
                  <p className="card-text" style={{ color: "#37474F" }}>{listing.address}</p>
                  <p className="card-text">
                    <strong style={{ color: "#D32F2F" }}>Price: ${listing.regularPrice}</strong>
                    {listing.offer && (
                      <span style={{ color: "#388E3C", fontWeight: "bold" }}>
                        {" "} (Discount: ${listing.discountPrice})
                      </span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong className={listing.type === "rent" ? "text-danger" : "text-success"}>
                      {listing.type === "rent" ? "For Rent" : "For Sale"}
                    </strong>
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link
                      to={`/property/${listing._id}`}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#1E88E5",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        transition: "0.3s",
                      }}
                    >
                      View Details
                    </Link>
                    <button className="btn btn-warning" onClick={() => setModalOpen(true)}>
        Pre-Register
      </button>

      <PreRegisterModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PropertyList;
