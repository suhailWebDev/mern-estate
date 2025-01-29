import React, { useEffect } from 'react';
import founder from '../Images/imran.webp';
import { FaHandshake, FaBuilding, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa"; // Icons
import { FaUserTie, FaLightbulb, FaHome, FaChartBar, FaBullseye } from "react-icons/fa"; // Icons

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <FaHandshake className="icon-core" />,
      title: "Trust & Integrity",
      description: "We build long-term relationships based on transparency, honesty, and ethical business practices.",
    },
    {
      icon: <FaBuilding className="icon-core" />,
      title: "Quality Investments",
      description: "Every property we deal with is carefully selected to provide maximum value and security.",
    },
    {
      icon: <FaUsers className="icon-core" />,
      title: "Client-Centric Approach",
      description: "Our clients are at the heart of everything we do, ensuring personalized service and expert guidance.",
    },
    {
      icon: <FaShieldAlt className="icon-core" />,
      title: "Reliability & Security",
      description: "We prioritize safe, risk-free property dealings to give our clients peace of mind.",
    },
    {
      icon: <FaChartLine className="icon-core" />,
      title: "Growth & Innovation",
      description: "We constantly evolve with the market to offer innovative and profitable real estate solutions.",
    },
  ];

  const uniqueApproach = [
    {
      icon: <FaUserTie className="icon-diff" />,
      title: "Expert-Led Guidance",
      description: "Led by real estate experts, we provide strategic advice tailored to market trends and client needs.",
    },
    {
      icon: <FaLightbulb className="icon-diff" />,
      title: "Innovative Solutions",
      description: "We leverage modern real estate strategies to maximize investment potential for our clients.",
    },
    {
      icon: <FaHome className="icon-diff" />,
      title: "Client-First Philosophy",
      description: "Your goals come first. We prioritize personalized service to ensure seamless transactions.",
    },
    {
      icon: <FaHandshake className="icon-diff" />,
      title: "Trust & Transparency",
      description: "We believe in honesty, ensuring all dealings are clear, ethical, and trustworthy.",
    },
    {
      icon: <FaChartBar className="icon-diff" />,
      title: "Market-Driven Investments",
      description: "Our data-backed insights help clients make informed and profitable real estate decisions.",
    },
    {
      icon: <FaBullseye className="icon-diff" />,
      title: "Long-Term Vision",
      description: "We focus on sustainable growth, ensuring lasting value in every investment opportunity.",
    },
  ];
  return (
    <>
    <div className="container-fluid py-5 bg-dark">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6">
          <img
            src={founder}
            alt="Imran Chishti - Founder"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6 text-light">
          <h2 className="fw-bold">Founder’s Story: Inspired by Vision, Built on Trust</h2>
          <blockquote className="blockquote text-primary">
            “Great investments are not just about properties; they’re about people, trust, and a vision for the future.”
          </blockquote>
          <p>
            **Imran Chishti**, the founder of **Inaya Realty**, has always believed that real estate is more than just transactions—it’s about building trust and creating long-term value. With a strong background in property investments and a passion for helping people secure their future, he embarked on a journey to establish a firm that prioritizes integrity and client success.
          </p>
          <p>
            His inspiration came from a defining moment—witnessing families struggle with real estate decisions due to a lack of **guidance, transparency, and expertise**. He realized that people needed more than just a property dealer; they needed a **trusted advisor** who could help them make informed and confident investment choices.
          </p>
          <p>
            “Every property we deal with is not just an asset; it’s someone’s dream, someone’s future,” **Imran reflects**. “That’s why Inaya Realty was built—to empower people with the right opportunities, backed by trust and expert insights.”
          </p>
          <p>
            Today, **Inaya Realty** stands as a beacon of **integrity, transparency, and strategic investment guidance**, helping clients navigate the ever-evolving real estate landscape with confidence.
          </p>
          <h3>Imran Chishti</h3>
          <p className='text-warning'>CEO</p>
        </div>
      </div>
    </div>
    <div className=" container-fluid text-center py-5"   style={{
        background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
        minHeight: "100vh",
      }}>
      <h2 className="fw-bold mb-4">Our Core Values</h2>
      <p className="text-muted mb-5">Guiding principles that define our commitment to excellence in real estate.</p>

      <div className="row">
        {coreValues.map((value, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="core-value-card p-4 shadow-sm">
              {value.icon}
              <h4 className="mt-3">{value.title}</h4>
              <p className="text-muted">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="container-fluid text-center py-5" style={{
        background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
        minHeight: "100vh",
      }}>
      <h2 className="fw-bold mb-4">The Inaya Realty Difference</h2>
      <p className="text-muted mb-5">Our unique approach that sets us apart in the real estate industry.</p>

      <div className="row">
        {uniqueApproach.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="difference-card p-4 shadow-sm">
              {item.icon}
              <h4 className="mt-3">{item.title}</h4>
              <p className="text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default About
