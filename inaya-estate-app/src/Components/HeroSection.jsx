import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import hero1 from "../Images/abu-dhabi-seascape-with-skyscrapers.jpg";
import hero2 from "../Images/scenic-aerial-view-downtown-dubai-united-arab-emirates-with-skyscrapers-highways-colourful-travel-background.jpg";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className="container-fluid py-5"
      id="about-us"
      style={{
        background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Images */}
          <div className="col-lg-6 d-flex justify-content-center position-relative text-center mb-4 mb-lg-0">
            <div className="position-relative" style={{ maxWidth: "80%" }}>
              <img
                src={hero1}
                alt="Dubai Skyline"
                className="img-fluid rounded-circle shadow"
                style={{ width: "100%" }}
              />
              <img
                src={hero2}
                alt="Dubai Evening"
                className="img-fluid position-absolute shadow-lg rounded"
                style={{
                  bottom: "10%",
                  right: "-10%",
                  width: "45%",
                  border: "5px solid white",
                }}
              />
            </div>
          </div>

          {/* Right Side - Animated Text */}
          <div className="col-lg-6 text-center text-lg-start">
            <motion.h5
              className="text-muted"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              — About Us
            </motion.h5>
            <motion.h2
              className="fw-bold"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              Inaya Realty: Where Excellence Meets Opportunity in Real Estate
            </motion.h2>
            <motion.p
              className="text-secondary"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              At Inaya Realty, real estate isn’t just about properties—it’s about
              building trust and lasting relationships.
            </motion.p>
            <motion.p
              className="text-secondary"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              Inspired by a passion for integrity, innovation, and investment
              success, we strive to bring transparency, expertise, and value to
              every transaction.
            </motion.p>
            <motion.p
              className="text-secondary"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              Whether you’re buying, selling, or investing, we make the journey
              seamless, rewarding, and stress-free—because real estate should be
              an experience you enjoy, not endure.
            </motion.p>
            <NavLink to="/about">
              <motion.button
                className="btn btn-outline-dark"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
              >
                Know More <span className="ms-2">➜</span>
              </motion.button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
