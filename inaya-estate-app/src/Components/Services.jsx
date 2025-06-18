import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional blur effect

// Import images
import propertyManagementImg from "../Images/woman-pointing-chalkboard-estate-agency.jpg";
import buyingSellingImg from '../Images/real-estate-agent-business-woman-front-door.jpg';
import rentalServicesImg from '../Images/medium-shot-couple-talking-real-estate-agent.jpg';
import investmentConsultingImg from '../Images/front-view-arrangement-economy-elements.jpg';
import legalAdvisoryImg from '../Images/breakup-marriage-couple-with-divorce-certification.jpg';
import valuationAppraisalImg from '../Images/4265003.jpg';
import holidayHomesImg from "../Images/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey.jpg"; // New Holiday Homes image
import conciergeRelocationImg from "../Images/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes.jpg";
import PreRegisterModal from './PreRegisterModal';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="services-section">
      <div className="container py-5">
        <h1 className="text-center mb-3 text-light fw-bold">Our Services</h1>
        <p className="text-center mb-5 text-light">
          Explore the range of real estate services we offer in Dubai.
        </p>

        {/* Service Items */}
        {serviceData.map((service, index) => (
          <div key={index} className="row align-items-center mb-5 service-item">
            <div className="col-md-6">
              <LazyLoadImage
                src={service.img}
                className="img-fluid service-image"
                alt={service.title}
                effect="blur" // Optional blur effect
              />
            </div>
            <div className="col-md-6">
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-list">
                  {service.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button  onClick={() => setModalOpen(true)} className="btn-gradient">Learn More</button>
              </div>
            </div>
          </div>
        ))}
        <PreRegisterModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
      </div>

      {/* Modern Styles */}
      <style jsx>{`
        /* Full Section Gradient Background */
        .services-section {
          background: linear-gradient(to bottom right, #001f3f, #003366);
          padding: 80px 0;
        }

        /* Service Item */
        .service-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 20px;
          margin-bottom: 30px;
          backdrop-filter: blur(8px);
        }

        .service-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        /* Image Styling */
        .service-image {
          border-radius: 15px;
          height: 300px;
          object-fit: cover;
          width: 100%;
        }

        /* Content Styling */
        .service-content {
          padding: 20px;
          color: white;
        }

        .service-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .service-description {
          font-size: 1rem;
          color: #ddd;
          margin-bottom: 15px;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .service-list li {
          font-size: 1rem;
          color: #ddd;
          margin-bottom: 8px;
        }

        .service-list li::before {
          content: "•";
          color: #ff7e5f;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        /* Gradient Button */
        .btn-gradient {
          display: inline-block;
          padding: 12px 25px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          border-radius: 50px;
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          background: linear-gradient(135deg, #feb47b, #ff7e5f);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

/* Services Data */
const serviceData = [
  {
    title: "Property Management",
    img: propertyManagementImg,
    description: "Our property management services ensure your investment thrives with meticulous maintenance and tenant management.",
    details: ["Tenant management", "Comprehensive maintenance", "Performance analysis"]
  },
  {
    title: "Buying & Selling",
    img: buyingSellingImg,
    description: "We provide end-to-end services for buying and selling properties, ensuring a seamless transaction process.",
    details: ["Property valuation", "Listing & marketing", "Negotiation & closing"]
  },
  {
    title: "Rental Services",
    img: rentalServicesImg,
    description: "Our rental services cater to both landlords and tenants, offering a hassle-free rental experience.",
    details: ["Tenant screening", "Rent collection", "Property inspections"]
  },
  {
    title: "Investment Consulting",
    img: investmentConsultingImg,
    description: "Our investment consulting services help you make informed decisions to maximize your returns.",
    details: ["Market research", "Portfolio management", "Risk assessment"]
  },
  {
    title: "Concierge & Relocation Services",
    img: conciergeRelocationImg,
    description:
      "We offer personalized concierge and relocation services, ensuring a seamless transition for individuals and businesses moving to Dubai.",
    details: ["Home search assistance", "Settling-in services", "Luxury lifestyle management"],
  },
  {
    title: "Legal & Advisory Services",
    img: legalAdvisoryImg,
    description: "We offer comprehensive legal and advisory services to protect your interests and ensure compliance.",
    details: ["Contract drafting", "Legal compliance", "Dispute resolution"]
  },
  {
    title: "Valuation & Appraisal",
    img: valuationAppraisalImg,
    description: "Our valuation and appraisal services provide accurate property assessments to guide your decisions.",
    details: ["Market value estimation", "Rental value assessment", "Investment analysis"]
  },
  {
    title: "Holiday Homes",
    img: holidayHomesImg,
    description:
      "Experience luxury living with our fully managed holiday home services, offering premium stays for travelers and excellent returns for property owners.",
    details: ["Short-term rentals", "Luxury vacation stays", "Property maintenance"],
  },
];

export default Services;