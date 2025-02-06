import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample blogs with images
import blogImage1 from '../Images/abu-dhabi-seascape-with-skyscrapers.jpg';
import blogImage2 from '../Images/businessman-summer-city-with-three-women.jpg';
import blogImage3 from '../Images/cityscape-view-building-twilight-bangkok-thailand.jpg';
import blogImage4 from '../Images/woman-walking-near-chicago-river.jpg';

const blogs = [
  { id: 'dubai-real-estate-2024', title: 'Dubai Real Estate Market 2024', image: blogImage1 },
  { id: 'renting-guide-dubai', title: 'Guide to Renting in Dubai: Everything Expats Need to Know', image: blogImage2 },
  { id: 'top-10-neighbourhoods', title: 'Top 10 Neighbourhoods in Dubai for Property Investment', image: blogImage3 },
  { id: 'waterfront-communities', title: 'Best Waterfront Communities in Dubai: Where Luxury Meets Sea', image: blogImage4 },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const LatestBlog = () => {
  return (
    <div className="container-fluid" style={{
      background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
      minHeight: "100vh",
      padding: "50px 20px",
    }}>
      {/* Section Header */}
      <motion.div 
        className="d-flex justify-content-between align-items-center mb-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="fw-bold">Latest Blogs</h2>
        <Link to="/blogs">
          <motion.button 
            className="btn btn-outline-dark"
            variants={fadeIn}
          >
            View All →
          </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        className="row"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
      >
        {/* Featured Blog (Larger) */}
        <motion.div 
          className="col-lg-8 mb-4"
          variants={fadeIn}
        >
          <Link to={`/blog/${blogs[0].id}`} className="position-relative d-block">
            <motion.img 
              src={blogs[0].image} 
              alt={blogs[0].title} 
              className="img-fluid w-100 rounded shadow"
              style={{ height: "400px", objectFit: "cover" }} // Adjusted height & object-fit
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
            />
            <div 
              className="position-absolute text-white px-3 py-2"
              style={{
                bottom: "15px", left: "15px", 
                background: "rgba(0, 0, 0, 0.6)", 
                borderRadius: "5px"
              }}
            >
              <h4 className="m-0">{blogs[0].title}</h4>
            </div>
          </Link>
        </motion.div>

        {/* Sidebar Blogs (Smaller) */}
        <motion.div 
          className="col-lg-4"
          variants={staggerContainer}
        >
          {blogs.slice(1).map((blog) => (
            <motion.div 
              key={blog.id} 
              className="d-flex mb-3"
              variants={fadeIn}
            >
              <Link to={`/blog/${blog.id}`} className="d-flex align-items-center">
                <motion.img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="img-fluid rounded me-3 shadow"
                  style={{ width: '120px', height: '80px', objectFit: 'cover' }}
                  whileHover={{ scale: 1.05 }}
                />
                <h6 className="mb-1">{blog.title}</h6>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LatestBlog;
