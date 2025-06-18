import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Communities from './Communities'
import LatestBlog from './LatestBlog'
import PropertyList from './PropertyList'
import { FaWhatsapp } from 'react-icons/fa'

function Home() {
  const whatsappNumber = "9305611089"; // Replace with your admin number

  return (
    <>
      <Header/>
      <HeroSection/>
      <PropertyList/>
      <Communities/>
      <LatestBlog/>

      {/* ✅ WhatsApp Floating Icon */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in your real estate services.`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* ✅ Inline CSS or move to external file */}
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          border-radius: 50%;
          padding: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          z-index: 999;
          transition: transform 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            padding: 12px;
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>
    </>
  )
}

export default Home
