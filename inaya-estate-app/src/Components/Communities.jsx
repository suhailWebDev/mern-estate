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

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Communities = () => {
    return (
        <div className="communities-container" style={{
            background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
            minHeight: "100vh",
            padding: "50px 20px",
            textAlign: "center"
        }}>
            <motion.h1 
                className="text-muted"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                Popular Communities in Dubai
            </motion.h1>

            <motion.p 
                className="text-secondary"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                Explore the most exclusive neighborhoods in Dubai.
            </motion.p>

            <motion.div 
                className="community-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >
                {communities.map((community) => (
                    <motion.div 
                        key={community.id}
                        variants={fadeIn}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to={`/community/${community.id}`} className="community-card" style={{
                            position: "relative",
                            borderRadius: "10px",
                            overflow: "hidden",
                            cursor: "pointer",
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                            transition: "transform 0.3s ease",
                            display: "block"
                        }}>
                            {/* Community Name Overlay - Always Visible */}
                            <div className="overlay" style={{
                                position: "absolute",
                                top: "0",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(0, 0, 0, 0.5)",
                                color: "#fff",
                                fontSize: "20px",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                zIndex: "10",
                                textAlign: "center",
                                padding: "10px"
                            }}>
                                {community.name}
                            </div>

                            {/* Community Image */}
                            <motion.img 
                                src={community.image} 
                                alt={community.name} 
                                className="community-image" 
                                loading="lazy" 
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    transition: "opacity 0.3s ease",
                                    filter: "brightness(0.7)"
                                }}
                            />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Communities;
