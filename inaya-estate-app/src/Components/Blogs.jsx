import React from "react";
import { Link } from "react-router-dom";

import realestate from  "../Images/abu-dhabi-seascape-with-skyscrapers.jpg"
import renting from  "../Images/businessman-summer-city-with-three-women.jpg"
import neighbour from  "../Images/cityscape-view-building-twilight-bangkok-thailand.jpg"
import waterfront from  "../Images/woman-walking-near-chicago-river.jpg"
import buying from  "../Images/zq-lee-DcyL0IoCY0A-unsplash.jpg"
import expo from "../Images/ahmed-babiker-zcxyuVCQWoI-unsplash.jpg"

// Sample blogs data
const blogs = [
  {
    id: "dubai-real-estate-2024",
    title: "Dubai Real Estate Market 2024",
    description: "Discover the latest trends and insights in Dubai’s real estate market for 2024.",
    image:realestate ,
  },
  {
    id: "renting-guide-dubai",
    title: "Guide to Renting in Dubai: Everything Expats Need to Know",
    description: "Essential tips and legal insights for renting in Dubai as an expat.",
    image: renting,
  },
  {
    id: "top-10-neighbourhoods",
    title: "Top 10 Neighbourhoods in Dubai for Property Investment",
    description: "Explore the best locations for property investment in Dubai.",
    image: neighbour,
  },
  {
    id: "waterfront-communities",
    title: "Best Waterfront Communities in Dubai: Where Luxury Meets Sea",
    description: "Live in Dubai’s most luxurious waterfront communities.",
    image: waterfront,
  },
  {
    id: "buying-off-plan-uae",
    title: "Guide: Buying Off-Plan Property in the UAE",
    description: "Everything you need to know about off-plan property purchases in the UAE.",
    image: buying,
  },
  {
    id: "expo-2020-impact",
    title: "The Impact of Expo 2020 on Dubai Real Estate",
    description: "How Expo 2020 shaped Dubai’s property market and investment opportunities.",
    image: expo,
  },
];

const Blogs = () => {
  return (
    <div className="blogs-section" style={{
      background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
      minHeight: "100vh",
    }}>
      <div className="container">
        <h1 className="text-center fw-bold">Latest Real Estate Insights</h1>
        <p className="text-center mb-4">Stay updated with Dubai’s real estate market trends.</p>
        
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4 mb-4">
              <Link to={`/blog/${blog.id}`} className="blog-card">
                <img src={blog.image} alt={blog.title} className="img-fluid blog-img" />
                <div className="blog-info">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
