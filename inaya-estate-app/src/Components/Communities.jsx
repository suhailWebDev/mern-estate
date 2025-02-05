import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Import images
import downtown from '../Images/scenic-aerial-view-downtown-dubai-united-arab-emirates-with-skyscrapers-highways-colourful-travel-background.jpg';
import palmJumeirah from '../Images/vertical-view-skyscrapers-palm-trees-dubai-uae.jpg';
import marina from '../Images/dubai-marina.jpg';
import jvc from '../Images/shanghai-lujiazui.jpg';


// Community Data
const communities = [
    { id: "downtown-dubai", name: "Downtown Dubai", image: downtown },
    { id: "palm-jumeirah", name: "Palm Jumeirah", image: palmJumeirah },
    { id: "dubai-marina", name: "Dubai Marina", image: marina },
    { id: "jvc", name: "Jumeirah Village Circle", image: jvc },
  ];
  
  const Communities = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };
    return (
      <div className="communities-container"  style={{
        background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
        minHeight: "100vh",
      }}>
        <motion.h1 className="text-muted"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible">Popular Communities in Dubai</motion.h1> 
        <motion.p className="text-secondary"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible">Explore the most exclusive neighborhoods in Dubai.</motion.p>
        
        <div className="community-grid">
          {communities.map((community) => (
            <Link key={community.id} to={`/community/${community.id}`} className="community-card">
              <img src={community.image} alt={community.name} className="community-image" loading="lazy" />
              <div className="overlay">
                <h3>{community.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Communities;